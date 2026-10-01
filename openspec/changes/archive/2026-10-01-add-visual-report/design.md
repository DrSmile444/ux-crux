## Context

See proposal.md for motivation. Constraints that shape the approach:

- Every generated package is self-contained: `build.mjs` copies `src/shared/*.md` into each package's `shared/`, and `review` carries its own `domains/` copy. A skill cannot rely on a sibling skill being installed, and Codex and skills.sh hosts give no reliable skill-to-skill call.
- The plugin has no runtime dependencies and runs in Claude Code, Codex, and any skills.sh host. Browser tools, a Python interpreter, or an artifact service are present on some hosts only.
- `report-contract.md` already defines the per-finding fields (`id`, `severity`, `evidence_status`, `observation`, `recommendation`, `source_ids`, `false_positive_conditions`, `validation_method`). The findings file extends it; the text report stays as specified there.
- Rule rows are `| ID | Rule | Evidence | Default severity | Sources |`. Sources is free text without URLs.

## Goals / Non-Goals

**Goals:**
- One renderer used two ways: by any review skill with the `report` argument, and by `/report` on an existing findings file.
- A report that is honest about its pictures: what was captured, what was reconstructed, what is proposed.
- A test ladder where the bulk of checks are free and deterministic, and costed live evals run only on explicit approval.

**Non-Goals:**
- URLs for rule sources (later change).
- Driving native mobile apps; mobile evidence stays user-provided screenshots unless a host device tool exists.
- Applying the chosen fixes to the user's code. The round loop records decisions; acting on them is ordinary agent work outside the report skill.
- A hosted or published report by default.

## Decisions

### D1. Decouple analysis and rendering through a findings file
Review skills write `findings.json`; the renderer reads only that file. Rendering instructions (`report-render.md`) and the template live in `src/shared/`, so every package can render without `/report` installed. `/report` is a thin skill that locates a findings file, renders it, and runs the decision round loop.
- *Alternative: a `report` flag inside `review` only.* Duplicates nothing but locks the feature to one skill and gives no way to re-render or re-triage later.
- *Alternative: review invokes `/report` as a sub-skill or subagent.* Not portable to Codex or skills.sh hosts; fails when only one skill is installed.

### D2. Data-driven template, one file
`report-template.html` holds the layout, styles, and a small script. The agent writes `findings.json` only; `render-report.mjs` (Node, no dependencies, shipped in `shared/`) checks it against the contract, embeds the images as `data:` URIs, and fills the template's one `<script type="application/json" id="findings">` block. Without Node, `report-render.md` gives a short Python fallback. The agent never hand-writes markup per finding. A `Content-Security-Policy` meta tag (`default-src 'none'`, `data:` images) guarantees the page loads nothing from the network, and reconstruction fragments render in a shadow root with scripts and event handlers stripped. This keeps output consistent across models and makes the render check deterministic. The structure follows the proven owner-question page: sticky group nav (Blockers, Major, Flow map, Moderate/minor, Checklist), numbered cards, picture with a "Where to look" caption, option list, comment, a dock with progress and "Copy decisions". Choices persist in `localStorage` keyed by report id, wrapped in try/catch.
The template follows the claude.ai artifact page contract (color tokens on `:root`, dark mode under `prefers-color-scheme` and `data-theme`, explicit `body` background, 16px gutter, system fonts, no external loads), so a host that can publish pages can publish it unchanged.

### D3. Annotation in CSS, not in an image pipeline
Markers (`box`, `dash`, `gap`, `line`) are absolutely positioned elements over an `<img>` with coordinates in percent of the image, so they scale with the page and need no Pillow or Node image library. Screenshots are embedded as base64 JPEG (max width 1280px, quality about 70). The renderer warns when the file exceeds 8 MB and drops pictures from moderate/minor findings first.

### D4. Picture tiers
1. Annotated screenshot: a capture exists.
2. Recreated fragment: DOM/CSS or source code is available; the agent rebuilds only the affected fragment in scoped inline HTML, shows "as found" (labeled reconstruction) and "with fix" (labeled proposal).
3. Schematic: CSS/SVG boxes and labels for layout, flow, timing, or any case without capture.
Pictures go to blockers, majors, and Top 3 items; other findings get text cards to cap cost.

### D5. Options model
`options[]` items: `{ key, kind: "fix" | "wont-fix" | "not-an-issue" | "defer" | "verify-first", text, recommended }`. The renderer appends the triage options when the file omits them, so a review only writes fix options. Copy format: `<id> (<rule ids>): <key> — <comment>`. Round loop: pasted lines are parsed, written to each finding's `decision`, and the same `report.html` is re-rendered.

### D6. Flow capture
A shared `flow-capture.md` step runs before rule evaluation when the trigger in the review spec holds. Tool discovery order: Playwright MCP, Chrome DevTools MCP, a Playwright CLI (`npx playwright`), any other browser tool the host lists; none found → ask the user (screenshots, or schematic-only). For each step it records URL, title, a capture, the visible primary action, and reachable non-mutating states (inline validation, empty submit blocked client-side). The step cap is 12; branches are asked about. The data-change gate is a hard stop before any submit-like action.

### D7. Files and location
Default output folder: `ux-crux-reports/<YYYY-MM-DD>-<slug>/` in the working directory, holding `findings.json` and `report.html`. The skill tells the user the path and suggests adding the folder to `.gitignore`; it does not edit `.gitignore` itself.

### D8. Invocation
`report` is model-invocable like the other six skills. Its description is narrow ("render an existing ux-crux review as an HTML triage report"), so a plain review request routes to `review` and not to `report`. A trigger eval pair guards this.

### D9. Version
New skill and new behavior in every skill: minor bump to `0.2.0`.

## Testing strategy

Four layers, cheapest first. Layers 0 and 1 cost no model credits and gate every build; layer 2 costs credits and runs only on the owner's explicit go-ahead per run; layer 3 is manual.

```
L0  npm run validate / npm run test          free, deterministic, always
L1  npm run test:report  (dev-only browser)  free, deterministic, before release
L2  npm run test -- --live  (claude plugin eval)  costed, explicit approval only
L3  manual acceptance on a real site, Claude Code + Codex
```

**L0 — contract and build checks (`scripts/`).**
- Findings fixtures (`evals/report/fixtures/*.findings.json`) validate against the contract: required fields, enum values from the evidence and severity models, 1–3 fix options, exactly one recommended, `location` steps exist in the flow list.
- Every `source_ids` entry resolves to a real rule row in `src/skills/**/references/*.md`; the fixture's quoted Sources text equals the catalog cell. This also catches catalog edits that break existing fixtures.
- Template static check: no `http(s)://` in `src`/`href`/`@import`, the findings data slot exists.
- Build produces seven packages; every `shared/report-template.html` is byte-identical to source.

**L1 — render check (`scripts/test-report.mjs`, `playwright` as a dev dependency, not a plugin dependency).**
Renders each fixture into a page and asserts:
- no console errors and zero network requests;
- one card per finding, each with its rule IDs and Sources text, exactly one "Recommended" badge;
- reconstruction/proposal labels on every non-capture picture; no "before" picture on `NOT_ASSESSABLE`;
- flow map present when steps > 1, unreached step marked;
- checklist appendix present only for the `full` fixture, VIOLATED rows link to cards;
- selecting options and pressing "Copy decisions" yields the golden lines; choices survive a reload;
- no horizontal scroll at 375px; light and dark both render.
Fixtures: `checkout-single` (the existing checkout eval scenario), `signup-flow` (4 steps, one transition finding, one unreached step), `full-mode` (with checklist), `checkout-uk` (Ukrainian strings). The same script writes `assets/report-preview.png` from `signup-flow` for the README.

**L2 — live evals (`evals/`, graded by `claude plugin eval`).**
- `review/checkout-flow-report`: the checkout prompt plus "make a report" → a findings file and an HTML file exist; findings match the text report; every finding has rule IDs and options.
- `report/render-existing`: a fixture findings file is given → page rendered, no new findings added.
- `report/no-findings` → the skill asks for a review first and writes nothing.
- `report/decisions-roundtrip`: decision lines pasted → findings file updated, same path re-rendered.
- `report/ukrainian` → page text in Ukrainian, rule IDs unchanged.
- `review/signup-flow-capture`: a static fixture site in `evals/fixtures/signup-flow/` (four pages, planted issues: back navigation clears the email field, a button label that does not match its destination heading, a vague inline error, a final "Create account" submit) → the agent walks all steps, reports the transition finding with `from`/`to`, and stops to ask before submitting.
- Triggers: `report-should-trigger` ("turn the review you just did into an HTML report"), `review-not-report` (plain review request does not render a page).

**L3 — manual acceptance.**
The owner runs `/review full report` on a real registration flow of their choice in Claude Code and once in Codex, checks the page on a phone width and offline, pastes decisions back once, and reviews `assets/report-preview.png` before it is committed. Distribution checks: `claude plugin validate ./plugin --strict`, Codex `validate_plugin.py`, `npx skills add . --list` shows seven skills.

## Risks / Trade-offs

- [Live evals that grant Bash cannot start where `~/.docker` holds a symlink (Docker Desktop's `cli-plugins`)] → the harness refuses those runs before turn 0; run them on a machine without such links, and stage fixture files into the case working directory first.
- [LLM graders see only the final answer text] → routing cases assert skill calls with `tool_used` graders.
- [Model writes inconsistent markup] → data-driven template; the model writes JSON only; L1 asserts structure.
- [Invented alternatives to fill option slots] → spec: 1–3 options, each must satisfy the cited rule; renderer never requires more than one.
- [Reconstruction mistaken for evidence] → mandatory labels; no "before" for `NOT_ASSESSABLE`; L1 checks the labels.
- [Flow capture causes real side effects] → hard consent gate before submit-like actions; fixture eval asserts the stop.
- [Large files from screenshots] → JPEG downscale, 8 MB warning, pictures only for top findings.
- [Personal data in signed-in screenshots] → local file only; warning before any publish.
- [Live eval sandbox lacks a browser tool] → spike early (task 1.1); if `claude plugin eval` cannot expose one, the flow-capture case moves to L3 manual runs against the same fixture site.
- [Cost of flow capture on every live review] → it runs only when the trigger holds (live evidence and a named flow), capped at 12 steps.

## Migration Plan

Additive. Reviews without `report` behave as before; no findings file is written. Rollback: revert the change and rebuild; no user data format is persisted outside the user's own report folders.

## Open Questions

- Exact JPEG size and quality thresholds; tune after the first real-site run.

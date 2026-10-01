## Why

ux-crux reviews end in a text report. That works for the agent's own user, but an independent UX audit is read by someone else — a designer, a product owner, a client — who needs to see what is wrong, which rule says so, where the rule comes from, and how to fix it, then decide which fixes to take. Reviews of live web flows also depend on the agent choosing to walk every step by itself; a registration or checkout flow is often reviewed from its first page only, and the report does not say so.

## What Changes

- **New `report` skill** (`/report` in the plugin, `ux-crux-report` on skills.sh): renders a review's findings as one self-contained, inline HTML triage page. Each finding shows its rule ID, the rule's source text, a picture (annotated screenshot, recreated UI fragment, or schematic), one to three fix options with exactly one recommended, plus the triage options "won't fix", "not an issue", and "defer", and a comment field. A "Copy decisions" button produces lines the reader pastes back to the agent, which records them and re-renders the same page. The `report` skill renders findings; it never performs a review itself.
- **`report` argument on all six review skills** (for example `/review full report`, "review this checkout and make a report"): after the review, the skill writes its findings to a `findings.json` file and renders the page with the same shared instructions. The argument combines with `smart`/`full`. Without it, reviews behave as they do today.
- **Machine-readable findings contract** in `src/shared/`: the existing per-finding fields plus `location` (flow step or step transition) and `options` (fix and triage options). The text report shape in `report-contract.md` stays the same.
- **Automatic flow capture** in all six review skills: when the evidence is a live web page or running build and the request names a task or flow (registration, checkout, onboarding), the skill walks the flow step by step with whatever browser tool the host provides (Playwright MCP, Playwright CLI, Chrome DevTools MCP), captures each step and its error/empty states, and builds a flow map. It asks before any action that changes data (submit, payment, account creation, email send). Steps it cannot reach are reported as `NOT ASSESSABLE` with the reason. With no browser tool, it asks the user for screenshots or proceeds with schematic pictures only.
- **Report language** follows the language the user writes in; English is the default.
- **Build**: `src/shared/` ships a non-Markdown asset (`report-template.html`); the build copies it into every package and `validate` checks it for drift. The build generates a seventh skill package.
- **Docs**: README gains a "Visual report" section with a rendered example screenshot; CHANGELOG entry; version bump.

## Capabilities

### New Capabilities
- `ux-crux/report`: the `report` skill — rendering findings as an inline HTML triage page, the picture tiers, fix and triage options, the decision round loop, and report language. This is a seventh skill; the project owner chose it explicitly as a thin renderer beside the six review skills, not as a new lens.

### Modified Capabilities
- `ux-crux/review`: adds the `report` argument, the machine-readable findings file with `location` and `options`, and automatic flow capture with its data-changing-action gate. These requirements apply to the review skill and to each domain skill that applies the shared behavior, the same way the Full mode requirement does.
- `ux-crux/distribution`: the build copies non-Markdown shared assets into every package and validates them for drift; the distributions contain seven skills.

## Impact

- `src/shared/`: new `findings-contract.md`, `report-render.md`, `flow-capture.md`, `report-template.html`; `report-contract.md` cross-references the findings file.
- `src/skills/`: new `report/`; every existing `SKILL.md` gains the `report` argument and the flow-capture step.
- `scripts/build.mjs`, `scripts/validate.mjs`, `scripts/test.mjs`; new dev-only report render check.
- `evals/`: new report and flow-capture cases, a static multi-step fixture site, a hand-written findings fixture.
- `README.md`, `CHANGELOG.md`, `assets/` (example screenshot, held uncommitted until the owner reviews it), `package.json` version.
- No rule-content change: no rule rows are added, moved, or renumbered, so the rule count and the Evidence base list stay as they are.
- No runtime dependency: browser tools are used only when the host provides them.

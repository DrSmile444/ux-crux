## 1. Spikes

- [ ] 1.1 Check whether `claude plugin eval --allow-tools` can give an eval run a browser (Playwright MCP via `mcp__*`, or Playwright CLI via `Bash`) against a local static page; record the result in design.md Risks and verify by one manual trial run approved by the owner (the CLI accepts `--allow-tools` for `Bash` and `mcp__*`, and `npm run test -- --live` passes those grants; the trial run is pending the owner's approval)
- [x] 1.2 Check that `npx playwright` runs headless Chromium on this machine for dev-only render checks; verify by rendering a blank page to a PNG in the scratchpad

## 2. Shared contract and template

- [x] 2.1 Write `src/shared/findings-contract.md` (fields from report-contract.md plus `location`, `options`, `decision`, review mode, lenses, flow steps, Category health, Top 3, Missing states, checklist) with one full example; verify the example covers every field
- [x] 2.2 Add one line to `src/shared/report-contract.md` that names the findings file as the machine-readable form of the same report; verify the required text sections are unchanged
- [x] 2.3 Build `src/shared/report-template.html` (data slot, group nav, flow map, finding card, CSS markers, picture tiers with reconstruction/proposal labels, option list, comment, dock with "Copy decisions", localStorage with try/catch, full-mode checklist appendix, light/dark tokens); verify by opening it with each L1 fixture
- [x] 2.4 Write `src/shared/report-render.md` (where the files go, how to fill the template, picture tier choice, which findings get pictures, image size limits, language rule, publish-only-on-consent, decision round loop); verify every requirement in `specs/ux-crux/report/spec.md` maps to a section
- [x] 2.5 Write `src/shared/flow-capture.md` (trigger, tool discovery order, per-step capture, non-mutating states, 12-step cap, branch question, data-change consent gate, no-tool fallback, NOT_ASSESSABLE reporting); verify every flow requirement in `specs/ux-crux/review/spec.md` maps to a section

## 3. Skills

- [x] 3.1 Create `src/skills/report/SKILL.md` (model-invocable, narrow description, locate findings file, render, round loop, no-findings behavior); verify against the report spec scenarios
- [x] 3.2 Add the `report` argument and the flow-capture step to `src/skills/review/SKILL.md` and its description; verify `/review full report` wording parses as both mode and report
- [x] 3.3 Add the same `report` argument and flow-capture step to the five domain `SKILL.md` files; verify all six descriptions document `report`

## 4. Build and validate

- [x] 4.1 Make `scripts/build.mjs` copy every file in `src/shared/` (not only `*.md`) and generate the `report` package in both distributions; verify `npm run build` produces seven packages, each with `shared/report-template.html`
- [x] 4.2 Extend `scripts/validate.mjs` drift checks to non-Markdown shared files; verify by hand-editing one generated template copy, seeing validate fail, then rebuilding
- [x] 4.3 Update `skills.sh.json` grouping for the new skill; verify `npx skills add . --list` shows exactly seven `ux-crux-<name>` skills

## 5. Tests

- [x] 5.1 Add findings fixtures `evals/report/fixtures/{checkout-single,signup-flow,full-mode,checkout-uk}.findings.json`; verify each one passes 5.2
- [x] 5.2 Add an L0 check to `scripts/test.mjs`: fixtures follow the contract, every `source_ids` entry resolves to a real rule row, quoted Sources text equals the catalog cell, the template loads nothing external; verify `npm run test` passes and fails on a deliberately broken fixture
- [x] 5.3 Add `scripts/test-report.mjs` and an `npm run test:report` script (dev-only Playwright through npx) with the L1 assertions from design.md; verify it passes on all four fixtures
- [x] 5.4 Add the static fixture site `evals/fixtures/signup-flow/` with the four planted issues; verify by walking it by hand in a browser
- [x] 5.5 Add live eval cases `review/checkout-flow-report`, `report/render-existing`, `report/no-findings`, `report/decisions-roundtrip`, `report/ukrainian`, `review/signup-flow-capture`, and trigger cases `report-should-trigger`, `review-not-report`; verify `npm run test` structural preflight passes (the live run itself happens only in 7.3 with approval)

## 6. Docs

- [x] 6.1 Add `assets/report-preview.png` from the `signup-flow` fixture report (the owner captured the final image; `npm run test:report -- --preview` writes a draft to `ux-crux-reports/`)
- [x] 6.2 Add a "Visual report" section to README.md (what it is, `/review full report` and `/report` examples, triage loop, flow capture and consent gate, the preview image); update the skill table and the "six skills" wording to seven where it counts packages; verify the README renders the image locally
- [x] 6.3 Add a CHANGELOG.md entry for 0.2.0 that lists the new skill, the `report` argument, flow capture, and the build change; verify it names no rule IDs as added (no rule content changed)

## 7. Release gate and acceptance

- [x] 7.1 Bump `package.json` to 0.2.0 and run `npm run build && npm run sync-version && npm run validate`; verify all three succeed
- [x] 7.2 Run `claude plugin validate ./plugin --strict` and the Codex `validate_plugin.py ./plugin`; verify both pass
- [ ] 7.3 Ask the owner for approval, then run the live evals from 5.5 with `npm run test -- --live` (with `--allow-tools` from 1.1 for the flow case); verify every case passes or record failures for follow-up
- [ ] 7.4 Owner acceptance: `/review full report` on a real registration flow in Claude Code and once in Codex, page checked at phone width and offline, one decision round pasted back, `assets/report-preview.png` approved before commit

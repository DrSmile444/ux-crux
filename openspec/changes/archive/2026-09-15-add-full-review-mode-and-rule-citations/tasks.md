## 1. Report contract: exhaustive listing and rule-ID citation everywhere

- [x] 1.1 In `src/shared/report-contract.md`, strengthen the "Moderate/minor findings" required-section wording to match sections 1-2's "every ... finding" guarantee (it currently reads "listed ... for completeness, not as the headline"), and add a line making explicit that the Top-3 list is an additional ranked highlight, not a replacement for listing every finding — verify by re-reading the section against `specs/ux-crux/review/spec.md`'s "A review finds ten moderate/minor issues alongside its blockers and majors" scenario.
- [x] 1.2 Extend `report-contract.md`'s worked example to show a rule-ID citation on a Category Health line (e.g. "Accessibility: 1 blocker (touch target, T02)...") and on a Top-3 item (e.g. "1. [T02] Enlarge the submit control's..."), alongside the existing Blockers/Major `Source:` lines — verify by re-reading the example against the "Category Health and Top-3 sections state a finding without a traceable rule ID" scenario.
- [x] 1.3 Update the "Rule for skills" closing section to state that every section of the report — not only individual findings — must cite the rule ID(s) it is based on.

## 2. Usability: mobile-viewport-general rules apply to mobile web

- [x] 2.1 In `src/skills/usability/references/mobile.md`'s "How the usability skill should apply these" section, add wording that explicitly splits `mobile.md`'s rules into genuinely native-only platform contracts (N02R, N03R, N04R, T06-T09) versus mobile-viewport-general rules that also apply to mobile web evidence (L01, L05, L07, L08), and state that mobile web evidence must still be evaluated against the latter group rather than treating the whole file as inapplicable — verify by re-reading against all three scenarios in `specs/ux-crux/usability/spec.md`'s new "Mobile-viewport-general rules apply to mobile web evidence" requirement.
- [x] 2.2 In `src/skills/usability/SKILL.md`'s platform-identification step (step 1), add a cross-reference to this distinction so the skill resolves "mobile web vs. native" before deciding which `mobile.md` rules apply, rather than excluding the file wholesale for non-native evidence.

## 3. Full-coverage "Full" mode across all six skills

- [x] 3.1 In `src/skills/review/SKILL.md`, add an argument-handling step: recognize a "full" argument (case-insensitive substring match) to trigger a mandatory rule-by-rule sweep across every reference file loaded for the request's applicable lenses (recording violated / not violated / not assessable / not applicable per rule, before the narrative report); recognize "smart" or no argument as today's judgment-driven default; ask for clarification on any other non-empty argument value. Do not hardcode a rule-ID list — instruct sweeping every row of each loaded reference table.
- [x] 3.2 Repeat 3.1 for `src/skills/usability/SKILL.md`, scoped to the reference files it loads for the request (`core.md`, and conditionally `mobile.md`, `visual-hierarchy.md`, `affordances.md`, `voice.md`).
- [x] 3.3 Repeat 3.1 for `src/skills/accessibility/SKILL.md`, scoped to `core.md` and `mobile.md`.
- [x] 3.4 Repeat 3.1 for `src/skills/psychology/SKILL.md`, scoped to whichever topic file(s) (`cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, `habits.md`, `gamification.md`) it would normally load for the request.
- [x] 3.5 Repeat 3.1 for `src/skills/product/SKILL.md`, scoped to `core.md`, `information-architecture.md`, `voice-tone.md`, and conditionally `web.md`.
- [x] 3.6 Repeat 3.1 for `src/skills/trust/SKILL.md`, scoped to `core.md` and `mobile.md`.
- [x] 3.7 Update each of the six skills' `description` frontmatter field to document the accepted `full`/`smart` argument values in prose (matching the pattern `code-review`'s own description uses for its effort levels), since `argument-hint` autocomplete is not available to a marketplace-distributed `SKILL.md` package — verify by reading each updated `description` field back and confirming it states both accepted values in plain language.

## 4. Documentation and evidence trail

- [x] 4.1 Add a `CHANGELOG.md` entry (new version heading, one above the current entry) describing: the report-contract completeness/citation strengthening, the `mobile.md` mobile-web applicability clarification (no rule IDs added/removed), and the new opt-in Full mode across all six skills — in the same style as prior entries.
- [x] 4.2 Confirm no file under `openspec/changes/add-full-review-mode-and-rule-citations/` or `src/skills/**` references the private `local/` research folder by path or filename, per this repo's `CLAUDE.md` — grep for `local/` across both trees and confirm zero matches. Found and fixed two path-literal references in `proposal.md` and `design.md`; remaining `grep` hits are the task description itself and an unrelated "global or local menu" phrase in `usability/references/core.md`.

## 5. Build, version, and validate

- [x] 5.1 Bump `package.json`'s version per this project's one-SemVer-for-the-whole-plugin convention (this is a distributed-content change to all six skills' `SKILL.md` and to `src/shared/report-contract.md` and `src/skills/usability/references/mobile.md`, so it requires a version bump). Bumped 0.1.22 → 0.1.23.
- [x] 5.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — the standing release gate for any change to `src/skills/**` or `src/shared/**`. All three passed; validate.mjs confirmed the version bump matched the content change and updated its snapshot.
- [x] 5.3 Spot-check one generated copy (e.g. `skills/ux-crux-review/shared/report-contract.md` and `plugin/skills/review/SKILL.md`, or the plugin's equivalent path) to confirm the build propagated the source edits correctly, rather than asserting correctness from the source files alone. Confirmed: the citation-everywhere wording and the review skill's new "Mode." paragraph both appear in the generated `skills/` and `plugin/skills/` copies, and both plugin manifests plus the generated `ux-crux-review` SKILL.md report version 0.1.23.

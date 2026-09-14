## 1. Psychology: Gestalt gap rules

- [x] 1.1 Add four new Gestalt rules (Continuation, Closure, Common Fate, Symmetry & Order) to `src/skills/psychology/references/attention.md`, continuing the `PA` ID series after the existing `PA13`, each with its own row (rule text, evidence strength, default severity, sources citing Wertheimer/Koffka/Köhler via Mark Wells, *User Experience Design*) and verify the four new rows are distinct from and cross-reference the existing Similarity (`PA06`)/Proximity (`PA05`)/Common Region (`PA07`)/Figure-Ground (`PA08`) rows without duplicating them.
- [x] 1.2 Update the "How the psychology skill should apply these" section in `attention.md` to instruct when to check the four new rules, and verify the file still reads as one coherent application procedure (no orphaned rule with no application guidance).

## 2. Product: content authenticity, chart-type-fit, audience-calibrated polish

- [x] 2.1 Add a new content-authenticity rule to `src/skills/product/references/core.md`'s Content / UX writing table (next available `C` ID), covering source/citation/date/author-attribution signals, and verify it is distinct from the existing `C01`-`C06`/`C13`-`C20` rows (no duplicate coverage).
- [x] 2.2 Add a new chart/data-visualization type-fit rule to the same table (next `C` ID), citing Kosslyn's graphical-perception rules and Mollerup's quantities/locations/connections taxonomy, explicitly cross-referenced against and distinguished from the existing `C20` expert-knowledge-trap rule.
- [x] 2.3 Add a new audience-calibrated visual-polish rule to the same table (next `C` ID), citing Daniel Miller's "trapping the audience" research, with an applicability note requiring a verified target audience before the rule can be scored (`NOT ASSESSABLE` otherwise, consistent with this file's existing applicability-note pattern).
- [x] 2.4 Update "How the product skill should apply these" in `core.md` to reference all three new rules, and verify the numbered walkthrough still reads as one coherent sequence.

## 3. Trust: post-interaction reassurance

- [x] 3.1 Add a new rule to `src/skills/trust/references/core.md`'s onboarding/trust or destructive-action table (next available ID) covering post-transaction/off-screen reassurance during a silent wait, citing the book's end-to-end scenario / pinch-point mapping research, and verify it is distinct from the existing `S06`/`S07` (usability empty/error-state) rules it neighbors conceptually — state explicitly in the rule text which file owns which half of the concern.
- [x] 3.2 Update "How the trust skill should apply these" in `core.md` to reference the new rule and verify the section still reads coherently.

## 4. Accessibility: digital equity / graceful degradation

- [x] 4.1 Add a new rule to `src/skills/accessibility/references/core.md` (next available `X` ID) covering hardware/connectivity/digital-literacy assumptions, citing Kranzberg's First Law and danah boyd's/the book's platform-bias research, with an explicit applicability note exempting a verified specialized-enterprise-tool audience.
- [x] 4.2 Update "How the accessibility skill should apply these" in `core.md` to reference the new rule and verify it does not overlap with the existing WCAG-sourced rows (state the distinction explicitly in the rule text).

## 5. Usability: Voice UI addendum

- [x] 5.1 Create `src/skills/usability/references/voice.md` (new file, following the `mobile.md`/`web.md` addendum precedent) with two new rules — VUI command-scope limiting and sonic-persona/tone alignment — each with evidence strength, default severity, and sources citing the book's Voice UI section, plus a "How the usability skill should apply these" section.
- [x] 5.2 Update `src/skills/usability/SKILL.md` to list `voice.md` alongside `core.md`/`mobile.md`/`web.md`... wherever the reference-file list currently enumerates them, and verify the skill's file listing is complete and consistent with what actually ships.

## 6. Review: Aesthetic-Usability Effect and 6/8 threshold

- [x] 6.1 Sharpen `V01` in `src/skills/review/references/review-model.md` with the Aesthetic-Usability Effect as a named testing-evaluation caution (no new rule ID), and verify the existing `V01` row still reads as one coherent rule after the addition.
- [x] 6.2 Enrich `V02`'s existing citation with the book's 6-of-8-participant convergence threshold (no new rule ID), and verify the addition doesn't contradict or duplicate the existing 5-user citation.

## 7. Citation-only enrichments (no new rule IDs, no behavior change)

- [x] 7.1 Add a citation to Gillian Crampton Smith's six basics of interaction design in `src/skills/usability/references/affordances.md` and/or `core.md`'s Actions/System-status rationale text, as additional named-source backing — verify no rule text's actual requirement changes, only its cited sources.
- [x] 7.2 Add a citation to the Rushkoff/Koneya & Barbour 7-38-55 non-verbal-communication finding in `src/skills/usability/references/visual-hierarchy.md`'s `VH01` rationale — verify no rule text's actual requirement changes, only its cited sources.

## 8. Documentation: changelog, evidence base, and rule-count signal

- [x] 8.1 Add a `CHANGELOG.md` entry for this pass (next version number) describing every new rule, every citation-only enrichment, and what was scoped out, in the same style as the 0.1.6-0.1.15 entries, and verify it accurately lists every touched rule ID.
- [x] 8.2 Add Mark Wells, *User Experience Design: An Introduction to Creating Interactive Digital Spaces* (Laurence King Publishing, 2023) to `README.md`'s "Evidence base" section.
- [x] 8.3 Recount every rule-table row across `src/skills/**/references/*.md` (a rule row matches the `| <ID> | ... |` table-row pattern used throughout this project; folk-rule-guard tables and non-rule tables are excluded) and update `README.md`'s opening paragraph with the new total rule count and a short phrase naming how many domains/skills it spans, so the number is a) accurate as of this change and b) placed as the first-paragraph signal the user asked for — verify the recount matches the actual new total (283 before this change + the new rows added in tasks 1-5 above).

## 9. Config: keep the rule count from going stale

- [x] 9.1 Add a new rule to `openspec/config.yaml`'s `rules.tasks` list requiring that any future task list adding rule content to `src/skills/**/references/*.md` include a task to recount rule-table rows and update `README.md`'s opening-paragraph rule count — mirroring the existing CHANGELOG/README-evidence-base reminder already in that list — and verify `openspec/config.yaml` still parses/validates (run the `validate-openspec-config` check).

## 10. Build & validate (release gate)

- [x] 10.1 Run `npm run build && npm run sync-version && npm run validate` and confirm all three succeed with no errors, no version-bump omission, and no shared-model drift.

## 1. Psychology: new gamification.md

- [x] 1.1 Create `src/skills/psychology/references/gamification.md` opening with the Elements of Game Design Model framework (Play & Challenges core -> Conflicts & Choices -> Feedback Loops -> Goals & Rewards -> Imaginary World) and the `(Play+Challenges)+(Rewards+Goals)=Game` legitimacy test; verify the file exists and follows the existing reference-file structure (intro, rule table, "How the psychology skill should apply these" section).
- [x] 1.2 Add `PG01` (Flow / challenge-skill balance, Csikszentmihalyi) to the rule table with evidence/severity/sources columns matching the format of every other psychology rule table.
- [x] 1.3 Add `PG02` (intrinsic-challenge surfacing vs. sugarcoating, Alfie Kohn) to the rule table.
- [x] 1.4 Add `PG03` (set completion & collection motifs) to the rule table.
- [x] 1.5 Add `PG04` (personal feedback-loop "mirror effect") to the rule table.
- [x] 1.6 Add `PG05` (constraint-as-focus, distinct from `PB08`) to the rule table, cross-referencing `PB08` explicitly in the rule text.
- [x] 1.7 Add a closing "How the psychology skill should apply these" section that explicitly cross-references `PB12` and `PH01`-`PH04` as the deceptive-use/guardrail side of game mechanics this file complements, and routes `PG01`-`PG05` through `ethics.md`'s four-gate test.
- [x] 1.8 Register `gamification.md` in `src/skills/psychology/SKILL.md`'s References list and procedure step 1's file list, alongside the other topic files; verify by re-reading `SKILL.md` and confirming the new filename appears in both places.

## 2. Psychology: point additions to existing files

- [x] 2.1 Add `PM08` (channel factors / concrete execution-intention prompts, Lewin/Leventhal tetanus-shot study) to `src/skills/psychology/references/motivation.md`'s rule table.
- [x] 2.2 Add `PM09` (Endowed Progress Effect as a legitimate head-start, Nunes & Drèze) to the same table, with rule text explicitly distinguishing it from `PM07`'s fabricated-progress violation.
- [x] 2.3 Enrich `motivation.md`'s "How the psychology skill should apply these" section with Fogg's Trigger→Ability→Motivation troubleshooting order as an application note to `PM01`/`PM05` (no new rule ID, no rule-table row change).
- [x] 2.4 Add `PB13` (negative-social-proof risk + high-density visual social proof vs. static text testimonials) to `src/skills/psychology/references/behavioral-economics.md`'s rule table, cross-referencing `PB06` in the rule text.
- [x] 2.5 Add a new row to `src/skills/psychology/references/ethics.md`'s "Evidence-strength corrections for popular psychology claims" table for choice overload / the "jam study" (Iyengar & Lepper; contested by Scheibehenne et al.'s meta-analysis).
- [x] 2.6 Verify each edited file's "How the psychology skill should apply these" section still accurately describes every rule in that file's table (add one sentence for each new rule where the section groups rules by theme).

## 3. Usability: affordances and forms

- [x] 3.1 Add `AF03` (physical depth-cue/lighting consistency, the "physical model" test) to `src/skills/usability/references/affordances.md`'s rule table, extending the Physical/Sensory affordance types this file already defines.
- [x] 3.2 Update `affordances.md`'s "How the usability skill should apply these" section to describe when to apply `AF03` (e.g. when the evidence shows layered/elevated UI elements with shadows or depth cues).
- [x] 3.3 Add `F25` (no manual entry of system-derivable data, e.g. card-type auto-detection) to `src/skills/usability/references/core.md`'s Forms & input table, distinct from `F03`/`F18`/`F21`.
- [x] 3.4 Verify no existing rule ID in `usability` is duplicated or reused by checking `grep -rn "AF03\|F25" src/skills/usability/references/` returns only the newly added rows.

## 4. Product: dynamic button copy

- [x] 4.1 Add `C24` (dynamic, outcome-explicit button copy with real-time value substitution) to `src/skills/product/references/core.md`'s Content table, distinct from `C02`.
- [x] 4.2 Update `core.md`'s "How the product skill should apply these" procedure section to mention checking `C24` when reviewing a primary submission/checkout button.

## 5. Review: role-play audit technique

- [x] 5.1 Add the "Bringing Browser to Life" two-person role-play UI audit as a named technique note in `src/skills/review/references/review-model.md`, following the existing Squint-test precedent (non-rule, no new `V` ID).
- [x] 5.2 Cross-reference the new technique from `V06`'s named-technique list (Five-Second Test, Black Hat Session) so reviewers discover it alongside the existing options.

## 6. Rule-count recount and documentation

- [x] 6.1 Recount every rule-table row (`| <ID> | ... |` pattern, excluding folk-rule-guard and other non-rule tables) across `src/skills/**/references/*.md` and confirm the new total is 305 (294 + `PG01`-`PG05` + `PM08` + `PM09` + `PB13` + `AF03` + `F25` + `C24` = 11 new rows).
- [x] 6.2 Update `README.md`'s opening paragraph's rule count from 294 to the confirmed recount, and add Stephen P. Anderson, *Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences* to the "Evidence base" section's list of comparison-pass sources.
- [x] 6.3 Add a new `CHANGELOG.md` entry (bump version per semver rules already used by prior entries) describing this pass in the same "what's added / what's scoped out / what's already covered" structure as the 0.1.12-0.1.16 entries, naming every new rule ID and the book.

## 7. Build and validation gate

- [x] 7.1 Run `npm run build && npm run sync-version && npm run validate` and confirm all three succeed with no errors, per the standing release gate for any change touching `src/skills/**` or `src/shared/**`.
- [x] 7.2 Spot-check the generated `skills/ux-crux-psychology/references/gamification.md` and `plugin/skills/psychology/references/gamification.md` exist and match the `src/` source, confirming the build picked up the new file (generated output is never hand-edited).

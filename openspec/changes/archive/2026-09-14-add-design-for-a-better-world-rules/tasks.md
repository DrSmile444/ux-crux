## 1. Usability: delayed-feedback, crisis interaction, societal affordance

- [x] 1.1 Add a new rule to `src/skills/usability/references/core.md`'s System status section (next available `S`-ID) covering delayed-effect controls exposing rate/delay, citing Don Norman's air-conditioner/thermostat mental-model case, and verify it is distinct from and cross-references the existing S01 (general feedback) and S04 (progress indication) rows without duplicating them.
- [x] 1.2 Add a new crisis/high-stress interaction rule to `src/skills/usability/references/core.md` (a new subsection, e.g. after Responsiveness or alongside Actions — choose the best fit while writing) covering fast/visceral-system design for emergency/acute-time-pressure flows, citing Norman's SCUBA weight-belt-drowning case and pediatric-ICU alarm-cacophony case, and verify the applicability boundary (does not apply to calm, non-urgent flows) is stated explicitly.
- [x] 1.3 Add a new rule to `src/skills/usability/references/affordances.md` extending the AF-series (next `AF`-ID) covering societal (convention-based) affordance/signifier mismatches, citing Norman's societal-vs-physical-affordances distinction directly, and verify it is explicitly distinguished from AF01's four physical/cognitive/sensory/functional affordance types (a different framework/source, not a fifth row in that table).
- [x] 1.4 Update "How the usability skill should apply these" in `core.md` and `affordances.md` to reference all three new rules, and verify each file still reads as one coherent application procedure.

## 2. Product: aggregate-number fallacy, narrative grounding, automation complacency

- [x] 2.1 Add a new rule to `src/skills/product/references/core.md`'s Content table (next `C`-ID) covering composite dashboards/scores hiding sub-category trade-offs, citing Kate Raworth's Doughnut Model and the GDP-pollution-counted-as-positive example, and verify it is explicitly distinguished from the existing C20 (audience-appropriate complexity) and C22 (chart-type fit) rows.
- [x] 2.2 Add a new rule to the same table (next `C`-ID) covering narrative-context grounding for data-dense screens about a human subject, citing Norman's "Medical Cart Syndrome" hospital-rounds example, and verify it is distinct from C21 (content-credibility signals).
- [x] 2.3 Add a new rule to `src/skills/product/references/core.md`'s Purpose & task section (next `P`-ID) covering the semi-automation passive-monitoring complacency trap, citing Norman's self-driving-car complacency research and the Intelligence Amplification (IA) framing, and verify it is explicitly distinguished from `usability`'s IE14 (background automation must not seize focus/interrupt input — an interruption concern, not a vigilance-decay concern).
- [x] 2.4 Update "How the product skill should apply these" in `core.md` to reference all three new rules, and verify the numbered walkthrough still reads as one coherent sequence.

## 3. Trust: invisible prevention / safety-success backlash

- [x] 3.1 Add a new rule to `src/skills/trust/references/core.md` (next available ID, placed near the existing PR01 post-interaction-reassurance rule) covering silent background protective/maintenance systems needing periodic non-intrusive activity summaries, citing Norman's invisibility-of-prevention/COVID-precautions-backlash case and SCUBA-instructor-praise example, and verify it is explicitly distinguished from S08 (which discourages noisy confirmation of trivial user-initiated actions — the opposite failure mode).
- [x] 3.2 Update "How the trust skill should apply these" in `core.md` to reference the new rule and verify the section still reads coherently.

## 4. Review: Legacy Assumption Audit technique

- [x] 4.1 Add the Legacy Assumption Audit as a named technique in `src/skills/review/references/review-model.md`, alongside the existing Five-Second Test, Black Hat Session, and Role-Play UI Audit (referenced from V06), citing Norman's healthcare-data-entry example and the "asking stupid questions"/orchestral-conductor framing, and verify the addition follows the same "technique, not a separate numbered rule" pattern as the existing Role-Play UI Audit.

## 5. Citation-only enrichments (no new rule IDs, no behavior change)

- [x] 5.1 Add a citation naming Herbert Simon's satisficing/bounded-rationality research and the "decoy effect" explicitly to `psychology/references/behavioral-economics.md`'s `PB03` and to `psychology/references/cognitive.md`'s `PC01`/`PC08` — verify no rule text's actual requirement changes, only its cited sources/terminology.
- [x] 5.2 Add a citation to Eric von Hippel's Lead User theory and the IKEAhackers.net case to `usability/references/affordances.md`'s `AF02` — verify no rule text's actual requirement changes, only its cited sources.
- [x] 5.3 Add a citation to Norman's "human error is design error" framing to `usability/references/core.md`'s `E01` and/or `E03` — verify no rule text's actual requirement changes, only its cited sources.
- [x] 5.4 Add a citation naming tight/loosely-coupled systems (Toyota JIT vs. Internet routing) to `usability/references/core.md`'s `S10` — verify no rule text's actual requirement changes, only its cited sources.

## 6. Documentation: changelog, evidence base, and rule-count signal

- [x] 6.1 Add a `CHANGELOG.md` entry for this pass (next version number) describing every new rule, every citation-only enrichment, and what was scoped out, in the same style as the 0.1.6-0.1.17 entries, and verify it accurately lists every touched rule ID.
- [x] 6.2 Add Don Norman, *Design for a Better World* (MIT Press, 2023) to `README.md`'s "Evidence base" section.
- [x] 6.3 Recount every rule-table row across `src/skills/**/references/*.md` (a rule row matches the `| <ID> | ... |` pattern used throughout this project; folk-rule-guard tables and non-rule tables are excluded) and update `README.md`'s opening paragraph with the new total rule count — the count is currently 305 before this change; verify the recount matches the actual new total after tasks 1-4 add their new rule rows. Recount (script-verified, `| <ID> |` pattern): 304 baseline + 7 new rows (S12, CR01, AF04, C25, C26, P10, PR02) = 311; README updated to 311.

## 7. Build & validate (release gate)

- [x] 7.1 Run `npm run build && npm run sync-version && npm run validate` and confirm all three succeed with no errors, no version-bump omission, and no shared-model drift.

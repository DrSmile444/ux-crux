## 1. Product: L.A.T.C.H. addition to `information-architecture.md`

- [x] 1.1 Add `IA09` (L.A.T.C.H. — Location/Alphabet/Time/Category/Hierarchy — as the finite set of sort/filter/organization modes a collection should offer, matched to content and task) to `src/skills/product/references/information-architecture.md`, matching the "Catalog offers only one organizational mode when users need another", "Collection's offered modes already match its content and task", and "Insufficient evidence of user sorting needs" scenarios in `specs/ux-crux/product/spec.md`; explicitly distinguish it in the rule text from `IA06`'s structural-topology scope (Tree/Matrix/Organic/Sequential govern IA structure, not sort/filter modes over an already-structured list).
- [x] 1.2 Update the file's intro line ("Covers rules IA01-IA08") to include `IA09`, and add an applicability note mirroring the existing `IA03`/`IA06` pattern: `IA09` requires evidence of the collection's actual content dimensions and user task, reporting `NOT ASSESSABLE` when that context is missing.
- [x] 1.3 Update `product/references/core.md`'s "How the product skill should apply these" section (step 3, where `information-architecture.md` is introduced) to mention `IA09` alongside `IA01`-`IA08`.

## 2. Product: content-quality additions to `core.md`

- [x] 2.1 Add `C19` (content photography vs. ornamental stock photography) to `references/core.md`'s Content table, matching the "Generic stock photo replaces informative content photography", "Photography already informs the user's decision", and "Ornamental imagery used only as a legitimate visual separator" scenarios in `specs/ux-crux/product/spec.md`.
- [x] 2.2 Add `C20` (data table/dashboard content prioritized for the actual audience, not the data owner — the "expert knowledge trap") to the same Content table, matching the "Dense table exposes every backend column to a general audience", "Table is already curated for its audience", and "Verified expert-only audience" scenarios; explicitly cross-reference the file's existing `C01` verified-expert-audience applicability note rather than restating it as a separate exception.
- [x] 2.3 Update `core.md`'s "How the product skill should apply these" closing section (step 2, content pass) to mention `C19` and `C20` alongside the existing `C01`-`C18` set.

## 3. Usability: navigation additions to `core.md`

- [x] 3.1 Add `N20R` (top-level navigation categories are mutually exclusive) to `references/core.md`'s Navigation table, matching the "Two top-level categories share the same items" and "Top-level categories have clearly distinct scopes" scenarios in `specs/ux-crux/usability/spec.md`; explicitly distinguish it from `N01R`'s general "mutually meaningful" requirement as the specific non-overlap test.
- [x] 3.2 Add `N21R` (no catch-all navigation bucket — "Miscellaneous", "Resources", "More Info", "Other") to the same table, matching the "Catch-all navigation label holds unrelated content" and "Navigation has no catch-all label" scenarios.
- [x] 3.3 Update `core.md`'s "How the usability skill should apply these" closing section to reference `N20R` and `N21R` alongside the existing `N13R`-`N19R` set.

## 4. Usability: faceted-filter dead-end prevention in `core.md`

- [x] 4.1 Add `D08` (faceted filters dynamically prevent zero-result dead ends and offer a one-click clear-all control) to the Search, discovery & comparison table, matching the "Filter combination silently yields zero results with no reset" and "Filters dynamically prevent dead ends and offer a reset" scenarios in `specs/ux-crux/usability/spec.md`; state explicitly in the rule text how it sharpens `D04` (no-results messaging) and `D05` (filter-state visibility) without duplicating either.
- [x] 4.2 Update `core.md`'s closing section to mention `D08` alongside `D06`-`D07`.

## 5. Usability: mobile device-capability form input

- [x] 5.1 Add a new "Forms (platform contracts)" section to `src/skills/usability/references/mobile.md` with `F24` (a mobile form field maps to camera-based scanning, geolocation-based address autofill, or an OS-level payment sheet instead of requiring full manual entry, when the platform provides it and privacy permits), matching the "Payment or address form requires full manual entry despite platform support", "Form already offers the available device capability", and "Platform does not provide a relevant device capability" scenarios in `specs/ux-crux/usability/spec.md`; explicitly distinguish it from `F04` (keyboard/autocomplete configuration) and `F10` (password-manager/authentication) in the rule text.
- [x] 5.2 Update `mobile.md`'s "How the usability skill should apply these" closing paragraph to mention the new Forms section and `F24`.

## 6. Review: two-phase expert-review structure in `review-model.md`

- [x] 6.1 Add `V07` (Cognitive Walkthrough of the primary task from a stated/inferable persona, before or alongside the Heuristic Evaluation sweep; `NOT ASSESSABLE` when no persona/task can be inferred) to the Validation methodology section (`V01`-`V06`) in `src/skills/review/references/review-model.md`, matching the "Persona and primary task are stated or clearly inferable", "No persona or primary task can be inferred", and "Walkthrough and heuristic sweep surface the same underlying issue" scenarios in `specs/ux-crux/review/spec.md`.
- [x] 6.2 Update the file's closing paragraph after the `V01`-`V06` table (the one explaining why these rules exist) to mention `V07` and how it relates to `V05`'s existing "record uncertainty instead of inventing a violation" principle.
- [x] 6.3 Update the Lens-selection procedure section to note that step 1-2 (reading the request/evidence, defaulting to broad coverage) is where a stated or inferable persona and primary task for `V07`'s walkthrough should be identified, without restructuring the existing four-step procedure.
- [x] 6.4 Update "How the review skill should apply this file" to mention `V07` alongside the existing "Apply V01-V06 as a standing constraint" sentence.

## 7. Citation enrichments (no new rule IDs)

- [x] 7.1 Add a citation to Giles Colborne's hierarchy of localization predictability (via Jesmond Allen & James Chudley, *Smashing UX Design*) to `product/references/core.md`'s `C05` Sources column, and a short clause in the rule text naming translation/culture as the least predictable layer needing dedicated review — no wording change to the rule's existing `SHALL`-equivalent behavior.
- [x] 7.2 Add the same citation to `usability/references/mobile.md`'s `L07` Sources column, with a short clause noting text expansion is one concrete symptom of the translation/culture layer's unpredictability — no behavior change.

## 8. Documentation and evidence trail

- [x] 8.1 Add Jesmond Allen & James Chudley, *Smashing UX Design: Foundations for Designing Online User Experiences* (Wiley, Smashing Magazine book series), to `README.md`'s "Evidence base" list of comparison-pass sources.
- [x] 8.2 Add a `CHANGELOG.md` entry (new `0.1.15` heading) in the same style as the 0.1.6-0.1.14 entries: what was added (by domain and rule ID: `IA09`, `C19`, `C20`, `N20R`, `N21R`, `D08`, `F24`, `V07`), what was left out and why (process/methodology content, the e-commerce cart/checkout vertical, the uncited Rule of Odds), and what was confirmed already-covered (workarounds/cheatsheets `AF02`, forced-registration avoidance `P06`/`O11`, in-context help `C06`, form-as-conversation minimalism `F02`/`F07`/`F14`, no-app-install-walls/touch-targets `O15`/`T01`/`T02`).
- [x] 8.3 Confirm no file under `openspec/changes/smashing-ux-design-comparison-pass/` or `src/skills/**` references the private `local/` research folder by path or filename, per this repo's `CLAUDE.md` — grep for `local/` across both trees and confirm zero matches outside this instruction context.

## 9. Build, version, and validate

- [x] 9.1 Bump `package.json`'s version from `0.1.14` to `0.1.15` per this project's one-SemVer-for-the-whole-plugin convention.
- [x] 9.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — this is the standing release gate for any change to `src/skills/**`.
- [x] 9.3 Confirm the rule-coverage checklist still accounts for every rule ID exactly once with no duplication across domains (per `openspec/config.yaml`'s specs rule), with particular attention to `IA09`/`C19`/`C20` staying in `product`, `N20R`/`N21R`/`D08`/`F24` staying in `usability`, and `V07` staying in `review`.

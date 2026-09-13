## 1. Product: information architecture rule

- [x] 1.1 In `src/skills/product/references/core.md`, add a new "Information architecture" subsection with rule `IA01` (navigation/labeling/categorization at the user/content/context intersection) and `IA02` (recommend tree testing to validate IA findability), following the file's existing table format (ID / Rule / Evidence / Default severity / Sources). Cite Rosenfeld, Morville & Arango's *Information Architecture for the Web and Beyond* for `IA01` and Donna Spencer for `IA02`. Verify each new row matches the existing table's column format exactly and that no `P0x`/`C0x` ID is reused or renumbered.
- [x] 1.2 Update `src/skills/product/references/core.md`'s "How the product skill should apply these" section to add a step for `IA01`/`IA02`, including the explicit `NOT ASSESSABLE` guard when business/technical context behind an IA choice is missing (mirroring the existing P06/P07 missing-context guidance). Verify the addition reflects all three scenarios in `specs/ux-crux/product/spec.md`.
- [x] 1.3 Update `src/skills/product/SKILL.md`'s Procedure and References sections to mention the new IA rules and their location in `references/core.md`. Verify the skill file still accurately describes everything `core.md` now covers.

## 2. Review: validation-technique and sample-size guidance

- [x] 2.1 In `src/skills/review/references/review-model.md`, add rule `V06` to the Validation methodology table: when a finding is reported `NOT ASSESSABLE`/`LIKELY`, name a concrete low-cost technique to close the gap — a Five-Second Test (cite Christine Perfetti/User Interface Engineering) for hierarchy/first-impression claims, a Black Hat Session (cite Edward de Bono, "Six Thinking Hats") for structured critical review. Verify the new row matches the existing table's column format and that `V01`-`V05` are left unchanged.
- [x] 2.2 In the same file, add a cited sample-size note to `V02`'s row or an adjacent line: Jakob Nielsen's finding (NN/g) that ~5 participants surfaces the large majority of usability issues in a qualitative study, including the 2012 revisit that more participants does not yield appreciably more insight. Verify the citation names Nielsen/NN/g directly, not the secondary book that surfaced it.
- [x] 2.3 Update the file's explanatory paragraph following the table (currently describing why V01-V05 matter) to also cover `V06`. Verify the update reflects both scenarios in `specs/ux-crux/review/spec.md`.
- [x] 2.4 Update `src/skills/review/SKILL.md` if it lists or summarizes `review-model.md`'s rule range, so any "V01-V05" reference becomes "V01-V06". Verify by re-reading the skill file for a reader who has not seen the new rule.

## 3. Build, version, and validation gate

- [x] 3.1 Run `npm run build` and verify it regenerates `skills/ux-crux-product`, `skills/ux-crux-review`, `plugin/skills/product`, and `plugin/skills/review` (including `plugin/skills/review/domains/product/**`'s self-contained copy) with no manual edits to generated files.
- [x] 3.2 Bump the version in `package.json`, then run `npm run sync-version` and verify the bump is reflected in both plugin manifests.
- [x] 3.3 Run `npm run validate` and verify it passes (distributed-content version-bump check and shared/ drift check both clean).

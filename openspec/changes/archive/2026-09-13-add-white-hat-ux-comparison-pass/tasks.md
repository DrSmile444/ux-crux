## 1. `usability` rule additions

- [x] 1.1 Add the Bait-and-Switch rule (new Actions-section ID alongside A01R-A08R) to `src/skills/usability/references/core.md`, citing Trine Falbe, Martin Michael Frederiksen & Kim Andersen, *White Hat UX*, and verify the new row renders correctly in the Actions table.
- [x] 1.2 Add the Wrong Destination rule (new Navigation-section ID alongside N01R-N14R) to `src/skills/usability/references/core.md` and verify it appears in the Navigation table.
- [x] 1.3 Add the Road Block rule (new Actions-section ID, distinct from A07R) to `src/skills/usability/references/core.md` and verify it appears in the Actions table with a cross-reference note distinguishing it from A07R.
- [x] 1.4 Add the Absurd Input Controls rule (new Forms-section ID alongside F01-F17) to `src/skills/usability/references/core.md` and verify it appears in the Forms table.
- [x] 1.5 Add the bulk-actions rule (new Interaction-efficiency-section ID alongside IE01-IE10) to `src/skills/usability/references/core.md` and verify it appears in the Interaction efficiency table.
- [x] 1.6 Add the breadcrumbs/fat-footer navigation rule (new Navigation-section ID) to `src/skills/usability/references/core.md` and verify it appears in the Navigation table.
- [x] 1.7 Add the positive real-time validation rule (new Forms-section ID, distinct from F06/F07) to `src/skills/usability/references/core.md` and verify it appears in the Forms table.
- [x] 1.8 Update `src/skills/usability/SKILL.md`'s procedure and/or `references/core.md`'s "How the usability skill should apply these" section so all seven new rule IDs are referenced from the procedure, and verify by re-reading the file that no new rule is orphaned (unreferenced from the procedure).

## 2. `psychology` rule additions

- [x] 2.1 Add the ad/Law-of-Similarity disguise rule (new ID in `attention.md`, sibling to PA09) to `src/skills/psychology/references/attention.md`, citing Gestalt's Law of Similarity, and verify it appears in the attention table with an applicability note distinguishing it from PA09's mirror-image direction.
- [x] 2.2 Add the carousel-blindness rule (new ID in `attention.md`) to `src/skills/psychology/references/attention.md`, citing *White Hat UX* and NN/g carousel-effectiveness research, and verify it appears in the attention table.
- [x] 2.3 Update `attention.md`'s "How the psychology skill should apply these" section to route both new rules through `ethics.md`'s four-gate test where they describe a deception mechanism, and verify the cross-reference is present.

## 3. `trust` rule additions

- [x] 3.1 Add the Forced Continuity / trial-payment-timing rule (new ID) to `src/skills/trust/references/core.md`, citing *White Hat UX*, and verify it appears in the onboarding/trust or a new dedicated subsection with a cross-reference distinguishing it from the existing exit-friction rule (`psychology`'s PT04).
- [x] 3.2 Add the Door Slam / mobile-app-interstitial rule (new ID) to `src/skills/trust/references/core.md` and verify it appears alongside the other new rule with correct evidence/severity/source columns.
- [x] 3.3 Add the generalized mandatory-cost-disclosure-timing rule (new ID) to `src/skills/trust/references/core.md`, keeping the wording general (no e-commerce-specific cart/faceted-search mechanics), and verify it appears in the table.
- [x] 3.4 Update `src/skills/trust/SKILL.md`'s procedure and `references/core.md`'s "How the trust skill should apply these" section to reference all three new rule IDs, and verify none is orphaned.

## 4. `product` rule addition

- [x] 4.1 Add the Trick Questions / double-negative-checkbox rule (new Content-section ID, distinct from C13) to `src/skills/product/references/core.md` and verify it appears in the Content table with an applicability note distinguishing it from C13.
- [x] 4.2 Update `src/skills/product/SKILL.md`'s procedure and/or `references/core.md`'s "How the product skill should apply these" section to reference the new rule ID, and verify it is not orphaned.

## 5. Evidence base and changelog

- [x] 5.1 Add "Trine Falbe, Martin Michael Frederiksen & Kim Andersen, *White Hat UX: The Next Generation in User Experience*" to `README.md`'s "Evidence base" list of comparison-pass sources, and verify the entry is present and formatted consistently with the existing five book entries.
- [x] 5.2 Add a new `CHANGELOG.md` entry above the current top entry, in the same style as the 0.1.6-0.1.10 entries: what was added (with rule IDs and destination files), and what was deliberately scoped out and why (strategic/management content, testing-methodology content, ethical-philosophy/terminology content, the narrow single-case-study patterns folded into the generalized cost-disclosure rule, and the full e-commerce/checkout vertical) — verify by reading the rendered entry against the existing entries' structure.

## 6. Version, build, and validation

- [x] 6.1 Bump `package.json`'s version (patch bump from `0.1.10`) to reflect this content addition, matching the granularity of prior comparison-pass version bumps.
- [x] 6.2 Run `npm run build && npm run sync-version && npm run validate` and confirm all three succeed with no errors, verifying that `skills/` and `plugin/skills/` regenerated to include all twelve new rules and that `plugin/.claude-plugin/plugin.json` / `plugin/.codex-plugin/plugin.json` versions match `package.json`.
- [x] 6.3 Grep the generated `skills/` and `plugin/skills/` output for each of the twelve new rule IDs to confirm every one made it into both distributions, and confirm no rule ID collides with an existing one in the same domain file.

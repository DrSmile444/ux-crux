## 1. Product: information-architecture additions

- [x] 1.1 Add `IA06` (IA topology selection — Tree/Matrix/Organic/Sequential, 3-dimension matrix limit, organic-for-transactional-content anti-pattern) to `src/skills/product/references/information-architecture.md`, matching the "Matrix structure exceeds a visualizable number of dimensions" and "Organic structure used for transactional content" scenarios in `specs/ux-crux/product/spec.md`, and verify the rule table row and an applicability note (requires evidence of an actual multi-dimension structure before flagging, matching `IA03`'s existing applicability-note style) are both present.
- [x] 1.2 Add `IA07` (controlled vocabulary/thesaurus mapping + audience-appropriate facet selection) to `information-architecture.md`, matching the "Search has no synonym/thesaurus mapping" and "Facets do not match audience expertise" scenarios, explicitly distinguished in the rule text from `IA03` (which addresses whether faceted classification exists at all, not thesaurus mapping or audience fit).
- [x] 1.3 Add `IA08` (conceptual-model consistency across the product + literal-physical-metaphor limit) to `information-architecture.md`, matching the "Conceptual model applied inconsistently across the product" and "Literal physical metaphor imposes an unnecessary constraint" scenarios, explicitly distinguished in the rule text from `IA05` (single-metaphor containment fidelity and reified-label merging, not cross-product model consistency).
- [x] 1.4 Update `information-architecture.md`'s intro paragraph from "Covers rules IA01-IA05" to "Covers rules IA01-IA08" and verify no old rule range references remain stale in the file.
- [x] 1.5 Update `src/skills/product/SKILL.md`'s procedure step 4 and References section to mention `IA06`-`IA08` alongside the existing `IA01`-`IA05` set, following the pattern already used for `IA03`-`IA05`.
- [x] 1.6 Verify every new IA rule ID has exactly one destination file (no duplicate left in `core.md`) and cites Jesse James Garrett's book as its source.

## 2. Product: FAQ/format-vs-purpose content rule

- [x] 2.1 Add `C18` (FAQ/help content structured around validated user task goals and support-log analytics, not arbitrary staff-invented questions) to `src/skills/product/references/core.md`'s Content table, matching the "FAQ content reflects invented rather than validated questions" and "FAQ content is grounded in validated user inquiries" scenarios in `specs/ux-crux/product/spec.md`.
- [x] 2.2 Update `core.md`'s intro paragraph from "Covers rules P01-P09 and C01-C17" to include `C18`, and update `src/skills/product/SKILL.md`'s content-checking procedure step to mention `C18` alongside `C01`-`C06`/`C13`-`C17`.

## 3. Usability: forms additions

- [x] 3.1 Add `F20` (small fixed option sets shown as visible radio/checkbox rather than hidden dropdowns) to `src/skills/usability/references/core.md`'s Forms & input table, matching the "Three-option dropdown hides choices" and "Dropdown is a reasonable choice given constraints" scenarios, explicitly distinguished in the rule text from `F18` (high-cardinality/open-ended data, not small hidden sets).
- [x] 3.2 Add `F21` (default pre-selection of the dominant value + cross-session choice memory) to the same table, matching the "Common option left unselected by default", "System does not remember a user's prior selection", and "High-risk or consent option is not defaulted" scenarios, explicitly distinguished from `F03` (single-process redundant entry, not defaults/cross-session memory).
- [x] 3.3 Add `F22` (form/data fields grouped by mental model, not arbitrary order) to the same table, matching the "Contact form fields listed alphabetically" and "Fields are grouped into meaningful sub-categories" scenarios, explicitly distinguished from `F16` (visual column layout, not semantic grouping).

## 4. Usability: contextual inline navigation

- [x] 4.1 Add `N18R` (contextual inline hyperlinks in body content as a distinct navigation tier) to `src/skills/usability/references/core.md`'s Navigation table, matching the "Product description has no link to a directly related item" and "Content links directly to related items at the point of mention" scenarios.
- [x] 4.2 Update `core.md`'s "How the usability skill should apply these" closing section to reference `F20`-`F22` and `N18R` explicitly, following the existing style used for `F13`-`F19` and `N13R`-`N17R`.

## 5. Usability: new visual-hierarchy reference file

- [x] 5.1 Create `src/skills/usability/references/visual-hierarchy.md` with an intro paragraph (platform-agnostic scope, referencing `../../../shared/evidence-model.md` and `severity-model.md`, matching the style of `information-architecture.md`'s intro).
- [x] 5.2 Add `VH01` (deliberate, bold contrast vs. confusing near-uniformity between adjacent elements) matching the "Primary buttons use barely different shades across screens", "A functionally distinct element uses bold, deliberate contrast", and "Identical elements are styled identically" scenarios in `specs/ux-crux/usability/spec.md`.
- [x] 5.3 Add `VH02` (shared grid system for internal/external consistency, revisited as scope evolves) matching the "Sub-sections use inconsistent, fragmented layouts", "An outdated grid blocks needed functionality", and "A shared, current grid is applied consistently" scenarios.
- [x] 5.4 Add a "Squint test" technique note (mirroring `core.md`'s existing Confirmation-dialogue-simplification-technique box) describing blurring/squinting at a layout to verify the primary CTA is the dominant focal point — framed as a technique for evaluating `product`'s `P02` and this file's `VH01`, not a competing rule.
- [x] 5.5 Add a short "How the usability skill should apply these" closing paragraph to `visual-hierarchy.md`, consistent in style with `core.md`'s and `mobile.md`'s closing sections.
- [x] 5.6 Wire `visual-hierarchy.md` into `src/skills/usability/SKILL.md`'s procedure and References section, following the exact pattern already used for `mobile.md`.

## 6. Documentation and evidence trail

- [x] 6.1 Add Jesse James Garrett, *The Elements of User Experience: User-Centered Design for the Web and Beyond* (2nd ed.), to `README.md`'s "Evidence base" list of comparison-pass sources.
- [x] 6.2 Add a `CHANGELOG.md` entry for this pass in the same style as the 0.1.6-0.1.12 entries: what was added (by domain and rule ID), what was left out and why (process/governance content, duplicate-mechanism content), and the version number.
- [x] 6.3 Confirm no file under `openspec/changes/add-elements-of-ux-rules/` or `src/skills/**` references the private local research folder by path or filename, per this repo's `CLAUDE.md`.

## 7. Build, version, and validate

- [x] 7.1 Bump `package.json`'s version (patch) per this project's one-SemVer-for-the-whole-plugin convention.
- [x] 7.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — this is the standing release gate for any change to `src/skills/**`.
- [x] 7.3 Confirm the rule-coverage checklist still accounts for every rule ID exactly once with no duplication across domains (per `openspec/config.yaml`'s specs rule), with particular attention to `IA06`-`IA08` and `C18` staying in `product`, and `F20`-`F22`/`N18R`/`VH01`-`VH02` staying in `usability`.

## Why

Jesse James Garrett's *The Elements of User Experience: User-Centered Design for the Web and Beyond* (2nd ed.) is a foundational UX-strategy text whose Five Planes model (Strategy/Scope/Structure/Skeleton/Surface) a research pass compared against this project's full existing rule catalog. The comparison surfaced two kinds of gap: targeted rule-level gaps inside `product`'s information-architecture file and `usability`'s forms/navigation rules (IA topology selection, controlled-vocabulary/thesaurus mapping, cross-product conceptual-model consistency, the FAQ format-vs-purpose trap, small-option-set dropdown misuse, default-option optimization, form-field micro-IA grouping, contextual inline navigation links), and one structural gap: the book's "Surface plane" (deliberate visual contrast, grid-based layout consistency, eye-flow) has no dedicated home anywhere in the current catalog, only a few borrowed eye-tracking citations scattered across `usability`/`product`. Following this project's established comparison-pass pattern (see `CHANGELOG.md` 0.1.6-0.1.12), this change adds only the specific, checkable, named-source rules that are genuinely new — not a wholesale import of the book's full 30-item extracted set.

## What Changes

- `product`: add three new rules to `references/information-architecture.md` after `IA05` — `IA06` (IA topology selection: Tree/Matrix/Organic/Sequential, with a 3-dimension matrix limit and an organic-structure-for-transactional-content anti-pattern); `IA07` (controlled vocabulary/thesaurus mapping for search synonyms, and audience-role-appropriate facet selection, extending `IA03`'s faceted-classification rule with an angle it doesn't cover); `IA08` (conceptual-model consistency across the whole product, plus a literal-physical-metaphor limit, distinct from `IA05`'s narrower container/item-nesting-fidelity and reified-label-merging scope). Add one new Content rule to `references/core.md` — `C18` (FAQ/help content structured around validated user task goals and support-log analytics, not arbitrary staff-invented questions).
- `usability`: add three new rules to `references/core.md`'s Forms & input section — `F20` (small fixed option sets shown as visible radio/checkbox rather than hidden in a dropdown, distinct from `F18`'s high-cardinality-data scope); `F21` (statistically dominant default pre-selection plus cross-session memory of prior choices, distinct from `F03`'s single-process redundant-entry scope); `F22` (form/data fields grouped into logical sub-categories reflecting the user's mental model, distinct from `F16`'s visual-column-layout scope). Add one new Navigation rule — `N18R` (contextual inline hyperlinks in body content as a distinct navigation tier, not covered by the existing `N01R`-`N17R` set).
- `usability`: add a new reference file `references/visual-hierarchy.md` establishing visual hierarchy/consistency as a reviewable axis (mirroring how `information-architecture.md` and `voice-tone.md` were split out of `product/core.md`) — `VH01` (deliberate, bold contrast vs. confusing near-uniformity between adjacent elements) and `VH02` (grid-based layout for internal/external consistency, revisited as scope evolves), plus a non-rule "Squint test" technique note for evaluating visual hierarchy (mirroring the existing Confirmation-dialogue-simplification-technique precedent), wired into `usability/SKILL.md`'s procedure and References section the same way `mobile.md` is.
- `README.md`: add Jesse James Garrett's book to the "Evidence base" list of comparison-pass sources.
- `CHANGELOG.md`: add an entry in the same style as prior comparison-pass entries (0.1.6-0.1.12), naming what was added, what was left out, and why.
- `package.json` version bump (patch, per this project's one-SemVer-for-the-whole-plugin convention) plus `scripts/sync-version.mjs` and `scripts/build.mjs`/`scripts/validate.mjs` runs, per this project's standing release gate.

No new skill is introduced. Everything maps to the two existing capabilities below.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/product`: the information-architecture requirement gains three new scenarios (IA topology selection, controlled-vocabulary/thesaurus mapping and audience-appropriate facets, conceptual-model consistency and literal-metaphor limits); the content/UX-writing requirement gains a new FAQ/help-content scenario.
- `ux-crux/usability`: the forms requirement gains three new scenarios (visible small-option-set controls, default pre-selection and choice memory, field-grouping micro-IA); a new navigation requirement (contextual inline hyperlinks) and a new visual-hierarchy requirement (deliberate contrast, grid-based consistency) are added.

## Impact

- Affected source: `src/skills/product/references/information-architecture.md`, `src/skills/product/references/core.md`; `src/skills/usability/references/core.md`, new `src/skills/usability/references/visual-hierarchy.md`, `src/skills/usability/SKILL.md`.
- Generated distributions (`skills/`, `plugin/skills/`) regenerate from source via `npm run build`; not hand-edited.
- `README.md`, `CHANGELOG.md`, `package.json`, both plugin manifests (via `sync-version`).
- No build tooling, schema, or distribution-mechanism changes.

## Why

A UX-practice book comparison pass ("The User Experience Team of One," 2nd ed., Buley & Natoli) surfaced two narrow, genuinely uncovered gaps in this project's rule catalogs, each traceable to a named, independently verifiable primary source rather than to the book itself: `product` has no explicit information-architecture check (only goal/hierarchy and content rules), and `review`'s validation-methodology guidance names no concrete, low-cost technique a reviewer can point to when it must mark a finding `NOT ASSESSABLE` or `LIKELY` instead of asserting a defect. Most of the book's remaining content is either process/evangelism guidance out of this project's screen/flow-review scope, or the authors' own unattributed frameworks (no independent source beyond the book) — both correctly stay out of scope per this project's standing rule against wholesale book imports.

## What Changes

- Add an information-architecture requirement to `product`: evaluate a reviewed screen/flow's navigation, labeling, and categorization at the intersection of user mental models, content structure, and business/technical context — citing Rosenfeld, Morville & Arango's *Information Architecture for the Web and Beyond* (the field's canonical IA text) rather than the secondary book that surfaced the gap.
- Within that same rule, recommend tree testing (Donna Spencer) as the preferred technique for validating a proposed or existing IA structure's findability, in place of relying on visual-comp review alone.
- Add a validation-methodology requirement to `review`: when a finding cannot be confirmed from static evidence alone, the reviewer names a concrete, low-cost technique to close the gap rather than only stating uncertainty — specifically the Five-Second Test (popularized by Christine Perfetti at User Interface Engineering) for information-hierarchy/first-impression claims, and the Black Hat Session (Edward de Bono's "Six Thinking Hats") for structured critical design review.
- Add citable sample-size guidance to `review-model.md`'s existing V02 (per-flow measurement) rule: Jakob Nielsen's "five users is enough" finding (NN/g), including his 2012 revisit confirming that testing more than ~5 users in a qualitative study does not yield appreciably more insight — so a reviewer recommending a usability-test sample size cites a specific, named source instead of an arbitrary number.
- Regenerate `skills/` and `plugin/skills/` distributions from the updated `src/skills/` source and pass the existing validation/version-sync gate.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/product`: adds a requirement that the product skill SHALL evaluate a reviewed screen/flow's information architecture (navigation, labeling, categorization) against the user/content/context intersection, and SHALL recommend tree testing to validate a proposed or existing IA structure's findability.
- `ux-crux/review`: adds a requirement that when the review skill cannot confirm a finding from the evidence provided, it SHALL name a concrete, low-cost validation technique (e.g. a Five-Second Test for hierarchy/first-impression claims, a Black Hat Session for structured critical review) rather than stopping at stating uncertainty.

## Impact

- `src/skills/product/references/core.md` — new IA rule (next available ID in that file's `P0x`/`C0x` scheme) plus a short "how to apply" addition covering tree testing as the recommended validation step.
- `src/skills/product/SKILL.md` — procedure/reference-list update to mention the new IA rule.
- `src/skills/review/references/review-model.md` — V02 gains a cited sample-size figure (Nielsen/NN/g); a new subsection (or V0x-adjacent addition) names Five-Second Test and Black Hat Session as concrete techniques to recommend under V01/V05.
- `openspec/specs/ux-crux/product/spec.md` and `openspec/specs/ux-crux/review/spec.md` each get a delta adding the requirement above (via this change's `specs/` artifact).
- Generated output (`skills/ux-crux-product`, `skills/ux-crux-review`, `plugin/skills/product`, `plugin/skills/review`) is rebuilt via `npm run build`, then `npm run sync-version` and `npm run validate` — not hand-edited.
- No changes to `usability`, `psychology`, `accessibility`, `trust`, or `src/shared/*`.

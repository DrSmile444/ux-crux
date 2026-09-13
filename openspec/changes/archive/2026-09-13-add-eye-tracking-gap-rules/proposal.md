## Why

An external UX-research synthesis pass compared this project's existing rule catalogs (`usability`, `psychology`, `product`) against a well-known academic synthesis of eye-tracking UX research. Most of what that research covers is already encoded here (form placeholder/inline-error anti-patterns, banner blindness, touch-target minimums). The comparison surfaced a genuine, narrow set of gaps: concrete, well-evidenced findings about form/navigation layout ergonomics and text-scanning behavior that this project's rule catalog does not yet state. Two verticals the source material also covers in depth (e-commerce-specific merchandising, social-media feed layout) and one population-specific cluster (older-adult/low-literacy visual search) were deliberately scoped out as a seventh-domain question rather than folded in by default. Closing the accepted gaps sharpens review accuracy for forms, navigation, and content-heavy pages without duplicating what already exists or introducing a new top-level lens.

## What Changes

- Add five form-layout rules to `usability`'s platform-agnostic reference: primary-action-button alignment under the field column with Previous-left-of-Next ordering, label top-alignment/proximity, an anti-pattern for realistic sample data inside illustration graphics next to input fields, a distinction between double-banked answer *choices* (fine) and side-by-side distinct *questions* (a miss-prone anti-pattern), and a cross-step memory cue for multi-step forms (show prior-step data as persistent context).
- Add two navigation rules to `usability`'s platform-agnostic reference: standard top-right-header/footer placement for utility navigation (contact/help/cart/sign-in), and a primacy/recency ordering convention for dynamic dropdown/mega-menu items.
- Add one comparison-layout rule to `usability`'s Search & discovery section (retitled to include comparison): keep compared decision parameters (price and schedule, spec and cost) in tight horizontal proximity instead of spreading them across full page width.
- Add one folk-rule-guard citation upgrade (no new rule ID) to `usability`'s existing "Always show onboarding" guard, citing a concrete eye-tracking study on mobile instruction-popup bypass.
- Add one attention rule to `psychology`'s attention reference: F-pattern/top-left scanning bias, and how deliberate multi-column or structured-block formatting disperses fixations across a page that would otherwise be read only in an F-shape.
- Add one contextual, applicability-scoped rule to `product`'s purpose/task reference: on a product-detail (single-featured-item) page, cross-sell/recommendation modules must not be positioned above the primary featured product content.
- **New reference file**: `product/references/web.md` (the `web.md` addendum already anticipated in this project's config context) holding six text-scanning/typography rules for content-heavy pages: inverted-pyramid structure, front-loaded headline/subheading keywords, an ALL-CAPS reading-speed penalty, left-alignment primacy over centered/justified body text, digit-not-word numerals, and image captions as a high-fixation content element. `product/SKILL.md` gains a reference to this file and a procedure step for when it applies.
- Regenerate `skills/` and `plugin/skills/` distributions from the updated `src/skills/` source and pass the existing validation/version-sync gate.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

None. Every change above adds reference-catalog content (new rule rows, one new reference file, one citation upgrade) under each skill's already-declared purpose and existing spec requirements (`usability`'s task/navigation/forms remit, `psychology`'s attention-mechanics remit, `product`'s content/goal-hierarchy remit). None of them introduces a new SHALL-level evaluative stance, a new guard against over-application that isn't already carried by the rule's own wording or an applicability note (the established pattern used by P06/P08), or a new top-level lens. This change sets `skip_specs: true` and carries no `specs/` delta.

## Impact

- `src/skills/usability/references/core.md` — five new Forms & input rules (next available IDs F13-F17), two new Navigation rules (N13R-N14R), one new Search & discovery/comparison rule (D06, section renamed to reflect comparison scope), and a citation-only addition to the existing "Always show onboarding" folk-rule-guard row.
- `src/skills/psychology/references/attention.md` — one new rule (PA10) plus a short addition to the "How the psychology skill should apply these" section framing it alongside PA01/PA04.
- `src/skills/product/references/core.md` — one new rule (P09) with an applicability note scoping it to product-detail/single-featured-item pages, distinct from the general P02 hierarchy check.
- `src/skills/product/references/web.md` — **new file**, six rules (C07-C12, continuing product's existing C-series numbering).
- `src/skills/product/SKILL.md` — References section and procedure gain a pointer to `web.md` and when it applies (content-heavy/web pages).
- Generated output (`skills/ux-crux-*`, `plugin/skills/*`) is rebuilt via `npm run build`, then `npm run sync-version` and `npm run validate` — not hand-edited.
- No changes to `accessibility`, `trust`, `review`, or `src/shared/*`. No new skill or domain is introduced (e-commerce, social-media, and gaming verticals, and the older-adult/low-literacy population cluster, are explicitly deferred).

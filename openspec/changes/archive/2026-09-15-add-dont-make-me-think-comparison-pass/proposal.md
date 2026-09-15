## Why

A comparison pass against Steve Krug, *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability* (3rd ed.), surfaced a larger-than-usual set of genuine gaps: 15 concrete, statically-checkable rules absent from the current catalog, spanning four domains (`usability`, `accessibility`, `trust`, `product`) plus one review-methodology addition and one shared severity-model clarification. Krug's book is unusually rule-dense for a foundational usability text — many of its points are phrased as concrete, binary, screenshot-checkable "never do X" statements rather than the process/philosophy content that made most of this book's content out of scope for a static-evidence review (see below).

Verified via direct grep/read against `src/skills/*/references/*.md` and `openspec/specs/ux-crux/*/spec.md` before drafting: several of the book's most quotable points are already covered by existing rules under different wording and are explicitly NOT duplicated here — button/link label matching its destination heading (Krug 6.7) is already `usability`'s `A13R`; vague catch-all navigation labels (Krug 4.2, "scent of information") are already `N21R`; banner blindness (Krug 3.6) is already `psychology`'s `PA09`; progressive disclosure vs. choice paralysis (Krug 4.3) is already `PC08`/`P03`/`P04`; deceptive-pattern ethics (Krug 13.2) is already thoroughly covered by `psychology`'s `ethics.md` and `behavioral-economics.md`; breadcrumb presence and forward step-progress (Krug 6.9) are already `N16R`/`N23R`.

The book is also, like every prior comparison-pass source, substantially team-process and testing-methodology content — DIY usability testing cadence, focus-group-vs-test distinction, participant recruiting, facilitator technique, debrief logistics, executive advocacy tactics, and "religious debates" team dynamics — that describes how a team plans and runs its own work, not what a static-evidence review checks. This is scoped out, consistent with all 18 prior comparison-pass changes.

## What Changes

- `usability`: 4 new rules — non-floating headings (one of Krug's four "never do" rules: a heading sits closer to the text it introduces than to the text above it), multi-cue "You Are Here" active-navigation-state indication, flat-design affordance risk (clickable controls must stay visually distinguishable when 3D affordance cues are stripped), and an uncluttered global search box standard (no forced scope selection before first use, no cutesy placeholder labels in place of a plain box).
- `accessibility`: 6 new rules — hover-dependent affordances must have a non-hover equivalent (invisible to touch/switch/keyboard-only users), preserved visited-vs-unvisited link color (Krug's other "never do" rule), front-loaded link/heading text for screen-reader "ear scanning" (distinct from `product`'s existing sighted-scanning front-loading rules), a "skip to main content" link ahead of persistent header navigation, logical un-skipped heading hierarchy, and images distinguishing informative alt text from empty `alt=""` for decorative images.
- `trust`: 3 new rules introducing the "Reservoir of Goodwill" model as an evaluative framework (every friction point depletes a user's situational goodwill; depletion drives abandonment/complaints) — one rule for the model plus its most common depletors (hiding support/pricing information, unnecessary/disproportionate data requests, fake-sincerity copy, promotional "sizzle" blocking task completion, amateurish execution), one standalone rule for rigid input-formatting rejection (rejecting a validly-formatted card/phone number for containing spaces/dashes instead of normalizing it — concrete and independent of the general framework), and one rule for the positive counterpart (goodwill "refills": candid FAQs vs. marketing copy dressed as FAQ, graceful specific error recovery, step-saving shortcuts).
- `product`: 1 new rule — tagline excellence criteria (a tagline next to a site/product's identity should be roughly 6-8 words stating a concrete, differentiating value proposition, not a vague corporate motto).
- `review`: 1 new rule — the Trunk Test as a compact, synthesized standing checklist for any interior/deep page (Site ID, Page Name, Sections, Local Navigation, "You Are Here", Search — all answerable within seconds), modeled the same way `V07`'s Cognitive Walkthrough is modeled: a standing check alongside the lens-selection procedure, not a lens-specific rule.
- `src/shared/severity-model.md`: a clarification (no new rule ID; this file has no ID scheme) that a momentary error a user notices and self-corrects within a moment or two, with no lasting confusion or lost work (Krug's "kayak problem"), should not be scored at the same severity as a genuine roadblock — this refines how every skill already applies the existing severity levels, it does not add a new level.
- `README.md`: add the book to the "Evidence base" section; recount and update the total rule-row count in the opening paragraph (+15 rule rows expected).
- `CHANGELOG.md`: new entry documenting this pass, in the same structure/style as the prior 18 comparison-pass entries.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/usability`: adds four new requirements (non-floating headings, multi-cue active-navigation-state, flat-design affordance risk, uncluttered search box standard).
- `ux-crux/accessibility`: adds six new requirements (hover-dependent affordances, visited-link color, screen-reader ear-scanning front-loading, skip-to-main-content link, logical heading hierarchy, informative-vs-decorative alt text).
- `ux-crux/trust`: adds three new requirements (Reservoir of Goodwill model and depletors, rigid input-formatting rejection, goodwill refills).
- `ux-crux/product`: adds one new requirement (tagline excellence criteria).
- `ux-crux/review`: adds one new requirement (Trunk Test standing checklist for interior pages).

## Impact

- `src/skills/usability/references/core.md` (Navigation table + Search/discovery table + lens-selection prose)
- `src/skills/usability/references/visual-hierarchy.md` (new rule row + prose)
- `src/skills/usability/references/affordances.md` (new rule row + prose)
- `src/skills/accessibility/references/core.md` (six new rule rows + prose)
- `src/skills/trust/references/core.md` (three new rule rows, new `GW` rule-ID prefix + prose)
- `src/skills/product/references/core.md` (new rule row + prose)
- `src/skills/review/references/review-model.md` (new `V09` row + prose, modeled on `V07`)
- `src/shared/severity-model.md` (prose clarification, no new ID)
- `README.md` (Evidence base section, opening rule-count paragraph)
- `CHANGELOG.md` (new version entry)
- Generated output (`skills/`, `plugin/`) regenerated via `npm run build` — not hand-edited
- No new capability/skill, no schema change, no runtime dependency change

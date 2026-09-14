## Why

A comparison pass against Jeff Patton (with Peter Economy), *User Story Mapping: Discover the Whole Story, Build the Right Product* (O'Reilly Media), surfaced two genuine gaps in the existing rule catalog that a static-evidence UX review can actually check: (1) navigation/menu items mixing inconsistent goal-altitude levels (Alistair Cockburn's Cloud/Sea-level/Fish-level taxonomy, as cited in the book) has no existing rule — the closest current rule (`usability`'s `N20R`) checks category overlap, not granularity consistency; (2) nothing in the catalog states that an "MVP"/beta/early-access label does not exempt reviewed evidence from its otherwise-applicable severity, even though Patton's own distinction between a Minimum Viable Solution and a "crappiest product" makes exactly this point. A third, smaller finding — Patton's "What-About" edge-case-probing technique — restates a concern `review`'s existing `V04` (stress-case framing for adverse states) already covers, and is added only as a citation, not a new rule.

The book itself is overwhelmingly team-process and delivery-methodology content (story mapping workshops, discovery techniques, backlog slicing, Agile delivery strategies, team facilitation patterns) that describes how a team plans and builds its own work, not what a static-evidence review checks — consistent with every one of this project's 17 prior comparison-pass entries (0.1.6 through 0.1.18), which have uniformly scoped out equivalent process content from other sources. This change intentionally imports only the narrow slice that clears that bar.

## What Changes

- `usability`: new rule in `references/core.md`'s Navigation table — top-level navigation/menu items presented as siblings must share a consistent goal-altitude (Cockburn's Cloud/summary-level, Sea-level/functional-task, Fish-level/sub-functional taxonomy); mixing a sea-level task item with a fish-level micro-action item in the same list is flagged. Distinct from the existing `N20R` (mutual-exclusivity/overlap), which addresses a different axis (categorical overlap, not granularity mismatch).
- `review`: new rule in `references/review-model.md`'s validation methodology (after `V07`) — an "MVP", beta, or early-access label on reviewed evidence does not exempt it from otherwise-applicable severity; a finding's severity is assessed against whether the evidence achieves its target user/business outcome (Patton's Minimum Viable Solution definition), not against developer effort saved or release-stage framing.
- `review`: citation-only enrichment (no new rule ID, no behavior change) — `V04`'s existing stress-case/adverse-state framing gains a citation naming Patton's "What-About" edge-case-probing technique (via David Hussman) as a discovery-side counterpart to the same happy-path-blindness concern.
- `README.md`: add the book to the "Evidence base" section; recount and update the total rule-row count in the opening paragraph (2 new rule rows expected).
- `CHANGELOG.md`: new entry documenting this pass, in the same structure/style as the prior 17 comparison-pass entries — naming what was added, what was confirmed already covered, and what was scoped out and why.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/usability`: adds one new requirement — goal-altitude consistency across sibling navigation/menu items.
- `ux-crux/review`: adds one new requirement — an MVP/beta/early-access label does not lower a finding's applicable severity.

## Impact

- `src/skills/usability/references/core.md` (Navigation table + lens-selection prose)
- `src/skills/review/references/review-model.md` (validation methodology table + `V04` citation)
- `README.md` (Evidence base section, opening rule-count paragraph)
- `CHANGELOG.md` (new version entry)
- Generated output (`skills/`, `plugin/`) regenerated via `npm run build` — not hand-edited
- No new capability, no schema change, no runtime dependency change

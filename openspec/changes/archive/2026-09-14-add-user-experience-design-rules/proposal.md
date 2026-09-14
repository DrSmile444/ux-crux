## Why

A comparison pass against Mark Wells, *User Experience Design: An Introduction to Creating Interactive Digital Spaces* (Laurence King Publishing, 2023) surfaced a handful of specific, named-source gaps in the existing rule catalog — most notably four Gestalt perception laws this project cites the framework for but has never actually encoded (Continuation, Closure, Common Fate, Symmetry & Order), a genuine content-credibility axis (source/author/date/citation signals) with no home in any current skill, a digital-equity/graceful-degradation concern (Kranzberg's First Law: technology is not neutral, and interfaces that assume high-end hardware or continuous connectivity exclude real users) that the accessibility skill's WCAG-only scope does not currently cover, and a Voice UI modality with zero coverage in any skill. It also surfaces a testing-evaluation caution (the Aesthetic-Usability Effect can mask real navigation flaws during hi-fi usability testing) that sharpens the `review` skill's own validation methodology, not a domain lens. As with all fifteen prior comparison passes (see CHANGELOG.md 0.1.6-0.1.15), this is not a wholesale import of the book's full extracted item set: its process/methodology content (design sprints, the Double Diamond, client-brief writing, DIKW/affinity-mapping analysis process, INVEST user stories, "think-out-loud" testing protocol, SEO practice) describes how a UX team runs its own work, not what a static-evidence review checks, so it has no home in any existing skill.

## What Changes

- `psychology`: add four Gestalt perception rules to `attention.md` — Continuation, Closure, Common Fate, and Symmetry & Order — the four of the book's seven named Gestalt laws not already covered by the existing Similarity (`PA06`), Proximity (`PA05`), Common Region (`PA07`), and Figure/Ground (`PA08`) rules.
- `product`: add a content-authenticity rule to `core.md` — source, citation, publication date, and author attribution as visible credibility signals on content-heavy pages (articles, editorial content, published reports).
- `product`: add a chart/data-visualization type-fit rule extending `C20` (the existing expert-knowledge-trap rule for dashboards) — match chart type to data category (quantities/locations/connections per Mollerup; Kosslyn's graphical-perception rules for salience and convention).
- `product`: add an audience-calibrated visual-polish rule — the level of visual glossiness/production value should match what the specific target audience trusts and expects, not default to "more polish is always better" (Daniel Miller's "trapping the audience" research).
- `trust`: add a post-interaction reassurance rule — a reviewed flow that ends a transaction/commitment is checked for what happens in the gap after the user leaves the screen (confirmation messaging, status during a silent wait), not only the on-screen completion state.
- `accessibility`: add a digital-equity/graceful-degradation rule — a reviewed design's assumptions about hardware tier, connectivity, and digital literacy are checked against Kranzberg's First Law ("technology is neither good, nor bad, nor neutral") as a distinct inclusive-design axis from the existing WCAG/disability-focused rule set.
- `usability`: add a new `references/voice.md` addendum (parallel to the existing `mobile.md`/`web.md` per-modality split) covering Voice UI command-scope limits (simple, discrete, single-outcome requests only) and sonic-persona/brand alignment — a new modality this project has not previously covered.
- `review`: sharpen `V01` (heuristic review is prevalidation, not proof of usability) with the Aesthetic-Usability Effect as a named, citable reason hi-fi mock-up testing specifically can mask structural navigation flaws — a testing-evaluation caution, not a new rule ID.
- `review`: enrich `V02`'s existing 5-user-testing citation with the book's specific 6-of-8-participant convergence threshold for treating a behavioral pattern as high-confidence — citation-only, no new rule ID.
- Citation-only enrichments (no new rule IDs, no behavior change): cite Gillian Crampton Smith's six basics of interaction design as additional named-source backing for the mental-model/feedback/consistency concerns already spread across `usability`'s Actions/System-status rules and `usability/references/affordances.md`; cite the Rushkoff/Koneya & Barbour 7-38-55 non-verbal-communication finding as backing for why `usability/references/visual-hierarchy.md`'s `VH01`/`AF01` require visual/spatial layout to carry primary operational meaning.

Scoped out (process/methodology content, consistent with every prior comparison pass): design sprints, the Double Diamond/Framework for Innovation, client-brief writing and the Sistine Chapel principle, experiential briefing delivery, the internal/external 360-degree discovery audit, design systems as a team practice, the DIKW pyramid and four-tier analytics taxonomy, affinity mapping, INVEST user stories, task-based "think out loud" testing protocol, and SEO practice. Also scoped out: survey/research-question bias framing (Criado Perez) — this is research-instrument design methodology, not a static-evidence review check, distinct from the already-covered `trust` `O13` (which addresses a product's own identity-data form fields, not a researcher's survey instrument).

## Capabilities

### New Capabilities

(none — every addition maps onto one of the six existing skills)

### Modified Capabilities

- `ux-crux/psychology`: add four new Gestalt-law requirements to the attention/perception coverage.
- `ux-crux/product`: add content-authenticity, chart-type-fit, and audience-calibrated-polish requirements.
- `ux-crux/trust`: add a post-interaction/off-screen reassurance requirement.
- `ux-crux/accessibility`: add a digital-equity/graceful-degradation requirement distinct from the existing WCAG-conformance requirements.
- `ux-crux/usability`: add Voice UI command-scope and persona-alignment requirements (new modality addendum).
- `ux-crux/review`: sharpen the existing heuristic-review-is-prevalidation requirement with the Aesthetic-Usability Effect testing caution (no new requirement, refined text).

## Impact

- `src/skills/psychology/references/attention.md`, `src/skills/product/references/core.md`, `src/skills/trust/references/core.md`, `src/skills/accessibility/references/core.md`, `src/skills/review/references/review-model.md` — edited.
- `src/skills/usability/references/voice.md` — new file.
- `src/skills/usability/SKILL.md` (and any domain `SKILL.md` whose reference-file listing needs the new file added) — edited to reference the new file.
- Generated output (`skills/`, `plugin/`) regenerated via `npm run build`; version bumped via `npm run sync-version`; `npm run validate` run before completion.
- `CHANGELOG.md` — new entry; `README.md`'s "Evidence base" section — Mark Wells, *User Experience Design* added.
- No API surface, no runtime dependency, no breaking change — this is additive Markdown reference content only.

## Why

Andrew Hinton's *Understanding Context: Environment, Language, and Information Architecture* (aka *Designing Context for User Experiences*) is a foundational information-architecture and context-design text that a research pass identified as a strong, currently-uncovered source for this project. The most direct gap: `product`'s information-architecture check (`IA01`/`IA02`) is only two rules, crammed into `core.md` alongside unrelated purpose/content rules, while the book supplies a much richer, independently-citable IA framework (labels/ontology, faceted classification, corporate-language friction, situation-need-task). Smaller, distinct gaps also exist in `usability` (mode errors, icon-reuse ambiguity, cross-device scoping consistency, search/foraging continuity), `trust` (cross-audience sharing defaults, audience-scope visibility at send time, cloud-metaphor deletion anxiety), and `psychology` (unintended semantic juxtaposition of adjacent content). Following this project's established comparison-pass pattern (see `CHANGELOG.md` 0.1.6-0.1.11), this change adds only the specific, checkable, named-source rules that are genuinely new — not a wholesale import of the book's full extracted item set.

## What Changes

- `product`: carve `IA01`/`IA02` out of `references/core.md` into a new `references/information-architecture.md` (mirrors the existing `voice-tone.md` precedent — IA is its own reviewable axis). Grow that file with five new rule areas, each traced to its own named source: Dan Klyn's three materials of IA (Labels/Ontology, Relationships/Taxonomy, Rules/Choreography) as the section's structural framework; faceted classification (S.R. Ranganathan); corporate-language/term-disambiguation friction (Abby Covert); the Situation-Need-Task model (Hinton) as a named extension to the existing goal-oriented assumption in the primary-goal requirement; UI-metaphor container/item fidelity; and reified-label misalignment (one label silently merging sources with different visibility scopes). Update `product/SKILL.md`'s procedure and References section to point at the new file.
- `usability`: four new rules in `references/core.md` — mode errors & quasimodes (Raskin & Norman); icon/signifier reuse for different nearby destructive actions (distinct from the existing control-truthfulness rule, which is about a single control's own label-vs-effect mismatch); cross-device structural/scoping consistency; and search/discovery query-and-context preservation across a berrypicking-style, non-linear search session (Bates/Card/Pirolli).
- `trust`: three new rules in `references/core.md` — cross-audience broadcast defaults require explicit active opt-in, never a passive/auto-expiring opt-out default; the public/private destination of a message or post must be high-contrast and unambiguous immediately adjacent to the send control (danah boyd's networked-publics properties); and a storage/sync toggle's warning copy must state where files physically live and what happens to local copies.
- `psychology`: one new rule in `references/attention.md` — unintended semantic juxtaposition of unrelated dynamic content (ads, auto-inserted recommendations) next to sensitive/serious user content (the Kuleshov effect), distinct from the existing banner-blindness/disguised-ad rules (which are about mistaken identity, not meaning-collision).
- `README.md`: add Andrew Hinton's book to the "Evidence base" list of comparison-pass sources.
- `CHANGELOG.md`: add an entry in the same style as prior comparison-pass entries (0.1.6-0.1.11), naming what was added, what was left out, and why.
- `package.json` version bump (patch, per this project's one-SemVer-for-the-whole-plugin convention) plus `scripts/sync-version.mjs` and `scripts/build.mjs`/`scripts/validate.mjs` runs, per this project's standing release gate.

No new skill is introduced. Everything maps to one of the four existing capabilities below.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/product`: information-architecture requirement expands from two rules (structure-vs-mental-model, tree testing) into a broader IA requirement set (IA materials framework, faceted classification, corporate-language friction, situation-need-task framing, metaphor fidelity, reified-label misalignment) and moves to its own reference file.
- `ux-crux/usability`: adds mode-error/quasimode, icon-reuse-ambiguity, cross-device-scoping-consistency, and search-continuity requirements.
- `ux-crux/trust`: adds cross-audience-sharing-default, audience-scope-visibility-at-send, and cloud-sync-deletion-clarity requirements.
- `ux-crux/psychology`: adds an unintended-content-juxtaposition requirement.

## Impact

- Affected source: `src/skills/product/SKILL.md`, `src/skills/product/references/core.md`, new `src/skills/product/references/information-architecture.md`; `src/skills/usability/references/core.md`; `src/skills/trust/references/core.md`; `src/skills/psychology/references/attention.md`.
- Generated distributions (`skills/`, `plugin/skills/`) regenerate from source via `npm run build`; not hand-edited.
- `README.md`, `CHANGELOG.md`, `package.json`, both plugin manifests (via `sync-version`).
- No build tooling, schema, or distribution-mechanism changes.

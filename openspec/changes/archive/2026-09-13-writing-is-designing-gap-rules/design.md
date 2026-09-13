## Context

See `proposal.md` for motivation. This is a content-only change (Markdown reference files); no code, dependency, or runtime-behavior change. It follows the same shape as the prior comparison-pass changes recorded in `CHANGELOG.md` (0.1.6 through 0.1.9): compare a book's extracted item list against the existing `src/skills/*/references/*` catalog, add only items backed by a named, independently verifiable source that fill a confirmed gap, and record deliberate exclusions.

## Goals / Non-Goals

**Goals:**
- Give the `product` skill a way to evaluate tone against user emotional state/journey stage — currently absent from every skill despite a peer-reviewed empirical basis (Polkosky) for treating tone as a usability factor.
- Close ten smaller, independently-sourced content/accessibility/trust/review gaps identified by comparing the book's 36 extracted items against the existing catalog.
- Preserve the one-rule-ID-to-one-destination-file invariant: every new rule ID is added to exactly one existing or new reference file, never duplicated across domains.
- Keep every addition traceable to a named source in the rule table's Sources column (NN/g, WCAG SC, Apple/Android guidance, or a named academic study) — the book is the vehicle that surfaced the rule, not itself the cited authority, except where it documents a real, named practitioner case (e.g. a public voice-guide practice) that has no separate citable source.

**Non-Goals:**
- Not proposing a seventh skill or a new top-level lens. Voice & Tone is scoped as new reference content inside the existing `product` capability.
- Not importing the book's process/strategy/team-practice content (research methods as team practices, internal-advocacy techniques, voice-guideline-authoring workflows, meeting/facilitation tactics, design-system collaboration architecture) — these describe how a UX-writing practice operates, not what a static-evidence review checks.
- Not re-litigating or duplicating rules this pass confirmed are already covered (Usable/Useful/Responsible ~= `psychology` PX01-04; Positive Error Reframing + Avoid-Explain-Resolve ~= `usability` E01-E04; Color/icon independence ~= `accessibility` X02).

## Decisions

**Voice & Tone lives in a new `product/references/voice-tone.md` file, not folded into `core.md`.** `core.md` already covers goal/hierarchy (P-series), information architecture (IA-series), and content (C-series); tone is a distinct enough evaluative dimension (it is about how something is said relative to the user's emotional state, not what is said or how the screen is structured) to warrant its own file, following the same precedent as `web.md` being split out from `core.md` after the eye-tracking pass rather than appended to an already-dense file. `SKILL.md`'s procedure gains one step pointing at it and its own bullet in the References list, mirroring how `web.md` was wired in.

**Confirmation-dialogue simplification is placed in `usability/references/core.md`, attached to A05R/A06R, not as a new spec requirement under `trust`.** The book's six-step technique is about *how to write* a confirmation dialog's title/body/buttons once you already know it needs a specific, consequence-naming confirmation (which `trust`'s "Destructive-action safety" requirement already mandates at the behavior level). Because `usability/core.md`'s A05R/A06R already own this file-level content and `review-model.md`'s cross-lens-synthesis section already anticipates usability and trust jointly covering different angles of the same confirmation-dialog finding (merged at report time, not deduplicated at spec time), a new usability-side requirement is added rather than modifying trust's existing requirement — avoiding a forced edit to trust's requirement text for a concern usability's file already owns.

**Transparent gender/sex/identity data collection is a new `trust` requirement, not a `product` or `usability` one.** `product`'s "Registration and data-minimization check" is about *whether* identity/data is required before value is shown; `trust/core.md`'s O07 is about collecting only necessary data in general. Neither addresses the specific transparency-of-purpose and field-separation concern for demographic/biometric data once collection is already justified. This is narrower and additive to O07, so it is scoped as its own new trust requirement rather than broadening O07's existing text (which stays about minimum necessity, not field design).

**Stress cases vs. edge cases extends `review/references/review-model.md`'s V04, and gets a new spec requirement on `review`**, even though V04 itself is not separately elevated as its own existing spec requirement. The proposed change is an externally observable behavior addition (the review flags an exclusionary constraint it previously might have waved through as an acceptable edge case), which meets the spec instruction's bar ("if the implementation can change without changing externally visible behavior, it likely does not belong in the spec" — this does change visible behavior), so it earns a new `ADDED` requirement rather than being left as internal reference-file color.

**Rule-ID placement for the ten smaller items** follows the existing per-file ID series (`C0x` in product, `X0x` in accessibility, a new `O`-id in trust) rather than inventing a new series, consistent with the rule-coverage-checklist convention referenced in `openspec/config.yaml`'s spec rules. Exact next-available IDs are chosen during implementation by reading each target file's current highest ID at that time (not hardcoded here) to avoid a design/implementation drift if another change lands first.

## Risks / Trade-offs

- **Confirm-shaming and the four-gate ethics test overlap.** `psychology/ethics.md`'s PX01/PX02 already provide a general dual-goal/manipulation test that a confirm-shaming finding would also pass through if `psychology` were applied alongside `product`. Mitigation: the new `product` requirement's scenario is specific to decline-control copy, distinct from `psychology`'s broader mechanism-level gate; `review`'s existing cross-lens-synthesis guidance already handles the case where two lenses flag the same underlying issue by merging rather than double-reporting.
- **Voice & Tone findings could be applied over-broadly** (e.g. penalizing terse, restrained copy as "not human enough"). Mitigation: the Brand-vs-Product-Voice guardrail is written into the requirement itself (see the product spec's "Voice and tone evaluation" pass scenario), not left as an unstated assumption.
- **New trust requirement (identity data transparency) could be read as redundant with O07.** Mitigation: design.md and the reference-file prose both state explicitly that it is narrower/additive, not a replacement, to avoid a future contributor merging or dropping one under the assumption they are duplicates.

## Migration Plan

Content-only change; no migration needed. Standard release gate applies: `npm run build && npm run sync-version && npm run validate` after all reference-file edits, per `tasks.md`.

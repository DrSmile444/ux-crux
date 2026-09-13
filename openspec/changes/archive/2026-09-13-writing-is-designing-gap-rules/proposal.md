## Why

A comparison pass against Michael J. Metts & Andy Welfle's *Writing Is Designing* (Rosenfeld Media, 2020) surfaced two things this project's catalog does not yet cover: (1) a set of specific, independently-verifiable microcopy/content/accessibility rules with no existing home, and (2) Voice & Tone as an entire evaluative axis that is currently absent from every skill — `product` reviews content for clarity and hierarchy but has no way to check whether copy's tone fits the user's emotional state or journey stage, even though a peer-reviewed factor-analysis study (Polkosky) ranks tone-adjacent "customer service behavior" as a top-four driver of overall technology usability. Following this project's established comparison-pass pattern (see CHANGELOG.md 0.1.6-0.1.9), this change adds only the items that trace to a named, independently verifiable source and fill a confirmed gap — not a wholesale import of the book's full extracted item set.

## What Changes

- Add a new reference file `src/skills/product/references/voice-tone.md` establishing Voice & Tone as a reviewable axis under the `product` skill: the Clear > Concise > Human priority triad, tone as a contextual spectrum (not a linear "volume knob") tied to journey stage/emotional state, tone as an empirically measured usability factor (Polkosky study), an anti-idiom/global-scalability rule for celebratory/lifecycle copy, and a Brand-Voice-vs-Product-Voice guardrail bounding when a tone finding applies.
- Extend `product/references/core.md`'s Content section: a confirm-shaming anti-pattern (new C-id, NN/g Deceptive Patterns), a concision-vs-precision trade-off (new C-id), a domain-jargon exception on C01, a cross-reference broadening recognition-over-recall (C01) to all action labels (not just navigation), non-value-assigning disability language and singular "they" as defaults (new C-ids or sub-notes under C05).
- Extend `usability/references/core.md`: a confirmation-dialogue simplification technique attached to A05R/A06R (not a new competing rule ID).
- Extend `trust/references/core.md`: a new O-id specific to transparent gender/sex/identity data-field collection, narrower than O07's general minimum-data principle.
- Extend `accessibility/references/core.md`'s X-series: chronological-vs-spatial instructional language (WCAG SC 1.3.3) and device-agnostic action verbs, as new X-ids.
- Extend `review/references/review-model.md`'s V04: add "stress cases" framing/terminology and a discrimination-awareness example (an arbitrary age-cap validation excluding real populations) as a named extension of V04, not a new V-id.
- Add a new CHANGELOG.md entry (version bump) documenting these additions by domain and citing the book by name, following the exact style of the 0.1.6-0.1.9 entries, including what was deliberately excluded and why.

Explicitly excluded from this change (recorded as deliberate scope decisions, matching how prior passes excluded comparable content):
- The book's own process/strategy/team-practice frameworks: Product Strategy Statement ("Mad Libs"), Exposure Hours team metric, neutral-interview and highlighting/underlining testing as team research *methods*, plain-text-editor prototyping, call-center-cost internal-advocacy technique, "This, but Not That" voice-guideline-authoring framework, tone-profile-audit workflow, Office Hours/meeting-integration tactics, facilitation protocols, and design-system collaboration architecture (Shopify Polaris). These describe how a UX-writing practice operates, not what a static-evidence review should check.
- "Context-Aware Predictive Text Safeguard" (AI-suggested-reply sentiment safety) — too narrow/platform-specific (messaging-app smart-reply chips) to generalize into any existing skill.
- Items already covered by existing rules, needing no action: Usable/Useful/Responsible triad (~= existing `psychology` PX01-04 four-gate test), Positive Error Reframing + Avoid-Explain-Resolve (~= existing `usability` E01-E04), Color/icon independence (~= existing `accessibility` X02).
- Metaphor-consistency audit — judged too broad/unfalsifiable without a narrower named source; deliberate skip.

## Capabilities

### New Capabilities

(none — Voice & Tone is new reference content within the existing `product` capability's scope, not a new skill/domain; per this project's rule, proposing a seventh skill is a scope decision reserved for the user and is not being made here)

### Modified Capabilities

- `ux-crux/product`: new Voice & Tone reference content and procedure step; new/extended Content rules (confirm-shaming, concision-precision, domain-jargon exception, recognition-over-recall cross-reference, disability language, singular "they").
- `ux-crux/usability`: new confirmation-dialogue simplification technique attached to existing confirmation rules.
- `ux-crux/trust`: new rule for transparent gender/sex/identity data-field collection.
- `ux-crux/accessibility`: new rules for chronological-vs-spatial instructional language and device-agnostic action verbs.
- `ux-crux/review`: extended V04 with stress-case framing and example.

## Impact

- Affected source files: `src/skills/product/SKILL.md`, `src/skills/product/references/core.md`, new `src/skills/product/references/voice-tone.md`, `src/skills/usability/references/core.md`, `src/skills/trust/references/core.md`, `src/skills/accessibility/references/core.md`, `src/skills/review/references/review-model.md`.
- `CHANGELOG.md`: new version entry.
- Generated distributions (`skills/`, `plugin/skills/`) are rebuilt via `npm run build` as part of implementation, not hand-edited.
- `package.json` version bump plus `npm run sync-version` and `npm run validate`, per this project's standing release gate for any distributed-content change.
- No API, dependency, or runtime behavior changes — this is Markdown reference content only.

## Why

A book-comparison pass against Cal Newport's *Digital Minimalism* surfaced five narrow gaps in this project's rule catalogs, each traceable to a named, independently verifiable primary source rather than to the book itself: `product` has no check for vague, open-ended feature/permission/onboarding justifications; `trust` covers notification category preferences but not time- or sender-based granularity, and has no rule at all for a badge/indicator's color signaling more urgency than the content warrants; `psychology` has no rule steering relationship-maintenance features toward higher-bandwidth channels, and its habit-formation guidance does not yet say that the same engagement-loop mechanism deserves a stricter default severity on an always-on-body mobile device than on desktop/web. Most of the book's remaining content (solitude/attention-economy philosophy, digital declutter process, single-purpose computing, slow media, community-organizing patterns) is either the author's own unattributed framework, platform/OS-level guidance outside this project's screen/flow-review scope, or already covered by this project's existing ethical-guardrail rules (variable rewards, streaks, autoplay, stopping cues) — all correctly stay out of scope per this project's standing rule against wholesale book imports.

## What Changes

- Add a feature/permission/onboarding-justification requirement to `product`: before a flow ships, the design should be evaluable against (a) which concrete user value it serves, (b) why it is the best way to serve that value, and (c) explicit operating boundaries for when/how it is used — flagging vague value propositions ("stay connected," "never miss out") used to justify open-ended, unconstrained access. Cites the Fogg Behavior Model's ability/motivation framing and Apple/Android's own "minimum necessary access" permission-justification guidance as the verifiable grounding, not the book.
- Add a granularity requirement to `trust`: notification controls should support time-based quiet hours and sender/contact-level allowlisting, not only category on/off toggles — citing Apple Focus and Android Do Not Disturb + priority-senders as the platform-contract source.
- Add a badge/indicator-urgency requirement to `trust`: a badge or unread indicator's color and visual intensity must not signal higher urgency than the underlying content's actual criticality — citing Apple HIG's own framing of badges as supplementary (not for critical information) together with published color-arousal/urgency-perception research. A well-known industry anecdote (a major social platform's red-vs-blue badge test) may illustrate the finding but is never its evidentiary basis.
- Add a channel-bandwidth requirement to `psychology`: for relationship-maintenance use cases (not pure logistics), the design should route users toward higher-bandwidth channels (voice, video, in-person) rather than positioning low-bandwidth async text/reactions as a full substitute for conversation — citing Sherry Turkle (MIT).
- Add a mobile-context severity-calibration requirement to `psychology`: an engagement-loop finding under the existing habit-formation rules (variable rewards, streaks, autoplay, missing stopping cues) gets a default severity at the higher end of the applicable band when observed on a mobile device, because the device is carried on-body and continuously reachable, amplifying the same mechanism's real-world impact versus an equivalent desktop/web finding. This is a calibration of the existing severity bands (`../../shared/severity-model.md`), not a new severity level or a new rule ID.
- Regenerate `skills/` and `plugin/skills/` distributions from the updated `src/skills/` source and pass the existing validation/version-sync gate.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/product`: adds a requirement that the product skill SHALL flag a feature, permission request, or onboarding flow that lacks a stated concrete user value, a stated reason it is the best way to serve that value, and explicit operating boundaries — distinct from the existing registration-before-value requirement, which covers only identity/personal-data gating.
- `ux-crux/trust`: adds a requirement that the trust skill SHALL check for time-based and sender/contact-based notification granularity beyond category toggles, and SHALL flag a badge/unread indicator whose color or visual intensity signals higher urgency than the underlying content's actual criticality.
- `ux-crux/psychology`: adds a requirement that the psychology skill SHALL flag communication features that position low-bandwidth async interaction as a substitute for relationship-maintenance conversation rather than routing toward a higher-bandwidth channel, and SHALL apply a default severity at the higher end of the applicable band to mobile engagement-loop findings versus an equivalent desktop/web finding.

## Impact

- `src/skills/product/references/core.md` — new rule (next available `P0x` ID) plus a "how to apply" addition.
- `src/skills/trust/references/mobile.md` — new rule extending the `O0x` notification series (granularity) and a new rule in the `I0x` interruption series (badge/indicator urgency-color mismatch).
- `src/skills/psychology/references/social.md` — new rule (next available `PT0x` ID) for channel bandwidth.
- `src/skills/psychology/references/habits.md` — "how the psychology skill should apply these" gains a mobile-severity calibration note; no new `PH0x` ID.
- `src/skills/product/SKILL.md`, `src/skills/trust/SKILL.md`, `src/skills/psychology/SKILL.md` — procedure/reference updates to mention the new rules.
- `openspec/specs/ux-crux/product/spec.md`, `openspec/specs/ux-crux/trust/spec.md`, `openspec/specs/ux-crux/psychology/spec.md` each get a delta adding the requirement(s) above (via this change's `specs/` artifact).
- Generated output (`skills/ux-crux-product`, `skills/ux-crux-trust`, `skills/ux-crux-psychology`, and their `plugin/skills/` counterparts) is rebuilt via `npm run build` — not hand-edited.
- No changes to `usability`, `accessibility`, `review`, or `src/shared/*`.

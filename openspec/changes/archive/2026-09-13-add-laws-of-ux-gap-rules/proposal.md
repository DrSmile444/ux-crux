## Why

An external UX-research synthesis pass compared this project's existing rule catalogs (`usability`, `psychology`, `trust`) against a well-known popular synthesis of classic UX psychology laws. Most of what that synthesis covers is already encoded here, often more rigorously (named NN/g articles, WCAG SC numbers, Apple HIG/Android guidance, named academic studies) than the synthesis itself. The comparison surfaced a small number of genuine, narrow gaps: places where this project's rule catalog is silent on a specific, well-evidenced point, or where an existing rule's citation conflates two distinct research findings. Closing these gaps sharpens review accuracy without duplicating what already exists.

## What Changes

- Add a folk-rule guard to `usability` debunking "navigation must have ≤7 items because of working-memory limits" — the limit applies to active recall, not to continuously visible choices.
- Add a rule to `psychology`'s attention reference distinguishing legitimate content styled like an ad banner (which selective attention filters out) from a deliberately prominent CTA (already covered) — the missing case is under-emphasis via ad-like styling, not over-emphasis.
- Sharpen `usability`'s responsiveness reference so the classic 0.1s/1s/10s perceived-response heuristic (already present) is no longer the only cited threshold: add the distinct sub-400ms flow-state finding (Doherty & Thadani, 1982) as its own cited point, since the two are different research results with different practical implications and were previously easy to conflate.
- **New capability behavior for `trust`**: add a rule recognizing deliberate, brief friction/staging (e.g., an animated "checking"/"scanning" step) as a legitimate trust-building technique for high-stakes or security-sensitive actions — distinct from the existing destructive-action confirmation rules, which exist to prevent accidental loss rather than to build perceived thoroughness/trust.
- Add a concrete example figure (up to ~300% text growth for some language pairs) to `usability`'s existing text-expansion/localization rule, as a citable number reviewers can use when assessing layout resilience.
- Regenerate `skills/` and `plugin/skills/` distributions from the updated `src/skills/` source and pass the existing validation/version-sync gate.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/trust`: adds a requirement that the trust skill SHALL evaluate whether high-stakes or security-sensitive actions use deliberate friction/staging as a trust signal, distinct from its existing destructive-action-confirmation requirement (which addresses accidental-loss prevention, not perceived trust/thoroughness).

The other four changes (Miller's-Law folk-rule guard, banner-blindness attention rule, Doherty-threshold citation split, text-expansion example) add reference content and citation precision under `usability` and `psychology`'s existing spec requirements — none of them change what those two skills are already required to evaluate (folk-rule contextualization, attention-mechanism analysis, perceived-response feedback), so no delta spec is needed for `usability` or `psychology`. They are captured in Impact/tasks only.

## Impact

- `src/skills/usability/references/core.md` — new folk-rule guard table row (Miller's Law / 7-item myth); Responsiveness section gains a distinct Doherty-threshold citation alongside the existing 0.1/1/10s heuristic (R01R).
- `src/skills/usability/references/mobile.md` — L07 gains a concrete text-expansion percentage example.
- `src/skills/psychology/references/attention.md` — new rule (next `PA0x` ID) for ad-pattern/banner-blindness avoidance; "How the psychology skill should apply these" section gets a short addition if the new rule needs framing beyond the existing PA03/PA04 guidance.
- `src/skills/trust/references/core.md` — new rule (next available ID in that file's scheme) for strategic friction as a trust signal; `src/skills/trust/SKILL.md` procedure gains a step referencing it.
- `src/skills/trust/../../specs/... ` — actually: `openspec/specs/ux-crux/trust/spec.md` gets a delta adding the new requirement (via this change's `specs/` artifact).
- Generated output (`skills/ux-crux-*`, `plugin/skills/*`) is rebuilt via `npm run build`, then `npm run sync-version` and `npm run validate` — not hand-edited.
- No changes to `accessibility`, `product`, or `review` skills, or to `src/shared/*`.

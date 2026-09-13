---
name: ux-crux-usability
description: Use when the user wants to review task flow, interaction friction/efficiency, navigation, forms, system status/feedback, or error handling in a UI or feature — not a full multi-lens review, and not primarily an accessibility, psychology, product-goal, or trust/permissions concern (use the matching sibling skill for those instead).
license: MIT
metadata:
  author: ux-crux
  version: "0.1.11"
---

Review task flow, interaction efficiency, navigation, forms, system status, and error recovery for the evidence provided (screenshot, description, code, or running build).

## Procedure

1. Identify the primary task and check whether the flow adds unnecessary steps, decisions, or mode switches (see `references/core.md`'s Actions/Forms/System status rules).
2. Check whether any explicit user-initiated action (e.g. tapping Search) is followed by immediate readiness for the implied next action — see `references/mobile.md`'s worked example on autofocus after Search, and the interaction-efficiency rules in both files.
3. Build a state matrix for the evidence: loading, empty, no-results, offline, validation error, backend error, destructive recovery. Report which states are shown, which are missing, and which cannot be assessed from this evidence (`shared/evidence-model.md`).
4. Before flagging a common "folk rule" violation (hamburger menu, thumb zone, skeleton-vs-spinner, step count, disabled buttons, gestures, animation), check `references/core.md`'s "Folk-rule guards" table for the contextual encoding — do not fail a design solely for matching the folk rule's surface pattern.
5. If the evidence names a platform (iOS/Android), apply `references/mobile.md`'s platform-contract rules (navigation, touch/gesture ergonomics, adaptive layout) using the correct platform's specifics — do not apply one platform's numbers to the other.
6. Tag every finding with evidence status, severity, and confidence, and report using `shared/report-contract.md`.

## References

- `references/core.md` — platform-agnostic task, action, form, system-status, error-recovery, search, responsiveness, and interaction-efficiency rules, plus folk-rule guards.
- `references/mobile.md` — iOS/Android navigation, gesture/thumb-zone ergonomics, adaptive layout, and platform-API focus-management rules, plus the Search-autofocus worked example.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

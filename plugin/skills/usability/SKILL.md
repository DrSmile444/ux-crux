---
name: usability
description: Use when the user wants to review task flow, interaction friction/efficiency, navigation, forms, system status/feedback, or error handling in a UI or feature — not a full multi-lens review, and not primarily an accessibility, psychology, product-goal, or trust/permissions concern (use the matching sibling skill for those instead).
license: MIT
metadata:
  internal: true
  author: ux-crux
  version: "0.1.16"
---

Review task flow, interaction efficiency, navigation, forms, system status, and error recovery for the evidence provided (screenshot, description, code, or running build).

## Procedure

1. Identify the primary task and check whether the flow adds unnecessary steps, decisions, or mode switches (see `references/core.md`'s Actions/Forms/System status rules) — including whether a persistent mode is visibly indicated (A11R) and whether a reused icon/signifier carries conflicting meanings nearby (A12R).
2. Check whether any explicit user-initiated action (e.g. tapping Search) is followed by immediate readiness for the implied next action — see `references/mobile.md`'s worked example on autofocus after Search, and the interaction-efficiency rules in both files. If the evidence includes a search/discovery flow, also check that query terms and context persist across a non-linear session (D07), and if it spans multiple devices, check that scoping/containment defaults stay consistent (N17R).
3. Build a state matrix for the evidence: loading, empty, no-results, offline, validation error, backend error, destructive recovery. Report which states are shown, which are missing, and which cannot be assessed from this evidence (`shared/evidence-model.md`).
4. Before flagging a common "folk rule" violation (hamburger menu, thumb zone, skeleton-vs-spinner, step count, disabled buttons, gestures, animation), check `references/core.md`'s "Folk-rule guards" table for the contextual encoding — do not fail a design solely for matching the folk rule's surface pattern.
5. If the evidence names a platform (iOS/Android), apply `references/mobile.md`'s platform-contract rules (navigation, touch/gesture ergonomics, adaptive layout) using the correct platform's specifics — do not apply one platform's numbers to the other.
6. If the evidence includes a visual layout (a screenshot, design comp, or description of one), also check `references/visual-hierarchy.md`'s VH01-VH03 (deliberate contrast, grid-based consistency, and decorative-clutter avoidance), applying its Squint test alongside `product`'s P02.
7. When a control-level finding is identified (from `core.md`'s Actions section or an accessibility concern), classify it by affordance type using `references/affordances.md`'s AF01 (Cognitive/Physical/Sensory/Functional) to sharpen the stated cause; if the evidence shows a user-created workaround artifact (a taped label, sticky note, cheat-sheet), apply AF02 as a strong signal of a missing built-in affordance.
8. If the evidence includes a voice user interface or voice-assistant interaction, apply `references/voice.md`'s VU01-VU02 (command-scope limiting, sonic-persona alignment) — this modality addendum does not apply to screen-only evidence.
9. Tag every finding with evidence status, severity, and confidence, and report using `shared/report-contract.md`.

## References

- `references/core.md` — platform-agnostic task, action, form, system-status, error-recovery, search, responsiveness, and interaction-efficiency rules, plus folk-rule guards.
- `references/mobile.md` — iOS/Android navigation, gesture/thumb-zone ergonomics, adaptive layout, and platform-API focus-management rules, plus the Search-autofocus worked example.
- `references/visual-hierarchy.md` — visual hierarchy/consistency rules (VH01-VH03): deliberate contrast vs. confusing near-uniformity, grid-based internal/external consistency, decorative-clutter avoidance, plus the Squint test technique; apply in addition to `core.md`, not instead of it.
- `references/affordances.md` — the Four Kinds of Affordances (AF01) as a diagnostic vocabulary for control-level findings, plus user-created affordance artifacts as a diagnostic signal (AF02); apply after a control-level finding is already identified, not as a standalone source of new findings.
- `references/voice.md` — Voice UI (VUI) command-scope and sonic-persona-alignment rules (VU01-VU02); applies only when the evidence includes a voice interaction.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

---
type: llm
weight: 1
---

Pass if the agent invoked the `ux-crux:usability` skill (interaction efficiency / task flow is the clear primary concern — a second tap forced by a missing autofocus is exactly this skill's intent-continuation rules), rather than `ux-crux:accessibility` or `ux-crux:psychology`.

Fail if no ux-crux skill was invoked, or if a different domain skill was invoked instead of usability without a reasonable justification.

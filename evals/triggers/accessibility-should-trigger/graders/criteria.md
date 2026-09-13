---
type: llm
weight: 1
---

Pass if the agent invoked the `ux-crux:accessibility` skill and applied the Android-specific 48x48dp target-size minimum (not the iOS 44x44pt figure) to the 32x32dp button.

Fail if no ux-crux skill was invoked, if a different domain skill was invoked instead, or if the agent applied the wrong platform's target-size number.

---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:psychology` (this is a motivation/completion-effect question, explicitly not about permissions or privacy) and did not primarily invoke `ux-crux:trust`, even though the scenario is set during onboarding.

Fail if `ux-crux:trust` was invoked as the primary or only skill despite the request explicitly excluding permission/privacy concerns and focusing on a motivational mechanism.

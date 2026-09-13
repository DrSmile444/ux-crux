---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:usability` and did not primarily invoke `ux-crux:accessibility` — the request explicitly rules out contrast/screen-reader/touch-target concerns and is purely about interaction-efficiency/focus behavior.

Fail if `ux-crux:accessibility` was invoked as the primary or only skill despite the request explicitly excluding accessibility concerns.

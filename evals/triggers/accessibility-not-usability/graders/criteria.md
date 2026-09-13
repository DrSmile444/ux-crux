---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:accessibility` and did not primarily invoke `ux-crux:usability` — the request is specifically about screen-reader semantics and color-only state, both accessibility concerns, and explicitly excludes task-flow/navigation.

Fail if `ux-crux:usability` was invoked as the primary or only skill despite the request being scoped to accessibility semantics.

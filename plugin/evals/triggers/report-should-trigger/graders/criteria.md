---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:report` (the request is to render existing findings, not to review again).

Fail if the agent invoked `ux-crux:review` or a domain skill to review the flow again instead of rendering the given findings.

---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:review` (or a domain skill) and gave a text report, and did not invoke `ux-crux:report` or write an HTML report: the user did not ask for one.

Fail if the agent invoked `ux-crux:report` or wrote a findings file or HTML page.

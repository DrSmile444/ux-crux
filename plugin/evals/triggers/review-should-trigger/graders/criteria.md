---
type: llm
weight: 1
---

Pass if the agent invoked the `ux-crux:review` skill (the full-audit entry point) rather than going straight to only one of the five domain skills (`usability`, `psychology`, `accessibility`, `product`, `trust`) without first considering the broader scope. The request explicitly asks for "everything that's wrong", which is a full-spectrum request, not a single-lens one.

Fail if the agent answered from general knowledge without invoking any ux-crux skill, or invoked only a single narrow domain skill without any indication it considered multiple lenses.

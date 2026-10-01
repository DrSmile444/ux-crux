---
type: llm
weight: 1
---

Pass if the agent invoked `ux-crux:report`, rendered `ux-crux-reports/2026-10-01-checkout-single/report.html` from the given findings file, and gave the user the path with a one-line summary (5 findings, 2 blockers, 2 majors).

Fail if the agent re-reviewed the screen, added, removed or reworded findings, or changed rule ids in the findings file.

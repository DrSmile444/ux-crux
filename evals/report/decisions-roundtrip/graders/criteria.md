---
type: llm
weight: 1
---

Pass if the agent:
1. Wrote a `decision` (option, comment, date) into exactly UX-ACC-001, UX-ACT-001 and UX-PSY-001 in `findings.json`, with the options a, b and not-an-issue and the comments as given.
2. Rendered `report.html` again in the same folder.
3. Reported what it recorded, and did not change code or findings because of the decisions.

Fail if decisions are recorded on other findings, if the report is written to a new path, or if findings are deleted or edited.

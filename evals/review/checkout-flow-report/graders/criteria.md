---
type: llm
weight: 1
---

Pass if all of these hold:
1. The response gives the normal text report (blockers and majors first, category health, missing context, top 3) covering the touch target, the no-confirmation charge, the permissions at launch, and the resetting countdown.
2. The agent wrote a `findings.json` and a `report.html` under a `ux-crux-reports/<date>-<slug>/` folder (or a folder the response names), and gave the user the path.
3. The findings file holds the same findings as the text report; every finding cites qualified rule ids (for example `accessibility/mobile.md#T02`), has one to three fix options with exactly one recommended, and every blocker and major finding has a picture.
4. The agent rendered the page with the shared renderer (or the documented fallback) and did not hand-write per-finding markup.
5. The agent did not publish or upload the report.

Fail if no HTML file was written, if the findings file has findings the text report does not, or if a picture of a reconstructed or schematic state is described as a real screenshot.

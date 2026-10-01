---
type: llm
weight: 1
---

Pass if the agent wrote a findings file with `language: "uk"` and a `strings` object, rendered `report.html`, and the findings' titles, observations, options and captions are in Ukrainian, while rule ids (for example `accessibility/mobile.md#T02`, `usability/core.md#A05R`), severity, evidence status and the quoted rule and Sources text stay exactly as in the catalog.

Fail if the report is in English, or if rule text or Sources text is translated.

---
name: report
description: Use when the user wants an existing ux-crux review turned into a visual HTML report — a triage page that shows each finding with its rule, the rule's source, a picture, and fix options, so a designer, product owner, or client can pick decisions and paste them back — or when the user pastes decisions copied from such a report. Renders findings only; it never reviews. For a new review, use the review skill (or a domain skill) with its "report" argument instead.
license: MIT
metadata:
  internal: true
  author: ux-crux
  version: "0.2.0"
---

Render a ux-crux findings file as one self-contained HTML triage report, and record the decisions the reader pastes back. This skill never evaluates rules and never adds, removes, or changes findings.

## Procedure

1. **Find the findings file.** Use, in order: the path the user gives; the newest `ux-crux-reports/*/findings.json` in the working directory; a review completed earlier in this conversation that has no findings file yet.
2. **If there is a review but no file**, write `findings.json` from that review per `shared/findings-contract.md`, with exactly the findings, sections, and rule IDs of the text report. Copy each cited rule's Rule and Sources cells from the reference files that the review cited; if you cannot read those files, say so and stop.
3. **If there is no review at all**, say that a review must come first and offer to run one (for example the review skill with `report`). Produce no page.
4. **Render** per `shared/report-render.md`: language, pictures, options, then `node <skill-dir>/shared/render-report.mjs <findings.json>`, where `<skill-dir>` is the folder that holds this `SKILL.md`. Fix every contract error it prints and render again.
5. **Hand over** the path and a one-line summary, per `report-render.md` section 6.
6. **Decision round.** When the user pastes decision lines, follow `report-render.md` section 7: record each decision in `findings.json`, render again to the same `report.html`, and report what was recorded.

## References

- `shared/findings-contract.md` — the findings file format.
- `shared/report-render.md` — folder, language, options, pictures, render command, hand-over, decision round.
- `shared/report-template.html`, `shared/render-report.mjs` — the page and its renderer.
- `shared/report-contract.md`, `evidence-model.md`, `severity-model.md` — the report shape and vocabularies the findings use.

## Boundaries

This skill does not review. Pictures and options come from the review that produced the findings; when a required picture is missing and a capture or the code is at hand, add it per `report-render.md`, and never add a finding to fill the page.

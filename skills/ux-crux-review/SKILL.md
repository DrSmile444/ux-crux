---
name: ux-crux-review
description: Use when the user asks for a broad, comprehensive, general, or end-to-end UX review of a feature, screen, flow, app, or implementation — across multiple dimensions (usability, accessibility, psychology, product, trust) rather than one specific angle. If the request already narrows to one angle (e.g. "check accessibility", "is this manipulative"), prefer the matching domain skill instead.
license: MIT
metadata:
  author: ux-crux
  version: "0.1.6"
---

Review the user-facing product, feature, flow, screen, or implementation described or shown, across every UX dimension relevant to the evidence provided. Never invent behavior that cannot be observed — see `shared/evidence-model.md`.

## Procedure

1. **Determine scope.** Read `references/review-model.md`'s lens-selection procedure. Decide which of usability, psychology, accessibility, product, and trust apply, and what evidence is actually available (screenshot, description, running build, code).
2. **State the scope before findings.** Name which lenses you applied and why, and which you could not apply due to the evidence type.
3. **Evaluate each applicable lens.** This package bundles every domain's rule content under `domains/<domain>/` (generated from that domain's own skill, so it is always present here regardless of whether the domain skills are also installed). Load only the `domains/<lens>/...` files you need for the lenses in scope — do not pull in all five domains' full reference material for a narrowly-scoped review. For example: `domains/usability/core.md` and `domains/usability/mobile.md`, `domains/psychology/*.md`, `domains/accessibility/core.md` and `domains/accessibility/mobile.md`, `domains/product/core.md`, `domains/trust/core.md` and `domains/trust/mobile.md`.
4. **Tag every finding** with an evidence status (`shared/evidence-model.md`), a severity (`shared/severity-model.md`), and a confidence level.
5. **Synthesize.** Merge overlapping findings across lenses per `references/review-model.md`'s cross-lens synthesis guidance — do not produce five separate mini-reports.
6. **Report** using the exact structure in `shared/report-contract.md`: blockers and majors first, category health per lens, missing states/context, top-3 highest-impact changes, then moderate/minor findings, with an optional capped score last.

## References

- `references/review-model.md` — lens selection, cross-lens synthesis, and the validation-methodology rules (V01-V05) that govern how confident this skill is allowed to be.
- `domains/usability/`, `domains/psychology/`, `domains/accessibility/`, `domains/product/`, `domains/trust/` — a generated, self-contained copy of each domain skill's own reference material (kept in sync with that domain's `src/skills/<domain>/references/` by the build step). Read these directly; do not assume the sibling domain skills are installed alongside this one.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md` — shared across every ux-crux skill; read these once, they are not repeated here.

## Boundaries

This skill does not gatekeep the five domain skills — `usability`, `psychology`, `accessibility`, `product`, and `trust` are independently invocable and complete on their own for a narrowly-scoped request. Use this skill when the request is broad or the right lens is unclear, not by default for every UX question. The reverse also holds: this skill does not require any of those five domain skills to be installed either — its own package under `domains/` already carries everything it needs.

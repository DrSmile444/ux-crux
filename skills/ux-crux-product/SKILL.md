---
name: ux-crux-product
description: Use when the user wants review of a screen or flow's primary goal clarity, information hierarchy, content/UX writing, or whether onboarding/registration is justified before value is shown — whether the design serves user intent vs. internal product structure. Not for interaction mechanics (use `usability`) or persuasive-mechanism ethics (use `psychology`).
license: MIT
metadata:
  author: ux-crux
  version: "0.1.8"
---

Review goal clarity, information architecture, and content for the evidence provided.

## Procedure

1. Identify the single primary user goal for the reviewed screen/flow. If none is identifiable, that is itself a finding (see `references/core.md`'s P01).
2. Check whether the primary action is visually prioritized over secondary actions, and whether content/controls serve the stated goal rather than internal product structure.
3. Check whether registration, login, or personal-data collection is required before the user sees any value, and whether that requirement is justified (identity intrinsic to the task, or safety/security) — if product context is missing, mark this `NOT ASSESSABLE` rather than assuming either answer (`shared/evidence-model.md`).
4. Check navigation, labeling, and categorization against the information-architecture rules (`references/core.md`'s IA01-IA02): is the structure organized around user mental models and content rather than internal system/department structure, and has it been validated with tree testing rather than visual review alone?
5. Check content and copy (`references/core.md`'s Content rules): does it use the user's vocabulary, describe the actual action/problem, and avoid vague labels like generic "OK" where a specific action is describable?
6. Check any feature, permission request, or onboarding flow against `references/core.md`'s P08: does it name a concrete user value, why it's the best available way to serve that value, and explicit operating boundaries for its use — distinct from P06's narrower identity/data-gating check?
7. Tag every finding with evidence status, severity, and confidence, and report using `shared/report-contract.md`.

## References

- `references/core.md` — purpose/task-model rules (P01-P08), information-architecture rules (IA01-IA02), and content/UX-writing rules (C01-C06).
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

---
name: product
description: Use when the user wants review of a screen or flow's primary goal clarity, information hierarchy, content/UX writing, or whether onboarding/registration is justified before value is shown — whether the design serves user intent vs. internal product structure. Not for interaction mechanics (use `usability`) or persuasive-mechanism ethics (use `psychology`).
license: MIT
metadata:
  author: ux-crux
  version: "0.1.0"
---

Review goal clarity, information architecture, and content for the evidence provided.

## Procedure

1. Identify the single primary user goal for the reviewed screen/flow. If none is identifiable, that is itself a finding (see `references/core.md`'s P01).
2. Check whether the primary action is visually prioritized over secondary actions, and whether content/controls serve the stated goal rather than internal product structure.
3. Check whether registration, login, or personal-data collection is required before the user sees any value, and whether that requirement is justified (identity intrinsic to the task, or safety/security) — if product context is missing, mark this `NOT ASSESSABLE` rather than assuming either answer (`../../shared/evidence-model.md`).
4. Check navigation, labeling, and categorization against the information-architecture rules (`references/information-architecture.md`'s IA01-IA05): is the structure organized around user mental models and content — including a situational entry point for users who haven't yet identified their task — rather than internal system/department structure, and has it been validated with tree testing rather than visual review alone? If the evidence is a catalog forced into one rigid hierarchy, a single-attribute-only structure, an internal-org-exposing sign-in/navigation split, or a UI metaphor/merged-source label, also check IA03-IA05.
5. Check content and copy (`references/core.md`'s Content rules): does it use the user's vocabulary, describe the actual action/problem, and avoid vague labels like generic "OK" where a specific action is describable?
6. Check any feature, permission request, or onboarding flow against `references/core.md`'s P08: does it name a concrete user value, why it's the best available way to serve that value, and explicit operating boundaries for its use — distinct from P06's narrower identity/data-gating check?
7. If the evidence is a product-detail page built around one featured item, also check `references/core.md`'s P09 (cross-sell placement); if the evidence is text-heavy or web-rendered content (an article, landing page, or long-form informational page), also check `references/web.md`'s text-scanning and typography rules (C07-C12).
8. Check the copy's voice and tone against `references/voice-tone.md`'s VT01-VT05: clarity before concision before human warmth, tone fit for the user's journey stage/emotional state, and the Brand-vs-Product-Voice guardrail bounding when a tone finding applies.
9. Tag every finding with evidence status, severity, and confidence, and report using `../../shared/report-contract.md`.

## References

- `references/core.md` — purpose/task-model rules (P01-P09) and content/UX-writing rules (C01-C06 plus C13-C17).
- `references/information-architecture.md` — information-architecture rules (IA01-IA05): user-mental-model/situational-entry-point structure, tree testing, faceted classification, corporate-language/organizational-structure leaks, and UI-metaphor/merged-source label fidelity; apply in addition to `core.md`, not instead of it.
- `references/web.md` — text-scanning and typography rules (C07-C12) for text-heavy or web-rendered content; apply in addition to `core.md`, not instead of it.
- `references/voice-tone.md` — voice and tone rules (VT01-VT05): the Clear/Concise/Human priority triad, tone as a contextual spectrum, tone as a measured usability factor, anti-idiom/global-scalability, and the Brand-vs-Product-Voice guardrail; apply in addition to `core.md`, not instead of it.
- `../../shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

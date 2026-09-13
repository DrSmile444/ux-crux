---
name: trust
description: Use when the user wants review of permission-request timing, onboarding necessity, destructive-action safety (undo vs. confirmation), notification honesty, or other trust/safety signals in a flow. Not for general task-flow review (use `usability`) or persuasive-mechanism ethics unrelated to trust/permissions (use `psychology`).
license: MIT
metadata:
  author: ux-crux
  version: "0.1.0"
---

Review permission/onboarding/interruption timing, destructive-action safety, and trust signals for the evidence provided.

## Procedure

1. Check whether permissions are requested in context (when the user invokes the feature that needs them) rather than at startup — see `references/mobile.md`'s onboarding/permission rules, and check that denial degrades gracefully rather than blocking the app.
2. Check destructive actions: routine reversible ones should offer undo rather than a confirmation dialog; irreversible or high-cost ones need a specific confirmation naming the action and consequence, not a generic Yes/No — see `references/core.md`'s destructive-action rules and "Folk-rule guards" (the "always confirm delete" myth).
3. For high-stakes or security-sensitive actions specifically, check whether deliberate brief friction/staging is used (or missing) as a trust signal — see `references/core.md`'s E08, and apply it narrowly in both directions (not a license for friction on routine actions; missing friction on genuinely high-stakes actions is a finding).
4. Check notifications for honesty: marketing content must not be framed as urgent/system-critical, and users should be able to manage notification categories when notifications matter to the product — see `references/mobile.md`'s interruption rules.
5. If the evidence cannot show actual permission-flow behavior or notification content (e.g. a single static screenshot), mark those findings `NOT ASSESSABLE` — see `../../shared/evidence-model.md`.
6. Tag every finding with evidence status, severity, and confidence, and report using `../../shared/report-contract.md`.

## References

- `references/core.md` — platform-agnostic onboarding/trust rules, destructive-action-confirmation rules, the "always confirm delete" folk-rule guard, and the strategic-friction-as-trust-signal rule (E08) for high-stakes/security-sensitive actions.
- `references/mobile.md` — platform-contract permission/notification timing and interruption-handling rules.
- `../../shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

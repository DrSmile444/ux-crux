---
name: ux-crux-trust
description: Use when the user wants review of permission-request timing, onboarding necessity, destructive-action safety (undo vs. confirmation), notification honesty, or other trust/safety signals in a flow. Not for general task-flow review (use `usability`) or persuasive-mechanism ethics unrelated to trust/permissions (use `psychology`).
license: MIT
metadata:
  author: ux-crux
  version: "0.1.3"
---

Review permission/onboarding/interruption timing, destructive-action safety, and trust signals for the evidence provided.

## Procedure

1. Check whether permissions are requested in context (when the user invokes the feature that needs them) rather than at startup — see `references/mobile.md`'s onboarding/permission rules, and check that denial degrades gracefully rather than blocking the app.
2. Check destructive actions: routine reversible ones should offer undo rather than a confirmation dialog; irreversible or high-cost ones need a specific confirmation naming the action and consequence, not a generic Yes/No — see `references/core.md`'s destructive-action rules and "Folk-rule guards" (the "always confirm delete" myth).
3. Check notifications for honesty: marketing content must not be framed as urgent/system-critical, and users should be able to manage notification categories when notifications matter to the product — see `references/mobile.md`'s interruption rules.
4. If the evidence cannot show actual permission-flow behavior or notification content (e.g. a single static screenshot), mark those findings `NOT ASSESSABLE` — see `shared/evidence-model.md`.
5. Tag every finding with evidence status, severity, and confidence, and report using `shared/report-contract.md`.

## References

- `references/core.md` — platform-agnostic onboarding/trust rules and destructive-action-confirmation rules, plus the "always confirm delete" folk-rule guard.
- `references/mobile.md` — platform-contract permission/notification timing and interruption-handling rules.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

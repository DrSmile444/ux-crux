---
name: accessibility
description: Use when accessibility, WCAG conformance, screen readers (VoiceOver/TalkBack), keyboard/switch access, color contrast, touch target size, text scaling, or gesture alternatives are the primary concern. Not for general task-flow review (use `usability`) or persuasive-mechanism ethics (use `psychology`).
license: MIT
metadata:
  internal: true
  author: ux-crux
  version: "0.1.20"
---

Review WCAG conformance and inclusive interaction for the evidence provided.

## Procedure

1. Identify the target platform (iOS, Android, web/hybrid). This determines which target-size minimum applies — see `references/mobile.md` for the platform-specific numbers (iOS 44x44pt, Android 48x48dp) versus `references/core.md` for the WCAG 2.2 web/hybrid criteria. Never apply one platform's number to another.
2. Check color/contrast (never color-alone), text-scaling resilience (Dynamic Type / Android scalable units — platform-specific in `references/mobile.md`), and non-gesture access (no essential function locked behind a gesture with no alternative) using `references/core.md`.
3. Check accessible names/roles/reading order and assistive-technology semantics; flag anything that would break VoiceOver/TalkBack navigation.
4. If the evidence cannot show real hit-region size, actual reading order, or live text-scaling behavior (e.g. a static screenshot), mark those findings `NOT ASSESSABLE` rather than guessing — see `shared/evidence-model.md`.
5. Tag every finding with evidence status, severity, and confidence (most accessibility findings default to `blocker` or `major` — do not soften them without reason), and report using `shared/report-contract.md`.

## References

- `references/core.md` — WCAG/universal accessibility rules and the target-size/spacing/dragging-alternative rules that apply across platforms.
- `references/mobile.md` — iOS/Android-specific target-size numbers and text-scaling implementation.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

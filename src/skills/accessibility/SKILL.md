---
name: accessibility
description: Use when accessibility, WCAG conformance, screen readers (VoiceOver/TalkBack), keyboard/switch access, color contrast, touch target size, text scaling, or gesture alternatives are the primary concern. Not for general task-flow review (use `usability`) or persuasive-mechanism ethics (use `psychology`). Accepts an optional "smart" or "full" argument: "smart" (the default) selects rules using judgment; "full" performs a mandatory, exhaustive rule-by-rule sweep of every applicable rule instead.
license: MIT
metadata:
  author: ux-crux
  version: "0.1.0"
---

Review WCAG conformance and inclusive interaction for the evidence provided.

## Procedure

**Mode.** By default (no argument, or an explicit "smart" argument) this skill selects which rules to check using judgment, as described in the steps below. When invoked with an argument recognizable as "full" (case-insensitive), it instead performs a mandatory, exhaustive sweep: for every rule row in `core.md` and the platform-applicable rows of `mobile.md`, explicitly record VIOLATED / NOT VIOLATED / NOT ASSESSABLE / NOT APPLICABLE before writing the narrative report, rather than relying on judgment to select a subset. Show this checklist before the report. If the argument is present but is neither "full" nor "smart", ask the user which mode they intended rather than guessing.

**When to choose.** Default to `smart` for everyday review work — it already reaches full recall on directly-evidenced violations, at negligible extra cost. Reach for `full` when the report itself needs to be defensible as a complete audit trail rather than a sampling: a pre-launch/release gate, a compliance- or safety-sensitive surface (payments, health data, legal/accessibility exposure), a re-check after a prior review turned out to have missed something, or handing findings to a stakeholder — legal, compliance, a client — who needs proof every rule was checked. `full` costs meaningfully more on a large rule catalog and only marginally more on a small one; weigh that against how much an audit trail is worth for this particular review.

1. Identify the target platform (iOS, Android, web/hybrid). This determines which target-size minimum applies — see `references/mobile.md` for the platform-specific numbers (iOS 44x44pt, Android 48x48dp) versus `references/core.md` for the WCAG 2.2 web/hybrid criteria. Never apply one platform's number to another.
2. Check color/contrast (never color-alone), text-scaling resilience (Dynamic Type / Android scalable units — platform-specific in `references/mobile.md`), and non-gesture access (no essential function locked behind a gesture with no alternative) using `references/core.md`.
3. Check accessible names/roles/reading order and assistive-technology semantics; flag anything that would break VoiceOver/TalkBack navigation. This includes `core.md`'s X17-X22: hover-only affordances with no tap/focus equivalent (X17), visited-link color distinction (X18), front-loaded link/heading text for screen-reader ear-scanning (X19), a skip-to-main-content link ahead of persistent header navigation (X20), an unskipped and structurally-accurate heading hierarchy (X21), and alt text matching each image's informative-vs-decorative role (X22).
4. If the evidence cannot show real hit-region size, actual reading order, live text-scaling behavior, or underlying markup (e.g. a static screenshot with no code or DOM access), mark those findings `NOT ASSESSABLE` rather than guessing — see `../../shared/evidence-model.md`. Most of X17-X22 fall in this category when only a rendered screenshot is available.
5. Tag every finding with evidence status, severity, and confidence (most accessibility findings default to `blocker` or `major` — do not soften them without reason), and report using `../../shared/report-contract.md`.

## References

- `references/core.md` — WCAG/universal accessibility rules and the target-size/spacing/dragging-alternative rules that apply across platforms.
- `references/mobile.md` — iOS/Android-specific target-size numbers and text-scaling implementation.
- `../../shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

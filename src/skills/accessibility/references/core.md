# Accessibility: WCAG conformance and inclusive interaction (platform-agnostic)

See `../../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

## Accessibility (WCAG / universal)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| X01 | All interactive elements expose correct accessible names, roles, values/states, and logical reading/focus order. | Accessibility | Blocker | Android Build accessible apps; Android Principles for improving app accessibility; WCAG 2.2 |
| X02 | Information is never conveyed by color alone; add text, shape, iconography, position, or another redundant cue. | Accessibility | Major | Apple HIG Color; Android Principles for improving app accessibility; WCAG 2.2 Use of Color (SC 1.4.1) |
| X03 | Text meets contrast requirements; WCAG AA baseline is 4.5:1 for normal text and 3:1 for qualifying large text. | Accessibility | Blocker | WCAG 2.2 Contrast (Minimum, SC 1.4.3); WCAG 2.2 |
| X06 | Core functionality remains available without relying on motion, complex gestures, or a specific hand/body movement. | Accessibility | Blocker | Apple HIG Accessibility; Apple HIG Gestures; WCAG 2.2 Dragging Movements (SC 2.5.7) |
| X07 | Timed/transient UI gives sufficient time or an alternate persistent path for essential content/actions. | Accessibility | Major | Apple HIG Accessibility |
| X08 | Focused elements remain visible and are not fully obscured by sticky bars, sheets, or overlays. | Accessibility | Major | WCAG 2.2 Focus Not Obscured, Minimum (SC 2.4.11) |
| X09 | Audio/video content provides appropriate text/description alternatives where needed. | Accessibility | Major | Android Principles for improving app accessibility |
| X10 | Accessibility is manually tested with VoiceOver/TalkBack and large text in addition to automated scanners. | Strong | Major | Android Build accessible apps; Apple HIG Accessibility |
| X11 | Help/support placement and terminology are consistent across the product when help is repeatedly available. | Accessibility | Moderate | WCAG 2.2 Consistent Help (SC 3.2.6) |
| X12 | The app avoids inaccessible authentication patterns such as memory-only challenges or CAPTCHA without an accessible alternative. | Accessibility | Blocker | WCAG 2.2 Accessible Authentication, Minimum (SC 3.3.8) |

## Touch/ergonomics (WCAG target-size, spacing, dragging)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| T03 | For web/hybrid content, WCAG 2.2 AA target-size requirements are met; native platform minimums remain the preferred bar for native controls. | Accessibility | Major | WCAG 2.2 Target Size Minimum (SC 2.5.8); WCAG 2.2 Target Size Enhanced (SC 2.5.5) |
| T04 | Adjacent controls have enough spacing to reduce accidental activation, especially for small targets. | Accessibility | Major | WCAG 2.2 Target Size Minimum (SC 2.5.8); Microsoft Research Target Size Study for One-Handed Thumb Use on Small Touchscreen Devices |
| T05 | No essential function depends on precise dragging, swiping, long-press, multi-finger, or custom gesture without an accessible alternative. | Accessibility | Blocker | WCAG 2.2 Dragging Movements (SC 2.5.7); Apple HIG Gestures; Apple HIG Accessibility |

## Folk-rule guards

- **"44x44 is the universal touch target."** Wrong as a single constant. iOS uses 44x44pt, Android uses 48x48dp, and WCAG 2.2's web/hybrid target-size criteria (T03) are a separate, CSS-pixel-based bar — see `mobile.md` for the platform-specific numbers. Never apply one number across all three.
- **"Disabled buttons are bad."** A disabled control can be valid accessibility-wise as long as: (a) it still exposes a correct accessible name/role/state (X01) rather than disappearing from the accessibility tree, and (b) the unmet prerequisite is understandable to the user, not just a dead end.

## How the accessibility skill should apply these

Always identify target platform(s) before scoring a target-size or text-scaling finding (X04/X05/T01/T02 live in `mobile.md`) — the correct minimum differs by platform, and applying iOS's 44pt to an Android screen (or vice versa) is itself a wrong finding. WCAG-sourced rules (X01-X03, X06-X12, T03-T05) apply regardless of platform and should be checked first since several carry Blocker severity. When evidence is a static screenshot or mockup, most of this file's rules are only partially assessable — contrast (X03) and color-alone cues (X02) can be checked from a static image, but reading order (X01), focus visibility (X08), and gesture-only functionality (X06, T05) usually require a running build or code; report accordingly using the evidence model.

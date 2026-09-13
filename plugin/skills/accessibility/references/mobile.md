# Accessibility: platform-specific minimums (iOS / Android)

See `../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. These four rules are the platform-specific counterparts to `core.md`'s universal WCAG rules — always resolve the target platform before applying them.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| T01 | iOS interactive hit regions are at least 44x44 pt unless a platform-specific component safely provides equivalent usability. | Platform contract | Major | Apple HIG Buttons; Apple HIG Accessibility |
| T02 | Android interactive touch targets are at least 48x48 dp; visible artwork may be smaller if the focus/touch area is large enough. | Platform contract | Major | Android Make apps more accessible |
| X04 | UI remains usable with increased text size. iOS should support Dynamic Type and ideally at least 200% text enlargement; Android uses scalable text units. | Accessibility | Blocker | Apple HIG Accessibility; Apple HIG Typography; Android Grids and units; WCAG 2.2 |
| X05 | Large text does not clip, overlap controls, hide labels, or force essential content off-screen without a reachable path. | Accessibility | Blocker | Apple HIG Accessibility; Android Core app quality guidelines |

## How the accessibility skill should apply these

Resolve platform first: if the evidence is explicitly iOS, apply T01's 44x44pt; if explicitly Android, apply T02's 48x48dp; never average or pick one as a universal default (see `core.md`'s folk-rule guard). For X04/X05, check that text scales via the platform's own mechanism — Dynamic Type on iOS, scalable `sp`/text units on Android — rather than a fixed-pixel implementation that would defeat the OS-level accessibility text-size setting; then check whether scaled text clips, overlaps, or pushes essential controls off-screen without a reachable path, which is common enough to warrant Blocker severity when found. Both X04 and X05 are usually **NOT ASSESSABLE** from a static screenshot at default text size — they require either a design spec that states support, or a running build tested at a large accessibility text size.

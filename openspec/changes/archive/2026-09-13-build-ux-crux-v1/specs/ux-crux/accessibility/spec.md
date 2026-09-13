## Purpose

Defines the accessibility lens covering WCAG conformance and inclusive interaction for mobile UIs.

## ADDED Requirements

### Requirement: Platform-correct target size and contrast checks
The accessibility skill SHALL evaluate touch target size against the platform-specific minimum (iOS 44x44pt, Android 48x48dp, WCAG 2.2 for web/hybrid content) and text contrast against WCAG AA minimums, and SHALL NOT apply a single universal target-size constant across all platforms.

#### Scenario: Reviewing an Android-only screen
- **WHEN** the reviewed evidence is explicitly Android
- **THEN** the accessibility skill applies the 48x48dp minimum rather than iOS's 44x44pt figure

### Requirement: Non-visual and non-gesture access
The accessibility skill SHALL check that all essential functionality is available without relying on color alone, without requiring a specific complex gesture that has no accessible alternative, and with correct accessible names, roles, and reading order for assistive technology.

#### Scenario: Drag-only reordering
- **WHEN** a reviewed feature's only way to reorder items is a drag gesture with no alternative
- **THEN** the accessibility skill flags this as a blocker-severity finding

### Requirement: Text-scaling resilience
The accessibility skill SHALL evaluate whether the UI remains usable when text is scaled up (Dynamic Type or scalable Android text units), flagging clipped, overlapping, or off-screen essential content.

#### Scenario: Enlarged text clips a button label
- **WHEN** evidence shows a button label clipping at a larger accessibility text size
- **THEN** the accessibility skill reports this at blocker or major severity depending on whether the action remains reachable

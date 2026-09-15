## ADDED Requirements

### Requirement: Mobile-viewport-general rules apply to mobile web evidence
The usability skill's platform-resolution step SHALL distinguish, within `mobile.md`, rules that require a genuinely native platform contract (for example a native tab bar, Android's `NavigationBar` component, native back-gesture behavior, or custom-gesture ergonomics) from rules whose underlying concern is inherent to any mobile-viewport rendering regardless of native-vs-web (for example safe-area/inset handling, dark or increased-contrast appearance support, localization text-expansion, and scalable font units). When the reviewed evidence is a mobile web page rather than a native app, the usability skill SHALL still evaluate the mobile-viewport-general rules against it, and SHALL NOT skip the entirety of `mobile.md` merely because the evidence is not a native app.

#### Scenario: Mobile web evidence with no dark-mode support
- **WHEN** the reviewed evidence is a mobile web page whose stylesheet defines only a single light color palette with no dark or increased-contrast variant
- **THEN** the usability skill flags this under the applicable mobile-viewport-general rule, rather than treating `mobile.md` as inapplicable because the evidence is not a native app

#### Scenario: Mobile web evidence with fixed-pixel font sizes
- **WHEN** the reviewed evidence is a mobile web page whose font sizes are declared in fixed pixel units rather than scalable units
- **THEN** the usability skill flags the missing text-scaling support under the applicable mobile-viewport-general rule

#### Scenario: Native-only platform contract on web evidence
- **WHEN** the reviewed evidence is a mobile web page, and a `mobile.md` rule requires a genuinely native platform contract (for example a native tab bar or Android `NavigationBar` component)
- **THEN** the usability skill does not apply that native-only rule to the web evidence, consistent with its existing platform-resolution guidance

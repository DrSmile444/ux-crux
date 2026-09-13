## ADDED Requirements

### Requirement: Free trials do not require payment method upfront and convert transparently
The trust skill SHALL flag a free trial flow that requires payment-method entry before the trial begins. When a trial does convert to a paid plan, the trust skill SHALL check that the user receives clear advance notice before the conversion charge and that cancellation before or after conversion is available fully online and self-service, without requiring phone support or comparable friction.

#### Scenario: Free trial requires credit card upfront with no clear pre-conversion notice
- **WHEN** the reviewed evidence shows a free trial that requires credit card details before starting, with no stated pre-charge notice or an online-only cancellation path
- **THEN** the trust skill flags this as a Forced Continuity finding

#### Scenario: Free trial requires no payment method and clearly discloses conversion terms
- **WHEN** the reviewed evidence shows a free trial that requires no payment method to begin, and any conversion to paid is preceded by clear notice with self-service cancellation available
- **THEN** the trust skill does not flag a Forced Continuity finding

### Requirement: Mobile web content is not blocked behind an app-install interstitial
The trust skill SHALL flag a mobile web page that blocks its content behind a full-screen "install our app" interstitial, and SHALL treat a non-intrusive contextual banner (for example a modest top or bottom bar) as the acceptable alternative.

#### Scenario: Full-screen app-install overlay blocks mobile web content
- **WHEN** the reviewed evidence shows a mobile web page whose content is not accessible until the user dismisses or acts on a full-screen app-install overlay
- **THEN** the trust skill flags this as a Door Slam finding

#### Scenario: App promotion is a non-blocking contextual banner
- **WHEN** the reviewed evidence shows app promotion presented as a small, non-blocking banner that does not prevent access to page content
- **THEN** the trust skill does not flag a Door Slam finding

### Requirement: Mandatory costs are disclosed early in any priced flow
The trust skill SHALL flag a priced flow (a checkout, subscription signup, or service enrollment) that first discloses a mandatory fee or cost (for example a required service fee, mandatory add-on, or non-optional surcharge) only at the final commitment step, rather than at the earliest point where the flow's total cost can be meaningfully communicated. This requirement is deliberately general and applies across priced-flow types; it does not itself specify e-commerce-specific mechanics such as cart architecture or faceted search.

#### Scenario: Mandatory fee appears for the first time at final payment step
- **WHEN** the reviewed evidence shows a priced flow where a mandatory fee or cost is disclosed for the first time only at the final confirmation/payment step, after the user has already invested effort in the flow
- **THEN** the trust skill flags this as a cost-disclosure-timing finding

#### Scenario: Mandatory costs are disclosed at the earliest meaningful point
- **WHEN** the reviewed evidence shows all mandatory fees/costs disclosed as early as they can be meaningfully calculated, before the user reaches the final commitment step
- **THEN** the trust skill does not flag a cost-disclosure-timing finding

#### Scenario: Cost depends on information not yet provided
- **WHEN** the reviewed evidence shows a cost component (for example location-specific tax) that genuinely cannot be calculated until the user provides required information (for example a shipping address), and baseline costs are still disclosed early
- **THEN** the trust skill does not flag a cost-disclosure-timing finding solely because that dependent component appears later

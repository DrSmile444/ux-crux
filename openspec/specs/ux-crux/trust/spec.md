# ux-crux/trust Specification

## Purpose

Defines the trust lens covering permission, onboarding, and interruption timing, destructive-action safety, and trust signals.

## Requirements

### Requirement: Contextual permission timing
The trust skill SHALL flag permission requests made at startup rather than in the context of the feature that needs them, and SHALL check that permission denial degrades gracefully rather than blocking the app.

#### Scenario: All permissions requested at launch
- **WHEN** a reviewed app requests location, camera, and notifications permissions on first launch before any feature that needs them is invoked
- **THEN** the trust skill flags each out-of-context request

### Requirement: Destructive-action safety
The trust skill SHALL check that routine reversible destructive actions offer undo rather than a confirmation dialog, and that irreversible or high-cost destructive actions use a specific confirmation naming the action and consequence rather than a generic Yes/No dialog.

#### Scenario: Irreversible action with generic confirmation
- **WHEN** a reviewed flow permanently deletes an account behind an "Are you sure? Yes/No" dialog
- **THEN** the trust skill flags the confirmation copy as insufficient at major or blocker severity

### Requirement: Notification and interruption honesty
The trust skill SHALL flag marketing notifications framed as urgent or system-critical, and SHALL check that users have a way to manage notification categories/preferences when notifications are material to the product.

#### Scenario: Marketing message styled as urgent alert
- **WHEN** a reviewed notification uses urgent, time-sensitive framing for a promotional offer
- **THEN** the trust skill flags this as a platform-contract violation

### Requirement: Strategic friction as a trust signal
The trust skill SHALL evaluate whether a high-stakes or security-sensitive action (for example a privacy/security scan, a large financial transfer, or an irreversible account-level change) uses a deliberate, brief friction step (a staged process, a short animated "checking"/"scanning" state, or an equivalent perceptible pause) as a signal of thoroughness and trustworthiness, distinct from the destructive-action-confirmation requirement, which addresses preventing accidental loss rather than building perceived trust.

The skill SHALL NOT treat the absence of such friction as a defect by default — instant execution is correct for routine, low-stakes, or frequently repeated actions — and SHALL NOT treat the presence of an unexplained or clearly artificial delay on a low-stakes action as a positive finding.

#### Scenario: High-stakes action executes instantly with no staged feedback
- **WHEN** the evidence shows a security-sensitive action (for example a "Review account privacy" or "Confirm large transfer" flow) completing immediately with no intermediate staged state, progress narration, or perceptible pause
- **THEN** the trust skill reports a finding (severity no higher than moderate, since instant execution is not itself unsafe) noting the missed opportunity to build user confidence through visible thoroughness, and distinguishes this from any separate destructive-action-confirmation finding

#### Scenario: Routine low-stakes action has an artificial delay
- **WHEN** the evidence shows a frequent, low-stakes, reversible action (for example toggling a routine setting) with an unexplained delay or artificial "processing" animation before completion
- **THEN** the trust skill reports a finding that the added friction is unjustified for this action's risk/frequency profile, rather than praising the delay as a trust signal

#### Scenario: High-stakes action already uses staged, explained friction
- **WHEN** the evidence shows a security-sensitive action presenting a brief staged process (for example an animated multi-step "scanning" sequence) before confirming completion
- **THEN** the trust skill records this as a positive trust-signal finding, separate from and not a substitute for any required destructive-action confirmation copy

### Requirement: Notification time and sender granularity
The trust skill SHALL check whether notification controls support time-based quiet hours and sender/contact-level allowlisting, not only category-level on/off toggles, when notifications are material to the product.

#### Scenario: Only category-level controls exist
- **WHEN** a product exposes per-category notification toggles but no time-based quiet-hours control and no way to allow a specific sender/contact through when notifications are otherwise limited
- **THEN** the trust skill flags the absence of finer-grained controls as a finding

#### Scenario: Time- and sender-level controls are present
- **WHEN** the product exposes, directly or by deferring to the OS's own mechanism (for example Focus modes or Do Not Disturb with priority senders), both time-based and sender-level notification controls
- **THEN** the trust skill does not flag this requirement

#### Scenario: Notification-settings surface not shown
- **WHEN** the evidence provided does not include the notification-settings surface at all
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

### Requirement: Badge and indicator urgency-color match
The trust skill SHALL flag a badge or unread indicator whose color or visual intensity signals higher urgency than the underlying content's actual criticality — for example a high-arousal alarm color (such as saturated red) applied to a routine, non-critical social or content update.

#### Scenario: Alarm color on routine content
- **WHEN** a routine, non-critical notification (for example a social like/comment count) is represented with a high-arousal alarm color or badge treatment typically reserved for critical or time-sensitive information
- **THEN** the trust skill flags the mismatch between the indicator's visual urgency and the content's actual criticality

#### Scenario: Alarm color reserved for genuinely critical content
- **WHEN** a high-arousal alarm color or badge treatment is used only for genuinely critical, safety-relevant, or time-sensitive information
- **THEN** the trust skill does not flag this requirement

#### Scenario: Rendered indicator color not in evidence
- **WHEN** the evidence provided does not show the actual rendered color or visual treatment of the badge/indicator (for example, it is described only in text without a visual)
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

### Requirement: Transparent identity and demographic data collection
When a reviewed form collects gender, sex, or other identity/demographic data, the trust skill SHALL check that gender identity, sex assigned at birth, and pronouns are treated as distinct fields when more than one is actually needed (rather than one forced binary choice), that each such field is optional or offers a free-text alternative where possible, and that the form states, in context, why the data is collected and how it affects the product (for example billing eligibility, a biometric calculation, or social display). A binary-only field with no stated purpose SHALL be flagged, distinct from the general minimum-data-collection check, which does not by itself evaluate transparency of purpose for identity/demographic fields specifically.

#### Scenario: Unexplained binary sex/gender field
- **WHEN** a reviewed profile form requires a binary "Male/Female" choice with no indication of whether it drives billing, a biometric calculation, pronoun display, or another specific purpose
- **THEN** the trust skill flags the field for lacking transparency about why the data is needed and how it is used

#### Scenario: Purpose-explained, separated identity fields
- **WHEN** a reviewed form separates sex assigned at birth (with inline text explaining a billing/legal requirement), gender identity, and pronouns into distinct, optional or free-text fields
- **THEN** the trust skill does not flag this requirement

#### Scenario: Identity data purpose not shown in evidence
- **WHEN** the evidence provided includes an identity/demographic field but no indication of why it is collected or how it is used
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE` rather than assuming the field is justified or unjustified

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

### Requirement: Cross-audience sharing requires explicit active opt-in
The trust skill SHALL flag a feature that publishes or broadcasts a user's activity from one context (for example a third-party site, a private group, or a prior audience) to a different, broader, or unrelated audience by default, when consent is obtained only through a passive, easily-missed, or auto-expiring opt-out mechanism rather than an explicit, active opt-in choice made before the broadcast occurs.

#### Scenario: Activity is broadcast by default with only a passive opt-out
- **WHEN** the reviewed evidence shows a feature that publishes a user's action taken in one context to a different, broader audience by default, with consent handled only through a small, timed, or easily-dismissed opt-out notice
- **THEN** the trust skill flags this as a cross-audience-sharing-default finding

#### Scenario: Cross-audience sharing requires an explicit prior opt-in
- **WHEN** the reviewed evidence shows that publishing an action to a different or broader audience requires an explicit, persistent, active choice (for example a modal requiring "Allow" or "Keep Private") before anything is shared
- **THEN** the trust skill does not flag this requirement

### Requirement: Message audience scope is unambiguous at the point of sending
The trust skill SHALL flag a messaging, posting, or reply interface where the public-versus-private destination of the content is not clearly and unambiguously indicated immediately adjacent to the send/submit control, when the interface's layout or visual design could plausibly cause a user to mistake a public-facing field for a private one (or vice versa).

#### Scenario: Public reply field is visually indistinguishable from a private message field
- **WHEN** the reviewed evidence shows a public reply/post field positioned or styled so similarly to a private direct-message field that a user could reasonably mistake one for the other, with no high-contrast audience-scope indicator near the send control
- **THEN** the trust skill flags the audience-scope ambiguity as a finding

#### Scenario: Audience scope is clearly labeled at the send control
- **WHEN** the reviewed evidence shows a clear, high-contrast label or visual treatment (for example "Public reply" vs. "Private message") immediately adjacent to the send control indicating the destination audience
- **THEN** the trust skill does not flag this requirement

### Requirement: Cloud sync/storage warnings state file location and local-copy impact
The trust skill SHALL flag a storage or sync-toggle warning that tells the user files will be "removed" or affected without stating where the affected files actually live (locally, in the cloud, or both) and what happens to any local copy specifically.

#### Scenario: Sync-toggle warning omits file location and local-copy impact
- **WHEN** the reviewed evidence shows a warning dialog for disabling cloud sync that states files will be "removed" without clarifying whether a local copy remains on the device
- **THEN** the trust skill flags the warning copy as insufficiently clear about file-location and local-copy consequences

#### Scenario: Sync-toggle warning states location and local-copy impact explicitly
- **WHEN** the reviewed evidence shows a warning dialog that explicitly states where files are stored and confirms whether a local copy will remain after sync is disabled
- **THEN** the trust skill does not flag this requirement

### Requirement: Post-interaction reassurance beyond the screen
When the reviewed evidence includes a transaction, booking, submission, or other commitment flow, the trust skill SHALL check what happens in the gap after the user leaves the reviewed screen — whether the flow provides confirmation messaging, status updates, or another reassurance mechanism during any silent waiting period before the user's goal is fully realized (for example, before a booking is confirmed, a delivery arrives, or a request is fulfilled) — not only the on-screen completion state at the moment of submission. The skill SHALL flag a flow whose evidence shows a clean on-screen completion state but no accounting for user anxiety during a subsequent off-screen wait, when such a wait is a plausible part of the reviewed product's flow.

#### Scenario: Booking confirmation screen with no follow-up status
- **WHEN** the reviewed evidence shows a polished booking-confirmation screen, and the underlying service is known to have a delay between booking and final confirmation (for example a delivery address or appointment time confirmed later)
- **THEN** the trust skill flags the absence of an interim status update or notification plan covering that gap, distinct from the on-screen completion state itself, as a service-design/reassurance gap

#### Scenario: Immediate, complete transaction with no off-screen gap
- **WHEN** the reviewed evidence shows a transaction that completes fully and immediately with no subsequent waiting period (for example an instant digital purchase with immediate access)
- **THEN** the trust skill does not apply this requirement, since no post-interaction gap exists to cover

### Requirement: Silent background protection surfaces periodic activity summaries
The trust skill SHALL flag a background protective or maintenance system (for example a security scan, an automatic backup, or threat/ad blocking) that operates silently with no periodic, non-intrusive reporting of its activity, since users interpret unexplained silence as evidence the protection was unnecessary and are more likely to disable it, undermining the protection's purpose. This is distinct from the existing guidance discouraging noisy confirmation of trivial, user-initiated actions, which addresses the opposite failure mode for actions the user directly performed, not ongoing invisible protective work.

#### Scenario: A background protective system reports no activity summary
- **WHEN** the reviewed evidence shows a background protective or maintenance feature (a security scan, an automatic backup, a threat blocker) that runs without ever surfacing a periodic, non-intrusive summary of what it has done
- **THEN** the trust skill flags the absence of an activity summary and recommends a periodic, low-intrusion signal (for example "12 threats blocked this week") that makes the protection's ongoing value visible

#### Scenario: A background protective system surfaces a periodic activity summary
- **WHEN** the reviewed evidence shows the same kind of background protective feature, with a periodic, non-intrusive summary of its activity visible to the user
- **THEN** the trust skill does not flag the feature under this requirement

### Requirement: Interface friction is evaluated against a user's situational goodwill reservoir
The trust skill SHALL evaluate cumulative interface friction against a "reservoir of goodwill" model: every friction point depletes a user's situational tolerance, and depletion — not any single failure alone — drives abandonment or complaint. The trust skill SHALL flag, as goodwill depletors, evidence of: hiding information the user needs to complete or trust a task (support contact details, shipping rates, or prices, buried behind extra clicks with no stated reason); unnecessary or disproportionate data requests for a simple task; hollow "shucking and jiving" copy that mimics sincerity without conveying substantive information (for example "Your call is important to us" with no actionable content); promotional material ("sizzle") positioned to block or delay immediate completion of the user's task; and amateurish or unprofessional execution (broken layout, inconsistent formatting) that undermines confidence the product will work correctly. This is distinct from the existing mandatory-cost-disclosure-timing requirement (`CT01`), which addresses the timing of cost disclosure specifically within priced flows, not the broader taxonomy of information-hiding and low-effort execution covered here.

#### Scenario: Support contact information is buried behind several clicks
- **WHEN** the reviewed evidence shows a product hiding its support phone number or contact information behind multiple layers of FAQ pages with no direct link, for no stated reason
- **THEN** the trust skill flags the hidden-information finding as a goodwill depletor

#### Scenario: Support copy is hollow and content-free
- **WHEN** the reviewed evidence shows customer-facing copy that asserts care or importance ("Your call is important to us") without any substantive, actionable information alongside it
- **THEN** the trust skill flags the hollow-sincerity finding as a goodwill depletor

#### Scenario: Promotional content blocks immediate task completion
- **WHEN** the reviewed evidence shows promotional material positioned so that it delays or obstructs the user's ability to complete their immediate task
- **THEN** the trust skill flags the blocking-promotion finding as a goodwill depletor

#### Scenario: Information is upfront, requests are proportionate, and execution is polished
- **WHEN** the reviewed evidence shows support/pricing information readily accessible, data requests proportionate to the task, no hollow sincerity copy, no task-blocking promotion, and professional execution
- **THEN** the trust skill does not flag a goodwill-depletor finding

### Requirement: Formatted input is normalized, not rejected, for minor formatting variation
The trust skill SHALL flag a form field that rejects a validly-formatted value (a card number, phone number, or comparable identifier) solely because the user included conventional formatting characters (spaces, dashes, parentheses) the system could trivially strip or normalize instead, forcing the user to retype the value in one exact, undocumented format. This is distinct from `usability`'s `F04` (correct keyboard/input-mode configuration), which addresses which keyboard or autocomplete behavior is presented, not whether an already-entered, validly-formatted value is rejected outright.

#### Scenario: A card number with spaces is rejected
- **WHEN** the reviewed evidence shows a payment form rejecting a card number entered with spaces between digit groups, requiring the user to retype it as one unbroken string
- **THEN** the trust skill flags the rigid-formatting-rejection finding

#### Scenario: A field normalizes conventional formatting automatically
- **WHEN** the reviewed evidence shows a field accepting a card or phone number with conventional formatting characters and normalizing it automatically before validation
- **THEN** the trust skill does not flag this requirement

### Requirement: Support and error-recovery content actively restores user goodwill
The trust skill SHALL flag support or help content that substitutes marketing messaging for a genuine, candid answer to a question a user would actually ask (a "Questions We Wish People Would Ask" pattern), and SHALL flag an error state that resolves without offering the user a specific, actionable next step. The trust skill SHALL treat a step-saving shortcut embedded directly in routine communication (for example a direct order-tracking link inside a confirmation email, rather than requiring the user to log in and navigate to find it) as a positive goodwill-restoring finding.

#### Scenario: FAQ content reads as marketing rather than candid answers
- **WHEN** the reviewed evidence shows a support/FAQ page whose entries promote the product rather than answering the specific, practical questions a user in that context would actually have
- **THEN** the trust skill flags the marketing-dressed-as-FAQ finding

#### Scenario: Error state gives no actionable next step
- **WHEN** the reviewed evidence shows an error message that states something failed but gives the user no specific action to take or path to recovery
- **THEN** the trust skill flags the missing-recovery-guidance finding

#### Scenario: A confirmation communication embeds a direct step-saving shortcut
- **WHEN** the reviewed evidence shows a transactional communication (for example an order confirmation email) containing a direct link that lets the user complete a follow-up task (such as tracking a shipment) without an extra login-and-navigate detour
- **THEN** the trust skill records this as a positive goodwill-restoring finding

#### Scenario: FAQ content is candid and errors offer clear recovery
- **WHEN** the reviewed evidence shows FAQ content that directly and candidly answers likely user questions, and error states that name a specific next step
- **THEN** the trust skill does not flag this requirement

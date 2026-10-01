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

### Requirement: Free-trial terms are stated before the trial starts
The trust skill SHALL check that a screen offering a free trial states, before the trial starts, the trial's duration, what content or services stop being accessible when it ends, and the charges that follow. This follows Apple App Review Guidelines 3.1.1 and 3.1.2 and the material-terms-before-billing-information condition of 15 U.S.C. §8403. This requirement is distinct from `O14`, which concerns payment-method timing and conversion notice. It SHALL NOT apply to a trial that does not convert to a charge, and terms that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Trial with the price only in fine print
- **WHEN** the reviewed evidence shows a "Start free trial" button with the duration and later charge absent from the screen
- **THEN** the trust skill flags the missing terms

#### Scenario: Terms shown as a timeline
- **WHEN** the reviewed evidence shows a trial screen listing the day it starts, the day a reminder is sent, and the day the first charge begins
- **THEN** the trust skill does not flag this requirement

#### Scenario: Only a cropped screen is available
- **WHEN** the reviewed evidence is a cropped screenshot that omits the trial's terms area
- **THEN** the trust skill reports this requirement `NOT ASSESSABLE`

### Requirement: A struck-through "was" price is a genuine former price
The trust skill SHALL check that a crossed-out or "was" price shown beside a current price is a former price at which the item was actually offered to the public on a regular basis for a reasonably substantial period, as 16 CFR 233.1 describes. This requirement is distinct from `PB03`, which concerns anchors hiding total cost; here the test is the authenticity of the reference price. It SHALL NOT apply to a reference price labelled as a manufacturer's suggested price with a verifiable basis, and a price history that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Reference price never charged
- **WHEN** the reviewed evidence shows a struck-through price that the same product page history or a competing listing shows was never charged
- **THEN** the trust skill flags the former price as unsupported

#### Scenario: No price history in the evidence
- **WHEN** the reviewed evidence shows only a screenshot with a struck-through price
- **THEN** the trust skill reports this requirement `NOT ASSESSABLE`

### Requirement: Product pages show estimated shipping cost and link the return policy
The trust skill SHALL check that a product page gives an estimated shipping cost (a flat rate, a location-based estimate, or a transparent range) so the user can judge the total order cost before adding to the cart, and links or summarizes the return policy in plain language, following Baymard Institute, Holst, "Product Pages Need to Show 'Estimated Shipping Costs'" (2017), and Baymard guideline "Return Policy Discoverability" (#803). This requirement is distinct from `CT01`, which concerns when mandatory fees are disclosed in a priced flow. It SHALL NOT apply to digital goods without delivery or returns, and information the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Shipping first shown in the cart
- **WHEN** the reviewed evidence shows a product page with no shipping information and a cart that adds it
- **THEN** the trust skill flags the late disclosure and the missing return-policy link

#### Scenario: Estimate and policy link on the page
- **WHEN** the reviewed evidence shows a shipping estimate and a "Free returns within 30 days" link near the buy section
- **THEN** the trust skill does not flag this requirement

### Requirement: Payment fields are visually contained
The trust skill SHALL check that the card and payment fields are visually contained with a style used only for them (a border, background, shading, or a badge or padlock inside the area) and that any badge or security text shown describes protection the site actually has, following Baymard Institute, Jamie Holst, "How Users Perceive Security During the Checkout Flow (Incl. New 'Trust Seal' Study 2023)" (2016) and the related 2012 and 2010 Baymard articles on reinforcing credit card fields. This requirement is distinct from `CT01`, which concerns when mandatory costs are disclosed. It SHALL NOT apply to a payment sheet handled by the operating system or a hosted wallet, and the real technical security of the page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Card fields look like address fields
- **WHEN** the card number fields share identical styling with the address fields and no security cue sits near them
- **THEN** the trust skill flags the unreinforced payment area

#### Scenario: Contained card section
- **WHEN** the card fields sit in a bordered grey box with a padlock and truthful security text
- **THEN** the trust skill does not flag this requirement

### Requirement: Cancellation Requested order state
The trust skill SHALL check that a cancellation request creates a persistent "Cancellation Requested" order state with expected timing and payment impact, following Baymard Institute, Christian Holst, "Order Cancellation Request: Have a 'Cancellation Requested' Order State" (2018). This requirement is distinct from `PR01`, which concerns the gap between on-screen completion and the goal being realized in general, not the order-state wording after a cancellation. It SHALL NOT apply to a site that processes every cancellation instantly and shows the result at once, and the content of confirmation emails when only the screen is shown SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** after the user cancels, an overlay says "We will do our best to cancel" and the order page still shows "Order Placed"
- **THEN** the trust skill flags the missing persistent state

#### Scenario: Passing case
- **WHEN** the order page shows "Cancellation Requested", an expected reply time and that the card is not yet charged
- **THEN** the trust skill does not flag this requirement

### Requirement: On-site order tracking and return status
The trust skill SHALL check that the site shows order-tracking details itself and updates order status and saves the return label once a return starts, following Baymard Institute, Sally Collins, "Always Provide 6 Key Order-Tracking Details on the Ecommerce Site" (2019) and Christian Holst, "The 'Order Returns' Experience is Critical for Customer Retention" (2019). This requirement is distinct from `CT05`, which concerns the order state after a cancellation request, not tracking details or return status. It SHALL NOT apply to digital goods and sites with no shipments or returns, and carrier data accuracy and the content of notification emails SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the order details page only links to a carrier site with an unlinked tracking number, and the order still shows "Return this item" after a return starts
- **THEN** the trust skill flags the missing on-site tracking and return status

#### Scenario: Passing case
- **WHEN** the tracking page shows delivery date, progress bar, carrier, a linked number and history, and the return flow emails the label and updates the order status
- **THEN** the trust skill does not flag this requirement

### Requirement: Shipping options show dates and all fulfilment methods
The trust skill SHALL check that each shipping option shows a delivery date, that all fulfilment options are switchable in the checkout step and that free shipping is shown near the buy section, following Baymard Institute, Iva Olah, "Use “Delivery Date” Not “Shipping Speed” (41% Don’t)" (2023), Edward Scott, "Include All Order-Fulfillment Options in the Fulfillment-Selector Interface (50% Don’t)" (2023) and "Product Pages: ‘Free Shipping’ Should Not Only Be in a Site-Wide Banner (32% Get It Wrong)" (2017). This requirement is distinct from `CT03`, which concerns an estimated shipping cost and a return policy summary before add to cart, not delivery dates, fulfilment switching or the placement of free-shipping notices. It SHALL NOT apply to sites with a single shipping option, and a free-shipping offer that has a condition the user does not meet, and delivery-date accuracy, which a screenshot cannot show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the checkout lists "Standard: 3-5 business days" with no date and offers no store pickup, and free shipping is only in a site-wide banner
- **THEN** the trust skill flags the missing dates, the missing pickup option and the banner-only offer

#### Scenario: Passing case
- **WHEN** each option reads "Arrives Thursday, April 2" with its price, pickup is a listed option, and the product page repeats free shipping beside the Add to Cart button
- **THEN** the trust skill does not flag this requirement

### Requirement: Footer return and shipping links, in-store returns
The trust skill SHALL check that the footer links directly to Return Policy and Shipping Info and that in-store return is offered as an equal option to return by mail, following Baymard Institute, Christian Holst, "Have Direct Links to ‘Return Policy’ and ‘Shipping Info’ in the Footer (20% don’t)" (2019, updated 2025) and Edward Scott, "Self-Service UX: Promote In-Store Returns Alongside Mailed Return Options" (2018, updated 2025). This requirement is distinct from `CT03`, which concerns shipping cost and a return policy summary on the product page, not footer links or the in-store return option. It SHALL NOT apply to sites with no returns, or with no stores for in-store return, and the return policy terms themselves SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the footer has only a "Help" link and the return page spends its first screens on return by mail, with in-store return as a footnote
- **THEN** the trust skill flags the missing direct links and the buried in-store option

#### Scenario: Passing case
- **WHEN** the footer has "Returns" and "Shipping" links, and the return page shows mail and in-store options side by side
- **THEN** the trust skill does not flag this requirement

### Requirement: Cookie prompt first-layer choices [O20]
The trust skill SHALL check that a cookie-permission prompt shows Accept all, a reject or strictly-necessary-only option, and Manage settings in its first layer, with distinct plain labels; a close button means strictly necessary only, and no button is styled to steer toward Accept all. This requirement is distinct from `product`'s C13, which concerns guilt-inducing wording on a decline control, not which choices the first layer offers or how the buttons are styled. It SHALL NOT apply to sites with no cookies beyond strictly necessary ones, and the legal requirement in a given region SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Tankala, "Cookie Permissions 101" (2023).

#### Scenario: Failing case
- **WHEN** a cookie banner offers Accept all and a Learn more link, and the reject option is on a second page
- **THEN** the trust skill flags the missing first-layer choice

#### Scenario: Passing case
- **WHEN** a cookie banner shows Accept all, Necessary only and Manage settings with equal weight
- **THEN** the trust skill does not flag this requirement

### Requirement: Policy pages open with a plain summary, dates and section navigation [O21]
The trust skill SHALL check that a privacy, terms or other policy page opens with a plain-language summary, shows the effective and last-updated dates with a summary of recent changes, offers a working table of contents with links to sections, and uses readable formatting (sentence case, normal text size, short paragraphs, expandable sections). This requirement is distinct from CT08, which requires footer links to return and shipping information, not the content and structure of policy pages. It SHALL NOT apply to short single-purpose notices, and the full text of the policy SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Fessenden, "Privacy Policies and Terms of Use: 5 Common Mistakes" (2020).

#### Scenario: Failing case
- **WHEN** a terms page is one block of small all-caps text with no summary, date or section links
- **THEN** the trust skill flags the policy page

#### Scenario: Passing case
- **WHEN** the page starts with a plain summary and the update date, followed by a linked table of contents
- **THEN** the trust skill does not flag this requirement

### Requirement: Policy links in the footer and next to related settings [O22]
The trust skill SHALL check that links to the privacy policy and terms sit in a footer present on every page, including signed-in states (or in Settings where no footer exists), and the relevant settings screen links to the specific policy section it concerns. This requirement is distinct from CT08, which requires footer links to return and shipping information, not links to privacy and terms pages, and from O21, which concerns the policy page itself. It SHALL NOT apply to screens that are deliberately minimal during a short transaction, and policy links on pages the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Fessenden, "Privacy Policies and Terms of Use: 5 Common Mistakes" (2020).

#### Scenario: Failing case
- **WHEN** a signed-in web app has no footer and no policy link in Settings, so a user resorts to a search engine
- **THEN** the trust skill flags the policy link placement

#### Scenario: Passing case
- **WHEN** Notification settings show a summary of the policy and link to the matching section
- **THEN** the trust skill does not flag this requirement

### Requirement: Nothing is added to the order without the user choosing it [CT09]
The trust skill SHALL check that no item, upgrade, extended term or subscription is added to the cart or order, and no side-effect opt-in such as a follow or subscribe checkbox is prechecked, unless the user chose it. This requirement is distinct from `psychology`'s PB02, which requires the consequences of a default to be visible, not that unrequested additions are absent. It SHALL NOT apply to items required by law or by the product, and additions the user chose in an earlier step, and the user intent behind an addition that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Chan, "Sneaking: The Deceptive UX Pattern You Never Saw Coming" (2024).

#### Scenario: Failing case
- **WHEN** a one-year domain purchase opens a cart that already lists two years of registration
- **THEN** the trust skill flags the unrequested addition

#### Scenario: Passing case
- **WHEN** the cart lists only the one-year registration the user picked, and the follow-company checkbox is unchecked
- **THEN** the trust skill does not flag this requirement

### Requirement: Service prices before a quote form [CT10]
The trust skill SHALL check that a site selling a service states the price or a price range, with what is included and which fees apply, before the visitor must write to the business or fill in a long quote form; when an exact price needs details, a range or a short quote path is offered, and browsing is not gated behind an address entry (account gates follow O11). This requirement is distinct from CT01, which concerns when a mandatory fee is disclosed inside a priced flow, and GW01, which lists buried prices among general goodwill depletors, not whether a service shows any price before contact. It SHALL NOT apply to services whose price cannot be stated without an individual assessment, and price logic that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Aurora Harley, "Trustworthiness in Web Design: 4 Credibility Factors" (2016).

#### Scenario: Failing case
- **WHEN** a cleaning service page says "Contact us for rates" and asks for an address before it shows any content
- **THEN** the trust skill flags the missing price information and the early gate

#### Scenario: Passing case
- **WHEN** the page shows a price range with included items and extra fees, and a short quote form for an exact price
- **THEN** the trust skill does not flag this requirement

### Requirement: Transactional message subject, headline, sender and opening text [PR03]
The trust skill SHALL check that the subject line of a transactional email and the headline of a push or SMS notification state the specific event of the customer's own transaction in the first words (for example that order 1234 shipped or that a refund was issued); the sender is a recognisable brand name with its function; a push headline does not repeat the app name that the system already shows; and the email's opening text gives the information the recipient needs, not boilerplate such as a trouble-viewing link. Vague subjects such as "Important information" SHALL be flagged. This requirement is distinct from O10, which forbids marketing notifications posing as urgent ones, and PR01, which requires a reassurance message after the user leaves the screen, not the wording of its subject and headline. It SHALL NOT apply to marketing messages and messages that are not about the recipient's own transaction, and inbox or lock-screen rendering that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Jakob Nielsen, "Transactional Email and Confirmation Messages" (2008); Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022); Nielsen Norman Group, Moran, "The State of Transactional Email" (2018).

#### Scenario: Failing case
- **WHEN** a shipping email has the subject "Confirmation of Account Activity", its preview text reads "Having trouble viewing this email?", and the push headline is only the brand name
- **THEN** the trust skill flags the vague subject, the boilerplate opening and the brand-name headline

#### Scenario: Passing case
- **WHEN** the email subject reads "Your order 1234 has shipped", its first lines give the delivery date, and the push headline reads "Rate your trip"
- **THEN** the trust skill does not flag this requirement

### Requirement: Transactional message content order [PR04]
The trust skill SHALL check that a transactional message identifies what the transaction covers (the items ordered or affected, not only an order number), then gives the status, date and next step or link the customer expects first, and places marketing after that information. This requirement is distinct from CT06, which keeps order tracking on the site's own order page, and PR03, which concerns the subject, headline and sender, not what the message body contains. It SHALL NOT apply to messages whose recipient needs only a status word, and marketing messages, and a message body that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Jakob Nielsen, "Transactional Email and Confirmation Messages" (2008); Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022).

#### Scenario: Failing case
- **WHEN** a pickup SMS reads "Order 123456789012 is ready" with no item names, and the shipping-delay email lists no items or new date
- **THEN** the trust skill flags the order number as the only identifier and the missing date

#### Scenario: Passing case
- **WHEN** the SMS names the items, the pickup time and a link to the order page
- **THEN** the trust skill does not flag this requirement

### Requirement: About Us opens with a plain summary [GW04]
The trust skill SHALL check that the About Us entry is reachable from the footer and states in plain words what the organization does and what sets it apart in a short summary at the top, with the main facts on the page itself and not only behind links; its section labels are explicit (About Company, Leadership, Careers) and not jargon, and the summary uses concrete facts instead of hollow superlatives. This requirement is distinct from `product`'s C31, which concerns the tagline beside the logo, not the About page summary. It SHALL NOT apply to a product-only app with no organization to describe, and the real credibility effect on a given audience the evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Kaley and Nielsen, "'About Us' Information on Websites" (2019); Nielsen Norman Group, Loranger, "Great Summaries on 'About Us' Pages Engage Users and Build Trust" (2015).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows an About page with a tagline that fits thousands of companies and a grid of links, and no sentence on what the company does
- **THEN** the trust skill flags the About page without a plain statement of what the organization does

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows an About page that opens with two short paragraphs on what the company does, its main facts and its difference, with links to detail below
- **THEN** the trust skill does not flag this requirement

### Requirement: Contact page channels [GW05]
The trust skill SHALL check that a Contact page offers a phone number and an email address, with the address or other channels where relevant, and not only a form or a chat widget; multiple numbers are grouped under clear labels, and the page states opening hours and the expected reply time. This requirement is distinct from `usability`'s N13R, which concerns where the Contact link sits in navigation, and GW01, which flags hidden support details in general, not which contact channels the page offers. It SHALL NOT apply to services that are only available inside a signed-in account, and the accuracy of the listed hours and numbers SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "'Contact Us' Page Guidelines" (2019).

#### Scenario: Failing case
- **WHEN** a Contact page shows only a message form with no phone number or email
- **THEN** the trust skill flags the missing channels

#### Scenario: Passing case
- **WHEN** a Contact page lists a phone number, an email address and local offices with hours
- **THEN** the trust skill does not flag this requirement

### Requirement: Channel choice for transactional notifications [I07]
The trust skill SHALL check that SMS and push are used for time-sensitive or action-needed transactional events (a delivery today, a payment approval), less urgent details go by email, SMS does not carry promotions, and every SMS includes a way to opt out. This requirement is distinct from I02, which chooses between in-app alerts, banners and in-context messages, and O09, which requires in-app management of notification categories, not which events go to which outside channel. It SHALL NOT apply to events the user chose to receive by a given channel, and the channel of a message when the reviewed evidence does not show it SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022).

#### Scenario: Failing case
- **WHEN** an order flow sends a promotional SMS with no opt-out line and sends a non-urgent receipt by push
- **THEN** the trust skill flags the promotional SMS, the missing opt-out and the channel choice

#### Scenario: Passing case
- **WHEN** the flow texts only the same-day delivery notice with "Text STOP to unsubscribe" and emails the receipt
- **THEN** the trust skill does not flag this requirement

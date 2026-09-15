## ADDED Requirements

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

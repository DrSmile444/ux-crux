## ADDED Requirements

### Requirement: Post-interaction reassurance beyond the screen
When the reviewed evidence includes a transaction, booking, submission, or other commitment flow, the trust skill SHALL check what happens in the gap after the user leaves the reviewed screen — whether the flow provides confirmation messaging, status updates, or another reassurance mechanism during any silent waiting period before the user's goal is fully realized (for example, before a booking is confirmed, a delivery arrives, or a request is fulfilled) — not only the on-screen completion state at the moment of submission. The skill SHALL flag a flow whose evidence shows a clean on-screen completion state but no accounting for user anxiety during a subsequent off-screen wait, when such a wait is a plausible part of the reviewed product's flow.

#### Scenario: Booking confirmation screen with no follow-up status
- **WHEN** the reviewed evidence shows a polished booking-confirmation screen, and the underlying service is known to have a delay between booking and final confirmation (for example a delivery address or appointment time confirmed later)
- **THEN** the trust skill flags the absence of an interim status update or notification plan covering that gap, distinct from the on-screen completion state itself, as a service-design/reassurance gap

#### Scenario: Immediate, complete transaction with no off-screen gap
- **WHEN** the reviewed evidence shows a transaction that completes fully and immediately with no subsequent waiting period (for example an instant digital purchase with immediate access)
- **THEN** the trust skill does not apply this requirement, since no post-interaction gap exists to cover

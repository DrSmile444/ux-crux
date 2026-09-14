## ADDED Requirements

### Requirement: Dynamic outcome-explicit button copy
The product skill SHALL flag a primary action button (for example a checkout or upgrade submission) that uses only generic verb copy ("Submit," "Continue," "OK") when a concrete, dynamically computed outcome is available to state directly in the button label (for example a real order total), distinct from the existing requirement that action labels use descriptive action language in general, which does not require real-time value substitution.

#### Scenario: Checkout button uses generic label despite a known order total
- **WHEN** the reviewed evidence shows a final checkout/submission button labeled only "Submit" or "Continue" while the order total or other concrete outcome is already known at that point in the flow
- **THEN** the product skill flags the generic label and recommends substituting the real computed outcome directly into the button copy

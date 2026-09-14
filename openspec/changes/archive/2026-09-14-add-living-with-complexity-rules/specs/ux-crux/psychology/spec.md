## ADDED Requirements

### Requirement: Cumulative multiplicity burden is evaluated at the system level
The psychology skill SHALL evaluate the cumulative cognitive burden of many individually-simple, idiosyncratic interactions repeated across a whole product (for example per-item confirmations, inconsistent per-toggle rules, repeated micro-permission prompts, or unrelated password/expiry policies across separate accounts) as a system-level load in its own right, distinct from the existing extraneous-cognitive-load requirement, which evaluates load within a single task and cannot surface a defect that only exists when many separately-fine instances are multiplied across the whole product. A finding under this requirement SHALL NOT be dismissed on the grounds that any single instance, viewed in isolation, is simple or reasonable.

#### Scenario: Many individually-reasonable confirmations compound into system-level burden
- **WHEN** the reviewed evidence shows a product requiring a separate, individually-simple confirmation, toggle, or permission decision for many similar items (for example confirming deletion separately for each of dozens of list items, or maintaining a dozen accounts each with distinct, unsynchronized security-question rules)
- **THEN** the psychology skill flags the cumulative multiplicity burden as a system-level finding, citing the pattern's repetition and inconsistency across the product, not any single instance in isolation

#### Scenario: A repeated action is simple, consistent, and centrally managed
- **WHEN** the reviewed evidence shows a repeated action that is simple, follows one consistent rule across every instance, and can be managed centrally when needed (for example a single sign-on covering every sub-service, or one notification-preference screen governing all categories)
- **THEN** the psychology skill does not flag this requirement

#### Scenario: A single simple interaction is evaluated on its own
- **WHEN** the reviewed evidence shows only one instance of a simple interaction, with no indication of how many similar instances exist elsewhere in the product
- **THEN** the psychology skill does not flag this requirement from a single instance alone; it reports the requirement as `NOT ASSESSABLE` when the evidence does not show whether the interaction is repeated at scale

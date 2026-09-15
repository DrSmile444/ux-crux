## ADDED Requirements

### Requirement: A tagline next to site/product identity states a concrete value proposition
The product skill SHALL flag a tagline positioned adjacent to a site or product's identity/logo that exceeds roughly 6-8 words or that conveys a vague corporate motto (for example "Here with you, for you" or "World-class solutions") with no concrete, differentiating, functional value proposition a first-time visitor could act on.

#### Scenario: Tagline is a vague, lengthy corporate motto
- **WHEN** the reviewed evidence shows a tagline next to the site/product identity that is a long or vague phrase conveying no concrete information about what the product does or why it is different
- **THEN** the product skill flags the tagline as failing to communicate value and recommends a concise (roughly 6-8 word) phrase stating a specific, differentiating benefit

#### Scenario: Tagline states a concrete, differentiating value proposition
- **WHEN** the reviewed evidence shows a short tagline (roughly 6-8 words) stating a specific, functional value proposition (for example "Restaurant Reservations — Free, Instant, Confirmed")
- **THEN** the product skill does not flag this requirement

#### Scenario: Product is a household-name brand with no functional explanation needed
- **WHEN** the reviewed evidence shows a globally recognized brand whose utility is already common public knowledge, using a purely aspirational or brand-affinity tagline
- **THEN** the product skill does not require the tagline to state a functional value proposition, and weighs this requirement more lightly

## ADDED Requirements

### Requirement: Design system limits functionally-equivalent visual variants
The usability skill SHALL flag a design system that lets functionally-equivalent visual variants — button shapes/styles, font weights or families, or color choices serving the same semantic purpose (for example, primary-action emphasis) — proliferate across a product without a deliberate, limited set governing them. This is distinct from `A01R` (a single screen's primary-vs-secondary action hierarchy) and `A13R` (a single control's label matching its destination), neither of which addresses variant count across the product as its own concern.

#### Scenario: The same semantic action renders with unrelated visual styles across screens
- **WHEN** the reviewed evidence shows the same type of action (for example, a primary submit action) rendered with materially different button shapes, colors, or type styles across different screens of the same product, with no stated reason tied to context or platform
- **THEN** the usability skill flags the variant-proliferation finding and recommends consolidating to a small, deliberate set of styles mapped to semantic roles

#### Scenario: A small, deliberate set of styles is used consistently
- **WHEN** the reviewed evidence shows a constrained set of button styles, font weights, and colors applied consistently by semantic role across the product
- **THEN** the usability skill does not flag this requirement

#### Scenario: Evidence covers only a single screen
- **WHEN** the reviewed evidence is a single screen or component with no visibility into the rest of the product's design system
- **THEN** the usability skill reports this requirement as `NOT ASSESSABLE` rather than assuming variant proliferation exists or does not

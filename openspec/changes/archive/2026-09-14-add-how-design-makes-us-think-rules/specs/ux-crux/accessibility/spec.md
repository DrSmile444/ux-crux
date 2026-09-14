## ADDED Requirements

### Requirement: Typography and iconography remain legible under real-world reading conditions
The accessibility skill SHALL flag a mobile UI whose typography or iconography is specified or shown in a way that would plausibly fail under real-world adverse reading conditions — outdoor sunlight glare, a budget or low-resolution display, or low ambient light — such as ultra-thin type weights, low-contrast icon fills, or fine detail that would disintegrate under these conditions. This is distinct from `core.md`'s `X03` (static WCAG contrast-ratio compliance under standard viewing conditions) and `mobile.md`'s `X04`/`X05` (text-scaling and Dynamic Type support), neither of which by itself guarantees legibility once real-world display quality or ambient lighting is accounted for.

#### Scenario: A design specifies ultra-thin type or fine detail with no adverse-condition allowance
- **WHEN** the reviewed evidence shows a design spec or screenshot using ultra-thin font weights or fine-detail iconography for primary content, with no indication that legibility under glare, a low-end display, or low light was considered
- **THEN** the accessibility skill flags the real-world-legibility finding and recommends a more robust type weight or icon treatment, or confirming legibility through outdoor/low-end-device testing

#### Scenario: Typography and iconography already use robust, legible treatments
- **WHEN** the reviewed evidence shows typography and iconography using sufficiently bold weights and open, simple shapes that would plausibly remain legible under glare or on lower-quality displays
- **THEN** the accessibility skill does not flag this requirement

#### Scenario: Evidence gives no basis to assess real-world display conditions
- **WHEN** the reviewed evidence is a static screenshot or spec with no information about the product's real-world usage context (indoor/outdoor use, target device tier)
- **THEN** the accessibility skill reports this requirement as `NOT ASSESSABLE` rather than assuming a pass or fail, and names a running build tested outdoors or on a low-end device as the validation method

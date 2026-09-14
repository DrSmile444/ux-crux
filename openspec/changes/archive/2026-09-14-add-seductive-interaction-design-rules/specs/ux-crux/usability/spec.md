## ADDED Requirements

### Requirement: Physical depth-cue consistency
The usability skill SHALL, as part of its affordance-diagnostic vocabulary, check that visual depth cues (shadow direction, light source, elevation, and overlap) across a reviewed interface obey one consistent, physically plausible logic, applying the test of whether a physical model of the layout could plausibly be built from those cues; an inconsistency (for example a shadow direction that contradicts an implied light source, or an element's implied elevation contradicting another's) SHALL be flagged as an affordance-consistency defect.

#### Scenario: Conflicting shadow directions across UI layers
- **WHEN** the reviewed evidence shows two or more elevated UI elements (cards, modals, sliding panels) whose drop-shadow direction implies conflicting light sources
- **THEN** the usability skill flags the inconsistency as a physical-affordance defect, citing the affordance vocabulary's Physical/Sensory types

### Requirement: No manual entry of system-derivable data
The usability skill SHALL flag a form field that requires the user to manually supply or select data the system can already derive from other input already provided (for example a manual card-type selector when the card number's own digits already determine the type), distinct from existing rules governing redundant-entry-within-a-process and cross-session default memory, which do not cover data that is derivable rather than merely previously entered.

#### Scenario: Manual card-type dropdown alongside a card-number field
- **WHEN** the reviewed evidence shows a payment form requiring the user to select a card type from a dropdown in addition to entering the card number, and the card type is mechanically derivable from the number itself
- **THEN** the usability skill flags the redundant manual selection and recommends auto-detecting the derivable value instead

## ADDED Requirements

### Requirement: Form field width signals the expected input length
The usability skill SHALL check that a text input's visible width corresponds to the length of the value it expects: a fixed-length value (a card security code, a birth year) gets a field only as wide as the value needs, and a long value (a card number, an address line) is not squeezed into a short field. Field width is a format cue; this requirement is distinct from `F23` (chunking of long identifiers) and `F25` (not asking for derivable data). It SHALL NOT apply where a responsive layout fixes all fields to one column width for a documented reason that the interface compensates for with format hints, and widths that cannot be seen in the evidence SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Short and long values share one width
- **WHEN** the reviewed evidence shows a card form where the security code field is as wide as the card-number field
- **THEN** the usability skill flags the width mismatch as a format-cue finding

#### Scenario: Widths follow the expected value
- **WHEN** the reviewed evidence shows a short expiry field, a short code field, and a wide card-number field
- **THEN** the usability skill does not flag this requirement

#### Scenario: Static evidence does not show widths
- **WHEN** the reviewed evidence is a text description that does not state field widths
- **THEN** the usability skill reports this requirement `NOT ASSESSABLE`

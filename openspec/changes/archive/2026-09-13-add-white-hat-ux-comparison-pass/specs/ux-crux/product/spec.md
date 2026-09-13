## ADDED Requirements

### Requirement: Opt-in/opt-out phrasing avoids double-negative or inverted logic
The product skill SHALL flag opt-in/opt-out checkbox or form logic that uses a double negative or inverted logic (for example a checkbox where checking it means declining something) that requires the user to work out what checking or unchecking the control actually does, distinct from the existing confirm-shaming rule, which addresses emotionally loaded language rather than logical inversion.

#### Scenario: Checkbox phrased as a double negative
- **WHEN** the reviewed evidence shows a checkbox labeled with a double negative (for example "Uncheck this box if you do not want to not receive updates") or an inverted-logic construction where checking the box means declining an offer
- **THEN** the product skill flags this as a Trick Questions finding

#### Scenario: Opt-in/opt-out control uses plain affirmative phrasing
- **WHEN** the reviewed evidence shows a single, plain-language affirmative checkbox (for example "Send me weekly updates") that defaults to unchecked
- **THEN** the product skill does not flag a Trick Questions finding

## ADDED Requirements

### Requirement: Controls for spatially arranged targets mirror the arrangement [A32R]
The usability skill SHALL check that a set of controls that each act on one place in a spatial arrangement (the rooms or zones of a floor plan or smart-home layout, the seats on a seating map, the left and right side of a vehicle or stage, the burners of a stove) either sits on or next to the thing it controls, or is laid out in the same spatial pattern, so the user does not have to match each control to its target by label alone. This requirement is distinct from A12R, IA10 and N07R. It SHALL NOT apply to controls whose targets have no spatial arrangement, or where a diagram of the arrangement is shown beside the controls, and a layout match SHALL be reported `NOT ASSESSABLE` when the evidence does not show the real arrangement.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a smart-home screen with a single vertical list of light toggles labelled "Light 1" to "Light 6" for lights arranged in two rows in a room
- **THEN** the usability skill flags that the controls do not mirror the spatial arrangement of the lights

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a floor-plan view where each light's control appears on its own position in the plan
- **THEN** the usability skill does not flag this requirement

### Requirement: High-consequence values get a sensibility check [E10]
The usability skill SHALL check that a field taking a quantity with a large consequence (a money amount, a medication or radiation dose, an order or transfer quantity) checks the entered value against a plausible range or the user's usual values and asks the user to confirm or correct a value far outside it, and that the check confirms rather than blocks an unusual but possible value. The rule has `Expert practice` evidence, so a finding is reported as `RISK` with confidence Low and severity no higher than moderate, naming the author and work. This requirement is distinct from format validation, A05R and E01. It SHALL NOT apply to low-consequence or cheaply reversible fields, and whether the system checks entered values SHALL be reported `NOT ASSESSABLE` from a static screen.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a transfer form that accepts any amount up to the account limit and submits with no review of an amount a hundred times the user's usual transfer
- **THEN** the usability skill reports a low-confidence risk that a mistyped value passes unchallenged

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a prompt "This is much larger than your usual transfer. Confirm $1,000,000?" with a correct-amount action
- **THEN** the usability skill does not flag this requirement

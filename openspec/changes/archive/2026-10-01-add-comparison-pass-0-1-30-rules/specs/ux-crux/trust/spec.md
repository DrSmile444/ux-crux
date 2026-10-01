## ADDED Requirements

### Requirement: Free-trial terms are stated before the trial starts
The trust skill SHALL check that a screen offering a free trial states, before the trial starts, the trial's duration, what content or services stop being accessible when it ends, and the charges that follow. This follows Apple App Review Guidelines 3.1.1 and 3.1.2 and the material-terms-before-billing-information condition of 15 U.S.C. §8403. This requirement is distinct from `O14`, which concerns payment-method timing and conversion notice. It SHALL NOT apply to a trial that does not convert to a charge, and terms that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Trial with the price only in fine print
- **WHEN** the reviewed evidence shows a "Start free trial" button with the duration and later charge absent from the screen
- **THEN** the trust skill flags the missing terms

#### Scenario: Terms shown as a timeline
- **WHEN** the reviewed evidence shows a trial screen listing the day it starts, the day a reminder is sent, and the day the first charge begins
- **THEN** the trust skill does not flag this requirement

#### Scenario: Only a cropped screen is available
- **WHEN** the reviewed evidence is a cropped screenshot that omits the trial's terms area
- **THEN** the trust skill reports this requirement `NOT ASSESSABLE`

### Requirement: A struck-through "was" price is a genuine former price
The trust skill SHALL check that a crossed-out or "was" price shown beside a current price is a former price at which the item was actually offered to the public on a regular basis for a reasonably substantial period, as 16 CFR 233.1 describes. This requirement is distinct from `PB03`, which concerns anchors hiding total cost; here the test is the authenticity of the reference price. It SHALL NOT apply to a reference price labelled as a manufacturer's suggested price with a verifiable basis, and a price history that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Reference price never charged
- **WHEN** the reviewed evidence shows a struck-through price that the same product page history or a competing listing shows was never charged
- **THEN** the trust skill flags the former price as unsupported

#### Scenario: No price history in the evidence
- **WHEN** the reviewed evidence shows only a screenshot with a struck-through price
- **THEN** the trust skill reports this requirement `NOT ASSESSABLE`

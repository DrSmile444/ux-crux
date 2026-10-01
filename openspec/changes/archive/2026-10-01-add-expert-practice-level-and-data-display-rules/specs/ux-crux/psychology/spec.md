## ADDED Requirements

### Requirement: Quantities are encoded with the most accurately judged visual attribute
The psychology skill SHALL check that a chart or visual display used for precise quantitative comparison encodes values by position along a common scale or by length, and does not rely on angle, area, volume or colour intensity for the comparison. This follows the ranking of elementary perceptual tasks by judgment accuracy in Cleveland & McGill (1984). It SHALL NOT apply where a rough proportion is enough, and a chart that cannot be seen SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Precise comparison encoded by bubble area
- **WHEN** the reviewed evidence shows revenue figures that users must compare precisely, encoded as circle area
- **THEN** the psychology skill flags the encoding and recommends length or position

#### Scenario: Bars on a shared baseline
- **WHEN** the reviewed evidence shows the same figures as bars on a common scale
- **THEN** the psychology skill does not flag this requirement

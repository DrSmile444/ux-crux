## ADDED Requirements

### Requirement: A performance metric carries comparison context
The product skill SHALL check that a performance metric on a dashboard or summary appears with at least one comparison that lets the viewer judge it (a target, a prior period, or a variance), not as a bare number. This is practice stated in Few, *Information Dashboard Design* (2006), reported at `Expert practice` level. The requirement is distinct from `C22` (chart type) and `C25` (blended composites), and SHALL NOT apply to secondary values whose context is evident.

#### Scenario: Bare revenue figure
- **WHEN** the reviewed evidence shows a "Revenue" tile with only a number
- **THEN** the product skill flags the missing comparison context as a low-confidence finding

#### Scenario: Figure with target and variance
- **WHEN** the reviewed evidence shows the same tile with a target and a percentage variance
- **THEN** the product skill does not flag this requirement

### Requirement: Displayed precision matches the decision it supports
The product skill SHALL check that numbers on a summary display use the precision the decision needs (for example "$3.8M" for an executive overview) rather than full precision. This is practice stated in Few (2006), reported at `Expert practice` level, and SHALL NOT apply where exact values are the task (accounting, audit, scientific readings).

#### Scenario: Executive tile shows cents
- **WHEN** the reviewed evidence shows an executive overview with "$3,848,305.93"
- **THEN** the product skill flags the excess precision as a low-confidence finding

### Requirement: Display medium fits the viewer's task
The product skill SHALL check that tables are used for looking up exact values and graphs for perceiving shape, trend or exceptions, and that a radial gauge, a pseudo-3D chart or a radar chart is replaced by a linear or bar form unless the category axis is naturally cyclic. This is practice stated in Few (2006), reported at `Expert practice` level. The requirement is distinct from `C22` (match to data category) and SHALL NOT apply to a decorative illustration that carries no data.

#### Scenario: 3-D bars hide data
- **WHEN** the reviewed evidence shows a pseudo-3D bar chart where front bars hide rear bars
- **THEN** the product skill flags the display medium and recommends a flat bar form

#### Scenario: Radar chart for hours of day
- **WHEN** the reviewed evidence shows a radar chart whose categories are the 24 hours of a day
- **THEN** the product skill does not flag the cyclic axis

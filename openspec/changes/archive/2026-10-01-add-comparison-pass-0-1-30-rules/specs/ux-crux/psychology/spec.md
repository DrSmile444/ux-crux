## ADDED Requirements

### Requirement: Bar chart value axes start at zero
The psychology skill SHALL check that a bar chart, in which length encodes value, has a value axis that starts at zero, because a truncated axis makes viewers perceive differences as larger even after they are warned. This follows Yang, Vargas Restrepo, Stanley & Marsh, "Truncating Bar Graphs Persistently Misleads Viewers", *Journal of Applied Research in Memory and Cognition* 10(2) (2021), 298-311. This requirement is distinct from `PA18`, which concerns encoding accuracy. It SHALL NOT apply to line charts, and an axis that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Bars starting at 90
- **WHEN** the reviewed evidence shows bars for values 92 and 96 on an axis starting at 90
- **THEN** the psychology skill flags the truncated baseline

#### Scenario: Zero baseline
- **WHEN** the reviewed evidence shows the same bars on an axis starting at zero
- **THEN** the psychology skill does not flag this requirement

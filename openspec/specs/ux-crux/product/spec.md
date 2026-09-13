# ux-crux/product Specification

## Purpose

Defines the product lens covering goal clarity, user intent, information architecture, and content/UX writing.

## Requirements

### Requirement: Primary goal and hierarchy check
The product skill SHALL evaluate whether each reviewed screen has a clear primary user goal, whether the primary action is visually prioritized over secondary actions, and whether content and controls serve that goal rather than internal product structure.

#### Scenario: Competing calls to action
- **WHEN** a reviewed screen presents two visually equal calls to action for a task with one clear primary next step
- **THEN** the product skill flags the lack of visual hierarchy as a finding

### Requirement: Registration and data-minimization check
The product skill SHALL flag cases where a flow requires registration or personal data before demonstrating value, unless identity or the data is intrinsic to the task or required for safety/security.

#### Scenario: Login wall before value
- **WHEN** a reviewed flow requires account creation before showing any core functionality
- **THEN** the product skill flags this as a contextual finding requiring justification

### Requirement: Content clarity check
The product skill SHALL evaluate whether button/action labels, error copy, and instructional content use the user's vocabulary and describe the actual action or problem, rather than vague or internal terminology.

#### Scenario: Generic OK button on a specific action
- **WHEN** a reviewed control uses "OK" for a specific, describable action such as deleting an item
- **THEN** the product skill recommends a specific action label instead

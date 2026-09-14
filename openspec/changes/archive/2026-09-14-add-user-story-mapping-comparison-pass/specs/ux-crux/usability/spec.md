## ADDED Requirements

### Requirement: Navigation goal-altitude consistency
The usability skill SHALL flag a set of sibling top-level navigation or menu items that mixes inconsistent goal-altitude levels — a sea-level, functional-task item (a meaningful goal a user completes in one sitting, for example "Take a shower") presented alongside a fish-level, sub-functional micro-action item (a procedural step within a larger task, for example "Adjust water temperature") — within the same list or menu. This is distinct from the existing navigation mutual-exclusivity requirement, which addresses whether sibling categories overlap in scope, not whether they are stated at a consistent level of granularity.

#### Scenario: Menu mixes a task-level item with a micro-action item
- **WHEN** a reviewed top-level menu lists sibling items such as "Manage Account" (a sea-level task) and "Toggle Dark Mode" (a fish-level micro-action) at the same level, with no grouping that separates them
- **THEN** the usability skill flags the goal-altitude inconsistency and recommends either nesting the micro-action item under its parent task or restating it at a comparable goal level

#### Scenario: Menu items share a consistent goal level
- **WHEN** a reviewed top-level menu's sibling items are all stated as sea-level tasks (for example "Manage Account", "View Orders", "Contact Support")
- **THEN** the usability skill does not flag this requirement

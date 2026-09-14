## ADDED Requirements

### Requirement: Cross-module controls are grouped by user activity, not internal ownership
The product skill SHALL flag a control surface (a multi-device dashboard, a settings area, or a compound feature spanning several backend modules or subsystems) that requires the user to manually locate and configure each subsystem separately in order to reach one named activity or goal (for example "watch a movie," "set up automatic backups"), when the controls could instead be grouped and exposed by that named activity. This requirement is distinct from the existing information-architecture requirement that navigation and content be organized around user mental models rather than internal department structure: that requirement governs content/navigation categorization, while this requirement applies the same organizing principle specifically to control and settings surfaces for a goal spanning multiple modules.

#### Scenario: A compound task requires configuring several separate modules in sequence
- **WHEN** the reviewed evidence shows a user needing to visit several separate device/module control screens, each requiring its own mode or setting change, in order to complete one named activity
- **THEN** the product skill flags the missing activity-centered grouping and recommends a single control surface organized around the named activity, orchestrating the underlying modules automatically

#### Scenario: A single module inherently requires its own dedicated controls
- **WHEN** the reviewed evidence shows a control surface for a task that genuinely involves only one module or subsystem, with no other subsystem to orchestrate
- **THEN** the product skill does not flag this requirement; it applies only when a goal genuinely spans multiple modules that could be jointly orchestrated

#### Scenario: Controls are already grouped by named activity
- **WHEN** the reviewed evidence shows a control surface offering a named activity (for example a single "Watch a Movie" control) that automatically configures every underlying module needed for that activity
- **THEN** the product skill does not flag this requirement

### Requirement: Instructional content is delivered in-context at the moment of need
The product skill SHALL flag instructional or coaching content for a feature that is front-loaded as a mandatory upfront tour, walkthrough, or manual read before any real task need exists, when that content could instead be delivered in-context at the moment a user attempts or needs that specific feature. This requirement is distinct from the existing first-use/repeat-use/expert-use differentiation requirement, which establishes that these needs differ without specifying when instructional content should be delivered; this requirement addresses delivery timing specifically.

#### Scenario: A mandatory multi-screen feature tour blocks first use
- **WHEN** the reviewed evidence shows a mandatory, multi-screen feature tour or walkthrough that a user must click through before reaching any real task, covering features not yet relevant to the user's immediate goal
- **THEN** the product skill flags the missing just-in-time delivery and recommends moving the explanation to the moment the specific feature is actually attempted or needed

#### Scenario: A brief, skippable contextual tip appears at the moment of first use
- **WHEN** the reviewed evidence shows a short, dismissible contextual tip, coach mark, or inline demonstration appearing the first time a user attempts a specific feature, rather than an upfront mandatory tour
- **THEN** the product skill does not flag this requirement

#### Scenario: Reference documentation exists separately from onboarding
- **WHEN** the reviewed evidence shows comprehensive reference documentation available on request (for example a help center or manual) that is not forced on the user before any task
- **THEN** the product skill does not flag this requirement; comprehensive reference material is acceptable when it is optional and not the primary onboarding mechanism

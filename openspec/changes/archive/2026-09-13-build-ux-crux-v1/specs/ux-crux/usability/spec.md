## Purpose

Defines the usability lens covering task flow, interaction friction and efficiency, navigation, forms, system status, and error recovery.

## ADDED Requirements

### Requirement: Task and interaction-efficiency evaluation
The usability skill SHALL evaluate whether the primary user task is clear, whether unnecessary steps or taps exist, and whether an explicit user-initiated action is followed by immediate readiness for the implied next action, consistent with the intent-continuation rules in its references.

#### Scenario: Search reveals an unfocused input
- **WHEN** a reviewed flow shows a Search control revealing a text field that is not focused and does not show the keyboard
- **THEN** the usability skill flags this as a major interaction-efficiency finding unless the revealed state is an intentional browse-first experience

### Requirement: State-completeness check
The usability skill SHALL check for the presence of loading, empty, no-results, offline, validation-error, backend-error, and destructive-recovery states, and SHALL report which of these states are missing or unaddressed in the evidence provided.

#### Scenario: Only the happy path is shown
- **WHEN** the provided evidence covers only the successful/happy-path state of a flow
- **THEN** the usability skill's report explicitly lists the states that could not be assessed as missing context, rather than assuming they are handled

### Requirement: Folk-rule guard
The usability skill SHALL NOT treat a listed folk rule (for example "always confirm delete", "never use a hamburger menu", "more steps are always worse") as an automatic failure; it SHALL apply the corresponding contextual encoding from its references and note when applicability is uncertain.

#### Scenario: Hamburger menu hides a secondary destination
- **WHEN** a reviewed navigation hides a low-frequency, secondary destination behind a hamburger menu
- **THEN** the usability skill does not report this as a defect solely because a hamburger menu is used

# ux-crux/usability Specification

## Purpose

Defines the usability lens covering task flow, interaction friction and efficiency, navigation, forms, system status, and error recovery.

## Requirements

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

### Requirement: Confirmation dialogue simplification check
When a reviewed confirmation dialog's title, body copy, and button labels are misaligned — for example a statement-style title that does not match a question, a destructive or irreversible consequence buried below secondary details, or generic/jargon button labels ("Enable"/"Cancel") that do not literally answer the title — the usability skill SHALL flag the mismatch and recommend a structured refinement: phrase the title as a direct question, surface the most consequential (destructive/irreversible) fact first, and make the button labels literal answers to that question rather than generic verbs.

#### Scenario: Statement title with jargon buttons
- **WHEN** a reviewed confirmation dialog has a title stated as a label rather than a question (for example "Sharing settings"), buries an irreversible consequence in a dense paragraph, and offers "Enable"/"Cancel" buttons
- **THEN** the usability skill flags the mismatch and recommends rephrasing the title as a direct question (for example "Limit sharing to domain users?") with buttons that literally answer it (for example "Yes"/"No")

#### Scenario: Confirmation dialog already follows the structure
- **WHEN** a reviewed confirmation dialog's title is a direct question, its most consequential fact appears first, and its buttons literally answer the question
- **THEN** the usability skill does not flag this requirement

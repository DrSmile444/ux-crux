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

### Requirement: Control label/appearance must match its actual effect
The usability skill SHALL flag an interactive control (a button, a standard system control such as a window-close "X", or an equivalent affordance) whose actual effect on activation is materially different from what its label or conventional appearance leads a user to expect.

#### Scenario: Close control triggers an unrelated action
- **WHEN** the reviewed evidence shows a standard close/dismiss control (for example a title-bar "X") that, when activated, performs an unrelated action instead of closing (for example initiating an installation or purchase)
- **THEN** the usability skill flags this as a control-truthfulness finding at blocker severity, distinct from general button-copy clarity rules

#### Scenario: Button label matches its actual effect
- **WHEN** the reviewed evidence shows a control whose label and conventional appearance match the action it actually performs
- **THEN** the usability skill does not flag a control-truthfulness finding for that control

### Requirement: Post-authentication redirect preserves prior context
The usability skill SHALL flag a post-login or post-authentication redirect that drops the user onto a generic destination (for example a homepage or dashboard) instead of returning them to the exact screen, item, or step they were engaged with before authentication was triggered.

#### Scenario: Redirect to homepage loses in-progress task context
- **WHEN** the reviewed evidence shows a user triggering login from a specific in-progress task (for example viewing a specific product before checkout) and, after successful authentication, landing on a generic homepage rather than back at that task
- **THEN** the usability skill flags this as a Wrong Destination finding

#### Scenario: Redirect returns user to prior context
- **WHEN** the reviewed evidence shows the user returned to the exact screen or step they were on before authentication was triggered
- **THEN** the usability skill does not flag a Wrong Destination finding

### Requirement: Blocking modal does not force an unrelated secondary action
The usability skill SHALL flag a full-screen or otherwise fully blocking modal/overlay that prevents progress on the user's original task unless the user completes an unrelated secondary action (for example disabling a content blocker, completing a survey, or providing unrelated information), distinct from A07R's general guidance on reserving dialogs for interruption-worthy information.

#### Scenario: Full-screen modal blocks content until an unrelated action is taken
- **WHEN** the reviewed evidence shows a user's task (for example reading an article) fully blocked by a modal that will not dismiss until the user performs an action unrelated to that task
- **THEN** the usability skill flags this as a Road Block finding

#### Scenario: Modal is dismissible or task-relevant
- **WHEN** the reviewed evidence shows a blocking modal that is either dismissible without an unrelated action, or the required action is a legitimate prerequisite for the task itself (for example a required security check or legal age gate)
- **THEN** the usability skill does not flag a Road Block finding

### Requirement: Select/dropdown controls are not used for open-ended, high-cardinality data
The usability skill SHALL flag the use of a selection control (dropdown menu, picker, or range slider) for data entry whose value space is open-ended or has very high cardinality (for example a full telephone number entered digit-by-digit, or an arbitrary date range), where a text/numeric input with format guidance would serve the same validation need with far less interaction cost.

#### Scenario: Phone number entered via a dropdown of numeric digits
- **WHEN** the reviewed evidence shows a form requiring a phone number to be built by selecting each digit from a dropdown menu
- **THEN** the usability skill flags this as an Absurd Input Controls finding

#### Scenario: Selection control used for a genuinely constrained set
- **WHEN** the reviewed evidence shows a selection control used for a small, validated, constrained set of options (for example selecting a country or state from a list)
- **THEN** the usability skill does not flag an Absurd Input Controls finding

### Requirement: List/collection management supports bulk actions
The usability skill SHALL flag a list or collection management interface that forces single-item-only actions (for example deleting one item at a time, each requiring a full screen or list reload) when the underlying task is naturally a bulk operation across many items.

#### Scenario: Deleting many items requires one full reload per item
- **WHEN** the reviewed evidence shows a list where removing multiple items requires repeating a single-item delete-and-reload cycle for each one, with no multi-select or bulk-action affordance
- **THEN** the usability skill flags this as a bulk-action-efficiency finding

#### Scenario: Critical destructive action reasonably requires per-item confirmation
- **WHEN** the reviewed evidence shows a destructive, high-consequence action that reasonably requires deliberate per-item verification
- **THEN** the usability skill does not flag a bulk-action-efficiency finding solely because the action is single-item

### Requirement: Deep site hierarchies provide breadcrumb trails and structured footer navigation
The usability skill SHALL flag a deep-hierarchy website or app section that provides no breadcrumb trail for orientation and no structured, multi-column footer sitemap, leaving browser/back-button navigation as the only recovery path.

#### Scenario: Deep page has no breadcrumb or footer sitemap
- **WHEN** the reviewed evidence shows a page several levels deep in site hierarchy with no breadcrumb trail and no structured footer navigation
- **THEN** the usability skill flags this as a navigation-orientation finding

#### Scenario: Simplified checkout intentionally omits secondary navigation
- **WHEN** the reviewed evidence shows a simplified checkout flow that intentionally strips non-essential navigation while preserving a clear exit/home path
- **THEN** the usability skill does not flag a navigation-orientation finding for the missing breadcrumb/footer alone

### Requirement: Forms provide positive real-time validation feedback
The usability skill SHALL flag a form that only ever surfaces validation feedback as errors after a failed attempt, when a field's correctness could instead be confirmed to the user immediately and positively (for example an inline checkmark) as soon as valid input is entered or the field loses focus.

#### Scenario: Form gives no positive feedback until submission fails
- **WHEN** the reviewed evidence shows a multi-field form where a user cannot tell a field was entered correctly until they submit and either succeed or see an error
- **THEN** the usability skill flags this as a missing-positive-validation finding

#### Scenario: Field confirms valid input immediately
- **WHEN** the reviewed evidence shows a field that visibly confirms valid input as soon as it is entered or the field loses focus
- **THEN** the usability skill does not flag a missing-positive-validation finding for that field

### Requirement: Mode changes are visibly signaled
The usability skill SHALL flag a persistent ("sticky") interaction mode — where the same user action produces different results depending on an active mode set earlier — when the current mode is not visibly and continuously indicated to the user. A momentary mode held only while a modifier control is actively pressed (a quasimode) is exempt from this requirement, since its own physical/interactive state is the visibility signal.

#### Scenario: Sticky mode has no persistent visual indicator
- **WHEN** a reviewed tool has a persistent mode switch (for example a "draw" vs. "select" tool mode) that changes what an identical gesture does, with no continuously visible indicator of which mode is currently active
- **THEN** the usability skill flags this as a mode-error risk finding

#### Scenario: Mode is held only while a modifier is pressed
- **WHEN** a reviewed control changes behavior only while the user actively holds a modifier key or button, reverting the instant it is released
- **THEN** the usability skill does not flag a missing-mode-indicator finding, since the held state itself signals the mode

#### Scenario: Sticky mode has a persistent, high-contrast indicator
- **WHEN** a reviewed tool's active mode is shown continuously and prominently (for example a highlighted toolbar icon or a persistent mode label) for as long as that mode is active
- **THEN** the usability skill does not flag this requirement

### Requirement: Reused icons do not carry conflicting meanings in close proximity
The usability skill SHALL flag the same icon or visual signifier (for example a generic "X") used for two different actions with materially different consequences when both appear close together in the same view, distinct from the control-truthfulness requirement, which addresses a single control's own label/effect mismatch rather than one signifier meaning different things at different nearby locations.

#### Scenario: Identical icon closes one item and declines another nearby
- **WHEN** a reviewed interface uses the same "X" icon in close proximity for both "close this view" and a distinct, higher-consequence action (for example "decline this meeting invitation")
- **THEN** the usability skill flags the icon-reuse ambiguity as a finding

#### Scenario: Nearby controls use distinct icons and labels for distinct actions
- **WHEN** a reviewed interface uses visually distinct icons, colors, or explicit text labels for two different nearby actions with different consequences
- **THEN** the usability skill does not flag an icon-reuse-ambiguity finding

### Requirement: Structural scoping stays consistent across devices
The usability skill SHALL flag a case where a containment, scoping, or default-audience rule established in one device's or viewport's interaction context (for example posting from within a specific group's view) does not carry over to another device or viewport of the same product, silently resetting to a broader or different default instead.

#### Scenario: Mobile resets a scoping default that desktop preserves
- **WHEN** the reviewed evidence shows that performing an action from within a specific scoped context (for example posting while viewing one group) automatically applies that scope on desktop, but the same action on the mobile app resets to a broader or unscoped default requiring extra manual steps
- **THEN** the usability skill flags the cross-device scoping inconsistency as a finding

#### Scenario: Scoping behavior matches across devices
- **WHEN** the reviewed evidence shows the same containment or scoping default applied consistently regardless of which device or viewport the action was performed on
- **THEN** the usability skill does not flag this requirement

### Requirement: Search and discovery preserve context across a non-linear session
The usability skill SHALL flag a search or discovery flow that clears the user's query terms, filters, or browsing context after each search execution or navigation step, when the underlying task plausibly involves an evolving, non-linear search session (a user refining or pivoting their query as they learn more, rather than a single one-shot lookup).

#### Scenario: Search results page clears the query and strips related context
- **WHEN** the reviewed evidence shows that executing a search clears the entered query terms and removes access to related categories or filters from the results view, forcing the user to restart from a blank search each time they want to pivot
- **THEN** the usability skill flags the missing search-context preservation as a finding

#### Scenario: Search preserves query terms and supports pivoting
- **WHEN** the reviewed evidence shows a search flow that keeps the query visible and editable, and offers related filters or categories the user can pivot into without restarting
- **THEN** the usability skill does not flag this requirement

#### Scenario: Task is a single, direct transactional lookup
- **WHEN** the reviewed evidence shows a strict transactional lookup (for example tracking a package by its ID) rather than an evolving exploratory search
- **THEN** the usability skill does not flag this requirement solely because query terms are not preserved

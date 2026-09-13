## ADDED Requirements

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

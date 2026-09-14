## ADDED Requirements

### Requirement: Undiscoverable functionality is treated as absent
The usability skill SHALL flag a capability that technically exists in the product but requires effort beyond a reasonable discovery or interaction threshold to reach (for example a feature buried several levels deep in nested menus, reachable only via an undocumented gesture, or documented only in an external manual) as equivalent to a missing feature, distinct from the general navigation-hierarchy-depth guidance, which addresses hierarchy depth relative to task complexity rather than whether a specific capability is reachable at all without external help.

#### Scenario: Feature requires manual consultation to find
- **WHEN** the reviewed evidence shows a capability that exists only behind several layers of unlabeled nested menus, or is documented solely in an external manual/help article with no discoverable in-context path
- **THEN** the usability skill flags the capability as effectively non-existent to users and recommends surfacing it within the primary workflow

#### Scenario: Advanced capability is intentionally deferred behind an expert mode
- **WHEN** the reviewed evidence shows a power-user shortcut or advanced parameter reserved for an explicit expert/advanced mode, while the primary workflow remains clean and the basic task is fully reachable without it
- **THEN** the usability skill does not flag this requirement solely because the advanced capability is hidden

### Requirement: Control-level findings are diagnosed by affordance type
The usability skill SHALL classify a flagged control-level interaction defect by which of the four affordance types failed — Cognitive (the user cannot think/know/understand what the control does), Physical (the user cannot physically perform the action), Sensory (the user cannot see/hear/feel the cognitive or physical affordance), or Functional (the backend capability behind the control does not match what was promised) — when doing so sharpens the finding's stated cause and recommended fix, rather than reporting only "this is a usability issue."

#### Scenario: Icon-only control with no label and low contrast
- **WHEN** the reviewed evidence shows an icon-only control with no accessible label or visible text, rendered in low contrast against its background
- **THEN** the usability skill identifies both a missing cognitive affordance (no way to know what the control does) and a missing sensory affordance (low contrast obscures even the icon itself), and states both explicitly rather than a single generic finding

#### Scenario: Clearly labeled, high-contrast control with adequate target size
- **WHEN** the reviewed evidence shows a control with a precise text label, high contrast, and an adequately sized touch/click target that performs the action its label and appearance promise
- **THEN** the usability skill does not flag an affordance-type defect for that control

### Requirement: User-created affordance artifacts signal a missing built-in affordance
The usability skill SHALL treat a user-created affordance artifact visible in the evidence — a taped label, sticky note, hand-written cheat-sheet, or comparable physical or digital workaround added by users to compensate for the interface — as a strong signal, at `VERIFIED` or `SUPPORTED` evidence status per the shared evidence model, that the interface is missing a needed cognitive or physical affordance, and SHALL flag the missing built-in affordance directly rather than treating the artifact itself as the finding or dismissing it as a training gap.

#### Scenario: Photographed workspace shows taped instructions on a device
- **WHEN** the reviewed evidence includes a photograph or description of a device or interface with a user-taped label or handwritten cheat-sheet explaining how to perform a specific action
- **THEN** the usability skill flags the underlying missing affordance as a `VERIFIED` or `SUPPORTED` finding (naming which affordance type is missing) rather than treating the taped note as an acceptable workaround

#### Scenario: No user-added artifacts are present in the evidence
- **WHEN** the reviewed evidence shows no user-added labels, notes, or workaround artifacts
- **THEN** the usability skill does not report a finding under this requirement from absence alone; it does not treat the lack of visible workarounds as proof the interface has no affordance gaps

### Requirement: Button labels match their destination's heading
The usability skill SHALL flag a button or link whose label text does not match, word-for-word, the heading of the screen or section it navigates to, distinct from the existing terminology-consistency guidance, which addresses whether the same underlying concept is renamed across screens in general, not whether a specific control's exact string matches its destination's own heading.

#### Scenario: Button and destination heading use different verbs for the same action
- **WHEN** the reviewed evidence shows a button labeled "View Pay Stub Summary" that navigates to a screen headed "Display Earnings"
- **THEN** the usability skill flags the label/heading mismatch as a finding and recommends matching the destination heading to the button's own label

#### Scenario: Button label and destination heading match exactly
- **WHEN** the reviewed evidence shows a button's label text matching, word-for-word, the heading of the screen it navigates to
- **THEN** the usability skill does not flag this requirement

### Requirement: Disabled controls explain their own unavailability on interaction
The usability skill SHALL flag a disabled or grayed-out control that gives no explanation when a user directly interacts with it (clicks, taps, or focuses it) of why it is currently unavailable and what specific step would enable it, distinct from the existing requirement that a disabled control merely be visually distinguishable, which does not by itself require an explanation on interaction.

#### Scenario: Grayed-out button gives no feedback when clicked
- **WHEN** the reviewed evidence shows a user clicking or tapping a grayed-out control and receiving no tooltip, message, or other explanation of why it is disabled or how to enable it
- **THEN** the usability skill flags the missing disabled-state explanation as a finding

#### Scenario: Grayed-out button explains its own prerequisite on interaction
- **WHEN** the reviewed evidence shows that interacting with a disabled control surfaces a message stating why it is unavailable and what step would enable it (for example "Complete address above to enable checkout")
- **THEN** the usability skill does not flag this requirement

#### Scenario: Control is hidden rather than disabled for users who should never see it
- **WHEN** the reviewed evidence shows a control that is fully hidden, rather than merely disabled, because the current user's permission level should never have access to it
- **THEN** the usability skill does not flag a missing-explanation finding, since a permanently inapplicable control being hidden entirely is a legitimate alternative to disabling it

### Requirement: Background automation does not seize focus or interrupt active user input
The usability skill SHALL flag a background or automated system process (autosave, background sync, scheduled refresh, or a comparable non-user-initiated operation) that seizes input focus, interrupts active typing or editing, or forces a modal takeover without direct user request, distinct from destructive-action confirmation requirements covered elsewhere, which concern user-initiated actions with irreversible consequences rather than routine background maintenance.

#### Scenario: Background sync completion forces a modal that interrupts active typing
- **WHEN** the reviewed evidence shows a background synchronization or update process that pops up a blocking modal and steals input focus while the user is actively typing or editing
- **THEN** the usability skill flags this as a high-handed-automation finding

#### Scenario: Background automation completes silently without interrupting the user
- **WHEN** the reviewed evidence shows a background process (autosave, sync, or scheduled refresh) that completes without seizing focus or interrupting the user's active work, surfacing only a small, non-blocking status indicator if anything
- **THEN** the usability skill does not flag this requirement

### Requirement: Feedback appears within the user's focus of attention
The usability skill SHALL flag any status, confirmation, or error feedback resulting from a user action that is rendered only in a peripheral, distant, or easily-missed location (for example a small status line in a far corner of a large display) rather than within or immediately adjacent to the user's current visual focus of attention (near the invoking control, or in a centered overlay), generalizing the existing form-specific validation-feedback-placement rule to all feedback types, not only form-field errors.

#### Scenario: Error message appears in a distant, low-contrast status bar
- **WHEN** the reviewed evidence shows an action's error or confirmation feedback rendered only as a small, low-contrast message in a footer or corner status bar, away from where the user is looking
- **THEN** the usability skill flags the feedback-placement finding, noting the user is likely to miss it or assume the action silently succeeded or the system is unresponsive

#### Scenario: Feedback renders inline at the point of interaction
- **WHEN** the reviewed evidence shows feedback rendered inline next to the invoking control or as a prominent overlay within the user's current focus of attention
- **THEN** the usability skill does not flag this requirement

### Requirement: Decorative visual elements do not compete with task-critical attention
The usability skill SHALL flag a purely decorative visual or motion element — a gratuitous intro animation, ambient background motion, auto-playing video banner, or ornamental graphic with no functional or informational purpose — when it measurably competes with legibility, contrast, or attention on task-critical content, distinct from the existing visual-hierarchy contrast requirement, which addresses whether meaningful elements are styled with deliberate contrast, not whether decoration itself is present.

#### Scenario: Auto-playing background animation reduces text legibility
- **WHEN** the reviewed evidence shows a busy, auto-playing background animation or video behind primary task content, reducing text contrast or legibility
- **THEN** the usability skill flags the decorative-clutter finding and recommends a calmer visual treatment for the task-critical surface

#### Scenario: Decorative element does not interfere with the task
- **WHEN** the reviewed evidence shows a decorative element (a subtle background texture, a brand illustration) that does not reduce contrast, legibility, or draw attention away from task-critical content
- **THEN** the usability skill does not flag this requirement

#### Scenario: Short-term promotional landing page
- **WHEN** the reviewed evidence is a short-term marketing/promotional landing page whose primary goal is initial visual engagement rather than sustained task performance
- **THEN** the usability skill weighs this requirement more lightly and notes the context rather than treating decorative emphasis alone as a defect

### Requirement: Destructive controls maintain spacing from adjacent safe controls
The usability skill SHALL flag a destructive or high-consequence control placed in close physical proximity to a safe, frequently used control of similar size, when the resulting proximity plausibly increases the risk of accidental activation through motor overshoot, distinct from `accessibility`'s minimum-touch-target-size contracts, which govern a single target's own size, not the spacing between two different adjacent controls.

#### Scenario: Delete button sits immediately adjacent to Save at identical size
- **WHEN** the reviewed evidence shows a small "Delete" control placed directly next to a similarly sized "Save" control with minimal separation
- **THEN** the usability skill flags the insufficient spacing as a finding and recommends increasing separation or otherwise reducing accidental-activation risk

#### Scenario: Destructive control is spaced apart or visually differentiated
- **WHEN** the reviewed evidence shows a destructive control separated by adequate spacing, size difference, or a visually distinct treatment from adjacent safe controls
- **THEN** the usability skill does not flag this requirement

### Requirement: Long numeric identifiers are displayed in chunked groups
The usability skill SHALL flag a long numeric identifier a user must read, compare, or manually transcribe (for example a phone number, payment card number, or confirmation code) that is displayed as a single unbroken digit string rather than in visually chunked groups.

#### Scenario: Card number displayed as one unbroken string
- **WHEN** the reviewed evidence shows a long identifier such as a card or account number displayed as a single unformatted string of digits
- **THEN** the usability skill flags the missing chunking as a finding and recommends grouped formatting (for example "1234 5678 9012 3456")

#### Scenario: Identifier is already displayed in chunked groups
- **WHEN** the reviewed evidence shows a long numeric identifier already formatted in visually separated groups
- **THEN** the usability skill does not flag this requirement

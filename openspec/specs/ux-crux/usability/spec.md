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

### Requirement: Small, fixed option sets are shown as visible controls, not hidden dropdowns
The usability skill SHALL flag a small, fixed set of options (fewer than approximately six choices) that is hidden inside a collapsed dropdown menu when screen space would permit showing the options directly as radio buttons (mutually exclusive) or checkboxes (independent), distinct from the requirement on select/dropdown controls for open-ended, high-cardinality data, which addresses value spaces too large or unbounded to show directly rather than small sets that are simply hidden unnecessarily.

#### Scenario: Three-option dropdown hides choices that would fit as radio buttons
- **WHEN** the reviewed evidence shows a form presenting three mutually exclusive options through a collapsed dropdown menu, on a screen with enough space to show all three as visible radio buttons
- **THEN** the usability skill flags the unnecessary concealment and recommends visible radio buttons instead

#### Scenario: Dropdown is a reasonable choice given constraints
- **WHEN** the reviewed evidence shows a small option set presented via dropdown on a screen with genuine space constraints (for example a dense mobile form with many other required fields), or the option set exceeds roughly six choices
- **THEN** the usability skill does not flag this requirement

### Requirement: High-frequency fields default to the dominant value and remember prior choices
The usability skill SHALL flag a high-frequency form field or option whose statistically dominant, most common value is not pre-selected by default when doing so carries no risk, and SHALL flag a system that requires a user to re-select a value it could reasonably remember from that user's own previous choice, distinct from the requirement on redundant entry within a single process, which addresses re-asking already-entered information within one flow rather than defaults and cross-session memory.

#### Scenario: Common option left unselected by default
- **WHEN** the reviewed evidence shows a checkout form where "billing address same as shipping" is known to apply to the large majority of users, but the checkbox is unchecked by default, requiring most users to take an extra action
- **THEN** the usability skill flags the missing default-option optimization as a finding

#### Scenario: System does not remember a user's prior selection
- **WHEN** the reviewed evidence shows a returning user required to reselect a preference or option they explicitly chose in a previous session, with no indication the system could reasonably have remembered it
- **THEN** the usability skill flags the missing choice-memory as a finding

#### Scenario: High-risk or consent option is not defaulted
- **WHEN** the reviewed evidence shows a high-risk financial, legal, or consent-bearing option that is left unselected by default, requiring an explicit affirmative choice
- **THEN** the usability skill does not flag this requirement, since such options should not be pre-selected regardless of frequency

### Requirement: Form and data fields are grouped by mental model, not arbitrary order
The usability skill SHALL flag a form or data-display layout that arranges related fields in alphabetical or otherwise arbitrary order instead of logical sub-categories that reflect the user's mental model (for example grouping Personal Info, Address, and Contact separately), distinct from the requirement on single-column question layout, which addresses visual column arrangement rather than semantic grouping of fields.

#### Scenario: Contact form fields listed alphabetically
- **WHEN** the reviewed evidence shows a form listing fields in alphabetical order (for example City, E-mail, Job Title, Name, State) with no logical grouping
- **THEN** the usability skill flags the missing semantic field grouping and recommends organizing fields into meaningful sub-categories

#### Scenario: Fields are grouped into meaningful sub-categories
- **WHEN** the reviewed evidence shows a form or data display organized into clearly titled sub-sections reflecting the user's mental model (for example Personal Info, Address, Other Contact)
- **THEN** the usability skill does not flag this requirement

### Requirement: Content includes contextual inline navigation at the point of reading
The usability skill SHALL flag body or content text that omits a contextual inline hyperlink to a clearly related item at the point where a user is reading about it, forcing the user back to a global or local menu to find that related content instead, distinct from the existing navigation requirements, which address global/local menu structure and orientation rather than in-content links at the moment of reading.

#### Scenario: Product description has no link to a directly related item
- **WHEN** the reviewed evidence shows a product description mentioning a directly related accessory or complementary item, with no inline link to it, requiring the user to leave the page and search the site menu instead
- **THEN** the usability skill flags the missing contextual inline link as a finding

#### Scenario: Content links directly to related items at the point of mention
- **WHEN** the reviewed evidence shows body content that includes an inline hyperlink to a related item at the exact point it is mentioned
- **THEN** the usability skill does not flag this requirement

### Requirement: Adjacent elements use deliberate contrast, not confusing near-uniformity
The usability skill SHALL flag adjacent visual elements whose styling (color, weight, or size) differs only slightly, in a way that appears accidental rather than a deliberate signal of a real functional difference, since near-identical-but-not-quite-identical styling creates cognitive friction as users try to determine whether the difference is meaningful. The skill SHALL also confirm that elements signaling a genuine functional difference use bold, deliberate contrast.

#### Scenario: Primary buttons use barely different shades across screens
- **WHEN** the reviewed evidence shows a primary action button styled in slightly different shades of the same color across different screens of the same product, with no functional reason for the difference
- **THEN** the usability skill flags the near-uniformity as a finding, since a user may reasonably wonder whether the difference is intentional

#### Scenario: A functionally distinct element uses bold, deliberate contrast
- **WHEN** the reviewed evidence shows an element with a genuinely different function (for example an error message) styled with clearly deliberate, high contrast relative to neutral surrounding elements
- **THEN** the usability skill does not flag this requirement

#### Scenario: Identical elements are styled identically
- **WHEN** the reviewed evidence shows functionally identical elements sharing exactly the same styling throughout
- **THEN** the usability skill does not flag this requirement

### Requirement: Layouts use a shared grid for internal and external consistency
The usability skill SHALL flag a product whose sub-sections or screens are laid out with fragmented, inconsistent visual styles instead of a shared grid system, and SHALL flag a grid system that is treated as an untouchable constraint after it no longer accommodates the product's current functionality, rather than being revisited and updated.

#### Scenario: Sub-sections use inconsistent, fragmented layouts
- **WHEN** the reviewed evidence shows different sections or teams' screens within the same product using visibly different layout grids, spacing, or alignment with no shared style guide
- **THEN** the usability skill flags the internal-consistency gap as a finding

#### Scenario: An outdated grid blocks needed functionality
- **WHEN** the reviewed evidence shows a layout grid that visibly cannot accommodate new required functionality (for example content is cramped or overflows) but has not been revisited
- **THEN** the usability skill flags the rigid grid as a finding and recommends updating the grid rather than forcing new content into the old constraint

#### Scenario: A shared, current grid is applied consistently
- **WHEN** the reviewed evidence shows a shared grid/style guide applied consistently across sections, and updated when new functionality required it
- **THEN** the usability skill does not flag this requirement

#### Scenario: Task is a single, direct transactional lookup
- **WHEN** the reviewed evidence shows a strict transactional lookup (for example tracking a package by its ID) rather than an evolving exploratory search
- **THEN** the usability skill does not flag this requirement solely because query terms are not preserved

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

### Requirement: Top-level navigation categories are mutually exclusive
The usability skill SHALL flag top-level navigation categories whose scope overlaps enough that a user could plausibly place the same item under more than one of them, distinct from the existing requirement that top-level destinations be "mutually meaningful" in general — this requirement applies the specific, testable non-overlap check: for any given item or task, would a user hesitate between two categories?

#### Scenario: Two top-level categories share the same items
- **WHEN** the reviewed evidence shows top-level navigation categories (for example "Products" and "Solutions") whose contents overlap such that the same items or tasks plausibly belong under either
- **THEN** the usability skill flags the category-overlap finding and recommends redrawing the category boundaries so each item has one clear home, or cross-listing the item in a backend taxonomy while keeping the top-level labels distinct

#### Scenario: Top-level categories have clearly distinct scopes
- **WHEN** the reviewed evidence shows top-level navigation categories with clearly separated scopes, where no plausible item would belong under more than one
- **THEN** the usability skill does not flag this requirement

### Requirement: Navigation does not use a catch-all label as a dumping ground
The usability skill SHALL flag a top-level or prominent navigation label that functions as an undifferentiated catch-all — "Miscellaneous", "Resources", "More Info", "Other", or an equivalent vague bucket — used to hold content that does not fit the existing structure, rather than expanding the structure to accommodate it.

#### Scenario: Catch-all navigation label holds unrelated content
- **WHEN** the reviewed evidence shows a navigation item labeled with a vague catch-all term that links to a page mixing unrelated content types (for example PDFs, news, and help articles with no shared theme)
- **THEN** the usability skill flags the catch-all-bucket finding and recommends either a specific, descriptive label or redistributing the content into the existing structure

#### Scenario: Navigation has no catch-all label
- **WHEN** the reviewed evidence shows navigation where every label names a specific, descriptive category with no vague miscellaneous bucket
- **THEN** the usability skill does not flag this requirement

### Requirement: Faceted filters prevent dead-end zero-result states
The usability skill SHALL flag a faceted-filter or search-refinement interface that allows a user to select a combination of filters guaranteed to produce zero results without warning, or that provides no single-action way to clear all applied filters at once, distinct from the existing no-results-messaging requirement (which addresses what is shown once a dead end is reached) and the existing filter-visibility requirement (which addresses whether current selections are visible, not whether a zero-result combination can be prevented or escaped in one action).

#### Scenario: Filter combination silently yields zero results with no reset
- **WHEN** the reviewed evidence shows a faceted-filter interface where selecting an additional filter produces a "0 results" page, and there is no single, prominent control to clear all applied filters at once
- **THEN** the usability skill flags the dead-end finding and recommends dynamically hiding or disabling filter options that would yield zero results, plus a one-click "clear all filters" control

#### Scenario: Filters dynamically prevent dead ends and offer a reset
- **WHEN** the reviewed evidence shows a faceted-filter interface that disables or hides options that would produce zero results before they are selected, and provides a visible one-click control to clear all applied filters
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile forms use device capabilities instead of requiring full manual entry
The usability skill SHALL flag a mobile form field that requires full manual entry when the underlying platform provides a device capability that could supply the same data more reliably — camera-based document or card scanning, geolocation-based address autofill, or an OS-level payment sheet such as Apple Pay or Google Pay — and privacy permits its use. This is distinct from the existing keyboard/autocomplete-configuration requirement, which governs how manually-typed input is configured rather than whether manual entry can be avoided entirely, and from the existing password-manager/authentication requirement, which is scoped to authentication flows rather than general form input.

#### Scenario: Payment or address form requires full manual entry despite platform support
- **WHEN** the reviewed evidence shows a mobile checkout or address form requiring the user to manually type a card number or full address, on a platform that supports card-scanning, an OS-level payment sheet, or geolocation-based address lookup
- **THEN** the usability skill flags the missing device-capability integration and recommends offering the available capability as a faster alternative to manual entry

#### Scenario: Form already offers the available device capability
- **WHEN** the reviewed evidence shows a mobile form offering camera-based scanning, geolocation autofill, or an OS-level payment sheet as an alternative to manual entry, alongside a manual-entry fallback
- **THEN** the usability skill does not flag this requirement

#### Scenario: Platform does not provide a relevant device capability
- **WHEN** the reviewed evidence does not show, or the platform does not provide, a device capability relevant to the specific field in question
- **THEN** the usability skill does not flag this requirement for that field

### Requirement: Voice UI command scope and persona alignment
The usability skill SHALL, when the reviewed evidence includes a voice user interface (VUI) or voice-assistant interaction, check that the voice interaction is limited to discrete, simple requests with concise, single-outcome results (for example a single calendar action or a single device-control command), and SHALL flag a voice interaction that requires the user to hold, compare, or choose among a long list of spoken options, since auditory presentation is linear, ephemeral, and easily exceeds working-memory capacity in a way a visual list does not. Separately, the usability skill SHALL check that the VUI's sonic persona (tone, pacing, formality) is deliberately aligned with the product's brand and the seriousness of the interaction context, and SHALL flag a mismatched tone (for example a flippant or sarcastic tone in a serious or safety-relevant context).

#### Scenario: Voice assistant reads a long list of search results aloud
- **WHEN** the reviewed evidence shows a voice interface reading aloud more than a small number of options or results for the user to choose among, with no paired visual display
- **THEN** the usability skill flags the interaction as exceeding auditory working-memory capacity and recommends routing the task to a visual/paired-screen display or reducing it to a single-outcome voice command

#### Scenario: Screen-paired voice assistant combines voice and visual list
- **WHEN** the reviewed evidence shows a voice command paired with a visual display that presents the resulting list of options
- **THEN** the usability skill does not flag the interaction under the auditory-overload concern, since the visual pairing addresses it

### Requirement: Physical depth-cue consistency
The usability skill SHALL, as part of its affordance-diagnostic vocabulary, check that visual depth cues (shadow direction, light source, elevation, and overlap) across a reviewed interface obey one consistent, physically plausible logic, applying the test of whether a physical model of the layout could plausibly be built from those cues; an inconsistency (for example a shadow direction that contradicts an implied light source, or an element's implied elevation contradicting another's) SHALL be flagged as an affordance-consistency defect.

#### Scenario: Conflicting shadow directions across UI layers
- **WHEN** the reviewed evidence shows two or more elevated UI elements (cards, modals, sliding panels) whose drop-shadow direction implies conflicting light sources
- **THEN** the usability skill flags the inconsistency as a physical-affordance defect, citing the affordance vocabulary's Physical/Sensory types

### Requirement: No manual entry of system-derivable data
The usability skill SHALL flag a form field that requires the user to manually supply or select data the system can already derive from other input already provided (for example a manual card-type selector when the card number's own digits already determine the type), distinct from existing rules governing redundant-entry-within-a-process and cross-session default memory, which do not cover data that is derivable rather than merely previously entered.

#### Scenario: Manual card-type dropdown alongside a card-number field
- **WHEN** the reviewed evidence shows a payment form requiring the user to select a card type from a dropdown in addition to entering the card number, and the card type is mechanically derivable from the number itself
- **THEN** the usability skill flags the redundant manual selection and recommends auto-detecting the derivable value instead

### Requirement: Delayed-effect controls expose rate or delay
The usability skill SHALL flag a control whose effect on the underlying system is not immediate (a temperature-adjustment control, a background sync toggle, a queued-processing setting) when the interface gives no indication of the expected rate or delay before the effect becomes perceptible, since a hidden long-delay feedback loop leads users to push the control to an extreme value or repeat the action, mistaking the delay for ineffectiveness.

#### Scenario: A delayed-effect control gives no rate or delay indication
- **WHEN** the reviewed evidence shows a control (for example a thermostat-style temperature setting, a sync/processing toggle) whose real-world effect takes a perceptible amount of time to occur, and the interface shows no expected-rate or delay indicator
- **THEN** the usability skill flags the missing rate/delay indicator and explains that its absence plausibly causes users to repeatedly re-adjust the control to an extreme value

#### Scenario: A delayed-effect control shows an explicit rate or delay indicator
- **WHEN** the reviewed evidence shows the same kind of delayed-effect control, and the interface visibly communicates the expected rate or remaining delay (for example a countdown, a rate-of-change indicator, or explanatory copy)
- **THEN** the usability skill does not flag the control under this requirement

### Requirement: High-stress flows favor fast, single-action interaction
The usability skill SHALL flag an emergency, safety-critical, or acutely time-pressured flow (for example an in-app SOS action, a critical alert response, a time-limited security action) that requires multi-step reasoning, dense reading, or navigating more than one control to complete the primary response, since a user under significant stress or time pressure relies on fast, visceral processing rather than deliberate, reflective reasoning. This requirement does not apply to a calm, non-urgent flow, where reflective, multi-step interaction remains appropriate.

#### Scenario: An emergency response requires multi-step reasoning
- **WHEN** the reviewed evidence shows a flow explicitly framed as an emergency, safety, or acute time-pressure response, and completing the primary response requires reading dense instructions or navigating multiple sequential controls
- **THEN** the usability skill flags the flow and recommends collapsing the primary response to one prominent, immediately actionable control

#### Scenario: A calm, non-urgent flow uses multi-step interaction
- **WHEN** the reviewed evidence shows a flow with no stated or inferable emergency or acute time pressure
- **THEN** the usability skill does not apply this requirement to that flow

### Requirement: Societal-affordance signifiers match actual system consequences
The usability skill SHALL flag a control or action whose availability is governed by an unwritten social or procedural convention — rather than a physical or technical constraint — when the interface's signifiers do not clearly indicate that the action is conventionally discouraged, penalized, or has a consequence beyond the immediate interaction, distinct from the existing four-affordance-type classification (Cognitive, Physical, Sensory, Functional), which addresses whether a user can perceive or perform an action, not whether a technically-permitted action carries an unstated social or procedural cost.

#### Scenario: An action is technically permitted but carries an unstated social or procedural cost
- **WHEN** the reviewed evidence shows an action the system allows the user to perform (for example publicly commenting on a private note, or using a feature outside its intended scope) that carries a real social, reputational, or procedural consequence not indicated by any visible signifier
- **THEN** the usability skill flags the missing signifier as a societal-affordance mismatch and recommends a clear, visible cue about the convention or consequence before the user acts

#### Scenario: A conventionally-discouraged action is clearly signified
- **WHEN** the reviewed evidence shows the same kind of conventionally-governed action, and the interface visibly signals the convention or consequence before the user commits to it
- **THEN** the usability skill does not flag the action under this requirement

### Requirement: Navigation goal-altitude consistency
The usability skill SHALL flag a set of sibling top-level navigation or menu items that mixes inconsistent goal-altitude levels — a sea-level, functional-task item (a meaningful goal a user completes in one sitting, for example "Take a shower") presented alongside a fish-level, sub-functional micro-action item (a procedural step within a larger task, for example "Adjust water temperature") — within the same list or menu. This is distinct from the existing navigation mutual-exclusivity requirement, which addresses whether sibling categories overlap in scope, not whether they are stated at a consistent level of granularity.

#### Scenario: Menu mixes a task-level item with a micro-action item
- **WHEN** a reviewed top-level menu lists sibling items such as "Manage Account" (a sea-level task) and "Toggle Dark Mode" (a fish-level micro-action) at the same level, with no grouping that separates them
- **THEN** the usability skill flags the goal-altitude inconsistency and recommends either nesting the micro-action item under its parent task or restating it at a comparable goal level

#### Scenario: Menu items share a consistent goal level
- **WHEN** a reviewed top-level menu's sibling items are all stated as sea-level tasks (for example "Manage Account", "View Orders", "Contact Support")
- **THEN** the usability skill does not flag this requirement

### Requirement: Design system limits functionally-equivalent visual variants
The usability skill SHALL flag a design system that lets functionally-equivalent visual variants — button shapes/styles, font weights or families, or color choices serving the same semantic purpose (for example, primary-action emphasis) — proliferate across a product without a deliberate, limited set governing them. This is distinct from the existing single-screen primary-vs-secondary action hierarchy requirement and the existing single-control label-matches-destination requirement, neither of which addresses variant count across the product as its own concern.

#### Scenario: The same semantic action renders with unrelated visual styles across screens
- **WHEN** the reviewed evidence shows the same type of action (for example, a primary submit action) rendered with materially different button shapes, colors, or type styles across different screens of the same product, with no stated reason tied to context or platform
- **THEN** the usability skill flags the variant-proliferation finding and recommends consolidating to a small, deliberate set of styles mapped to semantic roles

#### Scenario: A small, deliberate set of styles is used consistently
- **WHEN** the reviewed evidence shows a constrained set of button styles, font weights, and colors applied consistently by semantic role across the product
- **THEN** the usability skill does not flag this requirement

#### Scenario: Evidence covers only a single screen
- **WHEN** the reviewed evidence is a single screen or component with no visibility into the rest of the product's design system
- **THEN** the usability skill reports this requirement as `NOT ASSESSABLE` rather than assuming variant proliferation exists or does not

### Requirement: Design-side signage reliance signals a design failure
The usability skill SHALL treat a persistent instructional label, warning sticker, or explanatory tooltip added by the design itself specifically to compensate for a control's own confusing operation (for example "Click here twice," a static "Turn off when finished" sign, or a permanently visible hint bubble explaining an otherwise-unclear icon) as evidence that the underlying design failed, not as a mitigation to credit. This is the design-side counterpart to the existing requirement that a user-created affordance artifact signals a missing built-in affordance: here the compensating artifact is added by the designer rather than the user, but the same underlying diagnosis applies — the interface should be fixed so the explanatory text is unnecessary. A legally mandated warning (regulatory, safety-compliance) is excluded from this requirement; the usability skill SHALL instead check whether the required warning is separated from routine operational cues rather than judging the mandated warning's mere presence as a defect.

#### Scenario: A permanent hint bubble compensates for an unclear icon-only control
- **WHEN** the reviewed evidence shows a control that only works correctly alongside a permanently visible tooltip, caption, or hint bubble explaining what the control does or how to use it
- **THEN** the usability skill flags the underlying control's missing signifier or unclear affordance as the defect, and does not credit the compensating tooltip as an acceptable fix

#### Scenario: A static instructional sign is posted because users repeatedly fail a step
- **WHEN** the reviewed evidence shows a persistent instructional banner, sign, or warning added specifically because users repeatedly fail to complete a step correctly on their own
- **THEN** the usability skill flags the step's underlying design (missing constraint, unclear signifier, or poor natural mapping) as the defect, not the absence or presence of the sign itself

#### Scenario: A legally mandated compliance warning is present
- **WHEN** the reviewed evidence shows a warning required by law or regulation (for example a data-processing notice or safety-compliance disclosure)
- **THEN** the usability skill does not flag the mandated warning's presence as a defect under this requirement, but checks separately whether it is kept distinct from routine operational cues rather than cluttering them

### Requirement: Wait and queue experiences meet psychological wait-design principles
The usability skill SHALL evaluate a wait or queue experience (checkout processing, matchmaking, a support-ticket queue, or an onboarding delay) against the following principles, distinct from the existing loading-state and progress-indicator requirements, which address whether a progress indicator exists and what type it uses, not the psychological wait-experience principles governing any queue or hold:
- an explicit, appropriately conservative expectation of duration or queue position is communicated;
- the user is kept meaningfully occupied (relevant content, a preview, or a task) rather than facing a static or empty state during a significant wait;
- all waiting users are treated under one visibly fair order, with no undisclosed line-jumping or paid priority cuts that are not clearly disclosed as such;
- the wait ends with a clear, positive resolution rather than trailing off with no acknowledgment.

#### Scenario: A checkout or processing wait shows no duration estimate and a blank screen
- **WHEN** the reviewed evidence shows a significant processing or matchmaking wait with no estimated duration or position, and the screen shows nothing but a spinner with no content or context
- **THEN** the usability skill flags the missing expectation-setting and unoccupied-wait findings under this requirement

#### Scenario: A support-ticket or service queue allows undisclosed priority cuts
- **WHEN** the reviewed evidence shows a support-ticket queue, waitlist, or service line in which some users can jump ahead of others without a clearly disclosed reason (for example an undisclosed paid tier)
- **THEN** the usability skill flags the fairness violation under this requirement, distinguishing it from a clearly disclosed and equitable priority mechanism, which does not violate this requirement

#### Scenario: A wait experience sets a conservative estimate, offers relevant content, and ends clearly
- **WHEN** the reviewed evidence shows a wait that states a conservative time/position estimate, shows relevant occupying content, treats all waiting users fairly, and ends with an explicit completion state
- **THEN** the usability skill does not flag this requirement

### Requirement: Multi-step flows expose forward-looking step progress
The usability skill SHALL flag a multi-step wizard or flow that shows only a history trail of completed steps, or only the current step in isolation, without also showing the total or expected number of remaining steps, or an explicit signal that the total step count is not yet knowable. This requirement addresses the forward-looking dimension specifically; it is distinct from the existing breadcrumb/sitemap requirement, which addresses the backward-looking (where-did-I-come-from) dimension, and from the existing progress-action-labeling requirement, which addresses label consistency (Next/Continue/Done) without requiring that remaining-step count be exposed.

#### Scenario: A multi-step signup flow shows no indication of remaining steps
- **WHEN** the reviewed evidence shows a multi-step flow (for example a 7-step account setup) where each screen shows only "Continue" with no step counter, progress bar, or other indication of how many steps remain
- **THEN** the usability skill flags the missing forward-looking progress indicator under this requirement

#### Scenario: A flow's total step count is genuinely not knowable in advance
- **WHEN** the reviewed evidence shows a flow whose remaining steps genuinely depend on branching answers not yet given (for example a dynamic eligibility questionnaire)
- **THEN** the usability skill does not flag a missing exact step count, provided the flow gives an explicit signal (for example "a few more questions based on your answers") rather than silence

#### Scenario: A wizard shows both current step and total step count
- **WHEN** the reviewed evidence shows a multi-step flow displaying "Step 3 of 5" or an equivalent progress indicator on every screen
- **THEN** the usability skill does not flag this requirement

### Requirement: Long high-consequence procedures provide an interactive checklist
The usability skill SHALL flag a long, sequential, high-consequence procedure that is prone to memory failure under stress or interruption (for example a safety-critical setup flow, an infrastructure migration wizard, or a multi-field compliance submission) when it relies on the user's memory of an implicit sequence rather than providing an explicit, interactive step-by-step checklist with persistent checked/unchecked state that surfaces any skipped step for later completion. This requirement is distinct from the existing single-action emergency-response requirement, which addresses acute, time-pressured flows needing one immediately actionable control, and from the existing interruption-resilience requirement, which addresses general state preservation for any interrupted flow, not the specific failure mode of a silently skipped step within a long ordered sequence under workload.

#### Scenario: A long compliance submission has no step-tracking and a required field is silently skipped
- **WHEN** the reviewed evidence shows a long, high-consequence, multi-part submission flow with no persistent checklist of completed/pending items, where a user could plausibly skip a required part without any prompt
- **THEN** the usability skill flags the missing interactive checklist and skipped-step detection under this requirement

#### Scenario: A short, low-consequence flow has no checklist
- **WHEN** the reviewed evidence shows a short flow with few steps and no significant consequence for a memory lapse
- **THEN** the usability skill does not flag this requirement; a checklist is not required for every multi-step flow, only long, high-consequence, memory-failure-prone ones

#### Scenario: A safety-critical setup flow provides a persistent, interactive checklist
- **WHEN** the reviewed evidence shows a long safety-critical or compliance procedure with a persistent checklist tracking completed and pending steps, and it surfaces any step a user attempted to skip
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile-viewport-general rules apply to mobile web evidence
The usability skill's platform-resolution step SHALL distinguish, within `mobile.md`, rules that require a genuinely native platform contract (for example a native tab bar, Android's `NavigationBar` component, native back-gesture behavior, or custom-gesture ergonomics) from rules whose underlying concern is inherent to any mobile-viewport rendering regardless of native-vs-web (for example safe-area/inset handling, dark or increased-contrast appearance support, localization text-expansion, and scalable font units). When the reviewed evidence is a mobile web page rather than a native app, the usability skill SHALL still evaluate the mobile-viewport-general rules against it, and SHALL NOT skip the entirety of `mobile.md` merely because the evidence is not a native app.

#### Scenario: Mobile web evidence with no dark-mode support
- **WHEN** the reviewed evidence is a mobile web page whose stylesheet defines only a single light color palette with no dark or increased-contrast variant
- **THEN** the usability skill flags this under the applicable mobile-viewport-general rule, rather than treating `mobile.md` as inapplicable because the evidence is not a native app

#### Scenario: Mobile web evidence with fixed-pixel font sizes
- **WHEN** the reviewed evidence is a mobile web page whose font sizes are declared in fixed pixel units rather than scalable units
- **THEN** the usability skill flags the missing text-scaling support under the applicable mobile-viewport-general rule

#### Scenario: Native-only platform contract on web evidence
- **WHEN** the reviewed evidence is a mobile web page, and a `mobile.md` rule requires a genuinely native platform contract (for example a native tab bar or Android `NavigationBar` component)
- **THEN** the usability skill does not apply that native-only rule to the web evidence, consistent with its existing platform-resolution guidance

### Requirement: Headings sit closer to the content they introduce than to the content above them
The usability skill SHALL flag a heading whose visual spacing places it equidistant from, or closer to, the section above it than to the section it introduces, since a "floating" heading breaks the visual grouping cue that tells a scanning user which content the heading actually belongs to.

#### Scenario: Heading is visually equidistant between two sections
- **WHEN** the reviewed evidence shows a heading with equal (or larger) spacing above it than below it, appearing to float between the preceding and following content blocks
- **THEN** the usability skill flags the floating-heading finding and recommends increasing the spacing above the heading relative to the spacing below it

#### Scenario: Heading sits closer to its own section
- **WHEN** the reviewed evidence shows a heading with visibly less spacing below it (before its own content) than above it (after the preceding section)
- **THEN** the usability skill does not flag this requirement

### Requirement: Active navigation state uses multiple simultaneous visual cues
The usability skill SHALL flag a persistent navigation or menu structure whose current-location ("You Are Here") indicator relies on a single, subtle visual attribute (for example only a 1px underline or a barely-different shade) rather than multiple simultaneous cues (for example color plus weight plus background fill), since a scanning user can miss a single subtle attribute entirely. This is distinct from the existing near-uniformity requirement (`VH01`), which addresses whether adjacent elements that should match or differ use deliberate contrast in general, not specifically whether a current-location indicator is redundant enough to survive a quick scan.

#### Scenario: Current section is marked by a single subtle attribute
- **WHEN** the reviewed evidence shows a navigation bar where the active/current item differs from inactive siblings by only one subtle attribute (for example a slightly darker text shade with no other change)
- **THEN** the usability skill flags the single-cue active-state finding and recommends combining at least two simultaneous, unambiguous cues

#### Scenario: Current section uses multiple simultaneous cues
- **WHEN** the reviewed evidence shows the active/current navigation item distinguished by at least two simultaneous cues (for example bold weight plus a contrasting background fill, or a contrasting color plus a pointer/indicator glyph)
- **THEN** the usability skill does not flag this requirement

### Requirement: Clickable controls remain visually distinguishable under flat/minimalist design
The usability skill SHALL flag a flat or minimalist visual design that strips 3D affordance cues (shadow, gradient, bevel, border) from interactive controls without compensating through a remaining visual dimension (distinct position, background fill, color, or case), leaving clickable controls indistinguishable from static text or headers.

#### Scenario: Flat design leaves a button indistinguishable from body text
- **WHEN** the reviewed evidence shows a flat-design interface where a submit or primary action control has no shadow, border, or background fill, and also no distinct color, position, or case that would separate it from surrounding static text
- **THEN** the usability skill flags the missing-affordance finding and recommends a compensating visual dimension (background fill, distinct color, or position) rather than restoring 3D cues as the only fix

#### Scenario: Flat design compensates with a remaining visual dimension
- **WHEN** the reviewed evidence shows a flat-design interface where interactive controls have no shadow or border, but remain clearly distinguishable via a distinct background fill, color, or consistent positional convention
- **THEN** the usability skill does not flag this requirement

### Requirement: Global search input avoids forced scoping and unclear labeling before first use
The usability skill SHALL flag a global search input that requires the user to select a search scope or category before entering a first query, or that substitutes an unusual label or instructional placeholder text (for example "Quick Find" or "Type a keyword...") for a plain input with a "Search" label or a recognizable search icon.

#### Scenario: Search requires a category choice before the first query
- **WHEN** the reviewed evidence shows a global search control that forces the user to pick a scope or category from a dropdown before the search box itself becomes usable
- **THEN** the usability skill flags the forced-scoping finding and recommends deferring scope selection to the results page

#### Scenario: Search box uses an unusual label instead of a plain search affordance
- **WHEN** the reviewed evidence shows a search input labeled with an unconventional term (for example "Quick Find") or relying on instructional placeholder text in place of a recognizable search icon or "Search" label
- **THEN** the usability skill flags the unclear-labeling finding

#### Scenario: Search box is unscoped and clearly labeled
- **WHEN** the reviewed evidence shows a plain global search input usable without a prior scope choice, labeled with a "Search" affordance or a recognizable search icon
- **THEN** the usability skill does not flag this requirement

#### Scenario: Two genuinely distinct search domains justify explicit scoping
- **WHEN** the reviewed evidence shows a product with two genuinely separate search domains (for example searching within the site versus searching the entire web) where explicit scope selection materially changes the result set
- **THEN** the usability skill does not flag this requirement solely because a scope choice is offered

### Requirement: Form field width signals the expected input length
The usability skill SHALL check that a text input's visible width corresponds to the length of the value it expects: a fixed-length value (a card security code, a birth year) gets a field only as wide as the value needs, and a long value (a card number, an address line) is not squeezed into a short field. Field width is a format cue; this requirement is distinct from `F23` (chunking of long identifiers) and `F25` (not asking for derivable data). It SHALL NOT apply where a responsive layout fixes all fields to one column width for a documented reason that the interface compensates for with format hints, and widths that cannot be seen in the evidence SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Short and long values share one width
- **WHEN** the reviewed evidence shows a card form where the security code field is as wide as the card-number field
- **THEN** the usability skill flags the width mismatch as a format-cue finding

#### Scenario: Widths follow the expected value
- **WHEN** the reviewed evidence shows a short expiry field, a short code field, and a wide card-number field
- **THEN** the usability skill does not flag this requirement

#### Scenario: Static evidence does not show widths
- **WHEN** the reviewed evidence is a text description that does not state field widths
- **THEN** the usability skill reports this requirement `NOT ASSESSABLE`

### Requirement: UI motion is purposeful, brief and optional
The usability skill SHALL check that custom UI motion serves a stated purpose, runs briefly (simple feedback near 100 ms, larger changes within about 200-500 ms), uses easing rather than linear motion, is not added to frequently repeated interactions, is never the only channel for important information, and does not force the user to wait. This follows NN/g, Laubheimer, "Executing UX Animations: Duration and Motion Characteristics" (2020), and Apple Human Interface Guidelines, Motion. This requirement is distinct from `R01R` and `R06R`, which concern system response time. It SHALL NOT apply to system-provided transitions, and motion that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Long mandatory entrance animation
- **WHEN** the reviewed evidence shows a 1.2 s blocking animation on every screen entry
- **THEN** the usability skill flags the duration and the forced wait

#### Scenario: Brief eased feedback
- **WHEN** the reviewed evidence shows a 150 ms eased toggle transition that also changes the control's label
- **THEN** the usability skill does not flag this requirement

### Requirement: Load-more replaces infinite scroll for goal-directed lists
The usability skill SHALL check that a list users search, compare or act on, or a page that carries footer content users need, uses a "Load more" control or pagination rather than infinite scroll. Infinite scroll remains acceptable for homogeneous items browsed without a particular goal. This follows NN/g, Neusesser, "Infinite Scrolling: When to Use It, When to Avoid It" (2022). This requirement is distinct from `D05` and `D08` (filters). It SHALL NOT apply to feeds of homogeneous items, and loading behaviour that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Infinite scroll hides the footer
- **WHEN** the reviewed evidence shows a product list that auto-loads content and a footer holding returns information the user cannot reach
- **THEN** the usability skill flags the loading pattern

#### Scenario: Social feed
- **WHEN** the reviewed evidence shows a feed of homogeneous posts with no footer dependency
- **THEN** the usability skill does not flag this requirement

### Requirement: Ratings distribution summary is graphical, filterable and expanded
The usability skill SHALL check that a review section with enough ratings (more than five) shows a distribution summary that is graphical, works as a mutually exclusive rating filter, and is expanded by default, and that the summary is hidden when five or fewer ratings exist. This follows Baymard, Scott, "5 Requirements for the Ratings Distribution Summary" (2017, updated). This requirement is distinct from `D06`. It SHALL NOT apply to a product without reviews, and interaction that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Text-only breakdown in a collapsed section
- **WHEN** the reviewed evidence shows a ratings breakdown as a text list inside a collapsed panel
- **THEN** the usability skill flags the missing graphic and default state

#### Scenario: Expanded clickable bars
- **WHEN** the reviewed evidence shows expanded bars that filter reviews on click
- **THEN** the usability skill does not flag this requirement

### Requirement: iOS sheets are scoped, resizable when needed and dismissable
The usability skill SHALL check that an iOS sheet presents a scoped task tied to its parent context; shows a grabber when it can be resized; supports swipe to dismiss (confirming through an action sheet when unsaved changes exist); appears one at a time; and pairs any Done button with Cancel or Back without showing all three. This follows Apple Human Interface Guidelines, Sheets. This requirement is distinct from `N02R`. It SHALL NOT apply to non-iOS platforms, and a long multistep flow that the guideline directs to a full-screen presentation SHALL be assessed against that alternative.

#### Scenario: Done button alone
- **WHEN** the reviewed evidence shows an iOS sheet whose only exit is a Done button
- **THEN** the usability skill flags the missing Cancel or Back

#### Scenario: Resizable sheet with grabber
- **WHEN** the reviewed evidence shows a medium-detent sheet with a grabber and Cancel on the leading edge
- **THEN** the usability skill does not flag this requirement

### Requirement: iOS tab bar stays visible and its tabs are not hidden or disabled
The usability skill SHALL check that an iOS tab bar remains visible while the user moves between sections (except beneath a modal), and that its tabs are not hidden or disabled when their content is unavailable; an empty section explains why. This follows Apple Human Interface Guidelines, Tab bars. This requirement is distinct from `N02R`, which concerns what a tab bar represents. It SHALL NOT apply to non-iOS platforms.

#### Scenario: Tab bar removed on a detail screen
- **WHEN** the reviewed evidence shows a pushed section screen on iOS with no tab bar
- **THEN** the usability skill flags the hidden tab bar

#### Scenario: Disabled tab with an empty-state explanation
- **WHEN** the reviewed evidence shows a visible tab whose empty section says why it is empty
- **THEN** the usability skill does not flag this requirement

### Requirement: Dark Mode uses system layers, softened whites and sufficient contrast
The usability skill SHALL check that an iOS Dark Mode interface prefers the system base and elevated background colours, softens bright white image backgrounds so they do not glow, and keeps contrast of at least 4.5:1 (striving for 7:1 for small text) in every appearance. This follows Apple Human Interface Guidelines, Dark Mode. This requirement is distinct from `L05`, which concerns legibility across appearances in general. It SHALL NOT apply to a permanently dark media viewer, and colours that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Pure white logo tile in a dark screen
- **WHEN** the reviewed evidence shows a full-white image tile on a dark background
- **THEN** the usability skill flags the glow and recommends softening

#### Scenario: System backgrounds with elevated modal
- **WHEN** the reviewed evidence shows system backgrounds that switch to elevated for a sheet
- **THEN** the usability skill does not flag this requirement

### Requirement: Reviewer images open in one gallery across reviews
The usability skill SHALL check that when a user opens an image submitted by a reviewer, all reviewer images are reachable in one collection with arrow and swipe navigation, not only the images of that single review, following Baymard Institute, Sousa, "Always Allow Users to Navigate across User Reviews via Reviewer-Submitted Images" (2024). This requirement is distinct from `D11`, which concerns the ratings summary. It SHALL NOT apply to products without reviewer images, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Gallery limited to one review
- **WHEN** the reviewed evidence shows a review image overlay that moves only through that review's photos
- **THEN** the usability skill flags the limited navigation

#### Scenario: Single carousel
- **WHEN** the reviewed evidence shows an overlay that swipes through all reviewer photos with their review text
- **THEN** the usability skill does not flag this requirement

### Requirement: Sliders suit approximate values and keep labels visible
The usability skill SHALL check that a slider is used only where an approximate value is enough, that values the user must enter exactly (age, weight, calories, quantities logged repeatedly) use a text field or stepper, and that slider labels sit above or beside the thumb so a finger does not cover them, following Nielsen Norman Group, Harley, "Slider Design: Rules of Thumb" (2015). This requirement is distinct from `F18`, which concerns open-ended or high-cardinality entry. It SHALL NOT apply to a slider paired with a text field for exact entry, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Slider for grams of food logged daily
- **WHEN** the reviewed evidence shows a slider as the only way to enter a food quantity in grams
- **THEN** the usability skill flags the slider and recommends a text field

#### Scenario: Slider plus numeric field
- **WHEN** the reviewed evidence shows a price-range slider with an adjacent numeric input and labels above the thumbs
- **THEN** the usability skill does not flag this requirement

### Requirement: Multi-value filter types
The usability skill SHALL check that a filter group lets the user select several values of the same filter type with OR logic, while values from different types combine with AND logic, following Baymard Institute, Iva Olah, "Always Allow Users to Combine Multiple Filtering Values of the Same Type — an 'OR' Logic (15% of Sites Don't)" (2024). This requirement is distinct from `D08`, which concerns hiding zero-result options and clearing all filters. It SHALL NOT apply to genuinely exclusive attributes such as a single sort order or an in-stock toggle, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Price filter accepts one value
- **WHEN** selecting one price range removes the price filter or replaces the earlier choice in a product list
- **THEN** the usability skill flags that the filter type is not multi-select

#### Scenario: Several colours selectable
- **WHEN** a colour filter uses checkboxes and the list shows items in any selected colour
- **THEN** the usability skill does not flag this requirement

### Requirement: Filter coverage and promotion
The usability skill SHALL check that a product list offers the filter types most users apply first (price, user rating, colour, size, brand, where the attribute applies), a filter for every attribute shown in the list item, and the few most useful category filters promoted above the list while they also stay in the regular filter panel, following Baymard Institute, Mark Crowley, "5 Essential Filter Types Users Need on Product Listing Pages (57% Don't Offer All 5)" (2020), Edward Scott, "Filter List Design: Have Filters for All Displayed List Item Info (38% Don't)" (2019) and Edward Scott, "Consider Promoting Important Filters (61% Don't)" (2023). This requirement is distinct from `D05`, which concerns showing current filter selections. It SHALL NOT apply to very short lists or to B2B and niche catalogues where price is not a key factor, and filter needs the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Displayed rating without filter
- **WHEN** list items show a star rating and the filter panel has no rating filter
- **THEN** the usability skill flags the missing filter

#### Scenario: Full filter set with promoted filters
- **WHEN** the list has price, rating, colour, size and brand filters and shows two promoted filters above the list that also appear in the panel
- **THEN** the usability skill does not flag this requirement

### Requirement: Filter labels explained and visual
The usability skill SHALL check that filter types and options with industry jargon are replaced by plain terms or explained at the filter (tooltip on desktop, tappable icon or link on mobile), and that options differing by visible form show a thumbnail beside the text label, following Baymard Institute, Sonia Sousa, "Always Explain Industry-Specific Filters (62% Don't)" (2024) and "Use \"Visual\" Filters for Visually Distinct Product Attributes" (2024). This requirement is distinct from `D18`, which concerns which filters exist. It SHALL NOT apply to filters whose labels a general audience already knows, and which terms are unfamiliar without novice-user testing SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Unexplained jargon and text-only style filter
- **WHEN** a sofa list has a "Slipcover" option with no explanation and "Arm Style" options as text only
- **THEN** the usability skill flags the unexplained term and the missing thumbnails

#### Scenario: Tooltip and thumbnails
- **WHEN** a technical filter has a tooltip definition and style options show thumbnails with labels
- **THEN** the usability skill does not flag this requirement

### Requirement: Essential and scoped sort options
The usability skill SHALL check that a sortable product list offers price (both directions), user rating (highest first), best-selling and newest, adds sorts on a key numeric category attribute where it applies, and sorts site-wide search results only after a category scope is chosen or suggested, following Baymard Institute, Mark Crowley, "Allow Sorting by \"Price\", \"User Rating\", \"Best-Selling\", and \"Newest\" (64% Don't Allow All 4)" (2021), Jamie Holst, "Category-Specific Sorting: A New Way to Sort Products" (2015) and Jamie Holst, "Faceted Sorting - A New Method for Sorting Search Results" (2014). This requirement is distinct from `D05`, which concerns showing the active sort. It SHALL NOT apply to short lists or to catalogues where a sort type has no data, and sort types the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Price sort on unscoped search
- **WHEN** a site-wide search for a product type can be sorted by price and cheap accessories reach the top
- **THEN** the usability skill flags the unscoped sort

#### Scenario: Full sort menu
- **WHEN** the sort menu has price low-to-high and high-to-low, rating, best-selling and newest, and a road-bike category adds weight
- **THEN** the usability skill does not flag this requirement

### Requirement: Category autodirect and non-product search
The usability skill SHALL check that a query matching one category name sends the user to that category page with its filters and sorts (ambiguous queries offer category suggestions), and that site search answers non-product queries such as return policy with the relevant help or policy page, following Baymard Institute, Rebecca Hugo-Terrey, "Search UX: Autodirect or Guide Users to Matching Category Scopes (46% Get It Wrong)" (2020) and Edward Scott, "Ecommerce Search UX 2026: 8 Search \"Query Types\" UX Best Practices (56% of Sites Have Issues)" (2024, updated 2026). This requirement is distinct from `D09`, which concerns not forcing a scope choice before the first query. It SHALL NOT apply to categories with no extra filters or layout, and queries the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Category query returns a thinner list
- **WHEN** a search for "men's shirts" returns a plain result list without the size filter of the Men's Shirts category
- **THEN** the usability skill flags the missing autodirect

#### Scenario: Policy query answered
- **WHEN** a search for "return policy" shows the returns help page first
- **THEN** the usability skill does not flag this requirement

### Requirement: Search results explain their match
The usability skill SHALL check that each search result item shows why it matches the query (snippet with matched text, or the matching compatibility or variation detail), and that the result thumbnail shows the variation named in the query, following Baymard Institute, Christian Holst, "E-Commerce Sites Should Include Contextual Search Snippets (96% Get it Wrong)" (2014) and "Product Thumbnails Should Dynamically Update to Match the Variation Searched For (54% Don't)" (2016). This requirement is distinct from `D04`, which concerns what a no-results state communicates. It SHALL NOT apply to closed category lists with fixed attributes or to lists where each variation is its own item, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Colour query with default thumbnails
- **WHEN** a search for "black laptop sleeve" shows thumbnails in other colours and no matched text
- **THEN** the usability skill flags the missing match explanation

#### Scenario: Snippet and matching thumbnail
- **WHEN** results show the matched description text and the black variation image
- **THEN** the usability skill does not flag this requirement

### Requirement: Hierarchy breadcrumbs and Back to results
The usability skill SHALL check that a product page offers hierarchy-based breadcrumb links to its parent categories and a history-based "Back to results" link that keeps filters and sort, following Baymard Institute, Jamie Holst, "E-Commerce Sites Need 2 Types of Breadcrumbs (68% Get it Wrong)" (2013). This requirement is distinct from `D07`, which concerns keeping query and filters across a search session. It SHALL NOT apply to single-page tools without a catalogue hierarchy, and mobile placement SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Only category breadcrumb
- **WHEN** a product page reached from a filtered list has only category breadcrumbs, and they open the unfiltered category
- **THEN** the usability skill flags the missing history-based link

#### Scenario: Both breadcrumb types
- **WHEN** the page has category breadcrumbs and a "Back to results" link that restores filters
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile main menu lists categories at top level
The usability skill SHALL check that on mobile, the open main navigation lists product categories (for example Men's, Women's, Laptops) as top-level items, not nested under one item such as Shop, Products or Departments; secondary items (sign in, help, store locator) sit below the categories and are styled distinctly; a catalog with many categories shows the most important first and the rest behind a More link, following Baymard Institute, Scott, "Make Product Categories the Top-Level Navigation Items on Mobile Sites (33% Don't)" (2023). This requirement is distinct from `N06R`, which concerns whether primary navigation is hidden behind an unlabelled menu. It SHALL NOT apply to desktop navigation or a very small homogeneous catalog, and desktop menu behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N27R failing case
- **WHEN** the reviewed evidence is a mobile site whose open main menu shows only Shop, Sale, Help and Sign In, with all product categories behind Shop
- **THEN** the usability skill flags the nested categories

#### Scenario: N27R passing case
- **WHEN** the reviewed evidence is a mobile site whose open main menu starts with Men, Women and Kids, followed by a separator and smaller Sign In and Store Locator items
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile navigation View All first at every level
The usability skill SHALL check that every level of the mobile main navigation that opens subcategories has a tappable item whose label starts with View All, See All or Shop All and names the current category (for example View All Women's Coats), placed first in that level's list; a header that only repeats the category name, a split hit area with an arrow, or a View All item at the bottom does not meet this, following Baymard Institute, Scott, "Have a "View All" Option in the Main Navigation at Each Level of the Mobile Product Catalog (Only 24% Get It Right)" (2022). This requirement is distinct from `N09R`, which concerns hierarchy depth and orientation in general. It SHALL NOT apply to desktop hover navigation and a leaf category with no subcategories, and desktop menu behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N28R failing case
- **WHEN** the reviewed evidence is a mobile menu where the Makeup level lists its subcategories and the broad Makeup list is reachable only by tapping the Makeup header, or by a Shop All item at the bottom
- **THEN** the usability skill flags the missing or misplaced View All item

#### Scenario: N28R passing case
- **WHEN** the reviewed evidence is a mobile menu where each level opens with a first item such as View All Makeup
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile homepage shows catalog scope in full
The usability skill SHALL check that a mobile homepage shows a diverse set of top-level categories as visible content (images or text links), not collapsed behind a Departments or Categories link, so users can infer what the site sells; a homepage link to a narrower list carries its full scope in its own label (for example Women's New Arrivals, not New Arrivals under a separate header), or links only to top-level categories, following Baymard Institute, Holst, "42% of Mobile Homepages Risk Setting Wrong Expectations for Their Users" (2016), and Baymard Institute, Scott, "Always Provide the Full Scope for Links on Mobile Homepages (58% Don't)" (2021). This requirement is distinct from `N06R`, which concerns whether primary navigation is hidden behind an unlabelled menu. It SHALL NOT apply to a single-category site whose homepage already shows its whole range, and homepage behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N29R failing case
- **WHEN** the reviewed evidence is a mobile homepage that shows only hiking products with a Departments link, and a Shop Women button that opens a New Arrivals list
- **THEN** the usability skill flags the narrow or collapsed category display or the partial-scope label

#### Scenario: N29R passing case
- **WHEN** the reviewed evidence is a mobile homepage that lists several contrasting top-level categories and labels a scoped link Women's New Arrivals
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile product page full breadcrumb path
The usability skill SHALL check that a mobile product page shows breadcrumbs with the full category path to the product, or at least every key category level (the Home and current-product layers may be left out); a path too long for the viewport scrolls horizontally with a cut-off edge that shows it can be swiped; breadcrumbs are underlined by default, use conventional separators such as > or / and have white space around them so they read as tappable, following Baymard Institute, Scott, "6 Important Aspects of Well-Performing Mobile Product Page Breadcrumbs" (2020). This requirement is distinct from `N16R`, which concerns the presence of a breadcrumb trail on deep-hierarchy sites. It SHALL NOT apply to desktop product pages and sites with a shallow single-level catalog, and desktop breadcrumb behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N30R failing case
- **WHEN** the reviewed evidence is a mobile product page whose breadcrumb shows only the parent subcategory in plain unlinked-looking text
- **THEN** the usability skill flags the incomplete or untappable-looking breadcrumb

#### Scenario: N30R passing case
- **WHEN** the reviewed evidence is a mobile product page with an underlined, swipeable breadcrumb that shows every category level from the top category to the product's subcategory
- **THEN** the usability skill does not flag this requirement

### Requirement: Back works for perceived pages
The usability skill SHALL check that a view the user perceives as a new page (an overlay or lightbox, a filtered or sorted list state, a separate filter or sort screen on mobile, an accordion checkout step) adds a browser history entry, so Back exits that view and does not skip past the page beneath it; Back from a product page returns to the product list with its loaded items and scroll position intact (for Load more lists, by updating the URL as items load, for example with history.pushState), following Baymard Institute, Holst, "4 Design Patterns That Violate "Back" Button UX Expectations – 59% of Sites Get It Wrong" (2020), and Baymard Institute, Crowley, "Return Users to the Same Place in the Product List When Returning from the Product Page (13% Don't)" (2020). This requirement is distinct from `N04R`, which concerns platform back semantics in native app navigation. It SHALL NOT apply to native app navigation stacks and small in-page changes users perceive as the same page, and view states the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N31R failing case
- **WHEN** the reviewed evidence is an image-gallery overlay that does not close on Back and sends the user to the previous list, or a list that returns to the top after Back from a product page
- **THEN** the usability skill flags the Back behaviour that breaks the perceived page

#### Scenario: N31R passing case
- **WHEN** the reviewed evidence is an overlay that closes on Back, and a list that returns to the item the user opened
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile search submit button
The usability skill SHALL check that on mobile, a search field has a visible submit button next to it (for example a magnifying glass or a Go button; an icon that only shows or hides the field does not count), and on iOS the keyboard submit key is set for search so it reads Search and not return (for example input type="search"), following Baymard Institute, Collins, "Always Provide a Submit Button Adjacent to the Search Field on Mobile (21% Don't)" (2021). This requirement is distinct from `D09`, which concerns the label and scope of the global search input. It SHALL NOT apply to desktop search fields, and desktop search submission and non-iOS keyboard behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D13 failing case
- **WHEN** the reviewed evidence is a mobile search field with only a clear icon beside it and a grey return key on the keyboard
- **THEN** the usability skill flags the missing submit button or default keyboard key

#### Scenario: D13 passing case
- **WHEN** the reviewed evidence is a mobile search field with a magnifying-glass button beside it and a keyboard key labelled Search
- **THEN** the usability skill does not flag this requirement

### Requirement: Autocomplete list design
The usability skill SHALL check that search autocomplete shows a list short enough to read at a glance (no more than about 10 suggestions on desktop, about 4 to 8 on mobile), emphasizes the predicted part of each suggestion and not the characters the user already typed, and, where suggestions can be moved through with the keyboard, copies the active suggestion into the search field so the user can edit it before submitting, following Baymard Institute, Scott, "9 UX Best Practice Design Patterns for Autocomplete Suggestions (Only 19% Get Everything Right)" (2022), and Baymard Institute, Scott, "Always Copy the Active Autocomplete Suggestion to the Search Field (58% Don't)" (2024). This requirement is distinct from `D03`, which concerns whether suggestions are offered at all. It SHALL NOT apply to sites without autocomplete, and touch-only suggestion selection, which the copy-to-field evidence does not cover SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D14 failing case
- **WHEN** the reviewed evidence is a desktop autocomplete of 20 suggestions with every typed character bolded, whose search field keeps the typed text when the arrow keys move through the list
- **THEN** the usability skill flags the list design

#### Scenario: D14 passing case
- **WHEN** the reviewed evidence is a desktop autocomplete of 8 suggestions with only the predicted part bold, where arrow keys copy each suggestion into the field
- **THEN** the usability skill does not flag this requirement

### Requirement: Product list default item count
The usability skill SHALL check that a product list loads a number of items by default that suits the device and product type (in Baymard's testing about 50 to 150 on desktop, nearer 100 to 150 for visually driven products and 50 to 100 for spec-driven ones, and about 15 to 30 on mobile, with fewer for search results than for category lists) and offers a Load more control or pagination for the rest, following Baymard Institute, Hugo-Terrey, "Product List UX: The Number of Products to Load by Default (52% Get it Wrong)" (2020). This requirement is distinct from `D10`, which concerns which loading method is used and not the number of items per load. It SHALL NOT apply to non-product lists, and ideal counts for catalogs and devices the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D15 failing case
- **WHEN** the reviewed evidence is a mobile category list that loads 100 items at once, or a desktop apparel list that loads 15 items per page
- **THEN** the usability skill flags the item count

#### Scenario: D15 passing case
- **WHEN** the reviewed evidence is a mobile category list that loads about 24 items followed by a Load more button
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile single-entity fields
The usability skill SHALL check that on mobile, a name, a phone number and a postal code are each entered in one field and not split into parts (first and last name, area code and number, ZIP and ZIP+4), following Baymard Institute, Jamie Holst, "Mobile Form Usability: Avoid Splitting Single Input Entities" (2013). This requirement is distinct from `F23`, which concerns chunked display of a long identifier for reading, not splitting the input. It SHALL NOT apply to desktop forms, where the evidence on split fields was inconclusive, and split-field behaviour on desktop the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: F28 failing case
- **WHEN** the reviewed evidence is a mobile checkout that asks for a phone number in three fields or a name in First and Last fields
- **THEN** the usability skill flags the split field

#### Scenario: F28 passing case
- **WHEN** the reviewed evidence is a mobile checkout with one Full name field, one Phone field and one Postal code field
- **THEN** the usability skill does not flag this requirement

### Requirement: Forms avoid ambiguous tabs and inline accordions
The usability skill SHALL check that a form is not split across tabs or freely opening inline accordion sections where users cannot tell which fields are submitted, and that an unavoidable layout uses radio buttons or a single-open accordion for exclusive sections, checkboxes for independent ones, and a save button inside the section it saves, following Baymard Institute, Jamie Holst, "Accordion UX: The Pitfalls of Inline Accordion and Tab Designs" (2014). This requirement is distinct from `F17`, which concerns summaries of completed steps in a multi-step form. It SHALL NOT apply to a sequential accordion checkout where only the current step is open, and whether collapsed sections are submitted SHALL be reported `NOT ASSESSABLE` when only a static screenshot is shown.

#### Scenario: Tabbed settings form with one Save button
- **WHEN** a settings form has several tabs and one Save Changes button below them with no indication of what it saves
- **THEN** the usability skill flags the ambiguous submission scope

#### Scenario: Sequential accordion checkout
- **WHEN** a checkout opens one step at a time and shows summaries of completed steps
- **THEN** the usability skill does not flag this requirement

### Requirement: Inline validation runs after the field and clears at once
The usability skill SHALL check that inline validation checks a field after the user leaves it (or when the input reaches its expected length for postal code, phone or card number fields), not on focus or while the first characters are typed, and that the error disappears as soon as the value becomes valid, following Baymard Institute, Scott, "Usability Testing of Inline Form Validation: 31% Don't Have It, 4% Get It Wrong" (2024). This requirement is distinct from `F07`, which concerns where an error appears and how it is worded. It SHALL NOT apply to a form without inline validation, and timing or clearing behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Error shown on focus and kept after correction
- **WHEN** an email field shows "Invalid email" as soon as it receives focus, or keeps an error after the user fixes the value
- **THEN** the usability skill flags the validation timing or clearing

#### Scenario: Validation on blur
- **WHEN** a field validates when the user leaves it and removes the error once the value is valid
- **THEN** the usability skill does not flag this requirement

### Requirement: Hard blocks only for provably invalid input
The usability skill SHALL check that a field blocks submission only for rules checkable without false negatives, and that unusual but possibly valid data (an email with a plus sign, a short street name) triggers a dismissible warning, following Baymard Institute, Jamie Holst, "Form Usability: Validations vs Warnings" (2014). This requirement is distinct from `GW02`, which concerns rejecting a valid value only for its formatting characters. It SHALL NOT apply to input the next system step cannot process, and validator behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Email with plus sign rejected
- **WHEN** a checkout email field rejects an address containing a plus sign and offers no way to proceed
- **THEN** the usability skill flags the hard block on valid data

#### Scenario: Warning for an odd address
- **WHEN** a street field shows "Please double-check this address" with a Continue anyway option
- **THEN** the usability skill does not flag this requirement

### Requirement: Checkout asks for the minimum fields
The usability skill SHALL check that a checkout form uses a single Name field and hides the promo or coupon code field behind a link, following Baymard Institute, Scott, "Checkout Optimization: 5 Ways to Minimize Form Fields in Checkout" (2024). This requirement is distinct from `F02`, which concerns not requesting needless personal data. It SHALL NOT apply where a separate name is required for a stated legal or delivery reason, and whether the back end needs a field SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Split name and open coupon field
- **WHEN** a checkout shows First name, Last name and an always visible Promo code input
- **THEN** the usability skill flags the extra fields

#### Scenario: Single name and coupon link
- **WHEN** a checkout shows one Name field and an "Add promo code" link
- **THEN** the usability skill does not flag this requirement

### Requirement: Guest checkout is an explicit button at the top of the account step
The usability skill SHALL check that the account step offers a clearly labelled guest checkout button placed above the sign-in and create-account options (or at the top of its column) and visible before email entry, following Baymard Institute, Scott, "Make 'Guest Checkout' the Most Prominent Option (47% Don't)" (2023) and Baymard Institute, Jamie Holst, "6 Mobile Checkout Usability Considerations" (2013). This requirement is distinct from `O11`, which concerns offering guest use in general. It SHALL NOT apply to a service that requires an account by nature, and the view below the first viewport SHALL be reported `NOT ASSESSABLE` when only the first viewport is shown.

#### Scenario: Guest link at the bottom
- **WHEN** the account step shows sign-in fields first and a small text link "Continue without signing in" at the bottom
- **THEN** the usability skill flags the guest option

#### Scenario: Top guest button
- **WHEN** the first item on the account step is a "Continue as guest" button
- **THEN** the usability skill does not flag this requirement

### Requirement: Checkout changes apply instantly without Apply buttons
The usability skill SHALL check that checkout input changes take effect at once without reload, with the result shown next to the input, and that Apply buttons appear only for promo codes and gift card numbers, following Baymard Institute, Söderlund, "Checkout UX: Avoid 'Apply' Buttons for Most Fields (22% of Sites Don't)" (2012, updated 2025) and Baymard Institute, Jamie Holst, "Checkout Usability: Apply Changes Immediately and Near the Input" (2012). This requirement is distinct from `F13`, which concerns where the primary button sits. It SHALL NOT apply to editing saved account data, and behaviour after the click the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Apply button on the address step
- **WHEN** a shipping address step has an Apply button beside the Continue to Payment button
- **THEN** the usability skill flags the extra button

#### Scenario: Shipping cost updates beside the choice
- **WHEN** selecting a shipping method updates the cost next to the method list without reload
- **THEN** the usability skill does not flag this requirement

### Requirement: Address Line 2 is hidden behind a link
The usability skill SHALL check that the optional Address Line 2 field is hidden behind a link instead of shown by default, following Baymard Institute, Scott, "Form Usability: Getting 'Address Line 2' Right" (2022). This requirement is distinct from `F02`, which concerns not requesting needless data. It SHALL NOT apply to a form with one address field fed by automatic address lookup, and whether users with unit numbers find the link SHALL be reported `NOT ASSESSABLE` from a static view.

#### Scenario: Always visible second line
- **WHEN** the shipping form shows Address Line 1 and an empty optional Address Line 2 by default
- **THEN** the usability skill flags the visible field

#### Scenario: Add apartment link
- **WHEN** the form shows a link "Add apartment, suite or unit" that reveals the field
- **THEN** the usability skill does not flag this requirement

### Requirement: Address entry has lookup and validator
The usability skill SHALL check that address entry offers type-ahead lookup that fills the other fields with conventional fields kept for manual entry, and that an address validator shows suggestions or missing parts in a prominent overlay before the order is placed, following Baymard Institute, Scott, "Provide a 'Fully Automatic Address Lookup' Feature (55% Don't)" (2023) and "Have an Address Validator (47% Don't)" (2023). This requirement is distinct from `F25`, which concerns not asking for data derivable from other input. It SHALL NOT apply to digital goods without a shipping address or to regions without a reliable address database, and the quality of suggestions SHALL be reported `NOT ASSESSABLE` when the evidence does not show it.

#### Scenario: Manual entry only
- **WHEN** a shipping form has five plain address fields, no suggestions and no validation step
- **THEN** the usability skill flags the missing lookup and validator

#### Scenario: Lookup with fallback and overlay
- **WHEN** typing a street shows suggestions, all fields remain editable, and a "Verify your address" overlay appears on submit
- **THEN** the usability skill does not flag this requirement

### Requirement: Card fields mirror the physical card
The usability skill SHALL check that the card expiry date uses a two-digit month and two-digit year in MM / YY order and is typed, and that the security code field has an inline thumbnail or tooltip showing where the code is, labelled "Security Code", following Baymard Institute, Olah, "Format the 'Expiration Date' Fields Exactly the Same as the Physical Credit Card (72% Don't)" (2023) and Baymard Institute, Christian Holst, "8 Recommendations for Creating Effective Input Fields" (2021). This requirement is distinct from `F26`, which concerns field width. It SHALL NOT apply to card entry handled by a hosted wallet or payment sheet, and card layouts of other card types SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Four-digit year dropdown and bare CVV
- **WHEN** the expiry is a month dropdown plus a four-digit year dropdown and the security field is labelled "CVV" with no help
- **THEN** the usability skill flags the card fields

#### Scenario: MM / YY with card hint
- **WHEN** the expiry accepts typing "04 / 29" and the "Security Code" field has a tooltip showing the card back
- **THEN** the usability skill does not flag this requirement

### Requirement: Prefilled values appear in editable fields
The usability skill SHALL check that a prefilled or autodetected value (city, state, ZIP code) is shown in an editable field or other interactive element, not static text, following Baymard Institute, Christian Holst, "8 Recommendations for Creating Effective Input Fields" (2021). This requirement is distinct from `F21`, which concerns which value is preselected. It SHALL NOT apply to a value that must not be changed, and whether prefilled values are correct SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Detected city as plain text
- **WHEN** a checkout shows "Shipping to: Chicago, IL 60601" as static text with no edit control
- **THEN** the usability skill flags the static prefilled value

#### Scenario: Detected city in an input
- **WHEN** the same values appear in editable City, State and ZIP inputs
- **THEN** the usability skill does not flag this requirement

### Requirement: No overlay on page load
The usability skill SHALL check that no overlay dialog or pop-up opens on its own at page load, and that such content opens only after a user action, following Baymard Institute, Jamie Holst, "Avoid These 5 Types of E-Commerce Graphics" (2014). This requirement is distinct from `A07R`, which governs when an alert or dialog is warranted at all, not when it may open. It SHALL NOT apply to overlays opened by a user action such as a click on cart contents or inline help, and what happens on later visits or after a delay SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a category page shows a newsletter overlay a moment after it loads
- **THEN** the usability skill flags the load-time overlay

#### Scenario: Passing case
- **WHEN** a cart-contents overlay opens only after the user clicks the cart icon
- **THEN** the usability skill does not flag this requirement

### Requirement: Live chat only on user request
The usability skill SHALL check that live chat opens only when the user asks for it and that no sticky chat element covers content on mobile, following Baymard Institute, Rebecca Hugo-Terrey, "These Three (Popular) Approaches to Implementing 'Live Chat' are Often Highly Disruptive for Users" (2019). This requirement is distinct from `S14`, which concerns overlays opened at page load in general, while S15 concerns the chat feature and its sticky placement. It SHALL NOT apply to chat started by the user, and desktop sites where a sticky chat element does not obscure content, and whether a delayed, once-only site-initiated prompt is acceptable beyond the mitigations the article lists (no prompt in filtering or checkout, shown once, delayed) SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile product page shows a floating chat bubble that covers the colour swatches, and a chat pop-up appears while the user browses
- **THEN** the usability skill flags the sticky and site-initiated chat

#### Scenario: Passing case
- **WHEN** chat is reached through a footer link and no floating element is shown
- **THEN** the usability skill does not flag this requirement

### Requirement: Clear hit areas in composite visuals
The usability skill SHALL check that a visual element with several tappable regions delineates where each region leads, or acts as one hit area, following Baymard Institute, Mark Crowley, "Make It Clear Where Hit Areas in Visual Elements Lead: 33% of Sites Don’t" (2022). This requirement is distinct from `A08R`, which requires that a control that looks interactive is interactive, not that several links inside one visual make their destinations clear. It SHALL NOT apply to elements with a single link and no inner links, and hover behaviour on desktop when only a static screenshot is given SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a promo tile has a boxed look with a title, a thumbnail and a rating, and the rating links to a different page with no cue
- **THEN** the usability skill flags the unclear hit areas

#### Scenario: Passing case
- **WHEN** a mobile tile holds one product image and is one link, or three links are split by separators and arrows
- **THEN** the usability skill does not flag this requirement

### Requirement: Account menu structure and dashboard icons
The usability skill SHALL check that an account menu separates primary from secondary paths and that every account-dashboard entry has an icon plus text, following Baymard Institute, Edward Scott, "Self-Service UX: Distinguish Primary from Secondary Paths in the 'My Account' Drop-Down (71% Don't)" (2019) and "Accounts & Self-Service UX: Consider Having an “Icon-Based” Dashboard (81% Don’t)" (2022). This requirement is distinct from `N14R`, which orders dropdown items by priority, while N32R concerns visual separation of primary and secondary paths and icon plus text in the dashboard. It SHALL NOT apply to a menu with very few links (about five or fewer) where order alone carries the priority, and which account features matter most to a specific site's users SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a My Account drop-down lists many links in one unstyled column, and only some dashboard entries have icons
- **THEN** the usability skill flags the missing structure and the inconsistent icons

#### Scenario: Passing case
- **WHEN** the menu groups primary paths first with a separate secondary column, and every dashboard card has an icon and a text label
- **THEN** the usability skill does not flag this requirement

### Requirement: Truncate long filter lists with an expander
The usability skill SHALL check that a long filter-value list is truncated at a sensible length with a visible expand control and that a single value is never truncated, following Baymard Institute, Christian Holst, "6 Guidelines for Truncation Design" (2014). This requirement is distinct from `D05`, which concerns showing the current filter selections, not how long value lists are shortened. It SHALL NOT apply to short value lists that fit without truncation, and the best count of visible values for a specific site, since the evidence supports at least six and up to about ten SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a brand filter shows 30 values in one long list, and another filter hides exactly one value behind "More"
- **THEN** the usability skill flags the untruncated long list and the single-value truncation

#### Scenario: Passing case
- **WHEN** a filter shows eight values then an underlined "More" link with a plus icon placed under the group
- **THEN** the usability skill does not flag this requirement

### Requirement: Overlays hold only short, transient content [A19R]
The usability skill SHALL check that an overlay, modal or bottom sheet holds a short, transient interaction (a few options, a short detail, a quick control); content longer than a sentence or two, content users may want to share or bookmark, content that needs scrolling or in-overlay anchor links, and page-to-page flows such as a product-detail page with its own reviews and specifications sit on their own page, and an overlay that takes input has an explicit Cancel control and keeps its entries after an accidental close. This requirement is distinct from A07R, which concerns whether an alert or dialog is warranted at all, N25R, which concerns the anatomy of an iOS sheet, and S16, which limits overlays to one at a time. It SHALL NOT apply to a single full-screen modal task that is deliberately self-contained, such as a capture or sign-in step, and to a short status message or a single confirmation, and how the overlay behaves on devices and in code the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a help article in a scrolling lightbox with its own anchor links and no URL of its own, and a product-detail view opened in a bottom sheet that holds its reviews and specifications
- **THEN** the usability skill flags the long, shareable content and the page flow held in overlays

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows the help article and the product-detail view as normal pages with URLs, and a sheet used only for a short size picker
- **THEN** the usability skill does not flag this requirement

### Requirement: Info tips open in context [A20R]
The usability skill SHALL check that activating an info tip icon shows a brief note adjacent to the icon with the task still visible, and does not open a modal, an obscuring overlay or a new page; the source is Nielsen Norman Group expert guidance with annotated examples. This requirement is distinct from `A07R`, which reserves alerts and dialogs for interruption-worthy information and does not address help icons that behave like dialogs or navigation. It SHALL NOT apply to an icon that is labeled and styled as a link to a help page rather than as an info tip, and what a tap on the icon does when only a static screenshot is given SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a design spec shows a ? icon beside a Sign-in code field that opens a new page about two-step verification
- **THEN** the usability skill flags the info tip that leaves the task

#### Scenario: Passing case
- **WHEN** the ? icon beside the field opens a two-line popover under the field and Esc or a tap outside closes it
- **THEN** the usability skill does not flag this requirement

### Requirement: Close vs cancel [A21R]
The usability skill SHALL check that a view with pending selections or in-progress work (a filter screen, an option modal) does not use a bare X for both close and cancel: it offers text-labelled actions such as Apply and Cancel, or the X keeps the work and a separate Cancel abandons it, or closing asks the user to confirm. This requirement is distinct from `E07`, which concerns Back or Cancel not silently discarding work, not whether a bare X can mean both close and cancel. It SHALL NOT apply to views with nothing to lose when closed, and behaviour after tapping that the screenshot does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Cancel vs Close: Design to Distinguish the Difference" (2019).

#### Scenario: Failing case
- **WHEN** A mobile filter screen has only an X and tapping it drops the chosen filters
- **THEN** the usability skill flags the ambiguous X

#### Scenario: Passing case
- **WHEN** The filter screen has Cancel, Reset and Apply text buttons
- **THEN** the usability skill does not flag this requirement

### Requirement: Overflow menu scope [A22R]
The usability skill SHALL check that a contextual (overflow) menu holds secondary actions that relate to one object or view; primary or frequent actions and one or two actions that fit in the available space are shown directly, and global actions are not placed in it. This requirement is distinct from `P04`, which concerns disclosing advanced or rare options progressively, not what belongs in an overflow menu. It SHALL NOT apply to screens where space is too small for any visible action, and how often users use each action SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaplan, "Designing Effective Contextual Menus: 10 Guidelines" (2025); Kaley, "Contextual Menus: Delivering Relevant Tools for Tasks" (2019).

#### Scenario: Failing case
- **WHEN** A chat window hides End chat in an overflow menu that holds two actions
- **THEN** the usability skill flags the hidden primary action

#### Scenario: Passing case
- **WHEN** A message shows Reply and Like, and its overflow menu holds Pin, Copy link and Report
- **THEN** the usability skill does not flag this requirement

### Requirement: Overflow icon sits by its object, is visible and keeps one meaning [A23R]
The usability skill SHALL check that a contextual-menu (overflow) icon sits beside the object it affects, is large and contrasting enough to see without hover, and has a label or tooltip that names the actions it holds; the kebab or meatball icon opens a menu of actions for one item and is used that way everywhere in the product, the hamburger icon is kept for main navigation, and the overflow icon is not used to expand text or images. This requirement is distinct from N08R, which concerns icon-only controls in general, A12R, which concerns one signifier used for two actions near each other in one view, and A22R, which concerns which actions belong in the menu. It SHALL NOT apply to menus opened by a visible text label and to products that use no overflow icon, and hover tooltips on touch screens and the behaviour behind each icon SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a small pale kebab icon in a screen corner away from the item it controls, a kebab icon that opens a popup on one list and a side panel on another, and a meatball icon that expands a review
- **THEN** the usability skill flags the hard-to-find trigger and the inconsistent icon meaning

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a bordered meatball icon on each row with the tooltip Row actions, every kebab icon opening an action menu, and a Read more link that expands review text
- **THEN** the usability skill does not flag this requirement

### Requirement: Plus icon in content rows is not a hidden action [A24R]
The usability skill SHALL check that a plus icon inside list or content rows is not used for actions that act at once (follow, join, add); it means Add only in a navigation bar where adding fits the screen, and an expandable item uses a caret or arrow while an action tied to a row uses a text label. This requirement is distinct from A12R, which concerns one signifier used for two actions close together, and N08R, which concerns labelling icon-only controls. It SHALL NOT apply to a plus that is part of a stepper or a quantity control, and whether a given audience reads the plus as Add the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a plus icon beside each company row that follows the company on tap without confirmation, next to rows whose plus would expand details
- **THEN** the usability skill flags the row-level plus icon that triggers an action or has two meanings

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a plus in the top navigation bar that opens an add-item form, and a text button labelled Follow on each row
- **THEN** the usability skill does not flag this requirement

### Requirement: One meaning per command [A25R]
The usability skill SHALL check that a screen or app does not offer several look-alike commands with different outcomes, for example two search fields that search different scopes or two Home buttons that go to different places; a repeated command has the same conceptual result wherever it appears. This requirement is distinct from `D09`, which concerns the scope choice of one global search input, not repeated look-alike commands. It SHALL NOT apply to the same command in clearly different contexts where users expect different targets, such as two separate sites; user expectations that the evidence does not show are `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** an app header shows two Home buttons, one to the list of magazines and one to the device home screen
- **THEN** the usability skill flags that one command name leads to different places

#### Scenario: Passing case
- **WHEN** an app has one Home button that always returns to the app start
- **THEN** the usability skill does not flag this requirement

### Requirement: Two-state controls show state and next action [A26R]
The usability skill SHALL check that a control that switches a system between two states (mute and unmute, lock and unlock) lets the user tell both the current state and what pressing it will do, through a label or icon that names the resulting action, a separate state indicator, or an unmistakable pressed-state cue, and not through a colour change alone on an unchanged icon. This requirement is distinct from `A03R`, which requires visible pressed, active and selected states on custom controls, not clarity about both the current state and the next state. It SHALL NOT apply to controls whose state is obvious from another signal such as audible playback, and what the control does after the press in a single static image SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a microphone icon with a slash looks the same muted and unmuted and only turns red when active, with no text label
- **THEN** the usability skill flags the ambiguous state control

#### Scenario: Passing case
- **WHEN** the control shows a lock indicator and a button labelled Unlock that changes to Lock after the press
- **THEN** the usability skill does not flag this requirement

### Requirement: Drag-and-drop shows signifiers and feedback [A27R]
The usability skill SHALL check that a draggable item shows it can be grabbed (a handle icon or the platform drag cursor) and shows what happens next: a changed state when grabbed and a preview of the result before release, following Nielsen Norman Group guidance on drag-and-drop. This requirement is distinct from `T05`, which requires an accessible alternative to dragging, not signifiers and feedback. It SHALL NOT apply where dragging is not offered, and haptic feedback SHALL be reported `NOT ASSESSABLE` from static evidence.

#### Scenario: Failing case
- **WHEN** a list of tasks can be reordered by dragging but shows no handle, and rows do not move aside while an item is dragged
- **THEN** the usability skill flags the missing signifier and preview

#### Scenario: Passing case
- **WHEN** each row shows a grip handle, the grabbed row gets a shadow, and neighbouring rows shift to show the drop position
- **THEN** the usability skill does not flag this requirement

### Requirement: Linked parts of one teaser [A28R]
The usability skill SHALL check that the heading, image and descriptive text of one teaser or card that points to a destination all link to the same page, and no part of the group that looks like a link is dead. In NN/g's eyetracking comparison, nine of 24 participants stopped at an unlinked subheading and never saw the linked text beneath it. This requirement is distinct from A18R, which concerns elements holding several links to different places, and A08R, which concerns controls that look interactive but are not. It SHALL NOT apply to a card whose parts deliberately lead to different destinations and make that clear, and hover or tap behaviour when only a static image is given SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Moran, "Flat UI Elements Attract Less Attention and Cause Uncertainty" (2017); Nielsen Norman Group, Moran, "Flat-Design Best Practices" (2017).

#### Scenario: Failing case
- **WHEN** a teaser shows a heading, an image and a link below, and only the link below is clickable
- **THEN** the usability skill flags the unlinked heading and image

#### Scenario: Passing case
- **WHEN** the heading, image and link all lead to the same page
- **THEN** the usability skill does not flag this requirement

### Requirement: Informational video does not start by itself [A29R]
The usability skill SHALL check that informational video and audio do not start with sound on their own; the user can start, pause, restart, mute and change the volume, and a link that opens a video says that it leads to video. This follows Nielsen Norman Group, Schade, "Video Usability" (2014). This requirement is distinct from `VH03`, which concerns decorative motion that competes with task content, not user control over informational media. It SHALL NOT apply to a video that starts only after the user presses its own play control, and how the player behaves when it is not shown SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** an explainer video starts with sound on page load and the player has no pause or mute control
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** the video starts after the user presses play and shows pause and mute controls
- **THEN** the usability skill does not flag this requirement

### Requirement: Accordion signifier is a caret with one action [A30R]
The usability skill SHALL check that an accordion header uses a caret as its signifier, not no icon, a plus, a right-facing arrow or an invented icon, and its label and icon do the same thing: a menu item that opens a submenu does not also link to a landing page through its label while the icon opens the submenu. This requirement is distinct from N28R, which concerns a View All item inside mobile submenus, not the signifier and the label-versus-icon behaviour of the toggle itself. It SHALL NOT apply to a header that always links to a page and never expands, and icon behaviour on templates the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a mobile menu row where tapping the label opens a category page and tapping the right-aligned plus opens a submenu
- **THEN** the usability skill flags the split label and icon actions and the non-caret signifier

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a mobile menu row with a caret where tapping anywhere on the row expands the submenu, and a View All item inside it opens the category page
- **THEN** the usability skill does not flag this requirement

### Requirement: Accordions only where users need a few sections, with easy closing [A31R]
The usability skill SHALL check that content is placed in accordions only when most users need a few sections of it; where most users need most or all sections, or a section is short or must be seen, it is shown directly. Sections open independently so several can stay open, open and closed states persist until the user changes them, and each header describes its content well enough to be worth a click. When a section can run to many screens, its heading stays pinned at the top or another quick close control is available, labelled with the heading or a familiar word and not an unfamiliar term such as Collapse, and opening a section does not scroll the page so that it looks like a new page. This requirement is distinct from A30R, which concerns the accordion signifier, PC08, which states the general progressive-disclosure rule, C38, which concerns tabs on product pages, and N31R, which requires a history entry for an accordion checkout step. It SHALL NOT apply to form sections where only one can be valid at a time (see F29), and the closing clause does not apply to short sections, and how often users need each section and the scroll behaviour on open SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a page where every section answers the same question yet sits in a closed accordion that closes the previous one when opened, and a long Brand filter accordion that can be closed only by scrolling back up
- **THEN** the usability skill flags the accordion that hides content most users need, the sections that close each other, and the missing quick close

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a long reference page whose users need one or two sections, with descriptive headers, independent open states and a Shoe Size heading that stays pinned while the sizes scroll
- **THEN** the usability skill does not flag this requirement

### Requirement: Task-critical information is not hidden in tooltips or info tips [F39]
The usability skill SHALL check that information a user needs to finish a task (input constraints such as password rules, instructions, rules and legal terms) is shown at the primary level of the page and not only in a tooltip or an info tip behind an i or ? icon; a tip carries only supplementary help such as a definition, the reason a field is requested or a short clarification, does not repeat the visible label or carry promotional text, and is applied to all comparable controls or to none. This requirement is distinct from F06, which requires constraints before or during input without addressing tips that hide them, X17, which requires a touch or keyboard equivalent for hover-only content, and AF05, which treats a permanent compensating tip as a design failure. It SHALL NOT apply to icons that open a help centre, FAQ or support contact as their stated purpose, and tip content the evidence does not show and whether users open the tip SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a sign-up form whose password rules and allowed characters appear only in a hover tooltip or an i-icon tip next to the field
- **THEN** the usability skill flags the task-critical information hidden in the tip

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows the password rules as visible helper text under the field, and an i icon that opens a short note on why the email is requested
- **THEN** the usability skill does not flag this requirement

### Requirement: Date fields fit the date distance and show an unambiguous format [F40]
The usability skill SHALL check that a date field lets the user type the date, a calendar picker is used for dates near the present and for ranges, split day, month and year dropdowns are not used, and a short list of available dates is shown as a list; the order of day, month and year is unambiguous because the parts are labelled, the format is shown or the month is spelled out. This requirement is distinct from F18, which concerns open-ended entry through selection controls, and F23, which concerns chunked display of long numeric identifiers. It SHALL NOT apply to date fields that accept only a few fixed options and to dates shown in an unambiguous long form such as 2 July 2026, and how the field behaves in code and the format the user expects SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a birthdate field that offers only a calendar picker opening at the current month, and a departure date shown as 02/07/2026 on a site used in several countries with no format hint
- **THEN** the usability skill flags the picker for a distant date and the ambiguous date format

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a birthdate field that accepts typing with a DD / MM / YYYY hint, and a trip form that uses a two-month calendar with month names for a date range
- **THEN** the usability skill does not flag this requirement

### Requirement: Long option lists support typing [F41]
The usability skill SHALL check that a list of more than about 15 known options (countries, states, languages, years) lets the user type to filter or jump, and that a value users know by heart (age, birth year, quantity) is typed and not scrolled to, following Nielsen Norman Group guidance on dropdown lists and direct access. This requirement is distinct from `F18`, which concerns when a selection control suits the data at all, and from `X27`, which concerns keyboard operation of a custom drop-down. It SHALL NOT apply to short lists or to a native picker that already supports type-to-select, and typing behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a checkout form shows a collapsed dropdown of all countries with no type-to-filter and a birth-year dropdown listing about a hundred years
- **THEN** the usability skill flags both controls

#### Scenario: Passing case
- **WHEN** the country control is a combobox that filters as the user types and the birth year is a numeric text field
- **THEN** the usability skill does not flag this requirement

### Requirement: Time-zone selectors are searchable, defaulted and readable [F42]
The usability skill SHALL check that a time-zone selector pre-selects the user's detected time zone as a changeable default, offers a visible search field at the top of the list that matches city, country and time-zone name as the user types, and lists places alphabetically by city, region or country with each row showing the city, the country and the current offset; a list ordered by offset puts the offset first on every row, and a grouped list places the regions most of the audience lives in at the top. This requirement is distinct from F18, which concerns not using a selection control for open-ended entry, F25, which concerns not asking for data the system can derive, and F41, which concerns type-ahead in long lists in general. It SHALL NOT apply to selectors with a handful of fixed time zones and to products that already store the user's time zone, and a default whose source the evidence does not show and the order of a list not shown in full SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a settings page that opens a long time-zone list sorted by offset, with the offset trailing each name, no value selected and no search field
- **THEN** the usability skill flags the missing detected default, the missing search, and the list order and trailing offset

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a selector that opens with the detected zone highlighted, a visible search field that accepts a city or country, and alphabetical rows such as "Berlin, Germany (UTC+01:00)"
- **THEN** the usability skill does not flag this requirement

### Requirement: Toggle switch behaviour and labelling [F43]
The usability skill SHALL check that a toggle switch applies its new state immediately, without a separate Save or Submit step, and does not sit among fields that need a Save button; a two-state control that needs a submit step is a checkbox or radio buttons. The toggle label is short, names what the control does when it is on (it reads sensibly with "on" or "off" appended) and is not a neutral question, and the two states differ by knob position and high-contrast colour, with any On or Off words placed on the matching sides of the switch. This requirement is distinct from `F20`, which concerns showing a small fixed option set as visible radio buttons or checkboxes, not the behaviour and labelling of a two-state switch. It SHALL NOT apply to checkboxes and radio buttons, and a toggle's save behaviour that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a settings screen shows a toggle labelled "Do you want email alerts?" beside a Save button that must be pressed for it to apply
- **THEN** the usability skill flags the toggle for needing a submit step and for a neutral question label

#### Scenario: Passing case
- **WHEN** a settings screen shows toggles labelled "Email alerts" and "Text alerts" whose state applies on tap and changes knob position and colour
- **THEN** the usability skill does not flag this requirement

### Requirement: Password strength feedback [F44]
The usability skill SHALL check that a password creation field shows live feedback on how strong the entered password is, not only a checklist of rules, so users can improve the password toward a stated goal. This requirement is distinct from `F11`, which concerns disclosing the password rules and letting users reveal the password, not feedback on strength while typing. It SHALL NOT apply to a flow with a password manager or passwordless sign-in that sets no typed password; the strength model behind the meter is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a sign-up form shows the rules but no feedback until submit
- **THEN** the usability skill flags that no live strength feedback

#### Scenario: Passing case
- **WHEN** a sign-up form shows a strength bar that updates while typing
- **THEN** the usability skill does not flag this requirement

### Requirement: Choice paths in passwordless sign-in [F45]
The usability skill SHALL check that an account that signs in with a one-time code, magic link or passkey offers the code by email or text message, lets the user add a password or biometric sign-in later, and gives a passkey a route on a device that does not hold it, such as scanning a QR code with the phone. This requirement is distinct from `F10`, which concerns support for password managers and non-memory methods, not the choices inside a passwordless flow. It SHALL NOT apply to products that must use a password for policy reasons; security properties of the method are `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a sign-in screen sends a one-time code only by text message and offers no other way on a desktop
- **THEN** the usability skill flags that one channel and no fallback

#### Scenario: Passing case
- **WHEN** a sign-in screen lets the user pick email or text for the code and shows a QR code for a passkey on another device
- **THEN** the usability skill does not flag this requirement

### Requirement: Wizard steps carry what they need [F46]
The usability skill SHALL check that a wizard step carries the information needed to answer it: help text and term explanations appear beside the step and do not cover its fields, a modal wizard does not hide the data on the page behind it that the step asks about, and a step does not depend on information the user must fetch from elsewhere in the product. This follows Nielsen Norman Group, Budiu, "Wizards: Definition and Design Recommendations" (2017). This requirement is distinct from `F17`, which shows earlier entries on later steps, not help placement or hidden background data. It SHALL NOT apply to a wizard whose steps already show every value they need, and what users need that is not visible in the step SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a help lightbox covers the fields of the step it explains
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** the explanation opens in a panel beside the step and the fields stay visible
- **THEN** the usability skill does not flag this requirement

### Requirement: Advertised discounts are easy to apply [F47]
The usability skill SHALL check that an advertised discount or coupon is easy to apply: a banner that looks like a button applies its code or is not styled as one, the code is real text that can be copied and not only part of an image, a code offered in return for a sign-up appears on the site at once and not only by email, and a coupon field in the cart appears only where a visible offer exists or sits behind a link. This requirement is distinct from F32, which hides the coupon field behind a link to shorten checkout, and F34, which concerns an Apply button for promo codes. It SHALL NOT apply to a store with no promotions, and discount rules and eligibility the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a cart banner styled as a button that does nothing, and a coupon code shown only as an image on an offers page
- **THEN** the usability skill flags the inert promotion, the image-only code and the email-only delivery

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a banner whose click applies the code to the cart, and a sign-up offer that shows the code on screen and by email
- **THEN** the usability skill does not flag this requirement

### Requirement: One overlay at a time, and dismissed overlays stay closed [S16]
The usability skill SHALL check that a site or app shows at most one overlay at a time: no popup, modal or bottom sheet covers another overlay or a browser or system prompt, a sheet does not open a second sheet on top of itself (one dismissal would then close the whole stack and lose the user's place), and an overlay the user has dismissed does not come back in the same session as a floating element or a second overlay; an important warning that must be read sits as a visually distinct element on the page near the content it concerns, not in an overlay that users tend to close unread. This requirement is distinct from S14, which concerns whether an overlay opens on its own at page load, A07R, which reserves dialogs for interruption-worthy information, and N25R, which requires one iOS sheet at a time on iOS only. It SHALL NOT apply to overlays the site cannot control, such as browser extension prompts, and to a single overlay that replaces the previous one after the user closes it, and overlay sequencing across sessions the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a cookie notice, a feedback modal and a promotion modal open together at the end of checkout, and a dismissed newsletter modal that returns as a floating tab
- **THEN** the usability skill flags the stacked overlays and the dismissed overlay that returns

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows one cookie notice on the first visit, a feedback form embedded in the confirmation page, and no dismissed prompt returning in the session
- **THEN** the usability skill does not flag this requirement

### Requirement: No popup during a critical task or right after login [S17]
The usability skill SHALL check that no popup (modal or nonmodal overlay) opens while the user is in the middle of a critical task or immediately after login; a feedback or rating request appears after a top task is completed, and a persistent feedback link (footer, side tab or navigation item) serves users who want to comment earlier, as reported by Nielsen Norman Group, Kaley, "Popups: 10 Problematic Trends and Alternatives" (2019). This requirement is distinct from `S14`, which governs overlays that open on their own at page load, not overlays that interrupt a task already under way or follow login. It SHALL NOT apply to legally required consent or age checks and overlays the user requested, and timing and triggers that a static screen does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a screenshot sequence shows a feedback modal covering a boarding-pass retrieval step, or a promotion modal opening straight after the user signs in
- **THEN** the usability skill flags the popup

#### Scenario: Passing case
- **WHEN** the feedback request appears on the confirmation screen after the task completes and a Feedback link stays in the footer
- **THEN** the usability skill does not flag this requirement

### Requirement: No please-do-not-go popups [S18]
The usability skill SHALL check that a page does not open a popup when the cursor moves toward the browser edge or tab bar, and a popup is not timed to the user leaving, because the page cannot tell closing from switching tabs. This requirement is distinct from `S14`, which concerns overlays that open at page load, not overlays triggered by cursor movement or an exit signal. It SHALL NOT apply to a warning that prevents loss of unsaved user work; trigger code that the evidence does not show is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** an article page shows a Before you go newsletter modal when the cursor moves to the tab bar
- **THEN** the usability skill flags that an exit trigger opens a popup

#### Scenario: Passing case
- **WHEN** an article page shows no popup on cursor exit and a form with unsaved input warns before closing
- **THEN** the usability skill does not flag this requirement

### Requirement: No modal interstitial before leaving to a linked site [S19]
The usability skill SHALL check that A link to a subdomain, partner site or external site is signalled with a lightweight cue (a tooltip, an icon or link text that names the destination) and does not trigger a modal warning before the user leaves; navigation back to the main site stays available on the destination, as reported by Nielsen Norman Group, Kaley, "Popups: 10 Problematic Trends and Alternatives" (2019). This requirement is distinct from `S14`, which governs overlays that open at page load, not modal warnings that follow a link click. It SHALL NOT apply to transitions that legally require an explicit disclaimer, and legal obligations behind a disclaimer SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** clicking Careers opens a modal saying the user is leaving the site, and the next click opens a second modal for the application site
- **THEN** the usability skill flags the transition modals

#### Scenario: Passing case
- **WHEN** the Careers link carries an external-site icon and a tooltip naming the destination, and the destination keeps a link back
- **THEN** the usability skill does not flag this requirement

### Requirement: Long operations show progress and a way to stop [S20]
The usability skill SHALL check that an operation long enough that users lose focus on it (about ten seconds or more) shows a percent-done indicator with a text explanation of the step and a visible control to interrupt it; a looped spinner alone is not used for such operations, as reported by Nielsen Norman Group, Nielsen, "Response Times: The 3 Important Limits" (1993); Sherwin, "Progress Indicators Make a Slow System Less Insufferable" (2014). This requirement is distinct from `S04`, which chooses determinate or indeterminate progress, not whether a long operation can be stopped. It SHALL NOT apply to operations that finish within a few seconds and operations that cannot be interrupted safely, and real duration of the operation SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a file import runs under an endless spinner with no estimate and no Cancel control
- **THEN** the usability skill flags the long operation

#### Scenario: Passing case
- **WHEN** the import shows Updating address 3 of 50 with a filling bar and a Stop import button
- **THEN** the usability skill does not flag this requirement

### Requirement: Queue states what happens on exit [S21]
The usability skill SHALL check that a virtual queue or waiting room says whether the user keeps their place if they close, leave or refresh the page, states that the page updates itself (ideally with the time of the last update), and, where users may leave, offers a notification and an easy way back to the queue. This follows Nielsen Norman Group, Flaherty, "Virtual Queues: 13 Best Practices for Managing the Wait" (2023). This requirement is distinct from `S13`, which concerns the expectation of duration and a fair order in a wait, not what happens to the user's place when they leave. It SHALL NOT apply to a short processing wait that is not a queue, and how the queue system behaves SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a ticket queue shows a position number and a Refresh button with no word on losing the place
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** the queue says the page refreshes itself, shows the last update time and states that closing the page keeps the place
- **THEN** the usability skill does not flag this requirement

### Requirement: Chat findable [S22]
The usability skill SHALL check that chat is reachable through a link labelled Chat on the Contact or Help page (and on product pages where questions arise), is not offered only as a floating button, and any floating button is at the bottom right and contrasts with the page. This requirement is distinct from `S15`, which concerns when chat opens and what it covers, not whether users can find it. It SHALL NOT apply to sites without chat, and chat availability that depends on staffing SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Budiu, "The User Experience of Customer-Service Chat: 20 Guidelines" (2019).

#### Scenario: Failing case
- **WHEN** Chat appears only as a small floating button at the bottom left, and Contact lists no chat link
- **THEN** the usability skill flags the hard-to-find chat

#### Scenario: Passing case
- **WHEN** Contact and Help pages link to Chat and a contrasting button sits bottom right
- **THEN** the usability skill does not flag this requirement

### Requirement: Chat expectations [S23]
The usability skill SHALL check that before and during a chat the user sees whether a person or a bot answers, the opening hours when chat is not always on, an estimated wait in time, and a status such as the agent is typing; a question typed before the chat starts is passed on to the agent. This requirement is distinct from `S15`, which concerns when chat opens and what it covers, not what the chat tells the user about who answers and how long it takes. It SHALL NOT apply to sites without chat, and the real response time SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Budiu, "The User Experience of Customer-Service Chat: 20 Guidelines" (2019).

#### Scenario: Failing case
- **WHEN** A chat shows only You are number 5 in the queue and asks for the question again after connecting
- **THEN** the usability skill flags the unclear wait and repeated question

#### Scenario: Passing case
- **WHEN** A chat states Bot first, a person joins if needed, about 2 minutes wait, and keeps the typed question
- **THEN** the usability skill does not flag this requirement

### Requirement: Filters apply without repeated reloads or page jumps [D24]
The usability skill SHALL check that filter controls do not reload the results after every single selection when the user is likely to choose several values: on mobile or on slow pages the user sets all filters and applies them once, and on fast pages interactive updates dim the results with a progress cue and do not flicker items one by one; while the user is still choosing, the page does not scroll or jump under the filters when results refresh, and it moves to the top of the results only when the user has finished or when the remaining results would otherwise show an empty view. This requirement is distinct from D05, which concerns exposing current filter selections, D17, which concerns how selected values combine, and R04R, which concerns layout shifts in general and not the apply timing and page position of a filter refresh. It SHALL NOT apply to a single-choice filter or a page that returns results at once, and the scroll clause does not apply to a filter panel that opens as a separate screen, and the real response time and how the page behaves in a real browser SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a mobile filter panel that reloads the product list after each tick, and a results page that scrolls to the top after each facet click so the next click hits a different facet
- **THEN** the usability skill flags the per-selection reload and the scroll jump during filter selection

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a filter panel with an Apply button that runs the query once, and a results page that keeps its scroll position while facets are chosen
- **THEN** the usability skill does not flag this requirement

### Requirement: Predictable filter category labels [D25]
The usability skill SHALL check that filter category labels are concrete, specific to the product type and not overlapping, so users can predict which values sit under each category; vague labels such as Item Type next to Style are replaced, and general values (Sandals) sit above specific ones (Flip-flops) in one hierarchical category. In an NN/g usability test a shopper could not find Sandals because two categories seemed alike. This requirement is distinct from D19, which concerns jargon and explanation of industry terms, and D18, which concerns which filter types exist. It SHALL NOT apply to filter sets with a few self-evident categories, and how users read the labels, which the evidence does not show without testing, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Moran, "Defining Helpful Filter Categories and Values for Better UX" (2018).

#### Scenario: Failing case
- **WHEN** a shoe filter panel has both Item Type and Style, and Sandals sits under Item Type
- **THEN** the usability skill flags the overlapping vague categories

#### Scenario: Passing case
- **WHEN** one Style category lists Boots, Pumps and Sandals, with subtypes shown once Sandals is chosen
- **THEN** the usability skill does not flag this requirement

### Requirement: Cards vs list [D26]
The usability skill SHALL check that a set of similar items that users scan, rank or compare (products, search results, similar articles) is shown as a list or grid with a fixed, predictable position for each attribute, not as variable-size cards; cards suit mixed content types browsed without a specific target. This requirement is distinct from `C36`, which concerns the content of a comparison table, not the layout used to list items. It SHALL NOT apply to dashboards and feeds that mix different content types, and how users scan a layout that is shown only as a static design SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Cards: UI-Component Definition" (2016).

#### Scenario: Failing case
- **WHEN** A product listing uses variable-height cards where price sits at a different position on each card
- **THEN** the usability skill flags the card layout

#### Scenario: Passing case
- **WHEN** A product listing shows price at the same position on every row, or a dashboard mixes different content types in cards
- **THEN** the usability skill does not flag this requirement

### Requirement: Enriched search suggestions are labelled and stable [D27]
The usability skill SHALL check that a search box showing more than text suggestions as the user types (trending, featured, recent or related-category items) keeps the plain text suggestions, labels each extra group by type, gives each group a fixed place that does not shift between keystrokes, and limits image-heavy content, following a Nielsen Norman Group e-commerce study in which such suggestions were rarely used. This requirement is distinct from `D14`, which concerns the length and emphasis of the text suggestion list. It SHALL NOT apply to a search box with text suggestions only, and loading speed of the extra content SHALL be reported `NOT ASSESSABLE` from a static screenshot.

#### Scenario: Failing case
- **WHEN** the search panel shows unlabelled product images that change position as the user types and no text query suggestions
- **THEN** the usability skill flags the panel

#### Scenario: Passing case
- **WHEN** the panel lists text suggestions first, then groups titled "Top sellers" and "Recent searches" in fixed places
- **THEN** the usability skill does not flag this requirement

### Requirement: Search suggestions lead to good results [D28]
The usability skill SHALL check that every query suggestion in a site-search dropdown opens a results page with relevant results; a suggestion that returns no results or unrelated items is removed from the list. This requirement is distinct from `D14`, which governs how long the suggestion list is and which part of each suggestion is emphasized, not whether each suggestion returns good results. It SHALL NOT apply to sites that offer no query suggestions, and the result quality behind a suggestion that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** typing "luggage" suggests "luggage sets clearance" and the evidence shows its results page holds only pet travel items
- **THEN** the usability skill flags the suggestion that returns unrelated results

#### Scenario: Passing case
- **WHEN** each suggestion shown has a results page in the evidence that lists matching products
- **THEN** the usability skill does not flag this requirement

### Requirement: No-results statement is conspicuous [D29]
The usability skill SHALL check that a search results page with no matches states in its main content area, in prominent type with clear spacing, that nothing matched the query, so users do not mistake ads, related links or the generic page heading for results; spelling corrections and advice on changing the query sit in the main body beside that statement. This requirement is distinct from `S07`, which requires that empty and no-results states explain what happened and offer a next step, not that the statement is conspicuous enough to be seen. It SHALL NOT apply to results pages that return at least one match, and whether users notice the statement without gaze or test evidence SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a no-results page shows the sentence "Sorry, no matches found" in small light text between the logo and a bold heading, with a list of ads below it
- **THEN** the usability skill flags the inconspicuous no-results statement

#### Scenario: Passing case
- **WHEN** a no-results page shows "Sorry, no results were found" in a large bold line in the main body, followed by tips on changing the search terms
- **THEN** the usability skill does not flag this requirement

### Requirement: Scoped search states its scope and offers one-click widening [D30]
The usability skill SHALL check that when a search is limited to a section or category, the results page states the scope and offers a one-click way to remove it or search the entire site; the default scope is the whole site, and the scope list uses distinct category names, as reported by Nielsen Norman Group, Sherwin, "Scoped Search: Dangerous, but Sometimes Useful" (2015). This requirement is distinct from `D09`, which requires that a global search needs no scope choice before a first query, and from D02, which requires the current scope to be visible, but neither requires a one-click widening on the results page. It SHALL NOT apply to sites with a single content type, and the default scope on first load SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a grocery site defaults its search to Groceries and the results page shows no scope label or way to search the whole site
- **THEN** the usability skill flags the scoped search

#### Scenario: Passing case
- **WHEN** the results page shows Searching in: Music with a one-click Search entire site link
- **THEN** the usability skill does not flag this requirement

### Requirement: Search is not the only route to content [D31]
The usability skill SHALL check that a site with a catalog or many content areas keeps browsable category navigation and facets or filters beside the search box, so users who cannot name what they need are not forced to invent a query. This requirement is distinct from `N06R`, which concerns whether primary navigation is discoverable, not whether browsing exists beside search. It SHALL NOT apply to single-purpose lookup tools and sites with only a few pages, and the quality of the search engine behind the box SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a store homepage shows only a large search box and offers no category links or filters on the results page
- **THEN** the usability skill flags the search-only route to the catalog

#### Scenario: Passing case
- **WHEN** a store offers category navigation, and its category pages show facets for type, brand and size beside the search box
- **THEN** the usability skill does not flag this requirement

### Requirement: Desktop search keeps an open field [D32]
The usability skill SHALL check that desktop and tablet search keeps an open text field beside the icon, the icon and Enter submit, and any expanding field opens next to the icon with focus; the source reports NN/g research in which icon-only search was harder to find and slower to use. This requirement is distinct from `D13`, which requires a visible submit button next to the search field on mobile, without the desktop open-field pattern. It SHALL NOT apply to phone and watch screens, where the field is hidden until the icon is touched, and the behaviour of the click SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a 1440 px desktop header shows only a small gray magnifying-glass icon in the left corner
- **THEN** the usability skill flags the icon-only search

#### Scenario: Passing case
- **WHEN** the header shows an open search field with an icon at the top right
- **THEN** the usability skill does not flag this requirement

### Requirement: Paginated listings offer View All [D33]
The usability skill SHALL check that a paginated listing offers a single View All control (capped around a hundred items) or one larger alternative count instead of a menu of near-identical per-page values; the source reports that NN/g user tests found View All helpful to some users and not harmful to others. This requirement is distinct from `D15`, which sets the default number of items per load and the Load more or pagination fallback, without a View All control or a per-page selector. It SHALL NOT apply to linear articles, which stay on one page, and result sets too large for any single page, and whether users prefer the option on the reviewed site SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a category page of 600 dresses offers only Next and a per-page menu listing 10, 20, 30 and 40
- **THEN** the usability skill flags the missing View All or the multi-value per-page menu

#### Scenario: Passing case
- **WHEN** the category page offers a View All button that shows up to 100 items
- **THEN** the usability skill does not flag this requirement

### Requirement: Page scrolling keeps its normal rate and direction [R08R]
The usability skill SHALL check that A page does not change the rate or direction of scrolling (scrolljacking); where a scroll-driven sequence is used, it is short, discloses valuable information, holds little text, includes normal-scrolling sections, sits below the fold, keeps a sticky navigation as an exit, and is not carried over to mobile, as reported by Nielsen Norman Group, Paul, "Scrolljacking 101" (2023). This requirement is distinct from `PA03`, which warns against several simultaneous salient animations, not against overriding the scroll behaviour itself. It SHALL NOT apply to a short scroll-driven sequence with a clear functional purpose, and scroll feel and rate SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product page scrolls sideways when the user swipes vertically and holds paragraphs of text that fade in and out
- **THEN** the usability skill flags the scrolljacking

#### Scenario: Passing case
- **WHEN** the page scrolls normally and a short sequence below the fold steps through eight product features without text
- **THEN** the usability skill does not flag this requirement

### Requirement: Scroll-linked effects never hold back content [R09R]
The usability skill SHALL check that on a page where users look for information, scroll-linked effects (parallax, fade or slide reveals) do not hold back body text, images or task outputs such as calculator results until a scroll trigger fires, animate content only the first time and then keep it visible (no replay when the user scrolls back up), do not move text faster than it can be read at a fast scroll speed, animate one element type (text or images) at a time, stay quick, are limited to background or peripheral images and are avoided on mobile; a long parallax page offers visible in-page navigation. This requirement is distinct from VH03, which concerns removing purely decorative motion, PA03, which concerns several simultaneous salient animations, R07R, which concerns the duration and easing of UI motion, and R08R, which concerns overriding the scroll itself. It SHALL NOT apply to leisure or storytelling pages with no information task and to decorative animation on secondary imagery, and scroll behaviour and animation timing that a static design does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a product page that reveals each paragraph with a scroll-tied animation so a fast scroll shows blank screens, and a calculator whose results appear only at a scroll trigger and hide again when the user scrolls back
- **THEN** the usability skill flags the content and task output held back by scroll-linked effects

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows body text and results visible on load, with parallax only on a background photo and one supporting image that fades in once
- **THEN** the usability skill does not flag this requirement

### Requirement: Logo at the top start links home, with a Home link as well [N33R]
The usability skill SHALL check that on every page the site logo sits at the top start edge of the header (top left in left-to-right languages), looks like a logo and not like a heading or a navigation item, and links to the homepage; no other element that could be taken for a logo (a map icon, weather, social icons) sits in that corner, a centred logo is paired with a separate visible Home link, and interior pages also offer an explicit Home link in the navigation or as the first breadcrumb. NN/g reports that users were far more likely to reach the homepage in one click with a left-aligned logo than with a centred one. This requirement is distinct from N16R, which concerns breadcrumbs, a footer sitemap and a clear exit path, N13R, which places utility navigation, and C31, which concerns the tagline beside the logo. It SHALL NOT apply to a minimal flow such as checkout that deliberately omits global navigation, and homepage reachability on pages the evidence does not show and the mirrored position in right-to-left layouts SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows interior pages with a centred logo that looks like a heading, a map icon and a temperature in the upper left, and no Home link
- **THEN** the usability skill flags the logo placement and the missing reliable homepage route

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows the logo at the top left of every page, linking home, with Home as the first breadcrumb
- **THEN** the usability skill does not flag this requirement

### Requirement: Wide layouts show primary navigation [N34R]
The usability skill SHALL check that on desktop and other wide layouts the primary navigation and the site's top-level categories are visible links in the header when the space allows them, not collapsed behind a menu icon carried over from the phone layout or into a single drop-down such as Shop by Department; this matters most for product and landing pages that visitors reach directly, where the visible categories show the scope of the site. In NN/g's quantitative test hidden navigation was used less, reached later and rated harder, with a larger penalty on desktop than on phones. This requirement is distinct from N06R, which concerns whether hidden navigation on mobile is discoverable and labelled, and N27R, which concerns category items in the open mobile menu. It SHALL NOT apply to a tool that keeps navigation in another persistent visible form such as a sidebar, and to sites whose audience is mostly signed-in frequent users or users who rely on search, and task time, success and menu click rates on the reviewed site SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a 1440 px product page for a retailer with five categories whose header holds only a three-line icon or a single Shop drop-down
- **THEN** the usability skill flags the primary navigation hidden on a wide layout

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows the five categories as header links with mega menus for subcategories, and the menu icon used only below tablet width
- **THEN** the usability skill does not flag this requirement

### Requirement: Hidden-menu icon form and position [N35R]
The usability skill SHALL check that a hidden-menu control uses the standard three-line icon at the top left of the screen, without borders, frames or added glyphs, ideally with a Menu label; other line-based icons (list view, filter, favorites) are not placed in the top-left corner, where they are read as the main menu, or carry a visible label. In NN/g's recognisability study users identified the standard icon at top left as the main menu even without its label, while bordered or list-style variants and line-based icons in that corner were misread. This requirement is distinct from N08R, which asks for labels or familiar symbols on icon-only controls in general, not for the form and position of the menu icon. It SHALL NOT apply to platforms whose native navigation bar fixes the menu control, and whether the menu is used successfully, which a recognisability study does not show, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaplan, "The Hamburger-Menu Icon Today: Is it Recognizable?" (2025).

#### Scenario: Failing case
- **WHEN** a menu icon sits at top right inside a bordered box, and a list-view icon without label sits at top left
- **THEN** the usability skill flags the menu icon form and the confusable top-left icon

#### Scenario: Passing case
- **WHEN** a plain three-line icon with a Menu label sits at top left and the list-view icon is labelled and placed in the toolbar
- **THEN** the usability skill does not flag this requirement

### Requirement: Navigation labels predict what is behind them [N36R]
The usability skill SHALL check that a navigation or category link label names in plain words what the user finds there (for example Pricing, Support, Build Your Plan); it is not a branded or made-up term, a vague action verb alone (Explore, Discover, Learn, Engage, Partner) or a conversational stem such as I want to, and parallel wording is not forced when it makes a label vaguer; a specific verb that names a task (Go Paperless) is acceptable. This requirement is distinct from N07R, which concerns user vocabulary and stable terms across screens, N20R, which concerns overlap between sibling categories, and N21R, which concerns catch-all labels. It SHALL NOT apply to labels explained at the label itself, established category names for the audience, and a call-to-action button inside page content, where the surrounding text supplies the context, and how the target audience reads a label SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a primary menu that lists Explore, Discover, Engage and Partner, and a branded label such as Life at LN for the About page
- **THEN** the usability skill flags the labels that do not predict their content

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a primary menu that lists Pricing, Products, Support and Build Your Plan, and an About us page under that plain label
- **THEN** the usability skill does not flag this requirement

### Requirement: Link labels name their destination [N37R]
The usability skill SHALL check that link and button labels say what the user gets or where the link leads and make sense when read alone (in a list of links, a card grid or a search result); repeated generic labels such as Learn more, Read more, More, Click here or Shop now are replaced by wording that names the destination, a label promises only what the click delivers (a More info and Book label does not open a contact form), and two links with the same text on one page lead to the same destination. This requirement is distinct from X19, which front-loads keywords for screen-reader link lists, A02R and C02, which ask for descriptive action language in general, and A09R, which concerns a control whose effect contradicts its label. It SHALL NOT apply to a link inside a sentence whose surrounding text carries the meaning for all users, and to repeated links that deliberately lead to the same destination, and destinations the evidence does not show and how a screen reader announces the links SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows three cards each ending in a Learn more link, three links labelled here that go to three different pages, and a More info and Book button that opens a contact form
- **THEN** the usability skill flags the generic and duplicated labels and the label that over-promises

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows cards with links reading Watch the Teams overview and Get five collaboration tips, each naming its page
- **THEN** the usability skill does not flag this requirement

### Requirement: Long pages offer a labelled in-page index [N38R]
The usability skill SHALL check that a long page with several distinct sections, including a long FAQ, offers in-page navigation near the top (a list of section links labelled, for example, On this page or Table of contents so users know the links stay on the page, or accordion sections), keeps it on small screens, and sets FAQ questions apart as scannable headings or links with enough link contrast. NN/g found that users skim such a list for an outline and that unlabelled in-page links styled like ordinary links were mistaken for links to another page. This requirement is distinct from X20, which concerns a skip link for keyboard users, C38, which concerns product-page sections in horizontal tabs, and C18, which concerns where FAQ questions come from. It SHALL NOT apply to short pages whose sections fit on about one screen, linear articles, and content better split across separate pages, and how far users scroll and how long the page renders on the user's device SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a long guide with ten sections and no contents list, and an FAQ page whose mobile version drops the question list shown on desktop
- **THEN** the usability skill flags the missing or unlabelled in-page navigation

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows an On this page list of anchor links under the title, visually set apart, and an FAQ that opens with linked question headings kept on mobile
- **THEN** the usability skill does not flag this requirement

### Requirement: Local navigation for exploratory sections [N39R]
The usability skill SHALL check that a section that users explore across sibling pages has a visible local navigation that marks the current page and is less salient than the global navigation; the source is Nielsen Norman Group guidance with a test observation where a louder local menu hid the global one. This requirement is distinct from `N16R`, which asks for breadcrumbs and a footer sitemap on deep sites, without sibling-page navigation or its salience relative to global navigation. It SHALL NOT apply to small sites and known-item flows with few pages, and analytics on pogo-sticking SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a car model section of eight pages has no sibling links and the local menu is styled bolder than the header menu
- **THEN** the usability skill flags the missing or overpowering local navigation

#### Scenario: Passing case
- **WHEN** the model section has a quiet sub-bar with Features, Gallery, Accessories and Specs under a stronger global bar
- **THEN** the usability skill does not flag this requirement

### Requirement: Section menu distinct from main menu [N40R]
The usability skill SHALL check that a section or sub-navigation menu on a deeper page looks and is labelled differently from the main navigation menu, and the same control is not reused with a different meaning on different pages; when one site has both, users can tell which one holds the current section. This requirement is distinct from `N06R`, which concerns whether primary navigation is discoverable, not whether a second menu is confused with the first. It SHALL NOT apply to a site with a single menu level; menu use in sessions the evidence does not show is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a deep page reuses the same Menu button that opens the main menu on the homepage but opens the section links there
- **THEN** the usability skill flags that one control has two meanings

#### Scenario: Passing case
- **WHEN** a deep page has a distinct section menu control next to the main Menu control
- **THEN** the usability skill does not flag this requirement

### Requirement: A tab control holds one kind of tab [N41R]
The usability skill SHALL check that a tab control holds one kind of tab: either every tab switches the panel in place with a matching layout, or every tab opens another page; a tab that leaves for a different page, another site or a view without the tabs sits outside the control or is styled differently, and the tabs share one selected and one unselected style. This requirement is distinct from `C38`, which concerns whether the main product-page sections use horizontal tabs at all, not the consistency of one tab control. It SHALL NOT apply to controls that are not tabs, and what a tab does on activation in a static design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** four tabs change the panel and the fifth, styled the same, opens another site in a new window
- **THEN** the usability skill flags the mixed tab types

#### Scenario: Passing case
- **WHEN** all tabs in the control swap the panel content in place and use one selected style
- **THEN** the usability skill does not flag this requirement

### Requirement: Links open in the same tab by default [N42R]
The usability skill SHALL check that links are real links that users can open in a new tab with the standard browser commands, and a site opens a link in a new tab or window by itself only when the task needs the target beside the current page (for example reference material while filling a form); other links open in the same tab, which is the default on mobile. This requirement is distinct from `N31R`, which concerns Back behaviour after overlays and in-page view changes, not where a link opens. It SHALL NOT apply to links that download a file or start another app; a user's own tab habits are `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** product tiles on a list page run a script on click so they cannot be opened in a new tab, while every footer link opens a new tab
- **THEN** the usability skill flags that list links block tab use and ordinary links force new tabs

#### Scenario: Passing case
- **WHEN** product tiles are standard links that open in a new tab by middle click, and ordinary links open in the same tab
- **THEN** the usability skill does not flag this requirement

### Requirement: Informative page title for tabs [N43R]
The usability skill SHALL check that each page title starts with the words that tell the page apart from others because a crowded tab bar shows only the first few characters, the site has a clean favicon, and the title is not swapped for an attention-seeking message when the user switches to another tab. This requirement is distinct from `V09`, which concerns whether a disoriented user can answer the orientation questions of a deep page, not what the browser tab shows. It SHALL NOT apply to titles in an app without browser tabs; the number of tabs a user keeps open is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** every product page title starts with the shop name and the title changes to Come back to us when the tab loses focus
- **THEN** the usability skill flags that the first words do not tell pages apart and the title changes

#### Scenario: Passing case
- **WHEN** every product page title starts with the product name and keeps its title when the tab loses focus
- **THEN** the usability skill does not flag this requirement

### Requirement: Related links directly below the article [N44R]
The usability skill SHALL check that A content page ends with a short set of links to related content placed immediately below the article body, with no large gap or unrelated element between them, written with front-loaded keywords and not styled like advertising or mixed with ads in a side rail, as reported by Nielsen Norman Group, Loranger, "Related Content Boosts Pageviews, When Done Right" (2014). This requirement is distinct from `N18R`, which places contextual links inline within the body text, not a related-content set at the end of the page. It SHALL NOT apply to pages that are not articles or that end in a required next step, and relevance of the links to the article SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** an article ends in a large white gap followed by a promotional banner, with related links in a right rail among ads
- **THEN** the usability skill flags the related-link placement

#### Scenario: Passing case
- **WHEN** a short list of related article links sits right under the last paragraph
- **THEN** the usability skill does not flag this requirement

### Requirement: Vertical menu items align to the reading-start edge [N45R]
The usability skill SHALL check that items in a vertical navigation menu align to the edge where reading starts (left in left-to-right languages, right in right-to-left languages), not to the opposite margin, so the eye moves down a straight line, as reported by Nielsen Norman Group, Nielsen, "Right-Justified Navigation Menus Impede Scannability" (2008). This requirement is distinct from `C10`, which keeps multi-line body paragraphs left-aligned, not navigation menus. It SHALL NOT apply to horizontal menus and menus in a different reading direction handled by the rule itself, and the reading direction of the page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a side menu is right-aligned, leaving a ragged left edge on its items
- **THEN** the usability skill flags the menu alignment

#### Scenario: Passing case
- **WHEN** the side menu is left-aligned in an English interface
- **THEN** the usability skill does not flag this requirement

### Requirement: Return path from subsites to the main site [N46R]
The usability skill SHALL check that every page of a subsite or microsite that has its own navigation includes a link back to the parent site's homepage, labelled with the parent's name or domain and placed at the left near the logo, visually secondary to the subsite's own navigation; the subsite also shows clearly that the user has left the main site. This requirement is distinct from `N16R`, which requires a breadcrumb and footer sitemap on deep-hierarchy sites and does not cover leaving a separate subsite. It SHALL NOT apply to single-site products with one navigation system, and a linked subsite that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a training subsite shares the parent's look and logo, links the logo to its own homepage and offers no link to the main site
- **THEN** the usability skill flags the missing return path to the parent site

#### Scenario: Passing case
- **WHEN** the subsite shows a quiet bar at the top left reading "Parent.org" on every page
- **THEN** the usability skill does not flag this requirement

### Requirement: Repeated choices across consecutive pages [N47R]
The usability skill SHALL check that each page in a path moves the user closer to the goal: a link does not lead to a page whose first required choice repeats the same decision with the same or a differently spelled label, and a shorter route is provided where pages were built in isolation. This requirement is distinct from `N09R`, which limits hierarchy depth to what task complexity needs, not the quality of each click along the path. It SHALL NOT apply to steps that narrow a choice by new criteria, and a page after the first click that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a link labelled "Find a Firehouse" opens a page whose first control is a link labelled "Find a fire house"
- **THEN** the usability skill flags the repeated choice

#### Scenario: Passing case
- **WHEN** the link opens the firehouse search directly
- **THEN** the usability skill does not flag this requirement

### Requirement: Category images are readable without the label [N48R]
The usability skill SHALL check that images or icons that stand for navigation categories are recognisable without their text label: simple outline icons are preferred to detailed photos, a category photo shows the category's typical item and not one detail, and the image alone passes a check in which users say what they expect behind it. This follows Nielsen Norman Group, Khilare and Moran, "Imagery Helps International Shoppers Navigate Ecommerce Sites" (2020). This requirement is distinct from `N08R`, which limits icon-only navigation to familiar symbols or labelled icons, not the recognisability of category tiles and photos. It SHALL NOT apply to category images used only as decoration beside a label users read, and how users read the image SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a Dining Sets tile shows one styled room photo that could stand for chairs, decor or tables
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** a Dining Sets tile uses a simple outline icon of a table with chairs
- **THEN** the usability skill does not flag this requirement

### Requirement: Cross-channel links land on the promised state and let users resume [N49R]
The usability skill SHALL check that a link, QR code or message that sends the user to another channel or device opens the specific page or state it promised (the registration page, the product, the saved project, the app store listing for the scanning device) in a layout built for the receiving device and with the details the user chose, with equivalent content on a mobile-friendly page where the user lacks the app; a task that users commonly start on one device and finish on another (directions, a saved project, a long form, a cart) offers a way to resume without redoing work, such as sign-in sync, an emailed or texted link, a code or a saved list. This requirement is distinct from N17R, which carries a scoping rule from one device to another, and N05R, which preserves state when the user leaves and returns to the same app. It SHALL NOT apply to links within one channel and to tasks completed in one short sitting, and the destination page and users' cross-device behaviour SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a QR code on a shoe that leads to the site homepage, and a long insurance form that saves nothing and offers no link or code to continue on a phone
- **THEN** the usability skill flags the generic handoff target and the missing resume path

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a QR code that opens the store listing for the scanning device, and a form that offers Email me a link to continue, which reopens the saved form
- **THEN** the usability skill does not flag this requirement

### Requirement: QR code states where it leads [N50R]
The usability skill SHALL check that A QR code carries a brief label as visible as the code that says what scanning does and where it leads; the URL is shown beside the code when awareness of the site matters or desktop users may need it, and any required scanning app or device is named, as reported by Nielsen Norman Group, Kohler, "QR-Code Usability Guidelines" (2024). This requirement is distinct from `N08R`, which limits icon-only navigation to familiar symbols or adds labels, not labelling scannable codes. It SHALL NOT apply to codes that are shown only to a scanner (a boarding pass) and not meant to be chosen by the user, and the code destination SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a bare QR code is printed on the bottom of a mug with only a logo beside it
- **THEN** the usability skill flags the QR code

#### Scenario: Passing case
- **WHEN** a street sign pairs the code with Scan to donate to local housing and a short URL
- **THEN** the usability skill does not flag this requirement

### Requirement: Accelerators for repeated actions [IE15]
The usability skill SHALL check that a product used repeatedly offers an accelerator (keyboard shortcut, gesture, bulk action) for its most frequent actions as an additional route, so the same task stays possible without it; shortcuts are shown inline next to the command in a different style from its label, do not override common shortcuts such as copy and paste, and give feedback and undo after use. This requirement is distinct from `P04`, which keeps common tasks efficient and discloses advanced options progressively, and does not require a faster second route for frequent actions. It SHALL NOT apply to products used once or rarely, such as a one-time checkout, and the frequency of use when the reviewed evidence does not show it SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a daily-use inbox archives and deletes only through a menu, with no shortcut or swipe, and a custom shortcut replaces the browser's select all
- **THEN** the usability skill flags the missing accelerator and the overridden shortcut

#### Scenario: Passing case
- **WHEN** the inbox adds a swipe to archive with an undo snackbar and lists shortcuts right-aligned in the menu
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile overlay offers visible Close and honours system Back [N51R]
The usability skill SHALL check that every mobile overlay, including a bottom sheet, can be dismissed with a visible Close control and with the system Back button or Back gesture, and does not rely on a swipe-down grab handle alone; the overlay shows one Close control, and a Back action closes only the top overlay and returns to the previous view without losing the user's work. This requirement is distinct from N31R, which concerns the browser history entry that a web overlay adds, and N25R, which concerns the anatomy of an iOS sheet. It SHALL NOT apply to a system dialog or an alert whose own buttons are the only intended exit, and how the overlay behaves on devices the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a bottom sheet with a grab handle and no visible Close control, where the phone Back gesture leaves the whole screen instead of closing the sheet
- **THEN** the usability skill flags the missing visible Close control and the Back action that does not dismiss the overlay

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a bottom sheet with a visible X button at its top, where the system Back gesture also closes it and returns to the previous view
- **THEN** the usability skill does not flag this requirement

### Requirement: Key tasks stay reachable when navigation is hidden [N52R]
The usability skill SHALL check that when the main navigation sits behind a hamburger or Menu control on small screens, key tasks stay reachable without opening it: the homepage links to the main tasks or content areas, interior pages carry in-line and related links, search is visible, and the footer repeats the main navigation. This requirement is distinct from `N06R`, which concerns whether primary navigation is itself discoverable, not what else supports navigation when it stays hidden. It SHALL NOT apply to sites whose primary navigation is always visible, and pages that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a phone homepage shows a hero image and a hamburger icon only, and the footer holds legal links
- **THEN** the usability skill flags the missing fallback paths

#### Scenario: Passing case
- **WHEN** the phone homepage links to the three main tasks, shows a search box, and ends with the main navigation links
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile category lists versus image tiles [N53R]
The usability skill SHALL check that on mobile, a long or broad list of categories is a compact text list; image tiles are used for a short set of visually distinct or unfamiliar options, in a two-column grid with labels and images large enough to be recognised, not as tiny thumbnails beside list rows. NN/g's remote test found image grids made category pages many screens long, so users stopped early and missed options, while images helped where text labels were unfamiliar. This requirement is distinct from C65, which concerns the content of intermediary category pages in large catalogs, not list length and image size on mobile. It SHALL NOT apply to product listings, where large images are needed for comparison, and how many options users review on the reviewed site SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Mobile Navigation: Image Grids or Text Lists?" (2014).

#### Scenario: Failing case
- **WHEN** a phone category page shows 40 subcategories as full-width image tiles in a single column
- **THEN** the usability skill flags the long image-tile list

#### Scenario: Passing case
- **WHEN** the phone page lists 40 subcategories as text rows and shows a labelled two-column image grid for six visually distinct styles
- **THEN** the usability skill does not flag this requirement

### Requirement: Self-sufficient notifications and widgets [N54R]
The usability skill SHALL check that a notification or home-screen widget states the full idea in its own text without truncation so the user can act or decide without opening the app, offers the main action on the item where the platform allows it, and a tap opens the specific content the notification names and not the app home. This requirement is distinct from `PH02`, which concerns the goal and timing of a prompt, not whether its text and tap target are complete. It SHALL NOT apply to notification permission timing (see O08) and message volume; delivery behaviour the evidence does not show is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a delivery notification reads only that something arrived and a tap opens the app home
- **THEN** the usability skill flags that the text does not say what and the tap does not reach the item

#### Scenario: Passing case
- **WHEN** a delivery notification names the item and a tap opens that order
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile form action sits at the end of the form [F48]
The usability skill SHALL check that in a mobile form, the Submit or equivalent action (Sign In, Place Order, Save) sits after the last field, either at the end of the form or as a persistent bar at the bottom of the screen, and is not only a button in the top navigation bar, because users expect to finish a form at its end. This requirement is distinct from F13, which concerns the alignment of the primary button under the input column, not whether the button sits at the end of the form. It SHALL NOT apply to a short edit sheet with a few optional fields where the platform contract places Done in the navigation bar, and completion behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a checkout form whose Place Order button appears only in the top navigation bar while the last field ends the screen with nothing after it
- **THEN** the usability skill flags the Submit action placed away from the end of the form

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a checkout form with a Place Order button under the last field, or a sticky Place Order bar fixed at the bottom of the screen
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile filters shown over the results [D34]
The usability skill SHALL check that on mobile, the filter controls of a faceted search open as a panel over the results list, not on a separate screen, so the results stay partly visible and change as filters are applied; the total result count stays visible while the filter list scrolls, and the control that opens the filters is a text label such as Filter or Refine, not only a cryptic icon. This requirement is distinct from `D05`, which concerns showing the current filter selections, not whether results stay in view while filters are changed. It SHALL NOT apply to a desktop layout with filters beside the results; how fast the result count updates in a static design is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile results page opens filters on a full-screen page with no results visible, and the result count is only in the header of the results page
- **THEN** the usability skill flags that users must go back to see the effect of a filter

#### Scenario: Passing case
- **WHEN** a mobile results page opens a panel with a fixed result count over a dimmed results list, opened by a Filter label
- **THEN** the usability skill does not flag this requirement

### Requirement: Location results on mobile [D35]
The usability skill SHALL check that a mobile location finder shows its results as a list with the distance to each location as the default view; an embedded map on the results page is optional, is offered as a toggle, leaves side gutters or a hide-map link so the page can still be scrolled, and does not crowd markers closer than a finger can select. This requirement is distinct from `D22`, which concerns showing why a search result matches the query, not the form of a location results page. It SHALL NOT apply to a map on the detail page of one location or in a directions view, where the evidence does not show problems; map speed on a slow network is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile store-finder results page shows a full-width map above the fold with dense overlapping pins and no list or hide link
- **THEN** the usability skill flags that users cannot scroll past the map or select a pin

#### Scenario: Passing case
- **WHEN** a mobile store-finder results page opens with a list that shows distances and offers a Map toggle
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile carousel length and access [T10]
The usability skill SHALL check that a carousel on a touch screen lets users reach its last item in a few swipes or taps, orders its items by priority, groups items that relate to each other so the first item predicts the rest, and does not hold content users must see, which is also reachable by another path. This requirement is distinct from `PA20`, which concerns auto-rotation and swipe control of a homepage carousel, not how many steps the carousel needs or whether its content is reachable elsewhere. It SHALL NOT apply to a list view that lets users open any item directly; swipe behaviour that a static design does not show is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile screen shows a hero carousel of many single-item pages with unrelated items, and the only link to the key offer sits inside the carousel
- **THEN** the usability skill flags that carousel items are unrelated and the key offer has no other path

#### Scenario: Passing case
- **WHEN** a mobile screen shows a short carousel of related items ordered by priority, and the key offer is also linked from the page body
- **THEN** the usability skill does not flag this requirement

### Requirement: Dark appearance follows the system and keeps surfaces and assets distinct [L10]
The usability skill SHALL check that a product that offers a dark appearance follows the device setting by default, with an in-app theme choice as an override; in dark appearance, cards, dividers, floating buttons and modal scrims stay distinguishable from the page behind them (a lighter surface tone, not only a thin outline or shadow), text avoids very thin or heavy weights and saturated colours, graphics and logos have transparent backgrounds that keep every part visible, and QR codes and barcodes keep a dark foreground on a light background. The rule applies on every platform, desktop web included. This requirement is distinct from L05, which concerns legibility across appearances, and L09, which concerns iOS Dark Mode base and elevated colours and bright image backgrounds. It SHALL NOT apply to light-only designs, to photographs, which keep their own background, and, for the device-setting clause, to products built only in a dark appearance, and contrast values that need measuring, the run-time setting behaviour and scanner behaviour on a given device SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows an app whose theme setting defaults to Light on a device set to dark, a card with a thin grey outline that blends into a black page, an illustration with a white box behind it and an inverted QR code
- **THEN** the usability skill flags the default, the lost separation and the assets

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a theme setting with System selected by default, cards on a lighter surface tone, a visible scrim, a transparent illustration and a QR code that stays dark on light
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile ads avoid false floors and content displacement [L11]
The usability skill SHALL check that on a mobile page that carries advertising, ads do not push the main content below the first screen (no stacked top ads, no app-install banner above a large ad) and do not sit where they read as the end of the page, such as large ads inside content after a block that looks like a conclusion; an ad is placed at the real end of content or in a sticky container at the screen bottom. This requirement is distinct from O15, which concerns a full-screen install interstitial that blocks content, not the size and position of ads in the content flow. It SHALL NOT apply to a page with no third-party or house advertising, and ad revenue limits and how the page behaves at other viewport sizes the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a mobile article page with an app-install banner, a banner ad and a tall site header so only the title shows at load, and a large ad below a related-links block that looks like the page end
- **THEN** the usability skill flags the stacked top ads and the ad that signals a false floor

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a mobile article page that opens on the article text, with one sticky ad container at the screen bottom and an inline ad only at the true end
- **THEN** the usability skill does not flag this requirement

### Requirement: Images are adapted for small screens [L12]
The usability skill SHALL check that on a narrow viewport each image earns its space: an image that is unclear at the smaller size, loses meaning when cropped, is covered by its overlay text, or only adds scrolling is removed, re-cropped to its key detail or resized; text laid over an image moves below or beside it when the crop would cover the subject, and image-and-text grids stack so each image stays next to its own text. This requirement is distinct from X25, which concerns contrast of text over an image, not whether the image fits the small screen. It SHALL NOT apply to a desktop-only layout, and how the images are cropped in the production build the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a hero image whose headline covers the speaker's face on a phone, and a stacked grid that separates each picture from its caption
- **THEN** the usability skill flags the image that is covered, cropped to meaninglessness or adds only scrolling

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a phone layout that crops the hero to the speaker and puts the headline below it, with each picture placed directly above its own text
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile first screen focus [L13]
The usability skill SHALL check that on mobile, the first screen of a content page or offer carries only the essential points, filler copy is cut, and background detail sits behind an explicit expand control or a secondary screen, with an outline of the deferred sections where there are several. This requirement is distinct from `P04`, which concerns disclosing advanced or rare options progressively, not trimming content copy to the essential points on the first mobile screen. It SHALL NOT apply to reference pages that users open to read in full, such as legal terms, and which content users consider essential SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Defer Secondary Content When Writing for Mobile Users" (2011); Nielsen, "Mobile Content: If in Doubt, Leave It Out" (2011).

#### Scenario: Failing case
- **WHEN** A mobile deal page opens with stock photos and a long block of terms before the offer and the buy button
- **THEN** the usability skill flags the unfocused first screen

#### Scenario: Passing case
- **WHEN** A mobile deal page opens with the offer in short bullets and a More about this deal link for details
- **THEN** the usability skill does not flag this requirement

### Requirement: Pinned headers in mobile tables [L14]
The usability skill SHALL check that a data or comparison table that exceeds one mobile screen keeps its column headings pinned while the user scrolls down, and a table that scrolls sideways keeps its row-heading column pinned; column width keeps entries legible without zoom, and the table does not require the user to rotate the phone. This requirement is distinct from `C62`, which concerns sticky headings in a product comparison feature and expressly leaves mobile comparison quality unassessed. It SHALL NOT apply to a table that fits one screen without scroll; a table in a static image that shows no scroll state is `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile spec table scrolls in both directions and its headings scroll out of view, so values lose their labels
- **THEN** the usability skill flags that headings and row labels are not pinned

#### Scenario: Passing case
- **WHEN** a mobile spec table keeps the product names in a pinned header row and the attribute names in a pinned first column
- **THEN** the usability skill does not flag this requirement

### Requirement: No horizontal scrolling of web pages [L15]
The usability skill SHALL check that A web page scrolls in one direction only: page content fits the viewport width at every window size through a liquid or responsive layout, so users never need horizontal scrolling to read it, as reported by Nielsen Norman Group, Nielsen, "Scrolling and Scrollbars" (2005); Nielsen, "Screen Resolution and Page Layout" (2006). This requirement is distinct from `L06`, which requires layouts to survive rotation and resizing on mobile without losing task continuity, but not that page width stays within the viewport. It SHALL NOT apply to deliberate carousels, wide data tables and maps inside a bounded region that show a cut-off edge as a cue, and behaviour at other window sizes SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile page is wider than the screen so the user must pan sideways to read each line
- **THEN** the usability skill flags the horizontal scrolling

#### Scenario: Passing case
- **WHEN** page text reflows to the viewport width and only a product carousel scrolls sideways with a cut-off edge
- **THEN** the usability skill does not flag this requirement

### Requirement: Pages do not look finished before their content ends [VH05]
The usability skill SHALL check that a page does not give the impression of ending before its content does: a full-screen hero image or video is followed by a visible sliver of the next section or another cue that invites scrolling, and full-width rules, wide empty gaps, fade-in sections and large ad or promo blocks do not sit where the user would read them as the end of the page. NN/g observed most test users in one study never scrolling past a full-screen hero. This requirement is distinct from PA12, which concerns auto-rotating carousels that hide content, D10, which chooses between infinite scroll and Load more, and L11, which concerns ad placement on mobile pages. It SHALL NOT apply to a page that is genuinely one screen long and to a single-purpose search or sign-in screen, and where the fold falls on the user's device and what lies below the captured area SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a full-screen hero video with a Get started button that ends exactly at the fold, followed by a wide white band, with nothing of the next section visible
- **THEN** the usability skill flags the false floor

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a hero shorter than the screen, so the heading and first lines of the next section are visible at the bottom of the first screen
- **THEN** the usability skill does not flag this requirement

### Requirement: Sideways-scrolling content shows that more exists [VH06]
The usability skill SHALL check that content that continues sideways (a carousel, filmstrip, swipe deck or wide table) shows a persistent cue inside the content area that more exists: a partly visible next item, arrow controls visible without hover, and a position or count indicator; small or faint dots alone and hover-only arrows do not count, an arrow, dot or other control placed over an image keeps enough contrast to be seen, and dots sit centred directly below the content they control and not on a busy image. Page-control dots or a swipe are not the only way to reach key content or features (a link, tab or list also leads there), and on desktop essential content is not reachable only by sideways scrolling or swiping. This requirement is distinct from PA12 and PA20, which concern reliance on carousels and their auto-rotation, C37 and C45, which concern colour-swatch rows and product-image thumbnails, and T10, which concerns how many swipes a mobile carousel needs. It SHALL NOT apply to short rows that fit fully in view and to decorative galleries whose images carry no task content, and whether users reach the later items in real use and contrast under real glare SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a full-width carousel with only small low-contrast dots over a busy photo and hover-only arrows, and an app that reaches its Watchlist and Holdings views only by swiping between those dots
- **THEN** the usability skill flags the weak continuation cues and the dots as the only route to the extra views

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows the next card partly visible at the edge, arrows and a 1 of 6 count always visible, high-contrast dots centred under the carousel, and the same views also reachable from a tab bar
- **THEN** the usability skill does not flag this requirement

### Requirement: Primary task over hero imagery [VH07]
The usability skill SHALL check that a large hero image or video does not push the page's primary task entry (search, booking, the main call to action) below the first screen or reduce it to a low-contrast outline on the image; the primary task keeps at least the visual weight of the image. NN/g contrasted a redesign that hid flight search below a landscape image with the earlier layout and with a mobile page whose actions matched the image in emphasis. This requirement is distinct from A01R, which concerns a clear primary action on each screen in general, and from PA04, which concerns deliberate emphasis, not an image dominating the first screen. It SHALL NOT apply to pages whose single task is browsing images, or to search-only pages where the search box already stands out, and how the page renders on other viewports SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Whitenton, "Image-Focused Design: Is Bigger Better?" (2014); Nielsen Norman Group, Wang, "Homepage Design: 5 Fundamental Principles" (2024).

#### Scenario: Failing case
- **WHEN** a landscape hero fills the first screen and the flight search sits two screens lower under an outline button
- **THEN** the usability skill flags the buried primary task

#### Scenario: Passing case
- **WHEN** the search form sits on the hero in a solid high-contrast panel
- **THEN** the usability skill does not flag this requirement

### Requirement: Subheadings are distinct and describe only their section [VH08]
The usability skill SHALL check that subheadings are consistently styled to stand out from body text without resembling ads, each describes all and only its section, and chunks in card layouts are grouped by proximity with labels; the source is NN/g eyetracking research on the layer-cake scanning pattern. This requirement is distinct from `VH04`, which requires the space above a heading to exceed the space below it, and does not check how a heading is styled or whether its wording matches its section. It SHALL NOT apply to pages with very little text and single-block messages, and users' actual eye movements SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** an article has long unbroken columns of text with no subheadings, or subheadings in the body typeface and size
- **THEN** the usability skill flags the weak subheadings

#### Scenario: Passing case
- **WHEN** subheadings are larger and bold, each names only its section, and card labels sit above their own cards
- **THEN** the usability skill does not flag this requirement

### Requirement: List indicators differ by icon and color [VH09]
The usability skill SHALL check that when a list marks items that differ in one attribute (new and on sale, up and down, open and closed), each indicator type differs from the others in both an icon or shape and a colour, not in its text label alone; where only one cue fits, an icon with a clear meaning is preferred to colour alone. This follows Nielsen Norman Group, Harley, "Visual Indicators to Differentiate Items in a List" (2016). This requirement is distinct from `X02`, which requires a non-colour cue so that colour is not the only channel, not a cue that speeds up finding marked items in a list. It SHALL NOT apply to a list that uses one indicator type only, and how fast users find marked items on the live page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product list marks Sale and New items with two text tags of the same style and colour
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** Sale items carry a red tag icon and New items carry a green star icon
- **THEN** the usability skill does not flag this requirement

### Requirement: Decorative images stay aligned down the page [VH10]
The usability skill SHALL check that decorative images in a repeated image-and-text list sit on the same side down the page; alternating image sides (a zigzag) is used only where the images carry information users need or the list has only a few rows; images that contain text or dense detail are not placed where they compete with the text beside them. This follows Nielsen Norman Group, Flaherty, "Zigzag Image–Text Layouts Make Scanning Less Efficient" (2017). This requirement is distinct from `VH03`, which concerns removing decoration that competes with content, not where kept images sit in a list. It SHALL NOT apply to informative images such as product photos and explanatory diagrams, and how users scan the live page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a how-it-works page alternates stock-photo sides over six rows
- **THEN** the usability skill flags this requirement

#### Scenario: Passing case
- **WHEN** the same page keeps the stock photos on one side or limits the zigzag to two or three rows
- **THEN** the usability skill does not flag this requirement

### Requirement: Hover menus stay shallow and easy to steer [N55R]
The usability skill SHALL check that a navigation drop-down shows at most two tiers, and a larger set of destinations uses a mega menu or routing pages with further options, not cascading fly-out menus nested three or more deep; a menu that opens on hover keeps its lists short and its items tall enough that the pointer path to a submenu is short and wide. This requirement is distinct from N14R, which concerns the order of items in a dropdown or mega menu, N09R, which limits hierarchy depth to the task in general, and N56R, which concerns the timing of hover open and close. It SHALL NOT apply to touch-only interfaces and to desktop application menu bars governed by platform conventions, and pointer behaviour in a static design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a site menu that opens a fly-out of a fly-out of a third fly-out with thin rows
- **THEN** the usability skill flags the three-level cascade and the narrow pointer path

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows a mega menu with two tiers in one panel and a landing page for deeper levels
- **THEN** the usability skill does not flag this requirement

### Requirement: Hover-revealed content waits for intent [N56R]
The usability skill SHALL check that content revealed by mouse hover (a mega menu, quick view, expanding panel or tooltip) appears after the pointer pauses on the trigger and not when it only passes over it, gives visual feedback that the trigger is interactive at once, and stays open briefly after the pointer leaves so a diagonal path toward the revealed content does not close it; the more of the page the revealed content covers, the stronger the intent signal required. This requirement is distinct from `X17`, which requires a touch or keyboard equivalent for hover-only content, and does not cover the timing of the hover reveal. It SHALL NOT apply to content opened by click or tap, and an open or close delay that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the code opens a full-width mega menu on mouseenter with no delay and closes it on mouseleave with no delay
- **THEN** the usability skill flags the instant open and the instant close

#### Scenario: Passing case
- **WHEN** the menu opens after the pointer rests on the trigger for a short pause and tolerates a diagonal move into the submenu
- **THEN** the usability skill does not flag this requirement

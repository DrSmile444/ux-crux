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

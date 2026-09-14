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

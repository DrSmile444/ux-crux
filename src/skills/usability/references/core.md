# Usability: task flow, interaction, forms, status, errors, search, efficiency

Platform-agnostic. See `../../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. Platform-specific (iOS/Android) usability rules live in `mobile.md`.

## Actions

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| A01R | Each screen has a visually clear primary action when the task has a clear next step; secondary actions receive less emphasis. | Strong | Major | Apple HIG Buttons; Android Layouts and navigation patterns |
| A02R | Button labels describe the action, preferably with concise verbs; avoid vague labels such as "OK" when a specific action is possible. | Strong | Moderate | Apple HIG Buttons, Writing; NN/g Confirmation Dialogs Can Prevent User Errors |
| A03R | Custom controls have visible pressed/active/disabled/selected states so interaction never feels ambiguous. | Strong | Major | Apple HIG Buttons, Feedback; NN/g Ten Usability Heuristics |
| A04R | Routine reversible destructive actions prefer Undo/recovery over repetitive confirmation dialogs. | Strong | Moderate | Apple HIG Alerts; NN/g Confirmation Dialogs, Using Swipe to Trigger Contextual Actions; Android Snackbar |
| A05R | Irreversible/high-cost destructive actions use a specific confirmation that explains the consequence and names the object/action. | Strong | Blocker | Apple HIG Alerts, Action sheets; NN/g Confirmation Dialogs |
| A06R | Confirmation choices state outcomes instead of generic Yes/No where possible. | Strong | Moderate | NN/g Confirmation Dialogs; Apple HIG Writing |
| A07R | Alerts/dialogs are reserved for interruption-worthy information or a narrowly scoped task; low-priority feedback stays in context. | Strong | Major | Apple HIG Alerts, Modality, Feedback; Android Snackbar, Dialog |
| A08R | A control that appears interactive is actually interactive, and a disabled control is visually distinguishable and not the only explanation of unmet prerequisites. | Strong | Moderate | NN/g Ten Usability Heuristics; Apple HIG Feedback |

### Confirmation-dialogue simplification technique

When an A05R or A06R finding flags a confirmation dialog whose title, body copy, and button labels are misaligned, apply this refinement sequence rather than editing the wording ad hoc:

1. **Extract the discrete facts** the dialog currently states (what will happen, what conditions apply, what is reversible or not).
2. **Prioritize destructive/irreversible consequences first** — move the most consequential fact to the top; secondary details follow.
3. **Phrase the title as a direct question** rather than a statement or label (for example "Limit sharing to domain users?" instead of "Sharing settings").
4. **Align the button labels to literally answer that question** (for example "Yes"/"No") instead of generic or jargon verbs ("Enable"/"Cancel") that do not restate the question's answer.
5. **Strip jargon and redundant technical explanation** the buttons or title already made clear.

This is a technique for satisfying A05R (specific, consequence-naming confirmation) and A06R (outcome-stating choices), not a separate rule competing with them — a dialog can fail A05R/A06R without this sequence being the right fix (for example if the real problem is that no confirmation was needed at all, per A04R).

## Forms & input

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| F01 | Persistent labels identify fields; placeholder text is not the only label. | Strong | Major | Apple HIG Text fields; NN/g Placeholders in Form Fields Are Harmful; Baymard mobile checkout forms, form design best practices |
| F02 | Fields request only information needed for the current task; seemingly unnecessary personal data is explained. | Strong | Major | Apple HIG Privacy; Baymard mobile checkout forms; NN/g Checklist for Registration and Login |
| F03 | Previously entered information is not requested again in the same process unless essential/security-related; reuse or offer selection. | Accessibility | Major | WCAG 2.2 Redundant Entry (SC 3.3.7) |
| F04 | The correct keyboard/input mode, autocorrect, autocapitalization, and autocomplete behavior is used for each field. | Strong | Moderate | Baymard mobile checkout forms, Touch Keyboard Types Cheat Sheet |
| F05 | Natural user input formats are accepted when safely parseable; formatting does not create avoidable validation errors. | Strong | Moderate | Baymard Ecommerce Checkout UX Guide |
| F06 | Formatting examples, constraints, and unusual requirements appear before or during input, not only after failure. | Strong | Moderate | Baymard mobile checkout forms; NN/g Checklist for Registration and Login; Apple HIG Writing |
| F07 | Validation errors appear next to the source, remain visible, use plain language, and explain how to fix the problem. | Accessibility | Major | WCAG 2.2 Error Suggestion (SC 3.3.3); NN/g Error-Message Guidelines; Apple HIG Writing; Baymard Ecommerce Checkout UX Guide |
| F08 | Submitting a form with errors preserves all valid user input and moves/announces focus to actionable errors. | Strong | Blocker | NN/g Error-Message Guidelines; Baymard Ecommerce Checkout UX Guide; WCAG 2.2 Focus Not Obscured (SC 2.4.11) |
| F09 | Required/optional status is unambiguous and consistent throughout the flow. | Strong | Moderate | Baymard mobile checkout forms, form design best practices |
| F10 | Password/authentication flows support password managers/autofill or another non-memory-only method; avoid unnecessary cognitive tests. | Accessibility | Major | WCAG 2.2 Accessible Authentication Minimum (SC 3.3.8); NN/g Checklist for Registration and Login |
| F11 | Password creation requirements are disclosed before submission; users can reveal the entered password when appropriate. | Strong | Moderate | NN/g Checklist for Registration and Login |
| F12 | Form layout remains understandable with the software keyboard open and at large text sizes. | Strong | Major | Baymard mobile checkout forms; Apple HIG Accessibility; Android Grids and units |
| F13 | The primary action button (e.g. "Next"/"Submit") is aligned under the left edge of the input-field column; "Previous"/"Back" is placed to the left of "Next"/"Continue". | Strong | Moderate | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |
| F14 | Field labels are positioned directly above their input box (top-aligned); if a label must be left-aligned instead, it is kept tight against the field rather than separated by wide whitespace. | Strong | Moderate | Matteo Penzo, "Label Placement in Forms" (UXmatters, 2006); Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |
| F15 | Illustration or example graphics placed next to an input field do not show realistic, copyable sample data (e.g. a legible sample ID number); obscure or abstract example content instead. | Strong | Moderate | Baymard checkout/form design research; Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |
| F16 | Distinct questions are arranged in a single vertical column, never side-by-side in separate columns, since users routinely miss an entire column of questions; a double-banked (two-column) layout is reserved for grouping answer *choices* within one question, not for separate questions. | Strong | Major | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |
| F17 | Multi-step forms show previously entered key data (e.g. a selected date/time or location) as a persistent summary on later steps, rather than requiring the user to recall or navigate back to check it. | Strong | Moderate | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |

## System status

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| S01 | Every user action that changes state gets perceivable feedback quickly enough that the interface does not feel dead. | Strong | Major | NN/g Ten Usability Heuristics, Website Response Times; Apple HIG Feedback |
| S02 | Custom buttons/controls show an immediate pressed state even if the underlying operation takes longer. | Strong | Moderate | Apple HIG Buttons, Feedback |
| S03 | Loading screens show useful structure/content as soon as possible instead of leaving a blank screen. | Strong | Moderate | Apple HIG Loading; NN/g Designing Empty States |
| S04 | Known progress uses determinate progress when practical; unknown-duration work uses an indeterminate indicator plus meaningful status when the wait is significant. | Strong | Moderate | Android Progress indicators; Apple HIG Loading |
| S05 | Long work does not unnecessarily block the rest of the app; allow background work or other tasks when safe. | Strong | Moderate | Apple HIG Loading |
| S06 | Empty, loading, no-results, offline, permission-denied, and error states are designed as distinct states rather than one generic blank screen. | Strong | Major | NN/g Designing Empty States; Apple HIG Writing; Android Snackbar |
| S07 | Empty/no-results states explain what happened and give a relevant next step, adjustment, or recovery action. | Strong | Moderate | NN/g Designing Empty States; Apple HIG Writing |
| S08 | Important completion feedback is explicit; trivial successful actions do not generate noisy confirmations. | Strong | Moderate | Apple HIG Feedback |
| S09 | Transient messages are not the sole carrier of essential information for users who may need more time or assistive technology. | Accessibility | Major | Apple HIG Accessibility |
| S10 | Network or backend failure keeps recoverable user work, explains the state, and exposes retry/recovery rather than silently failing. | Strong | Blocker | NN/g Ten Usability Heuristics, Error-Message Guidelines; Android Snackbar |

## Errors & recovery

Note: destructive-action confirmation wording and discard-on-cancel protection are covered in the `trust` skill's references (they are trust/safety concerns), not duplicated here.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| E01 | Prevent predictable high-cost errors through constraints, good defaults, previews, and validation before relying on error messages. | Strong | Major | NN/g Ten Usability Heuristics |
| E02 | Error copy identifies the actual problem in user language; generic "Something went wrong" is reserved for genuinely unknown failures and still offers recovery. | Strong | Major | NN/g Error-Message Guidelines; Apple HIG Writing |
| E03 | Errors do not blame the user, expose irrelevant technical codes, or use cute language that obscures the fix. | Strong | Moderate | NN/g Error-Message Guidelines; Apple HIG Writing |
| E04 | The user can recover without redoing unrelated work. | Strong | Blocker | NN/g Ten Usability Heuristics; Apple HIG Design principles |
| E06 | Retry behavior is idempotent or otherwise protected from duplicate submissions/purchases where repeated taps are plausible. | Engineering-informed UX | Blocker | NN/g Ten Usability Heuristics; Apple HIG Feedback |

## Search, discovery & comparison

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| D01 | If search is a core task, it receives a primary, easy-to-find position rather than being buried. | Strong | Major | Apple HIG Searching |
| D02 | The current search scope is visible; users know what collection or section is being searched. | Strong | Moderate | Apple HIG Searching |
| D03 | Search reduces typing with useful suggestions, recent queries, completions, or corrections when privacy permits. | Strong | Moderate | Apple HIG Searching |
| D04 | No-results states distinguish "no data exists" from "filters/query excluded results" and offer meaningful recovery. | Strong | Moderate | NN/g Designing Empty States; Apple HIG Searching |
| D05 | Frequently used filters/sorts expose current selections and avoid forcing users to remember hidden state. | Strong | Moderate | NN/g Ten Usability Heuristics; Baymard mobile e-commerce UX research |
| D06 | When a list of options must be compared (e.g. price and schedule, spec and cost), keep the compared parameters in tight horizontal proximity rather than spreading them across the full page width; wide separation forces long, repetitive back-and-forth saccades that increase comparison effort and hesitation. | Strong | Major | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) (KLM flight-search redesign case) |

## Responsiveness

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| R01R | Use the classic 0.1s/1s/10s thresholds as a heuristic for perceived response, not as a universal SLA. | Heuristic | Moderate | NN/g Website Response Times |
| R02R | If work cannot finish immediately, provide feedback before users interpret the UI as frozen. | Strong | Major | Apple HIG Loading, Feedback; Android Progress indicators; NN/g Website Response Times |
| R03R | Long waits expose progress/status and, where safe, let users continue other work. | Strong | Moderate | Apple HIG Loading; Android Progress indicators |
| R04R | Avoid layout shifts or late-loading controls that cause accidental taps or move the user's target. | Strong | Major | NN/g Ten Usability Heuristics |
| R05R | Repeated taps on a slow CTA cannot accidentally trigger duplicate irreversible operations. | Engineering-informed UX | Blocker | Apple HIG Feedback; NN/g Ten Usability Heuristics |
| R06R | A sustained system response time under roughly 400ms keeps users in an uninterrupted task flow; this is a distinct research finding from R01R's general 0.1s/1s/10s perceptual thresholds — treat the two as separate evidence, not interchangeable numbers for the same claim. | Research principle | Moderate | Doherty & Thadani, "The Economic Value of Rapid Response Time" (1982) |

## Navigation (platform-agnostic principles)

Platform-specific navigation contracts (tab bars, back behavior, safe areas, foldables) are in `mobile.md`.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| N01R | Top-level destinations are few, stable, mutually meaningful, and consistently located. | Strong | Major | Apple HIG Tab bars; Android Layouts and navigation patterns, Navigation bar; NN/g Ten Usability Heuristics |
| N06R | Primary navigation is discoverable. Hiding high-frequency destinations behind an unlabeled menu requires a concrete reason. | Strong | Major | NN/g How to Make Navigation (Even a Hamburger) Discoverable on Mobile, Mobile UX Study Guide |
| N07R | Navigation labels use user language and stable terminology; identical concepts are not renamed across screens. | Strong | Moderate | NN/g Ten Usability Heuristics; Apple HIG Writing |
| N08R | Icon-only navigation/actions are limited to highly familiar symbols or supplemented with labels/accessibility names. | Strong | Moderate | Apple HIG Buttons, Gestures; Android accessibility principles |
| N09R | Hierarchy is not deeper than task complexity requires; users receive enough context to know where they are. | Strong | Moderate | NN/g Ten Usability Heuristics, Mobile UX Study Guide |
| N13R | Utility navigation (Contact, Help, Cart, Sign-in/Account) is placed in the standard top-right header or footer location; avoid sidebars or mid-page body placement, where users take much longer to find it. | Strong | Moderate | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |
| N14R | Dynamic dropdown/mega-menu items are ordered by priority: the most critical items at the very top (1-2 positions), the next-most-critical at the bottom, and lower-priority items in the middle — matching the sweep-then-top-then-bottom-then-middle order users actually scan in, rather than a random or purely alphabetical order for short, non-alphabetic-lookup lists. | Strong | Moderate | Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) |

## Interaction efficiency (general principles)

Focus-management rules that depend on platform APIs (Android `FocusRequester`, `SoftwareKeyboardController`, Apple focus-and-selection semantics) are in `mobile.md`, alongside the search-autofocus worked example.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| IE01 | When a user explicitly invokes an input-oriented action (for example Search, Add comment, Enter code) and the UI reveals the intended text field, make text entry immediately ready — normally focus the field and show the software keyboard on mobile. | Strong | Major | NN/g Interaction Cost: Definition, Less Effort More Completion (EAS Framework); Android focus/keyboard APIs; Apple HIG Focus and selection |
| IE02 | Do not require a second tap merely to activate the input that was unambiguously requested by the previous tap. | Strong | Major | NN/g Interaction Cost, Direct Access vs. Sequential Access, EAS Framework |
| IE06 | Evaluate efficiency as total physical + cognitive effort, not click count alone. | Strong | Major | NN/g Interaction Cost; Don't Prioritize Efficiency Over Expectations |
| IE07 | Apply EAS in order: eliminate unnecessary work, automate deterministic/reversible work, then simplify what remains. | Strong | Moderate | NN/g Less Effort, More Completion (EAS Framework) |
| IE08 | Prefer direct access for frequent, independently useful destinations/actions instead of forcing users through serial intermediate states that add no value. | Strong | Moderate | NN/g Direct Access vs. Sequential Access |
| IE09 | Do not remove a familiar step if the resulting automation makes system state ambiguous or violates a strong mental model; preserve visible status/control. | Strong | Major | NN/g Don't Prioritize Efficiency Over Expectations; Ten Usability Heuristics |
| IE10 | Preserve query/input and meaningful state when the keyboard is dismissed, the user temporarily leaves the app, or search mode changes, unless privacy/security requires clearing it. | Strong | Major | NN/g Interaction Cost; Android Core app quality guidelines |

## Folk-rule guards

These are the exact kinds of oversimplified rules a review is likely to hallucinate as absolutes unless explicitly constrained. Apply the "better encoding" instead of the folk rule.

| Folk rule | Better encoding |
|---|---|
| "Never use a hamburger menu." | Penalize hidden **primary/high-frequency** navigation when discoverability matters; allow it for secondary/large sets of destinations (see N06R). |
| "All primary actions must be at the bottom because of the thumb zone." | Consider reachability and frequency, but do not assume a single grip; thumb-zone reasoning is a heuristic, not a layout law (see `mobile.md` T07). |
| "Always show onboarding." | Default to no standalone onboarding; require it only when setup, unfamiliar mechanics, safety, or unavoidable conceptual complexity justify it (product-lens concern, see `product` skill). A modal instruction pop-up is a particularly weak substitute: an eye-tracking study of a tablet app found most users dismissed an instructional pop-up in well under a second of fixation, and all subsequently failed the custom-gesture task it was meant to teach (Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design*, 2014). |
| "Always confirm delete." | Prefer undo for routine reversible deletion (A04R); confirm serious, unusual, irreversible, expensive, or security-sensitive actions (A05R, and trust-lens destructive-action rules). |
| "Never use dialogs." | Use dialogs for truly interruptive, narrowly scoped tasks or critical decisions; avoid them for ordinary informational feedback (A07R). |
| "Always use a skeleton instead of a spinner." | Show useful structure/content early when it improves comprehension (S03); use determinate/indeterminate progress according to what is actually known (S04). |
| "Bottom navigation must always have exactly N items." | Use platform-specific guidance — see `mobile.md` N03R for Android's 3-5 destination target; iOS guidance focuses on top-level navigation semantics, not a fixed count. |
| "Disabled buttons are bad." | A disabled state can be valid, but prerequisites must be understandable and users must not be trapped without explanation (A08R). |
| "Swipe actions are bad." | Swipe can be an efficient shortcut for contextual actions, but must stay consistent, discoverable, and not the only access path to important functionality (see `mobile.md` T06). |
| "Animations are bad/good." | Motion must communicate state or continuity, remain responsive, and respect reduced-motion settings; decorative motion should not impede tasks. |
| "More steps are always worse." | A short staged flow can reduce complexity and errors; the cost depends on dependency between steps, frequency, and information needed for decisions (see `product` skill P03). |
| "Miller's Law means navigation/menus must cap out at 7 (or 5) visible items." | Miller's Law describes active working-memory retention (holding items in mind without looking), not recognition of options that stay visible on screen — it does not set a maximum count for always-visible navigation or menus. Apply semantic chunking instead (see `psychology` skill PC07), and only reduce the number of choices when decision complexity actually warrants it (Hick's Law, see this file's Actions/Forms sections and the `product` skill). |

## How the usability skill should apply these

Start from the primary task (handed off from, or checked alongside, the `product` lens), then work through state-completeness (System status, Errors & recovery — is every state in `evidence-model.md`'s sense actually shown or knowably absent?), then interaction efficiency (does every explicit user intent get continued without redundant taps?), then the folk-rule guard table before finalizing any finding that resembles a popular "always/never" rule. When the evidence includes a form, also check the layout-ergonomics rules (F13-F17: button alignment, label proximity, sample-data contamination, single-column question layout, cross-step memory); when it includes navigation menus, a dropdown/mega-menu, or a list of options to compare, check N13R-N14R and D06 alongside the rest of Navigation and Search/discovery. When a finding could be explained by either a genuine usability defect or a legitimate contextual exception (progressive disclosure, secondary navigation, a deliberately browse-first search state), report it with the appropriate `evidence-model.md` status and name the exception condition rather than asserting a defect outright. When an A05R/A06R finding involves a confirmation dialog whose title, body, and buttons are misaligned, recommend the Confirmation-dialogue simplification technique (in this file's Actions section) as the concrete fix rather than a generic "make this clearer" recommendation.

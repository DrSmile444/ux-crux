# Usability: mobile platform contracts (iOS / Android)

Mobile-specific addendum to `core.md`. See `../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. A web/desktop addendum may be added later without changing this file.

## Navigation (platform contracts)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| N02R | On iOS, a tab bar represents top-level navigation, not one-off actions. | Platform contract | Major | Apple HIG Tab bars |
| N03R | On compact Android, NavigationBar is used for roughly 3-5 equal-priority destinations; do not blindly copy the same navigation to large windows. | Platform contract | Moderate | Android Navigation bar, Layouts and navigation patterns, Adapt layouts |
| N04R | Back behavior follows platform expectations and returns to the logical previous state rather than inventing a custom meaning. | Platform contract | Major | Android Core app quality guidelines, system bars; Apple HIG Gestures |
| N05R | Leaving and returning to the app preserves the user's meaningful state and in-progress work where possible. | Platform contract | Major | Android Core app quality guidelines |
| N10R | Gestures may accelerate navigation but do not become the only path to an important destination/action. | Strong | Major | Apple HIG Gestures, Accessibility; WCAG 2.2 Dragging Movements (SC 2.5.7) |
| N11R | Critical controls are not placed under system gesture areas, cutouts, or unsafe insets. | Platform contract | Major | Android system bars, Edge-to-edge design; Apple HIG Layout |
| N12R | Large screens/foldables adapt navigation and information architecture rather than simply stretching a phone layout. | Platform contract | Moderate | Android Adapt layouts, Canonical layouts, Layouts and navigation patterns |

## Touch & ergonomics (gesture and thumb-zone heuristics)

Target size, spacing, and dragging-alternative requirements are accessibility concerns and live in the `accessibility` skill's references, not here.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| T06 | Custom gestures are discoverable, consistent, and supplementary to standard interactions. | Strong | Major | Apple HIG Gestures; NN/g Using Swipe to Trigger Contextual Actions |
| T07 | Do not hard-code a universal "thumb zone". Reachability is considered, but layouts are tested with different grips, hands, device sizes, and contexts. | Contextual | Moderate | Microsoft Research Target Size Study for One-Handed Thumb Use; UXmatters How Do Users Really Hold Mobile Devices?; Apple HIG Designing for iOS |
| T08 | Frequent/high-value actions should not require precision at the screen edge where system gestures or grip changes increase error risk. | Strong | Moderate | Android system bars, Edge-to-edge design; Microsoft Research Target Size Study |
| T09 | Gesture-driven interactions provide immediate visual/haptic feedback proportional to the action. | Strong | Moderate | Apple HIG Gestures, Feedback |

## Adaptive layout

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| L01 | Respect safe areas, display cutouts, system bars, gesture insets, and software keyboard/insets. | Platform contract | Blocker | Apple HIG Layout; Android system bars, Edge-to-edge design |
| L02 | Layouts respond to actual available window size rather than device-name assumptions. | Platform contract | Major | Android Adapt layouts, Canonical layouts |
| L03 | Compact layouts may use one pane; expanded layouts consider list-detail/supporting panes instead of merely increasing whitespace. | Platform contract | Moderate | Android Adapt layouts, Canonical layouts |
| L04 | Navigation pattern adapts with window size where platform guidance calls for it (for example bar to rail on larger Android windows). | Platform contract | Moderate | Android Layouts and navigation patterns, Adapt layouts |
| L05 | Light, dark, and increased-contrast appearances remain legible; custom colors define suitable variants. | Strong | Major | Apple HIG Color; Android Core app quality guidelines |
| L06 | Layout survives portrait/landscape and resizing without losing task continuity. | Strong | Major | Apple HIG Layout; Android Core app quality guidelines |
| L07 | Localization supports text expansion, locale formats, and right-to-left mirroring where applicable. | Strong | Major | Apple HIG Layout, Inclusion, Right to left; Android Localize your app |
| L08 | Font sizes use scalable units and spacing/layout does not assume a single density. | Platform contract | Major | Android Grids and units; Apple HIG Typography |

## Interaction efficiency (platform APIs and focus management)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| IE03 | Programmatic focus should follow expressed user intent; do not steal focus or open the keyboard on passive screen entry when typing is not clearly the user's next task. | Platform + strong | Major | Apple HIG Focus and selection; Android Change focus behavior (FocusRequester); NN/g Don't Prioritize Efficiency Over Expectations |
| IE04 | After a transition/animation that reveals an input, transfer focus when the destination is ready so the keyboard does not race layout or land on a hidden/removed field. | Engineering-informed UX | Major | Android Change focus behavior (FocusRequester), SoftwareKeyboardController |
| IE05 | When automatic focus opens the keyboard, keep the focused field, current query, useful suggestions, and primary action visible above IME/system insets. | Platform contract | Major | Android SoftwareKeyboardController; cross-ref L01 (safe areas / keyboard insets) above |
| IE11 | Distinguish text-input focus from assistive-technology focus. Autofocus must not create a screen-reader focus trap or unpredictable reading order. | Accessibility | Blocker | Apple HIG Focus and selection; cross-ref accessibility X01 (accessible names/roles/focus order) in the `accessibility` skill |
| IE12 | Do not enforce keyboard autofocus when Search first opens a browse/suggestion experience and typing is not the dominant next action; mark the decision as contextual and testable. | Contextual | Moderate | NN/g Direct Access vs. Sequential Access, Don't Prioritize Efficiency Over Expectations; Apple HIG Focus and selection |

### Worked example: Search reveals an unfocused input

**Scenario:** A user taps a Search control. The app reveals a text field, but the field is not focused and the software keyboard stays closed. The user must tap the field again to start typing.

**Assessment:** Usually a **major** usability finding (IE01-IE02 in `core.md`, IE03-IE05 here) when typing is clearly the dominant next action, at `SUPPORTED` or `LIKELY` evidence status depending on whether the evidence is a live interaction trace or a pair of static screenshots.

**Why:** The Search tap already expresses intent to enter a query. The second tap adds physical interaction cost and visual target-reacquisition for no safety or choice benefit. Android explicitly supports requesting keyboard focus in response to a user interaction (`FocusRequester`); Apple's own guidance is to avoid changing focus *without* user interaction — which is not violated here, since the original tap on Search *is* the user interaction that licenses the resulting focus change.

**Expected behavior:** After the Search transition completes, focus the revealed field and present the software keyboard (IE01, IE04). Keep the field and useful suggestions/results visible above the keyboard (IE05). Preserve the query when dismissing and restoring search where appropriate (IE10 in `core.md`).

**Exception:** If activating Search intentionally opens a browse-first surface — recent searches, categories, voice/image search, or suggestions where typing is not the dominant next step — automatic keyboard presentation can be wrong (IE12). Treat this exception as `RISK`/contextual and worth testing, not as proof the original finding was mistaken.

## How the usability skill should apply these

Apply platform contracts (Navigation, Adaptive layout) only against the platform actually stated or shown in the evidence — do not average iOS and Android guidance, and do not assume a single grip/thumb-zone law over T07's contextual reality. When a search/input-reveal pattern appears, run the worked-example check explicitly: was this transition user-initiated, and does typing follow as the obvious next step? If the evidence is a static screenshot pair, report the finding at `LIKELY` rather than `VERIFIED`, and name "a live interaction trace or the running build" as the validation method per the shared evidence model.

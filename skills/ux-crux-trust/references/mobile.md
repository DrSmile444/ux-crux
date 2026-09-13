# Trust: mobile platform-contract permission, notification, and interruption rules

See `../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

## Permission and notification timing (platform-contract half of Onboarding & trust)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| O04 | Do not request all permissions at startup. Request a permission when the user invokes the feature that needs it. | Platform contract | Major | Apple HIG Privacy; Android Request runtime permissions, App permissions best practices; NN/g 3 Design Considerations for Effective Mobile-App Permission Requests |
| O05 | Before an unexpected/sensitive permission, explain what is accessed and the user-facing benefit in clear language. | Strong | Major | Apple HIG Privacy; Android Request runtime permissions; NN/g Permission Requests |
| O08 | Notification permission is requested after users can understand its value, not automatically on first launch unless the product genuinely cannot function without it. | Strong | Major | Android Notifications, Notification runtime permission; Apple HIG Managing notifications |
| O09 | Users can manage notification categories/preferences in-app when notifications are material to the product. | Strong | Moderate | Apple HIG Managing notifications; Android Notifications |
| O10 | Marketing notifications never masquerade as urgent/time-sensitive system-critical notifications. | Platform contract | Major | Apple HIG Managing notifications |

## Interruptions

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| I01 | Notifications are timely, relevant, and actionable enough to justify interrupting the user. | Strong | Major | Apple HIG Managing notifications; Android Notifications |
| I02 | Alerts are not used as generic informational banners; choose the least interruptive channel that fits urgency. | Strong | Major | Apple HIG Alerts, Feedback; Android Snackbar |
| I03 | Repeated warnings/confirmations are minimized to avoid habituation and alert fatigue. | Strong | Moderate | Apple HIG Alerts; NN/g Confirmation Dialogs Can Prevent User Errors |
| I04 | The app tolerates phone calls, app switching, screen lock, sleep/wake, rotation, and transient network loss without corrupting state. | Platform quality | Major | Android Core app quality guidelines |
| I05 | Notification tap/action lands the user in the relevant context and preserves understandable navigation/back behavior. | Strong | Moderate | Android Notifications, Core app quality guidelines |

## How the trust skill should apply these

Permission and notification requests should be evaluated against the moment they actually fire, not just their existence: a request at app launch before any related feature is used is an O04 finding regardless of how well-worded its rationale text is; a request timed to a feature invocation still needs a clear benefit explanation (O05) if the permission is sensitive or its need is not obvious. Treat notification-permission requests the same way (O08) and distinguish material notifications (which need in-app preference controls, O09) from marketing sends (which must never borrow urgent/system framing, O10). For interruptions, judge whether the chosen channel (alert vs. banner vs. in-context message) matches the urgency of the information (I01-I02), and check whether the app survives ordinary mobile interruptions — calls, backgrounding, lock/unlock, rotation, brief connectivity loss — without losing state (I04). Most of I04 cannot be assessed from a screenshot or static design; report it as `NOT ASSESSABLE` unless a running build or explicit lifecycle-handling evidence is provided.

## ADDED Requirements

### Requirement: Notification time and sender granularity
The trust skill SHALL check whether notification controls support time-based quiet hours and sender/contact-level allowlisting, not only category-level on/off toggles, when notifications are material to the product.

#### Scenario: Only category-level controls exist
- **WHEN** a product exposes per-category notification toggles but no time-based quiet-hours control and no way to allow a specific sender/contact through when notifications are otherwise limited
- **THEN** the trust skill flags the absence of finer-grained controls as a finding

#### Scenario: Time- and sender-level controls are present
- **WHEN** the product exposes, directly or by deferring to the OS's own mechanism (for example Focus modes or Do Not Disturb with priority senders), both time-based and sender-level notification controls
- **THEN** the trust skill does not flag this requirement

#### Scenario: Notification-settings surface not shown
- **WHEN** the evidence provided does not include the notification-settings surface at all
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

### Requirement: Badge and indicator urgency-color match
The trust skill SHALL flag a badge or unread indicator whose color or visual intensity signals higher urgency than the underlying content's actual criticality — for example a high-arousal alarm color (such as saturated red) applied to a routine, non-critical social or content update.

#### Scenario: Alarm color on routine content
- **WHEN** a routine, non-critical notification (for example a social like/comment count) is represented with a high-arousal alarm color or badge treatment typically reserved for critical or time-sensitive information
- **THEN** the trust skill flags the mismatch between the indicator's visual urgency and the content's actual criticality

#### Scenario: Alarm color reserved for genuinely critical content
- **WHEN** a high-arousal alarm color or badge treatment is used only for genuinely critical, safety-relevant, or time-sensitive information
- **THEN** the trust skill does not flag this requirement

#### Scenario: Rendered indicator color not in evidence
- **WHEN** the evidence provided does not show the actual rendered color or visual treatment of the badge/indicator (for example, it is described only in text without a visual)
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

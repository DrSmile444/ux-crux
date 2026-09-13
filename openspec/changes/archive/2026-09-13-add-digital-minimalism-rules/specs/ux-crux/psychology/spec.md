## ADDED Requirements

### Requirement: Conversation-channel bandwidth
For a feature intended to support relationship maintenance (as distinct from pure logistical coordination), the psychology skill SHALL flag a design that positions low-bandwidth asynchronous interaction (for example a one-tap reaction or a short async text message) as a full substitute for richer conversation, and SHALL recommend routing the user toward a higher-bandwidth channel (voice, video, or in-person) instead.

#### Scenario: Relationship-maintenance feature offers only low-bandwidth interaction
- **WHEN** a feature is framed as helping users "stay in touch" or maintain a relationship, and its only interaction affordances are one-tap reactions or short async text
- **THEN** the psychology skill flags the channel-bandwidth mismatch and recommends surfacing or prompting a higher-bandwidth option

#### Scenario: Interaction is purely logistical
- **WHEN** the interaction is purely logistical (for example sharing an address or confirming a meeting time) rather than relationship maintenance
- **THEN** the psychology skill does not flag this requirement

#### Scenario: Use case is unclear from the evidence
- **WHEN** the evidence does not indicate whether the use case is relationship maintenance or logistics
- **THEN** the psychology skill reports the finding as `NOT ASSESSABLE`

### Requirement: Mobile severity calibration for engagement-loop findings
When an engagement-loop finding under the existing habit-formation rules (variable/unpredictable reward delivery, streak pressure, autoplay/infinite content, or missing stopping cues) is observed on a mobile device, the psychology skill SHALL assign a default severity at the higher end of the applicable band defined in `../../shared/severity-model.md`, compared to an otherwise-equivalent finding on desktop/web, because a mobile device is carried on-body and continuously reachable.

#### Scenario: Same mechanism on mobile vs. desktop/web
- **WHEN** the same variable-reward, streak, or infinite-scroll mechanism is evaluated once for a mobile app and once for its desktop/web equivalent, all else equal
- **THEN** the psychology skill assigns the mobile instance a severity at least as high as, and by default at the higher end of the same band than, the desktop/web instance

#### Scenario: Platform is not indicated
- **WHEN** the evidence does not indicate whether the reviewed experience runs on mobile or desktop/web
- **THEN** the psychology skill applies the existing habit-formation rule's default severity without the mobile adjustment, and notes that the platform is unconfirmed

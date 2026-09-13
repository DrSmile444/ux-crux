# ux-crux/psychology Specification

## Purpose

Defines the psychology lens covering cognitive, attention, motivational, emotional, behavioral-economics, social, and habit-formation mechanisms, gated by an ethical test before any mechanism becomes a recommendation.

## Requirements

### Requirement: Four-gate ethical test for persuasive mechanisms
Before recommending or endorsing use of a psychological or persuasive mechanism (for example defaults, loss aversion, social proof, scarcity, streaks), the psychology skill SHALL evaluate it against four gates — evidence strength, applicability to this context, user benefit, and agency/truthfulness — and SHALL NOT issue a positive recommendation to use a mechanism that fails any gate.

#### Scenario: Streak-loss messaging under review
- **WHEN** a reviewed feature uses "Your streak will end tonight" messaging to drive daily return visits
- **THEN** the psychology skill evaluates the mechanism's user benefit and agency/truthfulness, and flags it as an ethical concern if it creates disproportionate anxiety rather than endorsing it as good use of loss aversion

### Requirement: Descriptive vs. prescriptive separation
The psychology skill SHALL distinguish between describing a psychological effect's likely behavioral impact and prescribing that the product exploit that effect; a described effect SHALL NOT automatically appear as an actionable recommendation.

#### Scenario: Explaining an observed default
- **WHEN** a reviewed feature has a pre-selected default option
- **THEN** the psychology skill explains the default effect's likely influence on behavior separately from judging whether that specific default is user-benefiting or exploitative

### Requirement: Deceptive-pattern detection
The psychology skill SHALL flag fabricated urgency or scarcity, fake social proof, confirmshaming, and asymmetric friction between opt-in and opt-out/cancellation paths as ethical-guardrail violations at major or blocker severity.

#### Scenario: Asymmetric cancellation friction
- **WHEN** a reviewed flow makes upgrading one tap but cancellation requires multiple confirmation screens and a support contact
- **THEN** the psychology skill reports this asymmetry as a trust/ethics finding at major or blocker severity

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

### Requirement: Ads and sponsored elements are not visually disguised as primary CTAs
Grounded in Gestalt's Law of Similarity, the psychology skill SHALL flag an advertisement or third-party/sponsored element styled with the same shape, color, and typography conventions as the product's own primary call-to-action controls, since matching visual language causes users to misidentify the ad as a genuine product control and click it unintentionally. This is the mirror-image failure to the existing banner-blindness rule (legitimate content styled like an ad and therefore ignored): here, an ad is styled like a genuine control and therefore mistakenly trusted. Findings under this requirement SHALL be evaluated through the four-gate ethical test before being reported as a deception concern.

#### Scenario: Sponsored banner uses the same primary-CTA visual style
- **WHEN** the reviewed evidence shows a third-party or sponsored element styled identically (same color, shape, and typography) to the product's own primary action buttons
- **THEN** the psychology skill flags this as a Law-of-Similarity deception finding

#### Scenario: Sponsored content is visually segregated from primary CTAs
- **WHEN** the reviewed evidence shows sponsored/ad content clearly differentiated in style from the product's own primary interactive controls
- **THEN** the psychology skill does not flag a Law-of-Similarity deception finding

### Requirement: Auto-rotating carousels are not relied on for important content
The psychology skill SHALL flag reliance on an auto-rotating image/content carousel to communicate important information or a primary call-to-action, since users systematically fail to notice or interact with panels beyond the first one shown.

#### Scenario: Important promotion is buried in carousel panel two or later
- **WHEN** the reviewed evidence shows a primary promotion, message, or call-to-action placed only in a non-first panel of an auto-rotating carousel
- **THEN** the psychology skill flags this as a carousel-reliance finding

#### Scenario: Carousel is purely decorative and not load-bearing for a task
- **WHEN** the reviewed evidence shows a carousel used for supplementary or decorative content, with no primary task or message depending on a panel beyond the first
- **THEN** the psychology skill does not flag a carousel-reliance finding

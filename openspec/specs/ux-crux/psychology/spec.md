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

### Requirement: Adjacent dynamic content does not create unintended meaning by juxtaposition
The psychology skill SHALL flag a dynamically inserted, unrelated element (an advertisement, an auto-generated recommendation, or a promotional module) placed directly adjacent to sensitive, serious, or emotionally weighted user content, when the juxtaposition itself would plausibly create an unintended narrative or emotional meaning neither element carries on its own — distinct from the existing disguised-ad and banner-blindness requirements, which concern an element being mistaken for or mistaken as a control, not the meaning created by placing two unrelated pieces of content next to each other.

#### Scenario: Promotional module sits directly beside serious or tragic content
- **WHEN** the reviewed evidence shows an automatically inserted ad, recommendation, or promotional module placed immediately adjacent to a serious, tragic, or emotionally sensitive piece of user content, with no contextual filtering or separation
- **THEN** the psychology skill flags the unintended-juxtaposition finding

#### Scenario: Dynamic content is contextually filtered or clearly separated
- **WHEN** the reviewed evidence shows a dynamic content-insertion system that excludes sensitive content from carrying adjacent ads/recommendations, or visually separates them with a clear boundary and contextual distance
- **THEN** the psychology skill does not flag this requirement

### Requirement: Deliberate friction protecting shared resources is distinguished from dark patterns
The psychology skill SHALL distinguish deliberate friction that protects a shared resource, another user, or a legitimate collective/enterprise policy from the acting user's own action (Slanty Design) from a dark pattern that imposes friction to extract a business advantage from the acting user at their own expense. A friction-increasing design SHALL NOT be flagged as a manipulative dark pattern under this requirement when its primary beneficiary is a shared resource or a third party rather than the business at the acting user's expense; such friction SHALL still be evaluated against the four-gate ethical test for its own proportionality and clarity, but is not automatically penalized for existing.

#### Scenario: Structural constraint prevents an action that would corrupt shared data
- **WHEN** the reviewed evidence shows a deliberately added interaction cost (an extra confirmation step, a structurally awkward control) whose stated purpose is preventing an individual user's action from corrupting a shared database, breaching security, or harming other users of a multi-user system
- **THEN** the psychology skill classifies this as Slanty Design, a legitimate protective friction, rather than an ethical-guardrail violation, while still checking that the friction is proportionate and clearly explained

#### Scenario: Friction added for the business's own benefit at the user's expense
- **WHEN** the reviewed evidence shows friction added to a user's own action (for example cancellation) that primarily benefits the business by discouraging that user's legitimate choice, with no shared resource or third party being protected
- **THEN** the psychology skill does not classify this as Slanty Design and continues to evaluate it as a potential dark pattern under the four-gate test and the existing deceptive-pattern detection requirement

#### Scenario: Unclear who the friction protects
- **WHEN** the reviewed evidence does not make clear whether an added friction point protects a shared resource/third party or only serves the business at the acting user's expense
- **THEN** the psychology skill reports the finding as `NOT ASSESSABLE` or `RISK` rather than assuming either classification

### Requirement: Gestalt Continuation, Closure, Common Fate, and Symmetry checks
The psychology skill SHALL, in addition to its existing Similarity, Proximity, Common Region, and Figure/Ground checks, evaluate a reviewed layout against four further Gestalt perception laws:
- **Continuation**: elements arranged along a continuous line or curve are perceived as a connected sequence; a control or piece of related content that breaks an otherwise continuous visual path without a stated reason SHALL be flagged.
- **Closure**: users mentally complete a familiar but visually incomplete shape or icon; the skill SHALL check that an intentionally incomplete graphical element (e.g. a partial icon standing in for a full concept) is unambiguous once closure is applied, not merely ambiguous fragments.
- **Common Fate**: elements that move, animate, or point in the same direction are perceived as belonging to the same group or process; the skill SHALL flag unrelated elements that share directional motion/animation in a way that implies a false grouping, and flag related elements that fail to share a common-fate cue when doing so would clarify their relationship.
- **Symmetry & Order**: users automatically simplify a complex layout into a small number of balanced, symmetrical regions; the skill SHALL flag a layout whose actual information grouping fights this automatic simplification (for example, a visually symmetrical arrangement that groups functionally unrelated controls together).

These four checks are additive to the existing Gestalt-based rules (Similarity, Proximity, Common Region, Figure/Ground) and do not replace or duplicate them.

#### Scenario: Unrelated elements share false common-fate motion
- **WHEN** the reviewed evidence shows two functionally unrelated elements (for example a promotional banner and an unrelated navigation control) animating or moving in synchronized fashion
- **THEN** the psychology skill flags a Common Fate violation, noting that the shared motion implies a functional relationship that does not exist

#### Scenario: Symmetrical layout groups unrelated controls
- **WHEN** the reviewed evidence shows a visually symmetrical, balanced layout in which the symmetry groups controls that serve unrelated tasks
- **THEN** the psychology skill flags a Symmetry & Order violation, distinct from a Proximity or Common Region finding, because the grouping cue here is the automatic visual simplification into balanced regions rather than spatial closeness or a shared boundary

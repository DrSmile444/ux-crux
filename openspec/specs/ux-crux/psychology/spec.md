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

### Requirement: Gamification-mechanics diagnostic
The psychology skill SHALL evaluate game-mechanics elements (points, badges, levels, collectible sets, progress/skill scaling) against a legitimate-design diagnostic distinguishing genuine game design from "sugarcoating" (extrinsic reward mechanics with no underlying core challenge), covering: challenge-skill balance (flag static difficulty that does not scale with demonstrated user skill), intrinsic-challenge surfacing (before endorsing points/badges/leaderboards on an intrinsically tedious task, require that a genuine core challenge — mastery, self-improvement, estimation accuracy — has been identified; extrinsic rewards alone SHALL NOT be reported as a positive finding for sustained engagement), set completion (a bounded, small, achievable collection with visible empty/locked placeholder slots is a legitimate use of completion drive; an unbounded/infinite collection is flagged as producing helplessness instead), and a personal feedback-loop "mirror effect" (passive, periodic reflection of the user's own behavior, translated into meaningful/actionable terms, supports self-correction; raw performance data shown with no actionable next step is flagged as a source of anxiety/avoidance rather than a positive finding).

#### Scenario: Points and badges added with no identified core challenge
- **WHEN** the reviewed evidence shows points, badges, or a leaderboard added to a task (e.g. routine data entry, posting a comment) with no stated or inferable core challenge behind the mechanic
- **THEN** the psychology skill flags this as sugarcoating — a mechanic likely to produce only temporary novelty rather than sustained engagement — rather than endorsing it as good gamification

#### Scenario: Bounded collectible set with visible missing slots
- **WHEN** the reviewed evidence shows a small, bounded achievement or collection set with visibly empty/locked slots for items not yet earned
- **THEN** the psychology skill reports this as a legitimate use of the set-completion mechanism, distinct from an unbounded or infinite collection bucket, which it flags as producing helplessness rather than motivation

#### Scenario: Raw metrics shown with no interpretation
- **WHEN** the reviewed evidence shows a dashboard or summary that displays raw behavioral metrics (e.g. counts, durations) with no interpretation, comparison, or actionable next step
- **THEN** the psychology skill flags the missing interpretive/actionable layer as reducing the feedback loop's value, rather than treating the presence of raw data alone as sufficient

### Requirement: Constraint-as-focus distinguished from fabricated scarcity
The psychology skill SHALL distinguish a real, disclosed, function-serving constraint (a character limit, a submission quota, a time window) that improves output quality or focus for the user's own benefit from the existing fabricated-scarcity/urgency deceptive pattern; a constraint of this kind SHALL still be evaluated against the four-gate ethical test for proportionality, and SHALL be flagged as a guardrail violation if its primary beneficiary is the business at the user's expense rather than the user's own stated goal.

#### Scenario: Character limit disclosed as a quality mechanism
- **WHEN** the reviewed evidence shows a disclosed, fixed character limit on a feedback/review submission field, applied uniformly and for a stated quality/focus purpose
- **THEN** the psychology skill reports this as a legitimate constraint-as-focus mechanism, distinct from a fabricated low-stock or countdown-urgency claim, while still checking it against the four-gate ethical test

### Requirement: Concrete execution-intention prompts (channel factors)
When a flow asks a user to commit to a real-world or offline follow-through action, the psychology skill SHALL check for a concrete execution-intention prompt (for example a specific time, place, or scheduling field) bridging the gap between stated intention and actual behavior, distinct from the existing ability/timing requirements, which do not require a situational trigger to be present.

#### Scenario: Intention-only follow-through request with no execution prompt
- **WHEN** the reviewed evidence shows a flow that asks the user to agree to a future real-world action (e.g. "I'll do this later") with no concrete time, place, or scheduling prompt offered
- **THEN** the psychology skill flags the missing execution-intention trigger as reducing the likelihood of actual follow-through

### Requirement: Legitimate head-start progress distinguished from fabricated progress
The psychology skill SHALL distinguish a truthful head-start progress framing — where the total effort required is unchanged and the framing accurately reflects real completed or credited steps — from the existing fabricated-progress violation, which misrepresents actual completion; a head-start framing that changes the true total effort required or misstates what has actually been completed SHALL still be reported as a fabricated-progress violation.

#### Scenario: Progress bar starts with credited already-known steps
- **WHEN** the reviewed evidence shows an onboarding or loyalty-progress indicator starting above zero because it credits steps the user has already genuinely completed or provided (e.g. pre-filled known account data), with the same total required effort as if it had started at zero
- **THEN** the psychology skill reports this as a legitimate head-start framing, not a fabricated-progress violation

#### Scenario: Progress bar overstates actual completion
- **WHEN** the reviewed evidence shows a progress indicator crediting steps the user has not actually completed or provided
- **THEN** the psychology skill reports this as a fabricated-progress violation

### Requirement: Social-proof density and negative-signal check
In addition to the existing truthfulness requirement for social-proof claims, the psychology skill SHALL flag a low or near-zero social-proof counter (for example "0 shares," a near-empty activity count) as a negative social-proof signal that can undermine trust, and SHALL recognize that a high-density, truthful visual social-proof presentation (for example a live collection of real user avatars or activity) is a stronger mechanism than an equally truthful static, handpicked text testimonial.

#### Scenario: Near-zero counter displayed by default
- **WHEN** the reviewed evidence shows a social-proof counter (shares, likes, participants) displaying a very low or zero count in a context where this is not itself the message
- **THEN** the psychology skill flags the low counter as a negative social-proof risk and recommends suppressing or reframing the counter until it reflects a meaningful count

### Requirement: Sensitive-domain category labels avoid clinical or embarrassing terminology
The psychology skill SHALL flag a form or selection control in a sensitive domain (health conditions, financial hardship, body/clothing sizing, or a comparably self-image-sensitive category) that uses a clinical, intimidating, or stigmatizing label where a neutral or familiar alternative would convey the same option without compromising clinical accuracy or informed choice. Distinct from the existing disability/human-trait language dignity requirement and the existing gender/sex/identity field-structure requirement: this requirement addresses anxiety-driven hesitation or mis-selection caused by a category label itself, not identity dignity or field structure.

#### Scenario: A sensitive form uses an intimidating or stigmatizing label
- **WHEN** the reviewed evidence shows a form in a sensitive domain (health, financial hardship, sizing, or similar) using a clinical or stigmatizing label likely to cause user hesitation, embarrassment, or mis-selection, and a neutral or familiar alternative exists that would not compromise accuracy
- **THEN** the psychology skill flags the finding and recommends a neutral or familiar relabeling that preserves the option's actual meaning and any clinically or legally required precision

#### Scenario: A sensitive form already uses neutral, familiar labeling
- **WHEN** the reviewed evidence shows a sensitive-domain form using neutral or familiar labels that do not risk embarrassment or mis-selection, while still remaining accurate
- **THEN** the psychology skill does not flag this requirement

#### Scenario: Clinical precision is legally or medically required
- **WHEN** the reviewed evidence shows a clinical or precise term is retained because a neutral alternative would introduce a real risk of misdiagnosis, legal noncompliance, or informed-consent failure
- **THEN** the psychology skill does not flag this requirement, and notes the clinical-precision exception rather than recommending relabeling

### Requirement: Guilt-bridging reward framing requires genuine, truthfully represented effort
The psychology skill SHALL flag copy that frames a purchase, upgrade, or leisure feature as an "earned reward" when the user's underlying effort is fabricated, exaggerated, or absent, or when the framing manufactures guilt that was not otherwise present in order to make the reward frame necessary. A truthful earned-reward frame — one that accurately reflects real, already-demonstrated user effort — is permitted only after passing the standing four-gate ethical test (evidence, applicability, user benefit, agency & truthfulness) already applied to every other mechanism in this domain.

#### Scenario: Reward framing exaggerates or fabricates the user's effort
- **WHEN** the reviewed evidence shows upgrade, purchase, or leisure copy framing the action as a reward for effort the user has not actually demonstrated, or inflating minor effort into a significant achievement to justify the spend
- **THEN** the psychology skill flags the finding as a deceptive framing pattern, distinct from a legitimate earned-reward frame

#### Scenario: Reward framing accurately reflects genuine prior effort
- **WHEN** the reviewed evidence shows copy that truthfully references effort the user has actually and verifiably put in (for example, completing a demanding task or a sustained streak) before offering a reward-framed upgrade or break, and the frame passes the standing four-gate ethical test
- **THEN** the psychology skill does not flag this requirement

#### Scenario: No effort claim is made
- **WHEN** the reviewed evidence shows upgrade or purchase copy that makes no claim about the user's effort at all
- **THEN** the psychology skill does not flag this requirement

### Requirement: Cumulative multiplicity burden is evaluated at the system level
The psychology skill SHALL evaluate the cumulative cognitive burden of many individually-simple, idiosyncratic interactions repeated across a whole product (for example per-item confirmations, inconsistent per-toggle rules, repeated micro-permission prompts, or unrelated password/expiry policies across separate accounts) as a system-level load in its own right, distinct from the existing extraneous-cognitive-load requirement, which evaluates load within a single task and cannot surface a defect that only exists when many separately-fine instances are multiplied across the whole product. A finding under this requirement SHALL NOT be dismissed on the grounds that any single instance, viewed in isolation, is simple or reasonable.

#### Scenario: Many individually-reasonable confirmations compound into system-level burden
- **WHEN** the reviewed evidence shows a product requiring a separate, individually-simple confirmation, toggle, or permission decision for many similar items (for example confirming deletion separately for each of dozens of list items, or maintaining a dozen accounts each with distinct, unsynchronized security-question rules)
- **THEN** the psychology skill flags the cumulative multiplicity burden as a system-level finding, citing the pattern's repetition and inconsistency across the product, not any single instance in isolation

#### Scenario: A repeated action is simple, consistent, and centrally managed
- **WHEN** the reviewed evidence shows a repeated action that is simple, follows one consistent rule across every instance, and can be managed centrally when needed (for example a single sign-on covering every sub-service, or one notification-preference screen governing all categories)
- **THEN** the psychology skill does not flag this requirement

#### Scenario: A single simple interaction is evaluated on its own
- **WHEN** the reviewed evidence shows only one instance of a simple interaction, with no indication of how many similar instances exist elsewhere in the product
- **THEN** the psychology skill does not flag this requirement from a single instance alone; it reports the requirement as `NOT ASSESSABLE` when the evidence does not show whether the interaction is repeated at scale

## ADDED Requirements

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

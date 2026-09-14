## ADDED Requirements

### Requirement: Design-side signage reliance signals a design failure
The usability skill SHALL treat a persistent instructional label, warning sticker, or explanatory tooltip added by the design itself specifically to compensate for a control's own confusing operation (for example "Click here twice," a static "Turn off when finished" sign, or a permanently visible hint bubble explaining an otherwise-unclear icon) as evidence that the underlying design failed, not as a mitigation to credit. This is the design-side counterpart to the existing requirement that a user-created affordance artifact signals a missing built-in affordance: here the compensating artifact is added by the designer rather than the user, but the same underlying diagnosis applies — the interface should be fixed so the explanatory text is unnecessary. A legally mandated warning (regulatory, safety-compliance) is excluded from this requirement; the usability skill SHALL instead check whether the required warning is separated from routine operational cues rather than judging the mandated warning's mere presence as a defect.

#### Scenario: A permanent hint bubble compensates for an unclear icon-only control
- **WHEN** the reviewed evidence shows a control that only works correctly alongside a permanently visible tooltip, caption, or hint bubble explaining what the control does or how to use it
- **THEN** the usability skill flags the underlying control's missing signifier or unclear affordance as the defect, and does not credit the compensating tooltip as an acceptable fix

#### Scenario: A static instructional sign is posted because users repeatedly fail a step
- **WHEN** the reviewed evidence shows a persistent instructional banner, sign, or warning added specifically because users repeatedly fail to complete a step correctly on their own
- **THEN** the usability skill flags the step's underlying design (missing constraint, unclear signifier, or poor natural mapping) as the defect, not the absence or presence of the sign itself

#### Scenario: A legally mandated compliance warning is present
- **WHEN** the reviewed evidence shows a warning required by law or regulation (for example a data-processing notice or safety-compliance disclosure)
- **THEN** the usability skill does not flag the mandated warning's presence as a defect under this requirement, but checks separately whether it is kept distinct from routine operational cues rather than cluttering them

### Requirement: Wait and queue experiences meet psychological wait-design principles
The usability skill SHALL evaluate a wait or queue experience (checkout processing, matchmaking, a support-ticket queue, or an onboarding delay) against the following principles, distinct from the existing loading-state and progress-indicator requirements, which address whether a progress indicator exists and what type it uses, not the psychological wait-experience principles governing any queue or hold:
- an explicit, appropriately conservative expectation of duration or queue position is communicated;
- the user is kept meaningfully occupied (relevant content, a preview, or a task) rather than facing a static or empty state during a significant wait;
- all waiting users are treated under one visibly fair order, with no undisclosed line-jumping or paid priority cuts that are not clearly disclosed as such;
- the wait ends with a clear, positive resolution rather than trailing off with no acknowledgment.

#### Scenario: A checkout or processing wait shows no duration estimate and a blank screen
- **WHEN** the reviewed evidence shows a significant processing or matchmaking wait with no estimated duration or position, and the screen shows nothing but a spinner with no content or context
- **THEN** the usability skill flags the missing expectation-setting and unoccupied-wait findings under this requirement

#### Scenario: A support-ticket or service queue allows undisclosed priority cuts
- **WHEN** the reviewed evidence shows a support-ticket queue, waitlist, or service line in which some users can jump ahead of others without a clearly disclosed reason (for example an undisclosed paid tier)
- **THEN** the usability skill flags the fairness violation under this requirement, distinguishing it from a clearly disclosed and equitable priority mechanism, which does not violate this requirement

#### Scenario: A wait experience sets a conservative estimate, offers relevant content, and ends clearly
- **WHEN** the reviewed evidence shows a wait that states a conservative time/position estimate, shows relevant occupying content, treats all waiting users fairly, and ends with an explicit completion state
- **THEN** the usability skill does not flag this requirement

### Requirement: Multi-step flows expose forward-looking step progress
The usability skill SHALL flag a multi-step wizard or flow that shows only a history trail of completed steps, or only the current step in isolation, without also showing the total or expected number of remaining steps, or an explicit signal that the total step count is not yet knowable. This requirement addresses the forward-looking dimension specifically; it is distinct from the existing breadcrumb/sitemap requirement, which addresses the backward-looking (where-did-I-come-from) dimension, and from the existing progress-action-labeling requirement, which addresses label consistency (Next/Continue/Done) without requiring that remaining-step count be exposed.

#### Scenario: A multi-step signup flow shows no indication of remaining steps
- **WHEN** the reviewed evidence shows a multi-step flow (for example a 7-step account setup) where each screen shows only "Continue" with no step counter, progress bar, or other indication of how many steps remain
- **THEN** the usability skill flags the missing forward-looking progress indicator under this requirement

#### Scenario: A flow's total step count is genuinely not knowable in advance
- **WHEN** the reviewed evidence shows a flow whose remaining steps genuinely depend on branching answers not yet given (for example a dynamic eligibility questionnaire)
- **THEN** the usability skill does not flag a missing exact step count, provided the flow gives an explicit signal (for example "a few more questions based on your answers") rather than silence

#### Scenario: A wizard shows both current step and total step count
- **WHEN** the reviewed evidence shows a multi-step flow displaying "Step 3 of 5" or an equivalent progress indicator on every screen
- **THEN** the usability skill does not flag this requirement

### Requirement: Long high-consequence procedures provide an interactive checklist
The usability skill SHALL flag a long, sequential, high-consequence procedure that is prone to memory failure under stress or interruption (for example a safety-critical setup flow, an infrastructure migration wizard, or a multi-field compliance submission) when it relies on the user's memory of an implicit sequence rather than providing an explicit, interactive step-by-step checklist with persistent checked/unchecked state that surfaces any skipped step for later completion. This requirement is distinct from the existing single-action emergency-response requirement, which addresses acute, time-pressured flows needing one immediately actionable control, and from the existing interruption-resilience requirement, which addresses general state preservation for any interrupted flow, not the specific failure mode of a silently skipped step within a long ordered sequence under workload.

#### Scenario: A long compliance submission has no step-tracking and a required field is silently skipped
- **WHEN** the reviewed evidence shows a long, high-consequence, multi-part submission flow with no persistent checklist of completed/pending items, where a user could plausibly skip a required part without any prompt
- **THEN** the usability skill flags the missing interactive checklist and skipped-step detection under this requirement

#### Scenario: A short, low-consequence flow has no checklist
- **WHEN** the reviewed evidence shows a short flow with few steps and no significant consequence for a memory lapse
- **THEN** the usability skill does not flag this requirement; a checklist is not required for every multi-step flow, only long, high-consequence, memory-failure-prone ones

#### Scenario: A safety-critical setup flow provides a persistent, interactive checklist
- **WHEN** the reviewed evidence shows a long safety-critical or compliance procedure with a persistent checklist tracking completed and pending steps, and it surfaces any step a user attempted to skip
- **THEN** the usability skill does not flag this requirement

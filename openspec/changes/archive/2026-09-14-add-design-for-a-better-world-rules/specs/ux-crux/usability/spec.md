## ADDED Requirements

### Requirement: Delayed-effect controls expose rate or delay
The usability skill SHALL flag a control whose effect on the underlying system is not immediate (a temperature-adjustment control, a background sync toggle, a queued-processing setting) when the interface gives no indication of the expected rate or delay before the effect becomes perceptible, since a hidden long-delay feedback loop leads users to push the control to an extreme value or repeat the action, mistaking the delay for ineffectiveness.

#### Scenario: A delayed-effect control gives no rate or delay indication
- **WHEN** the reviewed evidence shows a control (for example a thermostat-style temperature setting, a sync/processing toggle) whose real-world effect takes a perceptible amount of time to occur, and the interface shows no expected-rate or delay indicator
- **THEN** the usability skill flags the missing rate/delay indicator and explains that its absence plausibly causes users to repeatedly re-adjust the control to an extreme value

#### Scenario: A delayed-effect control shows an explicit rate or delay indicator
- **WHEN** the reviewed evidence shows the same kind of delayed-effect control, and the interface visibly communicates the expected rate or remaining delay (for example a countdown, a rate-of-change indicator, or explanatory copy)
- **THEN** the usability skill does not flag the control under this requirement

### Requirement: High-stress flows favor fast, single-action interaction
The usability skill SHALL flag an emergency, safety-critical, or acutely time-pressured flow (for example an in-app SOS action, a critical alert response, a time-limited security action) that requires multi-step reasoning, dense reading, or navigating more than one control to complete the primary response, since a user under significant stress or time pressure relies on fast, visceral processing rather than deliberate, reflective reasoning. This requirement does not apply to a calm, non-urgent flow, where reflective, multi-step interaction remains appropriate.

#### Scenario: An emergency response requires multi-step reasoning
- **WHEN** the reviewed evidence shows a flow explicitly framed as an emergency, safety, or acute time-pressure response, and completing the primary response requires reading dense instructions or navigating multiple sequential controls
- **THEN** the usability skill flags the flow and recommends collapsing the primary response to one prominent, immediately actionable control

#### Scenario: A calm, non-urgent flow uses multi-step interaction
- **WHEN** the reviewed evidence shows a flow with no stated or inferable emergency or acute time pressure
- **THEN** the usability skill does not apply this requirement to that flow

### Requirement: Societal-affordance signifiers match actual system consequences
The usability skill SHALL flag a control or action whose availability is governed by an unwritten social or procedural convention — rather than a physical or technical constraint — when the interface's signifiers do not clearly indicate that the action is conventionally discouraged, penalized, or has a consequence beyond the immediate interaction, distinct from the existing four-affordance-type classification (Cognitive, Physical, Sensory, Functional), which addresses whether a user can perceive or perform an action, not whether a technically-permitted action carries an unstated social or procedural cost.

#### Scenario: An action is technically permitted but carries an unstated social or procedural cost
- **WHEN** the reviewed evidence shows an action the system allows the user to perform (for example publicly commenting on a private note, or using a feature outside its intended scope) that carries a real social, reputational, or procedural consequence not indicated by any visible signifier
- **THEN** the usability skill flags the missing signifier as a societal-affordance mismatch and recommends a clear, visible cue about the convention or consequence before the user acts

#### Scenario: A conventionally-discouraged action is clearly signified
- **WHEN** the reviewed evidence shows the same kind of conventionally-governed action, and the interface visibly signals the convention or consequence before the user commits to it
- **THEN** the usability skill does not flag the action under this requirement

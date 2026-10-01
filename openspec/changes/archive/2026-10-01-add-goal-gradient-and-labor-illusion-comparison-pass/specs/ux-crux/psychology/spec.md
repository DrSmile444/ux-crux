## ADDED Requirements

### Requirement: Goal-gradient progress framing shows concrete remaining distance
The psychology skill SHALL check that a multi-step flow with a real, user-recognizable goal (onboarding, checkout, profile completion, a loyalty reward) presents progress as concrete distance covered and remaining ("5 of 7 steps", "about 3 minutes left", "2 more purchases to the reward") rather than only an abstract instruction ("complete your profile") or no indicator, because motivation and effort increase as a goal nears (Hull's goal-gradient hypothesis; Kivetz, Urminsky & Zheng, 2006). This requirement is distinct from `PM09` (where a progress indicator starts) and `PM07` (that progress is truthful), and it SHALL NOT apply to a flow with no real goal or only one step. Static evidence that cannot show the flow beyond one screen SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Onboarding states concrete remaining distance
- **WHEN** the reviewed evidence shows an onboarding flow displaying "Step 3 of 5" or "about 2 minutes left"
- **THEN** the psychology skill does not flag this requirement

#### Scenario: Multi-step flow shows no distance
- **WHEN** the reviewed evidence shows a seven-step setup whose only progress cue is the instruction "Complete your profile" with no count, bar, or time estimate
- **THEN** the psychology skill flags the missing goal-gradient framing

#### Scenario: Framing is fabricated
- **WHEN** the reviewed evidence shows a progress indicator that moves faster than real completion, or credits steps not completed
- **THEN** the psychology skill reports a `PM07` fabricated-progress violation, not a pass of this requirement

#### Scenario: Single screen or no real goal
- **WHEN** the reviewed evidence shows only one screen or a flow with no goal the user would recognize
- **THEN** the psychology skill reports this requirement `NOT ASSESSABLE` or not applicable

### Requirement: Genuine waits make the work being done visible
The psychology skill SHALL check that when a wait is caused by real work the user cares about (searching, comparing, verifying, generating), the interface shows what is being done (named stages, items searched, checks completed) rather than only a generic spinner, because visible effort raises perceived value and reciprocity (the labor illusion; Buell & Norton, 2011). This requirement is distinct from `E08` (a perceptible checking step for high-stakes actions) and `S13` (wait expectation and fairness). The labelled work SHALL correspond to work actually performed; adding or lengthening a delay on an instant, routine, or frequently repeated task to look busy SHALL be reported under `E08` and `PM07`, not accepted under this requirement. The requirement SHALL NOT apply when the result is effectively instant or the wait is short, and a static screenshot that cannot show the wait SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Search shows real stages
- **WHEN** the reviewed evidence shows a comparison search that lists the sources being searched while it runs
- **THEN** the psychology skill does not flag this requirement

#### Scenario: Long real wait shows only a spinner
- **WHEN** the reviewed evidence shows a wait of several seconds for a complex query with only an unlabeled spinner
- **THEN** the psychology skill flags the missing operational transparency as a low-severity finding

#### Scenario: Artificial delay on an instant task
- **WHEN** the reviewed evidence shows a fake "verifying…" pause added to an action that completes instantly and is low-stakes
- **THEN** the psychology skill reports it under `E08` and `PM07`, not as a pass of this requirement

#### Scenario: Result is instant
- **WHEN** the reviewed evidence shows a result returned immediately
- **THEN** the psychology skill does not require added waiting or labelling

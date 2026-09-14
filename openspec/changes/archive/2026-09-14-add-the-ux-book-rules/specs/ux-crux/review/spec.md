## ADDED Requirements

### Requirement: Breakdowns are classified by Interaction Cycle stage
When the review skill (or a domain skill applying this methodology) diagnoses the root cause of a usability breakdown, it SHALL identify which stage of the Interaction Cycle the breakdown originates in — Planning (does the user know WHAT to do to achieve their goal), Translation (does the user know HOW to do it on the specific UI objects in front of them), Physical Action (can the user physically perform the action), Outcome (did the underlying system state change correctly), or Assessment (can the user perceive and confirm whether the action succeeded) — rather than reporting a generic complaint. Because a large majority of real-world breakdowns occur at the Translation stage, the review skill SHALL consider a Translation-stage cause (for example ambiguous labeling or an unclear control-to-goal mapping) before concluding a breakdown is an Outcome-stage (backend/system) defect.

#### Scenario: User hesitates before an ambiguous control
- **WHEN** the reviewed evidence shows a user pausing, hesitating, or making a wrong selection because a control's purpose or expected input is unclear, even though the control itself is physically usable and the backend behaves correctly once invoked
- **THEN** the review skill classifies the breakdown as a Translation-stage (Gulf of Execution) finding rather than an Outcome or Physical-Action finding, and recommends clarifying labeling, feed-forward cues, or input guidance as the fix

#### Scenario: User cannot tell whether an action succeeded
- **WHEN** the reviewed evidence shows a user performing an action correctly but receiving no perceivable confirmation of its result
- **THEN** the review skill classifies the breakdown as an Assessment-stage (Gulf of Evaluation) finding, distinct from a Translation-stage or Outcome-stage cause

#### Scenario: Reviewer initially suspects a backend defect
- **WHEN** a breakdown is reported as "the button doesn't work" with no further detail, and the evidence shows the user was actually confused about which control to use rather than the backend failing to execute
- **THEN** the review skill re-classifies the finding as a Translation-stage cause rather than accepting the initial Outcome-stage framing at face value, consistent with the Translation stage accounting for the large majority of real-world breakdowns

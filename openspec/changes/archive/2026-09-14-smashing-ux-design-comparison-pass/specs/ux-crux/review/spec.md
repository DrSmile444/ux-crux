## ADDED Requirements

### Requirement: Expert review applies a Cognitive Walkthrough before or alongside Heuristic Evaluation
When a stated or reasonably inferable target persona and primary task exist for the reviewed evidence, the review skill SHALL first walk through that primary task step-by-step from the target persona's perspective — evaluating step-by-step clarity, available system feedback, and whether progression is obvious — before or alongside applying the lens-selection procedure's Heuristic Evaluation sweep (the existing domain-skill rule checks). This is a structural sequencing requirement, not a replacement for the existing `V01`-`V06` validation methodology or the lens-selection/synthesis procedure, both of which continue to apply unchanged.

#### Scenario: Persona and primary task are stated or clearly inferable
- **WHEN** the review request or evidence states or clearly implies a target persona (for example "a first-time user booking a return flight") and a primary task
- **THEN** the review skill performs a step-by-step Cognitive Walkthrough of that task from the stated persona's perspective, noting any step where the next action, available feedback, or progress is unclear, before presenting the heuristic-evaluation findings from the applicable domain skills

#### Scenario: No persona or primary task can be inferred
- **WHEN** the reviewed evidence gives no basis for inferring a target persona or primary task (for example a single isolated component screenshot with no stated context)
- **THEN** the review skill reports the Cognitive Walkthrough pass as `NOT ASSESSABLE`, states what context would resolve it, and proceeds with the Heuristic Evaluation sweep rather than skipping the review or inventing an unstated persona

#### Scenario: Walkthrough and heuristic sweep surface the same underlying issue
- **WHEN** both the Cognitive Walkthrough and the Heuristic Evaluation sweep independently surface findings tied to the same underlying defect
- **THEN** the review skill merges them into a single finding per this file's existing cross-lens synthesis guidance, rather than reporting the same defect twice

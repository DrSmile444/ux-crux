# ux-crux/review Specification

## Purpose

Provides the single full-spectrum UX audit entry point that determines which domain lenses apply to a piece of evidence and synthesizes their findings into one evidence-aware report.

## Requirements

### Requirement: Full-audit skill applies applicable domain lenses
The review skill SHALL determine, from the user's request and the evidence provided, which of the usability, psychology, accessibility, product, and trust lenses are applicable, and SHALL evaluate all applicable lenses rather than defaulting to a single lens.

#### Scenario: Reviewing a checkout flow screenshot
- **WHEN** a user asks for a full UX review of a screenshot showing a checkout flow
- **THEN** the review skill evaluates the flow against usability, accessibility, product, and trust lenses at minimum, and states which lenses it applied and why

### Requirement: Findings use the shared evidence and severity models
Every finding produced by the review skill SHALL carry an evidence status (VERIFIED, SUPPORTED, LIKELY, RISK, or NOT ASSESSABLE), a severity (blocker, major, moderate, or minor), and a confidence level, as defined by the shared evidence/severity model.

#### Scenario: Insufficient evidence to confirm a defect
- **WHEN** the review skill is given a static screenshot and cannot observe live keyboard/focus behavior
- **THEN** it reports the related finding with evidence status NOT ASSESSABLE or LIKELY rather than asserting it as VERIFIED

### Requirement: Recommend concrete low-cost validation techniques for unconfirmed findings
When the review skill (or a domain skill applying the shared validation methodology) cannot confirm a finding from the evidence provided and reports it as `NOT ASSESSABLE` or `LIKELY`, it SHALL name a concrete, low-cost technique the user can run to close the gap, rather than stopping at stating uncertainty alone.

For an unconfirmed information-hierarchy or first-impression claim, the recommended technique SHALL be a Five-Second Test (show the screen briefly, then ask what the viewer recalls and understood the purpose to be). For an unconfirmed claim that depends on structured, candid team critique rather than end-user testing, the recommended technique SHALL be a Black Hat Session (a facilitated critique in which participants deliberately adopt a critical, skeptical viewpoint).

#### Scenario: Hierarchy claim cannot be confirmed from a static screenshot
- **WHEN** the review skill cannot confirm from a static screenshot whether the primary action or message is actually salient to users
- **THEN** it reports the finding as `LIKELY` or `NOT ASSESSABLE` and recommends running a Five-Second Test to confirm what users notice and recall

#### Scenario: Team has not candidly critiqued a design before requesting review
- **WHEN** the evidence indicates a design has only been reviewed informally with no structured critical pass
- **THEN** the review skill may recommend a Black Hat Session as a fast, low-cost way to surface issues the team has been reluctant to voice, alongside its own findings

### Requirement: Cited sample-size guidance for usability-test recommendations
When the review skill recommends a qualitative usability-test sample size as part of applying its per-flow measurement guidance, it SHALL cite Jakob Nielsen's finding (NN/g) that approximately five participants surfaces the large majority of usability issues in a qualitative study, including the 2012 revisit confirming that testing meaningfully more participants does not yield appreciably more insight, rather than stating an uncited or arbitrary sample size. When advising on how many participants must exhibit the same behavior before a pattern is treated as high-confidence rather than an individual outlier, the review skill SHALL cite the convergence threshold of the same behavioral issue appearing in at least 6 of 8 participants across iterative testing cycles, rather than treating a single participant's behavior as sufficient grounds for a design change.

#### Scenario: Reviewer recommends a usability-test sample size
- **WHEN** the review skill recommends how many participants to include in a qualitative usability test for a reviewed flow
- **THEN** it cites Nielsen/NN/g's five-participant finding as the basis for that recommendation rather than proposing an unsourced number

#### Scenario: Single outlier participant prompts an unwarranted redesign
- **WHEN** a usability-test report shows one participant out of several exhibiting an unusual behavior, and a design change is proposed solely on that basis
- **THEN** the review skill flags the proposed change as insufficiently supported, citing the 6-of-8 convergence threshold as the bar for treating a behavior as a representative pattern rather than noise

### Requirement: Report avoids a single opaque score
The review skill's output SHALL follow the shared report contract: blockers and major issues listed first, category health per lens, missing states/missing context called out explicitly, and a top-3 highest-impact recommendation list; a single 0-100 score, if included at all, SHALL be secondary and capped when unresolved blockers exist.

#### Scenario: Feature has one blocker among many minor issues
- **WHEN** the review finds one accessibility blocker and several minor content issues
- **THEN** the report leads with the blocker, and any numeric score present is capped rather than reflecting an average across all findings

### Requirement: Review is self-contained regardless of install method
The review skill SHALL include, within its own distributed package, the rule content of every domain lens it can apply, so that installing review alone through any distribution channel still lets it fully evaluate every lens without requiring the sibling domain skills to also be installed.

#### Scenario: Installing only the review skill via skills.sh
- **WHEN** a user installs only `ux-crux-review` via `npx skills add <repo> --skill ux-crux-review` (or an equivalent single-skill install), with no domain skill installed alongside it
- **THEN** `ux-crux-review` still evaluates every applicable lens using rule content bundled in its own package, not by reading another skill's files

### Requirement: Domain skills remain independently invocable
The review skill SHALL NOT be a required orchestration dependency for the domain skills; each domain skill SHALL be independently invocable and produce a valid report for its own lens without the review skill running first.

#### Scenario: User asks only about accessibility
- **WHEN** a user asks "check accessibility of this screen" without asking for a full review
- **THEN** the accessibility skill is invoked directly and produces a complete, valid accessibility-lens report on its own

### Requirement: Stress-case framing for adverse-state testing
When recommending adverse-state testing, the review skill (or a domain skill applying the shared validation methodology) SHALL frame a dismissible-sounding "edge case" as a stress case when it corresponds to a real, non-negligible population or a genuinely stressful user circumstance, rather than treating rarity alone as license to exclude it. An unexamined business or technical constraint that excludes such a population (for example an arbitrary age cap on a form field) SHALL be flagged as a finding to reconsider, not dismissed as out of scope by default.

#### Scenario: Arbitrary age-cap validation excludes a real population
- **WHEN** a reviewed sign-up form rejects birth dates older than a fixed threshold (for example 100 years) with no stated legal or safety reason
- **THEN** the review skill flags the constraint as excluding a real user population and recommends the team re-examine whether the limit reflects an actual requirement rather than an arbitrary technical convenience

#### Scenario: Constraint has a stated legal or safety basis
- **WHEN** a reviewed constraint that excludes a rare case is backed by a stated legal or safety requirement
- **THEN** the review skill does not flag the constraint under this requirement, and notes the stated basis

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

### Requirement: Expert review applies a Cognitive Walkthrough before or alongside Heuristic Evaluation
When a stated or reasonably inferable target persona and primary task exist for the reviewed evidence, the review skill SHALL first walk through that primary task step-by-step from the target persona's perspective — evaluating step-by-step clarity, available system feedback, and whether progression is obvious — before or alongside applying the lens-selection procedure's Heuristic Evaluation sweep (the existing domain-skill rule checks). This is a structural sequencing requirement, not a replacement for the existing V01-V06 validation methodology or the lens-selection/synthesis procedure, both of which continue to apply unchanged.

#### Scenario: Persona and primary task are stated or clearly inferable
- **WHEN** the review request or evidence states or clearly implies a target persona (for example "a first-time user booking a return flight") and a primary task
- **THEN** the review skill performs a step-by-step Cognitive Walkthrough of that task from the stated persona's perspective, noting any step where the next action, available feedback, or progress is unclear, before presenting the heuristic-evaluation findings from the applicable domain skills

#### Scenario: No persona or primary task can be inferred
- **WHEN** the reviewed evidence gives no basis for inferring a target persona or primary task (for example a single isolated component screenshot with no stated context)
- **THEN** the review skill reports the Cognitive Walkthrough pass as `NOT ASSESSABLE`, states what context would resolve it, and proceeds with the Heuristic Evaluation sweep rather than skipping the review or inventing an unstated persona

#### Scenario: Walkthrough and heuristic sweep surface the same underlying issue
- **WHEN** both the Cognitive Walkthrough and the Heuristic Evaluation sweep independently surface findings tied to the same underlying defect
- **THEN** the review skill merges them into a single finding per this file's existing cross-lens synthesis guidance, rather than reporting the same defect twice

### Requirement: Aesthetic-Usability Effect testing caution
The review skill SHALL account for the Aesthetic-Usability Effect when interpreting usability-test feedback gathered on a polished, high-fidelity mock-up: users perceive a visually pleasing design as more usable and tend to overlook or under-report minor structural navigation flaws when testing such a mock-up. The review skill SHALL NOT treat positive user feedback on a high-fidelity mock-up's look-and-feel as proof that its underlying navigation/structure is free of defects, and SHALL recommend that structural navigation mechanics be validated on low-fidelity wireframes (before visual polish is applied) whenever the evidence shows usability testing was conducted only on high-fidelity assets.

#### Scenario: Positive feedback on a polished mock-up cited as proof of usability
- **WHEN** the evidence shows user testing feedback praising a high-fidelity mock-up's visual appeal, and the same evidence is being used to conclude the interface has no navigation/structural usability issues
- **THEN** the review skill flags the Aesthetic-Usability Effect risk and recommends validating structural navigation separately on unstyled or low-fidelity wireframes

### Requirement: Role-play UI audit technique
The review skill SHALL make available, as a named technique alongside its existing Five-Second Test and Black Hat Session recommendations, a two-person role-play audit in which one participant plays the user (speaking their thoughts aloud) and the other responds using only the exact on-screen form labels and microcopy, for surfacing robotic, tone-deaf, or unhelpful interface copy that a static reading of a wireframe or screen would not otherwise reveal.

#### Scenario: Recommending a technique for suspected robotic copy
- **WHEN** the review skill reports a finding or uncertainty involving a flow's conversational quality or microcopy tone, and a concrete low-cost validation technique is called for
- **THEN** the review skill may name the role-play UI audit technique as an available option alongside the Five-Second Test and Black Hat Session, matched to the kind of gap being closed

### Requirement: Legacy assumption audit technique
The review skill SHALL make available, as a named technique alongside its existing Five-Second Test, Black Hat Session, and Role-Play UI Audit recommendations, a Legacy Assumption Audit: an iterative "why" probe applied when a UI requirement's or workflow step's only stated justification is that it has always been done that way, used to test whether the requirement reflects a genuine current need or an obsolete administrative or procedural remnant that could be eliminated or redesigned.

#### Scenario: A requirement's only justification is precedent
- **WHEN** the reviewed evidence or accompanying context states that a UI requirement or workflow step exists only because "that's how it's always been done," with no other stated current justification
- **THEN** the review skill may name the Legacy Assumption Audit as an available technique for probing whether the requirement is still genuinely needed, alongside the other named low-cost validation techniques matched to the kind of gap being closed

### Requirement: MVP/beta labeling does not lower applicable severity
The review skill (or a domain skill applying the shared validation methodology) SHALL NOT reduce a finding's applicable severity solely because the reviewed evidence is labeled "MVP", "beta", or "early access". A finding's severity SHALL be assessed against whether the evidence achieves its stated target user or business outcome (a Minimum Viable Solution, per Patton), not against the effort a team saved by shipping a smaller release or by invoking the release-stage label itself as justification.

#### Scenario: Broken checkout excused as an MVP
- **WHEN** reviewed evidence for a checkout flow shows a blocking usability defect (for example no error recovery on a failed payment) and the accompanying context states the release is an "MVP"
- **THEN** the review skill reports the defect at its otherwise-applicable severity, without downgrading it because of the MVP label

#### Scenario: Minimal but functional release
- **WHEN** reviewed evidence shows a deliberately narrow-scope release that nonetheless completes its stated target user outcome without defects at the reviewed severity thresholds
- **THEN** the review skill does not penalize the evidence merely for being narrow in scope

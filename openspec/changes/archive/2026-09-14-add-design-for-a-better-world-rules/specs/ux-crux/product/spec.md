## ADDED Requirements

### Requirement: Composite dashboards and scores do not hide sub-category trade-offs
The product skill SHALL flag a dashboard, health score, or other composite metric that blends multiple distinct, especially trade-off, dimensions (for example cost and quality, or growth and risk) into a single number without providing drill-down access to the constituent categories, since a blended composite can mask a failing sub-category behind an acceptable-looking aggregate. This is distinct from the existing audience-appropriate-complexity requirement, which addresses whether displayed density fits the audience's expertise, and the existing chart-type-fit requirement, which addresses whether the visualization type matches the data category — this requirement addresses aggregation itself hiding sub-category failures, independent of complexity or chart type.

#### Scenario: A composite score blends trade-off dimensions with no drill-down
- **WHEN** the reviewed evidence shows a single composite score or aggregate number derived from multiple distinct underlying dimensions, with no way to view the constituent categories separately
- **THEN** the product skill flags the composite score and recommends exposing the constituent categories as separate, qualitatively distinguishable indicators, with drill-down available from the aggregate view

#### Scenario: A composite view exposes constituent categories
- **WHEN** the reviewed evidence shows a summary view that leads with an aggregate indicator but provides direct drill-down or adjacent display of the constituent categories
- **THEN** the product skill does not flag the view under this requirement

### Requirement: Data-dense screens about a human subject retain a narrative context anchor
The product skill SHALL flag a data-dense screen or view centered on a specific human subject or record (a patient, a customer, an individual transaction) that presents only clinical, numeric, or system-status fields with no visible narrative or contextual anchor identifying who or what the record concerns in human terms, since isolating metrics from their human context degrades a viewer's ability to make sound judgments about the underlying subject.

#### Scenario: A record view shows only numeric/status fields with no human context
- **WHEN** the reviewed evidence shows a screen presenting metrics, statuses, or readings tied to a specific human subject or record, with no visible name, summary, or narrative context identifying the subject
- **THEN** the product skill flags the missing narrative context anchor and recommends surfacing a concise, human-readable summary alongside the metrics

#### Scenario: A record view pairs metrics with a narrative context anchor
- **WHEN** the reviewed evidence shows the same kind of record view, with a visible name, summary, or narrative context displayed alongside the numeric/status fields
- **THEN** the product skill does not flag the view under this requirement

### Requirement: Semi-automated features avoid the passive-monitoring complacency trap
The product skill SHALL flag a semi-autonomous feature (an AI co-pilot, an autopilot-style automation, or a comparable system that performs most of a task automatically) that hands control back to a human user only at the moment of a rare failure, with no advance warning or lead time, while otherwise expecting the human to maintain continuous passive vigilance. Such a design SHALL be flagged as a design defect requiring either full automation of the task or an active-engagement design with explicit, periodic decision checkpoints that keep the human meaningfully involved — not addressed by instructing users to "pay closer attention." This is distinct from the existing requirement that background automation must not seize focus or interrupt active input, which addresses interruption during ongoing use, not vigilance decay during passive monitoring.

#### Scenario: A semi-autonomous feature expects passive vigilance with no handoff lead time
- **WHEN** the reviewed evidence shows a feature that automates most of a task and is designed to hand control back to a human only at the moment a failure occurs, with no advance signal before the handoff
- **THEN** the product skill flags the design as a complacency-trap defect and recommends either full automation of the task or an active-engagement design with periodic decision checkpoints

#### Scenario: A semi-autonomous feature keeps the human actively engaged
- **WHEN** the reviewed evidence shows a semi-autonomous feature that requires the human to make periodic, explicit decisions or confirmations rather than passively monitoring for a rare failure
- **THEN** the product skill does not flag the feature under this requirement

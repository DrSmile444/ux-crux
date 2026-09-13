# ux-crux/product Specification

## Purpose

Defines the product lens covering goal clarity, user intent, information architecture, and content/UX writing.

## Requirements

### Requirement: Primary goal and hierarchy check
The product skill SHALL evaluate whether each reviewed screen has a clear primary user goal, whether the primary action is visually prioritized over secondary actions, and whether content and controls serve that goal rather than internal product structure.

#### Scenario: Competing calls to action
- **WHEN** a reviewed screen presents two visually equal calls to action for a task with one clear primary next step
- **THEN** the product skill flags the lack of visual hierarchy as a finding

### Requirement: Registration and data-minimization check
The product skill SHALL flag cases where a flow requires registration or personal data before demonstrating value, unless identity or the data is intrinsic to the task or required for safety/security.

#### Scenario: Login wall before value
- **WHEN** a reviewed flow requires account creation before showing any core functionality
- **THEN** the product skill flags this as a contextual finding requiring justification

### Requirement: Information architecture check
The product skill SHALL evaluate a reviewed screen or flow's navigation, labeling, and categorization at the intersection of user mental models, content structure/volume, and business or technical context, rather than accepting a structure based solely on internal organizational or system architecture.

The skill SHALL recommend tree testing as the preferred technique for validating a proposed or existing IA structure's findability, rather than relying on visual-comp review alone to judge whether users can locate what they need.

#### Scenario: Navigation labeled after internal structure
- **WHEN** a reviewed navigation menu uses labels that reflect internal department or system names (for example "Division 4 Services") rather than user task goals
- **THEN** the product skill flags the mismatch between the IA and user mental models as a finding, distinct from any separate content-clarity finding

#### Scenario: IA structure has not been validated with users
- **WHEN** a reviewed IA proposal or redesign has only been evaluated through visual mockup review, with no user-facing findability check
- **THEN** the product skill recommends tree testing as the next validation step rather than treating visual review alone as sufficient evidence of findability

#### Scenario: IA context is missing
- **WHEN** the evidence provided does not indicate the business/technical context (e.g. content volume, existing structure, technical constraints) behind a navigation or categorization choice
- **THEN** the product skill reports the IA finding as `NOT ASSESSABLE` per the evidence model rather than assuming the structure is correct or incorrect

### Requirement: Content clarity check
The product skill SHALL evaluate whether button/action labels, error copy, and instructional content use the user's vocabulary and describe the actual action or problem, rather than vague or internal terminology.

#### Scenario: Generic OK button on a specific action
- **WHEN** a reviewed control uses "OK" for a specific, describable action such as deleting an item
- **THEN** the product skill recommends a specific action label instead

### Requirement: Feature and permission justification
The product skill SHALL flag a feature, permission request, or onboarding flow that does not identify (a) a concrete user value it serves, (b) why it is the best available way to serve that value, and (c) explicit operating boundaries for when and how it is used. A flow whose only stated justification is a vague, open-ended value proposition (for example "stay connected" or "never miss out") used to justify unconstrained, unbounded access SHALL be flagged as a finding, distinct from the existing registration-before-value requirement, which addresses only identity/personal-data gating.

#### Scenario: Vague, open-ended value proposition
- **WHEN** a permission request or onboarding screen states only a vague benefit (for example "never miss a moment") with no scoped use case and no stated operating boundary
- **THEN** the product skill flags it as failing the feature-justification check, as a finding distinct from any separate registration-before-value finding

#### Scenario: Feature has a scoped, justified rationale
- **WHEN** a feature states a concrete user value, a stated reason it is the best available approach, and explicit operating boundaries (for example, restricted to a specific context or usage window)
- **THEN** the product skill does not flag it under this requirement

#### Scenario: Justification context is missing
- **WHEN** the evidence provided does not indicate whether an alternative approach was considered or why this approach best serves the stated value
- **THEN** the product skill reports the finding as `NOT ASSESSABLE` per the evidence model rather than assuming the flow passes or fails

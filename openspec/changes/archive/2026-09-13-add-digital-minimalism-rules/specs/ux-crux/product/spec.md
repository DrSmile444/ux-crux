## ADDED Requirements

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

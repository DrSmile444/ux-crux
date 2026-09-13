## ADDED Requirements

### Requirement: Stress-case framing for adverse-state testing
When recommending adverse-state testing, the review skill (or a domain skill applying the shared validation methodology) SHALL frame a dismissible-sounding "edge case" as a stress case when it corresponds to a real, non-negligible population or a genuinely stressful user circumstance, rather than treating rarity alone as license to exclude it. An unexamined business or technical constraint that excludes such a population (for example an arbitrary age cap on a form field) SHALL be flagged as a finding to reconsider, not dismissed as out of scope by default.

#### Scenario: Arbitrary age-cap validation excludes a real population
- **WHEN** a reviewed sign-up form rejects birth dates older than a fixed threshold (for example 100 years) with no stated legal or safety reason
- **THEN** the review skill flags the constraint as excluding a real user population and recommends the team re-examine whether the limit reflects an actual requirement rather than an arbitrary technical convenience

#### Scenario: Constraint has a stated legal or safety basis
- **WHEN** a reviewed constraint that excludes a rare case is backed by a stated legal or safety requirement
- **THEN** the review skill does not flag the constraint under this requirement, and notes the stated basis

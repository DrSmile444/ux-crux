## ADDED Requirements

### Requirement: Findings from Expert practice rules are reported with reduced confidence
A rule whose `Evidence` value is `Expert practice` rests on a published author's stated practice with no cited study. The review skill and the domain skills SHALL report a finding from such a rule with evidence status `RISK`, confidence `Low`, and a severity no higher than `moderate`, and SHALL name the author and work in the finding. A rule SHALL carry `Expert practice` only when a corroboration search found nothing that contradicts it.

#### Scenario: Dashboard tile lacks comparison context
- **WHEN** a skill finds a bare metric under an `Expert practice` rule
- **THEN** the finding is reported as `RISK`, confidence `Low`, severity at most `moderate`, and names Few's *Information Dashboard Design*

#### Scenario: A study contradicts the claim
- **WHEN** a corroboration search finds a study that contradicts a book's claim
- **THEN** the claim is rejected rather than shipped as an `Expert practice` rule

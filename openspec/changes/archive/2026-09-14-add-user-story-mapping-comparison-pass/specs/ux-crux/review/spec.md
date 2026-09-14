## ADDED Requirements

### Requirement: MVP/beta labeling does not lower applicable severity
The review skill (or a domain skill applying the shared validation methodology) SHALL NOT reduce a finding's applicable severity solely because the reviewed evidence is labeled "MVP", "beta", or "early access". A finding's severity SHALL be assessed against whether the evidence achieves its stated target user or business outcome (a Minimum Viable Solution, per Patton), not against the effort a team saved by shipping a smaller release or by invoking the release-stage label itself as justification.

#### Scenario: Broken checkout excused as an MVP
- **WHEN** reviewed evidence for a checkout flow shows a blocking usability defect (for example no error recovery on a failed payment) and the accompanying context states the release is an "MVP"
- **THEN** the review skill reports the defect at its otherwise-applicable severity, without downgrading it because of the MVP label

#### Scenario: Minimal but functional release
- **WHEN** reviewed evidence shows a deliberately narrow-scope release that nonetheless completes its stated target user outcome without defects at the reviewed severity thresholds
- **THEN** the review skill does not penalize the evidence merely for being narrow in scope

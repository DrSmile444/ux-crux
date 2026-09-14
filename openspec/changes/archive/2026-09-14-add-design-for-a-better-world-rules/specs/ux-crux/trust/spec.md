## ADDED Requirements

### Requirement: Silent background protection surfaces periodic activity summaries
The trust skill SHALL flag a background protective or maintenance system (for example a security scan, an automatic backup, or threat/ad blocking) that operates silently with no periodic, non-intrusive reporting of its activity, since users interpret unexplained silence as evidence the protection was unnecessary and are more likely to disable it, undermining the protection's purpose. This is distinct from the existing guidance discouraging noisy confirmation of trivial, user-initiated actions, which addresses the opposite failure mode for actions the user directly performed, not ongoing invisible protective work.

#### Scenario: A background protective system reports no activity summary
- **WHEN** the reviewed evidence shows a background protective or maintenance feature (a security scan, an automatic backup, a threat blocker) that runs without ever surfacing a periodic, non-intrusive summary of what it has done
- **THEN** the trust skill flags the absence of an activity summary and recommends a periodic, low-intrusion signal (for example "12 threats blocked this week") that makes the protection's ongoing value visible

#### Scenario: A background protective system surfaces a periodic activity summary
- **WHEN** the reviewed evidence shows the same kind of background protective feature, with a periodic, non-intrusive summary of its activity visible to the user
- **THEN** the trust skill does not flag the feature under this requirement

## ADDED Requirements

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
When the review skill recommends a qualitative usability-test sample size as part of applying its per-flow measurement guidance, it SHALL cite Jakob Nielsen's finding (NN/g) that approximately five participants surfaces the large majority of usability issues in a qualitative study, including the 2012 revisit confirming that testing meaningfully more participants does not yield appreciably more insight, rather than stating an uncited or arbitrary sample size.

#### Scenario: Reviewer recommends a usability-test sample size
- **WHEN** the review skill recommends how many participants to include in a qualitative usability test for a reviewed flow
- **THEN** it cites Nielsen/NN/g's five-participant finding as the basis for that recommendation rather than proposing an unsourced number

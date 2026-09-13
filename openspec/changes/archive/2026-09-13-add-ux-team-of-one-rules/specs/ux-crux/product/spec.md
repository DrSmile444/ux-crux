## ADDED Requirements

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

## MODIFIED Requirements

### Requirement: Information architecture check
The product skill SHALL evaluate a reviewed screen or flow's navigation, labeling, and categorization at the intersection of user mental models, content structure/volume, and business or technical context, rather than accepting a structure based solely on internal organizational or system architecture. The evaluation SHALL be grounded in the three materials of information architecture — labels/ontology (what terms mean), relationships/taxonomy (how labeled concepts are categorized and connected), and rules/choreography (the conditional logic governing how structure is placed into interaction flow) — rather than treated as a single undifferentiated "navigation" concern.

The skill SHALL recommend tree testing as the preferred technique for validating a proposed or existing IA structure's findability, rather than relying on visual-comp review alone to judge whether users can locate what they need.

When a reviewed catalog, repository, or collection forces every item into a single, mutually exclusive category path, the skill SHALL flag the absence of faceted (multi-attribute) classification when users plausibly need to find items by more than one independent attribute (for example price, format, and date, rather than category alone).

When reviewed navigation or account/sign-in structure exposes an internal organizational, departmental, or system division to the end user (for example separate sign-in flows or menu sections that mirror internal business units rather than a single user-facing concept), the skill SHALL flag this as a corporate-language/organizational-structure leak, distinct from the general mental-model-mismatch scenario, which addresses labeling rather than structural exposure of internal divisions.

When a reviewed entry point (a homepage, a menu, or a landing structure) presents only backend task or feature names with no situational entry point for a user who has not yet identified what they need, the skill SHALL flag the absence of a situation-oriented path into those tasks, distinct from the general mental-model-mismatch scenario, which addresses mismatched labels rather than a missing situational bridge between a real-world circumstance and the available tasks.

#### Scenario: Navigation labeled after internal structure
- **WHEN** a reviewed navigation menu uses labels that reflect internal department or system names (for example "Division 4 Services") rather than user task goals
- **THEN** the product skill flags the mismatch between the IA and user mental models as a finding, distinct from any separate content-clarity finding

#### Scenario: IA structure has not been validated with users
- **WHEN** a reviewed IA proposal or redesign has only been evaluated through visual mockup review, with no user-facing findability check
- **THEN** the product skill recommends tree testing as the next validation step rather than treating visual review alone as sufficient evidence of findability

#### Scenario: IA context is missing
- **WHEN** the evidence provided does not indicate the business/technical context (e.g. content volume, existing structure, technical constraints) behind a navigation or categorization choice
- **THEN** the product skill reports the IA finding as `NOT ASSESSABLE` per the evidence model rather than assuming the structure is correct or incorrect

#### Scenario: Single rigid hierarchy blocks a legitimate alternative access path
- **WHEN** a reviewed catalog or repository places every item in exactly one category branch, and users plausibly need to find the same item by an independent attribute (for example filtering documents by author, date, and file type rather than folder alone)
- **THEN** the product skill flags the missing faceted/multi-attribute classification as a finding

#### Scenario: Sign-in or navigation exposes internal business-unit divisions
- **WHEN** a reviewed product requires customers to choose between separate sign-in portals or menu sections that mirror internal departments or business units rather than a single user-facing account or concept
- **THEN** the product skill flags this as a corporate-language/organizational-structure leak

#### Scenario: Entry point offers only bureaucratic task names
- **WHEN** a reviewed landing page or menu presents only backend-style task or form names (for example "Form 1040-POA") with no situational path (for example "Managing a family member's affairs") for a user who has not yet identified which task applies to their circumstance
- **THEN** the product skill flags the missing situational entry point as a finding, distinct from a mislabeling finding

## ADDED Requirements

### Requirement: Label-to-structure fidelity check
The product skill SHALL flag a UI metaphor whose container/item relationship contradicts the real-world referent it invokes (for example nesting a "roll" of items inside an "album" when the physical referent is the reverse: a roll produces the album). The skill SHALL also flag a single, unified label that silently merges multiple underlying objects or data sources with different visibility or permission scopes, when the evidence shows this could cause a viewer to misjudge who else can see an item grouped under that label.

#### Scenario: UI metaphor inverts the real-world containment relationship
- **WHEN** a reviewed interface nests one concept inside another in a way that contradicts the physical-world relationship the metaphor's own labels invoke (for example placing "Camera Roll" inside "Albums" when a film roll physically produces the album, not the reverse)
- **THEN** the product skill flags the metaphor-fidelity mismatch as a finding

#### Scenario: One label merges sources with different visibility scopes
- **WHEN** a reviewed unified view (for example a single "Calendar") merges personal items with subscribed or externally-sourced items that other viewers cannot see, with no visual differentiation between the two
- **THEN** the product skill flags the reified-label misalignment, since a viewer could reasonably but incorrectly assume every item under that label is equally visible to others

#### Scenario: Merged sources are visually differentiated
- **WHEN** a reviewed unified view distinguishes personal items from subscribed/external items using a distinct visual treatment (for example a different color, texture, or explicit badge) and states which items are private to the viewer
- **THEN** the product skill does not flag a reified-label misalignment finding

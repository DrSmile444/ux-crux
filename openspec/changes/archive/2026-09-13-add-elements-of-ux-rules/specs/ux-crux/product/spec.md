## MODIFIED Requirements

### Requirement: Information architecture check
The product skill SHALL evaluate a reviewed screen or flow's navigation, labeling, and categorization at the intersection of user mental models, content structure/volume, and business or technical context, rather than accepting a structure based solely on internal organizational or system architecture. The evaluation SHALL be grounded in the three materials of information architecture — labels/ontology (what terms mean), relationships/taxonomy (how labeled concepts are categorized and connected), and rules/choreography (the conditional logic governing how structure is placed into interaction flow) — rather than treated as a single undifferentiated "navigation" concern.

The skill SHALL recommend tree testing as the preferred technique for validating a proposed or existing IA structure's findability, rather than relying on visual-comp review alone to judge whether users can locate what they need.

When a reviewed catalog, repository, or collection forces every item into a single, mutually exclusive category path, the skill SHALL flag the absence of faceted (multi-attribute) classification when users plausibly need to find items by more than one independent attribute (for example price, format, and date, rather than category alone).

When reviewed navigation or account/sign-in structure exposes an internal organizational, departmental, or system division to the end user (for example separate sign-in flows or menu sections that mirror internal business units rather than a single user-facing concept), the skill SHALL flag this as a corporate-language/organizational-structure leak, distinct from the general mental-model-mismatch scenario, which addresses labeling rather than structural exposure of internal divisions.

When a reviewed entry point (a homepage, a menu, or a landing structure) presents only backend task or feature names with no situational entry point for a user who has not yet identified what they need, the skill SHALL flag the absence of a situation-oriented path into those tasks, distinct from the general mental-model-mismatch scenario, which addresses mismatched labels rather than a missing situational bridge between a real-world circumstance and the available tasks.

When a reviewed information architecture organizes content or navigation around more than one independent classification dimension, the skill SHALL evaluate whether the chosen structural topology (hierarchical/tree, matrix, organic, or sequential) fits the content and task: hierarchical as the default baseline, matrix reserved for genuinely independent dimensions numbering three or fewer (beyond which users cannot reliably visualize the structure), organic reserved for exploratory or entertainment content, and sequential for linear task flows such as checkout or onboarding. The skill SHALL flag a matrix structure exceeding three independent dimensions, and SHALL flag an organic (unstructured, link-following) structure used for transactional or reference content where users need to reliably relocate items.

When a reviewed search or metadata system exposes raw internal terminology, acronyms, or jargon as the only vocabulary for locating content, or returns no results for a query using a common synonym of an available term, the skill SHALL flag the absence of a controlled vocabulary/thesaurus mapping user language to preferred terms. When a reviewed catalog's available facets do not match the demonstrated expertise or role of its actual audience (for example exposing consumer-oriented facets to a verified specialist audience, or vice versa), the skill SHALL flag the facet-audience mismatch, distinct from the general faceted-classification scenario, which addresses whether faceted classification exists at all rather than whether the chosen facets fit the audience.

When a reviewed product applies a conceptual model (for example, whether an item is treated as a place or as an object) inconsistently across different sections of the same product, the skill SHALL flag the inconsistency, distinct from the label-to-structure fidelity requirement, which addresses a single metaphor's own internal containment logic rather than consistency of a model's application across the product. The skill SHALL also flag a UI element that imposes a literal physical-world constraint through its metaphor (for example simulating page-turning, or restricting navigation to mimic a physical object's layout) when the metaphor provides no demonstrated digital-interaction benefit over a non-literal equivalent.

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

#### Scenario: Matrix structure exceeds a visualizable number of dimensions
- **WHEN** a reviewed catalog lets users browse or filter simultaneously across four or more independent dimensions in a single matrix-style structure (for example size, color, material, and brand all presented as one combined browsing grid)
- **THEN** the product skill flags the structure as exceeding the dimension limit users can reliably visualize, and recommends reducing to the most essential dimensions or restructuring as faceted filtering instead

#### Scenario: Organic structure used for transactional content
- **WHEN** a reviewed checkout flow, account-management section, or reference/documentation area relies on free-form, exploratory link-following with no stable location sense or reliable path back to a specific item
- **THEN** the product skill flags the organic structure as a poor fit for transactional/reference content and recommends a hierarchical or sequential structure instead

#### Scenario: Search has no synonym/thesaurus mapping
- **WHEN** a reviewed search feature returns no results for a common user synonym or plain-language term that maps to an available internal term or acronym
- **THEN** the product skill flags the absence of a controlled-vocabulary/thesaurus mapping as a finding

#### Scenario: Facets do not match audience expertise
- **WHEN** a reviewed catalog's exposed facets reflect only one audience's likely attributes (for example exposing only consumer-facing facets on a product verified to serve B2B technical buyers)
- **THEN** the product skill flags the facet-audience mismatch, distinct from whether faceted classification exists at all

#### Scenario: Conceptual model applied inconsistently across the product
- **WHEN** a reviewed product treats the same kind of item as one conceptual model (for example a "place" a user visits) in one section and as a different conceptual model (for example a standalone "object" a user manipulates) in another section, with no stated reason for the difference
- **THEN** the product skill flags the conceptual-model inconsistency as a finding

#### Scenario: Literal physical metaphor imposes an unnecessary constraint
- **WHEN** a reviewed interface simulates a physical-world mechanic (for example turning a magazine page, or laying out controls to mimic a physical counter/desk) in a way that constrains navigation or interaction with no demonstrated digital benefit over a non-literal equivalent
- **THEN** the product skill flags the literal-metaphor overload as a finding

### Requirement: Content clarity check
The product skill SHALL evaluate whether button/action labels, error copy, and instructional content use the user's vocabulary and describe the actual action or problem, rather than vague or internal terminology. The same action across the reviewed product SHALL use one consistent label rather than introducing synonyms that force recall instead of recognition, unless a distinct underlying outcome justifies the different wording. Copy SHALL be evaluated on a concision-precision spectrum: exact technical precision that makes a message unreadably long for its container is itself a finding, but so is over-concise copy that omits a decision-critical fact; when no position on the spectrum is both accurate and readable, the underlying system logic being described, not the copy, is the root finding. Established domain terminology SHALL NOT be flagged as a plain-language violation when the verified target audience is domain specialists using a professional/expert tool. An opt-out or decline control SHALL NOT be flagged as a content-clarity pass if it forces the user to select a derogatory, self-deprecating, or guilt-inducing statement in order to decline; neutral decline language SHALL be recommended instead. Language describing disability or human traits SHALL avoid tragic ("confined to") or patronizing/heroic ("bravely overcame") framing in favor of neutral, objective phrasing. Product copy referring to an unspecified third party SHALL default to singular "they"/"them"/"their" rather than "(s)he" or "he/she" constructions.

When a reviewed product provides FAQ or help content, the skill SHALL flag content that is organized around arbitrary, internally-invented questions rather than around actual, empirically validated user task goals or frequent inquiries (for example support-log analytics), distinct from the general vocabulary/clarity scenarios above, which address wording rather than whether the content's underlying selection reflects real user needs.

#### Scenario: Generic OK button on a specific action
- **WHEN** a reviewed control uses "OK" for a specific, describable action such as deleting an item
- **THEN** the product skill recommends a specific action label instead

#### Scenario: Same action relabeled across the product
- **WHEN** a reviewed product uses "Delete" for an action in one screen and "Erase" or "Remove" for the identical action elsewhere, with no distinct outcome to justify the difference
- **THEN** the product skill flags the inconsistent terminology as forcing recall over recognition

#### Scenario: Precision forced into an unreadable container
- **WHEN** a reviewed string attempts to state full technical precision (for example a multi-clause social-graph rule) inside a single-line mobile header
- **THEN** the product skill recommends testing an intermediate position on the concision-precision spectrum, and if no readable position preserves the necessary accuracy, flags the underlying logic as overly complex rather than recommending further wording changes alone

#### Scenario: Expert tool retains domain terminology
- **WHEN** a reviewed screen is part of a verified professional/expert tool (for example an engineering component-sizing calculator) and uses established domain terms without inline definitions
- **THEN** the product skill does not flag this as a plain-language violation

#### Scenario: Confirm-shaming decline control
- **WHEN** a reviewed opt-out or decline control requires the user to select a derogatory or self-deprecating statement (for example "No thanks, I prefer to stay uninformed") to close a promotional prompt
- **THEN** the product skill flags the decline copy as a confirm-shaming anti-pattern and recommends neutral decline language (for example "No thanks" or "Close")

#### Scenario: Tragic or heroic disability framing
- **WHEN** reviewed copy describes a person using tragic ("confined to a wheelchair") or patronizing/heroic ("bravely overcame") language rather than neutral, objective phrasing ("uses a wheelchair")
- **THEN** the product skill flags the framing as a value-assigning language finding

#### Scenario: Binary pronoun construction for an unspecified third party
- **WHEN** reviewed copy refers to an unspecified third party (for example a future support agent) using "(s)he" or "he/she" instead of singular "they"
- **THEN** the product skill flags this and recommends the singular "they" default

#### Scenario: FAQ content reflects invented rather than validated questions
- **WHEN** a reviewed help or FAQ section contains questions that internal staff composed to fill out a format, with no evidence they reflect actual user support inquiries or search behavior
- **THEN** the product skill flags the content as failing the format-vs-purpose check and recommends grounding the content in validated user inquiries instead

#### Scenario: FAQ content is grounded in validated user inquiries
- **WHEN** a reviewed help or FAQ section's questions are shown to derive from actual support-log analytics or validated frequent user inquiries
- **THEN** the product skill does not flag a format-vs-purpose finding

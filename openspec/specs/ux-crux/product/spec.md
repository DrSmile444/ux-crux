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

### Requirement: Voice and tone evaluation
The product skill SHALL evaluate reviewed copy's tone against the user's likely emotional state and journey stage, in addition to its existing content-clarity check. Copy SHALL be evaluated for clarity first, concision second, and human warmth third, in that priority order — clever or warm phrasing SHALL NOT be recommended at the expense of clarity. Tone SHALL be treated as a contextual spectrum shaped by the user's journey stage and emotional state (for example, more instructive/reassuring during an error or high-stress task, more motivational during onboarding), not as a single fixed personality applied uniformly everywhere. Celebratory, congratulatory, or lifecycle copy SHALL be flagged if it relies on a culturally specific idiom, sitcom/pop-culture reference, or rhetorical humor unlikely to translate cleanly for a non-native or international audience. A finding about copy's warmth or personality SHALL distinguish between the product's own task-level voice and a separate marketing/brand voice, and SHALL NOT penalize appropriately restrained, low-key product copy for lacking marketing-style personality.

#### Scenario: Cheerful tone during a high-stress task
- **WHEN** a reviewed flow uses an upbeat, exclamation-heavy tone in a context where the user is reporting a problem, loss, or emergency (for example an insurance claim or account-security incident)
- **THEN** the product skill flags the tone mismatch and recommends a more restrained, instructive, or supportive tone appropriate to that moment

#### Scenario: Clever phrasing obscures the outcome
- **WHEN** reviewed copy is witty or stylistically distinctive but leaves the user unsure what will actually happen if they proceed
- **THEN** the product skill flags the clarity failure ahead of any tone/voice concern, per the clear-before-concise-before-human priority

#### Scenario: Culturally specific idiom in celebratory copy
- **WHEN** a reviewed celebratory or lifecycle message (for example a year-in-review or milestone screen) relies on a culturally specific idiom or pop-culture reference
- **THEN** the product skill flags the risk that international or non-native-speaking users will misread the message literally or find it confusing, and recommends translatable phrasing

#### Scenario: Restrained product copy is not penalized for lacking brand personality
- **WHEN** reviewed task-level product copy (for example a form label or system message) is plain and low-key rather than stylistically distinctive
- **THEN** the product skill does not flag this as a tone deficiency, provided the copy remains clear and appropriately human, since product voice and marketing brand voice are evaluated separately

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

### Requirement: Opt-in/opt-out phrasing avoids double-negative or inverted logic
The product skill SHALL flag opt-in/opt-out checkbox or form logic that uses a double negative or inverted logic (for example a checkbox where checking it means declining something) that requires the user to work out what checking or unchecking the control actually does, distinct from the existing confirm-shaming rule, which addresses emotionally loaded language rather than logical inversion.

#### Scenario: Checkbox phrased as a double negative
- **WHEN** the reviewed evidence shows a checkbox labeled with a double negative (for example "Uncheck this box if you do not want to not receive updates") or an inverted-logic construction where checking the box means declining an offer
- **THEN** the product skill flags this as a Trick Questions finding

#### Scenario: Opt-in/opt-out control uses plain affirmative phrasing
- **WHEN** the reviewed evidence shows a single, plain-language affirmative checkbox (for example "Send me weekly updates") that defaults to unchecked
- **THEN** the product skill does not flag a Trick Questions finding

### Requirement: Content organization offers sort/filter modes matched to L.A.T.C.H.
The product skill SHALL evaluate a catalog, list, or content collection's sort and filter controls against Richard Saul Wurman's five organizational modes — Location, Alphabet, Time, Category, Hierarchy (L.A.T.C.H.) — and SHALL flag a collection that offers only one organizational mode when users plausibly need another (for example a product catalog offering only alphabetical browsing when users also need to sort by price or filter by category). This requirement addresses which sort/filter *modes* a collection offers, distinct from the existing structural-topology requirement, which addresses how the underlying IA is structured (tree, matrix, organic, or sequential), not how an already-structured list is sorted or filtered.

#### Scenario: Catalog offers only one organizational mode when users need another
- **WHEN** the reviewed evidence shows a product or content catalog that can only be browsed alphabetically, while the underlying content has an obvious price, category, or chronological dimension users would plausibly want to sort or filter by
- **THEN** the product skill flags the missing organizational mode(s) and recommends adding the specific L.A.T.C.H. mode(s) the content and task call for

#### Scenario: Collection's offered modes already match its content and task
- **WHEN** the reviewed evidence shows a collection whose sort/filter controls already cover every organizational mode users plausibly need for the content and task (for example a news feed sorted chronologically with a category filter)
- **THEN** the product skill does not flag this requirement

#### Scenario: Insufficient evidence of user sorting needs
- **WHEN** the reviewed evidence does not show enough about the collection's content or the user's task to determine which organizational modes are actually needed
- **THEN** the product skill reports this requirement as `NOT ASSESSABLE` rather than assuming a missing mode

### Requirement: Content photography is distinguished from ornamental stock photography
The product skill SHALL flag imagery that is purely decorative or ornamental — generic stock photography with no relationship to the specific product, service, or content it accompanies — when the surrounding content would instead benefit from a content photo that actively informs the user's decision (demonstrating scale, quality, craftsmanship, or addressing a specific stated concern).

#### Scenario: Generic stock photo replaces informative content photography
- **WHEN** the reviewed evidence shows a page using a generic stock photo (for example an unrelated smiling model) in a position where a real photo of the actual product, service, staff, or process would inform the user's decision
- **THEN** the product skill flags the ornamental-photography finding and recommends replacing it with authentic, decision-relevant photography

#### Scenario: Photography already informs the user's decision
- **WHEN** the reviewed evidence shows photography that demonstrates the actual product's scale, quality, or craftsmanship, or otherwise directly informs the user's task
- **THEN** the product skill does not flag this requirement

#### Scenario: Ornamental imagery used only as a legitimate visual separator
- **WHEN** the reviewed evidence shows a decorative image used only where no direct subject photography is possible and legibility genuinely requires a visual separator, with no claim to inform a user decision
- **THEN** the product skill does not flag this requirement as a defect, but may note the imagery adds no informational value

### Requirement: Data tables and dashboards are prioritized for the actual audience, not the data owner
The product skill SHALL flag a data table, chart, or dashboard that displays every available column, metric, or parameter a domain expert or data owner would want, when the actual target audience is a general or novice user, rather than prioritizing and filtering the display down to what that audience needs to complete their task.

#### Scenario: Dense table exposes every backend column to a general audience
- **WHEN** the reviewed evidence shows a table or dashboard with many columns, dense figures, or domain jargon presented to a general consumer audience with no progressive-disclosure path to the full detail
- **THEN** the product skill flags the expert-knowledge-trap finding and recommends a curated primary view with the remaining detail behind progressive disclosure

#### Scenario: Table is already curated for its audience
- **WHEN** the reviewed evidence shows a table or dashboard whose displayed columns and language are already scoped to what the stated audience needs, with advanced detail available on request rather than always shown
- **THEN** the product skill does not flag this requirement

#### Scenario: Verified expert-only audience
- **WHEN** the reviewed evidence confirms the actual audience is domain specialists using a professional tool (for example a financial trading terminal or engineering calculator)
- **THEN** the product skill does not flag high information density as a defect for that audience, consistent with this file's existing plain-language exception for verified expert audiences

### Requirement: Content authenticity and credibility signals
When the reviewed evidence is content-heavy (an article, editorial content, a published report, or comparable long-form material whose credibility affects whether users trust it), the product skill SHALL check for four visible validity signals: source of information, references/citations to trustworthy material, a visible creation/publication date, and author attribution demonstrating relevant expertise. The skill SHALL flag content that omits one or more of these signals when the content type plausibly depends on user trust in its accuracy or currency.

#### Scenario: Un-dated, anonymous article with no citations
- **WHEN** the reviewed evidence is a published article with no visible publication date, no author byline, and no references to external sources
- **THEN** the product skill flags the missing validity signals as a content-credibility finding, distinct from the existing content-clarity and voice-tone rules

### Requirement: Chart and data-visualization type-fit
When the reviewed evidence includes a chart, graph, or dashboard, the product skill SHALL check that the visualization type matches its underlying data category — quantities (bar/pie/bubble/heat map), locations (scale or chorochromatic maps), or connections (tree diagrams, mind maps, flow charts) — and that the visualization follows basic graphical-perception conventions (simple, relevant, clearly defined, visually salient, and consistent with standard chart-reading conventions). This requirement extends the existing expert-knowledge-trap / audience-appropriate dashboard requirement with a distinct concern: whether the chosen chart *type* fits the data, not whether the displayed complexity fits the audience's expertise.

#### Scenario: Pie chart used for a time-series trend
- **WHEN** the reviewed evidence shows a pie chart used to represent a trend or connection between data points over time
- **THEN** the product skill flags a chart-type mismatch and recommends a visualization type appropriate to the underlying data category

### Requirement: Audience-calibrated visual polish
The product skill SHALL check whether the level of visual production polish (photographic quality, animation, decorative styling) matches the trust expectations of the specific, verified target audience for the reviewed product, rather than assuming that maximizing visual polish is always correct. When evidence indicates the target audience associates high polish with inflated cost, inauthenticity, or a mismatch with the product's actual value proposition (for example a wholesale/trade B2B audience), the skill SHALL flag excessive glossiness as a trust-undermining mismatch rather than a positive finding. When the target audience is not established in the evidence, the skill SHALL report this requirement as `NOT ASSESSABLE` rather than assuming either a consumer or specialist audience.

#### Scenario: Luxury-consumer styling applied to a trade wholesale platform
- **WHEN** the reviewed evidence is a B2B wholesale ordering platform styled with high-gloss, luxury-consumer visual treatment, and the evidence establishes that the target audience is professional trade buyers who read high polish as a sign of inflated margins
- **THEN** the product skill flags the visual-polish mismatch as a finding, distinct from a general aesthetic-usability observation, because the mismatch is specifically about audience-appropriate trust signaling

### Requirement: Dynamic outcome-explicit button copy
The product skill SHALL flag a primary action button (for example a checkout or upgrade submission) that uses only generic verb copy ("Submit," "Continue," "OK") when a concrete, dynamically computed outcome is available to state directly in the button label (for example a real order total), distinct from the existing requirement that action labels use descriptive action language in general, which does not require real-time value substitution.

#### Scenario: Checkout button uses generic label despite a known order total
- **WHEN** the reviewed evidence shows a final checkout/submission button labeled only "Submit" or "Continue" while the order total or other concrete outcome is already known at that point in the flow
- **THEN** the product skill flags the generic label and recommends substituting the real computed outcome directly into the button copy

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

### Requirement: Composite dashboards and scores do not hide sub-category trade-offs
The product skill SHALL flag a dashboard, health score, or other composite metric that blends multiple distinct, especially trade-off, dimensions (for example cost and quality, or growth and risk) into a single number without providing drill-down access to the constituent categories, since a blended composite can mask a failing sub-category behind an acceptable-looking aggregate. This is distinct from the existing audience-appropriate-complexity requirement, which addresses whether displayed density fits the audience's expertise, and the existing chart-type-fit requirement, which addresses whether the visualization type matches the data category — this requirement addresses aggregation itself hiding sub-category failures, independent of complexity or chart type.

#### Scenario: A composite score blends trade-off dimensions with no drill-down
- **WHEN** the reviewed evidence shows a single composite score or aggregate number derived from multiple distinct underlying dimensions, with no way to view the constituent categories separately
- **THEN** the product skill flags the composite score and recommends exposing the constituent categories as separate, qualitatively distinguishable indicators, with drill-down available from the aggregate view

#### Scenario: A composite view exposes constituent categories
- **WHEN** the reviewed evidence shows a summary view that leads with an aggregate indicator but provides direct drill-down or adjacent display of the constituent categories
- **THEN** the product skill does not flag the view under this requirement

### Requirement: Data-dense screens about a human subject retain a narrative context anchor
The product skill SHALL flag a data-dense screen or view centered on a specific human subject or record (a patient, a customer, an individual transaction) that presents only clinical, numeric, or system-status fields with no visible narrative or contextual anchor identifying who or what the record concerns in human terms, since isolating metrics from their human context degrades a viewer's ability to make sound judgments about the underlying subject.

#### Scenario: A record view shows only numeric/status fields with no human context
- **WHEN** the reviewed evidence shows a screen presenting metrics, statuses, or readings tied to a specific human subject or record, with no visible name, summary, or narrative context identifying the subject
- **THEN** the product skill flags the missing narrative context anchor and recommends surfacing a concise, human-readable summary alongside the metrics

#### Scenario: A record view pairs metrics with a narrative context anchor
- **WHEN** the reviewed evidence shows the same kind of record view, with a visible name, summary, or narrative context displayed alongside the numeric/status fields
- **THEN** the product skill does not flag the view under this requirement

### Requirement: Semi-automated features avoid the passive-monitoring complacency trap
The product skill SHALL flag a semi-autonomous feature (an AI co-pilot, an autopilot-style automation, or a comparable system that performs most of a task automatically) that hands control back to a human user only at the moment of a rare failure, with no advance warning or lead time, while otherwise expecting the human to maintain continuous passive vigilance. Such a design SHALL be flagged as a design defect requiring either full automation of the task or an active-engagement design with explicit, periodic decision checkpoints that keep the human meaningfully involved — not addressed by instructing users to "pay closer attention." This is distinct from the existing requirement that background automation must not seize focus or interrupt active input, which addresses interruption during ongoing use, not vigilance decay during passive monitoring.

#### Scenario: A semi-autonomous feature expects passive vigilance with no handoff lead time
- **WHEN** the reviewed evidence shows a feature that automates most of a task and is designed to hand control back to a human only at the moment a failure occurs, with no advance signal before the handoff
- **THEN** the product skill flags the design as a complacency-trap defect and recommends either full automation of the task or an active-engagement design with periodic decision checkpoints

#### Scenario: A semi-autonomous feature keeps the human actively engaged
- **WHEN** the reviewed evidence shows a semi-autonomous feature that requires the human to make periodic, explicit decisions or confirmations rather than passively monitoring for a rare failure
- **THEN** the product skill does not flag the feature under this requirement

### Requirement: Non-error administrative bad news may use light, disarming tone
The product skill SHALL permit a non-error, human/administrative notification carrying inherently unwelcome news (an overdue-payment notice, a policy-violation warning, a scheduled-downtime alert, or a comparable administrative message) to use light, self-aware, disarming tone to soften the message, and SHALL flag the absence of any softening only as an opportunity, not a defect. This is distinct from the existing system-error-copy requirements, which require error copy to identify the actual problem in user language and forbid cute language that obscures the fix — those requirements are unchanged and continue to apply to genuine system errors. The product skill SHALL flag light tone used on a security-breach or safety-critical notification, where directness and seriousness are required instead.

#### Scenario: An administrative notice uses harsh, punitive language for a minor lapse
- **WHEN** the reviewed evidence shows a non-error administrative notification (overdue payment, policy violation, scheduled downtime) using cold, legalistic, or punitive language for a minor or routine user lapse
- **THEN** the product skill notes that a lighter, more human tone would reduce user hostility, citing this requirement alongside the existing tone-fit guidance

#### Scenario: An administrative notice uses light, human tone appropriately
- **WHEN** the reviewed evidence shows a non-error administrative notification using light, self-aware tone that still clearly states what happened and what the user should do
- **THEN** the product skill does not flag this requirement

#### Scenario: Light tone is used on a security or safety-critical notification
- **WHEN** the reviewed evidence shows a security-breach warning or a safety-critical notification using light, humorous, or minimizing tone
- **THEN** the product skill flags the tone mismatch as a defect, since directness and seriousness are required for this class of message regardless of this requirement's general permission

#### Scenario: A genuine system error uses cute language instead of clarity
- **WHEN** the reviewed evidence shows a system error message (a failed request, a bug, a crash) using cute or vague language that obscures the actual problem or fix
- **THEN** the product skill defers to the existing system-error-copy requirements, not this requirement, since this requirement governs non-error administrative messaging only

### Requirement: Editorial text uses readable line length and proportional type scale
The product skill SHALL flag long-form or editorial text content (an article, a marketing/landing page, or another long-form informational page) whose body text container renders substantially outside a 50-70 character line length, or whose heading-to-body type scale has no discernible proportional relationship, when the evidence permits measuring rendered or specified text width. This requirement continues the existing web-content scanning/typography rule set and applies under the same scope note restricting it to text-heavy or web-rendered content, not short native UI copy.

#### Scenario: Body text renders far outside the readable line-length range
- **WHEN** the reviewed evidence shows a long-form text container rendering body text at well over 70 characters per line (for example, an unconstrained full-width column on a wide desktop viewport) or so narrow that words break awkwardly on nearly every line
- **THEN** the product skill flags the line-length finding and recommends constraining the container to roughly 50-70 characters per line

#### Scenario: Body text already falls within the readable range
- **WHEN** the reviewed evidence shows long-form body text rendering at roughly 50-70 characters per line with headings visibly and proportionally larger than body text
- **THEN** the product skill does not flag this requirement

#### Scenario: Evidence does not permit measuring rendered text width
- **WHEN** the reviewed evidence (for example, a content description with no layout information) does not show or specify how text will actually render
- **THEN** the product skill reports this requirement as `NOT ASSESSABLE` rather than assuming a pass or fail

### Requirement: Sensitive-domain screens use objective, restrained visual tone
The product skill SHALL flag a medical, legal, grave, or trauma-related screen that uses cheerful, patronizing, or otherwise emotionally mismatched stock imagery or decoration, in favor of an objective, restrained visual tone appropriate to the content's gravity. This is the visual counterpart to the existing disability/human-trait language-neutrality requirement: that requirement governs wording, this requirement governs imagery and decorative styling.

#### Scenario: A grave or medical screen uses cheerful, mismatched stock imagery
- **WHEN** the reviewed evidence shows a medical diagnosis, legal proceeding, bereavement, or comparably grave screen decorated with cheerful, patronizing, or otherwise emotionally mismatched stock photography or ornamentation
- **THEN** the product skill flags the visual-tone mismatch and recommends an objective, restrained visual treatment (plain imagery or none, high-legibility layout) appropriate to the content's gravity

#### Scenario: A grave or medical screen already uses restrained, objective visuals
- **WHEN** the reviewed evidence shows a medical, legal, or grave-content screen using plain, objective visual treatment with no mismatched cheerful decoration
- **THEN** the product skill does not flag this requirement

#### Scenario: The screen's subject matter is not sensitive or grave
- **WHEN** the reviewed evidence does not concern a medical, legal, grave, or trauma-related subject
- **THEN** the product skill does not apply this requirement

### Requirement: No age-patronizing visual tropes for children, teens, or older adults
The product skill SHALL flag a product designed for children, teens, or older adults that uses age-patronizing visual tropes — fake handwriting-style fonts, chaotic decorative color with no functional purpose, or artificial simplification that assumes reduced intelligence — in place of clean, bold, high-legibility design that respects the audience's actual competence. This is parallel to the existing disability-dignity requirement but keyed to age rather than disability; it does not prohibit design genuinely adapted to a demographic's motor-skill, literacy, or visual-acuity needs.

#### Scenario: A product for children or older adults uses patronizing visual gimmicks
- **WHEN** the reviewed evidence shows a product for children, teens, or older adults using fake handwriting fonts, chaotic rainbow decoration with no functional purpose, or an artificially dumbed-down interface that a reasonable member of that audience would find condescending
- **THEN** the product skill flags the age-patronizing-trope finding and recommends clean, bold, high-legibility design that respects the audience's intelligence

#### Scenario: A product for children or older adults uses respectful, adapted design
- **WHEN** the reviewed evidence shows a product for children, teens, or older adults using clean, legible design genuinely adapted to real motor-skill, literacy, or visual-acuity needs, without patronizing decoration
- **THEN** the product skill does not flag this requirement

#### Scenario: The audience is not children, teens, or older adults
- **WHEN** the reviewed evidence does not indicate the product targets children, teens, or older adults as its primary audience
- **THEN** the product skill does not apply this requirement

### Requirement: Platform branding does not compete with user-generated or curated content
The product skill SHALL flag a platform hosting user-generated or curated content (video, portfolios, documents, or comparable media) that overlays that content with animated logos, aggressive watermarks, or persistent banners competing for the viewer's attention, in place of minimal, non-interfering platform branding.

#### Scenario: Platform branding visually competes with the hosted content
- **WHEN** the reviewed evidence shows a video, portfolio, or document viewer with an animated logo, a large or moving watermark, or a persistent banner overlaid on the user's own content
- **THEN** the product skill flags the branding-interference finding and recommends restrained, minimal, non-interfering platform identification (for example, a small static mark or a border, not an overlay)

#### Scenario: Platform branding stays minimal and non-interfering
- **WHEN** the reviewed evidence shows a content platform identifying itself with a small, static, non-competing mark that does not overlay or obstruct the user's own content
- **THEN** the product skill does not flag this requirement

#### Scenario: The content is not user-generated or curated
- **WHEN** the reviewed evidence shows platform-owned or first-party promotional content, not user-generated or user-curated material
- **THEN** the product skill does not apply this requirement

### Requirement: Cross-module controls are grouped by user activity, not internal ownership
The product skill SHALL flag a control surface (a multi-device dashboard, a settings area, or a compound feature spanning several backend modules or subsystems) that requires the user to manually locate and configure each subsystem separately in order to reach one named activity or goal (for example "watch a movie," "set up automatic backups"), when the controls could instead be grouped and exposed by that named activity. This requirement is distinct from the existing information-architecture requirement that navigation and content be organized around user mental models rather than internal department structure: that requirement governs content/navigation categorization, while this requirement applies the same organizing principle specifically to control and settings surfaces for a goal spanning multiple modules.

#### Scenario: A compound task requires configuring several separate modules in sequence
- **WHEN** the reviewed evidence shows a user needing to visit several separate device/module control screens, each requiring its own mode or setting change, in order to complete one named activity
- **THEN** the product skill flags the missing activity-centered grouping and recommends a single control surface organized around the named activity, orchestrating the underlying modules automatically

#### Scenario: A single module inherently requires its own dedicated controls
- **WHEN** the reviewed evidence shows a control surface for a task that genuinely involves only one module or subsystem, with no other subsystem to orchestrate
- **THEN** the product skill does not flag this requirement; it applies only when a goal genuinely spans multiple modules that could be jointly orchestrated

#### Scenario: Controls are already grouped by named activity
- **WHEN** the reviewed evidence shows a control surface offering a named activity (for example a single "Watch a Movie" control) that automatically configures every underlying module needed for that activity
- **THEN** the product skill does not flag this requirement

### Requirement: Instructional content is delivered in-context at the moment of need
The product skill SHALL flag instructional or coaching content for a feature that is front-loaded as a mandatory upfront tour, walkthrough, or manual read before any real task need exists, when that content could instead be delivered in-context at the moment a user attempts or needs that specific feature. This requirement is distinct from the existing first-use/repeat-use/expert-use differentiation requirement, which establishes that these needs differ without specifying when instructional content should be delivered; this requirement addresses delivery timing specifically.

#### Scenario: A mandatory multi-screen feature tour blocks first use
- **WHEN** the reviewed evidence shows a mandatory, multi-screen feature tour or walkthrough that a user must click through before reaching any real task, covering features not yet relevant to the user's immediate goal
- **THEN** the product skill flags the missing just-in-time delivery and recommends moving the explanation to the moment the specific feature is actually attempted or needed

#### Scenario: A brief, skippable contextual tip appears at the moment of first use
- **WHEN** the reviewed evidence shows a short, dismissible contextual tip, coach mark, or inline demonstration appearing the first time a user attempts a specific feature, rather than an upfront mandatory tour
- **THEN** the product skill does not flag this requirement

#### Scenario: Reference documentation exists separately from onboarding
- **WHEN** the reviewed evidence shows comprehensive reference documentation available on request (for example a help center or manual) that is not forced on the user before any task
- **THEN** the product skill does not flag this requirement; comprehensive reference material is acceptable when it is optional and not the primary onboarding mechanism

### Requirement: A tagline next to site/product identity states a concrete value proposition
The product skill SHALL flag a tagline positioned adjacent to a site or product's identity/logo that exceeds roughly 6-8 words or that conveys a vague corporate motto (for example "Here with you, for you" or "World-class solutions") with no concrete, differentiating, functional value proposition a first-time visitor could act on.

#### Scenario: Tagline is a vague, lengthy corporate motto
- **WHEN** the reviewed evidence shows a tagline next to the site/product identity that is a long or vague phrase conveying no concrete information about what the product does or why it is different
- **THEN** the product skill flags the tagline as failing to communicate value and recommends a concise (roughly 6-8 word) phrase stating a specific, differentiating benefit

#### Scenario: Tagline states a concrete, differentiating value proposition
- **WHEN** the reviewed evidence shows a short tagline (roughly 6-8 words) stating a specific, functional value proposition (for example "Restaurant Reservations — Free, Instant, Confirmed")
- **THEN** the product skill does not flag this requirement

#### Scenario: Product is a household-name brand with no functional explanation needed
- **WHEN** the reviewed evidence shows a globally recognized brand whose utility is already common public knowledge, using a purely aspirational or brand-affinity tagline
- **THEN** the product skill does not require the tagline to state a functional value proposition, and weighs this requirement more lightly

### Requirement: A performance metric carries comparison context
The product skill SHALL check that a performance metric on a dashboard or summary appears with at least one comparison that lets the viewer judge it (a target, a prior period, or a variance), not as a bare number. This is practice stated in Few, *Information Dashboard Design* (2006), reported at `Expert practice` level. The requirement is distinct from `C22` (chart type) and `C25` (blended composites), and SHALL NOT apply to secondary values whose context is evident.

#### Scenario: Bare revenue figure
- **WHEN** the reviewed evidence shows a "Revenue" tile with only a number
- **THEN** the product skill flags the missing comparison context as a low-confidence finding

#### Scenario: Figure with target and variance
- **WHEN** the reviewed evidence shows the same tile with a target and a percentage variance
- **THEN** the product skill does not flag this requirement

### Requirement: Displayed precision matches the decision it supports
The product skill SHALL check that numbers on a summary display use the precision the decision needs (for example "$3.8M" for an executive overview) rather than full precision. This is practice stated in Few (2006), reported at `Expert practice` level, and SHALL NOT apply where exact values are the task (accounting, audit, scientific readings).

#### Scenario: Executive tile shows cents
- **WHEN** the reviewed evidence shows an executive overview with "$3,848,305.93"
- **THEN** the product skill flags the excess precision as a low-confidence finding

### Requirement: Display medium fits the viewer's task
The product skill SHALL check that tables are used for looking up exact values and graphs for perceiving shape, trend or exceptions, and that a radial gauge, a pseudo-3D chart or a radar chart is replaced by a linear or bar form unless the category axis is naturally cyclic. This is practice stated in Few (2006), reported at `Expert practice` level. The requirement is distinct from `C22` (match to data category) and SHALL NOT apply to a decorative illustration that carries no data.

#### Scenario: 3-D bars hide data
- **WHEN** the reviewed evidence shows a pseudo-3D bar chart where front bars hide rear bars
- **THEN** the product skill flags the display medium and recommends a flat bar form

#### Scenario: Radar chart for hours of day
- **WHEN** the reviewed evidence shows a radar chart whose categories are the 24 hours of a day
- **THEN** the product skill does not flag the cyclic axis

### Requirement: Product page carries the core elements
The product skill SHALL check that a product page shows a descriptive name, recognisable and enlargeable images, a price that states additional charges, product options with their availability, an add-to-cart control that confirms the action, and a concise description. This follows NN/g, Sherwin, "UX Guidelines for Ecommerce Product Pages" (2019). This requirement is distinct from `C19` (photography that informs). It SHALL NOT apply to a page that is not a purchase page, and elements that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Page without availability or cart feedback
- **WHEN** the reviewed evidence shows options without availability and an add-to-cart tap with no confirmation
- **THEN** the product skill flags the missing elements

#### Scenario: Complete page
- **WHEN** the reviewed evidence shows all core elements present
- **THEN** the product skill does not flag this requirement

### Requirement: Comparison tables limit items and make differences visible
The product skill SHALL check that a comparison table for products, plans or features compares up to five items, uses the same attributes for every item, keeps concise scannable cells, and makes differences easy to see. This follows NN/g, Moran & Dykes, "Comparison Tables for Products, Services, and Features" (2024). This requirement is distinct from `D06`, which concerns compared parameters inside one list. It SHALL NOT apply to a single-item page, and interaction that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Eight plans with different attribute sets
- **WHEN** the reviewed evidence shows a pricing table of eight plans listing different attributes per plan
- **THEN** the product skill flags the item count and the inconsistent attributes

#### Scenario: Three plans, same attributes
- **WHEN** the reviewed evidence shows three plans compared on identical rows
- **THEN** the product skill does not flag this requirement

### Requirement: Mobile product lists show all colour variants as swatches
The product skill SHALL check that, for visually driven product types, a mobile product list item shows every colour variant as a swatch, with a horizontally scrollable area whose edge swatch is cut off to signal more. This follows Baymard, Scott, "Make All Color Swatches Available in Mobile List Items for Visually Driven Product Types (57% Don't)" (2023). This requirement is distinct from `C35` (product page). It SHALL NOT apply to products where colour is not a decision factor, and a list that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Three swatches of eleven
- **WHEN** the reviewed evidence shows a mobile list item with three swatches and no cue that others exist
- **THEN** the product skill flags the truncated variants

#### Scenario: Scrollable swatch row
- **WHEN** the reviewed evidence shows a horizontal swatch row whose last swatch is cut off
- **THEN** the product skill does not flag this requirement

### Requirement: Main product-page sections are not behind horizontal tabs
The product skill SHALL check that a product page presents its main sections (description, specifications, shipping, reviews) as expanded or vertically collapsed sections, not behind horizontal tabs, following Baymard Institute, Blackwood, "Avoid Using 'Horizontal Tabs' for the Main Product Page Sections" (2018, updated 2026). This requirement is distinct from `C35`, which concerns page contents. It SHALL NOT apply to tabs that organize subsections of one content category when no horizontal tab scrolling is needed on mobile, and a layout the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Shipping details in the third tab
- **WHEN** the reviewed evidence shows shipping and reviews in unselected horizontal tabs
- **THEN** the product skill flags the tabbed layout

#### Scenario: Collapsed sections
- **WHEN** the reviewed evidence shows vertically collapsed sections with visible headings
- **THEN** the product skill does not flag this requirement

### Requirement: Product images include an in-scale view, and worn products appear on a model
The product skill SHALL check that a product page has at least one image that shows the product's size against a person, a known object or its setting, and that products worn by users (apparel, accessories, cosmetics) are shown on a human model, following Baymard Institute, Holst, "All Products Need at Least One 'In Scale' Image" (2017). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products whose size is not a decision factor, and images the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Cut-out jeans only
- **WHEN** the reviewed evidence shows jeans only as isolated cut-out thumbnails
- **THEN** the product skill flags the missing model and scale view

#### Scenario: Camera in a hand
- **WHEN** the reviewed evidence shows a camera held in a model's hands
- **THEN** the product skill does not flag this requirement

### Requirement: Price per unit accompanies the package price
The product skill SHALL check that products sold in different quantities or volumes show a price per unit (per count, weight, volume or serving) beside the total package price, following Baymard Institute, Olah, "Display 'Price Per Unit' For Multiquantity Items" (2023). This requirement is distinct from `C35`, which concerns price with additional charges. It SHALL NOT apply to a single fixed-size product, and a price display the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Three pack sizes with totals only
- **WHEN** the reviewed evidence shows 30-, 60- and 90-count packs with only package prices
- **THEN** the product skill flags the missing unit price

#### Scenario: Unit price shown
- **WHEN** the reviewed evidence shows each pack with a price per serving
- **THEN** the product skill does not flag this requirement

### Requirement: Long spec sheets are grouped into titled subsections
The product skill SHALL check that a specification list of about 20 or more items is grouped into subsections with clear titles, with related specifications kept adjacent, following Baymard Institute, Scott, "Product Spec Sheets: 4 Ways to Make Spec Sheets More Scannable for Users" (2018). This requirement is distinct from `C14`, which concerns precision of copy. It SHALL NOT apply to short spec lists, and a list the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Forty laptop specs in one list
- **WHEN** the reviewed evidence shows forty specifications in a single ungrouped list
- **THEN** the product skill flags the missing grouping

#### Scenario: Grouped sheet
- **WHEN** the reviewed evidence shows the same specs under "Display", "Storage" and "Ports" headings
- **THEN** the product skill does not flag this requirement

### Requirement: Buyers' social-media images appear on relevant product pages with attribution
The product skill SHALL check that, for visually driven products, the product page shows buyers' social-media images of that product with source attribution, and distinguishes organic posts from incentivized ones, following Baymard Institute, Galante, "Always Integrate Social Media Visuals on the Product Page for Relevant Products" (2024). This requirement is distinct from `PB06`, which concerns the truthfulness of social proof in general. It SHALL NOT apply to products where appearance in use is not a decision factor, and a page the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Only studio photos on a handbag page
- **WHEN** the reviewed evidence shows a handbag page with studio images and no buyer images
- **THEN** the product skill flags the missing visual social proof

#### Scenario: Attributed buyer photos
- **WHEN** the reviewed evidence shows buyer photos with usernames and a "gifted" label where applicable
- **THEN** the product skill does not flag this requirement

### Requirement: Save, favourite and wishlist work for guests
The product skill SHALL check that a save, favourite or wishlist control can be used without registration, following Baymard Institute, Scott, "Product Page UX Best Practices" (updated 2026). This requirement is distinct from `P06`, which concerns registration before value in general. It SHALL NOT apply where saved items must sync to a verified identity for safety reasons, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Heart icon opens a sign-up wall
- **WHEN** the reviewed evidence shows a heart tap that opens a registration form
- **THEN** the product skill flags the forced registration

#### Scenario: Saved locally for a guest
- **WHEN** the reviewed evidence shows a guest tap that saves the item and offers an optional account
- **THEN** the product skill does not flag this requirement

### Requirement: C47 product rule
The product skill SHALL check that a temporarily out-of-stock product or variation stays purchasable (or back-orderable) with a longer stated delivery time, and the page offers alternative products so the user does not reach a dead end; a permanently discontinued product is labelled as discontinued with alternatives promoted at the top of the page. An email-me or save-to-list control is a supplement, not the only handling, following Baymard Institute, Scott, "Allow Users to Purchase Temporarily 'Out of Stock' Products by Increasing the Delivery Time (68% Don't)" (2017, updated 2025). This requirement is distinct from `C35`, which concerns showing option availability, not what happens when an option is unavailable. It SHALL NOT apply to products that are never restocked (for those the discontinued label applies) or regulated goods that cannot be sold on back order, and stock behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product page where the add-to-cart control is removed and only an email-me-when-available button is shown for a temporarily out-of-stock item
- **THEN** the product skill flags the dead end

#### Scenario: Passing case
- **WHEN** a product page where a temporarily out-of-stock item can be ordered with a later delivery date and alternatives are shown
- **THEN** the product skill does not flag this requirement

### Requirement: C48 product rule
The product skill SHALL check that accessories that come in the purchase price are shown beside the product in an image in the main gallery, and accessories that are pictured but not included are marked as extra on or near the image (for example "sold separately"); vague wording such as "additional accessories available" does not count, following Baymard Institute, Scott, "PDP UX: Provide an 'Included Accessories' Image and Clarify That Optional Accessories Are Extra (44% Don't)" (2019). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products sold without accessories, and pictured items the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mixer page whose gallery never shows the bundled attachments, or a chair image that shows an ottoman sold separately with no note
- **THEN** the product skill flags the missing or misleading accessory image

#### Scenario: Passing case
- **WHEN** a gallery with an included-accessories image and a "keyboard sold separately" note on the image that shows an optional keyboard
- **THEN** the product skill does not flag this requirement

### Requirement: C49 product rule
The product skill SHALL check that a product description includes the content the buying decision needs, where relevant to the product type: materials or ingredients, dimensions with labelled parts and units, and compatibility down to the explicit model. For a feature-rich product, the description is structured as feature highlights, each paired with an image or icon, and secondary features stay in a plain list, following Baymard Institute, Krzyminski, "10% of E-Commerce Sites Have Product Descriptions That Are Insufficient for Users' Needs" (2021); Baymard Institute, Scott, "Structuring Product Page Descriptions by 'Highlights' Increases User Engagement (Yet 78% of Sites Don't)" (2018). This requirement is distinct from `C35`, which only asks for a concise description. It SHALL NOT apply to simple products whose description needs none of these items, or low-priority products for which highlight structure is not worth the effort, and content the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a skin-care product page with a two-line description and no ingredient list, or an office chair with two unlabelled dimension values
- **THEN** the product skill flags the missing decision content

#### Scenario: Passing case
- **WHEN** a page that lists ingredients, labelled dimensions with units and exact compatible models, with key features of a complex product shown as icon-led highlights
- **THEN** the product skill does not flag this requirement

### Requirement: C50 product rule
The product skill SHALL check that on a product page the price and any discount are highly visible (large size, bold, colour or contrast), the original price is visually distinct from the current price, all offer information sits next to the price, the amount or percentage off is stated, and each offer has one description (repeated descriptions of the same offer use identical wording), following Baymard Institute, Reeves, "How to Display Price Discounts on the Product Page: Avoid These 4 Pitfalls (18%+ Have One or More)" (2022). This requirement is distinct from `C40`, which concerns a price per unit beside the package price. It SHALL NOT apply to pages with no discount, for the discount clauses, and pricing the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a page with a small grey price, a "Special Offer" text far from the price, and a banner plus a badge describing the same offer in different words
- **THEN** the product skill flags the price and offer presentation

#### Scenario: Passing case
- **WHEN** a buy section with a large bold price, a struck-through original price, the amount saved and one offer description beside it
- **THEN** the product skill does not flag this requirement

### Requirement: C51 product rule
The product skill SHALL check that key product images carry text or graphic callouts for features that a photo alone does not convey (for example size, water resistance, material, model height), and callout text remains legible at mobile size, following Baymard Institute, Scott, "Product Page UX: Include Descriptive Text or Graphics for Some Product Images (52% Don't)" (2018). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products whose features are fully visible in the photo, and mobile rendering the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a gallery of plain photos for a water-resistant bag with no callout, or a callout image whose text is unreadable at phone width
- **THEN** the product skill flags the missing or illegible callouts

#### Scenario: Passing case
- **WHEN** a gallery image that labels the laptop pocket size and the water-resistant material in text readable on a phone
- **THEN** the product skill does not flag this requirement

### Requirement: C52 product rule
The product skill SHALL check that product videos sit in the image gallery with a play icon on the thumbnail, all videos are included there, and a separate video tab is not used; repeating the videos lower on the page is acceptable, following Baymard Institute, Holst, "UX Research on Product Page Videos: Where and How to Embed Them (35% Get it Wrong)" (2019). This requirement is distinct from `C38`, which concerns the layout of the main page sections. It SHALL NOT apply to products with no video, and gallery behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a page where the video is only far down the page, or video thumbnails have no play icon or sit in a separate tab
- **THEN** the product skill flags the video placement

#### Scenario: Passing case
- **WHEN** a gallery where video thumbnails carry a play icon next to the photo thumbnails
- **THEN** the product skill does not flag this requirement

### Requirement: C53 product rule
The product skill SHALL check that the product page offers both a site-authored FAQ and a community Q&A (or a Q&A where staff also answer and users can answer too), so questions that the description leaves out are answered and answers do not come only from the seller, following Baymard Institute, Holst, "Product Page UX: Provide Both Site-Authored FAQs and Community-Driven Q&As (70% Get it Wrong)" (2017). This requirement is distinct from `C18`, which concerns how help or FAQ content is chosen. It SHALL NOT apply to sites too small to moderate a Q&A, and sections the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product page with reviews but neither an FAQ nor a Q&A, or with a user Q&A only and no site FAQ
- **THEN** the product skill flags the missing question channel

#### Scenario: Passing case
- **WHEN** a product page with a pre-filled FAQ section and a separate user Q&A section
- **THEN** the product skill does not flag this requirement

### Requirement: C54 product rule
The product skill SHALL check that a product page offers both alternative products (similar items for users whose item is not a match) and supplementary products (accessories and add-ons), shown as separate, labelled groups, following Baymard Institute, Holst, "Product Page Usability: Recommend Both Alternative & Supplementary Products (Only 42% Get it Right)" (2014). This requirement is distinct from `P09`, which concerns where cross-sell modules sit relative to the primary product details. It SHALL NOT apply to single-product sites or pages where no related product exists, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a dress page that suggests only other dresses and no shoes or accessories, or a page with no suggestions
- **THEN** the product skill flags the missing suggestion type

#### Scenario: Passing case
- **WHEN** a product page with a "similar items" group and a "goes well with" group
- **THEN** the product skill does not flag this requirement

### Requirement: C55 product rule
The product skill SHALL check that every product list item that shows a star average also shows the number of ratings the average is based on, following Baymard Institute, Scott, "Always Show the Number of User Ratings in List Items (5% Don't)" (2023, updated 2025); Baymard Institute, Soderlund, "Desktop UX Trends: 10 Common Pitfalls & Best Practices" (2025). This requirement is distinct from `C37`, which concerns colour swatches in mobile list items. It SHALL NOT apply to products with no ratings or sites without user ratings, and ratings the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product list where each item shows only stars
- **THEN** the product skill flags the missing rating count

#### Scenario: Passing case
- **WHEN** a product list where each item shows stars and a count such as "(1,387)"
- **THEN** the product skill does not flag this requirement

### Requirement: C56 product rule
The product skill SHALL check that product list items show the same attributes across similar items (an unknown attribute is omitted everywhere or stated as unavailable), each element is visually distinct from the others, and the key information is present: price, title or type, thumbnail, ratings average with count, and variations that matter for the category. Variations of one product are combined into one list item with swatches and not listed as separate items, following Baymard Institute, Olah, "2 Key Design Principles for Product Listing Information (64% Get at Least 1 Wrong)" (2023); Baymard Institute, Olah, "Product Listing UX: What Information to Display in Product Listings (50% Get It Wrong)" (2023); Baymard Institute, Crowley, "Combine Variations of Products into One List Item (12% Don't)" (2021). This requirement is distinct from `C37`, which concerns the swatch row of a mobile list item only. It SHALL NOT apply to lists with a single item, and attributes the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a list where only one laptop item shows specs, or one undifferentiated text line holds name and specs, or each colour of a shirt is a separate item
- **THEN** the product skill flags the list item design

#### Scenario: Passing case
- **WHEN** a list where every item shows price, title, thumbnail, rating with count and bulleted specs, with colours as swatches in one item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart items highlighted in product lists
The product skill SHALL check that a product list or search-result page marks items already in the user's cart (background, border, label, or changed features such as a view-cart link), following Baymard Institute, Christian Holst, "Product List and Category Navigation: Highlight Items Already in the User's Cart (96% Don't)" (2016). This requirement is distinct from `C37`, which concerns colour-variant swatches in a mobile list item. It SHALL NOT apply to a site without a cart or with a single-item purchase flow, and behaviour on lists not shown SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a search-results design where every item is styled identically after the user added one to the cart
- **THEN** the product skill flags the C57 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a result list where the in-cart item shows a label and a view-cart link
- **THEN** the product skill does not flag this requirement

### Requirement: Relevant, labelled cart cross-sells
The product skill SHALL check that cross-sell suggestions in the cart or added-to-cart confirmation are relevant to the cart contents, are not drawn only from other customers' purchases, vary in number with the relevant items available, carry a label that states why they are suggested, put compatible accessories first, and do not offer alternatives to cart items at checkout, following Baymard Institute, Sally Collins, "6 Ways to Improve the Relevance of Cross-Sells in the Cart (52% of Desktop Sites Don't Do Enough)" (2021). This requirement is distinct from `P09`, which concerns where recommendation modules sit on a product-detail page. It SHALL NOT apply to upgrades or newer versions of the same product, and the quality of the recommendation engine behind a design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a cart showing a fixed row of five unlabelled Customers also bought items, several unrelated to the cart item
- **THEN** the product skill flags the C58 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is an added-to-cart overlay with a labelled, short list of compatible accessories for the item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart quantity changes apply at once
The product skill SHALL check that cart quantity is changed with plus and minus buttons, alone or around an open text field, and each change updates the line item, cart summary and total at once, without a separate Update step, a focus-out requirement or a long quantity drop-down, following Baymard Institute, Edward Scott, "Use Buttons or Buttons Plus an Open Text Field for Updating Cart Quantity (61% Don't)" (2022). This requirement is distinct from `F27`, which concerns sliders versus steppers for logged values. It SHALL NOT apply to a cart where each item is unique and fixed at one unit, and timing of updates in a static design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a cart with a quantity text field and an Update link that must be pressed
- **THEN** the product skill flags the C59 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a cart with plus and minus buttons whose totals change on each tap
- **THEN** the product skill does not flag this requirement

### Requirement: Inspirational images reach depicted products
The product skill SHALL check that an inspirational or lifestyle image lets users reach every depicted product through a nearby product list, a curated page or overlay, or a product list that places the depicted items first and identifies them, and shows depicted products that are no longer available as unavailable, following Baymard Institute, Kathryn Reeves, "Inspirational Images Should Link to All Depicted Products (9% of Sites Don't)" (2020). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to purely decorative images that depict no product for sale, and how interactive tags on the image perform SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a category header showing a styled room that links to a list in which the depicted sofa cannot be found
- **THEN** the product skill flags the C60 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a Shop the look overlay that lists every depicted item and marks unavailable ones
- **THEN** the product skill does not flag this requirement

### Requirement: Quick View for visually driven products
The product skill SHALL check that a product list of visually driven products offers a Quick View that opens over a still-visible list, shows key attributes, a small gallery and a prominent product-page link, and closes on the browser Back action, while spec-driven products use comparison features instead, following Baymard Institute, Mark Crowley, "Provide “Quick Views” for Visually Driven Products (50% Don't)" (2022). This requirement is distinct from `C37`, which concerns colour swatches in a mobile list item. It SHALL NOT apply to spec-driven product types with many attributes, and Quick View behaviour outside the reviewed product type SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is an apparel Quick View that fills the whole screen and sends Back to the previous page
- **THEN** the product skill flags the C61 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is an apparel Quick View over a dimmed list that Back closes
- **THEN** the product skill does not flag this requirement

### Requirement: Comparison feature for spec-driven products
The product skill SHALL check that a spec-driven product list offers a comparison feature with a compare checkbox visible without hover, a persistent selection panel, sticky column headings in the table, and hideable identical rows (also following Baymard Institute, Edward Scott, "4 Ways to Optimize the Comparison Feature for Scanning" (2022)), following Baymard Institute, Mark Crowley, "Product Comparison UX: Always Provide Comparison Features for Spec-Driven Industries (17% Don't)" (2022). This requirement is distinct from `C36`, which concerns the content and layout rules of a comparison table. It SHALL NOT apply to mobile sites and non-spec-driven products, and mobile comparison quality SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a laptop list whose compare checkbox appears only on hover and whose table headings scroll away
- **THEN** the product skill flags the C62 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a laptop list with always-visible compare checkboxes, a bottom selection panel and an Only show differences option
- **THEN** the product skill does not flag this requirement

### Requirement: Review photos and fit scale
The product skill SHALL check that the review form accepts reviewer photos and the reviews can be filtered to those with photos, and apparel and footwear reviews show an aggregate fit scale (also following Baymard Institute, Iva Olah, "Apparel & Accessories Sites: Always Provide an Aggregate “Fit” Subscore in the Reviews" (2024)), following Baymard Institute, Edward Scott, "Allow Users to Upload Images with Their Review (34% of Sites Don't)" (2020). This requirement is distinct from `D12`, which concerns navigation among opened reviewer images. It SHALL NOT apply to the fit scale on non-apparel products and sites that cannot accept uploads for legal or safety reasons, and moderation quality and aggregate accuracy SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a jeans review section with text-only reviews and a per-review fit line but no aggregate
- **THEN** the product skill flags the C63 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a jeans review section with photo upload, a with-photos filter and a runs small to runs large scale
- **THEN** the product skill does not flag this requirement

### Requirement: Rating sort and default sort
The product skill SHALL check that a sort by customer rating accounts for the number of ratings as well as the average, and the default sort of a product list is a relevance order showing all major product types among the first items (also following Baymard Institute, Kathryn Reeves, "Always Sort Product Lists by Diversity-Based “Relevance”" (2021)), following Baymard Institute, Sonia Sousa, "Use Both Ratings Average and Number of Ratings When Sorting by User Ratings" (2024). This requirement is distinct from `IA09`, which concerns matching sort modes to content dimensions. It SHALL NOT apply to lists without ratings and lists where the user chose the sort, and sort logic not visible in the design or code SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a Top rated sort that puts a one-rating five-star item first, under a default of price low to high
- **THEN** the product skill flags the C64 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a Top rated sort weighted by rating count under a default Relevance sort covering all product types
- **THEN** the product skill does not flag this requirement

### Requirement: Intermediary category pages
The product skill SHALL check that in a large product catalog the top one or two category levels open an intermediary page of subcategory tiles with a View all link, with promotions placed below or subdued relative to the subcategories, following Baymard Institute, Edward Scott, "Consider Providing “Intermediary Category Pages” (13% Don't)" (2023). This requirement is distinct from `IA03`, which concerns faceted classification instead of a single hierarchy. It SHALL NOT apply to small catalogs and deeper levels, and the choice between categories and filters and homepage product breadth SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a top-level category page that shows only sale banners and sends users straight to a product list
- **THEN** the product skill flags the C65 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a top-level category page led by subcategory tiles with a View all link
- **THEN** the product skill does not flag this requirement

### Requirement: Product image zoom and rotation
The product skill SHALL check that product images can be enlarged: on touch screens both pinch and double-tap zoom the image (and no viewport setting blocks page zoom), the zoomed view loads a higher-resolution version so details stay sharp, and on mobile the product image scales up proportionally when the device rotates to landscape, following Baymard Institute, Holst, "Mobile Gestures: 40% of Sites Don't Support Pinch or Tap Gestures for Product Images" (2016), Baymard Institute, Scott, "25% of E-Commerce Sites Don't Have Product Images with Sufficient Resolution or Level of Zoom" (2020), and Baymard Institute, Scott, "Mobile Web: Scale Product Images Proportionally in Mobile Landscape Mode (52% of Sites Don't)" (2018). This requirement is distinct from `C35`, which concerns product page contents in general, including enlargeable images. It SHALL NOT apply to products whose appearance and fine detail do not influence the purchase, and desktop zoom gestures the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: C44 failing case
- **WHEN** the reviewed evidence is a mobile apparel product page where pinch and tap do nothing, or the zoomed image turns pixelated
- **THEN** the product skill flags the missing zoom, low-resolution zoom or fixed-size image

#### Scenario: C44 passing case
- **WHEN** the reviewed evidence is a mobile apparel product page where pinch and double-tap zoom into a sharp high-resolution image and the image grows in landscape
- **THEN** the product skill does not flag this requirement

### Requirement: Additional product images signposted
The product skill SHALL check that for visually driven products, a product list item gives access to at least three thumbnails including the default one, with carousel arrows or dots visible by default on touch screens; a product-page gallery shows additional images as thumbnails and not only as dots or a count; when the thumbnail row is cut short, an arrow control, a final +N thumbnail or a visibly cut-off partial thumbnail shows that more exist, following Baymard Institute, Olah, "Always Provide 3 or More Product Thumbnails in Product Lists and Search Results" (2024), Baymard Institute, Reeves, "Always Use Thumbnails to Represent Additional Product Images (76% of Mobile Sites Don't)" (2020), and Baymard Institute, Blackwood, "Always Signpost Hidden Thumbnails in Image Galleries" (2017, updated 2026). This requirement is distinct from `C37`, which concerns colour swatches in mobile list items. It SHALL NOT apply to products whose appearance does not drive the decision and products with a single image, and image counts beyond the cited range the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: C45 failing case
- **WHEN** the reviewed evidence is a mobile apparel list item with one image and no indicator, or a gallery with five cut-off-less thumbnails out of ten
- **THEN** the product skill flags the unsignposted or missing additional images

#### Scenario: C45 passing case
- **WHEN** the reviewed evidence is a mobile apparel list item with swipe and visible dots for several images, and a gallery whose last thumbnail is partly cut off
- **THEN** the product skill does not flag this requirement

### Requirement: Account creation is offered after purchase with concrete benefits
The product skill SHALL check that account creation is offered on the order-confirmation page, not at the start or middle of checkout, and names concrete benefits instead of vague claims, following Baymard Institute, Scott, "Save Account Creation for the Confirmation Step (42% Don't)" (2023) and Baymard Institute, Söderlund, "4 Ways to Improve the Post-Checkout UX" (2025). This requirement is distinct from `P06`, which concerns registration before value in general. It SHALL NOT apply to a service that requires an account to place an order, and behaviour after the confirmation page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Registration prompt mid-checkout
- **WHEN** a guest sees "Create an account for faster checkout" at the billing step and nothing on the confirmation page
- **THEN** the product skill flags the timing

#### Scenario: Confirmation page offer
- **WHEN** the confirmation page offers a password field with benefits such as saved details and order tracking
- **THEN** the product skill does not flag this requirement

### Requirement: Variant selector holds variations of one product [C66]
The product skill SHALL check that an attribute selector on a product page (dropdown, swatches) offers only variations of the same product that differ in one simple attribute such as colour, size or pattern; options that change the product description and features (a TV series, a model line) have their own listings, with related models shown as comparable products. This requirement is distinct from C56, which combines variations of one product into one list item but does not say which options belong to a different product. It SHALL NOT apply to very small catalogues that list each colour separately yet keep an attribute selector on every page, and how complex an attribute is, when the evidence does not show what the options change, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Design Guidelines for Selling Products with Multiple Variants" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a TV page offers a Series dropdown whose choices change the model, price and features while the main image stays the same
- **THEN** the product skill flags the selector that mixes different products

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that each TV series has its own page and a Similar products panel links the other series, while colour is chosen by swatch
- **THEN** the product skill does not flag this requirement

### Requirement: Product page shows in-cart state [C67]
The product skill SHALL check that when a product is already in the cart, its product page shows that state next to the add control (a visible message and a label such as Add another), and the control still lets the user add more of the item. This requirement is distinct from C57, which marks in-cart items in product lists and search results, and C35, which requires add-to-cart confirmation at the moment of adding, not an in-cart state on a later visit to the same product. It SHALL NOT apply to single-item purchases such as a unique or one-off product, and whether the state survives across sessions SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Adding an Item to a Shopping Cart: Provide Clear, Persistent Feedback" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product already in the cart shows an unchanged Add to cart button on its product page with no in-cart indicator
- **THEN** the product skill flags the missing in-cart state

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the product page shows 2 in your cart beside an Add another button
- **THEN** the product skill does not flag this requirement

### Requirement: Listing page shows subcategory links [C68]
The product skill SHALL check that A product listing page that also serves as a category page shows its subcategories as separate links above the product listings and apart from the filters, so users can narrow to a more specific group without opening filters. This requirement is distinct from C65, which concerns the intermediary page of subcategory tiles at the top category levels, and D18, which concerns the filter types offered. It SHALL NOT apply to a category with no subcategories or to a top-level intermediary page that C65 governs, and whether users discover subcategories faster SHALL be reported `NOT ASSESSABLE` without test data. Source: Nielsen Norman Group, Harley, "UX Guidelines for Ecommerce Homepages, Category Pages, and Product Listing Pages" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a category page shows a product grid and lists subcategories only as one filter among many
- **THEN** the product skill flags the buried subcategories

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page shows subcategory links above the product grid, separate from the filter panel
- **THEN** the product skill does not flag this requirement

### Requirement: Listing photos share one style [C69]
The product skill SHALL check that product photos in one listing or search-results page share a consistent style (background, orientation, context, lighting, scale), so users can scan and compare them; marketplaces enforce the style for sellers through written photo standards. This requirement is distinct from C56, which requires the same attributes across similar list items, not a shared photographic style. It SHALL NOT apply to editorial listings with one cohesive visual style that varies pose or setting, and the source of each image SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Moran, "6 Tips for Product Photos on Listing Pages" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that boots on a listing page appear on white, outdoors and on models at different scales, so heel heights cannot be compared
- **THEN** the product skill flags the inconsistent photo styles

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that all boots are shot from the same side view on a white background
- **THEN** the product skill does not flag this requirement

### Requirement: Size shown in local and original systems [C70]
The product skill SHALL check that on a localized apparel or footwear site, the product page and the cart show the size in the sizing system of the shipping destination the user chose, beside the original size on the item label, and not only in a size-chart popup. This requirement is distinct from C63, which concerns an aggregate fit scale from reviews, not the sizing system shown for each size. It SHALL NOT apply to single-market sites and goods sold without sizes, and the accuracy of the size conversion SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Size Guides and Product Measurements for International Shoppers" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a shopper sets the destination to China and the product page lists only Italian and US sizes
- **THEN** the product skill flags the missing local size

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the product page and the cart show 11 (US size), label size 44 (EU) for a US destination
- **THEN** the product skill does not flag this requirement

### Requirement: Size guide specific and complete [C71]
The product skill SHALL check that A size guide on a site that sells several brands is specific to the brand or item (a brand size chart, body measurements per size, or garment measurements), lists any garment measurement for every size and not only the size the model wears, and states how the measurement was taken. This requirement is distinct from X28, which requires size charts to be real text and not images, not what the chart must contain, and C70, which concerns the sizing system shown for each size. It SHALL NOT apply to single-brand sites with one chart and goods sold without sizes, and the accuracy of the stated measurements SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Size Guides and Product Measurements for International Shoppers" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that one general conversion chart opens for every jacket on a multi-brand site, and the length is listed only for size S
- **THEN** the product skill flags the generic chart and the partial measurements

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the size guide names the brand, lists chest and length for every size, and shows a diagram of how length is measured
- **THEN** the product skill does not flag this requirement

### Requirement: Add-to-cart confirmation persists [C72]
The product skill SHALL check that after add to cart, a confirmation stays visible until the user dismisses it or moves on (a non-fading overlay, a banner, or an interstitial) and shows the product image, name, price, quantity and chosen options; the cart icon also shows an updated item count. This requirement is distinct from C35, which requires an add-to-cart control that confirms the action without stating how long the confirmation lasts or what it shows. It SHALL NOT apply to sites where the cart updates visibly in place and the user can review its contents in one step, and the timing of a transient message that a static screen does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Adding an Item to a Shopping Cart: Provide Clear, Persistent Feedback" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the only add-to-cart feedback is an overlay that fades after a moment and lists no size or colour
- **THEN** the product skill flags the transient and incomplete confirmation

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that add to cart opens a non-fading banner with image, name, price, quantity and options, and the cart badge increments
- **THEN** the product skill does not flag this requirement

### Requirement: Cart line item identifies the product [C73]
The product skill SHALL check that each cart line item shows an image large enough to tell it from similar items, the product name, the chosen options such as size and colour, and the price; the image shows the chosen variant; and the product name and image link to the product page, with the name styled as a link and not revealed as a link only on hover. This requirement is distinct from C59, which concerns how cart quantity is changed and updated, not what identifies a line item. It SHALL NOT apply to carts of digital items that have no image, and checkouts with no cart view, and the variant shown after a selection change in a static design SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Schade, "Decision Making in the Ecommerce Shopping Cart: 4 Tips for Supporting Users" (2014); Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the cart shows a thumbnail too small to tell a jacket from similar jackets, and the listed colour is navy while the image shows red
- **THEN** the product skill flags the unidentifiable or mismatched cart image

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart shows a clear image of the chosen colour, the name, size and colour text, and a blue linked product name that leads to the product page
- **THEN** the product skill does not flag this requirement

### Requirement: Cart line has a Remove control [C74]
The product skill SHALL check that each cart line has a visible Remove control, so users do not have to set the quantity to zero to delete an item; where a quantity control accepts zero, zero removes the item and does not return an error. This requirement is distinct from C59, which concerns changing quantity without an Update step, not how an item is removed. It SHALL NOT apply to a cart whose items cannot be removed by policy or where each item is fixed at one unit, and a removal flow or the result of entering zero that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "The Mobile Checkout Experience" (2018); Nielsen Norman Group, Schade, "Decision Making in the Ecommerce Shopping Cart: 4 Tips for Supporting Users" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a cart line has a quantity drop-down that starts at 1 and no Remove control beside the item
- **THEN** the product skill flags that the item cannot be removed directly

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that each cart line has a quantity stepper and a Remove link, and a quantity of 0 removes the item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart persists and offers Save for Later [C75]
The product skill SHALL check that the cart works as a holding place while shoppers compare and decide: items placed in it are kept between visits, and each line offers a visible Save for Later link (not hidden behind a swipe, a dropdown or the page fold) that works without registration or naming a list, gives immediate feedback and shows the saved items on the cart page; the action is not labelled Wishlist, which users read as a gift list. This requirement is distinct from C43, which requires save and wishlist controls to work without registration, not cart persistence or the placement, label and feedback of saving inside the cart, and C57, which marks in-cart items in product lists. It SHALL NOT apply to flows with no cart, such as a single-item purchase, or to carts that must expire for stock or price reasons stated to the user, and persistence across devices and the use of saved items after the user leaves the site SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014); Nielsen Norman Group, Laubheimer, "Shopping Cart or Wishlist? Saving Products for Later in Ecommerce" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the cart is cleared when the session ends, and Move to Wish List appears only after a swipe and opens a login page
- **THEN** the product skill flags the lost cart and the hidden, gated save action

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart reloads with its items on the next visit, and each line shows Save for Later, which moves the item to a Saved Items section on the same page without login
- **THEN** the product skill does not flag this requirement

### Requirement: Cart applies and shows discounts [C76]
The product skill SHALL check that A discount the site advertises is applied automatically to a cart that qualifies, and the cart and order total show each applied discount on the affected line with the discounted price and the offer name; a free item shows as Free and not as a charge followed by a separate subtraction; a code field, where one is offered, is reachable from the cart or mini-cart (a link to the field is enough), and a code is checked and reflected in the total before payment details are requested. This requirement is distinct from C59, which concerns how quantity changes update the totals, C50, which concerns price and discount display on the product page, and F32, which concerns hiding the code field behind a link in the checkout form. It SHALL NOT apply to a cart with no discounts or to single-use codes sent to a specific person, and promotion logic on the server and whether the qualifying rule applies correctly SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Applying Discounts and Promotions on Ecommerce Websites" (2019); Nielsen Norman Group, Schade, "Ecommerce UX: 3 Design Trends to Follow and 3 to Avoid" (2014); Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the site banner advertises a discount on orders over a set amount, the cart requires a code the shopper must find elsewhere, and a two-for-one offer shows the full price on each line
- **THEN** the product skill flags the manual step and the line price that ignores the discount

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart applies the discount automatically, shows the second item as Free with the offer name on that line, and offers a code link in the mini-cart
- **THEN** the product skill does not flag this requirement

### Requirement: Promotion restrictions stated at the offer [C77]
The product skill SHALL check that A promotion advertised in a banner, on a product or in the cart states its restrictions at the offer (exclusions, expiry, whether it combines with other offers, and final-sale terms next to the affected item), and applying a coupon never silently removes another advertised offer. This requirement is distinct from CT01, which concerns when mandatory fees are disclosed in a priced flow, and C76, which concerns how applied discounts appear in the cart, not the conditions attached to a promotion. It SHALL NOT apply to promotions with no conditions, and the accuracy of the promotion terms SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019); Nielsen Norman Group, Flaherty, "Applying Discounts and Promotions on Ecommerce Websites" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a banner advertises free shipping and a coupon code, and entering the code removes free shipping with no notice
- **THEN** the product skill flags the unstated restriction

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the banner reads Free shipping, other offers cannot be combined, the coupon states the same, and a final-sale note sits next to the reduced item in the cart
- **THEN** the product skill does not flag this requirement

### Requirement: Minimum-spend gap shown [C78]
The product skill SHALL check that A minimum-spend or multi-item offer shows the user how much more to add to qualify, in the cart and in the added-to-cart confirmation, and the page can offer items that close the gap. This requirement is distinct from CT07, which concerns delivery dates and where a free-shipping notice appears, not showing progress toward an offer threshold. It SHALL NOT apply to offers with no purchase threshold, and the cart total in states the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a header advertises free shipping over a set amount, but the cart shows no remaining amount
- **THEN** the product skill flags the missing gap indicator

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart says Add 12 more for free shipping and lists items near that price
- **THEN** the product skill does not flag this requirement

### Requirement: Sale items and site-wide offers visible [C79]
The product skill SHALL check that discounted items appear in their category listings next to full-price items and not only in a Sales section, and a site-wide offer is shown on every page of the shopping journey, not on the homepage alone. This requirement is distinct from CT07, which concerns delivery dates and the placement of free-shipping notices on the product page, not where discounted items and site-wide offers are listed. It SHALL NOT apply to sites with no discounts, and offers running on pages the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that sale items exist only under a Sale menu and the category page shows full-price items only
- **THEN** the product skill flags the hidden discounts

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that category pages list sale items with their reduced price and a banner on every page states the site-wide offer
- **THEN** the product skill does not flag this requirement

### Requirement: Mobile order summary near the top [C80]
The product skill SHALL check that on mobile checkout pages the order summary sits near the top of the page, shows each line (subtotal, tax, fees, discounts, shipping) expanded, and is not hidden in a collapsed section at the bottom of the page. This requirement is distinct from CT01, which concerns when a mandatory fee is first disclosed in a flow, not where the total is placed on each checkout page. It SHALL NOT apply to desktop layouts with a side summary, and totals that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "The Mobile Checkout Experience" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a mobile review page puts the order summary in a collapsed accordion above the footer
- **THEN** the product skill flags that the summary is low and collapsed

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a mobile review page opens with an expanded order summary of each line
- **THEN** the product skill does not flag this requirement

### Requirement: Payment methods fit the market [C81]
The product skill SHALL check that A checkout offers at least one payment method besides the credit card, and a country-specific site lists the methods common in that country (bank transfer, local wallets, debit cards named apart from credit cards, instalments or pay-in-person where customary) instead of one global set; a method that needs extra steps gives its payment details in a form users can keep, such as an email or a printable page. This requirement is distinct from F37, which concerns the layout of payment card fields, and F24, which concerns device payment sheets that replace manual entry, not which payment methods the checkout offers. It SHALL NOT apply to a checkout for one country whose preferred methods are already verified, and the payment preferences of the real audience SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Sherwin, "Alternative Payment Methods Enable International Purchases" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a site sold in several countries accepts credit cards only
- **THEN** the product skill flags the single global payment method

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the Brazilian site offers credit card, debit card and bank slip, and the Dutch site adds a local bank method
- **THEN** the product skill does not flag this requirement

### Requirement: Business offers show a price [C82]
The product skill SHALL check that A page that offers a product or service to business or professional buyers shows a price; when the exact price depends on the customer or configuration, it shows prices for a few typical scenarios, a price range or a suggested retail price, and not only a contact-sales prompt or a configurator that needs precise input before it shows any figure. This requirement is distinct from C35, which concerns a consumer product page stating additional charges beside the price, and GW01, which lists prices buried behind extra clicks as one goodwill depletor, not what to show when the price is custom. It SHALL NOT apply to offers whose price cannot lawfully be published, and whether the published figures are accurate SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Loranger, "State the Price to Give B2B Sites a Competitive Advantage" (2013); Nielsen Norman Group, Nielsen, "Show Prices for Common Scenarios" (2006).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a B2B service page lists features and offers only a Request a quote button
- **THEN** the product skill flags the missing price or sample prices

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a shipping service page shows a table of prices for the most common shipment types
- **THEN** the product skill does not flag this requirement

### Requirement: Locator links in task pages [C83]
The product skill SHALL check that A site with physical locations links to its store or branch locator from the places where the next step can be local, besides the site-wide link: product lists (an in-stock-at-store filter), product pages (a choose-store or pick-up control), the cart or shipping step, and returns or service pages. This requirement is distinct from N27R, which places a store locator among the secondary items of the mobile menu, not in the task pages where users need it. It SHALL NOT apply to online-only businesses, and store stock data behind the control SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Store Finders: Why People Still Need Locator Links" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the return-policy page says items can be returned in store and has no link to find a store
- **THEN** the product skill flags the missing contextual locator link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart shows a pick-up-in-store option with a Find a store link per item
- **THEN** the product skill does not flag this requirement

### Requirement: Locator starts from current location [C84]
The product skill SHALL check that A store or branch locator lets the user start the search from the device's current location, besides typing an address or postal code. This requirement is distinct from F24, which concerns device capabilities that replace manual entry in mobile forms, not the start of a locator search on any platform, and C83, which concerns where locator links appear. It SHALL NOT apply to sites with a handful of locations shown at once on one list or map, and how the permission prompt is handled after the tap SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Store Finders and Locators" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the locator offers only a postal-code field for a chain with hundreds of stores
- **THEN** the product skill flags the missing current-location option

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the locator has a Use my location button beside the address field
- **THEN** the product skill does not flag this requirement

### Requirement: Language, country and currency switching [C85]
The product skill SHALL check that an international shop sets the initial language, country and currency from the browser settings, remembers the visitor's choice for later visits, and asks the visitor to choose a country or region when the location cannot be detected instead of guessing; the shopper can change the display language, the shipping country and the currency independently of one another; the switcher sits in a top corner on desktop (the top right first, then the top left) and in the header or inside the navigation menu on mobile, not only in the footer, and a site that offers it on desktop also offers it on mobile; each language is named in that language (Deutsch, Español), and the switcher control combines several cues such as a rectangular flag, the currency and the language name, so a small flag alone does not stand for it. This requirement is distinct from F21, which pre-selects dominant form values without addressing storefront locale, N13R, which places utility navigation without the language switcher, C05, which reviews the localization of copy, and S14, which governs overlays that open by themselves, so a country prompt that opens without a user action fails S14 and not this rule. It SHALL NOT apply to shops that serve one country in one language, and the detection logic, and footer, menu or settings contents the evidence does not show, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "6 Tips for Improving Language Switchers on Ecommerce Sites" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a US visitor lands on a store priced in pounds with no prompt, choosing Mexico forces Spanish text and the peso, and the only switcher on mobile is a 12 px round flag in the footer
- **THEN** the product skill flags the wrong default, the coupled settings and the hard-to-find, weakly labelled switcher

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the store opens in the visitor's language and currency, remembers a manual change, offers three separate selectors, and the header trigger reads HK / HKD $ | English with a flag and lists Deutsch and English
- **THEN** the product skill does not flag this requirement

### Requirement: User-generated content offers translation [C86]
The product skill SHALL check that where reviews or comments arrive in several languages, foreign-language items offer translation: a translate link appears only on items not in the user's language, the translated text is labelled as automatic and keeps the original available, and a translate-all control, automatic translation or a language filter labelled All languages is provided when much of the content is foreign. This requirement is distinct from C05, which requires localization review of copy and does not cover user-generated content. It SHALL NOT apply to products whose user-generated content is in one language, and the language mix of the content, when the evidence does not show it, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Translate User-Generated Content for Global Audiences" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product page for a Chinese-language audience shows mostly English reviews with no translate control, or a translate button under every review including those already in Chinese
- **THEN** the product skill flags the missing or indiscriminate translation

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that foreign reviews carry a translate link, the result says Translated by Google with a show-original link, and a translate-all button sits above the list
- **THEN** the product skill does not flag this requirement

### Requirement: Recommendation module names its source [C87]
The product skill SHALL check that A personalised recommendation module names the data it is based on (for example Because you watched a named title, Related to items you've viewed); vague wording such as and more is not used. This requirement is distinct from C58, which labels why cart cross-sells are suggested, and P09, which places cross-sell modules below the primary product, not how a personalised module explains its source. It SHALL NOT apply to non-personalised popular or editorial modules, and the data actually used SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a module reads Recommended Movies, Based on titles you have watched and more
- **THEN** the product skill flags the vague recommendation source

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the module reads Because you watched followed by a named title
- **THEN** the product skill does not flag this requirement

### Requirement: Personal recommendations above generic blocks [C88]
The product skill SHALL check that on a homepage or hub, individualised recommendations sit above generic promotional blocks, directly under the main banner or search area, and are grouped into specific categories when a user's interests are varied. This requirement is distinct from P09, which places cross-sell modules below the primary product on a product page, not the order of personalised and generic blocks on a homepage. It SHALL NOT apply to visitors with no history, for whom no personalised content exists, and whether the module is personalised SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018); Nielsen Norman Group, Harley, "Individualized Recommendations: Users' Expectations & Assumptions" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a Recommended For You carousel is second to last on a long homepage, below several generic promotional areas
- **THEN** the product skill flags the recommendation placement

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that Events for you sits directly under the hero banner and search box
- **THEN** the product skill does not flag this requirement

### Requirement: Recommendation feedback controls [C89]
The product skill SHALL check that users can dismiss, rate or remove the history behind a recommendation, and the module reflects that choice immediately, with a short confirmation (for example that an item is no longer used for recommendations) and no full-page reflow. This requirement is distinct from PH02, which requires meaningful user control over recurring prompts, not feedback controls on recommended items. It SHALL NOT apply to services where personalisation is not a main part of the product, and update timing SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a playlist of recommended songs has no way to mark a song as disliked, and a one-star rating leaves the list unchanged after refresh
- **THEN** the product skill flags the missing recommendation feedback

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that hiding a promoted item replaces it with a short placeholder, and removing a viewing-history entry shows that it will no longer shape recommendations
- **THEN** the product skill does not flag this requirement

### Requirement: Video entries and instructional video structure [C90]
The product skill SHALL check that A video link, thumbnail or embedded player tells the user what the video is before play: a descriptive title or topic, the running length near the title or thumbnail and not only in the player bar, and a still frame that represents the content and its style (interview, animation, screen recording); an instructional video that covers the whole page sits at the top of the content and one about a single part sits at the top of that section, not only at the bottom of the page or in the right rail, where users missed videos or took them for ads; a multistep or long video is split into one short video per step or group of steps, or has chapters with time markers, a topic list or a transcript, so users can reach the part they need. This requirement is distinct from C52, which places product videos in the image gallery with a play icon, and X09, which concerns text alternatives for media. It SHALL NOT apply to product-gallery videos that C52 governs, auto-playing hero videos, and, for the splitting clause, short single-step videos, and the video's real style and internal structure SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Videos as Instructional Content: User Behaviors and UX Guidelines" (2020); Nielsen Norman Group, Schade, "Video Usability" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a how-to page puts its only video, a twenty-minute twelve-step walkthrough with no chapters, in a narrow right column behind a bare play button with no title or length
- **THEN** the product skill flags the right-rail placement, the missing title, length and representative still, and the unchunked video

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video covering all steps sits above the written steps with a descriptive title, 2:30 beside a frame thumbnail, and a chapter list with markers on the scrub bar
- **THEN** the product skill does not flag this requirement

### Requirement: Demonstration filmed from the doer's view [C91]
The product skill SHALL check that A step-by-step demonstration video or image sequence shows each action from the doer's point of view (the camera sees what the user would see), keeps the same angle, props and setting from step to step, and is paired with per-step images or text so users can follow at their own pace. This requirement is distinct from X09, which concerns text alternatives for media, and C90, which concerns what a video entry shows before play and how a video is divided, not camera view or pacing. It SHALL NOT apply to a video that only explains what an object is, where an observer's view is enough, and the pace that suits each user SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "How to Film and Photograph Online Content for Usability: UX Details for Videos and Images" (2020).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a knot-tying video is filmed facing the demonstrator, so users must mirror each step, and has no per-step images
- **THEN** the product skill flags the observer view and the missing self-paced steps

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video is filmed over the demonstrator's shoulder and is paired with step-by-step images
- **THEN** the product skill does not flag this requirement

### Requirement: Video page keeps surrounding context [C92]
The product skill SHALL check that A page that plays an informational or talking-head video keeps related content, links and the global navigation visible outside the video frame, so a viewer whose attention drifts has somewhere to go on the site and the page does not hide all other content during playback. This requirement is distinct from C52, which concerns where product videos sit in the gallery, not what surrounds a playing video. It SHALL NOT apply to full-screen players the user enters by choice, and video-first apps, and behaviour while the video plays, when the evidence shows one frame, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Pernice, "The Talking-Head Video 2.0: Findings from Eyetracking Research" (2017).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a video page dims and hides the navigation and related links while the clip plays
- **THEN** the product skill flags the page that hides everything else

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video sits beside a related-articles list and the global navigation stays visible
- **THEN** the product skill does not flag this requirement

### Requirement: Ordered values use one hue [C93]
The product skill SHALL check that when colour encodes an ordered numeric value in a treemap, heat map or map, one hue varies in intensity (two hues, one per sign, when values run positive and negative) and a legend states the scale; several unrelated hues are used for numeric ranges only when the ranges are named categories. This requirement is distinct from C22, which matches the visualization type to the data category, and PA18, which prefers position or length over colour for precise comparison, not how colour encodes an ordered value where colour is used. It SHALL NOT apply to colour that encodes unordered categories, and the data type behind the colours, when the evidence does not show it, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Treemaps: Data Visualization of Complex Hierarchies" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a map shades the share of residents over 65 in blue, yellow and red bands with no natural order
- **THEN** the product skill flags the multi-hue scale for an ordered value

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the map uses one hue from light to dark with a legend
- **THEN** the product skill does not flag this requirement

### Requirement: Reading level for a broad audience [C94]
The product skill SHALL check that copy on pages for a broad consumer audience uses plain words and short sentences at a reading level that lower-literacy readers can follow. This requirement is distinct from C01, which asks for concise, respectful copy in the user's vocabulary, not a plain-language reading level for the whole audience, and C07, which concerns the order of content. It SHALL NOT apply to terms of art that the verified audience uses in its work, as in the C01 applicability note, and the literacy of the real audience SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Lower-Literacy Users: Writing for a Broad Consumer Audience" (2005); Nielsen Norman Group, Kaley, "UX Writing: FAQs from Practitioners" (2026).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a consumer sign-up page uses long sentences and multi-syllable terms
- **THEN** the product skill flags the reading level

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page uses short sentences and plain words
- **THEN** the product skill does not flag this requirement

### Requirement: Acronyms written out on each page [C95]
The product skill SHALL check that an acronym or abbreviation that part of the audience may not know is written out where it appears on a page or screen, not only at first use elsewhere, unless it is as familiar as PDF or URL. This requirement is distinct from C01, which asks for the user's vocabulary over internal terms, not for expanding abbreviations on each page, and IA07, which maps acronyms to preferred terms in search. It SHALL NOT apply to abbreviations that the verified audience uses daily, and which abbreviations the audience knows SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "UX Writing: FAQs from Practitioners" (2026).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a deep page uses TCO and SLA that the site defines only on another page
- **THEN** the product skill flags the unexpanded abbreviations

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page writes total cost of ownership and service-level agreement in full where each appears
- **THEN** the product skill does not flag this requirement

### Requirement: Numbered lists only for sequence or count [C96]
The product skill SHALL check that A numbered list is used only when the order of items or their count matters (procedure steps, a ranked list); items that are independent options use bullets, because users read numbers as steps they must all complete. This requirement is distinct from C08, which places high-information keywords at the start of headlines and bullet points, not the choice between bullets and numbers. It SHALL NOT apply to lists whose position in a ranking or count is part of the message, and how the list reads in context, when only a fragment is shown, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Loranger, "7 Tips for Presenting Bulleted Lists in Digital Content" (2017).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a contact page lists Online form, Chat, Telephone and In person as 1 to 4 although the user needs only one
- **THEN** the product skill flags the numbered list of independent options

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the same four contact methods appear as bullets and the account-setup steps are numbered
- **THEN** the product skill does not flag this requirement

### Requirement: On-screen content as HTML with a PDF gateway [C97]
The product skill SHALL check that content that people read on screen is published as an HTML page, not only as a PDF; where a PDF is also needed for printing or download, an HTML gateway page summarises the key points and links to the file with its format and size (and page count for a long document), and site search and other links point to that page and not straight to the file; any link that leads to a PDF, a media player or another application names the format. This requirement is distinct from X28, which concerns essential text being real HTML text and not an image, and A09R, which concerns a control's effect matching its label. It SHALL NOT apply to legal, print-only or to-be-signed documents that must exist as PDF, or to short forms the user asked to download, and PDF accessibility tagging without the file, and the reading context of a given audience, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen and Kaley, "Avoid PDF for On-Screen Reading" (2020); Nielsen Norman Group, Nielsen and Kaley, "PDF: Still Unfit for Human Consumption, 20 Years Later" (2020); Nielsen Norman Group, Nielsen, "Gateway Pages Prevent PDF Shock" (2003); Nielsen Norman Group, Nielsen, "113 Design Guidelines for Homepage Usability" (2001); Nielsen Norman Group, Nielsen, "Top 10 Mistakes in Web Design" (2011).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a policy handbook is linked straight to a 60-page PDF with the link reading Handbook
- **THEN** the product skill flags the screen-read content published as a bare PDF behind an unlabelled link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that an HTML page gives the key points and a link labelled Download full report (PDF, 4 MB), and site search points to that page
- **THEN** the product skill does not flag this requirement

### Requirement: Objective copy over promotional claims [C98]
The product skill SHALL check that informational and product copy states plain, checkable facts instead of boastful, subjective promotional claims (hottest ever, world-class, best); a claim is backed by a specific figure, feature or source. In NN/g tests of the same site written in several versions, objective wording improved task performance over promotional wording, and users read promotional wording as less credible. This requirement is distinct from C01, which asks for concise, direct copy in the user's vocabulary, VT01, which ranks clarity above cleverness, and GW01, which flags hollow sincerity copy as a goodwill depletor, not the substitution of unsupported superlatives with facts. It SHALL NOT apply to advertising, campaign, brand or entertainment pages whose purpose is promotion, and how a given audience reads the tone, and the effect on conversion, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "How Users Read on the Web" (1997); Nielsen Norman Group, Morkes and Nielsen, "Applying Writing Guidelines to Web Pages" (1998).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product page calls the service the hottest, best-in-class solution in the world with no figures
- **THEN** the product skill flags the unsupported superlatives

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page states the measured battery life and the supported formats
- **THEN** the product skill does not flag this requirement

### Requirement: No welcome filler at the top of a page [C99]
The product skill SHALL check that the top of a page does not spend prime space on a welcome salutation or generic filler such as a greeting; any introductory text is short and states what the page contains, and a tagline takes the place of a welcome message. This requirement is distinct from C31, which concerns a concrete tagline beside the identity area, and C07, which concerns the order of body copy. It SHALL NOT apply to a page whose first text is task-critical instruction, and how many users skip the text SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Blah-Blah Text: Keep, Cut, or Kill?" (2007); Nielsen Norman Group, Nielsen, "113 Design Guidelines for Homepage Usability" (2001).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a homepage opens with a paragraph beginning Welcome to our site, we hope you enjoy the new design
- **THEN** the product skill flags the welcome or filler paragraph

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a homepage opens with a one-line tagline and a short sentence on what the page offers
- **THEN** the product skill does not flag this requirement

### Requirement: Upfront summary on long-form content [C100]
The product skill SHALL check that A long-form page or article offers a summary or key-takeaways block near the top, with a descriptive heading (such as Summary or Key Takeaways) and a visual treatment that sets it apart from the body; a recap at the end of a very long piece is not the only summary. NN/g's usability study of long content found that summaries help users decide whether a page is relevant and give them a roadmap. This requirement is distinct from C07, which orders the body copy as an inverted pyramid, and C27, which concerns line length and heading scale in long text, not an upfront summary block. It SHALL NOT apply to short pages or to content whose first paragraph already states the conclusion, and whether readers use the summary on the reviewed page SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Wang and Chan, "5 Formatting Techniques for Long-Form Content" (2023).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a long article starts with a title and an image, then body text, with no summary
- **THEN** the product skill flags the missing upfront summary

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article opens with a bordered Key Takeaways block of three bullets
- **THEN** the product skill does not flag this requirement

### Requirement: Headings, lists and sparing bold in long text [C101]
The product skill SHALL check that A long text passage is broken into sections with descriptive subheadings and uses short bulleted lists where the content is list-like; bulleted items are short, or each long item starts with a bolded key phrase, and bold or highlight marks only the few critical fragments, not whole paragraphs. NN/g studies found that readers scan headings and list items, that a participant missed a visible answer inside lengthy unformatted bullets, and that a scannable layout beat the same text as plain paragraphs. This requirement is distinct from C08, which concerns the first words of headings and bullets, and PA10, which concerns breaking a dense text column into blocks to spread fixations, not whether a passage has headings and lists or how list items and emphasis are formatted. It SHALL NOT apply to short passages and text that users commit to read in full, nor, for the bolded lead-in clause, to lists meant to be read in order such as step-by-step instructions, and how far readers actually read SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Pernice, "Text Scanning Patterns: Eyetracking Evidence" (2019); Nielsen Norman Group, Wang and Chan, "5 Formatting Techniques for Long-Form Content" (2023); Nielsen Norman Group, Nielsen, "How Users Read on the Web" (1997).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a long help article is one run of paragraphs with no subheadings, and its one bulleted list has five long items with no emphasis
- **THEN** the product skill flags the unbroken text and the long unformatted bullets

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article has a subheading per topic, a short bulleted list of options, and each long bullet starts with a bolded key phrase that is the only bold text
- **THEN** the product skill does not flag this requirement

### Requirement: Informational articles link the product [C102]
The product skill SHALL check that an informational article on a site that sells related products mentions and links the product in the body text or directly at the end of the article, not only in the logo, header or a side margin, because visitors who arrive from search often never see them. This requirement is distinct from N18R, which places inline links to related items at the point of reading, but does not require articles to lead to the product itself. It SHALL NOT apply to sites that do not sell the product, and how visitors arrive SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Informational Articles Must Ask For the Order" (2004).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a feeding-tips article names no product and links to the product range only in a left-margin item that scrolls out of view
- **THEN** the product skill flags the missing product link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article body links the matching product and the end of the article offers a Shop link
- **THEN** the product skill does not flag this requirement

### Requirement: Audience groups in navigation [IA11]
The product skill SHALL check that navigation does not force users to pick an audience group before they can reach content; if audience groups are used, they are mutually exclusive, plain-language, labelled so users can tell content for the group from content about it (Information for Students), and shared content is not duplicated under several groups. This requirement is distinct from IA04, which concerns internal organizational divisions exposed in navigation, not user audience groups. It SHALL NOT apply to sites with clearly separate customer types served by different products, and how many users fit more than one group SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Sherwin, "Audience-Based Navigation: 5 Reasons to Avoid It" (2015).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a header with Private, Business and Corporate links leaves a small business owner unable to tell where to go
- **THEN** the product skill flags the overlapping or ambiguous audience labels

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that topic-based navigation holds an Information for Students link whose pages are written for students
- **THEN** the product skill does not flag this requirement

### Requirement: Top-level navigation names topics, not formats [IA12]
The product skill SHALL check that top-level navigation labels name topics, offerings or user tasks (Features, Testimonials, FAQs, a product name), not content formats (Videos, Photos, Publications, Guides); format links appear on a topic page, where they carry context. NN/g found that a bare format label gives topic-focused users too little information scent and splits one topic across format silos. This requirement is distinct from IA04, which concerns navigation that mirrors the organisation's internal structure, not the content's delivery format. It SHALL NOT apply to sites where users mainly browse for media (a video or streaming service, a photo library), and whether a given site's visitors are topic-driven or browsing SHALL be reported `NOT ASSESSABLE` without evidence of their tasks. Source: Nielsen Norman Group, Harley, "Avoid Format-Based Primary Navigation" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the main navigation of a B2B product site contains Videos, Photos and Publications
- **THEN** the product skill flags the format-named top-level links

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the main navigation lists Features, Pricing and FAQs, and a Videos link appears on each product page
- **THEN** the product skill does not flag this requirement

### Requirement: Paths from plausible categories [IA13]
The product skill SHALL check that an item or subcategory that users plausibly expect under more than one category is reachable from each of those plausible parents, either by listing it under each (with the breadcrumb showing one canonical path) or by a clearly labelled see-also link from the plausible category to its real location (a baby car seat reached from car accessories); categories users would not plausibly check get no such path. This requirement is distinct from IA03, which recommends faceted classification when users need several independent attributes, not a path from a plausible but different category. It SHALL NOT apply to small sites with shallow hierarchies or to categories where every item has one unambiguous home, and where users expect an item to live SHALL be reported `NOT ASSESSABLE` without evidence of their mental models. Source: Nielsen Norman Group, Laubheimer, "Polyhierarchies Improve Findability for Ambiguous IA Categories" (2018); Nielsen Norman Group, Nielsen, "Deceivingly Strong Information Scent Costs Sales" (2004).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a game console appears only under Electronics although many users look for it under Video Games, and the automotive section has no link to the baby car seats held elsewhere
- **THEN** the product skill flags the single parent and the missing cross-reference

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the console is listed under Video Games and Electronics with one breadcrumb path, and the automotive section carries a see-also link labelled Baby car seats
- **THEN** the product skill does not flag this requirement

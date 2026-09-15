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

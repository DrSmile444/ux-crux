## MODIFIED Requirements

### Requirement: Content clarity check
The product skill SHALL evaluate whether button/action labels, error copy, and instructional content use the user's vocabulary and describe the actual action or problem, rather than vague or internal terminology. The same action across the reviewed product SHALL use one consistent label rather than introducing synonyms that force recall instead of recognition, unless a distinct underlying outcome justifies the different wording. Copy SHALL be evaluated on a concision-precision spectrum: exact technical precision that makes a message unreadably long for its container is itself a finding, but so is over-concise copy that omits a decision-critical fact; when no position on the spectrum is both accurate and readable, the underlying system logic being described, not the copy, is the root finding. Established domain terminology SHALL NOT be flagged as a plain-language violation when the verified target audience is domain specialists using a professional/expert tool. An opt-out or decline control SHALL NOT be flagged as a content-clarity pass if it forces the user to select a derogatory, self-deprecating, or guilt-inducing statement in order to decline; neutral decline language SHALL be recommended instead. Language describing disability or human traits SHALL avoid tragic ("confined to") or patronizing/heroic ("bravely overcame") framing in favor of neutral, objective phrasing. Product copy referring to an unspecified third party SHALL default to singular "they"/"them"/"their" rather than "(s)he" or "he/she" constructions.

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

## ADDED Requirements

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

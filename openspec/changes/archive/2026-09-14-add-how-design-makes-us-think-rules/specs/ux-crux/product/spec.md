## ADDED Requirements

### Requirement: Non-error administrative bad news may use light, disarming tone
The product skill SHALL permit a non-error, human/administrative notification carrying inherently unwelcome news (an overdue-payment notice, a policy-violation warning, a scheduled-downtime alert, or a comparable administrative message) to use light, self-aware, disarming tone to soften the message, and SHALL flag the absence of any softening only as an opportunity, not a defect. This is distinct from `usability`'s `E02`/`E03`, which require system error copy to identify the actual problem in user language and forbid cute language that obscures the fix — those requirements are unchanged and continue to apply to genuine system errors. The product skill SHALL flag light tone used on a security-breach or safety-critical notification, where directness and seriousness are required instead.

#### Scenario: An administrative notice uses harsh, punitive language for a minor lapse
- **WHEN** the reviewed evidence shows a non-error administrative notification (overdue payment, policy violation, scheduled downtime) using cold, legalistic, or punitive language for a minor or routine user lapse
- **THEN** the product skill notes that a lighter, more human tone would reduce user hostility, citing this requirement alongside `references/voice-tone.md`'s existing `VT02` tone-fit guidance

#### Scenario: An administrative notice uses light, human tone appropriately
- **WHEN** the reviewed evidence shows a non-error administrative notification using light, self-aware tone that still clearly states what happened and what the user should do
- **THEN** the product skill does not flag this requirement

#### Scenario: Light tone is used on a security or safety-critical notification
- **WHEN** the reviewed evidence shows a security-breach warning or a safety-critical notification using light, humorous, or minimizing tone
- **THEN** the product skill flags the tone mismatch as a defect, since directness and seriousness are required for this class of message regardless of this requirement's general permission

#### Scenario: A genuine system error uses cute language instead of clarity
- **WHEN** the reviewed evidence shows a system error message (a failed request, a bug, a crash) using cute or vague language that obscures the actual problem or fix
- **THEN** the product skill defers to `usability`'s `E02`/`E03`, not this requirement, since this requirement governs non-error administrative messaging only

### Requirement: Editorial text uses readable line length and proportional type scale
The product skill SHALL flag long-form or editorial text content (an article, a marketing/landing page, or another long-form informational page) whose body text container renders substantially outside a 50-70 character line length, or whose heading-to-body type scale has no discernible proportional relationship, when the evidence permits measuring rendered or specified text width. This requirement continues `references/web.md`'s existing `C07`-`C12` scanning/typography set and applies under the same scope note restricting it to text-heavy or web-rendered content, not short native UI copy.

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
The product skill SHALL flag a medical, legal, grave, or trauma-related screen that uses cheerful, patronizing, or otherwise emotionally mismatched stock imagery or decoration, in favor of an objective, restrained visual tone appropriate to the content's gravity. This is the visual counterpart to `C15`'s language-level neutrality rule; `C15` governs wording, this requirement governs imagery and decorative styling.

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
The product skill SHALL flag a product designed for children, teens, or older adults that uses age-patronizing visual tropes — fake handwriting-style fonts, chaotic decorative color with no functional purpose, or artificial simplification that assumes reduced intelligence — in place of clean, bold, high-legibility design that respects the audience's actual competence. This is parallel to `C15`'s disability-dignity rule but keyed to age rather than disability; it does not prohibit design genuinely adapted to a demographic's motor-skill, literacy, or visual-acuity needs.

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

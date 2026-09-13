## ADDED Requirements

### Requirement: Ads and sponsored elements are not visually disguised as primary CTAs
Grounded in Gestalt's Law of Similarity, the psychology skill SHALL flag an advertisement or third-party/sponsored element styled with the same shape, color, and typography conventions as the product's own primary call-to-action controls, since matching visual language causes users to misidentify the ad as a genuine product control and click it unintentionally. This is the mirror-image failure to the existing banner-blindness rule (legitimate content styled like an ad and therefore ignored): here, an ad is styled like a genuine control and therefore mistakenly trusted. Findings under this requirement SHALL be evaluated through the four-gate ethical test before being reported as a deception concern.

#### Scenario: Sponsored banner uses the same primary-CTA visual style
- **WHEN** the reviewed evidence shows a third-party or sponsored element styled identically (same color, shape, and typography) to the product's own primary action buttons
- **THEN** the psychology skill flags this as a Law-of-Similarity deception finding

#### Scenario: Sponsored content is visually segregated from primary CTAs
- **WHEN** the reviewed evidence shows sponsored/ad content clearly differentiated in style from the product's own primary interactive controls
- **THEN** the psychology skill does not flag a Law-of-Similarity deception finding

### Requirement: Auto-rotating carousels are not relied on for important content
The psychology skill SHALL flag reliance on an auto-rotating image/content carousel to communicate important information or a primary call-to-action, since users systematically fail to notice or interact with panels beyond the first one shown.

#### Scenario: Important promotion is buried in carousel panel two or later
- **WHEN** the reviewed evidence shows a primary promotion, message, or call-to-action placed only in a non-first panel of an auto-rotating carousel
- **THEN** the psychology skill flags this as a carousel-reliance finding

#### Scenario: Carousel is purely decorative and not load-bearing for a task
- **WHEN** the reviewed evidence shows a carousel used for supplementary or decorative content, with no primary task or message depending on a panel beyond the first
- **THEN** the psychology skill does not flag a carousel-reliance finding

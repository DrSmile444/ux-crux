## ADDED Requirements

### Requirement: Needed content is kept apart from ads [PA21]
The psychology skill SHALL check that content the user needs for the task does not share a region, rail or visual section with advertisements or promotions, because users skip a whole region once one item in it reads as an ad; important content is not placed next to ads or in the typical ad positions without a check that users still see it. This requirement is distinct from PA09, which concerns styling real content like an ad banner, and PA13, which concerns the meaning created by placing an ad beside sensitive content, not users skipping needed content that sits beside real ads. It SHALL NOT apply to a page with no ads or promotions, and how a particular audience scans the region the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Pernice, "Banner Blindness Revisited: Users Dodge Ads on Mobile and Desktop" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows a right rail that mixes related-hike links with promotions in one column, where task content is overlooked
- **THEN** the psychology skill flags the task content that shares a region with ads

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows related links placed in the main content column under their own heading, with the ads kept in a separate labelled area at the page edge
- **THEN** the psychology skill does not flag this requirement

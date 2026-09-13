# ux-crux/review Specification

## Purpose

Provides the single full-spectrum UX audit entry point that determines which domain lenses apply to a piece of evidence and synthesizes their findings into one evidence-aware report.

## Requirements

### Requirement: Full-audit skill applies applicable domain lenses
The review skill SHALL determine, from the user's request and the evidence provided, which of the usability, psychology, accessibility, product, and trust lenses are applicable, and SHALL evaluate all applicable lenses rather than defaulting to a single lens.

#### Scenario: Reviewing a checkout flow screenshot
- **WHEN** a user asks for a full UX review of a screenshot showing a checkout flow
- **THEN** the review skill evaluates the flow against usability, accessibility, product, and trust lenses at minimum, and states which lenses it applied and why

### Requirement: Findings use the shared evidence and severity models
Every finding produced by the review skill SHALL carry an evidence status (VERIFIED, SUPPORTED, LIKELY, RISK, or NOT ASSESSABLE), a severity (blocker, major, moderate, or minor), and a confidence level, as defined by the shared evidence/severity model.

#### Scenario: Insufficient evidence to confirm a defect
- **WHEN** the review skill is given a static screenshot and cannot observe live keyboard/focus behavior
- **THEN** it reports the related finding with evidence status NOT ASSESSABLE or LIKELY rather than asserting it as VERIFIED

### Requirement: Recommend concrete low-cost validation techniques for unconfirmed findings
When the review skill (or a domain skill applying the shared validation methodology) cannot confirm a finding from the evidence provided and reports it as `NOT ASSESSABLE` or `LIKELY`, it SHALL name a concrete, low-cost technique the user can run to close the gap, rather than stopping at stating uncertainty alone.

For an unconfirmed information-hierarchy or first-impression claim, the recommended technique SHALL be a Five-Second Test (show the screen briefly, then ask what the viewer recalls and understood the purpose to be). For an unconfirmed claim that depends on structured, candid team critique rather than end-user testing, the recommended technique SHALL be a Black Hat Session (a facilitated critique in which participants deliberately adopt a critical, skeptical viewpoint).

#### Scenario: Hierarchy claim cannot be confirmed from a static screenshot
- **WHEN** the review skill cannot confirm from a static screenshot whether the primary action or message is actually salient to users
- **THEN** it reports the finding as `LIKELY` or `NOT ASSESSABLE` and recommends running a Five-Second Test to confirm what users notice and recall

#### Scenario: Team has not candidly critiqued a design before requesting review
- **WHEN** the evidence indicates a design has only been reviewed informally with no structured critical pass
- **THEN** the review skill may recommend a Black Hat Session as a fast, low-cost way to surface issues the team has been reluctant to voice, alongside its own findings

### Requirement: Cited sample-size guidance for usability-test recommendations
When the review skill recommends a qualitative usability-test sample size as part of applying its per-flow measurement guidance, it SHALL cite Jakob Nielsen's finding (NN/g) that approximately five participants surfaces the large majority of usability issues in a qualitative study, including the 2012 revisit confirming that testing meaningfully more participants does not yield appreciably more insight, rather than stating an uncited or arbitrary sample size.

#### Scenario: Reviewer recommends a usability-test sample size
- **WHEN** the review skill recommends how many participants to include in a qualitative usability test for a reviewed flow
- **THEN** it cites Nielsen/NN/g's five-participant finding as the basis for that recommendation rather than proposing an unsourced number

### Requirement: Report avoids a single opaque score
The review skill's output SHALL follow the shared report contract: blockers and major issues listed first, category health per lens, missing states/missing context called out explicitly, and a top-3 highest-impact recommendation list; a single 0-100 score, if included at all, SHALL be secondary and capped when unresolved blockers exist.

#### Scenario: Feature has one blocker among many minor issues
- **WHEN** the review finds one accessibility blocker and several minor content issues
- **THEN** the report leads with the blocker, and any numeric score present is capped rather than reflecting an average across all findings

### Requirement: Review is self-contained regardless of install method
The review skill SHALL include, within its own distributed package, the rule content of every domain lens it can apply, so that installing review alone through any distribution channel still lets it fully evaluate every lens without requiring the sibling domain skills to also be installed.

#### Scenario: Installing only the review skill via skills.sh
- **WHEN** a user installs only `ux-crux-review` via `npx skills add <repo> --skill ux-crux-review` (or an equivalent single-skill install), with no domain skill installed alongside it
- **THEN** `ux-crux-review` still evaluates every applicable lens using rule content bundled in its own package, not by reading another skill's files

### Requirement: Domain skills remain independently invocable
The review skill SHALL NOT be a required orchestration dependency for the domain skills; each domain skill SHALL be independently invocable and produce a valid report for its own lens without the review skill running first.

#### Scenario: User asks only about accessibility
- **WHEN** a user asks "check accessibility of this screen" without asking for a full review
- **THEN** the accessibility skill is invoked directly and produces a complete, valid accessibility-lens report on its own

### Requirement: Stress-case framing for adverse-state testing
When recommending adverse-state testing, the review skill (or a domain skill applying the shared validation methodology) SHALL frame a dismissible-sounding "edge case" as a stress case when it corresponds to a real, non-negligible population or a genuinely stressful user circumstance, rather than treating rarity alone as license to exclude it. An unexamined business or technical constraint that excludes such a population (for example an arbitrary age cap on a form field) SHALL be flagged as a finding to reconsider, not dismissed as out of scope by default.

#### Scenario: Arbitrary age-cap validation excludes a real population
- **WHEN** a reviewed sign-up form rejects birth dates older than a fixed threshold (for example 100 years) with no stated legal or safety reason
- **THEN** the review skill flags the constraint as excluding a real user population and recommends the team re-examine whether the limit reflects an actual requirement rather than an arbitrary technical convenience

#### Scenario: Constraint has a stated legal or safety basis
- **WHEN** a reviewed constraint that excludes a rare case is backed by a stated legal or safety requirement
- **THEN** the review skill does not flag the constraint under this requirement, and notes the stated basis

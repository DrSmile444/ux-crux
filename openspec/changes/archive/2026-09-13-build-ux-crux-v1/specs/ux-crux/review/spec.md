## Purpose

Provides the single full-spectrum UX audit entry point that determines which domain lenses apply to a piece of evidence and synthesizes their findings into one evidence-aware report.

## ADDED Requirements

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

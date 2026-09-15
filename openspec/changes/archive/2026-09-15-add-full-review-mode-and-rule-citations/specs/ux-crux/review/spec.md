## MODIFIED Requirements

### Requirement: Report avoids a single opaque score
The review skill's output SHALL follow the shared report contract: blockers and major issues listed first, category health per lens, missing states/missing context called out explicitly, and a top-3 highest-impact recommendation list; a single 0-100 score, if included at all, SHALL be secondary and capped when unresolved blockers exist.

The report SHALL list every finding the review actually produced, at every severity level, rather than truncating the moderate/minor findings to a curated subset — the top-3 list is an additional ranked highlight, not a replacement for showing the rest. Every section of the report that states or summarizes a finding — including each individual finding, each Category Health line, and each Top-3 highest-impact item — SHALL cite the rule ID(s) (`source_ids`) it is based on, so a reader can always trace a stated point back to the specific rule that produced it.

#### Scenario: Feature has one blocker among many minor issues
- **WHEN** the review finds one accessibility blocker and several minor content issues
- **THEN** the report leads with the blocker, and any numeric score present is capped rather than reflecting an average across all findings

#### Scenario: A review finds ten moderate/minor issues alongside its blockers and majors
- **WHEN** the review produces two blockers, three major findings, and ten moderate/minor findings
- **THEN** the report lists all ten moderate/minor findings in full (not only a top-3 excerpt or a partial subset), in addition to the top-3 highest-impact list

#### Scenario: Category Health and Top-3 sections state a finding without a traceable rule ID
- **WHEN** a Category Health line summarizes a lens's results, or a Top-3 item recommends a change
- **THEN** that line or item cites the specific rule ID(s) it is based on, the same way an individual finding's `source_ids` does, rather than stating the point as untraceable prose

### Requirement: Review is self-contained regardless of install method
The review skill SHALL include, within its own distributed package, the rule content of every domain lens it can apply, so that installing review alone through any distribution channel still lets it fully evaluate every lens without requiring the sibling domain skills to also be installed.

#### Scenario: Installing only the review skill via skills.sh
- **WHEN** a user installs only `ux-crux-review` via `npx skills add <repo> --skill ux-crux-review` (or an equivalent single-skill install), with no domain skill installed alongside it
- **THEN** `ux-crux-review` still evaluates every applicable lens using rule content bundled in its own package, not by reading another skill's files

## ADDED Requirements

### Requirement: Full-coverage review mode is available on request
By default, the review skill (and each domain skill applying this shared rule-selection behavior) SHALL select which rules to check using judgment — evaluating the evidence against the rules that are relevant to the request's scope, as it does today. In addition, the review skill and each domain skill SHALL support an explicit, opt-in "Full" mode: when the skill is invoked with a plain-text argument recognizable as "full" (for example a value passed via the Skill tool's `args`, or typed after the skill's slash-invocation), the skill SHALL instead perform a mandatory, exhaustive sweep — for every rule in every reference file it would read for the request's scope, it SHALL explicitly record whether that rule is violated, not violated, not assessable from the evidence provided, or not applicable to the evidence, before writing its narrative report. An explicit "smart" argument, or no argument at all, SHALL preserve today's default judgment-driven behavior. If the argument is present but is not recognizable as either "full" or "smart", the skill SHALL ask the user for clarification rather than guessing which mode was intended.

Because a `SKILL.md` package distributed through a marketplace (as opposed to a first-party `.claude/commands/*.md` custom command) cannot currently drive CLI argument-hint autocomplete, each skill SHALL document the accepted `full`/`smart` argument values in its own `description` frontmatter field, so a user can discover them without relying on autocomplete.

#### Scenario: User requests a full-coverage accessibility review
- **WHEN** a user invokes the accessibility skill with an argument recognizable as "full"
- **THEN** the skill records a violated/not-violated/not-assessable/not-applicable determination for every rule in every reference file it loads for this request, before producing its narrative report, rather than relying on judgment to select a subset of rules to check

#### Scenario: User requests a review with no mode argument
- **WHEN** a user invokes any of the six skills with no argument, or with an argument recognizable as "smart"
- **THEN** the skill selects which rules are relevant to the request's scope using judgment, consistent with its behavior before this requirement existed

#### Scenario: User passes an unrecognized mode argument
- **WHEN** a user invokes a skill with an argument that is neither "full" nor "smart" nor empty
- **THEN** the skill asks the user to clarify which mode was intended rather than guessing or silently defaulting to one mode

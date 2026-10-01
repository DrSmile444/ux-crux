## ADDED Requirements

### Requirement: Report argument produces a findings file and a visual report
The review skill and each domain skill SHALL accept an optional `report` argument, alone or combined with `smart` or `full` (for example `full report`), and SHALL also recognize a plain-language request for a visual or HTML report. With it, the skill SHALL complete its review and its text report as usual, then write a findings file that follows the shared findings contract and render it with the shared report instructions. Without it, the skill SHALL produce no findings file and no HTML page. Each skill SHALL document the `report` argument in its `description` frontmatter.

#### Scenario: Full review with a report
- **WHEN** a user invokes `/review full report`
- **THEN** the skill runs the full rule-by-rule sweep, gives the text report, writes the findings file, and writes the HTML report

#### Scenario: Plain review
- **WHEN** a user invokes `/review` with no argument
- **THEN** the skill gives the text report only, with no findings file and no HTML page

### Requirement: Findings file follows the shared findings contract
The findings file SHALL hold every finding of the text report with the per-finding fields of the shared report contract, plus `location` and `options`. `location` SHALL name the flow and either one step or a `from`/`to` step transition, or be omitted for a single-screen review. `options` SHALL list one to three fix options, exactly one marked recommended, each satisfying every rule in the finding's `source_ids`. The file SHALL also record the review mode, the lenses applied, the flow steps with their capture status, the Category health and Top 3 entries with their rule IDs, the Missing states / missing context entries, and, for `full` mode, the rule-by-rule checklist.

#### Scenario: Finding on a step transition
- **WHEN** going back from step 3 to step 2 of a registration flow clears the email field
- **THEN** the finding's `location` names the registration flow with `from: 3` and `to: 2`

### Requirement: Automatic flow capture for live evidence
When the evidence is a live web page or a running build, the request names a task or flow (for example registration, checkout, onboarding), and the host provides a tool that can drive and capture it, the skill SHALL walk that flow step by step without the user asking for it: capture each step, reach the error and empty states that need no data change, and build a flow map before evaluating rules. Cross-step rules (step count, back navigation, data kept between steps, consistent labels across steps) SHALL be evaluated against the walked flow. A step the skill could not reach SHALL be reported as `NOT_ASSESSABLE` with the reason and the evidence that would resolve it. When the flow branches, the skill SHALL ask the user which branch to walk.

#### Scenario: User asks to review a sign-up flow on a live site
- **WHEN** a user gives a sign-up page URL and asks for a UX review of registration, and a browser automation tool is available
- **THEN** the skill walks every reachable sign-up step, captures each one, triggers inline validation errors without submitting, and reports findings with their step locations

#### Scenario: Email verification blocks the flow
- **WHEN** the flow requires a code sent by email and the skill has no access to that inbox
- **THEN** the skill reports the remaining steps as `NOT_ASSESSABLE` and names a test account or a staging inbox as the evidence that would resolve them

### Requirement: Data-changing actions need the user's consent
During flow capture the skill SHALL ask the user before any action that creates, changes, sends, or pays for something — submitting a form, creating an account, placing an order, sending an email or message, changing settings — and SHALL offer to stop before that action, use a test account, or use a staging environment. Consent covers only the action named.

#### Scenario: Final registration submit on production
- **WHEN** flow capture reaches the "Create account" button on a production site
- **THEN** the skill stops and asks the user whether to submit, use a test account, or stop the walk at this step

### Requirement: Capture fallback when no browser tool is available
When the evidence is a live page or flow and the host provides no tool that can drive and capture it, the skill SHALL ask the user to provide screenshots or to accept a review without captures, in which case report pictures are schematic only. The skill SHALL state in Missing states / missing context which steps it did not capture.

#### Scenario: No browser tool in the host
- **WHEN** a user asks for a report on a live checkout flow and no browser tool is available
- **THEN** the skill asks for screenshots or for consent to continue without captures, and does not claim it observed the live page

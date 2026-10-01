## Purpose

Renders the findings of a ux-crux review as one self-contained HTML triage page that shows each finding visually, cites its rule and source, offers fix and triage options, and turns the reader's decisions back into input for the agent.

## ADDED Requirements

### Requirement: Report skill renders findings and never reviews
The `report` skill SHALL render a findings file produced by any of the six review skills into an HTML triage page. It SHALL NOT perform a review itself. When the user invokes it without a findings file and the conversation holds no completed review, it SHALL tell the user to run a review with the `report` argument (or offer to run one) instead of inventing findings.

#### Scenario: Rendering an earlier review
- **WHEN** a user invokes `/report` and a findings file from an earlier review exists at the path the user gives or at the default report location
- **THEN** the skill renders that file into the HTML page without re-evaluating any rule

#### Scenario: No findings available
- **WHEN** a user invokes `/report` and no findings file exists and no review was done in the conversation
- **THEN** the skill says that a review must come first and offers to run one, and it produces no page

### Requirement: Single self-contained HTML file
The report SHALL be one HTML file with all styles, scripts, data, and images inline, so it opens offline in any browser and can be sent as one attachment. It SHALL load no external script, stylesheet, or font. It SHALL lay out without horizontal scrolling at a 375px viewport and SHALL support light and dark color schemes.

#### Scenario: Opening the report offline
- **WHEN** a reader opens the report file in a browser with no network connection
- **THEN** every finding, picture, and control renders, and the browser makes no network request

### Requirement: Each finding cites its rule and source
Each finding card SHALL show the finding ID, severity, evidence status, and confidence from the shared evidence and severity models; every rule ID in its `source_ids`, qualified by domain and reference file; and the text of each cited rule's `Sources` column as written in the catalog. Each Category health line and Top 3 item SHALL also show its rule IDs.

#### Scenario: A finding traced to one rule
- **WHEN** a finding cites `usability/core.md#A08R`
- **THEN** its card shows "usability · A08R" and the full text of A08R's Sources cell

### Requirement: Fix and triage options per finding
Each finding SHALL offer one to three fix options and exactly one of them SHALL carry a "Recommended" mark. Each fix option SHALL be a complete decision that states what changes and what it costs, and SHALL satisfy every rule the finding cites. Each finding SHALL also offer the triage options "won't fix", "not an issue", and "defer", and a free-text comment field. The "not an issue" option SHALL show the finding's `false_positive_conditions`. A finding with evidence status `LIKELY` or `RISK` SHALL also offer a "verify first" option that shows its `validation_method`. The reader SHALL be able to pick exactly one option per finding.

#### Scenario: A finding with one valid fix
- **WHEN** only one fix satisfies the cited rule
- **THEN** the card shows that one fix as Recommended plus the three triage options, and no invented alternative

#### Scenario: A LIKELY finding
- **WHEN** a finding has evidence status `LIKELY`
- **THEN** its card offers a "verify first" option that names the validation method from the finding

### Requirement: Decisions round-trip to the agent
The page SHALL provide a "Copy decisions" control that copies one line per decided finding in the form `<finding-id> (<rule ids>): <option-key> — <comment>`. The page SHALL keep the reader's choices across reloads of the same report. When the user pastes decision lines back, the skill SHALL record each decision in the findings file and re-render the same report file with each decided finding marked with its decision.

#### Scenario: Reader copies decisions
- **WHEN** the reader picks option `a` for UX-NAV-004 and "not an issue" with a comment for UX-ACC-002 and presses "Copy decisions"
- **THEN** the clipboard holds `UX-NAV-004 (A08R): a` and `UX-ACC-002 (T02): not-an-issue — <comment>`

#### Scenario: User pastes decisions back
- **WHEN** the user pastes decision lines into the conversation
- **THEN** the skill writes each decision into the findings file and re-renders the same report path with those findings marked as decided

### Requirement: Picture tiers follow the evidence
The report SHALL give a picture to every blocker and major finding and to every Top 3 item, and a text card to other findings. It SHALL choose the most faithful picture the evidence supports: an annotated screenshot when a capture exists, a recreated UI fragment with a before and after state when the DOM or code is available, or a schematic of simple shapes otherwise. A recreated or schematic "before" picture SHALL carry a visible label that says it is a reconstruction. Every "after" picture SHALL carry a visible label that says it is a proposal. A finding with evidence status `NOT_ASSESSABLE` SHALL NOT show a "before" picture of the unobserved state.

#### Scenario: Web finding with DOM available
- **WHEN** a blocker finding concerns a web control and the agent captured its DOM and styles
- **THEN** the card shows the recreated control as found and the control with the recommended fix applied, labeled "reconstruction" and "proposal"

#### Scenario: Not-assessable state
- **WHEN** a finding is `NOT_ASSESSABLE` because the error state was never reached
- **THEN** the card shows no "before" picture of that error state and says what evidence would resolve it

### Requirement: Flow map for multi-step reviews
When the findings file contains more than one flow step, the report SHALL open with a flow map that shows each step in order, its picture or placeholder, and a count of findings per severity on that step. A finding located on a step transition SHALL show both steps side by side. A step the review could not reach SHALL appear in the map as not reached, with the reason.

#### Scenario: Registration flow with an unreachable step
- **WHEN** a registration review captured three steps and could not reach the email-code step
- **THEN** the flow map shows four steps, and the email-code step is marked not reached with the reason given in the findings file

### Requirement: Full-mode checklist appendix
When the review ran in `full` mode, the report SHALL include the rule-by-rule checklist as a collapsed appendix that the reader can filter by verdict, and each VIOLATED row SHALL link to its finding card. A `smart` review report SHALL have no checklist appendix.

#### Scenario: Full review report
- **WHEN** the findings file comes from a `full` review
- **THEN** the report ends with a collapsed checklist appendix whose VIOLATED rows link to the matching finding cards

### Requirement: Report language follows the user
The report SHALL be written in the language the user writes in during the conversation, with English as the default when that language is unclear. An explicit language request from the user SHALL override this. Rule IDs, severity, evidence status, and the quoted Sources text SHALL stay as written in the catalog.

#### Scenario: Ukrainian-speaking user
- **WHEN** the user asks in Ukrainian for a review with a report
- **THEN** the page's headings, observations, options, and captions are in Ukrainian, and rule IDs and Sources text are unchanged

### Requirement: Report is shared only on request
The skill SHALL write the report to a local file and give the user its path. It SHALL publish or upload the report only after the user confirms, and it SHALL warn the user before that step when the report holds screenshots taken behind a login.

#### Scenario: Host can publish pages
- **WHEN** the host offers a way to publish HTML pages and the report holds signed-in screenshots
- **THEN** the skill offers publishing in one line, warns about the signed-in screenshots, and publishes nothing without the user's yes

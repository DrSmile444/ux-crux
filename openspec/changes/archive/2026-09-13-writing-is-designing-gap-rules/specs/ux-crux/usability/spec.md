## ADDED Requirements

### Requirement: Confirmation dialogue simplification check
When a reviewed confirmation dialog's title, body copy, and button labels are misaligned — for example a statement-style title that does not match a question, a destructive or irreversible consequence buried below secondary details, or generic/jargon button labels ("Enable"/"Cancel") that do not literally answer the title — the usability skill SHALL flag the mismatch and recommend a structured refinement: phrase the title as a direct question, surface the most consequential (destructive/irreversible) fact first, and make the button labels literal answers to that question rather than generic verbs.

#### Scenario: Statement title with jargon buttons
- **WHEN** a reviewed confirmation dialog has a title stated as a label rather than a question (for example "Sharing settings"), buries an irreversible consequence in a dense paragraph, and offers "Enable"/"Cancel" buttons
- **THEN** the usability skill flags the mismatch and recommends rephrasing the title as a direct question (for example "Limit sharing to domain users?") with buttons that literally answer it (for example "Yes"/"No")

#### Scenario: Confirmation dialog already follows the structure
- **WHEN** a reviewed confirmation dialog's title is a direct question, its most consequential fact appears first, and its buttons literally answer the question
- **THEN** the usability skill does not flag this requirement

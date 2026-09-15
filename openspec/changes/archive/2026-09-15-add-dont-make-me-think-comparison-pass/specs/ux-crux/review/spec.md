## ADDED Requirements

### Requirement: Interior pages pass a standing Trunk Test for orientation
When the reviewed evidence includes an interior or deep page of a site or app (a page a user could plausibly reach directly via search or a shared deep link, rather than only by navigating from the homepage), the review skill SHALL check, as a standing pass alongside the lens-selection procedure's Heuristic Evaluation sweep (the same structural role `V07`'s Cognitive Walkthrough occupies), whether the page lets a disoriented user answer, within seconds: what site/app this is (Site ID), what page this is (Page Name), what the site's major sections are (Sections), what the local options are at this level (Local Navigation), where the user currently is within the hierarchy ("You Are Here"), and how to search. When any of these six cannot be answered from the evidence, the review skill SHALL name which one(s) are missing rather than reporting a single undifferentiated orientation complaint. When the evidence is only a homepage, or the request narrows to a single domain lens rather than a broader review, this standing check does not apply.

#### Scenario: A deep product page cannot identify the parent site or current section
- **WHEN** the reviewed evidence shows an interior page reachable via a direct link, with no visible Site ID and no indication of which of the site's major sections the page belongs to
- **THEN** the review skill flags the specific missing Trunk Test elements (Site ID, Sections) rather than a generic orientation complaint

#### Scenario: An interior page answers all six Trunk Test questions
- **WHEN** the reviewed evidence shows an interior page with a visible Site ID, a clear page name/title, visible major-section navigation, local navigation options, a "You Are Here" indicator, and a search entry point
- **THEN** the review skill does not flag this requirement

#### Scenario: Evidence is limited to the homepage
- **WHEN** the reviewed evidence covers only the homepage rather than any interior/deep page
- **THEN** the review skill does not apply this standing check, since the Trunk Test specifically addresses orientation on interior pages reached out of sequence

#### Scenario: Request narrows to a single domain lens
- **WHEN** the user's request scopes the review to a single domain skill rather than a broader multi-lens review
- **THEN** this standing check, like `V07`, applies only when the `review` skill itself is synthesizing a broader pass, not to a narrowly-scoped single-lens invocation

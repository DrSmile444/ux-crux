## ADDED Requirements

### Requirement: Content organization offers sort/filter modes matched to L.A.T.C.H.
The product skill SHALL evaluate a catalog, list, or content collection's sort and filter controls against Richard Saul Wurman's five organizational modes — Location, Alphabet, Time, Category, Hierarchy (L.A.T.C.H.) — and SHALL flag a collection that offers only one organizational mode when users plausibly need another (for example a product catalog offering only alphabetical browsing when users also need to sort by price or filter by category). This requirement addresses which sort/filter *modes* a collection offers, distinct from the existing structural-topology requirement, which addresses how the underlying IA is structured (tree, matrix, organic, or sequential), not how an already-structured list is sorted or filtered.

#### Scenario: Catalog offers only one organizational mode when users need another
- **WHEN** the reviewed evidence shows a product or content catalog that can only be browsed alphabetically, while the underlying content has an obvious price, category, or chronological dimension users would plausibly want to sort or filter by
- **THEN** the product skill flags the missing organizational mode(s) and recommends adding the specific L.A.T.C.H. mode(s) the content and task call for

#### Scenario: Collection's offered modes already match its content and task
- **WHEN** the reviewed evidence shows a collection whose sort/filter controls already cover every organizational mode users plausibly need for the content and task (for example a news feed sorted chronologically with a category filter)
- **THEN** the product skill does not flag this requirement

#### Scenario: Insufficient evidence of user sorting needs
- **WHEN** the reviewed evidence does not show enough about the collection's content or the user's task to determine which organizational modes are actually needed
- **THEN** the product skill reports this requirement as `NOT ASSESSABLE` rather than assuming a missing mode

### Requirement: Content photography is distinguished from ornamental stock photography
The product skill SHALL flag imagery that is purely decorative or ornamental — generic stock photography with no relationship to the specific product, service, or content it accompanies — when the surrounding content would instead benefit from a content photo that actively informs the user's decision (demonstrating scale, quality, craftsmanship, or addressing a specific stated concern).

#### Scenario: Generic stock photo replaces informative content photography
- **WHEN** the reviewed evidence shows a page using a generic stock photo (for example an unrelated smiling model) in a position where a real photo of the actual product, service, staff, or process would inform the user's decision
- **THEN** the product skill flags the ornamental-photography finding and recommends replacing it with authentic, decision-relevant photography

#### Scenario: Photography already informs the user's decision
- **WHEN** the reviewed evidence shows photography that demonstrates the actual product's scale, quality, or craftsmanship, or otherwise directly informs the user's task
- **THEN** the product skill does not flag this requirement

#### Scenario: Ornamental imagery used only as a legitimate visual separator
- **WHEN** the reviewed evidence shows a decorative image used only where no direct subject photography is possible and legibility genuinely requires a visual separator, with no claim to inform a user decision
- **THEN** the product skill does not flag this requirement as a defect, but may note the imagery adds no informational value

### Requirement: Data tables and dashboards are prioritized for the actual audience, not the data owner
The product skill SHALL flag a data table, chart, or dashboard that displays every available column, metric, or parameter a domain expert or data owner would want, when the actual target audience is a general or novice user, rather than prioritizing and filtering the display down to what that audience needs to complete their task.

#### Scenario: Dense table exposes every backend column to a general audience
- **WHEN** the reviewed evidence shows a table or dashboard with many columns, dense figures, or domain jargon presented to a general consumer audience with no progressive-disclosure path to the full detail
- **THEN** the product skill flags the expert-knowledge-trap finding and recommends a curated primary view with the remaining detail behind progressive disclosure

#### Scenario: Table is already curated for its audience
- **WHEN** the reviewed evidence shows a table or dashboard whose displayed columns and language are already scoped to what the stated audience needs, with advanced detail available on request rather than always shown
- **THEN** the product skill does not flag this requirement

#### Scenario: Verified expert-only audience
- **WHEN** the reviewed evidence confirms the actual audience is domain specialists using a professional tool (for example a financial trading terminal or engineering calculator)
- **THEN** the product skill does not flag high information density as a defect for that audience, consistent with this file's existing plain-language exception for verified expert audiences

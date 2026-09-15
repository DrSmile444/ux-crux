## ADDED Requirements

### Requirement: Headings sit closer to the content they introduce than to the content above them
The usability skill SHALL flag a heading whose visual spacing places it equidistant from, or closer to, the section above it than to the section it introduces, since a "floating" heading breaks the visual grouping cue that tells a scanning user which content the heading actually belongs to.

#### Scenario: Heading is visually equidistant between two sections
- **WHEN** the reviewed evidence shows a heading with equal (or larger) spacing above it than below it, appearing to float between the preceding and following content blocks
- **THEN** the usability skill flags the floating-heading finding and recommends increasing the spacing above the heading relative to the spacing below it

#### Scenario: Heading sits closer to its own section
- **WHEN** the reviewed evidence shows a heading with visibly less spacing below it (before its own content) than above it (after the preceding section)
- **THEN** the usability skill does not flag this requirement

### Requirement: Active navigation state uses multiple simultaneous visual cues
The usability skill SHALL flag a persistent navigation or menu structure whose current-location ("You Are Here") indicator relies on a single, subtle visual attribute (for example only a 1px underline or a barely-different shade) rather than multiple simultaneous cues (for example color plus weight plus background fill), since a scanning user can miss a single subtle attribute entirely. This is distinct from the existing near-uniformity requirement (`VH01`), which addresses whether adjacent elements that should match or differ use deliberate contrast in general, not specifically whether a current-location indicator is redundant enough to survive a quick scan.

#### Scenario: Current section is marked by a single subtle attribute
- **WHEN** the reviewed evidence shows a navigation bar where the active/current item differs from inactive siblings by only one subtle attribute (for example a slightly darker text shade with no other change)
- **THEN** the usability skill flags the single-cue active-state finding and recommends combining at least two simultaneous, unambiguous cues

#### Scenario: Current section uses multiple simultaneous cues
- **WHEN** the reviewed evidence shows the active/current navigation item distinguished by at least two simultaneous cues (for example bold weight plus a contrasting background fill, or a contrasting color plus a pointer/indicator glyph)
- **THEN** the usability skill does not flag this requirement

### Requirement: Clickable controls remain visually distinguishable under flat/minimalist design
The usability skill SHALL flag a flat or minimalist visual design that strips 3D affordance cues (shadow, gradient, bevel, border) from interactive controls without compensating through a remaining visual dimension (distinct position, background fill, color, or case), leaving clickable controls indistinguishable from static text or headers.

#### Scenario: Flat design leaves a button indistinguishable from body text
- **WHEN** the reviewed evidence shows a flat-design interface where a submit or primary action control has no shadow, border, or background fill, and also no distinct color, position, or case that would separate it from surrounding static text
- **THEN** the usability skill flags the missing-affordance finding and recommends a compensating visual dimension (background fill, distinct color, or position) rather than restoring 3D cues as the only fix

#### Scenario: Flat design compensates with a remaining visual dimension
- **WHEN** the reviewed evidence shows a flat-design interface where interactive controls have no shadow or border, but remain clearly distinguishable via a distinct background fill, color, or consistent positional convention
- **THEN** the usability skill does not flag this requirement

### Requirement: Global search input avoids forced scoping and unclear labeling before first use
The usability skill SHALL flag a global search input that requires the user to select a search scope or category before entering a first query, or that substitutes an unusual label or instructional placeholder text (for example "Quick Find" or "Type a keyword...") for a plain input with a "Search" label or a recognizable search icon.

#### Scenario: Search requires a category choice before the first query
- **WHEN** the reviewed evidence shows a global search control that forces the user to pick a scope or category from a dropdown before the search box itself becomes usable
- **THEN** the usability skill flags the forced-scoping finding and recommends deferring scope selection to the results page

#### Scenario: Search box uses an unusual label instead of a plain search affordance
- **WHEN** the reviewed evidence shows a search input labeled with an unconventional term (for example "Quick Find") or relying on instructional placeholder text in place of a recognizable search icon or "Search" label
- **THEN** the usability skill flags the unclear-labeling finding

#### Scenario: Search box is unscoped and clearly labeled
- **WHEN** the reviewed evidence shows a plain global search input usable without a prior scope choice, labeled with a "Search" affordance or a recognizable search icon
- **THEN** the usability skill does not flag this requirement

#### Scenario: Two genuinely distinct search domains justify explicit scoping
- **WHEN** the reviewed evidence shows a product with two genuinely separate search domains (for example searching within the site versus searching the entire web) where explicit scope selection materially changes the result set
- **THEN** the usability skill does not flag this requirement solely because a scope choice is offered

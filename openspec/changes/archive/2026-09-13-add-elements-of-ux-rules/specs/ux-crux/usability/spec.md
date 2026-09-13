## ADDED Requirements

### Requirement: Small, fixed option sets are shown as visible controls, not hidden dropdowns
The usability skill SHALL flag a small, fixed set of options (fewer than approximately six choices) that is hidden inside a collapsed dropdown menu when screen space would permit showing the options directly as radio buttons (mutually exclusive) or checkboxes (independent), distinct from the requirement on select/dropdown controls for open-ended, high-cardinality data, which addresses value spaces too large or unbounded to show directly rather than small sets that are simply hidden unnecessarily.

#### Scenario: Three-option dropdown hides choices that would fit as radio buttons
- **WHEN** the reviewed evidence shows a form presenting three mutually exclusive options through a collapsed dropdown menu, on a screen with enough space to show all three as visible radio buttons
- **THEN** the usability skill flags the unnecessary concealment and recommends visible radio buttons instead

#### Scenario: Dropdown is a reasonable choice given constraints
- **WHEN** the reviewed evidence shows a small option set presented via dropdown on a screen with genuine space constraints (for example a dense mobile form with many other required fields), or the option set exceeds roughly six choices
- **THEN** the usability skill does not flag this requirement

### Requirement: High-frequency fields default to the dominant value and remember prior choices
The usability skill SHALL flag a high-frequency form field or option whose statistically dominant, most common value is not pre-selected by default when doing so carries no risk, and SHALL flag a system that requires a user to re-select a value it could reasonably remember from that user's own previous choice, distinct from the requirement on redundant entry within a single process, which addresses re-asking already-entered information within one flow rather than defaults and cross-session memory.

#### Scenario: Common option left unselected by default
- **WHEN** the reviewed evidence shows a checkout form where "billing address same as shipping" is known to apply to the large majority of users, but the checkbox is unchecked by default, requiring most users to take an extra action
- **THEN** the usability skill flags the missing default-option optimization as a finding

#### Scenario: System does not remember a user's prior selection
- **WHEN** the reviewed evidence shows a returning user required to reselect a preference or option they explicitly chose in a previous session, with no indication the system could reasonably have remembered it
- **THEN** the usability skill flags the missing choice-memory as a finding

#### Scenario: High-risk or consent option is not defaulted
- **WHEN** the reviewed evidence shows a high-risk financial, legal, or consent-bearing option that is left unselected by default, requiring an explicit affirmative choice
- **THEN** the usability skill does not flag this requirement, since such options should not be pre-selected regardless of frequency

### Requirement: Form and data fields are grouped by mental model, not arbitrary order
The usability skill SHALL flag a form or data-display layout that arranges related fields in alphabetical or otherwise arbitrary order instead of logical sub-categories that reflect the user's mental model (for example grouping Personal Info, Address, and Contact separately), distinct from the requirement on single-column question layout, which addresses visual column arrangement rather than semantic grouping of fields.

#### Scenario: Contact form fields listed alphabetically
- **WHEN** the reviewed evidence shows a form listing fields in alphabetical order (for example City, E-mail, Job Title, Name, State) with no logical grouping
- **THEN** the usability skill flags the missing semantic field grouping and recommends organizing fields into meaningful sub-categories

#### Scenario: Fields are grouped into meaningful sub-categories
- **WHEN** the reviewed evidence shows a form or data display organized into clearly titled sub-sections reflecting the user's mental model (for example Personal Info, Address, Other Contact)
- **THEN** the usability skill does not flag this requirement

### Requirement: Content includes contextual inline navigation at the point of reading
The usability skill SHALL flag body or content text that omits a contextual inline hyperlink to a clearly related item at the point where a user is reading about it, forcing the user back to a global or local menu to find that related content instead, distinct from the existing navigation requirements, which address global/local menu structure and orientation rather than in-content links at the moment of reading.

#### Scenario: Product description has no link to a directly related item
- **WHEN** the reviewed evidence shows a product description mentioning a directly related accessory or complementary item, with no inline link to it, requiring the user to leave the page and search the site menu instead
- **THEN** the usability skill flags the missing contextual inline link as a finding

#### Scenario: Content links directly to related items at the point of mention
- **WHEN** the reviewed evidence shows body content that includes an inline hyperlink to a related item at the exact point it is mentioned
- **THEN** the usability skill does not flag this requirement

### Requirement: Adjacent elements use deliberate contrast, not confusing near-uniformity
The usability skill SHALL flag adjacent visual elements whose styling (color, weight, or size) differs only slightly, in a way that appears accidental rather than a deliberate signal of a real functional difference, since near-identical-but-not-quite-identical styling creates cognitive friction as users try to determine whether the difference is meaningful. The skill SHALL also confirm that elements signaling a genuine functional difference use bold, deliberate contrast.

#### Scenario: Primary buttons use barely different shades across screens
- **WHEN** the reviewed evidence shows a primary action button styled in slightly different shades of the same color across different screens of the same product, with no functional reason for the difference
- **THEN** the usability skill flags the near-uniformity as a finding, since a user may reasonably wonder whether the difference is intentional

#### Scenario: A functionally distinct element uses bold, deliberate contrast
- **WHEN** the reviewed evidence shows an element with a genuinely different function (for example an error message) styled with clearly deliberate, high contrast relative to neutral surrounding elements
- **THEN** the usability skill does not flag this requirement

#### Scenario: Identical elements are styled identically
- **WHEN** the reviewed evidence shows functionally identical elements sharing exactly the same styling throughout
- **THEN** the usability skill does not flag this requirement

### Requirement: Layouts use a shared grid for internal and external consistency
The usability skill SHALL flag a product whose sub-sections or screens are laid out with fragmented, inconsistent visual styles instead of a shared grid system, and SHALL flag a grid system that is treated as an untouchable constraint after it no longer accommodates the product's current functionality, rather than being revisited and updated.

#### Scenario: Sub-sections use inconsistent, fragmented layouts
- **WHEN** the reviewed evidence shows different sections or teams' screens within the same product using visibly different layout grids, spacing, or alignment with no shared style guide
- **THEN** the usability skill flags the internal-consistency gap as a finding

#### Scenario: An outdated grid blocks needed functionality
- **WHEN** the reviewed evidence shows a layout grid that visibly cannot accommodate new required functionality (for example content is cramped or overflows) but has not been revisited
- **THEN** the usability skill flags the rigid grid as a finding and recommends updating the grid rather than forcing new content into the old constraint

#### Scenario: A shared, current grid is applied consistently
- **WHEN** the reviewed evidence shows a shared grid/style guide applied consistently across sections, and updated when new functionality required it
- **THEN** the usability skill does not flag this requirement

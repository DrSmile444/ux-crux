## ADDED Requirements

### Requirement: Top-level navigation categories are mutually exclusive
The usability skill SHALL flag top-level navigation categories whose scope overlaps enough that a user could plausibly place the same item under more than one of them, distinct from the existing requirement that top-level destinations be "mutually meaningful" in general — this requirement applies the specific, testable non-overlap check: for any given item or task, would a user hesitate between two categories?

#### Scenario: Two top-level categories share the same items
- **WHEN** the reviewed evidence shows top-level navigation categories (for example "Products" and "Solutions") whose contents overlap such that the same items or tasks plausibly belong under either
- **THEN** the usability skill flags the category-overlap finding and recommends redrawing the category boundaries so each item has one clear home, or cross-listing the item in a backend taxonomy while keeping the top-level labels distinct

#### Scenario: Top-level categories have clearly distinct scopes
- **WHEN** the reviewed evidence shows top-level navigation categories with clearly separated scopes, where no plausible item would belong under more than one
- **THEN** the usability skill does not flag this requirement

### Requirement: Navigation does not use a catch-all label as a dumping ground
The usability skill SHALL flag a top-level or prominent navigation label that functions as an undifferentiated catch-all — "Miscellaneous", "Resources", "More Info", "Other", or an equivalent vague bucket — used to hold content that does not fit the existing structure, rather than expanding the structure to accommodate it.

#### Scenario: Catch-all navigation label holds unrelated content
- **WHEN** the reviewed evidence shows a navigation item labeled with a vague catch-all term that links to a page mixing unrelated content types (for example PDFs, news, and help articles with no shared theme)
- **THEN** the usability skill flags the catch-all-bucket finding and recommends either a specific, descriptive label or redistributing the content into the existing structure

#### Scenario: Navigation has no catch-all label
- **WHEN** the reviewed evidence shows navigation where every label names a specific, descriptive category with no vague miscellaneous bucket
- **THEN** the usability skill does not flag this requirement

### Requirement: Faceted filters prevent dead-end zero-result states
The usability skill SHALL flag a faceted-filter or search-refinement interface that allows a user to select a combination of filters guaranteed to produce zero results without warning, or that provides no single-action way to clear all applied filters at once, distinct from the existing no-results-messaging requirement (which addresses what is shown once a dead end is reached) and the existing filter-visibility requirement (which addresses whether current selections are visible, not whether a zero-result combination can be prevented or escaped in one action).

#### Scenario: Filter combination silently yields zero results with no reset
- **WHEN** the reviewed evidence shows a faceted-filter interface where selecting an additional filter produces a "0 results" page, and there is no single, prominent control to clear all applied filters at once
- **THEN** the usability skill flags the dead-end finding and recommends dynamically hiding or disabling filter options that would yield zero results, plus a one-click "clear all filters" control

#### Scenario: Filters dynamically prevent dead ends and offer a reset
- **WHEN** the reviewed evidence shows a faceted-filter interface that disables or hides options that would produce zero results before they are selected, and provides a visible one-click control to clear all applied filters
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile forms use device capabilities instead of requiring full manual entry
The usability skill SHALL flag a mobile form field that requires full manual entry when the underlying platform provides a device capability that could supply the same data more reliably — camera-based document or card scanning, geolocation-based address autofill, or an OS-level payment sheet such as Apple Pay or Google Pay — and privacy permits its use. This is distinct from the existing keyboard/autocomplete-configuration requirement, which governs how manually-typed input is configured rather than whether manual entry can be avoided entirely, and from the existing password-manager/authentication requirement, which is scoped to authentication flows rather than general form input.

#### Scenario: Payment or address form requires full manual entry despite platform support
- **WHEN** the reviewed evidence shows a mobile checkout or address form requiring the user to manually type a card number or full address, on a platform that supports card-scanning, an OS-level payment sheet, or geolocation-based address lookup
- **THEN** the usability skill flags the missing device-capability integration and recommends offering the available capability as a faster alternative to manual entry

#### Scenario: Form already offers the available device capability
- **WHEN** the reviewed evidence shows a mobile form offering camera-based scanning, geolocation autofill, or an OS-level payment sheet as an alternative to manual entry, alongside a manual-entry fallback
- **THEN** the usability skill does not flag this requirement

#### Scenario: Platform does not provide a relevant device capability
- **WHEN** the reviewed evidence does not show, or the platform does not provide, a device capability relevant to the specific field in question
- **THEN** the usability skill does not flag this requirement for that field

## ADDED Requirements

### Requirement: Reviewer images open in one gallery across reviews
The usability skill SHALL check that when a user opens an image submitted by a reviewer, all reviewer images are reachable in one collection with arrow and swipe navigation, not only the images of that single review, following Baymard Institute, Sousa, "Always Allow Users to Navigate across User Reviews via Reviewer-Submitted Images" (2024). This requirement is distinct from `D11`, which concerns the ratings summary. It SHALL NOT apply to products without reviewer images, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Gallery limited to one review
- **WHEN** the reviewed evidence shows a review image overlay that moves only through that review's photos
- **THEN** the usability skill flags the limited navigation

#### Scenario: Single carousel
- **WHEN** the reviewed evidence shows an overlay that swipes through all reviewer photos with their review text
- **THEN** the usability skill does not flag this requirement

### Requirement: Sliders suit approximate values and keep labels visible
The usability skill SHALL check that a slider is used only where an approximate value is enough, that values the user must enter exactly (age, weight, calories, quantities logged repeatedly) use a text field or stepper, and that slider labels sit above or beside the thumb so a finger does not cover them, following Nielsen Norman Group, Harley, "Slider Design: Rules of Thumb" (2015). This requirement is distinct from `F18`, which concerns open-ended or high-cardinality entry. It SHALL NOT apply to a slider paired with a text field for exact entry, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Slider for grams of food logged daily
- **WHEN** the reviewed evidence shows a slider as the only way to enter a food quantity in grams
- **THEN** the usability skill flags the slider and recommends a text field

#### Scenario: Slider plus numeric field
- **WHEN** the reviewed evidence shows a price-range slider with an adjacent numeric input and labels above the thumbs
- **THEN** the usability skill does not flag this requirement

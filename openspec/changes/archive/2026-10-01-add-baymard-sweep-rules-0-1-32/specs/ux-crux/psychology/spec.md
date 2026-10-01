## ADDED Requirements

### Requirement: Homepage carousel autorotation
The psychology skill SHALL check that a homepage carousel does not auto-rotate on mobile (it is advanced by swipe and visible controls); on desktop, auto-rotation pauses on mouse hover and stops once the user has changed a slide, following Baymard Institute, Scott, "10 UX Requirements to Follow for a User-Friendly Homepage Carousel Design" (2019, updated 2025). This requirement is distinct from `PA12`, which concerns relying on a carousel to carry important content. It SHALL NOT apply to static homepage banners and content sections, and keyboard-focus pausing, which the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: PA20 failing case
- **WHEN** the reviewed evidence is a mobile homepage carousel that advances by itself, or a desktop carousel that keeps rotating under the cursor
- **THEN** the psychology skill flags the auto-rotation

#### Scenario: PA20 passing case
- **WHEN** the reviewed evidence is a mobile carousel changed by swipe only, and a desktop carousel that pauses on hover and stops after the user clicks an arrow
- **THEN** the psychology skill does not flag this requirement

## ADDED Requirements

### Requirement: UI motion is purposeful, brief and optional
The usability skill SHALL check that custom UI motion serves a stated purpose, runs briefly (simple feedback near 100 ms, larger changes within about 200-500 ms), uses easing rather than linear motion, is not added to frequently repeated interactions, is never the only channel for important information, and does not force the user to wait. This follows NN/g, Laubheimer, "Executing UX Animations: Duration and Motion Characteristics" (2020), and Apple Human Interface Guidelines, Motion. This requirement is distinct from `R01R` and `R06R`, which concern system response time. It SHALL NOT apply to system-provided transitions, and motion that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Long mandatory entrance animation
- **WHEN** the reviewed evidence shows a 1.2 s blocking animation on every screen entry
- **THEN** the usability skill flags the duration and the forced wait

#### Scenario: Brief eased feedback
- **WHEN** the reviewed evidence shows a 150 ms eased toggle transition that also changes the control's label
- **THEN** the usability skill does not flag this requirement

### Requirement: Load-more replaces infinite scroll for goal-directed lists
The usability skill SHALL check that a list users search, compare or act on, or a page that carries footer content users need, uses a "Load more" control or pagination rather than infinite scroll. Infinite scroll remains acceptable for homogeneous items browsed without a particular goal. This follows NN/g, Neusesser, "Infinite Scrolling: When to Use It, When to Avoid It" (2022). This requirement is distinct from `D05` and `D08` (filters). It SHALL NOT apply to feeds of homogeneous items, and loading behaviour that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Infinite scroll hides the footer
- **WHEN** the reviewed evidence shows a product list that auto-loads content and a footer holding returns information the user cannot reach
- **THEN** the usability skill flags the loading pattern

#### Scenario: Social feed
- **WHEN** the reviewed evidence shows a feed of homogeneous posts with no footer dependency
- **THEN** the usability skill does not flag this requirement

### Requirement: Ratings distribution summary is graphical, filterable and expanded
The usability skill SHALL check that a review section with enough ratings (more than five) shows a distribution summary that is graphical, works as a mutually exclusive rating filter, and is expanded by default, and that the summary is hidden when five or fewer ratings exist. This follows Baymard, Scott, "5 Requirements for the Ratings Distribution Summary" (2017, updated). This requirement is distinct from `D06`. It SHALL NOT apply to a product without reviews, and interaction that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Text-only breakdown in a collapsed section
- **WHEN** the reviewed evidence shows a ratings breakdown as a text list inside a collapsed panel
- **THEN** the usability skill flags the missing graphic and default state

#### Scenario: Expanded clickable bars
- **WHEN** the reviewed evidence shows expanded bars that filter reviews on click
- **THEN** the usability skill does not flag this requirement

### Requirement: iOS sheets are scoped, resizable when needed and dismissable
The usability skill SHALL check that an iOS sheet presents a scoped task tied to its parent context; shows a grabber when it can be resized; supports swipe to dismiss (confirming through an action sheet when unsaved changes exist); appears one at a time; and pairs any Done button with Cancel or Back without showing all three. This follows Apple Human Interface Guidelines, Sheets. This requirement is distinct from `N02R`. It SHALL NOT apply to non-iOS platforms, and a long multistep flow that the guideline directs to a full-screen presentation SHALL be assessed against that alternative.

#### Scenario: Done button alone
- **WHEN** the reviewed evidence shows an iOS sheet whose only exit is a Done button
- **THEN** the usability skill flags the missing Cancel or Back

#### Scenario: Resizable sheet with grabber
- **WHEN** the reviewed evidence shows a medium-detent sheet with a grabber and Cancel on the leading edge
- **THEN** the usability skill does not flag this requirement

### Requirement: iOS tab bar stays visible and its tabs are not hidden or disabled
The usability skill SHALL check that an iOS tab bar remains visible while the user moves between sections (except beneath a modal), and that its tabs are not hidden or disabled when their content is unavailable; an empty section explains why. This follows Apple Human Interface Guidelines, Tab bars. This requirement is distinct from `N02R`, which concerns what a tab bar represents. It SHALL NOT apply to non-iOS platforms.

#### Scenario: Tab bar removed on a detail screen
- **WHEN** the reviewed evidence shows a pushed section screen on iOS with no tab bar
- **THEN** the usability skill flags the hidden tab bar

#### Scenario: Disabled tab with an empty-state explanation
- **WHEN** the reviewed evidence shows a visible tab whose empty section says why it is empty
- **THEN** the usability skill does not flag this requirement

### Requirement: Dark Mode uses system layers, softened whites and sufficient contrast
The usability skill SHALL check that an iOS Dark Mode interface prefers the system base and elevated background colours, softens bright white image backgrounds so they do not glow, and keeps contrast of at least 4.5:1 (striving for 7:1 for small text) in every appearance. This follows Apple Human Interface Guidelines, Dark Mode. This requirement is distinct from `L05`, which concerns legibility across appearances in general. It SHALL NOT apply to a permanently dark media viewer, and colours that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Pure white logo tile in a dark screen
- **WHEN** the reviewed evidence shows a full-white image tile on a dark background
- **THEN** the usability skill flags the glow and recommends softening

#### Scenario: System backgrounds with elevated modal
- **WHEN** the reviewed evidence shows system backgrounds that switch to elevated for a sheet
- **THEN** the usability skill does not flag this requirement

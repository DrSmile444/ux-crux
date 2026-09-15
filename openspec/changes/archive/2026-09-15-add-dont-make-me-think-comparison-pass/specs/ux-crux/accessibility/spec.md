## ADDED Requirements

### Requirement: Hover-dependent affordances have a non-hover equivalent
The accessibility skill SHALL flag a control whose clickability cue, tooltip, or submenu is revealed only on mouse-hover state, since touchscreens (no cursor), switch-access, and keyboard-only interaction have no hover state and would leave such content permanently inaccessible.

#### Scenario: Submenu is revealed only on hover
- **WHEN** the reviewed evidence shows a navigation submenu, tooltip, or clickability cue that appears only when a mouse pointer hovers over its trigger, with no tap-triggered, focus-triggered, or always-visible equivalent
- **THEN** the accessibility skill flags the hover-dependency finding as blocking touch, switch-access, and keyboard-only users

#### Scenario: Hover-revealed content has a tap or focus equivalent
- **WHEN** the reviewed evidence shows the same kind of revealed content also triggered by tap or keyboard focus, or shown as always-visible
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Visited and unvisited links remain visually distinct
The accessibility skill SHALL flag a design or stylesheet that removes or overrides the browser's distinction between visited and unvisited link colors, since users rely on this distinction to know which paths they have already explored and avoid unproductive re-traversal.

#### Scenario: Custom link styling removes the visited-state color
- **WHEN** the reviewed evidence (code or design spec) shows link styling that defines only a single color for all links regardless of visited state
- **THEN** the accessibility skill flags the missing visited/unvisited distinction

#### Scenario: Visited and unvisited links use distinct colors
- **WHEN** the reviewed evidence shows visited links rendered in a color distinct from unvisited links
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Link and heading text front-loads its distinguishing keyword for screen-reader scanning
The accessibility skill SHALL flag link text or headings that bury their distinguishing keyword after generic filler (for example "Click here to view the ceramic knives catalog" or "Read more about shipping"), since screen-reader users commonly navigate a page by jumping through a list of links or headings and typically hear only the first few words of each before deciding whether to continue. This is distinct from `product`'s existing front-loading rules for long-form content (`C07`/`C08`), which address sighted visual scanning of body copy, not the assistive-technology failure mode of a links/headings list read aloud out of visual context.

#### Scenario: A list of links all open with the same filler phrase
- **WHEN** the reviewed evidence shows a list of links or headings that each open with generic filler ("Click here to...", "Read more about...") before the distinguishing keyword
- **THEN** the accessibility skill flags the missing front-loaded keyword and recommends leading with the distinguishing term instead

#### Scenario: Link and heading text leads with the distinguishing keyword
- **WHEN** the reviewed evidence shows link text and headings that open directly with their distinguishing keyword (for example "Ceramic Knives catalog")
- **THEN** the accessibility skill does not flag this requirement

### Requirement: A "skip to main content" link precedes persistent header navigation
The accessibility skill SHALL flag a page or screen with persistent header navigation (a global nav bar, utility links, or a search box repeated on every page) that provides no "skip to main content" link reachable as the first focusable element, forcing keyboard and screen-reader users to tab or listen through the full header on every page.

#### Scenario: Persistent header has no skip link
- **WHEN** the reviewed evidence (code or a described tab/focus order) shows a page with repeated global header navigation and no skip-to-content link as the first focusable element
- **THEN** the accessibility skill flags the missing skip link

#### Scenario: A skip-to-content link precedes the header
- **WHEN** the reviewed evidence shows a "skip to main content" (or equivalent) link as the first focusable element, ahead of the persistent header navigation
- **THEN** the accessibility skill does not flag this requirement

#### Scenario: Evidence does not show tab/focus order
- **WHEN** the reviewed evidence is a static visual screenshot with no way to determine focus order or the presence of an off-screen skip link
- **THEN** the accessibility skill reports this requirement as `NOT ASSESSABLE`

### Requirement: Heading hierarchy is logical and unskipped
The accessibility skill SHALL flag a document or screen whose heading markup skips a level (for example an `<h1>` followed directly by an `<h3>` with no `<h2>`) or whose heading tags are chosen for their default visual size rather than to reflect the actual content hierarchy, since assistive technology relies on heading structure for navigation independent of visual styling.

#### Scenario: Heading levels skip from h1 to h3
- **WHEN** the reviewed evidence (code or a described DOM structure) shows a page whose heading tags jump from `<h1>` to `<h3>` with no intervening `<h2>`, or whose heading level was chosen for its default font size rather than its place in the content hierarchy
- **THEN** the accessibility skill flags the broken heading hierarchy

#### Scenario: Heading levels form a logical, unskipped hierarchy
- **WHEN** the reviewed evidence shows heading tags that descend one level at a time and reflect the actual content structure
- **THEN** the accessibility skill does not flag this requirement

#### Scenario: Evidence gives no access to heading markup
- **WHEN** the reviewed evidence is a visual screenshot or design mockup with no accessible markup or DOM structure to inspect
- **THEN** the accessibility skill reports this requirement as `NOT ASSESSABLE`

### Requirement: Images distinguish informative alt text from decorative alt=""
The accessibility skill SHALL flag an informative image (one conveying content or functional meaning) that has no descriptive alt text, and SHALL flag a purely decorative image (an ornamental graphic with no informational or functional purpose) that has non-empty alt text a screen reader would read aloud as noise, since both directions of this distinction cause equivalent assistive-technology harm — missing information in the first case, unnecessary clutter in the second.

#### Scenario: An informative image has no alt text
- **WHEN** the reviewed evidence (code or a described image implementation) shows an image conveying content or functional meaning (a product photo, a chart, an icon-only control) with no alt attribute or an empty one
- **THEN** the accessibility skill flags the missing informative alt text

#### Scenario: A decorative image has non-empty alt text
- **WHEN** the reviewed evidence shows a purely ornamental image (a background flourish, a spacer graphic) with descriptive, non-empty alt text that a screen reader would read aloud
- **THEN** the accessibility skill flags the unnecessary alt-text clutter and recommends an empty `alt=""`

#### Scenario: Alt text correctly matches each image's role
- **WHEN** the reviewed evidence shows informative images with descriptive alt text and decorative images with empty `alt=""`
- **THEN** the accessibility skill does not flag this requirement

#### Scenario: Evidence does not expose the alt attribute
- **WHEN** the reviewed evidence is a rendered screenshot with no access to the underlying markup
- **THEN** the accessibility skill reports this requirement as `NOT ASSESSABLE`

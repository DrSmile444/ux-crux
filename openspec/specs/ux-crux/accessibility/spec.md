# ux-crux/accessibility Specification

## Purpose

Defines the accessibility lens covering WCAG conformance and inclusive interaction for mobile UIs.

## Requirements

### Requirement: Platform-correct target size and contrast checks
The accessibility skill SHALL evaluate touch target size against the platform-specific minimum (iOS 44x44pt, Android 48x48dp, WCAG 2.2 for web/hybrid content) and text contrast against WCAG AA minimums, and SHALL NOT apply a single universal target-size constant across all platforms.

#### Scenario: Reviewing an Android-only screen
- **WHEN** the reviewed evidence is explicitly Android
- **THEN** the accessibility skill applies the 48x48dp minimum rather than iOS's 44x44pt figure

### Requirement: Non-visual and non-gesture access
The accessibility skill SHALL check that all essential functionality is available without relying on color alone, without requiring a specific complex gesture that has no accessible alternative, and with correct accessible names, roles, and reading order for assistive technology.

#### Scenario: Drag-only reordering
- **WHEN** a reviewed feature's only way to reorder items is a drag gesture with no alternative
- **THEN** the accessibility skill flags this as a blocker-severity finding

### Requirement: Text-scaling resilience
The accessibility skill SHALL evaluate whether the UI remains usable when text is scaled up (Dynamic Type or scalable Android text units), flagging clipped, overlapping, or off-screen essential content.

#### Scenario: Enlarged text clips a button label
- **WHEN** evidence shows a button label clipping at a larger accessibility text size
- **THEN** the accessibility skill reports this at blocker or major severity depending on whether the action remains reachable

### Requirement: Instructional and action-verb language accessibility
The accessibility skill SHALL flag instructional or help microcopy that describes a control by its visual/spatial position (for example "the button below," "the panel on the right") instead of the order of actions to take, since assistive technology reads content in document order and responsive layouts reposition elements. The accessibility skill SHALL also flag call-to-action or instructional copy that names a specific input hardware action (for example "Click," "Tap," "Press") where a device-agnostic action verb ("Select," "Choose," "View") would serve equally well, since interfaces are operated by mouse, touch, voice, and switch-access devices; this SHALL NOT apply to copy that is deliberately teaching a specific physical gesture (for example "Pinch to zoom").

#### Scenario: Spatial instruction instead of chronological order
- **WHEN** reviewed help text reads "Click the OK button below to continue" or otherwise instructs the user based on an element's on-screen position
- **THEN** the accessibility skill flags the spatial-language dependency and recommends chronological phrasing (for example "Next, select OK to continue")

#### Scenario: Hardware-specific verb on a multi-modal interface
- **WHEN** reviewed CTA copy on a responsive or multi-modal surface reads "Click here to submit" without any hardware-specific gesture being taught
- **THEN** the accessibility skill recommends a device-agnostic verb such as "Select" instead

#### Scenario: Copy intentionally teaches a physical gesture
- **WHEN** reviewed copy explicitly teaches a specific touch gesture the interface requires (for example "Pinch to zoom out")
- **THEN** the accessibility skill does not flag the hardware-specific verb under this requirement

### Requirement: Digital equity and graceful degradation across hardware and connectivity tiers
The accessibility skill SHALL, distinct from its existing WCAG/disability-focused rule set, check a reviewed design's assumptions about hardware capability, network connectivity, and digital literacy against Kranzberg's First Law of Technology ("technology is neither good nor bad, nor is it neutral"). The skill SHALL flag a design that fails, degrades unacceptably, or becomes unusable under low-bandwidth connectivity, on older or budget-tier devices, or without high-speed continuous connectivity, when the product's plausible user base includes users in those conditions. The skill SHALL NOT apply this requirement to a specialized enterprise or professional tool whose evidence establishes that a minimum hardware/connectivity tier is a legitimate, stated requirement.

#### Scenario: App unusable without continuous high-speed connectivity
- **WHEN** the reviewed evidence shows a consumer mobile app that fails or becomes unusable under intermittent or low-bandwidth connectivity, with no offline or degraded-connectivity state, and the product's plausible user base is not restricted to guaranteed high-connectivity environments
- **THEN** the accessibility skill flags the missing graceful-degradation path as a digital-equity finding, distinct from the existing WCAG conformance rules

#### Scenario: Specialized enterprise tool with a stated hardware minimum
- **WHEN** the reviewed evidence establishes that the product is a specialized enterprise tool with a documented minimum hardware/network requirement for its verified user base
- **THEN** the accessibility skill does not flag the hardware/connectivity assumption under this requirement

### Requirement: Typography and iconography remain legible under real-world reading conditions
The accessibility skill SHALL flag a mobile UI whose typography or iconography is specified or shown in a way that would plausibly fail under real-world adverse reading conditions — outdoor sunlight glare, a budget or low-resolution display, or low ambient light — such as ultra-thin type weights, low-contrast icon fills, or fine detail that would disintegrate under these conditions. This is distinct from the existing static WCAG contrast-ratio requirement (compliance under standard viewing conditions) and the existing text-scaling/Dynamic Type requirements, neither of which by itself guarantees legibility once real-world display quality or ambient lighting is accounted for.

#### Scenario: A design specifies ultra-thin type or fine detail with no adverse-condition allowance
- **WHEN** the reviewed evidence shows a design spec or screenshot using ultra-thin font weights or fine-detail iconography for primary content, with no indication that legibility under glare, a low-end display, or low light was considered
- **THEN** the accessibility skill flags the real-world-legibility finding and recommends a more robust type weight or icon treatment, or confirming legibility through outdoor/low-end-device testing

#### Scenario: Typography and iconography already use robust, legible treatments
- **WHEN** the reviewed evidence shows typography and iconography using sufficiently bold weights and open, simple shapes that would plausibly remain legible under glare or on lower-quality displays
- **THEN** the accessibility skill does not flag this requirement

#### Scenario: Evidence gives no basis to assess real-world display conditions
- **WHEN** the reviewed evidence is a static screenshot or spec with no information about the product's real-world usage context (indoor/outdoor use, target device tier)
- **THEN** the accessibility skill reports this requirement as `NOT ASSESSABLE` rather than assuming a pass or fail, and names a running build tested outdoors or on a low-end device as the validation method

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

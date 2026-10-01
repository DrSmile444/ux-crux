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

### Requirement: Content survives user text-spacing overrides
The accessibility skill SHALL check that when a user sets line height to at least 1.5 times the font size, paragraph spacing to at least 2 times, letter spacing to at least 0.12 times and word spacing to at least 0.16 times, no content or function is lost (WCAG 2.2 SC 1.4.12, Level AA). This requirement is distinct from `X04` and `X05`, which cover text size scaling. It SHALL NOT apply to non-markup formats, and it SHALL be reported `NOT ASSESSABLE` from a screenshot alone because the check needs markup or a running build.

#### Scenario: Text clips after spacing override
- **WHEN** the reviewed evidence shows a fixed-height container that hides text once line height is raised to 1.5 times
- **THEN** the accessibility skill flags the text-spacing finding

#### Scenario: Screenshot only
- **WHEN** the reviewed evidence is a single screenshot
- **THEN** the accessibility skill reports this requirement `NOT ASSESSABLE` and names a running build with the spacing values applied as the evidence that would resolve it

### Requirement: Long-form reading text avoids maximum-contrast pairings
The accessibility skill SHALL check that long-form reading text on a light background uses a dark, not pure black, colour on a light, not pure white, background, while still meeting `X03`. The basis is the British Dyslexia Association guidance as quoted by Dyslexia Scotland, and dark-on-light polarity is supported by NN/g's review of dark and light mode research. The guidance conflicts with advice to maximise contrast, so the requirement SHALL be reported at `Contextual` evidence, SHALL NOT override `X03`, and SHALL NOT apply to short labels, controls or content a user can theme. Colour values that cannot be read from the evidence SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Pure black on pure white for long text
- **WHEN** the reviewed evidence shows long-form body text set as `#000000` on `#FFFFFF` with no user theme option
- **THEN** the accessibility skill reports a low-severity finding and recommends a softened pairing that still meets `X03`

#### Scenario: Near-black on off-white
- **WHEN** the reviewed evidence shows body text in a dark grey on an off-white background that meets 4.5:1
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Text and icons over images keep contrast on the worst-case region
The accessibility skill SHALL check that text placed over an image, and informative icons placed over an image, keep the required contrast against the lightest or darkest region of the image behind them. Text follows WCAG 2.2 SC 1.4.3 and failure F83; icons follow SC 1.4.11. This requirement is distinct from `X03`, which concerns a flat foreground and background pair. It SHALL NOT apply to purely decorative text in a logo, and a user-supplied or rotating image that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Save icon on a bright listing photo
- **WHEN** the reviewed evidence shows a white save icon over listing photos that can be near white
- **THEN** the accessibility skill flags the contrast risk and recommends a scrim or a backing shape

#### Scenario: Text on a fixed dark scrim
- **WHEN** the reviewed evidence shows headline text on an image with a dark overlay that keeps 4.5:1 against the lightest region
- **THEN** the accessibility skill does not flag this requirement

### Requirement: iOS text meets Apple's default and minimum sizes and avoids light weights
The accessibility skill SHALL check that on iOS text defaults to 17 pt and none falls below the 11 pt minimum, and that small text avoids Ultralight, Thin and Light weights, following Apple Human Interface Guidelines, Typography. This requirement is distinct from `X04` and `X05` (text scaling) and `X16` (adverse reading conditions). It SHALL NOT apply to non-iOS platforms, and sizes that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Caption at 9 pt in a thin weight
- **WHEN** the reviewed evidence shows an iOS caption set at 9 pt in a Light weight
- **THEN** the accessibility skill flags the size and weight

#### Scenario: Static mock-up without type specification
- **WHEN** the reviewed evidence is an image without stated point sizes
- **THEN** the accessibility skill reports this requirement `NOT ASSESSABLE`

### Requirement: Custom drop-down keyboard and viewport behaviour
The accessibility skill SHALL check that a custom drop-down is reachable by Tab, shows a focus style, supports type-to-select, shows its values fully and opens in the direction that fits the viewport, following Baymard Institute, Christian Holst, "5 Common Usability Pitfalls of Custom Designed Drop-Downs (31% Have Drop-Down UI Issues)" (2017). This requirement is distinct from `X01`, which requires correct accessible names, roles, states and focus order, not these keyboard and viewport behaviours. It SHALL NOT apply to native select elements and a custom collapsed state that opens the native list, and screen-reader announcements and behaviour on touch devices SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a custom card-expiry drop-down is skipped by Tab and always opens downward below the fold
- **THEN** the accessibility skill flags the unreachable and clipped drop-down

#### Scenario: Passing case
- **WHEN** the component keeps a native select under a custom closed look
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Essential text is real text, not an image
The accessibility skill SHALL check that essential text and complex data are real HTML text or tables, not baked into images, following Baymard Institute, Alex Krzyminski, "Accessibility in E-Commerce: Use 'ALT' Text to Communicate the Core Content of “Informational” Images (55% of Sites Don't)" (2021). This requirement is distinct from `X22`, which covers alt text for informative images and empty alt for decorative ones, not whether the content should be an image at all. It SHALL NOT apply to a decorative image, or an image whose content is also given in nearby text such as a caption, and how every assistive technology (for example a magnifier) renders the image SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a size guide is one image with the alt text "size guide"
- **THEN** the accessibility skill flags the data held only in an image

#### Scenario: Passing case
- **WHEN** the size guide is an HTML table and a banner image repeats its offer in nearby text
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Keyboard focus stays visible and every control is keyboard-operable [X29]
The accessibility skill SHALL check that every control a keyboard user can reach shows a visible focus indicator; the browser default is kept, or replaced by a custom style that is at least as easy to see and is consistent with the site, and the focus outline is never removed without a replacement. Every interactive element, including custom widgets built from div or span elements, carousel controls and pop-ups, SHALL be reachable and closable by keyboard. This requirement is distinct from X27, which requires a visible focus style and keyboard operation for custom drop-downs only, and X08, which requires that a focused element is not hidden behind other layers, not that a focus indicator exists. It SHALL NOT apply to native mobile screens operated by touch only, and focus rendering when only a static screenshot is given SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Marieke McCloskey, "Keyboard-Only Navigation for Improved Accessibility" (2014).

#### Scenario: Failing case
- **WHEN** the stylesheet sets outline none on links and buttons and defines no replacement focus style
- **THEN** the accessibility skill flags the removed focus indicator

#### Scenario: Passing case
- **WHEN** focused links show a custom two-pixel outline in the brand colour and a modal closes with Esc
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Screen-reader focus moves to a newly opened surface [X30]
The accessibility skill SHALL check that when an action opens a menu, sheet or dialog, screen-reader focus moves to the start of the new surface, so users who navigate item by item are not left on the control that opened it. This requirement is distinct from X01, which requires correct names, roles, states and a logical focus order, but not moving focus into a surface that has just opened, and `usability`'s IE11, which keeps autofocus from trapping screen-reader focus. It SHALL NOT apply to inline expansions that sit directly after the trigger in reading order, and focus behaviour that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kohler, "Challenges for Screen-Reader Users on Mobile" (2023).

#### Scenario: Failing case
- **WHEN** tapping the plus button opens an overlay menu while the screen-reader focus stays on the plus button
- **THEN** the accessibility skill flags the focus handling

#### Scenario: Passing case
- **WHEN** selecting Filter opens an overlay and focus lands on the first item of the overlay
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Accessibility rests on the page's own markup, not on an overlay menu [X31]
The accessibility skill SHALL check that accessibility for screen-reader users is met in the page's own structure, labels and semantics; a third-party accessibility menu or overlay widget is not counted as a substitute for them. This requirement is distinct from X01, which requires correct accessible names, roles and states on interactive elements, not the status of add-on accessibility widgets. It SHALL NOT apply to optional display adjustments offered in addition to a conformant page, and the underlying markup, when the evidence does not show it, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kohler, "Challenges for Screen-Reader Users on Mobile" (2023).

#### Scenario: Failing case
- **WHEN** a site embeds an accessibility-menu widget with its own screen reader while its buttons and headings lack proper markup
- **THEN** the accessibility skill flags the reliance on the widget

#### Scenario: Passing case
- **WHEN** headings and buttons use semantic markup and a widget only adds text-size options
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Alt text follows purpose and redundancy [X32]
The accessibility skill SHALL check that alt text states what the image contributes to the task, not how it looks; an image whose task information already appears in nearby text and is not referred to (for example by a caption that says the same, and with no phrase such as the image below) has empty alt text, while an image the copy refers to, or whose information appears nowhere else, has alt text or a text equivalent. This requirement is distinct from X22, which separates informative from purely decorative images: X32 treats an image whose information is fully given in adjacent text as redundant, and X22's descriptive alt text applies to images whose information appears nowhere else. It SHALL NOT apply to images shown purely for visual enjoyment, such as artwork, and the alt text screen-reader users actually hear, when the evidence does not show the markup, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Cionca and Kohler, "Alt Text: Not Always Needed" (2024).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows an image whose alt text repeats its caption word for word, and a map referred to as the map below that has empty alt text
- **THEN** the accessibility skill flags the duplicated alt text and the referenced image left without an equivalent

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows an image with a caption that has empty alt text, and a referenced map with alt text plus a text summary of its data
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Functional images have alt text for the action [X33]
The accessibility skill SHALL check that a functional image (a linked image, an icon button, a logo that links home) has alt text that names the action or destination, not the picture (UT Austin home, Print); an image whose adjacent visible text already names the same action has empty alt text; alt text stays short, puts the key words first and does not start with image of or photo of. This requirement is distinct from X22, which separates informative from decorative images, and X32, which concerns images that repeat nearby text, not the wording of alt text for images that trigger an action. It SHALL NOT apply to an informative image whose alt text must describe its content, and alt text in markup that a screenshot does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Cionca and Kohler, "Alt Text: What to Write" (2024).

#### Scenario: Failing case
- **WHEN** a linked house icon has alt text house or no alt attribute
- **THEN** the accessibility skill flags this requirement

#### Scenario: Passing case
- **WHEN** the linked house icon has alt text Home
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Visible but untappable touch targets [X34]
The accessibility skill SHALL check that a tap target whose size is set by data or decoration (a chart bar sized by duration, a dense map marker, a carousel dot, a colour swatch, a dismiss icon next to a button) still has a tap area large enough to hit on its own at physical size, or the same choice is offered through a larger control such as a list view beside a map; a target that is big enough to read but too small or too crowded to tap SHALL be flagged. This requirement is distinct from T03, which sets the platform minimum for controls in general and does not examine targets whose size comes from data or decoration, and T04, which concerns spacing between adjacent controls. It SHALL NOT apply to targets that are not meant to be tapped, and a tap area that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Aurora Harley, "Touch Targets on Touchscreens" (2019).

#### Scenario: Failing case
- **WHEN** a mobile product list shows colour swatches about one millimetre wide that open the product page when tapped, and carousel dots that are the only way to jump to a slide
- **THEN** the accessibility skill flags the swatches and dots as visible but untappable targets

#### Scenario: Passing case
- **WHEN** the same swatches and dots are drawn small but each has an extended tap area, or a list view offers the same choices
- **THEN** the accessibility skill does not flag this requirement

### Requirement: Glance-readable short text [X35]
The accessibility skill SHALL check that text meant to be read in a glance (one or two words such as a status, value or notification on a phone or watch) is set large and in a regular rather than condensed width; capitals are acceptable for such very short strings but not for longer text. In an MIT AgeLab study words were recognised faster in larger, regular-width and uppercase text. This requirement is distinct from X26, which sets iOS minimum sizes and weights, and `product`'s C09, which advises against all-caps for headlines, body copy and button labels, not for one-to-two-word glance strings. It SHALL NOT apply to passages, headings or buttons read as sentences, and the real viewing distance and light conditions, which the evidence does not show, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Typography for Glanceable Reading: Bigger Is Better" (2017).

#### Scenario: Failing case
- **WHEN** a watch face shows a two-word status in a light condensed 11-pt typeface
- **THEN** the accessibility skill flags the small condensed glance text

#### Scenario: Passing case
- **WHEN** the status is shown in a large regular-width typeface
- **THEN** the accessibility skill does not flag this requirement

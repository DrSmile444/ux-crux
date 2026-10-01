## ADDED Requirements

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

## ADDED Requirements

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

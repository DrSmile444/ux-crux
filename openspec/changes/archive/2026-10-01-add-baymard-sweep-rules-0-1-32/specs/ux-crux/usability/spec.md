## ADDED Requirements

### Requirement: Multi-value filter types
The usability skill SHALL check that a filter group lets the user select several values of the same filter type with OR logic, while values from different types combine with AND logic, following Baymard Institute, Iva Olah, "Always Allow Users to Combine Multiple Filtering Values of the Same Type — an 'OR' Logic (15% of Sites Don't)" (2024). This requirement is distinct from `D08`, which concerns hiding zero-result options and clearing all filters. It SHALL NOT apply to genuinely exclusive attributes such as a single sort order or an in-stock toggle, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Price filter accepts one value
- **WHEN** selecting one price range removes the price filter or replaces the earlier choice in a product list
- **THEN** the usability skill flags that the filter type is not multi-select

#### Scenario: Several colours selectable
- **WHEN** a colour filter uses checkboxes and the list shows items in any selected colour
- **THEN** the usability skill does not flag this requirement

### Requirement: Filter coverage and promotion
The usability skill SHALL check that a product list offers the filter types most users apply first (price, user rating, colour, size, brand, where the attribute applies), a filter for every attribute shown in the list item, and the few most useful category filters promoted above the list while they also stay in the regular filter panel, following Baymard Institute, Mark Crowley, "5 Essential Filter Types Users Need on Product Listing Pages (57% Don't Offer All 5)" (2020), Edward Scott, "Filter List Design: Have Filters for All Displayed List Item Info (38% Don't)" (2019) and Edward Scott, "Consider Promoting Important Filters (61% Don't)" (2023). This requirement is distinct from `D05`, which concerns showing current filter selections. It SHALL NOT apply to very short lists or to B2B and niche catalogues where price is not a key factor, and filter needs the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Displayed rating without filter
- **WHEN** list items show a star rating and the filter panel has no rating filter
- **THEN** the usability skill flags the missing filter

#### Scenario: Full filter set with promoted filters
- **WHEN** the list has price, rating, colour, size and brand filters and shows two promoted filters above the list that also appear in the panel
- **THEN** the usability skill does not flag this requirement

### Requirement: Filter labels explained and visual
The usability skill SHALL check that filter types and options with industry jargon are replaced by plain terms or explained at the filter (tooltip on desktop, tappable icon or link on mobile), and that options differing by visible form show a thumbnail beside the text label, following Baymard Institute, Sonia Sousa, "Always Explain Industry-Specific Filters (62% Don't)" (2024) and "Use \"Visual\" Filters for Visually Distinct Product Attributes" (2024). This requirement is distinct from `D18`, which concerns which filters exist. It SHALL NOT apply to filters whose labels a general audience already knows, and which terms are unfamiliar without novice-user testing SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Unexplained jargon and text-only style filter
- **WHEN** a sofa list has a "Slipcover" option with no explanation and "Arm Style" options as text only
- **THEN** the usability skill flags the unexplained term and the missing thumbnails

#### Scenario: Tooltip and thumbnails
- **WHEN** a technical filter has a tooltip definition and style options show thumbnails with labels
- **THEN** the usability skill does not flag this requirement

### Requirement: Essential and scoped sort options
The usability skill SHALL check that a sortable product list offers price (both directions), user rating (highest first), best-selling and newest, adds sorts on a key numeric category attribute where it applies, and sorts site-wide search results only after a category scope is chosen or suggested, following Baymard Institute, Mark Crowley, "Allow Sorting by \"Price\", \"User Rating\", \"Best-Selling\", and \"Newest\" (64% Don't Allow All 4)" (2021), Jamie Holst, "Category-Specific Sorting: A New Way to Sort Products" (2015) and Jamie Holst, "Faceted Sorting - A New Method for Sorting Search Results" (2014). This requirement is distinct from `D05`, which concerns showing the active sort. It SHALL NOT apply to short lists or to catalogues where a sort type has no data, and sort types the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Price sort on unscoped search
- **WHEN** a site-wide search for a product type can be sorted by price and cheap accessories reach the top
- **THEN** the usability skill flags the unscoped sort

#### Scenario: Full sort menu
- **WHEN** the sort menu has price low-to-high and high-to-low, rating, best-selling and newest, and a road-bike category adds weight
- **THEN** the usability skill does not flag this requirement

### Requirement: Category autodirect and non-product search
The usability skill SHALL check that a query matching one category name sends the user to that category page with its filters and sorts (ambiguous queries offer category suggestions), and that site search answers non-product queries such as return policy with the relevant help or policy page, following Baymard Institute, Rebecca Hugo-Terrey, "Search UX: Autodirect or Guide Users to Matching Category Scopes (46% Get It Wrong)" (2020) and Edward Scott, "Ecommerce Search UX 2026: 8 Search \"Query Types\" UX Best Practices (56% of Sites Have Issues)" (2024, updated 2026). This requirement is distinct from `D09`, which concerns not forcing a scope choice before the first query. It SHALL NOT apply to categories with no extra filters or layout, and queries the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Category query returns a thinner list
- **WHEN** a search for "men's shirts" returns a plain result list without the size filter of the Men's Shirts category
- **THEN** the usability skill flags the missing autodirect

#### Scenario: Policy query answered
- **WHEN** a search for "return policy" shows the returns help page first
- **THEN** the usability skill does not flag this requirement

### Requirement: Search results explain their match
The usability skill SHALL check that each search result item shows why it matches the query (snippet with matched text, or the matching compatibility or variation detail), and that the result thumbnail shows the variation named in the query, following Baymard Institute, Christian Holst, "E-Commerce Sites Should Include Contextual Search Snippets (96% Get it Wrong)" (2014) and "Product Thumbnails Should Dynamically Update to Match the Variation Searched For (54% Don't)" (2016). This requirement is distinct from `D04`, which concerns what a no-results state communicates. It SHALL NOT apply to closed category lists with fixed attributes or to lists where each variation is its own item, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Colour query with default thumbnails
- **WHEN** a search for "black laptop sleeve" shows thumbnails in other colours and no matched text
- **THEN** the usability skill flags the missing match explanation

#### Scenario: Snippet and matching thumbnail
- **WHEN** results show the matched description text and the black variation image
- **THEN** the usability skill does not flag this requirement

### Requirement: Hierarchy breadcrumbs and Back to results
The usability skill SHALL check that a product page offers hierarchy-based breadcrumb links to its parent categories and a history-based "Back to results" link that keeps filters and sort, following Baymard Institute, Jamie Holst, "E-Commerce Sites Need 2 Types of Breadcrumbs (68% Get it Wrong)" (2013). This requirement is distinct from `D07`, which concerns keeping query and filters across a search session. It SHALL NOT apply to single-page tools without a catalogue hierarchy, and mobile placement SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Only category breadcrumb
- **WHEN** a product page reached from a filtered list has only category breadcrumbs, and they open the unfiltered category
- **THEN** the usability skill flags the missing history-based link

#### Scenario: Both breadcrumb types
- **WHEN** the page has category breadcrumbs and a "Back to results" link that restores filters
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile main menu lists categories at top level
The usability skill SHALL check that on mobile, the open main navigation lists product categories (for example Men's, Women's, Laptops) as top-level items, not nested under one item such as Shop, Products or Departments; secondary items (sign in, help, store locator) sit below the categories and are styled distinctly; a catalog with many categories shows the most important first and the rest behind a More link, following Baymard Institute, Scott, "Make Product Categories the Top-Level Navigation Items on Mobile Sites (33% Don't)" (2023). This requirement is distinct from `N06R`, which concerns whether primary navigation is hidden behind an unlabelled menu. It SHALL NOT apply to desktop navigation or a very small homogeneous catalog, and desktop menu behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N27R failing case
- **WHEN** the reviewed evidence is a mobile site whose open main menu shows only Shop, Sale, Help and Sign In, with all product categories behind Shop
- **THEN** the usability skill flags the nested categories

#### Scenario: N27R passing case
- **WHEN** the reviewed evidence is a mobile site whose open main menu starts with Men, Women and Kids, followed by a separator and smaller Sign In and Store Locator items
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile navigation View All first at every level
The usability skill SHALL check that every level of the mobile main navigation that opens subcategories has a tappable item whose label starts with View All, See All or Shop All and names the current category (for example View All Women's Coats), placed first in that level's list; a header that only repeats the category name, a split hit area with an arrow, or a View All item at the bottom does not meet this, following Baymard Institute, Scott, "Have a "View All" Option in the Main Navigation at Each Level of the Mobile Product Catalog (Only 24% Get It Right)" (2022). This requirement is distinct from `N09R`, which concerns hierarchy depth and orientation in general. It SHALL NOT apply to desktop hover navigation and a leaf category with no subcategories, and desktop menu behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N28R failing case
- **WHEN** the reviewed evidence is a mobile menu where the Makeup level lists its subcategories and the broad Makeup list is reachable only by tapping the Makeup header, or by a Shop All item at the bottom
- **THEN** the usability skill flags the missing or misplaced View All item

#### Scenario: N28R passing case
- **WHEN** the reviewed evidence is a mobile menu where each level opens with a first item such as View All Makeup
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile homepage shows catalog scope in full
The usability skill SHALL check that a mobile homepage shows a diverse set of top-level categories as visible content (images or text links), not collapsed behind a Departments or Categories link, so users can infer what the site sells; a homepage link to a narrower list carries its full scope in its own label (for example Women's New Arrivals, not New Arrivals under a separate header), or links only to top-level categories, following Baymard Institute, Holst, "42% of Mobile Homepages Risk Setting Wrong Expectations for Their Users" (2016), and Baymard Institute, Scott, "Always Provide the Full Scope for Links on Mobile Homepages (58% Don't)" (2021). This requirement is distinct from `N06R`, which concerns whether primary navigation is hidden behind an unlabelled menu. It SHALL NOT apply to a single-category site whose homepage already shows its whole range, and homepage behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N29R failing case
- **WHEN** the reviewed evidence is a mobile homepage that shows only hiking products with a Departments link, and a Shop Women button that opens a New Arrivals list
- **THEN** the usability skill flags the narrow or collapsed category display or the partial-scope label

#### Scenario: N29R passing case
- **WHEN** the reviewed evidence is a mobile homepage that lists several contrasting top-level categories and labels a scoped link Women's New Arrivals
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile product page full breadcrumb path
The usability skill SHALL check that a mobile product page shows breadcrumbs with the full category path to the product, or at least every key category level (the Home and current-product layers may be left out); a path too long for the viewport scrolls horizontally with a cut-off edge that shows it can be swiped; breadcrumbs are underlined by default, use conventional separators such as > or / and have white space around them so they read as tappable, following Baymard Institute, Scott, "6 Important Aspects of Well-Performing Mobile Product Page Breadcrumbs" (2020). This requirement is distinct from `N16R`, which concerns the presence of a breadcrumb trail on deep-hierarchy sites. It SHALL NOT apply to desktop product pages and sites with a shallow single-level catalog, and desktop breadcrumb behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N30R failing case
- **WHEN** the reviewed evidence is a mobile product page whose breadcrumb shows only the parent subcategory in plain unlinked-looking text
- **THEN** the usability skill flags the incomplete or untappable-looking breadcrumb

#### Scenario: N30R passing case
- **WHEN** the reviewed evidence is a mobile product page with an underlined, swipeable breadcrumb that shows every category level from the top category to the product's subcategory
- **THEN** the usability skill does not flag this requirement

### Requirement: Back works for perceived pages
The usability skill SHALL check that a view the user perceives as a new page (an overlay or lightbox, a filtered or sorted list state, a separate filter or sort screen on mobile, an accordion checkout step) adds a browser history entry, so Back exits that view and does not skip past the page beneath it; Back from a product page returns to the product list with its loaded items and scroll position intact (for Load more lists, by updating the URL as items load, for example with history.pushState), following Baymard Institute, Holst, "4 Design Patterns That Violate "Back" Button UX Expectations – 59% of Sites Get It Wrong" (2020), and Baymard Institute, Crowley, "Return Users to the Same Place in the Product List When Returning from the Product Page (13% Don't)" (2020). This requirement is distinct from `N04R`, which concerns platform back semantics in native app navigation. It SHALL NOT apply to native app navigation stacks and small in-page changes users perceive as the same page, and view states the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: N31R failing case
- **WHEN** the reviewed evidence is an image-gallery overlay that does not close on Back and sends the user to the previous list, or a list that returns to the top after Back from a product page
- **THEN** the usability skill flags the Back behaviour that breaks the perceived page

#### Scenario: N31R passing case
- **WHEN** the reviewed evidence is an overlay that closes on Back, and a list that returns to the item the user opened
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile search submit button
The usability skill SHALL check that on mobile, a search field has a visible submit button next to it (for example a magnifying glass or a Go button; an icon that only shows or hides the field does not count), and on iOS the keyboard submit key is set for search so it reads Search and not return (for example input type="search"), following Baymard Institute, Collins, "Always Provide a Submit Button Adjacent to the Search Field on Mobile (21% Don't)" (2021). This requirement is distinct from `D09`, which concerns the label and scope of the global search input. It SHALL NOT apply to desktop search fields, and desktop search submission and non-iOS keyboard behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D13 failing case
- **WHEN** the reviewed evidence is a mobile search field with only a clear icon beside it and a grey return key on the keyboard
- **THEN** the usability skill flags the missing submit button or default keyboard key

#### Scenario: D13 passing case
- **WHEN** the reviewed evidence is a mobile search field with a magnifying-glass button beside it and a keyboard key labelled Search
- **THEN** the usability skill does not flag this requirement

### Requirement: Autocomplete list design
The usability skill SHALL check that search autocomplete shows a list short enough to read at a glance (no more than about 10 suggestions on desktop, about 4 to 8 on mobile), emphasizes the predicted part of each suggestion and not the characters the user already typed, and, where suggestions can be moved through with the keyboard, copies the active suggestion into the search field so the user can edit it before submitting, following Baymard Institute, Scott, "9 UX Best Practice Design Patterns for Autocomplete Suggestions (Only 19% Get Everything Right)" (2022), and Baymard Institute, Scott, "Always Copy the Active Autocomplete Suggestion to the Search Field (58% Don't)" (2024). This requirement is distinct from `D03`, which concerns whether suggestions are offered at all. It SHALL NOT apply to sites without autocomplete, and touch-only suggestion selection, which the copy-to-field evidence does not cover SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D14 failing case
- **WHEN** the reviewed evidence is a desktop autocomplete of 20 suggestions with every typed character bolded, whose search field keeps the typed text when the arrow keys move through the list
- **THEN** the usability skill flags the list design

#### Scenario: D14 passing case
- **WHEN** the reviewed evidence is a desktop autocomplete of 8 suggestions with only the predicted part bold, where arrow keys copy each suggestion into the field
- **THEN** the usability skill does not flag this requirement

### Requirement: Product list default item count
The usability skill SHALL check that a product list loads a number of items by default that suits the device and product type (in Baymard's testing about 50 to 150 on desktop, nearer 100 to 150 for visually driven products and 50 to 100 for spec-driven ones, and about 15 to 30 on mobile, with fewer for search results than for category lists) and offers a Load more control or pagination for the rest, following Baymard Institute, Hugo-Terrey, "Product List UX: The Number of Products to Load by Default (52% Get it Wrong)" (2020). This requirement is distinct from `D10`, which concerns which loading method is used and not the number of items per load. It SHALL NOT apply to non-product lists, and ideal counts for catalogs and devices the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: D15 failing case
- **WHEN** the reviewed evidence is a mobile category list that loads 100 items at once, or a desktop apparel list that loads 15 items per page
- **THEN** the usability skill flags the item count

#### Scenario: D15 passing case
- **WHEN** the reviewed evidence is a mobile category list that loads about 24 items followed by a Load more button
- **THEN** the usability skill does not flag this requirement

### Requirement: Mobile single-entity fields
The usability skill SHALL check that on mobile, a name, a phone number and a postal code are each entered in one field and not split into parts (first and last name, area code and number, ZIP and ZIP+4), following Baymard Institute, Jamie Holst, "Mobile Form Usability: Avoid Splitting Single Input Entities" (2013). This requirement is distinct from `F23`, which concerns chunked display of a long identifier for reading, not splitting the input. It SHALL NOT apply to desktop forms, where the evidence on split fields was inconclusive, and split-field behaviour on desktop the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: F28 failing case
- **WHEN** the reviewed evidence is a mobile checkout that asks for a phone number in three fields or a name in First and Last fields
- **THEN** the usability skill flags the split field

#### Scenario: F28 passing case
- **WHEN** the reviewed evidence is a mobile checkout with one Full name field, one Phone field and one Postal code field
- **THEN** the usability skill does not flag this requirement

### Requirement: Forms avoid ambiguous tabs and inline accordions
The usability skill SHALL check that a form is not split across tabs or freely opening inline accordion sections where users cannot tell which fields are submitted, and that an unavoidable layout uses radio buttons or a single-open accordion for exclusive sections, checkboxes for independent ones, and a save button inside the section it saves, following Baymard Institute, Jamie Holst, "Accordion UX: The Pitfalls of Inline Accordion and Tab Designs" (2014). This requirement is distinct from `F17`, which concerns summaries of completed steps in a multi-step form. It SHALL NOT apply to a sequential accordion checkout where only the current step is open, and whether collapsed sections are submitted SHALL be reported `NOT ASSESSABLE` when only a static screenshot is shown.

#### Scenario: Tabbed settings form with one Save button
- **WHEN** a settings form has several tabs and one Save Changes button below them with no indication of what it saves
- **THEN** the usability skill flags the ambiguous submission scope

#### Scenario: Sequential accordion checkout
- **WHEN** a checkout opens one step at a time and shows summaries of completed steps
- **THEN** the usability skill does not flag this requirement

### Requirement: Inline validation runs after the field and clears at once
The usability skill SHALL check that inline validation checks a field after the user leaves it (or when the input reaches its expected length for postal code, phone or card number fields), not on focus or while the first characters are typed, and that the error disappears as soon as the value becomes valid, following Baymard Institute, Scott, "Usability Testing of Inline Form Validation: 31% Don't Have It, 4% Get It Wrong" (2024). This requirement is distinct from `F07`, which concerns where an error appears and how it is worded. It SHALL NOT apply to a form without inline validation, and timing or clearing behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Error shown on focus and kept after correction
- **WHEN** an email field shows "Invalid email" as soon as it receives focus, or keeps an error after the user fixes the value
- **THEN** the usability skill flags the validation timing or clearing

#### Scenario: Validation on blur
- **WHEN** a field validates when the user leaves it and removes the error once the value is valid
- **THEN** the usability skill does not flag this requirement

### Requirement: Hard blocks only for provably invalid input
The usability skill SHALL check that a field blocks submission only for rules checkable without false negatives, and that unusual but possibly valid data (an email with a plus sign, a short street name) triggers a dismissible warning, following Baymard Institute, Jamie Holst, "Form Usability: Validations vs Warnings" (2014). This requirement is distinct from `GW02`, which concerns rejecting a valid value only for its formatting characters. It SHALL NOT apply to input the next system step cannot process, and validator behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Email with plus sign rejected
- **WHEN** a checkout email field rejects an address containing a plus sign and offers no way to proceed
- **THEN** the usability skill flags the hard block on valid data

#### Scenario: Warning for an odd address
- **WHEN** a street field shows "Please double-check this address" with a Continue anyway option
- **THEN** the usability skill does not flag this requirement

### Requirement: Checkout asks for the minimum fields
The usability skill SHALL check that a checkout form uses a single Name field and hides the promo or coupon code field behind a link, following Baymard Institute, Scott, "Checkout Optimization: 5 Ways to Minimize Form Fields in Checkout" (2024). This requirement is distinct from `F02`, which concerns not requesting needless personal data. It SHALL NOT apply where a separate name is required for a stated legal or delivery reason, and whether the back end needs a field SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Split name and open coupon field
- **WHEN** a checkout shows First name, Last name and an always visible Promo code input
- **THEN** the usability skill flags the extra fields

#### Scenario: Single name and coupon link
- **WHEN** a checkout shows one Name field and an "Add promo code" link
- **THEN** the usability skill does not flag this requirement

### Requirement: Guest checkout is an explicit button at the top of the account step
The usability skill SHALL check that the account step offers a clearly labelled guest checkout button placed above the sign-in and create-account options (or at the top of its column) and visible before email entry, following Baymard Institute, Scott, "Make 'Guest Checkout' the Most Prominent Option (47% Don't)" (2023) and Baymard Institute, Jamie Holst, "6 Mobile Checkout Usability Considerations" (2013). This requirement is distinct from `O11`, which concerns offering guest use in general. It SHALL NOT apply to a service that requires an account by nature, and the view below the first viewport SHALL be reported `NOT ASSESSABLE` when only the first viewport is shown.

#### Scenario: Guest link at the bottom
- **WHEN** the account step shows sign-in fields first and a small text link "Continue without signing in" at the bottom
- **THEN** the usability skill flags the guest option

#### Scenario: Top guest button
- **WHEN** the first item on the account step is a "Continue as guest" button
- **THEN** the usability skill does not flag this requirement

### Requirement: Checkout changes apply instantly without Apply buttons
The usability skill SHALL check that checkout input changes take effect at once without reload, with the result shown next to the input, and that Apply buttons appear only for promo codes and gift card numbers, following Baymard Institute, Söderlund, "Checkout UX: Avoid 'Apply' Buttons for Most Fields (22% of Sites Don't)" (2012, updated 2025) and Baymard Institute, Jamie Holst, "Checkout Usability: Apply Changes Immediately and Near the Input" (2012). This requirement is distinct from `F13`, which concerns where the primary button sits. It SHALL NOT apply to editing saved account data, and behaviour after the click the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Apply button on the address step
- **WHEN** a shipping address step has an Apply button beside the Continue to Payment button
- **THEN** the usability skill flags the extra button

#### Scenario: Shipping cost updates beside the choice
- **WHEN** selecting a shipping method updates the cost next to the method list without reload
- **THEN** the usability skill does not flag this requirement

### Requirement: Address Line 2 is hidden behind a link
The usability skill SHALL check that the optional Address Line 2 field is hidden behind a link instead of shown by default, following Baymard Institute, Scott, "Form Usability: Getting 'Address Line 2' Right" (2022). This requirement is distinct from `F02`, which concerns not requesting needless data. It SHALL NOT apply to a form with one address field fed by automatic address lookup, and whether users with unit numbers find the link SHALL be reported `NOT ASSESSABLE` from a static view.

#### Scenario: Always visible second line
- **WHEN** the shipping form shows Address Line 1 and an empty optional Address Line 2 by default
- **THEN** the usability skill flags the visible field

#### Scenario: Add apartment link
- **WHEN** the form shows a link "Add apartment, suite or unit" that reveals the field
- **THEN** the usability skill does not flag this requirement

### Requirement: Address entry has lookup and validator
The usability skill SHALL check that address entry offers type-ahead lookup that fills the other fields with conventional fields kept for manual entry, and that an address validator shows suggestions or missing parts in a prominent overlay before the order is placed, following Baymard Institute, Scott, "Provide a 'Fully Automatic Address Lookup' Feature (55% Don't)" (2023) and "Have an Address Validator (47% Don't)" (2023). This requirement is distinct from `F25`, which concerns not asking for data derivable from other input. It SHALL NOT apply to digital goods without a shipping address or to regions without a reliable address database, and the quality of suggestions SHALL be reported `NOT ASSESSABLE` when the evidence does not show it.

#### Scenario: Manual entry only
- **WHEN** a shipping form has five plain address fields, no suggestions and no validation step
- **THEN** the usability skill flags the missing lookup and validator

#### Scenario: Lookup with fallback and overlay
- **WHEN** typing a street shows suggestions, all fields remain editable, and a "Verify your address" overlay appears on submit
- **THEN** the usability skill does not flag this requirement

### Requirement: Card fields mirror the physical card
The usability skill SHALL check that the card expiry date uses a two-digit month and two-digit year in MM / YY order and is typed, and that the security code field has an inline thumbnail or tooltip showing where the code is, labelled "Security Code", following Baymard Institute, Olah, "Format the 'Expiration Date' Fields Exactly the Same as the Physical Credit Card (72% Don't)" (2023) and Baymard Institute, Christian Holst, "8 Recommendations for Creating Effective Input Fields" (2021). This requirement is distinct from `F26`, which concerns field width. It SHALL NOT apply to card entry handled by a hosted wallet or payment sheet, and card layouts of other card types SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Four-digit year dropdown and bare CVV
- **WHEN** the expiry is a month dropdown plus a four-digit year dropdown and the security field is labelled "CVV" with no help
- **THEN** the usability skill flags the card fields

#### Scenario: MM / YY with card hint
- **WHEN** the expiry accepts typing "04 / 29" and the "Security Code" field has a tooltip showing the card back
- **THEN** the usability skill does not flag this requirement

### Requirement: Prefilled values appear in editable fields
The usability skill SHALL check that a prefilled or autodetected value (city, state, ZIP code) is shown in an editable field or other interactive element, not static text, following Baymard Institute, Christian Holst, "8 Recommendations for Creating Effective Input Fields" (2021). This requirement is distinct from `F21`, which concerns which value is preselected. It SHALL NOT apply to a value that must not be changed, and whether prefilled values are correct SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Detected city as plain text
- **WHEN** a checkout shows "Shipping to: Chicago, IL 60601" as static text with no edit control
- **THEN** the usability skill flags the static prefilled value

#### Scenario: Detected city in an input
- **WHEN** the same values appear in editable City, State and ZIP inputs
- **THEN** the usability skill does not flag this requirement

### Requirement: No overlay on page load
The usability skill SHALL check that no overlay dialog or pop-up opens on its own at page load, and that such content opens only after a user action, following Baymard Institute, Jamie Holst, "Avoid These 5 Types of E-Commerce Graphics" (2014). This requirement is distinct from `A07R`, which governs when an alert or dialog is warranted at all, not when it may open. It SHALL NOT apply to overlays opened by a user action such as a click on cart contents or inline help, and what happens on later visits or after a delay SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a category page shows a newsletter overlay a moment after it loads
- **THEN** the usability skill flags the load-time overlay

#### Scenario: Passing case
- **WHEN** a cart-contents overlay opens only after the user clicks the cart icon
- **THEN** the usability skill does not flag this requirement

### Requirement: Live chat only on user request
The usability skill SHALL check that live chat opens only when the user asks for it and that no sticky chat element covers content on mobile, following Baymard Institute, Rebecca Hugo-Terrey, "These Three (Popular) Approaches to Implementing 'Live Chat' are Often Highly Disruptive for Users" (2019). This requirement is distinct from `S14`, which concerns overlays opened at page load in general, while S15 concerns the chat feature and its sticky placement. It SHALL NOT apply to chat started by the user, and desktop sites where a sticky chat element does not obscure content, and whether a delayed, once-only site-initiated prompt is acceptable beyond the mitigations the article lists (no prompt in filtering or checkout, shown once, delayed) SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mobile product page shows a floating chat bubble that covers the colour swatches, and a chat pop-up appears while the user browses
- **THEN** the usability skill flags the sticky and site-initiated chat

#### Scenario: Passing case
- **WHEN** chat is reached through a footer link and no floating element is shown
- **THEN** the usability skill does not flag this requirement

### Requirement: Clear hit areas in composite visuals
The usability skill SHALL check that a visual element with several tappable regions delineates where each region leads, or acts as one hit area, following Baymard Institute, Mark Crowley, "Make It Clear Where Hit Areas in Visual Elements Lead: 33% of Sites Don’t" (2022). This requirement is distinct from `A08R`, which requires that a control that looks interactive is interactive, not that several links inside one visual make their destinations clear. It SHALL NOT apply to elements with a single link and no inner links, and hover behaviour on desktop when only a static screenshot is given SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a promo tile has a boxed look with a title, a thumbnail and a rating, and the rating links to a different page with no cue
- **THEN** the usability skill flags the unclear hit areas

#### Scenario: Passing case
- **WHEN** a mobile tile holds one product image and is one link, or three links are split by separators and arrows
- **THEN** the usability skill does not flag this requirement

### Requirement: Account menu structure and dashboard icons
The usability skill SHALL check that an account menu separates primary from secondary paths and that every account-dashboard entry has an icon plus text, following Baymard Institute, Edward Scott, "Self-Service UX: Distinguish Primary from Secondary Paths in the 'My Account' Drop-Down (71% Don't)" (2019) and "Accounts & Self-Service UX: Consider Having an “Icon-Based” Dashboard (81% Don’t)" (2022). This requirement is distinct from `N14R`, which orders dropdown items by priority, while N32R concerns visual separation of primary and secondary paths and icon plus text in the dashboard. It SHALL NOT apply to a menu with very few links (about five or fewer) where order alone carries the priority, and which account features matter most to a specific site's users SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a My Account drop-down lists many links in one unstyled column, and only some dashboard entries have icons
- **THEN** the usability skill flags the missing structure and the inconsistent icons

#### Scenario: Passing case
- **WHEN** the menu groups primary paths first with a separate secondary column, and every dashboard card has an icon and a text label
- **THEN** the usability skill does not flag this requirement

### Requirement: Truncate long filter lists with an expander
The usability skill SHALL check that a long filter-value list is truncated at a sensible length with a visible expand control and that a single value is never truncated, following Baymard Institute, Christian Holst, "6 Guidelines for Truncation Design" (2014). This requirement is distinct from `D05`, which concerns showing the current filter selections, not how long value lists are shortened. It SHALL NOT apply to short value lists that fit without truncation, and the best count of visible values for a specific site, since the evidence supports at least six and up to about ten SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a brand filter shows 30 values in one long list, and another filter hides exactly one value behind "More"
- **THEN** the usability skill flags the untruncated long list and the single-value truncation

#### Scenario: Passing case
- **WHEN** a filter shows eight values then an underlined "More" link with a plus icon placed under the group
- **THEN** the usability skill does not flag this requirement

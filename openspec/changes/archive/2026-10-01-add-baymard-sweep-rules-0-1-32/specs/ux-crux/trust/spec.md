## ADDED Requirements

### Requirement: Payment fields are visually contained
The trust skill SHALL check that the card and payment fields are visually contained with a style used only for them (a border, background, shading, or a badge or padlock inside the area) and that any badge or security text shown describes protection the site actually has, following Baymard Institute, Jamie Holst, "How Users Perceive Security During the Checkout Flow (Incl. New 'Trust Seal' Study 2023)" (2016) and the related 2012 and 2010 Baymard articles on reinforcing credit card fields. This requirement is distinct from `CT01`, which concerns when mandatory costs are disclosed. It SHALL NOT apply to a payment sheet handled by the operating system or a hosted wallet, and the real technical security of the page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Card fields look like address fields
- **WHEN** the card number fields share identical styling with the address fields and no security cue sits near them
- **THEN** the trust skill flags the unreinforced payment area

#### Scenario: Contained card section
- **WHEN** the card fields sit in a bordered grey box with a padlock and truthful security text
- **THEN** the trust skill does not flag this requirement

### Requirement: Cancellation Requested order state
The trust skill SHALL check that a cancellation request creates a persistent "Cancellation Requested" order state with expected timing and payment impact, following Baymard Institute, Christian Holst, "Order Cancellation Request: Have a 'Cancellation Requested' Order State" (2018). This requirement is distinct from `PR01`, which concerns the gap between on-screen completion and the goal being realized in general, not the order-state wording after a cancellation. It SHALL NOT apply to a site that processes every cancellation instantly and shows the result at once, and the content of confirmation emails when only the screen is shown SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** after the user cancels, an overlay says "We will do our best to cancel" and the order page still shows "Order Placed"
- **THEN** the trust skill flags the missing persistent state

#### Scenario: Passing case
- **WHEN** the order page shows "Cancellation Requested", an expected reply time and that the card is not yet charged
- **THEN** the trust skill does not flag this requirement

### Requirement: On-site order tracking and return status
The trust skill SHALL check that the site shows order-tracking details itself and updates order status and saves the return label once a return starts, following Baymard Institute, Sally Collins, "Always Provide 6 Key Order-Tracking Details on the Ecommerce Site" (2019) and Christian Holst, "The 'Order Returns' Experience is Critical for Customer Retention" (2019). This requirement is distinct from `CT05`, which concerns the order state after a cancellation request, not tracking details or return status. It SHALL NOT apply to digital goods and sites with no shipments or returns, and carrier data accuracy and the content of notification emails SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the order details page only links to a carrier site with an unlinked tracking number, and the order still shows "Return this item" after a return starts
- **THEN** the trust skill flags the missing on-site tracking and return status

#### Scenario: Passing case
- **WHEN** the tracking page shows delivery date, progress bar, carrier, a linked number and history, and the return flow emails the label and updates the order status
- **THEN** the trust skill does not flag this requirement

### Requirement: Shipping options show dates and all fulfilment methods
The trust skill SHALL check that each shipping option shows a delivery date, that all fulfilment options are switchable in the checkout step and that free shipping is shown near the buy section, following Baymard Institute, Iva Olah, "Use “Delivery Date” Not “Shipping Speed” (41% Don’t)" (2023), Edward Scott, "Include All Order-Fulfillment Options in the Fulfillment-Selector Interface (50% Don’t)" (2023) and "Product Pages: ‘Free Shipping’ Should Not Only Be in a Site-Wide Banner (32% Get It Wrong)" (2017). This requirement is distinct from `CT03`, which concerns an estimated shipping cost and a return policy summary before add to cart, not delivery dates, fulfilment switching or the placement of free-shipping notices. It SHALL NOT apply to sites with a single shipping option, and a free-shipping offer that has a condition the user does not meet, and delivery-date accuracy, which a screenshot cannot show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the checkout lists "Standard: 3-5 business days" with no date and offers no store pickup, and free shipping is only in a site-wide banner
- **THEN** the trust skill flags the missing dates, the missing pickup option and the banner-only offer

#### Scenario: Passing case
- **WHEN** each option reads "Arrives Thursday, April 2" with its price, pickup is a listed option, and the product page repeats free shipping beside the Add to Cart button
- **THEN** the trust skill does not flag this requirement

### Requirement: Footer return and shipping links, in-store returns
The trust skill SHALL check that the footer links directly to Return Policy and Shipping Info and that in-store return is offered as an equal option to return by mail, following Baymard Institute, Christian Holst, "Have Direct Links to ‘Return Policy’ and ‘Shipping Info’ in the Footer (20% don’t)" (2019, updated 2025) and Edward Scott, "Self-Service UX: Promote In-Store Returns Alongside Mailed Return Options" (2018, updated 2025). This requirement is distinct from `CT03`, which concerns shipping cost and a return policy summary on the product page, not footer links or the in-store return option. It SHALL NOT apply to sites with no returns, or with no stores for in-store return, and the return policy terms themselves SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the footer has only a "Help" link and the return page spends its first screens on return by mail, with in-store return as a footnote
- **THEN** the trust skill flags the missing direct links and the buried in-store option

#### Scenario: Passing case
- **WHEN** the footer has "Returns" and "Shipping" links, and the return page shows mail and in-store options side by side
- **THEN** the trust skill does not flag this requirement

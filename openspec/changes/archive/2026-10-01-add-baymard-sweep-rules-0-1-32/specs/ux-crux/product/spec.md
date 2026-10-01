## ADDED Requirements

### Requirement: C47 product rule
The product skill SHALL check that a temporarily out-of-stock product or variation stays purchasable (or back-orderable) with a longer stated delivery time, and the page offers alternative products so the user does not reach a dead end; a permanently discontinued product is labelled as discontinued with alternatives promoted at the top of the page. An email-me or save-to-list control is a supplement, not the only handling, following Baymard Institute, Scott, "Allow Users to Purchase Temporarily 'Out of Stock' Products by Increasing the Delivery Time (68% Don't)" (2017, updated 2025). This requirement is distinct from `C35`, which concerns showing option availability, not what happens when an option is unavailable. It SHALL NOT apply to products that are never restocked (for those the discontinued label applies) or regulated goods that cannot be sold on back order, and stock behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product page where the add-to-cart control is removed and only an email-me-when-available button is shown for a temporarily out-of-stock item
- **THEN** the product skill flags the dead end

#### Scenario: Passing case
- **WHEN** a product page where a temporarily out-of-stock item can be ordered with a later delivery date and alternatives are shown
- **THEN** the product skill does not flag this requirement

### Requirement: C48 product rule
The product skill SHALL check that accessories that come in the purchase price are shown beside the product in an image in the main gallery, and accessories that are pictured but not included are marked as extra on or near the image (for example "sold separately"); vague wording such as "additional accessories available" does not count, following Baymard Institute, Scott, "PDP UX: Provide an 'Included Accessories' Image and Clarify That Optional Accessories Are Extra (44% Don't)" (2019). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products sold without accessories, and pictured items the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a mixer page whose gallery never shows the bundled attachments, or a chair image that shows an ottoman sold separately with no note
- **THEN** the product skill flags the missing or misleading accessory image

#### Scenario: Passing case
- **WHEN** a gallery with an included-accessories image and a "keyboard sold separately" note on the image that shows an optional keyboard
- **THEN** the product skill does not flag this requirement

### Requirement: C49 product rule
The product skill SHALL check that a product description includes the content the buying decision needs, where relevant to the product type: materials or ingredients, dimensions with labelled parts and units, and compatibility down to the explicit model. For a feature-rich product, the description is structured as feature highlights, each paired with an image or icon, and secondary features stay in a plain list, following Baymard Institute, Krzyminski, "10% of E-Commerce Sites Have Product Descriptions That Are Insufficient for Users' Needs" (2021); Baymard Institute, Scott, "Structuring Product Page Descriptions by 'Highlights' Increases User Engagement (Yet 78% of Sites Don't)" (2018). This requirement is distinct from `C35`, which only asks for a concise description. It SHALL NOT apply to simple products whose description needs none of these items, or low-priority products for which highlight structure is not worth the effort, and content the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a skin-care product page with a two-line description and no ingredient list, or an office chair with two unlabelled dimension values
- **THEN** the product skill flags the missing decision content

#### Scenario: Passing case
- **WHEN** a page that lists ingredients, labelled dimensions with units and exact compatible models, with key features of a complex product shown as icon-led highlights
- **THEN** the product skill does not flag this requirement

### Requirement: C50 product rule
The product skill SHALL check that on a product page the price and any discount are highly visible (large size, bold, colour or contrast), the original price is visually distinct from the current price, all offer information sits next to the price, the amount or percentage off is stated, and each offer has one description (repeated descriptions of the same offer use identical wording), following Baymard Institute, Reeves, "How to Display Price Discounts on the Product Page: Avoid These 4 Pitfalls (18%+ Have One or More)" (2022). This requirement is distinct from `C40`, which concerns a price per unit beside the package price. It SHALL NOT apply to pages with no discount, for the discount clauses, and pricing the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a page with a small grey price, a "Special Offer" text far from the price, and a banner plus a badge describing the same offer in different words
- **THEN** the product skill flags the price and offer presentation

#### Scenario: Passing case
- **WHEN** a buy section with a large bold price, a struck-through original price, the amount saved and one offer description beside it
- **THEN** the product skill does not flag this requirement

### Requirement: C51 product rule
The product skill SHALL check that key product images carry text or graphic callouts for features that a photo alone does not convey (for example size, water resistance, material, model height), and callout text remains legible at mobile size, following Baymard Institute, Scott, "Product Page UX: Include Descriptive Text or Graphics for Some Product Images (52% Don't)" (2018). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products whose features are fully visible in the photo, and mobile rendering the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a gallery of plain photos for a water-resistant bag with no callout, or a callout image whose text is unreadable at phone width
- **THEN** the product skill flags the missing or illegible callouts

#### Scenario: Passing case
- **WHEN** a gallery image that labels the laptop pocket size and the water-resistant material in text readable on a phone
- **THEN** the product skill does not flag this requirement

### Requirement: C52 product rule
The product skill SHALL check that product videos sit in the image gallery with a play icon on the thumbnail, all videos are included there, and a separate video tab is not used; repeating the videos lower on the page is acceptable, following Baymard Institute, Holst, "UX Research on Product Page Videos: Where and How to Embed Them (35% Get it Wrong)" (2019). This requirement is distinct from `C38`, which concerns the layout of the main page sections. It SHALL NOT apply to products with no video, and gallery behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a page where the video is only far down the page, or video thumbnails have no play icon or sit in a separate tab
- **THEN** the product skill flags the video placement

#### Scenario: Passing case
- **WHEN** a gallery where video thumbnails carry a play icon next to the photo thumbnails
- **THEN** the product skill does not flag this requirement

### Requirement: C53 product rule
The product skill SHALL check that the product page offers both a site-authored FAQ and a community Q&A (or a Q&A where staff also answer and users can answer too), so questions that the description leaves out are answered and answers do not come only from the seller, following Baymard Institute, Holst, "Product Page UX: Provide Both Site-Authored FAQs and Community-Driven Q&As (70% Get it Wrong)" (2017). This requirement is distinct from `C18`, which concerns how help or FAQ content is chosen. It SHALL NOT apply to sites too small to moderate a Q&A, and sections the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product page with reviews but neither an FAQ nor a Q&A, or with a user Q&A only and no site FAQ
- **THEN** the product skill flags the missing question channel

#### Scenario: Passing case
- **WHEN** a product page with a pre-filled FAQ section and a separate user Q&A section
- **THEN** the product skill does not flag this requirement

### Requirement: C54 product rule
The product skill SHALL check that a product page offers both alternative products (similar items for users whose item is not a match) and supplementary products (accessories and add-ons), shown as separate, labelled groups, following Baymard Institute, Holst, "Product Page Usability: Recommend Both Alternative & Supplementary Products (Only 42% Get it Right)" (2014). This requirement is distinct from `P09`, which concerns where cross-sell modules sit relative to the primary product details. It SHALL NOT apply to single-product sites or pages where no related product exists, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a dress page that suggests only other dresses and no shoes or accessories, or a page with no suggestions
- **THEN** the product skill flags the missing suggestion type

#### Scenario: Passing case
- **WHEN** a product page with a "similar items" group and a "goes well with" group
- **THEN** the product skill does not flag this requirement

### Requirement: C55 product rule
The product skill SHALL check that every product list item that shows a star average also shows the number of ratings the average is based on, following Baymard Institute, Scott, "Always Show the Number of User Ratings in List Items (5% Don't)" (2023, updated 2025); Baymard Institute, Soderlund, "Desktop UX Trends: 10 Common Pitfalls & Best Practices" (2025). This requirement is distinct from `C37`, which concerns colour swatches in mobile list items. It SHALL NOT apply to products with no ratings or sites without user ratings, and ratings the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a product list where each item shows only stars
- **THEN** the product skill flags the missing rating count

#### Scenario: Passing case
- **WHEN** a product list where each item shows stars and a count such as "(1,387)"
- **THEN** the product skill does not flag this requirement

### Requirement: C56 product rule
The product skill SHALL check that product list items show the same attributes across similar items (an unknown attribute is omitted everywhere or stated as unavailable), each element is visually distinct from the others, and the key information is present: price, title or type, thumbnail, ratings average with count, and variations that matter for the category. Variations of one product are combined into one list item with swatches and not listed as separate items, following Baymard Institute, Olah, "2 Key Design Principles for Product Listing Information (64% Get at Least 1 Wrong)" (2023); Baymard Institute, Olah, "Product Listing UX: What Information to Display in Product Listings (50% Get It Wrong)" (2023); Baymard Institute, Crowley, "Combine Variations of Products into One List Item (12% Don't)" (2021). This requirement is distinct from `C37`, which concerns the swatch row of a mobile list item only. It SHALL NOT apply to lists with a single item, and attributes the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** a list where only one laptop item shows specs, or one undifferentiated text line holds name and specs, or each colour of a shirt is a separate item
- **THEN** the product skill flags the list item design

#### Scenario: Passing case
- **WHEN** a list where every item shows price, title, thumbnail, rating with count and bulleted specs, with colours as swatches in one item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart items highlighted in product lists
The product skill SHALL check that a product list or search-result page marks items already in the user's cart (background, border, label, or changed features such as a view-cart link), following Baymard Institute, Christian Holst, "Product List and Category Navigation: Highlight Items Already in the User's Cart (96% Don't)" (2016). This requirement is distinct from `C37`, which concerns colour-variant swatches in a mobile list item. It SHALL NOT apply to a site without a cart or with a single-item purchase flow, and behaviour on lists not shown SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a search-results design where every item is styled identically after the user added one to the cart
- **THEN** the product skill flags the C57 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a result list where the in-cart item shows a label and a view-cart link
- **THEN** the product skill does not flag this requirement

### Requirement: Relevant, labelled cart cross-sells
The product skill SHALL check that cross-sell suggestions in the cart or added-to-cart confirmation are relevant to the cart contents, are not drawn only from other customers' purchases, vary in number with the relevant items available, carry a label that states why they are suggested, put compatible accessories first, and do not offer alternatives to cart items at checkout, following Baymard Institute, Sally Collins, "6 Ways to Improve the Relevance of Cross-Sells in the Cart (52% of Desktop Sites Don't Do Enough)" (2021). This requirement is distinct from `P09`, which concerns where recommendation modules sit on a product-detail page. It SHALL NOT apply to upgrades or newer versions of the same product, and the quality of the recommendation engine behind a design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a cart showing a fixed row of five unlabelled Customers also bought items, several unrelated to the cart item
- **THEN** the product skill flags the C58 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is an added-to-cart overlay with a labelled, short list of compatible accessories for the item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart quantity changes apply at once
The product skill SHALL check that cart quantity is changed with plus and minus buttons, alone or around an open text field, and each change updates the line item, cart summary and total at once, without a separate Update step, a focus-out requirement or a long quantity drop-down, following Baymard Institute, Edward Scott, "Use Buttons or Buttons Plus an Open Text Field for Updating Cart Quantity (61% Don't)" (2022). This requirement is distinct from `F27`, which concerns sliders versus steppers for logged values. It SHALL NOT apply to a cart where each item is unique and fixed at one unit, and timing of updates in a static design SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a cart with a quantity text field and an Update link that must be pressed
- **THEN** the product skill flags the C59 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a cart with plus and minus buttons whose totals change on each tap
- **THEN** the product skill does not flag this requirement

### Requirement: Inspirational images reach depicted products
The product skill SHALL check that an inspirational or lifestyle image lets users reach every depicted product through a nearby product list, a curated page or overlay, or a product list that places the depicted items first and identifies them, and shows depicted products that are no longer available as unavailable, following Baymard Institute, Kathryn Reeves, "Inspirational Images Should Link to All Depicted Products (9% of Sites Don't)" (2020). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to purely decorative images that depict no product for sale, and how interactive tags on the image perform SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a category header showing a styled room that links to a list in which the depicted sofa cannot be found
- **THEN** the product skill flags the C60 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a Shop the look overlay that lists every depicted item and marks unavailable ones
- **THEN** the product skill does not flag this requirement

### Requirement: Quick View for visually driven products
The product skill SHALL check that a product list of visually driven products offers a Quick View that opens over a still-visible list, shows key attributes, a small gallery and a prominent product-page link, and closes on the browser Back action, while spec-driven products use comparison features instead, following Baymard Institute, Mark Crowley, "Provide “Quick Views” for Visually Driven Products (50% Don't)" (2022). This requirement is distinct from `C37`, which concerns colour swatches in a mobile list item. It SHALL NOT apply to spec-driven product types with many attributes, and Quick View behaviour outside the reviewed product type SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is an apparel Quick View that fills the whole screen and sends Back to the previous page
- **THEN** the product skill flags the C61 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is an apparel Quick View over a dimmed list that Back closes
- **THEN** the product skill does not flag this requirement

### Requirement: Comparison feature for spec-driven products
The product skill SHALL check that a spec-driven product list offers a comparison feature with a compare checkbox visible without hover, a persistent selection panel, sticky column headings in the table, and hideable identical rows (also following Baymard Institute, Edward Scott, "4 Ways to Optimize the Comparison Feature for Scanning" (2022)), following Baymard Institute, Mark Crowley, "Product Comparison UX: Always Provide Comparison Features for Spec-Driven Industries (17% Don't)" (2022). This requirement is distinct from `C36`, which concerns the content and layout rules of a comparison table. It SHALL NOT apply to mobile sites and non-spec-driven products, and mobile comparison quality SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a laptop list whose compare checkbox appears only on hover and whose table headings scroll away
- **THEN** the product skill flags the C62 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a laptop list with always-visible compare checkboxes, a bottom selection panel and an Only show differences option
- **THEN** the product skill does not flag this requirement

### Requirement: Review photos and fit scale
The product skill SHALL check that the review form accepts reviewer photos and the reviews can be filtered to those with photos, and apparel and footwear reviews show an aggregate fit scale (also following Baymard Institute, Iva Olah, "Apparel & Accessories Sites: Always Provide an Aggregate “Fit” Subscore in the Reviews" (2024)), following Baymard Institute, Edward Scott, "Allow Users to Upload Images with Their Review (34% of Sites Don't)" (2020). This requirement is distinct from `D12`, which concerns navigation among opened reviewer images. It SHALL NOT apply to the fit scale on non-apparel products and sites that cannot accept uploads for legal or safety reasons, and moderation quality and aggregate accuracy SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a jeans review section with text-only reviews and a per-review fit line but no aggregate
- **THEN** the product skill flags the C63 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a jeans review section with photo upload, a with-photos filter and a runs small to runs large scale
- **THEN** the product skill does not flag this requirement

### Requirement: Rating sort and default sort
The product skill SHALL check that a sort by customer rating accounts for the number of ratings as well as the average, and the default sort of a product list is a relevance order showing all major product types among the first items (also following Baymard Institute, Kathryn Reeves, "Always Sort Product Lists by Diversity-Based “Relevance”" (2021)), following Baymard Institute, Sonia Sousa, "Use Both Ratings Average and Number of Ratings When Sorting by User Ratings" (2024). This requirement is distinct from `IA09`, which concerns matching sort modes to content dimensions. It SHALL NOT apply to lists without ratings and lists where the user chose the sort, and sort logic not visible in the design or code SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a Top rated sort that puts a one-rating five-star item first, under a default of price low to high
- **THEN** the product skill flags the C64 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a Top rated sort weighted by rating count under a default Relevance sort covering all product types
- **THEN** the product skill does not flag this requirement

### Requirement: Intermediary category pages
The product skill SHALL check that in a large product catalog the top one or two category levels open an intermediary page of subcategory tiles with a View all link, with promotions placed below or subdued relative to the subcategories, following Baymard Institute, Edward Scott, "Consider Providing “Intermediary Category Pages” (13% Don't)" (2023). This requirement is distinct from `IA03`, which concerns faceted classification instead of a single hierarchy. It SHALL NOT apply to small catalogs and deeper levels, and the choice between categories and filters and homepage product breadth SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Failing case
- **WHEN** the reviewed evidence is a top-level category page that shows only sale banners and sends users straight to a product list
- **THEN** the product skill flags the C65 requirement

#### Scenario: Passing case
- **WHEN** the reviewed evidence is a top-level category page led by subcategory tiles with a View all link
- **THEN** the product skill does not flag this requirement

### Requirement: Product image zoom and rotation
The product skill SHALL check that product images can be enlarged: on touch screens both pinch and double-tap zoom the image (and no viewport setting blocks page zoom), the zoomed view loads a higher-resolution version so details stay sharp, and on mobile the product image scales up proportionally when the device rotates to landscape, following Baymard Institute, Holst, "Mobile Gestures: 40% of Sites Don't Support Pinch or Tap Gestures for Product Images" (2016), Baymard Institute, Scott, "25% of E-Commerce Sites Don't Have Product Images with Sufficient Resolution or Level of Zoom" (2020), and Baymard Institute, Scott, "Mobile Web: Scale Product Images Proportionally in Mobile Landscape Mode (52% of Sites Don't)" (2018). This requirement is distinct from `C35`, which concerns product page contents in general, including enlargeable images. It SHALL NOT apply to products whose appearance and fine detail do not influence the purchase, and desktop zoom gestures the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: C44 failing case
- **WHEN** the reviewed evidence is a mobile apparel product page where pinch and tap do nothing, or the zoomed image turns pixelated
- **THEN** the product skill flags the missing zoom, low-resolution zoom or fixed-size image

#### Scenario: C44 passing case
- **WHEN** the reviewed evidence is a mobile apparel product page where pinch and double-tap zoom into a sharp high-resolution image and the image grows in landscape
- **THEN** the product skill does not flag this requirement

### Requirement: Additional product images signposted
The product skill SHALL check that for visually driven products, a product list item gives access to at least three thumbnails including the default one, with carousel arrows or dots visible by default on touch screens; a product-page gallery shows additional images as thumbnails and not only as dots or a count; when the thumbnail row is cut short, an arrow control, a final +N thumbnail or a visibly cut-off partial thumbnail shows that more exist, following Baymard Institute, Olah, "Always Provide 3 or More Product Thumbnails in Product Lists and Search Results" (2024), Baymard Institute, Reeves, "Always Use Thumbnails to Represent Additional Product Images (76% of Mobile Sites Don't)" (2020), and Baymard Institute, Blackwood, "Always Signpost Hidden Thumbnails in Image Galleries" (2017, updated 2026). This requirement is distinct from `C37`, which concerns colour swatches in mobile list items. It SHALL NOT apply to products whose appearance does not drive the decision and products with a single image, and image counts beyond the cited range the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: C45 failing case
- **WHEN** the reviewed evidence is a mobile apparel list item with one image and no indicator, or a gallery with five cut-off-less thumbnails out of ten
- **THEN** the product skill flags the unsignposted or missing additional images

#### Scenario: C45 passing case
- **WHEN** the reviewed evidence is a mobile apparel list item with swipe and visible dots for several images, and a gallery whose last thumbnail is partly cut off
- **THEN** the product skill does not flag this requirement

### Requirement: Account creation is offered after purchase with concrete benefits
The product skill SHALL check that account creation is offered on the order-confirmation page, not at the start or middle of checkout, and names concrete benefits instead of vague claims, following Baymard Institute, Scott, "Save Account Creation for the Confirmation Step (42% Don't)" (2023) and Baymard Institute, Söderlund, "4 Ways to Improve the Post-Checkout UX" (2025). This requirement is distinct from `P06`, which concerns registration before value in general. It SHALL NOT apply to a service that requires an account to place an order, and behaviour after the confirmation page SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Registration prompt mid-checkout
- **WHEN** a guest sees "Create an account for faster checkout" at the billing step and nothing on the confirmation page
- **THEN** the product skill flags the timing

#### Scenario: Confirmation page offer
- **WHEN** the confirmation page offers a password field with benefits such as saved details and order tracking
- **THEN** the product skill does not flag this requirement

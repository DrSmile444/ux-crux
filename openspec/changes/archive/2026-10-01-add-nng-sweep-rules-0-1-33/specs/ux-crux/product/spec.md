## ADDED Requirements

### Requirement: Variant selector holds variations of one product [C66]
The product skill SHALL check that an attribute selector on a product page (dropdown, swatches) offers only variations of the same product that differ in one simple attribute such as colour, size or pattern; options that change the product description and features (a TV series, a model line) have their own listings, with related models shown as comparable products. This requirement is distinct from C56, which combines variations of one product into one list item but does not say which options belong to a different product. It SHALL NOT apply to very small catalogues that list each colour separately yet keep an attribute selector on every page, and how complex an attribute is, when the evidence does not show what the options change, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Design Guidelines for Selling Products with Multiple Variants" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a TV page offers a Series dropdown whose choices change the model, price and features while the main image stays the same
- **THEN** the product skill flags the selector that mixes different products

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that each TV series has its own page and a Similar products panel links the other series, while colour is chosen by swatch
- **THEN** the product skill does not flag this requirement

### Requirement: Product page shows in-cart state [C67]
The product skill SHALL check that when a product is already in the cart, its product page shows that state next to the add control (a visible message and a label such as Add another), and the control still lets the user add more of the item. This requirement is distinct from C57, which marks in-cart items in product lists and search results, and C35, which requires add-to-cart confirmation at the moment of adding, not an in-cart state on a later visit to the same product. It SHALL NOT apply to single-item purchases such as a unique or one-off product, and whether the state survives across sessions SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Adding an Item to a Shopping Cart: Provide Clear, Persistent Feedback" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product already in the cart shows an unchanged Add to cart button on its product page with no in-cart indicator
- **THEN** the product skill flags the missing in-cart state

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the product page shows 2 in your cart beside an Add another button
- **THEN** the product skill does not flag this requirement

### Requirement: Listing page shows subcategory links [C68]
The product skill SHALL check that A product listing page that also serves as a category page shows its subcategories as separate links above the product listings and apart from the filters, so users can narrow to a more specific group without opening filters. This requirement is distinct from C65, which concerns the intermediary page of subcategory tiles at the top category levels, and D18, which concerns the filter types offered. It SHALL NOT apply to a category with no subcategories or to a top-level intermediary page that C65 governs, and whether users discover subcategories faster SHALL be reported `NOT ASSESSABLE` without test data. Source: Nielsen Norman Group, Harley, "UX Guidelines for Ecommerce Homepages, Category Pages, and Product Listing Pages" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a category page shows a product grid and lists subcategories only as one filter among many
- **THEN** the product skill flags the buried subcategories

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page shows subcategory links above the product grid, separate from the filter panel
- **THEN** the product skill does not flag this requirement

### Requirement: Listing photos share one style [C69]
The product skill SHALL check that product photos in one listing or search-results page share a consistent style (background, orientation, context, lighting, scale), so users can scan and compare them; marketplaces enforce the style for sellers through written photo standards. This requirement is distinct from C56, which requires the same attributes across similar list items, not a shared photographic style. It SHALL NOT apply to editorial listings with one cohesive visual style that varies pose or setting, and the source of each image SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Moran, "6 Tips for Product Photos on Listing Pages" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that boots on a listing page appear on white, outdoors and on models at different scales, so heel heights cannot be compared
- **THEN** the product skill flags the inconsistent photo styles

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that all boots are shot from the same side view on a white background
- **THEN** the product skill does not flag this requirement

### Requirement: Size shown in local and original systems [C70]
The product skill SHALL check that on a localized apparel or footwear site, the product page and the cart show the size in the sizing system of the shipping destination the user chose, beside the original size on the item label, and not only in a size-chart popup. This requirement is distinct from C63, which concerns an aggregate fit scale from reviews, not the sizing system shown for each size. It SHALL NOT apply to single-market sites and goods sold without sizes, and the accuracy of the size conversion SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Size Guides and Product Measurements for International Shoppers" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a shopper sets the destination to China and the product page lists only Italian and US sizes
- **THEN** the product skill flags the missing local size

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the product page and the cart show 11 (US size), label size 44 (EU) for a US destination
- **THEN** the product skill does not flag this requirement

### Requirement: Size guide specific and complete [C71]
The product skill SHALL check that A size guide on a site that sells several brands is specific to the brand or item (a brand size chart, body measurements per size, or garment measurements), lists any garment measurement for every size and not only the size the model wears, and states how the measurement was taken. This requirement is distinct from X28, which requires size charts to be real text and not images, not what the chart must contain, and C70, which concerns the sizing system shown for each size. It SHALL NOT apply to single-brand sites with one chart and goods sold without sizes, and the accuracy of the stated measurements SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Size Guides and Product Measurements for International Shoppers" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that one general conversion chart opens for every jacket on a multi-brand site, and the length is listed only for size S
- **THEN** the product skill flags the generic chart and the partial measurements

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the size guide names the brand, lists chest and length for every size, and shows a diagram of how length is measured
- **THEN** the product skill does not flag this requirement

### Requirement: Add-to-cart confirmation persists [C72]
The product skill SHALL check that after add to cart, a confirmation stays visible until the user dismisses it or moves on (a non-fading overlay, a banner, or an interstitial) and shows the product image, name, price, quantity and chosen options; the cart icon also shows an updated item count. This requirement is distinct from C35, which requires an add-to-cart control that confirms the action without stating how long the confirmation lasts or what it shows. It SHALL NOT apply to sites where the cart updates visibly in place and the user can review its contents in one step, and the timing of a transient message that a static screen does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Adding an Item to a Shopping Cart: Provide Clear, Persistent Feedback" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the only add-to-cart feedback is an overlay that fades after a moment and lists no size or colour
- **THEN** the product skill flags the transient and incomplete confirmation

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that add to cart opens a non-fading banner with image, name, price, quantity and options, and the cart badge increments
- **THEN** the product skill does not flag this requirement

### Requirement: Cart line item identifies the product [C73]
The product skill SHALL check that each cart line item shows an image large enough to tell it from similar items, the product name, the chosen options such as size and colour, and the price; the image shows the chosen variant; and the product name and image link to the product page, with the name styled as a link and not revealed as a link only on hover. This requirement is distinct from C59, which concerns how cart quantity is changed and updated, not what identifies a line item. It SHALL NOT apply to carts of digital items that have no image, and checkouts with no cart view, and the variant shown after a selection change in a static design SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Schade, "Decision Making in the Ecommerce Shopping Cart: 4 Tips for Supporting Users" (2014); Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the cart shows a thumbnail too small to tell a jacket from similar jackets, and the listed colour is navy while the image shows red
- **THEN** the product skill flags the unidentifiable or mismatched cart image

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart shows a clear image of the chosen colour, the name, size and colour text, and a blue linked product name that leads to the product page
- **THEN** the product skill does not flag this requirement

### Requirement: Cart line has a Remove control [C74]
The product skill SHALL check that each cart line has a visible Remove control, so users do not have to set the quantity to zero to delete an item; where a quantity control accepts zero, zero removes the item and does not return an error. This requirement is distinct from C59, which concerns changing quantity without an Update step, not how an item is removed. It SHALL NOT apply to a cart whose items cannot be removed by policy or where each item is fixed at one unit, and a removal flow or the result of entering zero that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "The Mobile Checkout Experience" (2018); Nielsen Norman Group, Schade, "Decision Making in the Ecommerce Shopping Cart: 4 Tips for Supporting Users" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a cart line has a quantity drop-down that starts at 1 and no Remove control beside the item
- **THEN** the product skill flags that the item cannot be removed directly

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that each cart line has a quantity stepper and a Remove link, and a quantity of 0 removes the item
- **THEN** the product skill does not flag this requirement

### Requirement: Cart persists and offers Save for Later [C75]
The product skill SHALL check that the cart works as a holding place while shoppers compare and decide: items placed in it are kept between visits, and each line offers a visible Save for Later link (not hidden behind a swipe, a dropdown or the page fold) that works without registration or naming a list, gives immediate feedback and shows the saved items on the cart page; the action is not labelled Wishlist, which users read as a gift list. This requirement is distinct from C43, which requires save and wishlist controls to work without registration, not cart persistence or the placement, label and feedback of saving inside the cart, and C57, which marks in-cart items in product lists. It SHALL NOT apply to flows with no cart, such as a single-item purchase, or to carts that must expire for stock or price reasons stated to the user, and persistence across devices and the use of saved items after the user leaves the site SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014); Nielsen Norman Group, Laubheimer, "Shopping Cart or Wishlist? Saving Products for Later in Ecommerce" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the cart is cleared when the session ends, and Move to Wish List appears only after a swipe and opens a login page
- **THEN** the product skill flags the lost cart and the hidden, gated save action

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart reloads with its items on the next visit, and each line shows Save for Later, which moves the item to a Saved Items section on the same page without login
- **THEN** the product skill does not flag this requirement

### Requirement: Cart applies and shows discounts [C76]
The product skill SHALL check that A discount the site advertises is applied automatically to a cart that qualifies, and the cart and order total show each applied discount on the affected line with the discounted price and the offer name; a free item shows as Free and not as a charge followed by a separate subtraction; a code field, where one is offered, is reachable from the cart or mini-cart (a link to the field is enough), and a code is checked and reflected in the total before payment details are requested. This requirement is distinct from C59, which concerns how quantity changes update the totals, C50, which concerns price and discount display on the product page, and F32, which concerns hiding the code field behind a link in the checkout form. It SHALL NOT apply to a cart with no discounts or to single-use codes sent to a specific person, and promotion logic on the server and whether the qualifying rule applies correctly SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Applying Discounts and Promotions on Ecommerce Websites" (2019); Nielsen Norman Group, Schade, "Ecommerce UX: 3 Design Trends to Follow and 3 to Avoid" (2014); Nielsen Norman Group, Schade, "Designing for 5 Types of E-Commerce Shoppers" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the site banner advertises a discount on orders over a set amount, the cart requires a code the shopper must find elsewhere, and a two-for-one offer shows the full price on each line
- **THEN** the product skill flags the manual step and the line price that ignores the discount

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart applies the discount automatically, shows the second item as Free with the offer name on that line, and offers a code link in the mini-cart
- **THEN** the product skill does not flag this requirement

### Requirement: Promotion restrictions stated at the offer [C77]
The product skill SHALL check that A promotion advertised in a banner, on a product or in the cart states its restrictions at the offer (exclusions, expiry, whether it combines with other offers, and final-sale terms next to the affected item), and applying a coupon never silently removes another advertised offer. This requirement is distinct from CT01, which concerns when mandatory fees are disclosed in a priced flow, and C76, which concerns how applied discounts appear in the cart, not the conditions attached to a promotion. It SHALL NOT apply to promotions with no conditions, and the accuracy of the promotion terms SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019); Nielsen Norman Group, Flaherty, "Applying Discounts and Promotions on Ecommerce Websites" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a banner advertises free shipping and a coupon code, and entering the code removes free shipping with no notice
- **THEN** the product skill flags the unstated restriction

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the banner reads Free shipping, other offers cannot be combined, the coupon states the same, and a final-sale note sits next to the reduced item in the cart
- **THEN** the product skill does not flag this requirement

### Requirement: Minimum-spend gap shown [C78]
The product skill SHALL check that A minimum-spend or multi-item offer shows the user how much more to add to qualify, in the cart and in the added-to-cart confirmation, and the page can offer items that close the gap. This requirement is distinct from CT07, which concerns delivery dates and where a free-shipping notice appears, not showing progress toward an offer threshold. It SHALL NOT apply to offers with no purchase threshold, and the cart total in states the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a header advertises free shipping over a set amount, but the cart shows no remaining amount
- **THEN** the product skill flags the missing gap indicator

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart says Add 12 more for free shipping and lists items near that price
- **THEN** the product skill does not flag this requirement

### Requirement: Sale items and site-wide offers visible [C79]
The product skill SHALL check that discounted items appear in their category listings next to full-price items and not only in a Sales section, and a site-wide offer is shown on every page of the shopping journey, not on the homepage alone. This requirement is distinct from CT07, which concerns delivery dates and the placement of free-shipping notices on the product page, not where discounted items and site-wide offers are listed. It SHALL NOT apply to sites with no discounts, and offers running on pages the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Flaherty, "Communicating Ecommerce Discounts and Promotions" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that sale items exist only under a Sale menu and the category page shows full-price items only
- **THEN** the product skill flags the hidden discounts

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that category pages list sale items with their reduced price and a banner on every page states the site-wide offer
- **THEN** the product skill does not flag this requirement

### Requirement: Mobile order summary near the top [C80]
The product skill SHALL check that on mobile checkout pages the order summary sits near the top of the page, shows each line (subtotal, tax, fees, discounts, shipping) expanded, and is not hidden in a collapsed section at the bottom of the page. This requirement is distinct from CT01, which concerns when a mandatory fee is first disclosed in a flow, not where the total is placed on each checkout page. It SHALL NOT apply to desktop layouts with a side summary, and totals that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "The Mobile Checkout Experience" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a mobile review page puts the order summary in a collapsed accordion above the footer
- **THEN** the product skill flags that the summary is low and collapsed

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a mobile review page opens with an expanded order summary of each line
- **THEN** the product skill does not flag this requirement

### Requirement: Payment methods fit the market [C81]
The product skill SHALL check that A checkout offers at least one payment method besides the credit card, and a country-specific site lists the methods common in that country (bank transfer, local wallets, debit cards named apart from credit cards, instalments or pay-in-person where customary) instead of one global set; a method that needs extra steps gives its payment details in a form users can keep, such as an email or a printable page. This requirement is distinct from F37, which concerns the layout of payment card fields, and F24, which concerns device payment sheets that replace manual entry, not which payment methods the checkout offers. It SHALL NOT apply to a checkout for one country whose preferred methods are already verified, and the payment preferences of the real audience SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Sherwin, "Alternative Payment Methods Enable International Purchases" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a site sold in several countries accepts credit cards only
- **THEN** the product skill flags the single global payment method

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the Brazilian site offers credit card, debit card and bank slip, and the Dutch site adds a local bank method
- **THEN** the product skill does not flag this requirement

### Requirement: Business offers show a price [C82]
The product skill SHALL check that A page that offers a product or service to business or professional buyers shows a price; when the exact price depends on the customer or configuration, it shows prices for a few typical scenarios, a price range or a suggested retail price, and not only a contact-sales prompt or a configurator that needs precise input before it shows any figure. This requirement is distinct from C35, which concerns a consumer product page stating additional charges beside the price, and GW01, which lists prices buried behind extra clicks as one goodwill depletor, not what to show when the price is custom. It SHALL NOT apply to offers whose price cannot lawfully be published, and whether the published figures are accurate SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Loranger, "State the Price to Give B2B Sites a Competitive Advantage" (2013); Nielsen Norman Group, Nielsen, "Show Prices for Common Scenarios" (2006).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a B2B service page lists features and offers only a Request a quote button
- **THEN** the product skill flags the missing price or sample prices

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a shipping service page shows a table of prices for the most common shipment types
- **THEN** the product skill does not flag this requirement

### Requirement: Locator links in task pages [C83]
The product skill SHALL check that A site with physical locations links to its store or branch locator from the places where the next step can be local, besides the site-wide link: product lists (an in-stock-at-store filter), product pages (a choose-store or pick-up control), the cart or shipping step, and returns or service pages. This requirement is distinct from N27R, which places a store locator among the secondary items of the mobile menu, not in the task pages where users need it. It SHALL NOT apply to online-only businesses, and store stock data behind the control SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Store Finders: Why People Still Need Locator Links" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the return-policy page says items can be returned in store and has no link to find a store
- **THEN** the product skill flags the missing contextual locator link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the cart shows a pick-up-in-store option with a Find a store link per item
- **THEN** the product skill does not flag this requirement

### Requirement: Locator starts from current location [C84]
The product skill SHALL check that A store or branch locator lets the user start the search from the device's current location, besides typing an address or postal code. This requirement is distinct from F24, which concerns device capabilities that replace manual entry in mobile forms, not the start of a locator search on any platform, and C83, which concerns where locator links appear. It SHALL NOT apply to sites with a handful of locations shown at once on one list or map, and how the permission prompt is handled after the tap SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Store Finders and Locators" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the locator offers only a postal-code field for a chain with hundreds of stores
- **THEN** the product skill flags the missing current-location option

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the locator has a Use my location button beside the address field
- **THEN** the product skill does not flag this requirement

### Requirement: Language, country and currency switching [C85]
The product skill SHALL check that an international shop sets the initial language, country and currency from the browser settings, remembers the visitor's choice for later visits, and asks the visitor to choose a country or region when the location cannot be detected instead of guessing; the shopper can change the display language, the shipping country and the currency independently of one another; the switcher sits in a top corner on desktop (the top right first, then the top left) and in the header or inside the navigation menu on mobile, not only in the footer, and a site that offers it on desktop also offers it on mobile; each language is named in that language (Deutsch, Español), and the switcher control combines several cues such as a rectangular flag, the currency and the language name, so a small flag alone does not stand for it. This requirement is distinct from F21, which pre-selects dominant form values without addressing storefront locale, N13R, which places utility navigation without the language switcher, C05, which reviews the localization of copy, and S14, which governs overlays that open by themselves, so a country prompt that opens without a user action fails S14 and not this rule. It SHALL NOT apply to shops that serve one country in one language, and the detection logic, and footer, menu or settings contents the evidence does not show, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "6 Tips for Improving Language Switchers on Ecommerce Sites" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a US visitor lands on a store priced in pounds with no prompt, choosing Mexico forces Spanish text and the peso, and the only switcher on mobile is a 12 px round flag in the footer
- **THEN** the product skill flags the wrong default, the coupled settings and the hard-to-find, weakly labelled switcher

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the store opens in the visitor's language and currency, remembers a manual change, offers three separate selectors, and the header trigger reads HK / HKD $ | English with a flag and lists Deutsch and English
- **THEN** the product skill does not flag this requirement

### Requirement: User-generated content offers translation [C86]
The product skill SHALL check that where reviews or comments arrive in several languages, foreign-language items offer translation: a translate link appears only on items not in the user's language, the translated text is labelled as automatic and keeps the original available, and a translate-all control, automatic translation or a language filter labelled All languages is provided when much of the content is foreign. This requirement is distinct from C05, which requires localization review of copy and does not cover user-generated content. It SHALL NOT apply to products whose user-generated content is in one language, and the language mix of the content, when the evidence does not show it, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Liu, "Translate User-Generated Content for Global Audiences" (2022).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product page for a Chinese-language audience shows mostly English reviews with no translate control, or a translate button under every review including those already in Chinese
- **THEN** the product skill flags the missing or indiscriminate translation

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that foreign reviews carry a translate link, the result says Translated by Google with a show-original link, and a translate-all button sits above the list
- **THEN** the product skill does not flag this requirement

### Requirement: Recommendation module names its source [C87]
The product skill SHALL check that A personalised recommendation module names the data it is based on (for example Because you watched a named title, Related to items you've viewed); vague wording such as and more is not used. This requirement is distinct from C58, which labels why cart cross-sells are suggested, and P09, which places cross-sell modules below the primary product, not how a personalised module explains its source. It SHALL NOT apply to non-personalised popular or editorial modules, and the data actually used SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a module reads Recommended Movies, Based on titles you have watched and more
- **THEN** the product skill flags the vague recommendation source

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the module reads Because you watched followed by a named title
- **THEN** the product skill does not flag this requirement

### Requirement: Personal recommendations above generic blocks [C88]
The product skill SHALL check that on a homepage or hub, individualised recommendations sit above generic promotional blocks, directly under the main banner or search area, and are grouped into specific categories when a user's interests are varied. This requirement is distinct from P09, which places cross-sell modules below the primary product on a product page, not the order of personalised and generic blocks on a homepage. It SHALL NOT apply to visitors with no history, for whom no personalised content exists, and whether the module is personalised SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018); Nielsen Norman Group, Harley, "Individualized Recommendations: Users' Expectations & Assumptions" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a Recommended For You carousel is second to last on a long homepage, below several generic promotional areas
- **THEN** the product skill flags the recommendation placement

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that Events for you sits directly under the hero banner and search box
- **THEN** the product skill does not flag this requirement

### Requirement: Recommendation feedback controls [C89]
The product skill SHALL check that users can dismiss, rate or remove the history behind a recommendation, and the module reflects that choice immediately, with a short confirmation (for example that an item is no longer used for recommendations) and no full-page reflow. This requirement is distinct from PH02, which requires meaningful user control over recurring prompts, not feedback controls on recommended items. It SHALL NOT apply to services where personalisation is not a main part of the product, and update timing SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "UX Guidelines for Recommended Content" (2018).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a playlist of recommended songs has no way to mark a song as disliked, and a one-star rating leaves the list unchanged after refresh
- **THEN** the product skill flags the missing recommendation feedback

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that hiding a promoted item replaces it with a short placeholder, and removing a viewing-history entry shows that it will no longer shape recommendations
- **THEN** the product skill does not flag this requirement

### Requirement: Video entries and instructional video structure [C90]
The product skill SHALL check that A video link, thumbnail or embedded player tells the user what the video is before play: a descriptive title or topic, the running length near the title or thumbnail and not only in the player bar, and a still frame that represents the content and its style (interview, animation, screen recording); an instructional video that covers the whole page sits at the top of the content and one about a single part sits at the top of that section, not only at the bottom of the page or in the right rail, where users missed videos or took them for ads; a multistep or long video is split into one short video per step or group of steps, or has chapters with time markers, a topic list or a transcript, so users can reach the part they need. This requirement is distinct from C52, which places product videos in the image gallery with a play icon, and X09, which concerns text alternatives for media. It SHALL NOT apply to product-gallery videos that C52 governs, auto-playing hero videos, and, for the splitting clause, short single-step videos, and the video's real style and internal structure SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "Videos as Instructional Content: User Behaviors and UX Guidelines" (2020); Nielsen Norman Group, Schade, "Video Usability" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a how-to page puts its only video, a twenty-minute twelve-step walkthrough with no chapters, in a narrow right column behind a bare play button with no title or length
- **THEN** the product skill flags the right-rail placement, the missing title, length and representative still, and the unchunked video

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video covering all steps sits above the written steps with a descriptive title, 2:30 beside a frame thumbnail, and a chapter list with markers on the scrub bar
- **THEN** the product skill does not flag this requirement

### Requirement: Demonstration filmed from the doer's view [C91]
The product skill SHALL check that A step-by-step demonstration video or image sequence shows each action from the doer's point of view (the camera sees what the user would see), keeps the same angle, props and setting from step to step, and is paired with per-step images or text so users can follow at their own pace. This requirement is distinct from X09, which concerns text alternatives for media, and C90, which concerns what a video entry shows before play and how a video is divided, not camera view or pacing. It SHALL NOT apply to a video that only explains what an object is, where an observer's view is enough, and the pace that suits each user SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Harley, "How to Film and Photograph Online Content for Usability: UX Details for Videos and Images" (2020).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a knot-tying video is filmed facing the demonstrator, so users must mirror each step, and has no per-step images
- **THEN** the product skill flags the observer view and the missing self-paced steps

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video is filmed over the demonstrator's shoulder and is paired with step-by-step images
- **THEN** the product skill does not flag this requirement

### Requirement: Video page keeps surrounding context [C92]
The product skill SHALL check that A page that plays an informational or talking-head video keeps related content, links and the global navigation visible outside the video frame, so a viewer whose attention drifts has somewhere to go on the site and the page does not hide all other content during playback. This requirement is distinct from C52, which concerns where product videos sit in the gallery, not what surrounds a playing video. It SHALL NOT apply to full-screen players the user enters by choice, and video-first apps, and behaviour while the video plays, when the evidence shows one frame, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Pernice, "The Talking-Head Video 2.0: Findings from Eyetracking Research" (2017).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a video page dims and hides the navigation and related links while the clip plays
- **THEN** the product skill flags the page that hides everything else

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the video sits beside a related-articles list and the global navigation stays visible
- **THEN** the product skill does not flag this requirement

### Requirement: Ordered values use one hue [C93]
The product skill SHALL check that when colour encodes an ordered numeric value in a treemap, heat map or map, one hue varies in intensity (two hues, one per sign, when values run positive and negative) and a legend states the scale; several unrelated hues are used for numeric ranges only when the ranges are named categories. This requirement is distinct from C22, which matches the visualization type to the data category, and PA18, which prefers position or length over colour for precise comparison, not how colour encodes an ordered value where colour is used. It SHALL NOT apply to colour that encodes unordered categories, and the data type behind the colours, when the evidence does not show it, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Laubheimer, "Treemaps: Data Visualization of Complex Hierarchies" (2019).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a map shades the share of residents over 65 in blue, yellow and red bands with no natural order
- **THEN** the product skill flags the multi-hue scale for an ordered value

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the map uses one hue from light to dark with a legend
- **THEN** the product skill does not flag this requirement

### Requirement: Reading level for a broad audience [C94]
The product skill SHALL check that copy on pages for a broad consumer audience uses plain words and short sentences at a reading level that lower-literacy readers can follow. This requirement is distinct from C01, which asks for concise, respectful copy in the user's vocabulary, not a plain-language reading level for the whole audience, and C07, which concerns the order of content. It SHALL NOT apply to terms of art that the verified audience uses in its work, as in the C01 applicability note, and the literacy of the real audience SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Lower-Literacy Users: Writing for a Broad Consumer Audience" (2005); Nielsen Norman Group, Kaley, "UX Writing: FAQs from Practitioners" (2026).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a consumer sign-up page uses long sentences and multi-syllable terms
- **THEN** the product skill flags the reading level

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page uses short sentences and plain words
- **THEN** the product skill does not flag this requirement

### Requirement: Acronyms written out on each page [C95]
The product skill SHALL check that an acronym or abbreviation that part of the audience may not know is written out where it appears on a page or screen, not only at first use elsewhere, unless it is as familiar as PDF or URL. This requirement is distinct from C01, which asks for the user's vocabulary over internal terms, not for expanding abbreviations on each page, and IA07, which maps acronyms to preferred terms in search. It SHALL NOT apply to abbreviations that the verified audience uses daily, and which abbreviations the audience knows SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "UX Writing: FAQs from Practitioners" (2026).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a deep page uses TCO and SLA that the site defines only on another page
- **THEN** the product skill flags the unexpanded abbreviations

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page writes total cost of ownership and service-level agreement in full where each appears
- **THEN** the product skill does not flag this requirement

### Requirement: Numbered lists only for sequence or count [C96]
The product skill SHALL check that A numbered list is used only when the order of items or their count matters (procedure steps, a ranked list); items that are independent options use bullets, because users read numbers as steps they must all complete. This requirement is distinct from C08, which places high-information keywords at the start of headlines and bullet points, not the choice between bullets and numbers. It SHALL NOT apply to lists whose position in a ranking or count is part of the message, and how the list reads in context, when only a fragment is shown, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Loranger, "7 Tips for Presenting Bulleted Lists in Digital Content" (2017).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a contact page lists Online form, Chat, Telephone and In person as 1 to 4 although the user needs only one
- **THEN** the product skill flags the numbered list of independent options

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the same four contact methods appear as bullets and the account-setup steps are numbered
- **THEN** the product skill does not flag this requirement

### Requirement: On-screen content as HTML with a PDF gateway [C97]
The product skill SHALL check that content that people read on screen is published as an HTML page, not only as a PDF; where a PDF is also needed for printing or download, an HTML gateway page summarises the key points and links to the file with its format and size (and page count for a long document), and site search and other links point to that page and not straight to the file; any link that leads to a PDF, a media player or another application names the format. This requirement is distinct from X28, which concerns essential text being real HTML text and not an image, and A09R, which concerns a control's effect matching its label. It SHALL NOT apply to legal, print-only or to-be-signed documents that must exist as PDF, or to short forms the user asked to download, and PDF accessibility tagging without the file, and the reading context of a given audience, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen and Kaley, "Avoid PDF for On-Screen Reading" (2020); Nielsen Norman Group, Nielsen and Kaley, "PDF: Still Unfit for Human Consumption, 20 Years Later" (2020); Nielsen Norman Group, Nielsen, "Gateway Pages Prevent PDF Shock" (2003); Nielsen Norman Group, Nielsen, "113 Design Guidelines for Homepage Usability" (2001); Nielsen Norman Group, Nielsen, "Top 10 Mistakes in Web Design" (2011).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a policy handbook is linked straight to a 60-page PDF with the link reading Handbook
- **THEN** the product skill flags the screen-read content published as a bare PDF behind an unlabelled link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that an HTML page gives the key points and a link labelled Download full report (PDF, 4 MB), and site search points to that page
- **THEN** the product skill does not flag this requirement

### Requirement: Objective copy over promotional claims [C98]
The product skill SHALL check that informational and product copy states plain, checkable facts instead of boastful, subjective promotional claims (hottest ever, world-class, best); a claim is backed by a specific figure, feature or source. In NN/g tests of the same site written in several versions, objective wording improved task performance over promotional wording, and users read promotional wording as less credible. This requirement is distinct from C01, which asks for concise, direct copy in the user's vocabulary, VT01, which ranks clarity above cleverness, and GW01, which flags hollow sincerity copy as a goodwill depletor, not the substitution of unsupported superlatives with facts. It SHALL NOT apply to advertising, campaign, brand or entertainment pages whose purpose is promotion, and how a given audience reads the tone, and the effect on conversion, SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "How Users Read on the Web" (1997); Nielsen Norman Group, Morkes and Nielsen, "Applying Writing Guidelines to Web Pages" (1998).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a product page calls the service the hottest, best-in-class solution in the world with no figures
- **THEN** the product skill flags the unsupported superlatives

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the page states the measured battery life and the supported formats
- **THEN** the product skill does not flag this requirement

### Requirement: No welcome filler at the top of a page [C99]
The product skill SHALL check that the top of a page does not spend prime space on a welcome salutation or generic filler such as a greeting; any introductory text is short and states what the page contains, and a tagline takes the place of a welcome message. This requirement is distinct from C31, which concerns a concrete tagline beside the identity area, and C07, which concerns the order of body copy. It SHALL NOT apply to a page whose first text is task-critical instruction, and how many users skip the text SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Blah-Blah Text: Keep, Cut, or Kill?" (2007); Nielsen Norman Group, Nielsen, "113 Design Guidelines for Homepage Usability" (2001).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a homepage opens with a paragraph beginning Welcome to our site, we hope you enjoy the new design
- **THEN** the product skill flags the welcome or filler paragraph

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that a homepage opens with a one-line tagline and a short sentence on what the page offers
- **THEN** the product skill does not flag this requirement

### Requirement: Upfront summary on long-form content [C100]
The product skill SHALL check that A long-form page or article offers a summary or key-takeaways block near the top, with a descriptive heading (such as Summary or Key Takeaways) and a visual treatment that sets it apart from the body; a recap at the end of a very long piece is not the only summary. NN/g's usability study of long content found that summaries help users decide whether a page is relevant and give them a roadmap. This requirement is distinct from C07, which orders the body copy as an inverted pyramid, and C27, which concerns line length and heading scale in long text, not an upfront summary block. It SHALL NOT apply to short pages or to content whose first paragraph already states the conclusion, and whether readers use the summary on the reviewed page SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Wang and Chan, "5 Formatting Techniques for Long-Form Content" (2023).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a long article starts with a title and an image, then body text, with no summary
- **THEN** the product skill flags the missing upfront summary

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article opens with a bordered Key Takeaways block of three bullets
- **THEN** the product skill does not flag this requirement

### Requirement: Headings, lists and sparing bold in long text [C101]
The product skill SHALL check that A long text passage is broken into sections with descriptive subheadings and uses short bulleted lists where the content is list-like; bulleted items are short, or each long item starts with a bolded key phrase, and bold or highlight marks only the few critical fragments, not whole paragraphs. NN/g studies found that readers scan headings and list items, that a participant missed a visible answer inside lengthy unformatted bullets, and that a scannable layout beat the same text as plain paragraphs. This requirement is distinct from C08, which concerns the first words of headings and bullets, and PA10, which concerns breaking a dense text column into blocks to spread fixations, not whether a passage has headings and lists or how list items and emphasis are formatted. It SHALL NOT apply to short passages and text that users commit to read in full, nor, for the bolded lead-in clause, to lists meant to be read in order such as step-by-step instructions, and how far readers actually read SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Pernice, "Text Scanning Patterns: Eyetracking Evidence" (2019); Nielsen Norman Group, Wang and Chan, "5 Formatting Techniques for Long-Form Content" (2023); Nielsen Norman Group, Nielsen, "How Users Read on the Web" (1997).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a long help article is one run of paragraphs with no subheadings, and its one bulleted list has five long items with no emphasis
- **THEN** the product skill flags the unbroken text and the long unformatted bullets

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article has a subheading per topic, a short bulleted list of options, and each long bullet starts with a bolded key phrase that is the only bold text
- **THEN** the product skill does not flag this requirement

### Requirement: Informational articles link the product [C102]
The product skill SHALL check that an informational article on a site that sells related products mentions and links the product in the body text or directly at the end of the article, not only in the logo, header or a side margin, because visitors who arrive from search often never see them. This requirement is distinct from N18R, which places inline links to related items at the point of reading, but does not require articles to lead to the product itself. It SHALL NOT apply to sites that do not sell the product, and how visitors arrive SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Nielsen, "Informational Articles Must Ask For the Order" (2004).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a feeding-tips article names no product and links to the product range only in a left-margin item that scrolls out of view
- **THEN** the product skill flags the missing product link

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the article body links the matching product and the end of the article offers a Shop link
- **THEN** the product skill does not flag this requirement

### Requirement: Audience groups in navigation [IA11]
The product skill SHALL check that navigation does not force users to pick an audience group before they can reach content; if audience groups are used, they are mutually exclusive, plain-language, labelled so users can tell content for the group from content about it (Information for Students), and shared content is not duplicated under several groups. This requirement is distinct from IA04, which concerns internal organizational divisions exposed in navigation, not user audience groups. It SHALL NOT apply to sites with clearly separate customer types served by different products, and how many users fit more than one group SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Sherwin, "Audience-Based Navigation: 5 Reasons to Avoid It" (2015).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a header with Private, Business and Corporate links leaves a small business owner unable to tell where to go
- **THEN** the product skill flags the overlapping or ambiguous audience labels

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that topic-based navigation holds an Information for Students link whose pages are written for students
- **THEN** the product skill does not flag this requirement

### Requirement: Top-level navigation names topics, not formats [IA12]
The product skill SHALL check that top-level navigation labels name topics, offerings or user tasks (Features, Testimonials, FAQs, a product name), not content formats (Videos, Photos, Publications, Guides); format links appear on a topic page, where they carry context. NN/g found that a bare format label gives topic-focused users too little information scent and splits one topic across format silos. This requirement is distinct from IA04, which concerns navigation that mirrors the organisation's internal structure, not the content's delivery format. It SHALL NOT apply to sites where users mainly browse for media (a video or streaming service, a photo library), and whether a given site's visitors are topic-driven or browsing SHALL be reported `NOT ASSESSABLE` without evidence of their tasks. Source: Nielsen Norman Group, Harley, "Avoid Format-Based Primary Navigation" (2014).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that the main navigation of a B2B product site contains Videos, Photos and Publications
- **THEN** the product skill flags the format-named top-level links

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the main navigation lists Features, Pricing and FAQs, and a Videos link appears on each product page
- **THEN** the product skill does not flag this requirement

### Requirement: Paths from plausible categories [IA13]
The product skill SHALL check that an item or subcategory that users plausibly expect under more than one category is reachable from each of those plausible parents, either by listing it under each (with the breadcrumb showing one canonical path) or by a clearly labelled see-also link from the plausible category to its real location (a baby car seat reached from car accessories); categories users would not plausibly check get no such path. This requirement is distinct from IA03, which recommends faceted classification when users need several independent attributes, not a path from a plausible but different category. It SHALL NOT apply to small sites with shallow hierarchies or to categories where every item has one unambiguous home, and where users expect an item to live SHALL be reported `NOT ASSESSABLE` without evidence of their mental models. Source: Nielsen Norman Group, Laubheimer, "Polyhierarchies Improve Findability for Ambiguous IA Categories" (2018); Nielsen Norman Group, Nielsen, "Deceivingly Strong Information Scent Costs Sales" (2004).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows that a game console appears only under Electronics although many users look for it under Video Games, and the automotive section has no link to the baby car seats held elsewhere
- **THEN** the product skill flags the single parent and the missing cross-reference

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows that the console is listed under Video Games and Electronics with one breadcrumb path, and the automotive section carries a see-also link labelled Baby car seats
- **THEN** the product skill does not flag this requirement

## ADDED Requirements

### Requirement: Main product-page sections are not behind horizontal tabs
The product skill SHALL check that a product page presents its main sections (description, specifications, shipping, reviews) as expanded or vertically collapsed sections, not behind horizontal tabs, following Baymard Institute, Blackwood, "Avoid Using 'Horizontal Tabs' for the Main Product Page Sections" (2018, updated 2026). This requirement is distinct from `C35`, which concerns page contents. It SHALL NOT apply to tabs that organize subsections of one content category when no horizontal tab scrolling is needed on mobile, and a layout the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Shipping details in the third tab
- **WHEN** the reviewed evidence shows shipping and reviews in unselected horizontal tabs
- **THEN** the product skill flags the tabbed layout

#### Scenario: Collapsed sections
- **WHEN** the reviewed evidence shows vertically collapsed sections with visible headings
- **THEN** the product skill does not flag this requirement

### Requirement: Product images include an in-scale view, and worn products appear on a model
The product skill SHALL check that a product page has at least one image that shows the product's size against a person, a known object or its setting, and that products worn by users (apparel, accessories, cosmetics) are shown on a human model, following Baymard Institute, Holst, "All Products Need at Least One 'In Scale' Image" (2017). This requirement is distinct from `C19`, which concerns whether photography informs a decision. It SHALL NOT apply to products whose size is not a decision factor, and images the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Cut-out jeans only
- **WHEN** the reviewed evidence shows jeans only as isolated cut-out thumbnails
- **THEN** the product skill flags the missing model and scale view

#### Scenario: Camera in a hand
- **WHEN** the reviewed evidence shows a camera held in a model's hands
- **THEN** the product skill does not flag this requirement

### Requirement: Price per unit accompanies the package price
The product skill SHALL check that products sold in different quantities or volumes show a price per unit (per count, weight, volume or serving) beside the total package price, following Baymard Institute, Olah, "Display 'Price Per Unit' For Multiquantity Items" (2023). This requirement is distinct from `C35`, which concerns price with additional charges. It SHALL NOT apply to a single fixed-size product, and a price display the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Three pack sizes with totals only
- **WHEN** the reviewed evidence shows 30-, 60- and 90-count packs with only package prices
- **THEN** the product skill flags the missing unit price

#### Scenario: Unit price shown
- **WHEN** the reviewed evidence shows each pack with a price per serving
- **THEN** the product skill does not flag this requirement

### Requirement: Long spec sheets are grouped into titled subsections
The product skill SHALL check that a specification list of about 20 or more items is grouped into subsections with clear titles, with related specifications kept adjacent, following Baymard Institute, Scott, "Product Spec Sheets: 4 Ways to Make Spec Sheets More Scannable for Users" (2018). This requirement is distinct from `C14`, which concerns precision of copy. It SHALL NOT apply to short spec lists, and a list the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Forty laptop specs in one list
- **WHEN** the reviewed evidence shows forty specifications in a single ungrouped list
- **THEN** the product skill flags the missing grouping

#### Scenario: Grouped sheet
- **WHEN** the reviewed evidence shows the same specs under "Display", "Storage" and "Ports" headings
- **THEN** the product skill does not flag this requirement

### Requirement: Buyers' social-media images appear on relevant product pages with attribution
The product skill SHALL check that, for visually driven products, the product page shows buyers' social-media images of that product with source attribution, and distinguishes organic posts from incentivized ones, following Baymard Institute, Galante, "Always Integrate Social Media Visuals on the Product Page for Relevant Products" (2024). This requirement is distinct from `PB06`, which concerns the truthfulness of social proof in general. It SHALL NOT apply to products where appearance in use is not a decision factor, and a page the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Only studio photos on a handbag page
- **WHEN** the reviewed evidence shows a handbag page with studio images and no buyer images
- **THEN** the product skill flags the missing visual social proof

#### Scenario: Attributed buyer photos
- **WHEN** the reviewed evidence shows buyer photos with usernames and a "gifted" label where applicable
- **THEN** the product skill does not flag this requirement

### Requirement: Save, favourite and wishlist work for guests
The product skill SHALL check that a save, favourite or wishlist control can be used without registration, following Baymard Institute, Scott, "Product Page UX Best Practices" (updated 2026). This requirement is distinct from `P06`, which concerns registration before value in general. It SHALL NOT apply where saved items must sync to a verified identity for safety reasons, and behaviour the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Heart icon opens a sign-up wall
- **WHEN** the reviewed evidence shows a heart tap that opens a registration form
- **THEN** the product skill flags the forced registration

#### Scenario: Saved locally for a guest
- **WHEN** the reviewed evidence shows a guest tap that saves the item and offers an optional account
- **THEN** the product skill does not flag this requirement

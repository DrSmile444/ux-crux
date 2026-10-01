## ADDED Requirements

### Requirement: Product page carries the core elements
The product skill SHALL check that a product page shows a descriptive name, recognisable and enlargeable images, a price that states additional charges, product options with their availability, an add-to-cart control that confirms the action, and a concise description. This follows NN/g, Sherwin, "UX Guidelines for Ecommerce Product Pages" (2019). This requirement is distinct from `C19` (photography that informs). It SHALL NOT apply to a page that is not a purchase page, and elements that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Page without availability or cart feedback
- **WHEN** the reviewed evidence shows options without availability and an add-to-cart tap with no confirmation
- **THEN** the product skill flags the missing elements

#### Scenario: Complete page
- **WHEN** the reviewed evidence shows all core elements present
- **THEN** the product skill does not flag this requirement

### Requirement: Comparison tables limit items and make differences visible
The product skill SHALL check that a comparison table for products, plans or features compares up to five items, uses the same attributes for every item, keeps concise scannable cells, and makes differences easy to see. This follows NN/g, Moran & Dykes, "Comparison Tables for Products, Services, and Features" (2024). This requirement is distinct from `D06`, which concerns compared parameters inside one list. It SHALL NOT apply to a single-item page, and interaction that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Eight plans with different attribute sets
- **WHEN** the reviewed evidence shows a pricing table of eight plans listing different attributes per plan
- **THEN** the product skill flags the item count and the inconsistent attributes

#### Scenario: Three plans, same attributes
- **WHEN** the reviewed evidence shows three plans compared on identical rows
- **THEN** the product skill does not flag this requirement

### Requirement: Mobile product lists show all colour variants as swatches
The product skill SHALL check that, for visually driven product types, a mobile product list item shows every colour variant as a swatch, with a horizontally scrollable area whose edge swatch is cut off to signal more. This follows Baymard, Scott, "Make All Color Swatches Available in Mobile List Items for Visually Driven Product Types (57% Don't)" (2023). This requirement is distinct from `C35` (product page). It SHALL NOT apply to products where colour is not a decision factor, and a list that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Three swatches of eleven
- **WHEN** the reviewed evidence shows a mobile list item with three swatches and no cue that others exist
- **THEN** the product skill flags the truncated variants

#### Scenario: Scrollable swatch row
- **WHEN** the reviewed evidence shows a horizontal swatch row whose last swatch is cut off
- **THEN** the product skill does not flag this requirement

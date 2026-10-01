## ADDED Requirements

### Requirement: Product pages show estimated shipping cost and link the return policy
The trust skill SHALL check that a product page gives an estimated shipping cost (a flat rate, a location-based estimate, or a transparent range) so the user can judge the total order cost before adding to the cart, and links or summarizes the return policy in plain language, following Baymard Institute, Holst, "Product Pages Need to Show 'Estimated Shipping Costs'" (2017), and Baymard guideline "Return Policy Discoverability" (#803). This requirement is distinct from `CT01`, which concerns when mandatory fees are disclosed in a priced flow. It SHALL NOT apply to digital goods without delivery or returns, and information the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Shipping first shown in the cart
- **WHEN** the reviewed evidence shows a product page with no shipping information and a cart that adds it
- **THEN** the trust skill flags the late disclosure and the missing return-policy link

#### Scenario: Estimate and policy link on the page
- **WHEN** the reviewed evidence shows a shipping estimate and a "Free returns within 30 days" link near the buy section
- **THEN** the trust skill does not flag this requirement

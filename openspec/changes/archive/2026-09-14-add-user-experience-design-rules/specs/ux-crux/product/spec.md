## ADDED Requirements

### Requirement: Content authenticity and credibility signals
When the reviewed evidence is content-heavy (an article, editorial content, a published report, or comparable long-form material whose credibility affects whether users trust it), the product skill SHALL check for four visible validity signals: source of information, references/citations to trustworthy material, a visible creation/publication date, and author attribution demonstrating relevant expertise. The skill SHALL flag content that omits one or more of these signals when the content type plausibly depends on user trust in its accuracy or currency.

#### Scenario: Un-dated, anonymous article with no citations
- **WHEN** the reviewed evidence is a published article with no visible publication date, no author byline, and no references to external sources
- **THEN** the product skill flags the missing validity signals as a content-credibility finding, distinct from the existing content-clarity (C01-C06) and voice-tone rules

### Requirement: Chart and data-visualization type-fit
When the reviewed evidence includes a chart, graph, or dashboard, the product skill SHALL check that the visualization type matches its underlying data category — quantities (bar/pie/bubble/heat map), locations (scale or chorochromatic maps), or connections (tree diagrams, mind maps, flow charts) — and that the visualization follows basic graphical-perception conventions (simple, relevant, clearly defined, visually salient, and consistent with standard chart-reading conventions). This requirement extends the existing expert-knowledge-trap / audience-appropriate dashboard requirement with a distinct concern: whether the chosen chart *type* fits the data, not whether the displayed complexity fits the audience's expertise.

#### Scenario: Pie chart used for a time-series trend
- **WHEN** the reviewed evidence shows a pie chart used to represent a trend or connection between data points over time
- **THEN** the product skill flags a chart-type mismatch and recommends a visualization type appropriate to the underlying data category

### Requirement: Audience-calibrated visual polish
The product skill SHALL check whether the level of visual production polish (photographic quality, animation, decorative styling) matches the trust expectations of the specific, verified target audience for the reviewed product, rather than assuming that maximizing visual polish is always correct. When evidence indicates the target audience associates high polish with inflated cost, inauthenticity, or a mismatch with the product's actual value proposition (for example a wholesale/trade B2B audience), the skill SHALL flag excessive glossiness as a trust-undermining mismatch rather than a positive finding. When the target audience is not established in the evidence, the skill SHALL report this requirement as `NOT ASSESSABLE` rather than assuming either a consumer or specialist audience.

#### Scenario: Luxury-consumer styling applied to a trade wholesale platform
- **WHEN** the reviewed evidence is a B2B wholesale ordering platform styled with high-gloss, luxury-consumer visual treatment, and the evidence establishes that the target audience is professional trade buyers who read high polish as a sign of inflated margins
- **THEN** the product skill flags the visual-polish mismatch as a finding, distinct from a general aesthetic-usability observation, because the mismatch is specifically about audience-appropriate trust signaling

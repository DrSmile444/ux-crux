## Why

A sweep of Baymard Institute's published research (251 article slugs selected from 518 in its sitemap, opened and checked against the catalog) produced 61 gaps that survived a second pass on the full article text. Every rule is a property of a screen that a reviewer can check in a design, and applies to mobile and web interfaces; the e-commerce rules are the owner's third priority after mobile and web.

- **Covered, not duplicated (48 articles):** form labels, input formats and validation (`F01`, `F02`, `F05`, `F07`-`F09`, `F14`, `F16`, `F20`-`F25`); search and filters (`D01`-`D05`, `D07`-`D10`); navigation (`N15R`, `N16R`); image accessibility (`X01`, `X22`); line length (`C27`); spec sheets (`C41`); mobile install interstitials (`O15`); confirmation and accidental taps (`E05`, `T04`).
- **Gaps adopted (61 rules):** mobile navigation and homepage (`N27R`-`N30R`, `D13`, `F28`); back behaviour (`N31R`); autocomplete and list size (`D14`, `D15`); product images and thumbnails (`C44`, `C45`); carousels (`PA20`); forms and checkout (`F29`-`F38`, `CT04`, `C46`); overlays, chat, hit areas, account menu, filter lists (`S14`, `S15`, `A18R`, `N32R`, `D16`); custom dropdowns and text in images (`X27`, `X28`); order states, tracking, delivery and returns (`CT05`-`CT08`); product page content and lists (`C47`-`C56`); cart, category and review practices (`C57`-`C65`); filters, sorting, search and breadcrumbs (`D17`-`D23`); a slider amendment to `F27`.
- **Rejected or left out:** 46 articles that now redirect to a hub page and show no article body; opinion-only claims without a stated test (sticky banners, badge copy length, a 10% highlighting figure, mobile dropdown navigation, desktop width use); a sticky filter Apply button that conflicts with the checkout Apply rule; percentages and counts, which change when Baymard updates articles and are kept out of rule text.
- **Scoped out (32 articles):** benchmark roundups, industry verticals (SaaS, furniture, apparel-only, travel), augmented reality for furniture, site-seal surveys, research methods.
- **Verified but unassigned (for later):** a list-item attribute that shows the active filter or sort; linear checkout without repeated pages; brand, style and subtype as filters rather than categories; homepage breadth of product types.

## What Changes

- `usability`: new `N27R`-`N32R`, `D13`-`D23`, `F28`-`F38`, `S14`, `S15`, `A18R`; amendment to `F27`.
- `product`: new `C44`-`C65`.
- `trust`: new `CT04`-`CT08`.
- `accessibility`: new `X27`, `X28`.
- `psychology`: new `PA20`.
- `README.md`: Baymard research added to "Evidence base"; rule total 377 to 438.
- `CHANGELOG.md`: entry `0.1.32`. Version `0.1.31` to `0.1.32`; `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/usability`: added requirements for the new rules.
- `ux-crux/product`: added requirements for `C44`-`C65`.
- `ux-crux/trust`: added requirements for `CT04`-`CT08`.
- `ux-crux/accessibility`: added requirements for `X27`, `X28`.
- `ux-crux/psychology`: one added requirement (`PA20`).

## Impact

- `src/skills/{usability,product,trust,accessibility,psychology}/references/*.md`
- `README.md`, `CHANGELOG.md`, `package.json`
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new skill, schema or dependency change

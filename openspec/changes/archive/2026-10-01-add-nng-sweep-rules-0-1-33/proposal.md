## Why

A sweep of Nielsen Norman Group's published articles (1,196 slugs triaged from its sitemap, relevant ones opened in full and checked against the catalog) produced 141 gaps after merging duplicate drafts across ten reviewers. Every rule is a property of a screen, flow or text that a reviewer can check, and applies to mobile, web or e-commerce.

- **Covered, not duplicated (166 articles):** search and filters, forms and validation, checkout, navigation labels, tap targets, price transparency, reviews. Their sources were added as citations to existing rules.
- **Gaps adopted (141 rules):** overlays, menus, links and navigation; forms and system status; search; carts, promotions and listings; localisation; recommendations; video; content writing; transactional messages; cookie and policy pages; keyboard focus and alt text.
- **Rejected or left out:** Contextual claims of Minor severity; a default-selected radio rule that conflicts with `F21`; drafts that clash with `C09`, `C65`, `N25R` or `N31R` were narrowed or dropped.
- **Scoped out (821 articles):** history, essays, research methods, process, AI-product and voice/VR topics, industry verticals, roundups.

## What Changes

- `usability`: new `A19R`-`A31R`, `F39`-`F48`, `S16`-`S23`, `D24`-`D35`, `R08R`, `R09R`, `N33R`-`N56R`, `IE15`, `T10`, `L10`-`L15`, `VH05`-`VH10`; new file `references/web.md` (`N55R`, `N56R`).
- `product`: new `C66`-`C102`, `IA11`-`IA13`.
- `trust`: new `O20`-`O22`, `CT09`, `CT10`, `PR03`, `PR04`, `GW04`, `GW05`, `I07`.
- `accessibility`: new `X29`-`X35`.
- `psychology`: new `PA21`.
- `README.md`: NN/g research added to "Evidence base"; rule total 438 to 579.
- `CHANGELOG.md`: entry `0.1.33`. Version `0.1.32` to `0.1.33`; `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/usability`: added requirements for the new rules.
- `ux-crux/product`: added requirements for `C66`-`C102`, `IA11`-`IA13`.
- `ux-crux/trust`: added requirements for the new trust rules.
- `ux-crux/accessibility`: added requirements for `X29`-`X35`.
- `ux-crux/psychology`: one added requirement (`PA21`).

## Impact

- `src/skills/{usability,product,trust,accessibility,psychology}/references/*.md`, `src/skills/usability/SKILL.md`
- `README.md`, `CHANGELOG.md`, `package.json`
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No schema or dependency change

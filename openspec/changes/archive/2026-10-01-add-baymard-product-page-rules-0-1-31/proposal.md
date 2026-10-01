## Why

A third batch of ten YouTube videos (Baymard Institute, Flux Academy, uxpeak, DesignCourse, Jesse Showalter, DesignerUp, Relab Studios, UX TV, Saptarshi Prakash, Gus Mark) produced nine genuine gaps, almost all e-commerce product-page practices from Baymard Institute research. Each rule is a property of a screen that a reviewer can check in a design, and each applies to web and mobile alike.

- **Covered, not duplicated:** current-location marking (`N24R`); clear button labels (`C01`); clickable-looking elements (`PA06`, `A17R`); contrast over images (`X25`); restrained accent colour (`PA04`); first-use versus repeat-use screens (`P07`); order status and waiting (`PR01`, `S06`); visible size buttons (`F20`); guest use for the core task (`P06`, `O11`); ratings summary, product page core and comparison tables (`D11`, `C35`, `C36`).
- **Gaps adopted:** no horizontal tabs for main product-page sections (`C38`); an in-scale image, and a model for worn products (`C39`); price per unit (`C40`); grouped long spec sheets (`C41`); buyers' social-media images with attribution (`C42`); guest save and wishlist (`C43`); estimated shipping cost and a return-policy link on the product page (`CT03`); one gallery across reviewer images (`D12`); slider limits and label placement (`F27`).
- **Rejected or uncorroborated:** responding to negative reviews (a support process, not a screen property); right-aligned numbers, table header tint, row height, border weight, status chips and selected-row tint (no primary source opened); the "video lifts conversion 80%" and "76% buy more" figures (unopened, possibly misquoted); easy promo codes, distraction-free checkout, live chat (no source opened); red and green reserved for system states (no source); consistency of spec units and jargon tooltips (only secondary summaries seen); category-tile imagery, shadows, 2026 style trends (taste).
- **Scoped out:** portfolio reviews, lists of inspiration sites, course and tool promotion, career-level framing, form whitespace and illustration advice.

## What Changes

- `product`: new `C38`-`C43` in `references/core.md`.
- `trust`: new `CT03` in `references/core.md`.
- `usability`: new `D12`, `F27` in `references/core.md`.
- `README.md`: new sources in "Evidence base"; rule total 368 to 377.
- `CHANGELOG.md`: entry `0.1.31`. Version `0.1.30` to `0.1.31`; `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/product`: six added requirements.
- `ux-crux/trust`: one added requirement.
- `ux-crux/usability`: two added requirements.

## Impact

- `src/skills/product/references/core.md`, `src/skills/trust/references/core.md`, `src/skills/usability/references/core.md`, `src/skills/product/SKILL.md` and `src/skills/trust/SKILL.md` if their procedures list rule IDs
- `README.md`, `CHANGELOG.md`, `package.json`
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new skill, schema or dependency change

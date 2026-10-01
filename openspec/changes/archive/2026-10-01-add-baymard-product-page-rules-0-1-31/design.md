## Context

See `proposal.md` for covered, rejected and scoped-out items. Next-available IDs (verified by grep): `product` `C` ends at `C37`; `trust` `CT` ends at `CT02`; `usability` `D` ends at `D11` and `F` at `F26`. All six rules go in `core.md` files because none depends on one platform: Baymard tested desktop, mobile web and app flows, and every rule is a property visible in a design.

## Goals / Non-Goals

**Goals:** add nine rules, each worded to what its opened source supports, at evidence `Strong`.

**Non-Goals:** no change to the shared models; no `Expert practice` rule; no process or support-operations rules.

## Decisions

| File | ID | Rule | Source (opened) | Nearest rule and distinction |
|---|---|---|---|---|
| `product/core.md` | `C38` | Main product-page sections are not behind horizontal tabs | Baymard, Blackwood, 2018 (updated 2026) | `C35`: page contents, not layout |
| `product/core.md` | `C39` | At least one in-scale image; worn products on a model | Baymard, Holst, 2017 | `C19`: photography that informs |
| `product/core.md` | `C40` | Price per unit beside the package price | Baymard, Olah, 2023 | `C35`: price with charges |
| `product/core.md` | `C41` | Long spec sheets grouped into titled subsections | Baymard, Scott, 2018 | `C14`: copy precision |
| `product/core.md` | `C42` | Buyers' social-media images on the product page, with attribution | Baymard, Galante, 2024 | `PB06`: truthfulness of social proof |
| `product/core.md` | `C43` | Save, favourite and wishlist work for guests | Baymard, Scott, 2026 | `P06`: registration before value |
| `trust/core.md` | `CT03` | Estimated shipping cost and a return-policy link on the product page | Baymard, Holst, 2017; Baymard guideline #803 | `CT01`: fees disclosed early in a flow |
| `usability/core.md` | `D12` | One gallery across reviewer images | Baymard, Sousa, 2024 | `D11`: ratings summary |
| `usability/core.md` | `F27` | Sliders only for approximate values; exact values via text input; labels beside the thumb | NN/g, Harley, 2015 | `F18`: open-ended entry |

**Wording limits taken from the sources.**
- `C38` keeps Baymard's exception: horizontal tabs for subsections of one content category are acceptable when mobile needs no horizontal tab scrolling.
- `C41` states the grouping threshold only (about 20 specs); consistency of units and jargon tooltips were seen only in secondary summaries and are left out.
- `C42` follows Galante: product-specific images, source attribution, and a distinction between organic and incentivized posts; it does not require the feature for every product.
- `CT03` takes the return-policy guideline from its public headline; the full guideline is behind Baymard Premium.

**Count rationale.** Nine rules from one research body (Baymard) plus one NN/g article; each has a distinct mechanism, so none is consolidated except shipping and returns in `CT03`, which share one mechanism: purchase-risk information at the decision point.

## Risks / Trade-offs

- Baymard percentages change as articles are updated; rules carry no percentages.
- `C42` can encourage unlabelled incentivized posts; the rule requires the distinction.

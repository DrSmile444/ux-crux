## Context

See `proposal.md` for covered, rejected and scoped-out items. This design fixes rule placement, IDs and evidence levels.

Next-available IDs (verified by grep before assignment; a prefix numbers across all files of its domain):
- `trust`: `O` family ends at `O18`, `CT` at `CT01`.
- `accessibility`: `X` family ends at `X24` (`X16`, `X04`, `X05` are in `mobile.md`).
- `usability`: `R` ends at `R06R`, `D` at `D09`, `N` at `N24R`, `L` at `L08` (`mobile.md`).
- `product`: `C` ends at `C34`.
- `psychology`: `PA` ends at `PA18`.

## Goals / Non-Goals

**Goals:**
- Add fourteen rules, each worded to what its opened source supports.
- Keep every rule's evidence at `Strong` or `Platform contract`; no `Expert practice` rule is added.

**Non-Goals:**
- No change to the shared evidence, severity or report models.
- No relabelling of existing rules.
- All six skills remain model-invocable.

## Decisions

| File | ID | Rule | Evidence | Source (opened) | Nearest rule and distinction |
|---|---|---|---|---|---|
| `trust/references/core.md` | `O19` | Trial terms (duration, what stops being accessible, later charges) stated before the trial starts | Strong | Apple App Review Guidelines 3.1.1, 3.1.2; ROSCA, 15 U.S.C. §8403 | `O14`: payment-entry timing and conversion notice; `O19`: terms before start |
| `trust/references/core.md` | `CT02` | A struck-through "was" price is a genuine former price | Strong | FTC, 16 CFR 233.1 | `PB03`: anchors must not hide total cost; `CT02`: authenticity of the reference price |
| `accessibility/references/core.md` | `X25` | Text and icons over images keep contrast on the worst-case region | Strong | WCAG 2.2 SC 1.4.3 (failure F83), SC 1.4.11 | `X03`: contrast of a flat pair |
| `accessibility/references/mobile.md` | `X26` | iOS text at 17 pt default, 11 pt minimum; no ultralight, thin or light weights at small sizes | Platform contract | Apple HIG Typography | `X04`/`X05`: scaling; `X16`: adverse conditions |
| `usability/references/core.md` | `R07R` | UI motion purposeful, brief (about 100-500 ms), eased, optional | Strong | NN/g Laubheimer 2020; Apple HIG Motion | `R01R`/`R06R`: response time, not animation |
| `usability/references/core.md` | `D10` | Load-more, not infinite scroll, for goal-directed lists and pages with footer content | Strong | NN/g Neusesser 2022 | `D05`/`D08`: filters; `D10`: loading pattern |
| `usability/references/core.md` | `D11` | Ratings distribution summary: graphical, filter-capable, expanded by default, hidden below six ratings | Strong | Baymard Scott 2017 | `D06`: compared parameters |
| `usability/references/mobile.md` | `N25R` | iOS sheets: scoped task, grabber when resizable, swipe to dismiss, one at a time, Cancel/Done pairing | Platform contract | Apple HIG Sheets | `N02R`: tab bars |
| `usability/references/mobile.md` | `N26R` | iOS tab bar stays visible; tabs are not hidden or disabled | Platform contract | Apple HIG Tab bars | `N02R`: what a tab bar represents |
| `usability/references/mobile.md` | `L09` | Dark Mode: system base and elevated backgrounds, softened white image backgrounds, contrast at least 4.5:1 | Platform contract | Apple HIG Dark Mode | `L05`: legibility across appearances |
| `product/references/core.md` | `C35` | Product page carries the core elements | Strong | NN/g Sherwin 2019 | `C19`: photography informing decisions |
| `product/references/core.md` | `C36` | Comparison table: up to five items, consistent attributes, differences visible | Strong | NN/g Moran & Dykes 2024 | `D06`: compared parameters in one list |
| `product/references/core.md` | `C37` | Mobile product list shows all colour variants as swatches | Strong | Baymard Scott 2023 | `C35`: product page, not list |
| `psychology/references/attention.md` | `PA19` | Bar chart value axis starts at zero | Strong | Yang, Vargas Restrepo, Stanley & Marsh 2021 | `PA18`: encoding accuracy |

**Evidence labels.** Rules resting on Apple HIG pages use the catalog's existing `Platform contract` label, as the neighbouring `N02R` and `L05` do. Rules resting on NN/g, Baymard, standards and peer-reviewed studies use `Strong`.

**Wording limits taken from the sources.**
- `O19` cites the statute for material terms before billing information; the FTC Negative Option rule is not cited because the Eighth Circuit vacated it on 2025-07-08.
- `CT02` follows the regulation's "actual, bona fide price offered on a regular basis for a reasonably substantial period"; price history is not visible in a screenshot, so the rule reports `NOT ASSESSABLE` unless the evidence shows the contradiction.
- `R07R` states Laubheimer's range as guidance, not a hard limit; HIG supplies "avoid motion on frequent interactions" and "let people cancel motion".
- `D10` follows NN/g's condition: infinite scroll suits homogeneous items browsed without a goal; it does not suit find, compare or footer-dependent pages.
- `D11` hides the summary at five or fewer ratings, per Baymard.
- `PA19` applies to bar charts, where length encodes value; it does not apply to line charts or to a labelled axis break.

**Citation-only edits.** `A01R` gains Baymard's guideline that the main add-to-cart control uses a style not used on other buttons; `N08R` gains NN/g Harley, "Icon Usability" (2014), whose findings are that a visible label should accompany an icon and that few icons are universal.

**Count rationale.** Fourteen rules across five domains: two batches of sources, 23 videos in total, each rule with a distinct mechanism, so none is consolidated.

## Risks / Trade-offs

- Several sources are Apple HIG pages that Apple revises. Mitigation: wording follows the page as opened on 2026-10-01 and avoids numeric details beyond those quoted.
- `D10` and `PA19` could read as universal bans. Mitigation: each rule states its non-applicable condition.

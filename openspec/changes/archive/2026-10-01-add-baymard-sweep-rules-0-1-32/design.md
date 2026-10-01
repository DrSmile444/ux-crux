## Context

See `proposal.md` for sources, covered items and rejections. This design fixes placement, IDs and evidence levels. IDs were verified free by grep before assignment; a prefix numbers across all files of its domain.

## Goals / Non-Goals

**Goals:** add 61 rules, each worded to what the full article text supports and carrying a nearest-rule distinction, a non-applicable condition and `NOT ASSESSABLE` guidance.

**Non-Goals:** no change to the shared models; no `Expert practice` rule; no process or support-operations rules; no percentages or counts in rule text (item-count ranges in `D14` and `D15` are the exception because the rules cannot be assessed without them).

## Decisions

| Group | IDs | File | Source |
|---|---|---|---|
| Mobile navigation and forms | `N27R`-`N30R`, `F28` | `usability/references/mobile.md` | Baymard (Scott, Holst, Collins) |
| Back, search, autocomplete, list size | `N31R`, `D13`-`D15` | `usability/references/core.md` | Baymard (Holst, Crowley, Collins) |
| Forms and checkout | `F29`-`F38` | `usability/references/core.md` | Baymard (Holst, Scott, Olah and others) |
| Overlays, chat, hit areas, account menu, filter lists | `S14`, `S15`, `A18R`, `N32R`, `D16` | `usability/references/core.md` | Baymard |
| Filters, sorting, search, breadcrumbs | `D17`-`D23` | `usability/references/core.md` | Baymard (Olah, Crowley, Scott, Sousa, Holst) |
| Product images, page content and lists | `C44`-`C56` | `product/references/core.md` | Baymard |
| Cart, category, comparison and review practices | `C57`-`C65`, `C46` | `product/references/core.md` | Baymard |
| Trust: payment cues, orders, delivery, returns | `CT04`-`CT08` | `trust/references/core.md` | Baymard |
| Accessibility | `X27`, `X28` | `accessibility/references/core.md` | Baymard |
| Carousels | `PA20` | `psychology/references/attention.md` | Baymard |

**Evidence.** `Strong` when the article reports Baymard's own usability-test finding; `Contextual` for `X28` and `F31`, whose articles are guideline or benchmark based.

**Verification.** Each rule was checked on the full article text by a second pass; claims that did not survive were removed from the rule (for example a "result counts" clause, "relevance" as a sort type, "text is HTML" for carousels).

**Consolidation.** Rules combine related claims of one mechanism (for example `D18`: which filters exist and where they sit; `C56`: list-item information design). The sources for `N29R`, `N31R`, `D14`, `C44`, `C45`, `CT06`-`CT08` and `D18` name more than one article; they may be split in a later release if a finer grain is needed.

**Amendment.** `F27` gains a clause on non-linear scales, handle shapes, no track click for dual sliders and a text fallback (Baymard, Holst, "Improve Form Slider UX With These 5 Requirements for Slider Interfaces", 2015).

## Risks / Trade-offs

- Baymard updates articles and percentages; the rules carry none.
- Some articles are old (2010-2015). Their rules rest on usability-test findings that still hold, but `NOT ASSESSABLE` guidance covers evidence the review cannot see.
- `CT04` states a truthfulness condition that is the catalog's own constraint, not a Baymard finding.

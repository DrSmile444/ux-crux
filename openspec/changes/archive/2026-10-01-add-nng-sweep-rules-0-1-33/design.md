## Context

See `proposal.md` for sources, covered items and rejections. This design fixes placement, IDs and evidence levels. IDs were verified free by grep before assignment; a prefix numbers across all files of its domain.

## Goals / Non-Goals

**Goals:** add 141 rules, each worded to what the full article text supports and carrying a nearest-rule distinction, a non-applicable condition and `NOT ASSESSABLE` guidance.

**Non-Goals:** no change to the shared models; no `Expert practice` rule; no process or research-method rules; no percentages in rule text.

## Decisions

| Group | IDs | File |
|---|---|---|
| Overlays, menus, controls, forms, status, search, scrolling, navigation | `A19R`-`A31R`, `F39`-`F47`, `S16`-`S23`, `D24`-`D33`, `R08R`, `R09R`, `N33R`-`N50R`, `IE15` | `usability/references/core.md` |
| Mobile overlays, navigation, forms, filters, carousels, layout | `N51R`-`N54R`, `F48`, `D34`, `D35`, `T10`, `L10`-`L15` | `usability/references/mobile.md` |
| Page-end, sideways content, hero, subheadings, ordered values, zigzag | `VH05`-`VH10` | `usability/references/visual-hierarchy.md` |
| Hover menus and hover-revealed content | `N55R`, `N56R` | `usability/references/web.md` (new) |
| Commerce, localisation, recommendations, video, writing | `C66`-`C96` | `product/references/core.md` |
| Text-heavy web content | `C97`-`C102` | `product/references/web.md` |
| Navigation structure | `IA11`-`IA13` | `product/references/information-architecture.md` |
| Cookie and policy, cost, transactional messages, About and Contact | `O20`-`O22`, `CT09`, `CT10`, `PR03`, `PR04`, `GW04`, `GW05` | `trust/references/core.md` |
| Notification channel by urgency | `I07` | `trust/references/mobile.md` |
| Keyboard focus, alt text, targets | `X29`-`X34` / `X35` | `accessibility/references/core.md` / `mobile.md` |
| Ads separate from needed content | `PA21` | `psychology/references/attention.md` |

**Web file.** Hover-dependent rules need a hover-capable pointer, so they live in a new `usability/references/web.md`, modeled on `product/references/web.md`; touch-only evidence reports them not applicable. The `usability` SKILL.md procedure and reference list name the file.

**Evidence.** `Strong` for NN/g's own reported test findings; `Contextual` where the guidance depends on site type, task or audience. Merged rules take the lowest level among their sources.

**Verification.** Reviewers opened full article text. Merge steps removed cross-reviewer duplicates and rules already stated in the catalog; tension with `C09`, `C65`, `N25R`, `N31R` and `F21` was resolved by narrowing or dropping the new rule.

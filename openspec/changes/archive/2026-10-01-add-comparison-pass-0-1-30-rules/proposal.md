## Why

Two batches of comparison passes (nine and fourteen YouTube videos on paywalls, ecommerce redesigns, iOS UI, UX laws, onboarding, gamification and SaaS design) produced fourteen genuine gaps and two citation additions. Every rule below stands on a primary source opened during the pass.

- **Covered, not duplicated:** free-trial notice and cancellation parity (`O14`, `PT04`); fake urgency and scarcity (`PB06`-`PB08`); streaks, variable rewards and leaderboards (`PB11`, `PB12`, `PG02`); icon-only controls (`N08R`); small option sets as visible controls (`F20`); input-format tolerance (`F05`); autofill (`F24`, `F25`); response-time thresholds and skeletons (`R01R`, `R06R`, `S03`); action feedback (`S01`); empty states (`C04`, `S06`); Gestalt grouping (`PA05`-`PA07`); aesthetic-usability (`V01`, `PE06`); touch targets (`T01`, `T02`); computed button outcome (`C24`); hover-only content (`X17`).
- **Gaps adopted:** trial terms before a trial starts (`O19`); genuine former price (`CT02`); contrast of text and icons over images (`X25`); iOS type size and weight (`X26`); purposeful brief motion (`R07R`); load-more versus infinite scroll (`D10`); ratings distribution summary (`D11`); iOS sheets (`N25R`); iOS tab bar visibility (`N26R`); Dark Mode layering and contrast (`L09`); product page core elements (`C35`); comparison tables (`C36`); colour swatches in mobile product lists (`C37`); zero baseline for bar charts (`PA19`).
- **Citation additions:** Baymard guideline on a distinct add-to-cart style on `A01R`; NN/g "Icon Usability" on `N08R`.
- **Rejected or uncorroborated:** price ranges anchoring on the high end, "round numbers feel fake", "evaluative ease" (no primary source); a premium-lock badge before click (only blog sources); removing swipe-hint arrows (conflicts with gesture discoverability rules); gradients and shadows as beginner markers (taste); emoji as icons and rounded bar tops (no primary source); a spacing scale and optical corrections (no authoritative source opened); review-summary and save-and-resume onboarding steps (no source opened); Miller's 7±2 (Cowan 2001 reports about four); preselected subscription cards (a default needing ethics review); company-reported figures for Strava, Peloton, League of Legends, Opal and Blinkist (no primary data).
- **Scoped out:** A/B-test methodology and trial-length experiments, vendor promotion, course advertising, "levels of UX" career framing, design-process steps, Parkinson/Pareto/Occam principles, landing-page graphics.

## What Changes

- `trust`: new `O19`, `CT02`.
- `accessibility`: new `X25` (`core.md`), `X26` (`mobile.md`).
- `usability`: new `R07R`, `D10`, `D11` (`core.md`); `N25R`, `N26R`, `L09` (`mobile.md`).
- `product`: new `C35`, `C36`, `C37` (`core.md`).
- `psychology`: new `PA19` (`attention.md`).
- Citation additions on `A01R` and `N08R`.
- `README.md`: add the new sources to "Evidence base"; rule total 354 to 368.
- `CHANGELOG.md`: entry `0.1.30`. Version `0.1.29` to `0.1.30`; generated `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/trust`: two added requirements (`O19`, `CT02`).
- `ux-crux/accessibility`: two added requirements (`X25`, `X26`).
- `ux-crux/usability`: six added requirements (`R07R`, `D10`, `D11`, `N25R`, `N26R`, `L09`).
- `ux-crux/product`: three added requirements (`C35`, `C36`, `C37`).
- `ux-crux/psychology`: one added requirement (`PA19`).

## Impact

- `src/skills/trust/references/core.md`, `src/skills/accessibility/references/core.md` and `mobile.md`, `src/skills/usability/references/core.md` and `mobile.md`, `src/skills/product/references/core.md`, `src/skills/psychology/references/attention.md`
- Applying prose and `SKILL.md` procedure lists that enumerate rule IDs
- `README.md`, `CHANGELOG.md`, `package.json`
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new skill, schema or dependency change

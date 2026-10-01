## Why

A comparison pass against the uxpeak video "The UX Psychology Behind Apps People Can't Stop Using" (six principles: smart defaults, goal-gradient/endowed progress, reciprocity, IKEA effect, loss framing, contrast effect) found no missing rule. The pass adds two source-backed refinements to existing text and records what was not adopted.

- **Covered, not duplicated:** smart defaults (`F21`, `PB01`, `PB02`); a button that states its outcome (`C24`, `A02R`); goal-gradient and head-start progress (`PM09`, `PM10`); value before sign-up (`PB09`, `PT01`, `O11`); ownership and endowment (`PB05`); loss framing (`PB04`); price anchoring and contrast (`PB03`, `CT01`); choice overload and the jam study (`ethics.md`).
- **Refinement 1 — loss aversion:** the `ethics.md` row "Loss aversion / anchoring" does not state that the strength of loss aversion varies. Mrkva, Johnson, Gächter & Herrmann (2020) show it varies with knowledge, experience and age, so "losses weigh twice as much" and "threat framing always wins" stay out of the catalog as universal rules.
- **Refinement 2 — IKEA effect:** `PB05` cites the endowment effect only. Norton, Mochon & Ariely (2012) add the boundary condition that self-made items gain value only when the task is completed.
- **Rejected:** the "70-90% never change defaults" figure and the "free samples raise purchases up to 2000%" figure (no source); "even fake progress creates momentum" (conflicts with `PM07` and `PM09`); "threat wins every time"; labelling the jam study as decision fatigue (a different construct).
- **Not cited:** Gal & Rucker (2018) on loss aversion and Cialdini on reciprocity. The papers could not be opened during the pass.
- **Scoped out:** advertising for a design-reference service and a course.

## What Changes

- `psychology` (`references/ethics.md`): extend the "Loss aversion / anchoring" row with the variability finding and its source.
- `psychology` (`references/behavioral-economics.md`): add the IKEA-effect source and its completion condition to the `PB05` Sources cell.
- `README.md`: add Norton, Mochon & Ariely (2012) and Mrkva et al. (2020) to "Evidence base". The rule count stays 347.
- `CHANGELOG.md`: new `0.1.28` entry. Version bump `0.1.27` to `0.1.28`; generated `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
(none) — no requirement text changes, so the change declares `skip_specs: true`.

## Impact

- `src/skills/psychology/references/ethics.md`, `src/skills/psychology/references/behavioral-economics.md`
- `README.md`, `CHANGELOG.md`, `package.json` (version)
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new rule, skill, schema or dependency change

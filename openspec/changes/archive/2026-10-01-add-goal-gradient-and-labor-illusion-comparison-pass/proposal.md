## Why

A comparison pass against Wyatt Feaster's video "The psychology trick that makes any app feel 10x better" (five behavioral principles: goal-gradient effect, Peak-End, labor illusion, Von Restorff, choice overload) found two genuine gaps and confirmed three principles already covered. The video cites no studies, so each rule traces to the primary research behind the principle.

- **Covered, not duplicated:** Peak-End (`PE02`-`PE04`, `ethics.md` correction table), Von Restorff / isolation (`PA04`, `ethics.md`), choice overload (`ethics.md` records the contested Scheibehenne, Greifeneder & Todd meta-analysis, so the video's unqualified claim is not adopted).
- **Gap 1 — goal-gradient framing:** `PM07` requires truthful progress, `PM09` covers head-start framing and `S04` covers indicator type, but no rule asks that progress toward a real goal be shown as concrete remaining distance ("5 of 7 steps", "about 3 minutes left") rather than an abstract instruction.
- **Gap 2 — labor illusion:** `E08` permits a perceptible checking step only for high-stakes actions and flags artificial delay elsewhere. No rule covers the legitimate half of the mechanism: when a wait is real, showing the work being done raises perceived value (Buell & Norton 2011).
- **Scoped out / rejected:** the author's consulting call-to-action; the unsourced claim that onboarding with progress bars has higher completion (no figure or study given); the advice to pad instant tasks with extra waiting, which conflicts with `E08` and `PM07` and has no support in the cited research (the studies manipulate real, labelled work).

## What Changes

- `psychology` (`references/motivation.md`): new `PM10` — goal-gradient progress framing.
- `psychology` (`references/behavioral-economics.md`): new `PB15` — operational transparency for genuine waits (labor illusion), bounded by `E08`, `PM07`, `S13`.
- `src/skills/psychology/` applying-prose for both files updated.
- `README.md`: add Kivetz, Urminsky & Zheng (2006) and Buell & Norton (2011) to "Evidence base"; update the rule count (+2).
- `CHANGELOG.md`: new `0.1.27` entry.
- Version bump `0.1.26` → `0.1.27`; generated `skills/` and `plugin/` rebuilt.

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/psychology`: two added requirements (goal-gradient progress framing; operational transparency for genuine waits).

## Impact

- `src/skills/psychology/references/motivation.md`, `src/skills/psychology/references/behavioral-economics.md`
- `README.md`, `CHANGELOG.md`, `package.json` (version)
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new skill, schema or dependency change

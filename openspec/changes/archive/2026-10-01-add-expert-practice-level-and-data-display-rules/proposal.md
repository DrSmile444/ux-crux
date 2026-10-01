## Why

A comparison pass over Stephen Few's *Information Dashboard Design* (O'Reilly, 2006), together with a set of form, typography and readability claims, produced seven genuine gaps and a second finding about how the catalog labels its sources.

- **Source labelling.** The `Evidence` column of a rule mixes two meanings of `Contextual`: "depends on context" and "the source is a practitioner's opinion". Book-only rules already ship under `Strong` or `Contextual` with no marker. A named level for a published author's stated practice, with a lower report confidence, makes that difference visible.
- **Covered, not duplicated:** Tufte's data-ink argument and decoration that competes with data (`VH03`); muted palette with vivid colour reserved for exceptions (`PA04`, `X02`); no chart-type variety for its own sake (`A17R`); left-aligned body text (`C10`) and line length (`C27`); touch-target size and spacing (`T01`, `T02`, `T04`); empty states (`C04`).
- **Gaps adopted:** field width as a format cue (`F26`); text-spacing resilience (`X23`); near-black text on off-white for long reading (`X24`); perceptual accuracy of quantity encodings (`PA18`); metric context, displayed precision, and display-medium fit (`C32`, `C33`, `C34`).
- **Rejected after checking:** Few's "three to nine chunks" single-screen claim (Cowan 2001 reports about four); Few's blanket rejection of pie charts (Spence & Lewandowsky 1991 found little to choose between pie and bar); bullet-graph superiority (an unquantified test of the author's); the five-expressions limit and the colour-blindness percentages (no source in the book); the top-left emphasis map (the author's own experience); "values dominant over labels" (the book does not state it); icons in dropdown menus (NN/g requires always-visible labels); a universal "pure black on white strains the eyes" claim (research supports dark-on-light polarity, not black-versus-grey).
- **Scoped out:** dashboard role taxonomy, single-prototype testing, treemaps and box plots, vendor promotion.

## What Changes

- `src/shared/evidence-model.md`: new "Rule source strength" section defining `Expert practice`.
- `src/shared/severity-model.md`: a ceiling clause for findings from `Expert practice` rules.
- `usability`: new `F26`. `accessibility`: new `X23`, `X24`. `psychology`: new `PA18`. `product`: new `C32`, `C33`, `C34` (all `Expert practice`).
- Citation additions: WCAG 2.2 SC 1.4.8 on `C10` and `C27`; Tufte (via Few) on `VH03`.
- `README.md`: add Few, Cleveland & McGill and Baymard (Holst) to "Evidence base"; rule total 347 to 354.
- `CHANGELOG.md`: entry `0.1.29`. Version `0.1.28` to `0.1.29`; generated `skills/` and `plugin/` rebuilt.
- A GitHub issue tracks the later re-audit of existing book-only rules (created at ship time).

## Capabilities

### New Capabilities
(none)

### Modified Capabilities
- `ux-crux/usability`: one added requirement (`F26`).
- `ux-crux/accessibility`: two added requirements (`X23`, `X24`).
- `ux-crux/psychology`: one added requirement (`PA18`).
- `ux-crux/product`: three added requirements (`C32`, `C33`, `C34`).
- `ux-crux/review`: one added requirement (reporting of `Expert practice` findings).

## Impact

- `src/shared/evidence-model.md`, `src/shared/severity-model.md`
- `src/skills/usability/references/core.md`, `src/skills/accessibility/references/core.md`, `src/skills/psychology/references/attention.md`, `src/skills/product/references/core.md`, `src/skills/product/references/web.md`, `src/skills/usability/references/visual-hierarchy.md`
- `README.md`, `CHANGELOG.md`, `package.json`
- Generated `skills/` and `plugin/` regenerated via `npm run build`
- No new skill, schema or dependency change

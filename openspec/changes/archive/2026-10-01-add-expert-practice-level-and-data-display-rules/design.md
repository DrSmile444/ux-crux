## Context

See `proposal.md` for sources, covered items and rejections. This design fixes the new source level, rule placement and IDs, and the reporting behavior.

Next-available IDs (verified by grep before assignment):
- `usability`: `F` family ends at `F25` (`F24` is in `mobile.md`), so `F26` goes in `references/core.md`.
- `accessibility`: `X` family ends at `X22`, so `X23` and `X24` go in `references/core.md`.
- `psychology`: `PA` family ends at `PA17` in `references/attention.md`, so `PA18`.
- `product`: `C` family ends at `C31`, so `C32`, `C33`, `C34` go in `references/core.md`.

## Goals / Non-Goals

**Goals:**
- Name a rule-source level for a published author's stated practice and define how findings from it are reported.
- Add seven rules, each worded to what its source supports.

**Non-Goals:**
- No relabelling of existing rules (a GitHub issue tracks that audit).
- No new evidence status, severity level or confidence scale for findings. The finding vocabulary stays as defined in `src/shared/`.
- All six skills remain model-invocable.

## Decisions

| File | ID | Rule | Evidence | Nearest rule and distinction |
|---|---|---|---|---|
| `usability/references/core.md` | `F26` | Field width signals expected input length | Strong | `F23` chunks long identifiers; `F26` is width as a format cue |
| `accessibility/references/core.md` | `X23` | Survives user text-spacing overrides | Strong | `X04`/`X05` cover size; `X23` covers spacing |
| `accessibility/references/core.md` | `X24` | Long-form text avoids maximum-contrast pairing | Contextual | `X03` sets the contrast floor; `X24` limits the ceiling for reading comfort |
| `psychology/references/attention.md` | `PA18` | Quantities use position or length, not angle, area or colour intensity | Strong | `PA` rules cover grouping; `PA18` covers encoding accuracy |
| `product/references/core.md` | `C32` | Metric carries comparison context | Expert practice | `C22` chart type; `C25` blended composites |
| `product/references/core.md` | `C33` | Displayed precision matches the decision | Expert practice | `C14` concision versus precision of copy |
| `product/references/core.md` | `C34` | Display medium fits the task; gauges, pseudo-3D and radar avoided | Expert practice | `C22` match to data category |

**The `Expert practice` level.** Defined in `evidence-model.md` as a new "Rule source strength" section: a rule whose source is a published book by a named author with no cited study, adopted only after a corroboration search found nothing contradicting it. Findings from such a rule report as `RISK`, confidence `Low`, severity at most `moderate`; the Sources cell states "author's stated practice; no study cited" with the year. Videos, articles, e-books and blogs do not qualify; they need independent corroboration. The level describes the rule's source; the finding vocabulary (status, severity, confidence) is unchanged.

**Why `PA18` is `Strong` and `C32`-`C34` are `Expert practice`.** Cleveland & McGill measured judgment accuracy of elementary perceptual tasks. Few's context, precision and medium advice cites no study. Radar charts and pseudo-3D are placed in `C34` because the ranking covers angle and area but does not test those chart forms.

**`X24` stays `Contextual`.** The basis is organization guidance (British Dyslexia Association, quoted by Dyslexia Scotland) and NN/g's summary of polarity research; the research does not compare black with dark grey. The conflict with maximum-contrast advice is stated in the rule and the rule cannot override `X03`.

**Citation-only edits.** `C10` and `C27` gain WCAG 2.2 SC 1.4.8; `VH03` gains Tufte (1983) via Few. Rule text is unchanged.

**Rejected claims stay out of the catalog.** Pie charts (Spence & Lewandowsky 1991) and "three to nine chunks" (Cowan 2001) are contradicted by sources opened during the pass.

**Count rationale.** Seven rules across five domains: the source mix (one book plus several guideline claims) is dense, and each rule has a distinct mechanism, so none is consolidated.

## Risks / Trade-offs

- A reader could treat `Expert practice` rules as equal to `Strong` ones. Mitigation: reduced confidence and the severity ceiling in the reporting contract.
- Existing book-only rules keep their old labels until the audit issue is worked. Mitigation: the issue is created at ship time.
- Few wrote for desktop screens in 2006. Mitigation: the product rules name the year and the `NOT ASSESSABLE` guidance covers evidence that does not show the dashboard.

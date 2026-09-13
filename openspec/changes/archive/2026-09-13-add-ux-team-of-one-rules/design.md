## Context

See `proposal.md` for motivation. Two content edits land in two already-existing reference files: `src/skills/product/references/core.md` and `src/skills/review/references/review-model.md`. Neither requires a new skill, a new reference file, or a change to `src/shared/*`. `product/core.md` already uses per-section rule-ID prefixes (`P0x` for purpose & task, `C0x` for content); `review-model.md` uses a single `V0x` sequence for validation methodology. New rule content takes the next unused ID in the relevant scheme rather than a cross-file numbering scheme, consistent with the trust/`E08` and psychology/`PA09` precedent in `add-laws-of-ux-gap-rules`.

## Goals / Non-Goals

**Goals:**
- Close the two narrow, verified gaps identified during the book-comparison pass, each attributed to a named, independently checkable primary source (Rosenfeld/Morville/Arango, Donna Spencer, Jakob Nielsen/NN/g, Christine Perfetti/UIE, Edward de Bono) — never to the secondary book that surfaced the gap.
- Preserve the one-rule-ID-to-exactly-one-destination-file invariant: no rule ID duplicated or split across domains.
- Keep `product` and `review` model-invocable with no change to that default.

**Non-Goals:**
- No wholesale import of the book's other ~20 extracted items (UX Value Loop, "Valuable MVP," Moments of Truth/Side Doors, cumulative-ecosystem framing, rework-savings statistics, Kano model, elevator-pitch template) — each is either the authors' own unattributed framework or belongs to product-strategy/process territory outside this project's screen/flow-review scope, and stays deferred per `openspec/config.yaml`.
- No new skill, no new reference file (e.g. no `web.md`), no change to `src/shared/evidence-model.md`, `severity-model.md`, or `report-contract.md`.
- No change to `usability`, `psychology`, `accessibility`, or `trust`.

## Decisions

1. **IA rule lives in `product/core.md` as a new "Information architecture" subsection with its own `IA0x` prefix, not folded into `P0x`.** The existing `P0x` rules cover primary-goal clarity and task efficiency; IA (navigation/labeling/categorization against user/content/context) is a distinct, separately-testable concern the file's own title already anticipates ("Product: goal, value, information architecture, content") without prior rule content. A new prefix keeps it independently citable, matching how `mobile.md`/other domain files already separate concerns by prefix rather than overloading `P0x`.
2. **Tree testing is folded into the new IA requirement's text, not given its own rule ID.** It is the recommended *validation technique* for the IA requirement, not a separately checkable property of the reviewed evidence — same relationship as `review-model.md`'s V01-V05 already have to the domain rules they qualify. Alternative considered: a standalone `review`-side rule recommending tree testing generically — rejected because tree testing only makes sense in service of an IA finding, which is `product`'s existing remit, not `review`'s cross-lens synthesis role.
3. **Five-Second Test and Black Hat Session become a new `V06` in `review-model.md`, not edits to `V05`.** `V05` already establishes "record uncertainty instead of inventing a violation" — the new content is additive behavior (name a concrete technique to close that uncertainty), not a change to what triggers `NOT ASSESSABLE`/`LIKELY`. A new ID keeps the two concerns (when to say "uncertain" vs. what to recommend once you have) independently citable, mirroring how the precedent change split the Doherty citation into `R01R`'s existing text only because it was the *same* claim at a different threshold — here the claims are genuinely different (evidentiary honesty vs. a follow-up technique), so a new ID is more consistent with that file's own `V05`/new-ID precedent than an edit would be.
4. **Nielsen's sample-size finding is a citation addition to the existing `V02`, not a new ID.** `V02` already reads "for each core flow, measure task success, error/recovery, time/effort, and qualitative confidence/satisfaction" — sample size is a parameter of *how* that measurement is carried out, not a new measurable property. This mirrors the precedent's `R01R` treatment (citation-level addition to an existing rule) rather than its `PA09`/`E08` treatment (new rule for a genuinely new failure mode).
5. **Sources cite the primary authors/orgs, never "Buley & Natoli" or the book title.** Per `openspec/config.yaml`'s standing rule, the targeted addition must be backed by a named, verifiable source regardless of which secondary text first surfaced it — so every new row/citation names Rosenfeld/Morville/Arango, Donna Spencer, Nielsen/NN/g, Perfetti/UIE, or de Bono directly, matching this project's existing citation style (named individuals, named orgs, or a specific named academic/industry source) rather than introducing a new "practitioner book" evidence tier.

## Risks / Trade-offs

- **[Risk]** A reviewer could over-apply the new IA requirement to screens where content volume/structure genuinely isn't visible from the evidence, inventing an IA violation. → **Mitigation**: the spec's third scenario requires `NOT ASSESSABLE` when business/technical context is missing, and the "how the product skill should apply these" text gets an explicit reminder alongside the existing P06/P07 missing-context guidance.
- **[Risk]** Recommending tree testing or a Five-Second Test could read as `review`/`product` requiring the user to go run separate research before trusting any finding, undermining the report's usefulness on its own. → **Mitigation**: both requirements are additive ("recommend X" alongside existing findings), not a precondition — the existing V01 rule ("heuristic review is prevalidation, not proof") already establishes this framing, so `V06` reads as a natural extension rather than a new caveat.
- **[Trade-off]** Splitting this into one change touching two files (`product/core.md`, `review-model.md`) rather than two separate changes keeps one coherent proposal/design/spec set for a single research-comparison pass, at the cost of a slightly less atomic review than a one-file-per-change split would give.

## Migration Plan

Content-only change to Markdown source; no data migration. Rollout is: edit `src/skills/**` → `npm run build` (regenerates `skills/` and `plugin/skills/`) → `npm run sync-version` → `npm run validate`. Rollback is a plain revert of the same commit(s); no runtime state to unwind.

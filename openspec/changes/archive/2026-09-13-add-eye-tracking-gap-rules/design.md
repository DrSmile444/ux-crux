## Context

See `proposal.md` for motivation. All edits land in reference files under `src/skills/<domain>/references/`, plus one new reference file and one `SKILL.md` pointer update. No new skill, no `src/shared/*` change, no spec delta (`skip_specs: true` — see proposal's Capabilities section for why).

Each touched reference file already uses a per-domain rule-ID scheme, and IDs are shared across a domain's `core.md`/`mobile.md` pair rather than restarting per file (for example `usability`'s `N`-series runs `N01R` in `core.md` through `N12R` in `mobile.md` with no gaps, and its `IE`-series similarly spans both files). New rules take the next unused ID in the relevant domain's own scheme:

| File | Existing IDs (max) | Next ID(s) used here |
|---|---|---|
| `usability/references/core.md` (Forms) | F01-F12 | F13, F14, F15, F16, F17 |
| `usability/references/core.md` (Navigation, shared with `mobile.md`) | N01R-N12R (no gaps) | N13R, N14R |
| `usability/references/core.md` (Search & discovery) | D01-D05 | D06 |
| `psychology/references/attention.md` | PA01-PA09 | PA10 |
| `product/references/core.md` (Purpose & task) | P01-P08 | P09 |
| `product/references/web.md` (new file, continues product's `C`-series) | C01-C06 in `core.md` | C07, C08, C09, C10, C11, C12 |

## Goals / Non-Goals

**Goals:**
- Close the accepted set of narrow, verified content gaps, each attributed to a named, checkable source — the published academic volume itself (see Decision 5), never the private local research-notes folder.
- Preserve the one-rule-ID-to-exactly-one-destination-file invariant: no ID is duplicated or split across domains.
- Keep every touched skill's default model-invocability unchanged (`usability`, `psychology`, `product` all stay model-invocable, no `disable-model-invocation`).
- Give the new `web.md` file the same shape and citation discipline as every existing reference file (rule table + "How the `<skill>` skill should apply these" section), so it reads as a natural extension, not a bolt-on.

**Non-Goals:**
- No new skill/domain (e-commerce, social-media, gaming, or an age/literacy-specific accessibility cluster) — deferred per the explore-session decision recorded in `proposal.md`.
- No import of the source material's research-methodology content (self-report bias, pupillometry/EDA/EEG, CTA-vs-RTA test protocols, I-TRAC data cleaning) — these describe how to run eye-tracking studies, not what a static-evidence review should check, and have no home in any existing skill's remit.
- No change to `accessibility`, `trust`, `review`, or `src/shared/*`.
- No re-litigating rules already covered (banner blindness/PA09, in-field placeholder/F01, inline field-level error/F07, touch targets/T01-T02) — verified not to overlap with anything below.

## Decisions

1. **Button-alignment, label-proximity, sample-data, double-banked, and cross-step-memory rules all live in `usability/core.md`'s Forms & input section (F13-F17), not a new section.** All five are about form completion ergonomics, the same remit F01-F12 already cover; they extend the existing table rather than fragmenting forms guidance across two places.

2. **Utility-nav placement and dropdown-ordering rules live in `usability/core.md`'s Navigation section (N13R-N14R), continuing the ID range already shared with `mobile.md`.** Both are platform-agnostic layout conventions (they apply identically on web and native), so they belong in `core.md`, not `mobile.md`; the shared numbering is preserved by starting at N13R (the next ID after `mobile.md`'s N12R) rather than restarting at N13 as if `core.md` had its own independent counter.

3. **Comparison-parameter proximity is a new rule (D06) in `usability/core.md`'s existing "Search & discovery" section, and that section's heading gains "& comparison" to reflect the broadened scope.** Rejected alternative: a new standalone section — a single rule doesn't warrant a new section, and comparison layouts (pricing tiers, flight/hotel search results, spec-comparison tables) are a natural extension of a section already about helping users evaluate a list of options, not a distinct concern.

4. **F-pattern/top-left scanning bias is a new rule (PA10) in `psychology/attention.md`, not in `usability` or `product`.** This is Gestalt/attention mechanics — what the visual system fixates on by default and why multi-column structuring redistributes those fixations — the same mechanism class as PA01 (hierarchy) and PA04 (deliberate contrast/isolation), which already live in this file. Rejected alternative: `product/web.md` alongside the other new text-scanning rules — rejected because those six rules (Decision 6) are actionable content-authoring rules ("write it this way"), while PA10 explains a perceptual mechanism a reviewer should recognize across any dense layout, matching this file's existing framing ("what a user's visual system groups, notices, and ignores automatically").

5. **Every new rule cites the published academic volume itself — `Romano Bergstrom, J. & Schall, A. (eds.), Eye Tracking in User Experience Design, Morgan Kaufmann/Elsevier (2014)` — by editors, title, publisher, and year, the same way this project already cites `Rosenfeld, Morville & Arango, Information Architecture for the Web and Beyond` (IA01) or `Doherty & Thadani, "The Economic Value of Rapid Response Time" (1982)` (R06R).** This is a real, independently purchasable, peer-reviewed edited academic volume with named chapter authors — a legitimate primary source in its own right, and a different thing entirely from the private, gitignored `local/` folder that this repo's `CLAUDE.md` forbids referencing (that folder holds one contributor's reading notes *about* the book; the book itself is citable exactly like any other named source already in this project's citation vocabulary). Where an independent, already-cited-in-this-repo secondary source also documents the same finding (Baymard's checkout-form research for F15's sample-data-copying pattern; NN/g's existing placeholder/label-placement guidance adjacent to F13/F14), cite both, mirroring how existing rows already stack an academic and a practitioner source.

6. **The six text-scanning/typography rules (inverted pyramid, front-loaded keywords, ALL-CAPS penalty, left-alignment primacy, digit numerals, image captions) form a new file, `product/references/web.md`, continuing the `C`-series (C07-C12) rather than extending `core.md`'s C01-C06 in place.** This project's own config context already anticipates "a future `web.md` addendum... per domain... without restructuring" — this is the first domain to actually need one, since these six rules only apply to text-heavy/web content and would otherwise roughly double `core.md`'s Content section with rules that don't apply to, say, a native mobile settings screen. Continuing the `C`-series (rather than starting a new prefix) matches the established convention of one shared ID range per concern-family spanning multiple files (see the `N`/`IE`/`T`/`L` series already spanning `usability/core.md` and `mobile.md`).

7. **PDP/cross-sell placement is a new rule (P09) in `product/core.md`'s Purpose & task section, scoped by an applicability note, not a new file or a new scenario in `openspec/specs/ux-crux/product/spec.md`.** It is a specific, citable instance of the same concern the existing "Primary goal and hierarchy check" requirement and P02 rule already state generically (primary content/action prioritized over secondary). Framing it with an explicit applicability note — "applies when reviewing a product-detail page built around one featured item; does not apply to browse/category/listing pages where recommendation modules are the primary content" — follows the exact pattern already used by P06 and P08, and avoids the over-application risk noted below without requiring a spec-level guard.

8. **The mobile-onboarding-popup citation upgrade touches only the existing folk-rule-guard table row text, no new ID.** Matches the precedent's Doherty-citation-upgrade pattern: the guard ("Always show onboarding" → default to no standalone onboarding) is already correct and already in `usability/core.md`; this only adds a second, concrete citation next to whatever it currently cites, giving reviewers a specific, quotable data point (a mobile instruction-popup study reporting near-zero fixation time and 100% task failure afterward) without duplicating the rule.

## Risks / Trade-offs

- **[Risk]** P09 (PDP cross-sell placement) could be over-applied to browse/category/listing pages where recommendation modules legitimately are the primary content, producing a false-positive finding. → **Mitigation**: the rule ships with an explicit applicability note (Decision 7) restricting it to single-featured-item product-detail pages, following the established P06/P08 pattern; no spec-level guard needed because the existing reference-file convention already carries this kind of scoping in prose.
- **[Risk]** F16 (double-banked *choices* fine vs. double-banked *questions* an anti-pattern) could be misread as banning any two-column form layout. → **Mitigation**: state the distinction explicitly in the rule text itself (as F09's required/optional distinction and A04R/A05R's reversible/irreversible distinction already do), rather than relying on a separate guard.
- **[Risk]** Introducing a sixth reference file across the six skills (five now have `core.md` + a second file; `product` now has three files) could make "which file does this rule belong to" less obvious for future contributors. → **Mitigation**: `product/SKILL.md`'s References section is updated in the same change to state exactly when `web.md` applies ("content-heavy or web-rendered pages"), mirroring how `usability/SKILL.md` already explains the `core.md`/`mobile.md` split.
- **[Trade-off]** Landing eleven new rule rows plus one new file in a single change (vs. splitting into two or three smaller changes) is a larger single review than either precedent gap-rules change, but keeps one coherent proposal/design pair for a single research-comparison pass instead of several near-duplicate change directories, matching the precedent's own stated trade-off reasoning.

## Migration Plan

Content-only change to Markdown source; no data migration. Rollout is: edit `src/skills/**` (including the new `product/references/web.md`) → `npm run build` (regenerates `skills/` and `plugin/skills/`) → `npm run sync-version` → `npm run validate`. Rollback is a plain revert of the same commit(s); no runtime state to unwind.

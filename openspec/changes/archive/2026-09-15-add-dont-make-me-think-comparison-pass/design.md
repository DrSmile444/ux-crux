## Context

See `proposal.md` — Why for the source and scoping discipline. This design fixes exact rule-ID placement across five files and one shared-model file, since several placement choices are not obvious from the proposal alone and getting them wrong would violate this repo's one-rule-ID-to-exactly-one-destination-file invariant.

Verified next-available rule IDs before assignment (via `grep -nE "^\| [A-Z]+[0-9]+ "` against each target file):
- `usability/references/core.md`: Navigation table ends at `N23R`; Search/discovery table ends at `D08`.
- `usability/references/visual-hierarchy.md`: ends at `VH03`.
- `usability/references/affordances.md`: ends at `AF05`.
- `accessibility/references/core.md`: ends at `X15`; `accessibility/references/mobile.md` separately uses `X16` (shared `X` numbering space spans both files).
- `trust/references/core.md`: uses several short prefixes per rule family (`O`, `CT`, `E`, `PR`, others) — no existing prefix fits the Goodwill-reservoir material, so this introduces a new `GW` prefix.
- `product/references/core.md`: ends at `C30`.
- `review/references/review-model.md`: validation-methodology table ends at `V08`.

## Goals / Non-Goals

**Goals:**
- Fix exact file + rule ID for every new requirement in the delta specs, so the apply phase has no open placement decisions left.
- Decide, and record the reasoning for, where genuinely cross-cutting concepts (hover-loss, the Trunk Test, the kayak-problem severity note) live, since each could plausibly fit more than one existing file.
- Keep the total new-rule count reviewable despite the source book being unusually rule-dense: consolidate Krug's 6-depletor/8-refill Goodwill taxonomy into 3 trust rules rather than proposing 14.

**Non-Goals:**
- No new skill, no new shared-model vocabulary (evidence status / severity levels stay exactly as defined in `src/shared/`).
- No change to `scripts/build.mjs`, `validate.mjs`, or any generation logic — this is content-only.

## Decisions

**Rule ID assignments (exact):**

| File | New ID(s) | Rule |
|---|---|---|
| `usability/references/visual-hierarchy.md` | `VH04` | Non-floating headings |
| `usability/references/core.md` (Navigation) | `N24R` | Multi-cue active-navigation-state |
| `usability/references/affordances.md` | `AF06` | Flat-design affordance risk |
| `usability/references/core.md` (Search/discovery) | `D09` | Uncluttered search box standard |
| `accessibility/references/core.md` | `X17`-`X22` | Hover-dependent affordances (X17), visited-link color (X18), ear-scanning front-loading (X19), skip-to-main-content link (X20), heading hierarchy (X21), informative-vs-decorative alt text (X22) |
| `trust/references/core.md` | `GW01`-`GW03` | Goodwill reservoir + depletors (GW01), rigid input-formatting rejection (GW02), goodwill refills (GW03) |
| `product/references/core.md` | `C31` | Tagline excellence criteria |
| `review/references/review-model.md` | `V09` | Trunk Test standing checklist |
| `src/shared/severity-model.md` | (none — prose only) | Kayak-problem severity clarification |

**Hover-dependent affordances live in `accessibility/references/core.md`, not `mobile.md`.** `mobile.md` is reserved for platform-specific *numeric minimums* (iOS 44pt vs. Android 48dp) per its own stated scope ("platform-specific counterparts to `core.md`'s universal WCAG rules"). Hover-loss is a universal principle — it affects touch, switch-access, and keyboard-only users alike, not just "mobile" — so it belongs in `core.md` alongside the other universal `X`-series rules, consistent with how `X06` (gesture-only functionality) already lives there rather than in `mobile.md`.

**The Trunk Test is a `review`-skill standing check (`V09`), not a `usability` navigation rule.** Its six questions are individually already covered by existing, more granular `usability` navigation rules (`N16R` breadcrumbs, `N19R` discoverability, `N20R`-`N22R` category structure) and `trust`/`product` identity rules. Its value is as a compact, holistic *synthesis* check specifically for interior/deep pages — the same role `V07`'s Cognitive Walkthrough already plays for task flows — not as a new atomic finding a single domain skill would report. Modeling it as `V09` keeps it consistent with `V07`/`V08`'s existing pattern (a standing pass alongside lens selection, `NOT ASSESSABLE` when its precondition — an interior page — is not met).

**The kayak-problem severity clarification goes in `src/shared/severity-model.md`, not `review/references/review-model.md`.** Severity is assigned by every domain skill on every finding, not only by `review` during synthesis (see `report-contract.md`'s shared model). A momentary, self-correcting slip should be scored lower regardless of which domain skill found it, so the clarification belongs in the shared file every skill already reads identically, alongside the existing Blocker/Major/Moderate/Minor definitions — not duplicated per-domain and not scoped to `review` alone. This is a clarification of how the existing four severity levels apply, not a fifth level or a parallel vocabulary (respecting the `specs` per-artifact rule against inventing a parallel evidence/severity vocabulary).

**Krug's Goodwill-reservoir taxonomy (6 depletors + 8 refills) is consolidated into 3 trust rules (`GW01`-`GW03`), not exploded into up to 14.** Precedent: this catalog already models a multi-item taxonomy as one rule with illustrative sub-items when the sub-items share one underlying mechanism and evidence type (see `AF01`'s four affordance types, one rule with a sub-table, not four rules). Applying the same pattern: `GW01` states the reservoir model and folds in the five depletors that share one mechanism (friction that reads as the product withholding effort or information) as illustrative, independently-flaggable examples within one requirement; `GW02` is pulled out as its own rule because rigid input-formatting rejection is mechanically unrelated to the other depletors (it is a validation-logic defect, not an information-withholding or tone defect) and is concretely, unambiguously testable on its own; `GW03` folds the 8 refills into one positive-counterpart requirement for the same reason `GW01` consolidates depletors. Alternative considered: one rule per depletor/refill (14 total) — rejected as disproportionate to this catalog's existing granularity norm (most prior comparison passes added 1-3 rules per pass) and as harder for the `trust` skill to apply coherently (14 near-identical-severity micro-rules vs. 3 rules with clear internal structure).

**New `GW` prefix for trust, rather than folding into an existing prefix (`O`, `CT`, `E`, `PR`).** None of `trust/core.md`'s existing prefixes describe cumulative-friction/reservoir-style findings — `O` is onboarding/permission-timing, `CT` is cost-transparency, `E` is destructive-action/error safety, `PR` is post-interaction reassurance. Forcing the Goodwill material into any of these would misdescribe it to a future maintainer scanning prefixes. A new two-letter prefix keeps with this file's existing convention (multiple short, semantically-named prefixes coexist in one file already).

**Ear-scanning (`X19`) is kept distinct from `product`'s `C07`/`C08`, not merged.** `C07`/`C08` apply only to text-heavy/web-rendered long-form content per `web.md`'s own stated scope ("Do not apply it to short native UI copy"), and address *sighted* scanning behavior (eye movement across a page). `X19` addresses a different population (screen-reader users) encountering a different evidence type (a synthesized links/headings list read in isolation from surrounding visual context, via a "rotor"-style navigation mode) — the underlying mechanism (front-load the keyword) is the same, but the accessibility failure mode is independent of whether `C07`/`C08` would even apply to the same evidence (e.g., a short native button label list has no `C07`/`C08` applicability but can still fail `X19`'s ear-scanning concern if read aloud as a link list).

## Risks / Trade-offs

- **Six new accessibility rules in one pass** is more than this catalog has historically added per domain per comparison pass. Mitigation: each is independently, narrowly testable (no overlapping scenarios verified against existing `X01`-`X16`/`T01`-`T05`), and three of the six (`X20` skip-link, `X21` heading hierarchy, `X22` alt-text distinction) directly close a known gap in `X01`'s otherwise-generic "accessible names/roles" coverage — these are not speculative additions.
- **A new two-letter rule prefix (`GW`) in `trust`** slightly increases the number of distinct prefixes a maintainer must track in that one file. Mitigation: the file already mixes several short prefixes (`O`, `CT`, `E`, `PR`, and others), so this is consistent with, not a departure from, that file's existing convention.
- **Consolidating the Goodwill taxonomy loses some of the source book's granularity** (a maintainer cannot cite "the fake-sincerity depletor" as its own rule ID). Mitigation: `GW01`'s requirement text and delta-spec scenarios name each depletor explicitly, so the granularity is preserved in prose and in independently-testable scenarios, just not as separate rule IDs — consistent with `AF01`'s precedent.

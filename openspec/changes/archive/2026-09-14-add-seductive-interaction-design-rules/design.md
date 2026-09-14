## Context

See `proposal.md` for motivation. This change only adds rule content to existing skills' `src/skills/<domain>/references/*.md` files (plus one new file); it introduces no new skill, no runtime dependency, and no build-pipeline change. Design here is limited to the placement/ID decisions a content-only change still needs to get right, per this repo's existing one-rule-ID-to-one-destination convention (`openspec/config.yaml`'s `specs` rule).

## Goals / Non-Goals

**Goals:**
- Fix rule-ID prefixes and destination files before drafting content, so no ID collides with an existing one and no rule row ends up assignable to two destinations.
- Keep the new gamification content additive to, not overlapping with, the existing ethics-guardrail treatment of game-like mechanics (`PB12`, `PH01`-`PH04`).

**Non-Goals:**
- No new skill, no `disable-model-invocation` — all six existing skills stay model-invocable by default; this change does not touch that setting.
- No change to `src/shared/evidence-model.md`, `severity-model.md`, or `report-contract.md` — every new rule uses the existing evidence/severity vocabulary as-is.
- No eval additions are required by this change's scope (rule-catalog content only); `evals/` is left untouched.

## Decisions

- **New file `psychology/references/gamification.md` with prefix `PG`**, rather than folding game-mechanics content into `motivation.md`/`habits.md`. Rationale: gamification is a distinct evaluative axis (legitimate game design vs. sugarcoating) with its own organizing framework (Elements of Game Design Model), the same structural-gap reasoning that justified `usability/references/visual-hierarchy.md` and `affordances.md` as their own files in prior passes. Alternative considered and rejected: distributing `PG01`-`PG05` across `motivation.md`/`habits.md` as `PM`/`PH` rules — rejected because it would bury a coherent framework across two unrelated files and because `PB12`/`PH01`-`PH04` already own the guardrail/deceptive-use framing; the new file is deliberately the complementary legitimate-use side.
- **`PG` is a new, currently-unused prefix** (verified by search across `src/skills/psychology/references/`) — no collision risk.
- **Physical depth-cue consistency goes in `usability/affordances.md` as `AF03`**, not `psychology/attention.md` as a new `PA` rule. Rationale: the book's "physical model" test is about perceived Physical/Sensory affordances (Hartson & Pyla's vocabulary this file already owns), not Gestalt grouping/attention (which `attention.md`'s `PA` series owns) — it extends the same diagnostic vocabulary `AF01`/`AF02` established rather than adding an unrelated attention rule.
- **`F25` (not `F24`) for the new usability/core.md Forms rule** — `F24` is already used by `mobile.md`'s device-capability rule; rule-ID prefixes are unique per letter across the whole skill, not scoped per file, so the next free `F` number is `F25`.
- **New rule IDs (`PM08`, `PM09`, `PB13`) rather than silently rewriting `PM07`/`PB06`'s existing text**, for the channel-factors, endowed-progress, and social-proof-density additions. Rationale: `PM07` and `PB06` are established ethical-guardrail rules; expanding their text in place risks quietly loosening or overloading an existing, cited rule. Each new rule instead cross-references the established one it's adjacent to (mirroring the project's existing "distinct from X, cross-references Y" convention used throughout, e.g. `F20` vs. `F18`, `PA14`-`PA17` vs. `PA05`/`PA07`).
- **Choice-overload/"jam study" goes into `ethics.md`'s evidence-strength-corrections table as a new row, not a new numbered rule.** Rationale: that table exists precisely to hold popular-but-contested psychology claims (it already carries this treatment for Zeigarnik and Von Restorff); the meta-analytic replication concern (Scheibehenne et al.) means this doesn't clear the bar for a hard, numbered rule the way the other additions do.
- **Fogg troubleshooting-order (Trigger→Ability→Motivation) is a citation/procedure enrichment to `PM01`/`PM05`'s existing "How the psychology skill should apply these" prose, not a new rule ID** — it sharpens how already-cited Fogg-model rules are applied; it does not add a new checkable behavior.
- **"Bringing Browser to Life" role-play audit is a non-rule technique note in `review-model.md`**, following the existing Squint-test precedent (`usability/visual-hierarchy.md`) and `V06`'s named-technique convention — not a numbered `V` rule, since it is a validation *technique* a reviewer can recommend, not itself a checkable requirement.

## Risks / Trade-offs

- [Risk] A new `gamification.md` file could read as encouraging game mechanics generally, undercutting the project's otherwise guardrail-heavy stance on engagement mechanics. → Mitigation: open the file with an explicit cross-reference to `PB12`/`PH01`-`PH04` stating it covers the legitimate-use side only, and route every `PG` rule through the existing four-gate ethical test in `ethics.md`, exactly as every other psychology file already does.
- [Risk] Recounting the rule-table total (294 → 305) by hand is error-prone. → Mitigation: `tasks.md` includes an explicit recount task using the same `| <ID> | ... |` row-matching approach `openspec/config.yaml` already specifies, run after all content edits are made, immediately before touching `README.md`.
- [Risk] Adding `AF03` to `usability` while other new rules land in `psychology`/`product`/`review` touches four domains in one change. → Mitigation: each domain's edit is independent and additive (no cross-domain rule depends on another in this change), so the four capability deltas can be implemented and validated in any order.

## Migration Plan

No migration — additive content only. After all `src/skills/**` edits, `CHANGELOG.md`, and `README.md` are updated, run the standing release gate (`npm run build && npm run sync-version && npm run validate`) per `openspec/config.yaml`'s `tasks` rule, then archive.

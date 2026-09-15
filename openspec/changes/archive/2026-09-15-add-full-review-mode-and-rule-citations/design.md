## Context

See `proposal.md` - Why for the motivating gaps. Three independent pieces of content change from the same investigation:

1. `src/shared/report-contract.md` wording (one file, propagates to all six skills via `scripts/build.mjs`).
2. `src/skills/usability/references/mobile.md` applicability guidance (usability-only).
3. Argument-handling instructions added to all six `SKILL.md` files (`review` + five domain skills), each gaining the same "Full" mode behavior.

All three are Markdown-only content changes to files already covered by the existing build/validate pipeline; no new runtime code, dependency, or distribution channel is introduced.

## Goals / Non-Goals

**Goals:**
- Every report section (individual findings, Category Health, Top-3) always carries a traceable rule ID.
- No report ever truncates its moderate/minor findings to a curated subset.
- `mobile.md`'s viewport-general rules (safe-area, dark mode, localization, scalable units) are evaluated against mobile web evidence, not skipped alongside the file's genuinely native-only rules.
- A user can opt into an exhaustive, mechanical rule-by-rule sweep on any of the six skills via a plain-text argument, without changing default behavior for everyone else.

**Non-Goals:**
- Real CLI argument-hint autocomplete (the `/code-review`-style suggestion bubble). Confirmed not achievable for a marketplace-distributed `SKILL.md` package today (Claude Code's `argument-hint` frontmatter field only works in first-party `.claude/commands/*.md` files; open issue anthropics/claude-code#18364). Out of scope until Claude Code lifts that limitation.
- Making Full mode the default. The experiment showed default judgment-driven selection already reaches full recall on directly-evidenced violations and costs far less on small rule catalogs; forcing exhaustive coverage by default would impose the large domains' cost penalty (+28% tokens / +91% wall time observed on a 134-rule catalog) on every review, including ones that don't need it.
- Hardcoding a duplicate list of rule IDs inside any `SKILL.md` for Full mode. The reference tables in `references/*.md` are already the single source of truth for rule IDs; a hardcoded duplicate list would silently go stale the next time a rule is added, removed, or renumbered there.
- Any change to `src/shared/evidence-model.md` or `severity-model.md` — Full mode's "not applicable" checklist state is new vocabulary scoped to the mandatory-sweep checklist only (see Decisions below), not a new evidence status added to the shared model.

## Decisions

### Report contract: strengthen wording and worked example, not the underlying data model
The `source_ids` field and the Blockers/Major "every finding" language already exist in `report-contract.md`; the gap was that its own worked example under-demonstrates the requirement (only Blockers/Major show a `Source:` line; Category Health and Top-3 show none; Moderate/minor's own wording is weaker than sections 1-2's). The fix is to (a) match section 6's wording to sections 1-2's "every" guarantee, and (b) extend the worked example to show a rule-ID citation in a Category Health line and a Top-3 item, not just the individual finding blocks — since a worked example is what a skill actually pattern-matches its own output structure against.

Alternative considered: adding a new required field or section instead of strengthening existing wording. Rejected — the data already exists (`source_ids` per finding); the problem is compliance with a contract whose own illustration doesn't cover every section it applies to, not a missing field.

### Mobile.md split: prose clarification, not a file reorganization
`mobile.md` rules are grouped into two intents that were never previously distinguished in writing: (a) genuinely native-only platform contracts (N02R tab bars, N03R Android `NavigationBar`, N04R back-behavior, T06-T09 gesture ergonomics — all tied to a native platform API or interaction model that mobile web does not have) and (b) mobile-viewport-general concerns that apply regardless of native-vs-web (L01 safe-area/insets — CSS `env(safe-area-inset-*)` exists for web too; L05 dark/increased-contrast — `prefers-color-scheme` exists for web; L07 localization text-expansion — a layout concern independent of native vs. web; L08 scalable font units — `rem`/`em` exist for web). This is a wording/guidance fix in the file's existing "How the usability skill should apply these" section, not a rule-ID change, not a file split, and not a new `web.md` (per this project's own convention, a rule only gets its own `web.md` when it is genuinely web-specific — these rules are viewport-general, not web-specific, so they belong exactly where they already are, just correctly scoped).

Alternative considered: creating a new cross-platform "adaptive-layout-general.md" file. Rejected as unnecessary structural churn for a wording fix that doesn't change which file any rule ID lives in.

### Full mode: instruct skills to sweep the reference tables directly, do not hardcode rule-ID lists
Each `SKILL.md`'s Full-mode instruction tells the skill to treat every row of each reference table it loads (for the request's resolved scope — e.g. the correct platform's `mobile.md` rules, or the applicable lenses for `review`) as a mandatory checklist item, recording violated / not violated / not assessable / not applicable for each, before writing the narrative report. This mirrors the same lens/file-scoping the skill already performs today (e.g. `usability` only loads `voice.md` when the evidence includes a voice interaction) — Full mode changes exhaustiveness within the already-determined scope, not scope selection itself.

Alternative considered (and validated experimentally in a throwaway, unshipped SKILL.md variant during this proposal's investigation): a hardcoded enumeration of every rule ID inline in the SKILL.md instruction, to remove any risk of the model skipping rows while building its checklist. Rejected for the shipped version — it duplicates data already living in `references/*.md` and would require a synchronized edit on every future rule addition/removal/renumbering, which this project's own `tasks.md` conventions already treat as an easy-to-miss step (see the rule-count-recount task rule in `openspec/config.yaml`). That experimental variant is a one-off validation artifact, not a pattern to ship as-is.

### Argument parsing: plain-text convention documented in `description`, not a new mechanism
"Full" / "smart" are read from whatever the skill receives as user-provided invocation text (the Skill tool's `args`, or text typed after a slash-invocation) using ordinary keyword recognition ("full", "smart"), with no new tool, flag-parsing library, or schema. This is consistent with `code-review`'s own documented approach (its effort levels and `--fix`/`--comment` flags are also just parsed from invocation text, not enforced by a schema) and is the only mechanism available to a `SKILL.md`-distributed package per the research finding in `proposal.md`.

### Model-invocability unchanged
All six skills remain model-invocable by default (no `disable-model-invocation`), consistent with the v1 default this project's `config.yaml` states. Full mode is an argument a user or an orchestrating model can supply, not a separate skill and not a reason to change invocability.

## Risks / Trade-offs

- **[Risk] A user invokes Full mode on the full `review` skill across all five lenses on a large evidence set, incurring a much larger cost than the single-domain experiments measured.** → Mitigation: the spec requires Full mode to remain an explicit opt-in with unchanged default behavior; this design does not claim Full mode's cost is bounded at multi-lens scale, and no task in this change benchmarks that combination — a follow-up measurement is reasonable before recommending multi-lens Full mode for routine use, but is not required to ship this change (see Open Questions).
- **[Risk] "Full" argument recognition is a plain keyword match, which could mis-trigger on an unrelated argument that happens to contain the word "full."** → Mitigation: the spec's clarification-first fallback ("ask when neither full nor smart is recognizable") reduces silent misfires; a substring match on "full" is intentionally permissive (see Open Questions for whether stricter matching is warranted later).
- **[Risk] Strengthening report-contract wording changes output shape for every existing user of all six skills.** → Mitigation: this is a strictly additive completeness/traceability requirement (show more, cite more), not a removal or restructuring of any existing section — no existing consumer of a report loses information.

## Migration Plan

No data migration. Deploy as a normal content change: edit `src/shared/report-contract.md`, `src/skills/usability/references/mobile.md`, and each `src/skills/*/SKILL.md`, then run `npm run build && npm run sync-version && npm run validate` per this project's standing release gate before considering the change done. No rollback mechanism beyond reverting the commit — there is no persisted state to unwind.

## Open Questions

- Whether Full mode's cost at full multi-lens `review` scale (all five domains, potentially 330+ rules) stays proportionate enough to recommend for routine use, or whether it warrants its own separate measurement/guidance before being advertised as a general-purpose option — deferred; does not change this change's specs, approach, or task breakdown, since Full mode ships as an opt-in either way.
- Whether "full" argument recognition should later be tightened (e.g. exact match instead of substring) if real usage shows false triggers — deferred until real usage data exists.

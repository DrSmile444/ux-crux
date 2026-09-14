## Context

See `proposal.md` - Why/What Changes for the full rule-by-rule mapping and rationale. This design covers the placement decisions and edge cases that shaped where each rule landed, plus how the citation-only enrichments are handled without spec changes.

## Goals / Non-Goals

**Goals:**
- Land each of the 7 new rules in the one file/section where it is least redundant with an existing rule, with an explicit "distinct from" clause so a future reviewer does not merge or duplicate it.
- Apply the 7 citation-only enrichments without inventing new requirement text or spec deltas, consistent with how prior passes (e.g. the localization-predictability citation added to `C05`/`L07`) treated pure citation/example additions.
- Keep the `local/` research folder's path and filename out of every artifact and out of shipped content, per this repo's `CLAUDE.md`.

**Non-Goals:**
- Re-litigating rules already fully covered by the two prior Norman-adjacent passes (*Design for a Better World*, *The UX Book*) - those are named in `proposal.md` as confirmed-covered, not reopened here.
- Importing the book's service-design, queue-engineering, or distribution-channel content - explicitly out of scope per `proposal.md`.
- Any build-tooling, schema, or distribution-mechanism change.

## Decisions

**AF05 goes in `affordances.md`, not `core.md`'s Actions table.** `affordances.md` already carries `AF02`, the mirror-image rule (a user-created workaround signals a missing affordance). Placing the design-side counterpart in the same file keeps the "compensating artifact as diagnostic signal" pattern in one place, rather than splitting it across two files by who created the artifact.

**The Goal-Task-Tool/Activity-Centered-Modularization material becomes one rule (`IA10`), not two.** The book presents the problem (goal-task-tool mismatch) and its named solution pattern (activity-centered modularization, the Logitech Harmony example) as two knowledge items, but they describe the same defect from two ends. A single rule with both the failure description and the concrete fix avoids two rules that would always co-occur in practice.

**`IA10` lives in `information-architecture.md`, not `core.md`'s Purpose & task table.** The rule is fundamentally about how *control/settings surfaces* are organized (an IA-shaped concern - grouping by mental model vs. internal structure, the same axis as `IA01`), not about a single screen's primary goal (`P01`'s scope) or step-count reduction (`P03`'s scope). Filing it next to `IA01` keeps the "organize by user mental model, not internal structure" principle in one place, now covering both content/navigation (`IA01`) and controls (`IA10`).

**The Six Principles of Wait Design become one rule (`S13`), not five or six separate ones.** The book's six principles (conceptual model, appropriate cause, met/exceeded expectations, occupied time, fairness, strong ending) are tightly coupled - a wait experience is judged as a whole, and splitting them into six IDs would multiply near-duplicate scenarios without adding review value. `S13`'s scenarios cover the four sub-checks most likely to appear in isolable digital evidence (expectation-setting, occupied time, fairness, closure); the "appropriate cause" and "conceptual model" sub-principles are folded into the expectation-setting scenario since they are hard to distinguish from it in static UI evidence.

**Physical queue-topology mechanics (single-line multi-server routing, spatial/temporal double buffering) are cited nowhere, not even as a footnote to `S13`.** These describe how a *backend* routes work to servers/staff, which is not observable from the kind of evidence this project's skills review (a screenshot, description, code, or running build of a UI). If a future pass finds a UI-visible analogue (e.g., a specific support-ticket-queue UI pattern), it can be proposed as its own rule then.

**`E09` (interactive checklists) sits in Errors & recovery, not a new section.** It is fundamentally an error-prevention mechanism (preventing a silently skipped step) for a narrow, high-consequence class of flow, matching the existing Errors & recovery table's purpose better than Forms or a new standalone section would.

**`N23R` is scoped to "remaining step count or an explicit not-yet-knowable signal," not to a specific UI pattern (progress bar vs. step-counter text).** This keeps the requirement about the *information* being available, not about which widget conveys it, consistent with how the rest of `core.md`'s Navigation table is written.

**Enrichments get no spec delta.** Each of the 7 enrichments adds a named example or a stronger source citation to an already-shipped rule's rationale; none changes the rule's SHALL-level behavior or its scenarios. Per the specs-writing guidance ("if the implementation can change without changing externally visible behavior, it likely does not belong in the spec") and the precedent of prior citation-only enrichments (e.g. the Colborne localization-predictability citation), these are `tasks.md`-only edits to the relevant `references/*.md` file's Sources column/prose, with no `## MODIFIED Requirements` entry.

## Risks / Trade-offs

[Risk] `IA10` and `P01`/`IA01` could be read as overlapping by a future reviewer who has not read the "distinct from" clause closely. → Mitigation: `IA10`'s requirement text and the `usability`/`product` `SKILL.md` "How to apply" section (updated in `tasks.md`) both state the distinction explicitly; the applicability note pattern already used elsewhere in this project (e.g. `P09`'s note distinguishing it from `P02`) is reused here.

[Risk] Folding six wait-design principles into one rule (`S13`) could under-specify a review compared to naming each principle as its own checkable item. → Mitigation: `S13`'s requirement text enumerates all four operationalized sub-checks explicitly in its body, and its scenarios cover the two failure modes (missing expectation/occupied-time, unfair queueing) most likely to appear in real evidence; a future pass can split `S13` into narrower IDs if review experience shows the merge loses precision.

[Risk] The rule-coverage-checklist convention (one rule ID maps to exactly one destination file) could be violated if `AF05` is later confused with `AF02` during review. → Mitigation: `AF05`'s requirement text names `AF02` explicitly as its mirror-image counterpart and states the distinguishing fact (who created the compensating artifact) in the first sentence.

## Migration Plan

Additive only - no removed or renamed rules, no breaking changes to the shared evidence/severity model, no schema change. `tasks.md` will end with the standing release gate (`npm run build && npm run sync-version && npm run validate`) per this project's convention. No rollback concerns beyond reverting the commit if `validate.mjs` fails.

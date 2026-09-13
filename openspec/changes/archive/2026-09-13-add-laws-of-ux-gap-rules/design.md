## Context

See `proposal.md` for motivation. Five content edits land in three already-existing reference files plus one new rule, all under `src/skills/<domain>/references/`. None require a new skill, a new reference file, or a change to `src/shared/*`. Each existing reference file already uses a per-file rule-ID scheme (e.g. `usability/core.md` uses `A0xR`, `F0x`, `S0x`, `R0xR`, `N0xR`, `IE0x`; `psychology/attention.md` uses `PA0x`; `trust/core.md` uses `O0x`/`E0x`) — new rules take the next unused ID in the relevant file's own scheme rather than a cross-file numbering scheme.

## Goals / Non-Goals

**Goals:**
- Close the four narrow, verified content gaps identified in the research-comparison pass, each attributed to a named, checkable source (not the secondary synthesis that first surfaced the gap).
- Preserve the one-rule-ID-to-exactly-one-destination-file invariant: no rule ID is duplicated or split across domains.
- Keep every touched skill's default model-invocability behavior unchanged (all five domain skills stay model-invocable, no `disable-model-invocation`).

**Non-Goals:**
- No wholesale import of the external synthesis's full rule set — deferred per `openspec/config.yaml`.
- No new skill, no new reference file (e.g. no `web.md`), no change to `src/shared/evidence-model.md`, `severity-model.md`, or `report-contract.md`.
- No change to `accessibility`, `product`, or `review`.

## Decisions

1. **Trust signal rule lives in `trust/core.md`, not `usability/core.md`.** Strategic friction for high-stakes actions is about perceived trustworthiness of the *system*, which is `trust`'s existing remit (permission timing, destructive-action safety, notification honesty) — not about task efficiency or interaction cost, which is `usability`'s remit. Placing it in `trust` also lets it sit next to the existing destructive-action rules (`E05`/`E07`) it must be explicitly distinguished from. Alternative considered: adding it to `usability/core.md`'s Responsiveness section (R0xR) — rejected because Responsiveness there is about *minimizing* perceived delay, and this rule is the deliberate opposite (a justified, bounded exception), which would read as contradictory next to R01R-R05R without heavy caveats.
2. **Doherty's <400ms finding gets a citation split, not a new rule ID.** `R01R` already governs "use response-time thresholds as a heuristic, not a universal SLA." Rather than adding a parallel rule, the existing rule's sources/notes gain the distinct Doherty & Thadani (1982) citation so a reviewer citing "sub-400ms" and a reviewer citing "0.1/1/10s" are both traceable to the correct, separate research finding instead of one blending into the other.
3. **Banner-blindness gets a new `attention.md` ID (next available: `PA09`) rather than folding into `PA03`.** `PA03` already reads "avoid multiple simultaneous salient changes... that dilute attention" — that is the *over-emphasis* failure mode. Banner blindness is the *under-emphasis* failure mode (legitimate content styled to look ignorable/ad-like). Distinct failure directions get distinct IDs so a review can cite the specific one that applies.
4. **Miller's-Law folk-rule guard is a new table row in `usability/core.md`'s existing "Folk-rule guards" table, not a new rule ID.** That table exists precisely to hold named-myth-plus-correct-encoding pairs; `PC07`/`3.2`-equivalent content in `cognitive.md` already states the underlying correct rule (chunking must reflect semantics, not an arbitrary count), so the guard table gets the myth-facing entry pointing back to it rather than duplicating the corrective rule itself.
5. **Text-expansion figure is a citation-level addition to `mobile.md`'s existing `L07`, not a new rule.** `L07` ("Localization supports text expansion... where applicable") already states the required behavior; a concrete percentage is an example/citation, not new required behavior.

## Risks / Trade-offs

- **[Risk]** Sourcing the Doherty & Thadani (1982) and text-expansion (~300%) figures precisely enough to cite without pointing back at the disallowed `local/` research folder. → **Mitigation**: cite the named primary/secondary sources this project already uses elsewhere for comparable claims (NN/g's own treatment of response-time thresholds, and Apple/Android localization guidance already cited in `mobile.md` L07's row) rather than the folder; verify each figure against a source already in this project's citation vocabulary before writing it, and phrase the percentage as an illustrative "up to" figure if a single authoritative number cannot be pinned down.
- **[Risk]** A reviewer could over-apply the new strategic-friction rule and start recommending artificial delays broadly. → **Mitigation**: the spec's three scenarios explicitly require the opposite finding (flagging unjustified delay on low-stakes actions), and `tasks.md` includes writing that guard directly into the rule's "How the trust skill should apply these" text, not just the spec.
- **[Trade-off]** Adding a fourth rule file's worth of small edits in one change (rather than one change per file) is slightly harder to review atomically, but keeps one coherent proposal/design/spec set for a single research-comparison pass rather than four near-duplicate changes.

## Migration Plan

Content-only change to Markdown source; no data migration. Rollout is: edit `src/skills/**` → `npm run build` (regenerates `skills/` and `plugin/skills/`) → `npm run sync-version` → `npm run validate`. Rollback is a plain revert of the same commit(s); no runtime state to unwind.

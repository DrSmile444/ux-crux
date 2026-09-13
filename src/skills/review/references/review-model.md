# Review model: lens selection, synthesis, and validation methodology

This file is the only place the `review` skill's own logic lives beyond its `SKILL.md`. It does not duplicate the shared evidence, severity, or report models — see `../../../shared/evidence-model.md`, `severity-model.md`, and `report-contract.md`, which every skill (including this one) uses identically.

It covers rules V01-V05 (validation methodology) from the source catalog, plus the procedure for selecting which lenses apply and combining their output.

## Validation methodology (V01-V05)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| V01 | Heuristic review is prevalidation, not proof of usability; critical flows still require observation with representative users. | Research principle | Major | ISO 9241-210; NN/g Ten Usability Heuristics |
| V02 | For each core flow, measure task success, error/recovery, time/effort, and qualitative confidence/satisfaction. | Research principle | Moderate | ISO 9241-210; Google Research HEART |
| V03 | Use HEART selectively (Happiness, Engagement, Adoption, Retention, Task Success); do not optimize engagement when the product goal is rapid task completion. | Research principle | Moderate | Google Research, "Measuring the User Experience on a Large Scale" (HEART) |
| V04 | Test realistic adverse states: slow/offline network, denied permissions, empty data, server error, interrupted session, large text, dark mode, and small/large windows. | Research principle | Major | ISO 9241-210; Apple HIG Accessibility; Android adaptive-layout guidance |
| V05 | The reviewer records uncertainty and applicability instead of inventing a violation when product context is missing. | Skill architecture | Major | ISO 9241-210 |

These five rules are why the `review` skill (and every domain skill) must say `NOT ASSESSABLE` or `LIKELY` rather than asserting a defect it cannot support (V05, tied directly to the evidence model), and why a full review's output should point at what still needs a running build or real users (V01, V04) instead of presenting itself as a final verdict.

## Lens-selection procedure

The `review` skill does not run all five domain skills mechanically as a fixed pipeline. It reasons about which lenses are relevant to the evidence and request in front of it:

1. **Read the request and the evidence.** What is being reviewed (a screen, a flow, a feature spec, a running build)? What did the user ask for ("full review" vs. an implicit narrower ask like "does this feel trustworthy")?
2. **Default to broad coverage.** For an explicit "full review" or "review the UX of X" request with no narrowing, apply all five lenses (usability, psychology, accessibility, product, trust) unless one is clearly inapplicable to the evidence type (e.g. accessibility contrast checks are not assessable from a text-only description with no visuals — still name it as a lens considered and mark it `NOT ASSESSABLE`, do not silently skip it).
3. **Narrow only when the request narrows.** If the user's own request already scopes to one lens (e.g. "check accessibility"), invoke that domain skill directly instead — see "Independence from domain skills" below. `review` earns its place only for genuinely multi-lens or ambiguous-scope requests.
4. **State which lenses were applied and why**, as the first thing in the report, before the findings themselves.

## Independence from domain skills

Per the `ux-crux/review` spec's "Domain skills remain independently invocable" requirement: `review` is not a required dependency of `usability`, `psychology`, `accessibility`, `product`, or `trust`. Each of those five skills can run standalone and produce a complete report for its own lens, using the same shared evidence/severity/report models. `review`'s job is solely to decide *which* lenses apply to a broader request and to *synthesize* their findings into one report — it does not gatekeep access to any single lens.

## Self-containment

`review` does not read another skill's installed files, and does not assume the five domain skills are installed alongside it. Its own package carries a generated copy of every domain's reference content under `domains/<domain>/` (kept in sync with that domain's own `src/skills/<domain>/references/` by `scripts/build.mjs`). This matters specifically for skills.sh: `npx skills add <repo> --skill <name>` installs exactly one skill directory with no dependency mechanism, so a `review`-only install must be able to fully evaluate every lens on its own.

## Cross-lens synthesis

When multiple lenses produce findings on the same reviewed evidence:

1. Merge blockers and majors from every lens into one prioritized list (per `report-contract.md`) — do not present five separate mini-reports.
2. Where two lenses flag the same underlying issue from different angles (e.g. usability's "no confirmation copy is specific" and trust's "destructive action safety"), merge them into a single finding that cites both lenses' `source_ids` rather than reporting it twice.
3. Category health is still reported per lens (see `report-contract.md`), even after merging duplicate findings, so the user can see which lens found what.
4. When lenses disagree in emphasis (for example psychology flags a completion-progress mechanism as potentially manipulative while product would otherwise praise its clarity), report both perspectives rather than silently resolving the tension — this is exactly the kind of trade-off `design.md`'s "prevention vs. interruption" and "simplicity vs. capability" conflict classes describe, and the reviewer's job is to surface it, not average it away.

## How the review skill should apply this file

Use the lens-selection procedure before reading any `domains/<lens>/` file in depth — decide scope first, then load only the references needed for the applicable lenses, consistent with progressive disclosure (do not load all five domains' full reference sets for a narrowly-scoped request). Apply V01-V05 as a standing constraint on every report this skill produces, regardless of which lenses were selected.

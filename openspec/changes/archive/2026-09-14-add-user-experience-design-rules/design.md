## Context

See `proposal.md` for the full motivation and per-item source mapping. This is a content-only comparison pass, the sixteenth of its kind (see `CHANGELOG.md` 0.1.6-0.1.15) — no runtime code, no new dependency, no schema change. The only genuinely structural decision is whether Voice UI gets a new per-modality reference file (`usability/references/voice.md`) alongside the existing `core.md`/`mobile.md`/`web.md` split, since this project has never covered a non-visual/non-touch modality before.

The user has also asked, alongside this rule-content change, for two additional pieces of work bundled into this same change: (1) surface the project's total rule count prominently in `README.md`'s opening paragraph as a signal of how thoroughly the catalog spans domains, and (2) add a standing reminder in `openspec/config.yaml` so future rule-adding changes remember to keep that count current.

## Goals / Non-Goals

**Goals:**
- Add the eight new/modified rule areas identified in `proposal.md` to their respective skills, each traceable to a specific page/case in Mark Wells' *User Experience Design*.
- Establish `voice.md` as this project's first non-visual-modality reference file, following the same reference-file-splitting convention as `mobile.md`/`web.md`.
- Add a single, auto-checkable-by-a-human total rule count to `README.md`'s opening paragraph, and a config rule that keeps that number from silently going stale on future rule-adding changes.

**Non-Goals:**
- No wholesale import of the book's process/methodology content (design sprints, client briefing, DIKW/affinity-mapping analysis process, INVEST, SEO practice) — consistent with every prior comparison pass, see `proposal.md`'s "Scoped out" list.
- No automated/scripted rule-count verification (e.g. a build-time script that counts rule IDs and fails if `README.md` drifts). The user asked for a documentation reminder in `openspec/config.yaml`'s `rules` section, not new tooling — a scripted counter is a larger, separate capability decision and is explicitly out of scope for this change.
- No change to the evidence/severity model, report contract, or any skill's model-invocability.

## Decisions

**Voice UI gets its own `usability/references/voice.md` file, not a subsection of `core.md`.** This follows the exact precedent set when `web.md` was added: a reference file addendum is warranted once content is genuinely modality-specific rather than platform-agnostic. Voice interaction (auditory-only presentation, no persistent visual state) is a large enough divergence from screen-based interaction that folding it into `core.md` would blur the file's platform-agnostic-only scope. `usability/SKILL.md` is updated to list the new file alongside `mobile.md`/`web.md`.

**The Aesthetic-Usability Effect addition lands as a new `review` spec requirement, not a literal one-to-one mirror of the reference-file's "enrich V01, no new rule ID" framing.** At the reference-file layer (`review-model.md`), this stays exactly what `proposal.md` describes: prose added to `V01`'s existing text, no new rule ID, consistent with prior citation-only enrichments. At the OpenSpec spec layer, however, the existing `ux-crux/review` spec has no requirement whose text corresponds to `V01` specifically (the ten existing spec requirements map to lens-selection, the evidence/severity model, `V02`, `V04`, `V06`, `V07`, `IC01`, the report contract, self-containment, and independence — `V01`'s "heuristic review is prevalidation" framing was apparently never separately spec'd). Since the Aesthetic-Usability Effect describes a new, independently testable behavior (don't treat positive hi-fi-mockup feedback as proof of structural soundness), it is added as an `ADDED` spec requirement rather than forced into a `MODIFIED` block with no real predecessor to modify.

**Chart-type-fit (Kosslyn/Mollerup) is a new `product` requirement, not a `MODIFIED` extension of the existing `C20` expert-knowledge-trap requirement.** The two concerns are genuinely distinct — `C20` is about matching displayed *complexity* to audience expertise; the new requirement is about matching visualization *type* to data category — so they are additive, sibling requirements, matching how the reference-file layer's `C20`/new-`C` split is designed (see `proposal.md`).

**The rule-count signal in `README.md` is a plain hand-maintained number, not a generated badge.** The project has no existing tooling that parses `src/skills/**/references/*.md` tables to count rule IDs, and building one is a nontrivial new capability (parsing every table format across `core.md`/`mobile.md`/`web.md`/topic files, excluding folk-rule-guard tables and non-rule tables) that the user did not ask for. The `openspec/config.yaml` reminder is the deliberately lightweight alternative: a rule instructing future task lists to include a step that recounts and updates the number by hand, the same way the existing config rule already requires a `CHANGELOG.md` entry and a README "Evidence base" addition for any new named source.

## Risks / Trade-offs

- **Voice UI is a new modality with no existing eval coverage.** Mitigation: scope the two new rules narrowly (command-scope limiting, persona-tone alignment) rather than a full VUI rule set, consistent with how this project has always added a narrow, source-traceable slice rather than importing a book's full framework.
- **A hand-maintained rule count can drift.** Mitigation: the `openspec/config.yaml` addition targets exactly this risk by making "update the count" a standing task-list rule, mirroring the existing CHANGELOG/README-evidence-base reminder pattern already proven to work across fifteen prior passes.
- **Bundling documentation/process tooling (README count, config rule) into the same change as rule content is a scope-mixing risk** for future archival/traceability (the change name says "rules" but also touches README structure and config). Accepted per explicit user instruction; `tasks.md` sequences the rule-content work first and the README/config work as clearly separated later tasks so the archived change's task list stays legible.

## Migration Plan

Standard content-change flow already used by every prior comparison pass: implement source edits (`src/skills/**`, one new file), run `npm run build && npm run sync-version && npm run validate`, update `CHANGELOG.md` and README's "Evidence base" plus the new rule-count line, then archive. No data migration, no runtime deployment step, no rollback beyond reverting the commit.

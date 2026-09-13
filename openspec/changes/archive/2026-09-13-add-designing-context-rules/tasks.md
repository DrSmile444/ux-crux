## 1. Product: carve out the information-architecture reference file

- [x] 1.1 Create `src/skills/product/references/information-architecture.md`, moving `IA01`/`IA02` out of `references/core.md` verbatim (same rule IDs, same text) and removing them from `core.md`'s table.
- [x] 1.2 Add the IA-materials framework (Dan Klyn: Labels/Ontology, Relationships/Taxonomy, Rules/Choreography) as the section's introductory framing in `information-architecture.md`.
- [x] 1.3 Add a new rule for faceted classification (S.R. Ranganathan) to `information-architecture.md`, matching the "Single rigid hierarchy blocks a legitimate alternative access path" scenario in `specs/ux-crux/product/spec.md`.
- [x] 1.4 Add a new rule for corporate-language/organizational-structure leaks (Abby Covert) to `information-architecture.md`, matching the "Sign-in or navigation exposes internal business-unit divisions" scenario.
- [x] 1.5 Extend the IA01 scenario set (or add an adjacent rule under the same requirement) with the situation-need-task framing (Hinton), matching the "Entry point offers only bureaucratic task names" scenario.
- [x] 1.6 Add a new `Label-to-structure fidelity check` rule to `information-architecture.md` covering UI-metaphor containment fidelity and reified-label source-merging, matching both scenarios under that requirement in the spec delta.
- [x] 1.7 Update `src/skills/product/SKILL.md`'s procedure step 4 and References section to point at `references/information-architecture.md` instead of `core.md` for IA rules, following the existing pattern used for `web.md`/`voice-tone.md`.
- [x] 1.8 Verify every new/moved rule ID in `information-architecture.md` has exactly one destination file (no duplicate IA rule left behind in `core.md`) and cites its own named source (Hinton, Klyn, Ranganathan, or Covert as applicable).

## 2. Usability: mode errors, icon reuse, cross-device scoping, search continuity

- [x] 2.1 Add a mode-errors-and-quasimodes rule to `src/skills/usability/references/core.md`, matching the "Mode changes are visibly signaled" requirement's three scenarios in `specs/ux-crux/usability/spec.md`, cited to Raskin & Norman.
- [x] 2.2 Add an icon/signifier-reuse-ambiguity rule to `references/core.md`, matching the "Reused icons do not carry conflicting meanings in close proximity" requirement, explicitly distinguished in the rule text from the existing control-truthfulness rule.
- [x] 2.3 Add a cross-device structural/scoping-consistency rule to `references/core.md`, matching the "Structural scoping stays consistent across devices" requirement.
- [x] 2.4 Add a search/discovery context-preservation rule to `references/core.md` (Navigation/Search & discovery section), matching the "Search and discovery preserve context across a non-linear session" requirement, cited to Bates/Card/Pirolli's information-foraging/berrypicking research.
- [x] 2.5 Update `src/skills/usability/SKILL.md`'s procedure/References section to reference the four new rule IDs alongside the existing set, following the pattern used for prior rule additions (e.g. N13R-N16R).

## 3. Trust: cross-audience defaults, audience-scope visibility, cloud-metaphor clarity

- [x] 3.1 Add a cross-audience-sharing-default rule to `src/skills/trust/references/core.md`, matching the "Cross-audience sharing requires explicit active opt-in" requirement, cited to the Facebook Beacon case as the named precedent.
- [x] 3.2 Add an audience-scope-visibility-at-send rule to `references/core.md`, matching the "Message audience scope is unambiguous at the point of sending" requirement, cited to danah boyd's networked-publics properties (persistence, replicability, scalability, searchability).
- [x] 3.3 Add a cloud-sync-deletion-clarity rule to `references/core.md`, matching the "Cloud sync/storage warnings state file location and local-copy impact" requirement.
- [x] 3.4 Update `src/skills/trust/SKILL.md`'s procedure/References section to reference the three new rule IDs.

## 4. Psychology: unintended content juxtaposition

- [x] 4.1 Add a Kuleshov-effect/unintended-juxtaposition rule to `src/skills/psychology/references/attention.md`, matching the "Adjacent dynamic content does not create unintended meaning by juxtaposition" requirement, explicitly distinguished in the rule text from `PA09`/`PA11`.
- [x] 4.2 Update `src/skills/psychology/SKILL.md`'s procedure/References section to reference the new rule ID, and add an application note in `attention.md` distinguishing it from `PA09`/`PA11` (mistaken-identity vs. meaning-collision), matching this project's existing style for cross-rule disambiguation notes.

## 5. Documentation and evidence trail

- [x] 5.1 Add Andrew Hinton, *Understanding Context: Environment, Language, and Information Architecture*, to `README.md`'s "Evidence base" list of comparison-pass sources.
- [x] 5.2 Add a `CHANGELOG.md` entry for this pass in the same style as the 0.1.6-0.1.11 entries: what was added (by domain and rule ID), what was left out and why (process/methodology content, pure-theory-without-anti-pattern content, physical-world-only cases), and the version number.
- [x] 5.3 Confirm no file under `openspec/changes/add-designing-context-rules/` or `src/skills/**` references the private local research folder by path or filename, per this repo's `CLAUDE.md`.

## 6. Build, version, and validate

- [x] 6.1 Bump `package.json`'s version (patch) per this project's one-SemVer-for-the-whole-plugin convention.
- [x] 6.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — this is the standing release gate for any change to `src/skills/**`.
- [x] 6.3 Confirm the rule-coverage checklist still accounts for every rule ID exactly once with no duplication across domains (per `openspec/config.yaml`'s specs rule), with particular attention to `IA01`/`IA02` now living only in `information-architecture.md`, not `core.md`.

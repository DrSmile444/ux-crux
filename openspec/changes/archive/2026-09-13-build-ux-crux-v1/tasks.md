## 1. Repository scaffolding

- [x] 1.1 Create `src/skills/<domain>/` directories for `review`, `usability`, `psychology`, `accessibility`, `product`, `trust` and a `src/shared/` directory; verify `find src -type d` lists all seven directories.
- [x] 1.2 Add a root `package.json` as tooling-only, with a single `version` field starting at `0.1.0` and no publish config; verify `npm pkg get version` returns `0.1.0`.
- [x] 1.3 Create `scripts/`, `evals/`, and `plugin/` directory skeletons per design.md's layout; verify each exists via `ls`.

## 2. Shared evidence, severity, and report models

- [x] 2.1 Write `src/shared/evidence-model.md` defining VERIFIED/SUPPORTED/LIKELY/RISK/NOT ASSESSABLE and when each applies, satisfying the `ux-crux/review` spec's "Findings use the shared evidence and severity models" requirement; verify by checking every status has a definition and an example.
- [x] 2.2 Write `src/shared/severity-model.md` defining blocker/major/moderate/minor with concrete criteria; verify each severity has at least one example finding.
- [x] 2.3 Write `src/shared/report-contract.md` defining the output format (blockers/major first, category health, missing states, top-3 fixes, optional capped score), satisfying the "Report avoids a single opaque score" requirement; verify it includes one worked example report.

## 3. Rule migration from research into domain references

- [x] 3.1 Build a rule-coverage checklist (scratch file, not committed) mapping every rule ID from the source ~191-rule catalog to exactly one destination domain and core/mobile file; verify every rule ID appears exactly once.
- [x] 3.2 Write `src/skills/usability/references/core.md` and `mobile.md` covering purpose/task, navigation, actions, forms, system status, errors/recovery, search, responsiveness, and interaction-efficiency/focus rules (including the search-autofocus intent-continuation case); verify against the checklist from 3.1.
- [x] 3.3 Write `src/skills/psychology/references/{cognitive,attention,motivation,emotion,behavioral-economics,social,habits,ethics}.md` covering all psychology and ethical-persuasion rules, each tagged with its four-gate ethical evaluation where applicable; verify against the checklist from 3.1.
- [x] 3.4 Write `src/skills/accessibility/references/core.md` and `mobile.md` covering WCAG requirements and platform-specific accessibility rules (contrast, target size, text scaling, gesture alternatives, screen-reader semantics); verify against the checklist from 3.1.
- [x] 3.5 Write `src/skills/product/references/core.md` covering goal/task-model, information architecture, and content/UX-writing rules; verify against the checklist from 3.1.
- [x] 3.6 Write `src/skills/trust/references/core.md` and `mobile.md` covering onboarding, permissions, notifications, and destructive-action rules; verify against the checklist from 3.1.
- [x] 3.7 Write `src/skills/review/references/review-model.md` describing how the review skill selects applicable lenses and synthesizes cross-domain findings, linking to (not duplicating) `src/shared/*`; verify it contains no copy-pasted shared-model content.
- [x] 3.8 Confirm the checklist from 3.1 shows 100% of source rule IDs mapped to a destination file before closing this task group.

## 4. Skill authoring

- [x] 4.1 Write `src/skills/review/SKILL.md` with frontmatter (`name: review`, a routing `description`) covering the full-audit workflow from the `ux-crux/review` spec; verify the frontmatter parses as valid YAML and the body stays reasonably short (detail lives in `references/`).
- [x] 4.2 Write `src/skills/{usability,psychology,accessibility,product,trust}/SKILL.md`, each with a distinguishing routing `description` and a short body pointing into its own `references/`; verify each frontmatter parses and manually check each `description` against the other five for routing ambiguity.
- [x] 4.3 Confirm none of the six skills sets `disable-model-invocation` or an equivalent explicit-only flag, per design decision 4; verify by grepping all `SKILL.md` frontmatter for that key.

## 5. Build and distribution pipeline

- [x] 5.1 Implement `scripts/build.mjs` to generate `skills/ux-crux-<domain>/` (standalone) and `plugin/skills/<domain>/` (plugin) from `src/skills/<domain>/`, rewriting only the `name:` frontmatter field per distribution; verify running it produces both trees with the correct `name` in each generated `SKILL.md`.
- [x] 5.2 Implement copying of `src/shared/*` into each generated skill package so no generated skill references a path outside its own directory; verify generated skills contain the shared-model content and have no `../` path references.
- [x] 5.3 Implement `scripts/sync-version.mjs` to propagate `package.json`'s version into `plugin/.claude-plugin/plugin.json` and `plugin/.codex-plugin/plugin.json`; verify all three report the same version after running it.
- [x] 5.4 Implement `scripts/validate.mjs` to fail when distributed skill content changed without a version bump, and when a generated skill's shared-model section drifts from `src/shared/`; verify both failure cases with a deliberate test edit.
- [x] 5.5 Wire `scripts/test.mjs` to run the eval suite from group 8; verify it exits non-zero against a deliberately broken skill fixture.

## 6. Plugin manifests

- [x] 6.1 Write `plugin/.claude-plugin/plugin.json` listing all six generated skills and the synced version; verify with `claude plugin validate ./plugin` (or the closest available equivalent) reporting no errors.
- [x] 6.2 Write `plugin/.claude-plugin/marketplace.json` so the repo can serve as its own Claude marketplace; verify it matches Claude's marketplace manifest schema.
- [x] 6.3 Write `plugin/.codex-plugin/plugin.json` pointing at `plugin/skills/`; verify it matches Codex's plugin.json schema (name, version, skills path).

## 7. Standalone and skills.sh packaging

- [x] 7.1 Verify `scripts/build.mjs`'s `skills/` output matches skills.sh's expected discovery layout (`skills/<name>/SKILL.md` with `name` + `description`).
- [x] 7.2 Write `skills.sh.json` at the repo root grouping "Complete Review" (`ux-crux-review`) and "Specialized Reviews" (the other five skills); verify it matches skills.sh's documented grouping schema.
- [x] 7.3 Investigate whether `plugin/skills/` copies get picked up as duplicates by skills.sh discovery (per design.md's open question); if so, apply an exclusion (e.g. `metadata.internal: true` or equivalent) and verify only the six `ux-crux-<domain>` skills remain discoverable.

## 8. Evals

- [x] 8.1 Create `evals/triggers/` with should-trigger and should-not-trigger phrase sets per skill description, to catch routing ambiguity between the six skills; verify each phrase set routes to the expected skill.
- [x] 8.2 Create `evals/<domain>/` output evals with at least one worked fixture per domain skill and its expected finding shape; verify each produces a report containing evidence status, severity, and confidence per the shared report contract.

## 9. Documentation

- [x] 9.1 Write `README.md` covering what ux-crux is, the six skills, a summary of the evidence/severity model, and a "Run locally" section with the exact commands to build (`node scripts/build.mjs`), load the plugin in Claude Code locally (`claude --plugin-dir ./plugin`), and load/test skills locally in Codex, with no publish step required; verify by following the README's own steps end-to-end.
- [x] 9.2 Write `CHANGELOG.md` with an initial `0.1.0` entry summarizing this change; verify its version matches `package.json`.

## 10. End-to-end verification

- [x] 10.1 Run the full build pipeline (`build.mjs`, `sync-version.mjs`, `validate.mjs`) from a clean checkout; verify all three exit successfully.
- [x] 10.2 Load the plugin locally via `claude --plugin-dir ./plugin` and manually invoke `ux-crux:review` plus at least one domain skill against a sample piece of UX evidence; verify each returns a report following the shared report contract.
- [x] 10.3 Run a local skills.sh-equivalent install against the generated `skills/` tree and confirm all six `ux-crux-<domain>` skills are discoverable with no duplicate or plugin-copy leakage; verify by inspecting the installed skill list.

## 11. Fix: review must be self-contained in every distribution

- [x] 11.1 Add a path-rewrite helper for the doubly-nested case (files copied under `domains/<domain>/` are two levels deep, so their `../../../shared/` links become `../../shared/`, not `../shared/`).
- [x] 11.2 Extend `scripts/build.mjs` to copy each of the other five domains' `references/` into review's generated package under `domains/<domain>/`, for both `skills/ux-crux-review/` and `plugin/skills/review/`; verify by listing the generated tree.
- [x] 11.3 Correct `src/skills/review/SKILL.md` and `src/skills/review/references/review-model.md` to point at the guaranteed local `domains/<domain>/...` paths instead of "see the sibling skills".
- [x] 11.4 Extend `scripts/validate.mjs` with a drift check comparing review's generated `domains/<domain>/*` copies against each domain's real `src/skills/<domain>/references/*`; verify with a deliberate test edit.
- [x] 11.5 Rebuild (`npm run build && npm run validate`) and confirm standalone-install independence (e.g. inspect that `skills/ux-crux-review/domains/` contains all five other domains' content) with no reliance on sibling skill folders being present.
- [x] 11.6 Final cross-check across all six skills (not just review): confirm every generated skill package, installed alone, has no relative path escaping its own package directory - via skills.sh single-skill install (`npx skills add . --skill <name> --list` or equivalent, for review and at least one domain skill) and via a fresh plugin install/validate covering all six.

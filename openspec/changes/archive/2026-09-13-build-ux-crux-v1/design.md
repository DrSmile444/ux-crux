## Context

See `proposal.md` - Why. The repository is currently greenfield (only OpenSpec scaffolding exists). The rule content this change formalizes currently lives only in the user's private, gitignored `local/` research folder and must not be referenced from shipped artifacts going forward - it is migrated into the repo structure this design defines, not linked to.

## Goals / Non-Goals

**Goals:**
- One canonical knowledge/skill source that a build step turns into two distributions (standalone skills.sh packages and a Claude/Codex plugin) without hand-duplicating rule content.
- A shared evidence/severity/report contract that every domain skill and the review skill use identically.
- Mobile UX rules fully encoded for v1, organized so a web/desktop addendum can be added later without restructuring.
- A documented, scriptable local workflow so the user (or a contributor) can build and load the plugin locally without publishing anything.

**Non-Goals:**
- Web/desktop rule content (addendum slot is reserved in the structure; content is not written this change).
- Book-sourced rules (pending the user's separate licensing/attribution check).
- Deterministic measurement scripts (e.g. programmatic contrast-ratio or DOM checks) - the shared model reserves a `scripts/` concept, but no concrete v1 script ships; all v1 checks are model-reasoned against the evidence model's honesty rules.
- Claude's `context: fork` isolation for the review skill - worth revisiting once the review skill's body/reference size is measured in practice.
- Submission to any curated/official marketplace (Claude Community/Official, OpenAI curated). v1 targets local install, a self-hosted GitHub marketplace, and skills.sh only.

## Decisions

### 1. Canonical source uses short names; distributions are generated
`src/skills/<domain>/` holds the short canonical skill id (`review`, `usability`, `psychology`, `accessibility`, `product`, `trust`) plus its `SKILL.md` and `references/`. `scripts/build.mjs` generates:
- `skills/ux-crux-<domain>/` - standalone distribution, `name: ux-crux-<domain>` in frontmatter, for `npx skills add` / skills.sh discovery.
- `plugin/skills/<domain>/` - plugin distribution, `name: <domain>` in frontmatter, referenced by `plugin/.claude-plugin/plugin.json` and `plugin/.codex-plugin/plugin.json`.

**Alternative considered:** a single `skills/` tree with `ux-crux-<domain>` names reused directly inside the plugin manifest. Rejected because Claude/Codex plugin namespacing already prefixes the plugin name, producing a `ux-crux:ux-crux-review` stutter; a single shared name cannot satisfy both a globally-unique standalone id and a clean plugin-scoped id at once.

**Alternative considered:** keep `review`/`psychology`/etc. as the only public names everywhere and give up standalone skills.sh distribution. Rejected because standalone discoverability was an explicit goal of the naming research and costs nothing once a build step exists.

### 2. `src/shared/` holds the evidence, severity, and report models once
`evidence-model.md`, `severity-model.md`, and `report-contract.md` are written once in `src/shared/` and referenced (not copy-pasted) by every domain skill's `SKILL.md`. The build step copies or inlines them into each generated skill package so a distributed skill remains self-contained (Claude caches an installed plugin locally; a generated skill must not depend on a relative path outside its own directory).

**Alternative considered:** duplicate the three model files into every skill's `references/` by hand. Rejected - same rationale as decision 1: one edit must not require six manual updates.

### 3. Per-domain references split into a platform-agnostic core plus a mobile addendum
Each domain's `references/` separates `core.md` (platform-agnostic principles) from `mobile.md` (iOS/Android platform contracts, touch/gesture specifics, safe-area/inset rules). A future `web.md` addendum can be added per domain without touching `core.md` or restructuring the skill.

**Alternative considered:** one flat `references/rules.md` per domain mixing mobile and general rules (mirrors the original research documents' structure). Rejected per the confirmed "mobile-first, then web" scope decision - flattening would force a rewrite when web rules are added later instead of an additive file.

### 4. All six skills stay model-invocable; no explicit-only mode
No skill sets `disable-model-invocation` (Claude) or an equivalent implicit-invocation opt-out (Codex). Routing correctness is carried entirely by each skill's `description` field (what it's for, when to use it), not by disabling auto-triggering. Context cost of six short descriptions (~70 tokens each) is negligible; the real budget lever is keeping each `SKILL.md` body short and routing detail into `references/`.

**Alternative considered:** make the five domain skills explicit-only and route everything through `review`. Rejected - it would make `ux-review` an undesired required dependency (violates the "domain skills remain independently invocable" requirement) and Claude/Codex differ enough in how they express explicit-only mode that portability would suffer.

### 5. One SemVer version for the whole plugin, starting at 0.x
`package.json` (tooling-only, not published to npm) holds the single version. `scripts/sync-version.mjs` propagates it into `plugin/.claude-plugin/plugin.json` and `plugin/.codex-plugin/plugin.json`. `scripts/validate.mjs` fails if distributed skill content changed since the last tagged version without a version bump (Claude uses `version` as an install cache key, so a missed bump silently withholds updates from existing users).

**Alternative considered:** version each of the six skills independently. Rejected - the research and the user's own review flagged this as a near-certain release/dependency-tracking burden for a project this size; a single framework-level version is simpler and matches how the skills are actually released (together, from one source).

### 6. Local-run workflow is a first-class, documented artifact
`README.md` documents: `node scripts/build.mjs` to generate both distributions, `claude --plugin-dir ./plugin` to load the plugin locally in Claude Code without a marketplace, and the equivalent local-skill-loading step for Codex, so a change can be verified before any publish step exists.

### 7. Review must bundle every domain's references, not just link to them
`review`'s own `references/` originally held only `review-model.md` (methodology); the actual rule content it needs to apply lived only in the other five domains' `references/`, and `review/SKILL.md` pointed at them by name ("see the sibling skills") relying on cross-directory file reads.

Confirmed via research (vercel-labs/skills README + source, `claude plugin install --help`, `codex plugin add --help`): `npx skills add <repo> --skill <name>` installs only that one directory - no dependency/companion-skill mechanism exists in skills.sh at all. Claude/Codex plugin installs always bring the whole plugin together (no per-skill cherry-picking there), so this specifically breaks when `review` is installed standalone via skills.sh - an explicitly intended path per our own `skills.sh.json` "Complete Review" grouping.

`scripts/build.mjs` additionally copies each of the other five domains' `references/` into review's generated package (both distributions) under `domains/<domain>/`, mirroring decision 2's `shared/` pattern exactly - single source stays each domain's own `src/skills/<domain>/references/`; duplication only appears in review's generated output. `review/SKILL.md` and `review/references/review-model.md` are corrected to point at the guaranteed local `domains/<domain>/...` paths instead of "see the sibling skills."

**Alternative considered:** rely on Claude/Codex plugin install always bundling all 6 together. Rejected - still leaves the skills.sh standalone path broken, and doesn't defend against future harnesses or manual deletion.

**Alternative considered:** make `review` programmatically invoke the other 5 skills. Rejected per decision 4's existing rationale (harness-specific skill-to-skill invocation).

**Alternative considered:** mark `review` bundle-only, not standalone-installable. Rejected - contradicts the explicit "Complete Review" skills.sh grouping and the point of having one independently-discoverable full-audit entry point.

## Risks / Trade-offs

- [Risk] Generated `skills/` (root) and `plugin/skills/` directories both exist in the repo; a naive `npx skills add` or skills.sh crawl could pick up the plugin copy too and double-list skills. → Mitigation: tasks include verifying this with a real `npx skills add` dry run against the built repo, and using `metadata.internal: true` (or excluding `plugin/` from skills.sh discovery) if the tool does not already ignore it.
- [Risk] Migrating a ~191-rule catalog into six domains' `references/` risks losing evidence/severity metadata or silently dropping rules in transcription. → Mitigation: tasks include a rule-coverage checklist (every rule ID from the source catalog mapped to exactly one destination reference file) before the migration task is considered done.
- [Risk] A shared model referenced by six skills (decision 2) could drift if a skill's local copy is hand-edited post-generation instead of editing `src/shared/`. → Mitigation: `scripts/validate.mjs` diffs each generated skill's shared-model section against `src/shared/` and fails on drift.
- [Trade-off] review's generated package now bundles a full copy of all ~186 non-review rules, substantially increasing its distributed size versus a single domain skill. Accepted: this only affects install/distribution size, not context-window usage (references still load on demand); the alternative - a hollow review skill with no content when installed alone - is strictly worse.
- [Trade-off] No deterministic `scripts/` checks in v1 (e.g. contrast ratio) means some accessibility findings that could be exact are reported as model judgment with a confidence level instead. Acceptable for v1 since the evidence model already requires honest confidence/evidence labeling; revisit once real review usage shows which checks are worth automating.

## Open Questions

- Exact skills.sh discovery behavior around `plugin/skills/` duplicate names - resolved empirically once the repo exists and a real `npx skills add` dry run is run (does not change the spec, approach, or task breakdown; only how thoroughly task "verify skills.sh discovery" is executed).
- Whether `metadata.internal: true` or a `.skillsignore`-equivalent is the right exclusion mechanism for skills.sh, if the duplicate-listing risk above materializes - a packaging detail resolvable during implementation without changing scope.

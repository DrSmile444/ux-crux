## Why

AI coding agents (Claude Code, Codex) currently review UX ad hoc, relying on unstructured LLM opinion with no evidence trail, no severity model, and no defence against encoding folk rules ("always confirm delete", "never use a hamburger menu") or manipulative psychology ("use loss aversion") as best practice. A mobile UX research base already exists (a ~191-rule catalog spanning platform contracts, accessibility, usability, and ethically-gated psychology, backed by 125 cited sources) and is mature enough to operationalize into a portable, evidence-driven review toolkit now, before the research goes stale or scope creeps further.

## What Changes

- Introduce the `ux-crux` plugin: six Agent Skills — one full-audit entry point (`review`) plus five domain lenses (`usability`, `psychology`, `accessibility`, `product`, `trust`) — each a self-contained package of a `SKILL.md` plus scoped `references/`.
- Encode a shared evidence model (`VERIFIED`/`SUPPORTED`/`LIKELY`/`RISK`/`NOT ASSESSABLE`), a severity model (`blocker`/`major`/`moderate`/`minor`), and a report contract (no opaque single score; blockers + category health + missing states + top-impact fixes) as shared source referenced by every skill.
- Migrate the mobile UX rule catalog out of private research notes and into per-domain `references/` files, split into a platform-agnostic core plus a mobile addendum per domain (web/desktop addenda deferred).
- Build a canonical-source → generated-distribution pipeline: short skill names (`review`, `psychology`, ...) in source, generated as `ux-crux-<domain>` for standalone/skills.sh distribution and as short names inside the Claude/Codex plugin (so plugin namespacing yields `ux-crux:review` without stutter).
- Add plugin manifests (`.claude-plugin/plugin.json` + `marketplace.json`, `.codex-plugin/plugin.json`) and a `skills.sh.json` grouping file, all versioned from one SemVer source of truth.
- Add a `README.md` documenting the project and, explicitly, how to run/test the plugin locally (local build, `claude --plugin-dir`, local `npx skills add` flow).
- All six skills stay model-invocable (auto-triggered) on both agents; no explicit-only/`disable-model-invocation` skills in v1.

**Deferred / explicitly out of scope for this change**: web/desktop rule content, book-sourced rules (pending a separate licensing check), Claude `context: fork` isolation for the full review skill, deterministic measurement scripts (e.g. contrast-ratio checking), submission to any curated/official marketplace.

## Capabilities

### New Capabilities
- `ux-crux/review`: the full-audit entry skill — determines which domain lenses apply to a given feature/flow/screen and synthesizes cross-domain findings using the shared evidence, severity, and report models; its generated package bundles a copy of every domain's reference content so it works correctly even when installed alone via skills.sh.
- `ux-crux/usability`: domain skill for task flow, interaction friction, navigation, forms, system status, and error recovery.
- `ux-crux/psychology`: domain skill for cognitive/attention/motivational/emotional/behavioral-economics/social/habit psychology, gated by the four-part ethical test (evidence, applicability, user benefit, agency & truthfulness) before any mechanism becomes a recommendation.
- `ux-crux/accessibility`: domain skill for WCAG conformance and inclusive interaction (contrast, target size, screen-reader semantics, gesture alternatives, text scaling).
- `ux-crux/product`: domain skill for goal clarity, user intent, information architecture, and content/UX writing.
- `ux-crux/trust`: domain skill for trust signals, permissions/onboarding/interruption timing, and destructive-action safety.
- `ux-crux/distribution`: the build and packaging system — canonical `src/` layout, the build step that generates the `skills/` (standalone) and `plugin/` (Claude/Codex) distributions with correct naming, single-SemVer version sync across `package.json` and both plugin manifests, `skills.sh.json` marketplace grouping, and the documented local run/test workflow.

### Modified Capabilities
(none — greenfield project, no existing specs)

## Impact

- New content only; no existing code, users, or systems are affected (greenfield repository, currently only OpenSpec scaffolding exists).
- Affected paths: `src/skills/**`, `src/shared/**`, `skills/**` (generated), `plugin/**` (generated), `scripts/**`, `evals/**`, `skills.sh.json`, `package.json`, `README.md`, `CHANGELOG.md`.
- Introduces a build dependency (Node-based `scripts/build.mjs` and friends) not previously present in the repo.
- Private research notes in the gitignored `local/` folder become obsolete as a reference once their content is migrated into `src/skills/*/references/`.

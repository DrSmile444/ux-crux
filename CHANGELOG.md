# Changelog

All notable changes to ux-crux are documented here. Versioning follows SemVer; the whole plugin is versioned as one unit (see `src/skills/review/references/review-model.md`'s sibling design note in `design.md` for why).

## 0.1.2 — review self-containment fix

Fixed: `review`'s generated package previously carried no rule content of its own — only lens-selection methodology — and relied on the five domain skills' packages being installed alongside it. Confirmed (research + a real isolated `npx skills add --skill ux-crux-review` install) that skills.sh has no dependency mechanism between skills, so a standalone `review` install had nothing to apply. `scripts/build.mjs` now bundles a generated copy of every domain's `references/` into review's own package under `domains/<domain>/`, in both distributions; `scripts/validate.mjs` gained a matching drift check. Also tightened a same-class cross-reference in `trust/references/core.md` that named another skill's file by path in prose.

Verified with a real isolated install: `ux-crux-review` and `ux-crux-accessibility` each install completely alone (no sibling ux-crux package present) with zero missing or escaping file references, across all twelve generated packages (six skills x two distributions).

## 0.1.0 — initial release

First build of ux-crux: six Agent Skills (`review`, `usability`, `psychology`, `accessibility`, `product`, `trust`), a shared evidence/severity/report-contract model, and a canonical-source-to-two-distributions build pipeline (standalone `ux-crux-<domain>` for skills.sh, short-named plugin skills for Claude Code and Codex).

- Migrated the full mobile UX rule catalog (191 rules across purpose/task, navigation, actions, touch/ergonomics, forms, system status, errors/recovery, onboarding/trust, search, accessibility, adaptive layout, content, interruptions, responsiveness, interaction-efficiency/focus, and psychology/ethical-persuasion) into per-domain `references/`, split into platform-agnostic core and mobile addenda.
- Added the four-gate ethical test (evidence, applicability, user benefit, agency & truthfulness) for every psychological/persuasive mechanism in the `psychology` skill.
- Added `plugin/.claude-plugin/plugin.json` + `marketplace.json` and `plugin/.codex-plugin/plugin.json`, both validated against their real manifest schemas.
- Added `skills.sh.json` marketplace grouping.
- Added 17 eval cases (11 trigger/routing cases, 6 output/report-contract cases) under `evals/`.
- Documented a fully local build/test/run workflow in `README.md` — no publishing step required to try or modify the plugin.

**Not yet included** (see `design.md`'s Non-Goals): web/desktop rule content, book-sourced rules, deterministic measurement scripts (e.g. contrast-ratio checking), and submission to any curated/official marketplace.

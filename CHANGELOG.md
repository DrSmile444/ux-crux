# Changelog

All notable changes to ux-crux are documented here. Versioning follows SemVer; the whole plugin is versioned as one unit (see `src/skills/review/references/review-model.md`'s sibling design note in `design.md` for why).

## 0.1.6 — five targeted rule additions from an external UX-research comparison pass

Added a small number of specific, named-source rule additions found while comparing this project's existing catalog against a well-known secondary synthesis of classic UX psychology research. Not a wholesale import of that synthesis — each addition traces to a named, verifiable primary source (NN/g, an academic study, or existing platform guidance), consistent with every other rule in this project.

- `usability`: new folk-rule guard debunking "Miller's Law caps navigation at 7 visible items" (the law governs active recall, not recognition of continuously visible choices); new `R06R` distinguishing the sub-400ms flow-state finding (Doherty & Thadani, 1982) from the existing 0.1s/1s/10s perceived-response heuristic (`R01R`), so the two are no longer easy to conflate; `L07` gained a concrete "~300%" text-expansion example.
- `psychology`: new `PA09` (banner blindness) — legitimate content styled like an ad banner gets filtered out by selective attention, the mirror-image failure to `PA01`/`PA03`/`PA04`'s over-emphasis concern.
- `trust`: new `E08` — deliberate, brief friction/staging as a trust signal for high-stakes/security-sensitive actions, explicitly distinct from the existing destructive-action-confirmation rules (which prevent accidental loss, not build perceived trust), and explicitly guarded against over-applying friction to routine actions.

## 0.1.4 — remote install verified; manifest-location false start reverted

Added a `README.md` "Install" section with commands for skills.sh, the Claude Code plugin, and the Codex plugin — verified against the real public repo, not just locally.

Along the way, `.claude-plugin/`/`.codex-plugin/` were briefly moved to the repo root to make `claude plugin marketplace add owner/repo` resolve without a subdirectory. That broke something more important: Claude Code auto-discovers *any* directory literally named `skills/` next to a plugin's manifest, regardless of what `plugin.json`'s own `skills` array declares — with the manifest at the repo root, the repo's own top-level `skills/` (the skills.sh standalone distribution) got swept in too, doubling the installed skill count from 6 to 12. Reverted to the original, collision-free layout (manifests nested under `plugin/`). Remote Claude/Codex installs need a clone-then-point-at-subdirectory step instead of a bare `owner/repo` one-liner; skills.sh's remote install is unaffected and stays one line. `metadata.internal: true` was added to the plugin distribution's `SKILL.md` files as defense-in-depth against the same class of duplicate-listing issue.

Also added GitHub repo topics and five domain-specific issue labels (`review`, `usability`, `psychology`, `product`, `trust`; `accessibility` already existed as a GitHub default).

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

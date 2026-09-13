# UX Crux 👁️

[![Claude Code plugin](https://img.shields.io/badge/Claude_Code-plugin-CC785C)](#install)
[![Codex plugin](https://img.shields.io/badge/Codex-plugin-000000)](#install)
[![skills.sh compatible](https://img.shields.io/badge/skills.sh-compatible-2EA44F)](#install)

Evidence-driven UX review skills for AI coding agents (Claude Code, Codex). ux-crux reviews a feature, screen, or flow across usability, psychology, accessibility, product, and trust — and reports graded findings instead of a single opaque score.

Quickest way in — works with any agent `npx skills` supports:

```bash
npx skills add DrSmile444/ux-crux
```

![ux-crux banner](assets/banner.png)

## What's in the plugin

One full-audit entry point plus five domain lenses. Every one of the six is independently usable — the domain skills do not require the entry point to run first.

| Skill | Use it for |
|---|---|
| `review` | A broad, end-to-end UX review across every applicable lens. |
| `usability` | Task flow, interaction efficiency, navigation, forms, system status, error recovery. |
| `psychology` | Cognitive load, attention, motivation, emotion, behavioral economics, social proof, habit formation — with a mandatory four-gate ethical test before any mechanism is recommended. |
| `accessibility` | WCAG conformance and inclusive interaction (contrast, touch targets, text scaling, screen readers, gesture alternatives). |
| `product` | Primary goal clarity, information architecture, content/UX writing. |
| `trust` | Permission/onboarding timing, destructive-action safety, notification honesty. |

v1 covers mobile UX (iOS/Android) in full. Web is in scope too — most rules are platform-agnostic and already apply to web as-is; a domain gains its own `web.md` addendum only when a rule is genuinely web-specific (see `product/references/web.md`, added from an eye-tracking-research comparison pass). Each domain's reference material is split into a platform-agnostic core, a mobile addendum, and — where warranted — a web addendum, so a future desktop addendum can follow the same pattern without restructuring.

## How findings are reported

Every finding carries:

- an **evidence status** — `VERIFIED`, `SUPPORTED`, `LIKELY`, `RISK`, or `NOT ASSESSABLE` (how strongly the evidence you gave it supports the claim)
- a **severity** — `blocker`, `major`, `moderate`, or `minor` (how bad it would be if true)
- a **confidence** level — `high`, `medium`, or `low`

A review never collapses to one opaque score. It reports blockers and majors first, category health per lens, what states/context couldn't be assessed, and a top-3 highest-impact list. See `src/shared/evidence-model.md`, `severity-model.md`, and `report-contract.md` for the full model.

## Evidence base

Every rule in ux-crux is traced to a named, independently verifiable source, cited in the `Sources` column right next to the rule — this isn't a list of opinions or folk rules an author wrote down. The initial catalog was a ~190-rule base spanning platform contracts, accessibility, usability, and ethically-gated psychology, backed by 125 cited sources: Nielsen Norman Group research articles, WCAG 2.1/2.2 success criteria, Apple Human Interface Guidelines, Android/Material Design guidance, ISO 9241-210, and Google Research's HEART framework.

From there, the catalog has grown through deliberate research-comparison passes, each one comparing this project's existing rules against a specific book or research synthesis, adding only what's a genuine gap traced to an independent named source — never a wholesale import of someone else's rule list:

- Michael J. Metts & Andy Welfle, *Writing Is Designing: Words and the User Experience* (Rosenfeld Media, 2nd ed., 2020)
- Jennifer Romano Bergstrom & Andrew Schall (eds.), *Eye Tracking in User Experience Design* (Morgan Kaufmann/Elsevier, 2014)
- Cal Newport, *Digital Minimalism*
- Leah Buley & Rob Natoli, *The User Experience Team of One* (Rosenfeld Media, 2nd ed.)
- additional passes against other well-known UX-psychology reference works, where each added rule is attributed to the underlying named primary study or guideline rather than to the secondary text that surfaced it

Individual rules also carry citations to specific named studies and frameworks behind them — among others, Melanie Polkosky's usability factor-analysis study, Doherty & Thadani's response-time research, Kahneman et al.'s Peak-End research, Reber/Schwarz/Winkielman's processing-fluency research, Matteo Penzo's label-placement study, the Fogg Behavior Model, Donna Spencer's tree-testing methodology, Christine Perfetti's Five-Second Test, Edward de Bono's Six Thinking Hats, and Rosenfeld/Morville/Arango's *Information Architecture for the Web and Beyond*.

`CHANGELOG.md` is the audit trail for this: every comparison pass records what it added, exactly which rule IDs and sources, and — just as deliberately — what it left out and why (process/strategy content, a book's own unattributed framework, or something already covered).

## Install

Each of these installs the whole plugin/repo by default — a skills.sh install lets you (or, if you're scripting it non-interactively, installs) pick from the skills it finds; Claude/Codex installs bring all six skills together as one plugin, same as any Claude/Codex plugin.

### skills.sh (any agent `npx skills` supports)

```bash
npx skills add DrSmile444/ux-crux
```

Only picks up the six `ux-crux-<domain>` skills — the plugin's own short-named copies and this repo's OpenSpec tooling are both marked internal and excluded. If you already know you only want one lens:

```bash
npx skills add DrSmile444/ux-crux --skill ux-crux-review
```

### Claude Code plugin

```bash
claude plugin marketplace add DrSmile444/ux-crux
claude plugin install ux-crux@ux-crux
```

### Codex plugin

```bash
codex plugin marketplace add DrSmile444/ux-crux
codex plugin add ux-crux@ux-crux
```

All three are verified end to end against the real public repo (marketplace add → install → list → uninstall), with no clone step for any of them.

## Repository layout

```
src/skills/<domain>/        canonical source: SKILL.md + references/ (edit here)
src/shared/                 evidence, severity, and report models (single source of truth)
skills/                     generated — standalone distribution (ux-crux-<domain>), for skills.sh
plugin/                     generated — Claude/Codex plugin distribution:
  .claude-plugin/plugin.json   Claude plugin manifest
  .codex-plugin/plugin.json    Codex plugin manifest
  skills/<domain>/            short skill names (review, usability, ...), metadata.internal:
                               true so skills.sh doesn't also list these under their short names
.claude-plugin/marketplace.json   repo-root marketplace pointer: "source": "./plugin" —
                                    the only reason this one file lives at the root
evals/                      trigger evals (routing) and output evals (one fixture per domain)
scripts/                    build.mjs, sync-version.mjs, validate.mjs, test.mjs
skills.sh.json              skills.sh marketplace page grouping
```

Never edit files under `skills/` or `plugin/skills/` by hand — they are generated from `src/` and will be overwritten by the next build.

`plugin.json` deliberately stays nested inside `plugin/`, not at the repo root, for both Claude and Codex. Claude Code auto-discovers *any* directory literally named `skills/` sitting next to a plugin's manifest, on top of whatever `plugin.json`'s own `skills` array declares. The repo root already has its own `skills/` (the skills.sh distribution, different names) — if `plugin.json` lived there too, installing the plugin would expose all 12 directories as 12 separate skills instead of 6 (verified by comparing `claude plugin details ux-crux` before/after: 12 vs. 6). `marketplace.json` doesn't have that problem — it's a thin pointer, not a component-discovery root — so it lives at the repo root (required for a bare `owner/repo` marketplace source to resolve) with `"source": "./plugin"` telling both `claude plugin marketplace add` and `codex plugin marketplace add` (which reads the same file) where the actual plugin content is. No clone-then-point-at-a-subdirectory step needed.

This repo's own OpenSpec workflow skills (`.claude/skills/openspec-*`, `.agents/skills/openspec-*` — used to plan and build ux-crux itself, not part of what ux-crux ships) are marked `metadata.internal: true` too, so they don't get swept into a bare `npx skills add DrSmile444/ux-crux` alongside the six ux-crux skills.

## Run locally

You do not need to publish anything to try or modify ux-crux.

### 1. Build the distributions

```bash
npm install    # no dependencies today, but keeps this step future-proof
npm run build  # node scripts/build.mjs — generates skills/ and plugin/skills/ from src/
```

This regenerates `skills/ux-crux-<domain>/` and `plugin/skills/<domain>/` from `src/skills/<domain>/`. Run it again after editing anything under `src/`.

### 2. Load the plugin locally in Claude Code

From the repository root:

```bash
claude --plugin-dir ./plugin
```

This loads the six skills without installing anything or touching a marketplace. Inside that session, either ask a UX question naturally (the skills are model-invocable and route themselves) or invoke one explicitly, e.g. "review the UX of this screen" or "use the accessibility skill to check this button".

To validate the manifest itself without starting a session:

```bash
claude plugin validate ./plugin --strict
```

To try the local repo as a marketplace without publishing anything (uses the root `marketplace.json`, same as a real install would):

```bash
claude plugin marketplace add ./
claude plugin install ux-crux@ux-crux
```

### 3. Load and test skills locally in Codex

```bash
python3 ~/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py ./plugin
```

validates `plugin/.codex-plugin/plugin.json` against the Codex plugin schema. To actually use the skills locally:

```bash
codex plugin marketplace add .
codex plugin add ux-crux@ux-crux
```

### 4. Try it against skills.sh's install path

```bash
npx skills add . --list
```

lists what's discoverable without installing anything — should show exactly the six `ux-crux-<domain>` skills (not the OpenSpec tooling, not the plugin's short-named copies) after a build.

### 5. Keep versions in sync

If you change any distributed skill content, bump `package.json`'s `version`, then run:

```bash
npm run sync-version   # propagates the version into both plugin manifests
npm run validate       # fails if content changed without a version bump, or if a
                        # generated shared/ copy drifted from src/shared/
npm run test           # structural preflight over evals/; add --live to actually
                        # run `claude plugin eval` against your own account (costs
                        # real model credits)
```

## Contributing a rule change

1. Edit the relevant file under `src/skills/<domain>/references/` (or `src/shared/` for the evidence/severity/report models — changing these affects every skill).
2. `npm run build`.
3. `npm run validate`.
4. Bump the version in `package.json` if you changed any distributed content, then `npm run sync-version`.
5. Optionally run `npm run test -- --live` to grade the change against the eval suite (spends real model credits on your own account).

## License

MIT

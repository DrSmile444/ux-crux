# UX Crux

Evidence-driven UX review skills for AI coding agents (Claude Code, Codex). ux-crux reviews a feature, screen, or flow across usability, psychology, accessibility, product, and trust — and reports graded findings instead of a single opaque score.

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

v1 covers mobile UX (iOS/Android) in full; each domain's reference material is split into a platform-agnostic core and a mobile addendum, so a web/desktop addendum can be added later without restructuring.

## How findings are reported

Every finding carries:

- an **evidence status** — `VERIFIED`, `SUPPORTED`, `LIKELY`, `RISK`, or `NOT ASSESSABLE` (how strongly the evidence you gave it supports the claim)
- a **severity** — `blocker`, `major`, `moderate`, or `minor` (how bad it would be if true)
- a **confidence** level — `high`, `medium`, or `low`

A review never collapses to one opaque score. It reports blockers and majors first, category health per lens, what states/context couldn't be assessed, and a top-3 highest-impact list. See `src/shared/evidence-model.md`, `severity-model.md`, and `report-contract.md` for the full model.

## Repository layout

```
src/skills/<domain>/        canonical source: SKILL.md + references/ (edit here)
src/shared/                 evidence, severity, and report models (single source of truth)
skills/                     generated — standalone distribution (ux-crux-<domain>), for skills.sh
plugin/                     generated — Claude/Codex plugin distribution (short skill names)
evals/                      trigger evals (routing) and output evals (one fixture per domain)
scripts/                    build.mjs, sync-version.mjs, validate.mjs, test.mjs
skills.sh.json              skills.sh marketplace page grouping
```

Never edit files under `skills/` or `plugin/skills/` by hand — they are generated from `src/` and will be overwritten by the next build.

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

### 3. Load and test skills locally in Codex

```bash
python3 ~/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py ./plugin
```

validates `plugin/.codex-plugin/plugin.json` against the real Codex plugin schema. To actually use the skills locally with the Codex CLI, add this repo's `plugin/` directory as a local marketplace source and install from it (see `codex plugin marketplace add --help` and `codex plugin add --help` for the exact flags in your installed Codex CLI version), then invoke a skill in a Codex session the same way as above.

### 4. Try it against skills.sh's install path

```bash
npx skills add . --list
```

lists what the standalone `skills/` distribution exposes without installing anything — useful for confirming all six `ux-crux-<domain>` skills are discoverable after a build.

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

## Why

Comparing this project's rule catalog against Stephen P. Anderson's *Seductive Interaction Design: Creating Playful, Fun, and Effective User Experiences* surfaced one real structural gap: gamification/game mechanics are currently only covered as an ethics guardrail (`psychology`'s `PB12` variable-rewards caution, `PH01`-`PH04` habit/streak/FOMO cautions). No part of the catalog gives the reviewer a framework for *legitimate* game design — matching challenge to skill, a genuine core challenge behind any points/badges layer, bounded collectible sets, and meaningful feedback loops — as distinct from a "sugarcoating" anti-pattern that bolts reward mechanics onto a task with no real challenge. The same comparison pass also found several smaller, independently-sourced gaps in existing files (an intention-action bridging mechanism, a legitimate-vs-fabricated progress distinction, a derivable-data form anti-pattern, dynamic outcome-explicit button copy, a review technique, and a social-proof nuance), plus one popular-but-contested claim (choice overload / the "jam study") that belongs in `ethics.md`'s evidence-strength-corrections table rather than being encoded as a hard rule.

Consistent with every prior comparison pass (see `CHANGELOG.md` 0.1.9-0.1.16), this is a targeted, named-source addition — not a wholesale import of the book's full 24-item extraction. Several of the book's items were confirmed already covered by existing rules and are left untouched; several others describe team process/strategy (not what a static-evidence review checks) and are scoped out.

## What Changes

- **New reference file** `src/skills/psychology/references/gamification.md` (new rule prefix `PG`), opening with the Elements of Game Design Model framework and five new rules (`PG01`-`PG05`) covering Flow/challenge-skill balance, intrinsic-challenge-vs-sugarcoating, set completion/collection motifs, the personal feedback-loop "mirror effect," and constraint-as-focus (a real, disclosed limit distinct from `PB08`'s fake scarcity).
- **New rules** in existing psychology files: `PM08` (channel factors / concrete execution-intention prompts) and `PM09` (the Endowed Progress Effect as a legitimate head-start, distinguished from `PM07`'s fabricated-progress violation) in `motivation.md`; `PB13` (negative-social-proof risk and high-density visual social proof vs. static text testimonials) in `behavioral-economics.md`.
- **Citation/procedure enrichment, no new ID**: `motivation.md`'s application notes for `PM01`/`PM05` gain Fogg's explicit Trigger→Ability→Motivation troubleshooting order.
- **New evidence-strength-corrections row** in `ethics.md`: choice overload / the "jam study" (Iyengar & Lepper) has contested replication (Scheibehenne et al.'s meta-analysis) and is treated as a contextual, low-confidence heuristic, not a hard "limit to 3-4 options" rule.
- **New rule** `AF03` in `src/skills/usability/references/affordances.md`: physical depth-cue/lighting consistency (the "could you build a physical model of this?" test), extending the affordances vocabulary's Physical/Sensory types.
- **New rule** `F25` in `src/skills/usability/references/core.md`'s Forms & input table: a form must not ask for data the system can already derive from input already provided (e.g. auto-detecting card type from the card number instead of a manual dropdown).
- **New rule** `C24` in `src/skills/product/references/core.md`'s Content table: a primary action button states its concrete, dynamic outcome (a real substituted value) rather than a generic verb.
- **New technique note** (non-rule, same precedent as the existing Squint test) in `src/skills/review/references/review-model.md`: the "Bringing Browser to Life" two-person role-play UI audit.
- `CHANGELOG.md` gets a new entry for this pass; `README.md`'s Evidence base section gains the book citation and its opening paragraph's rule count is recounted and updated (294 → 305).

**Scoped out** (documented here, no rule added):
- UX Hierarchy of Needs (Functional→Meaningful maturity ladder) — strategic/business framing; its core "usability is a prerequisite for delight" point is already expressed by `psychology`'s `PE01`.
- Connecting Business Goals to Behavioral Goals (Joshua Porter's question) — describes how a product team scopes its own briefs, not what a static-evidence review checks.
- Kano Model / delighter-decay-over-time — product-roadmap strategy, not assessable from a single reviewed snapshot of evidence (explicit owner decision).
- Rider & Elephant (from *Switch*) — a team communication metaphor, not a checkable review rule.

**Already covered, confirmed and left untouched:**
- Information Gap Curiosity Teasing → `PB10`
- Intelligent Defaulting / status-quo bias → `PB01`/`PB02`
- Anchoring & relative value framing → `PB03`
- Recognition over recall / "clicks over characters" → `PC02`
- BJ Fogg Behavior Model core (B=MAP) → already cited in `PM01`/`PM05`, `PH02`, `P08` (only the troubleshooting-order nuance above is new)
- Aesthetic-Usability Effect → `PE06`/`PE07` and `review`'s `V01`

## Capabilities

### New Capabilities

None — this change maps entirely onto existing skills; no seventh skill is proposed.

### Modified Capabilities

- `ux-crux/psychology`: adds a gamification-mechanics diagnostic (Flow, sugarcoating/intrinsic-challenge, set completion, feedback-loop mirror effect, constraint-as-focus), a channel-factors/execution-intention requirement, a legitimate-head-start-progress requirement, and a social-proof density/negative-signal requirement.
- `ux-crux/usability`: adds a physical depth-cue-consistency requirement (affordances diagnostic) and a derivable-data form requirement.
- `ux-crux/product`: adds a dynamic outcome-explicit button-copy requirement.
- `ux-crux/review`: adds the role-play UI-audit technique to its validation methodology.

## Impact

- Affected files: `src/skills/psychology/references/gamification.md` (new), `motivation.md`, `behavioral-economics.md`, `ethics.md`; `src/skills/usability/references/affordances.md`, `core.md`; `src/skills/product/references/core.md`; `src/skills/review/references/review-model.md`; `CHANGELOG.md`; `README.md`.
- Generated distributions (`skills/`, `plugin/`) are rebuilt from these sources via `npm run build`; not hand-edited.
- No breaking changes — all additions are new rule rows or new reference files; no existing rule ID's meaning is altered.

---
name: psychology
description: Use when the user wants analysis of attention, cognitive load, motivation, emotion, behavioral economics (defaults, anchoring, loss aversion, scarcity, urgency), social proof, habit formation, gamification/game mechanics, or persuasive/dark-pattern ethics in a UI or feature — including questions like "is this manipulative" or "why would this motivate users". Not for general task-flow/navigation review (use `usability`) or accessibility (use `accessibility`). Accepts an optional "smart" or "full" argument: "smart" (the default) selects rules using judgment; "full" performs a mandatory, exhaustive rule-by-rule sweep of every applicable rule instead.
license: MIT
metadata:
  author: ux-crux
  version: "0.1.0"
---

Analyze the psychological mechanisms present in the reviewed evidence — cognitive, attentional, motivational, emotional, behavioral-economic, social, and habit-related — and evaluate whether their use is ethical, not just whether it is effective.

## Procedure

**Mode.** By default (no argument, or an explicit "smart" argument) this skill selects which rules to check using judgment, as described in the steps below. When invoked with an argument recognizable as "full" (case-insensitive), it instead performs a mandatory, exhaustive sweep: for every rule row in every topic file (`cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, `habits.md`, `gamification.md`) and `ethics.md` relevant to the mechanisms present in this evidence, explicitly record VIOLATED / NOT VIOLATED / NOT ASSESSABLE / NOT APPLICABLE before writing the narrative report, rather than relying on judgment to select a subset. Show this checklist before the report. If the argument is present but is neither "full" nor "smart", ask the user which mode they intended rather than guessing.

1. **Identify the mechanism(s) present**, not just the surface pattern. Consult the relevant topic file in `references/`: `cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, `habits.md`, or `gamification.md`.
2. **Describe before you prescribe.** State what the mechanism is and its likely behavioral effect, separately from judging whether this specific use is good. A described effect is not automatically a recommendation — see `references/ethics.md`.
3. **Before endorsing any persuasive mechanism as good UX, run the four-gate test** in `references/ethics.md`: Evidence, Applicability, User benefit, Agency & truthfulness. A mechanism that fails any gate becomes an ethical finding, not an endorsement — regardless of how effective it would be at moving a business metric.
4. **Treat anything in `references/ethics.md`'s "Ethical guardrail" evidence level, or any deceptive pattern (fabricated urgency/scarcity, fake social proof, confirmshaming, asymmetric opt-in/opt-out friction, fake authority), as a finding to flag, never a technique to recommend.** This includes unintended meaning created by placing unrelated dynamic content (an ad, a recommendation) directly next to sensitive user content (`references/attention.md`'s PA13) — distinct from PA09/PA11's mistaken-identity failures, since PA13 needs no misidentification at all.
5. Check `references/ethics.md`'s "evidence-strength corrections" table before treating a popular psychology claim (loss aversion, Zeigarnik, Von Restorff, variable rewards, etc.) as settled best practice — most are contextual or require an ethics review, not a blanket application.
6. Tag every finding with evidence status, severity, and confidence, and report using `../../shared/report-contract.md`.

## References

- `references/cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, `habits.md`, `gamification.md` — the mechanism catalog, one topic per file.
- `references/ethics.md` — the four-gate test and evidence-strength corrections; read this before treating any mechanism as a recommendation.
- `../../shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

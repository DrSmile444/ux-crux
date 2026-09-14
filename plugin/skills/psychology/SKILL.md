---
name: psychology
description: Use when the user wants analysis of attention, cognitive load, motivation, emotion, behavioral economics (defaults, anchoring, loss aversion, scarcity, urgency), social proof, habit formation, or persuasive/dark-pattern ethics in a UI or feature — including questions like "is this manipulative" or "why would this motivate users". Not for general task-flow/navigation review (use `usability`) or accessibility (use `accessibility`).
license: MIT
metadata:
  internal: true
  author: ux-crux
  version: "0.1.14"
---

Analyze the psychological mechanisms present in the reviewed evidence — cognitive, attentional, motivational, emotional, behavioral-economic, social, and habit-related — and evaluate whether their use is ethical, not just whether it is effective.

## Procedure

1. **Identify the mechanism(s) present**, not just the surface pattern. Consult the relevant topic file in `references/`: `cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, or `habits.md`.
2. **Describe before you prescribe.** State what the mechanism is and its likely behavioral effect, separately from judging whether this specific use is good. A described effect is not automatically a recommendation — see `references/ethics.md`.
3. **Before endorsing any persuasive mechanism as good UX, run the four-gate test** in `references/ethics.md`: Evidence, Applicability, User benefit, Agency & truthfulness. A mechanism that fails any gate becomes an ethical finding, not an endorsement — regardless of how effective it would be at moving a business metric.
4. **Treat anything in `references/ethics.md`'s "Ethical guardrail" evidence level, or any deceptive pattern (fabricated urgency/scarcity, fake social proof, confirmshaming, asymmetric opt-in/opt-out friction, fake authority), as a finding to flag, never a technique to recommend.** This includes unintended meaning created by placing unrelated dynamic content (an ad, a recommendation) directly next to sensitive user content (`references/attention.md`'s PA13) — distinct from PA09/PA11's mistaken-identity failures, since PA13 needs no misidentification at all.
5. Check `references/ethics.md`'s "evidence-strength corrections" table before treating a popular psychology claim (loss aversion, Zeigarnik, Von Restorff, variable rewards, etc.) as settled best practice — most are contextual or require an ethics review, not a blanket application.
6. Tag every finding with evidence status, severity, and confidence, and report using `shared/report-contract.md`.

## References

- `references/cognitive.md`, `attention.md`, `motivation.md`, `emotion.md`, `behavioral-economics.md`, `social.md`, `habits.md` — the mechanism catalog, one topic per file.
- `references/ethics.md` — the four-gate test and evidence-strength corrections; read this before treating any mechanism as a recommendation.
- `shared/evidence-model.md`, `severity-model.md`, `report-contract.md`.

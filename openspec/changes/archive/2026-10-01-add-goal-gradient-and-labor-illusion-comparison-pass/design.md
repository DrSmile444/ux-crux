## Context

See `proposal.md` for the source, the covered principles and the scoped-out items. This design fixes placement and wording boundaries for two rules.

Next-available IDs (verified by grep before assignment):
- `psychology/references/motivation.md`: table ends at `PM09`, so the new rule is `PM10`.
- `psychology/references/behavioral-economics.md`: table ends at `PB14`, so the new rule is `PB15`.

## Goals / Non-Goals

**Goals:**
- Add the two missing mechanisms with named, verifiable sources and explicit conditions where each does not apply.
- Keep the labor-illusion rule from contradicting `E08` and `PM07`.

**Non-Goals:**
- No change to `E08`, `PM07`, `PM09`, `PE`, `PA04` or the `ethics.md` correction table.
- No new skill, shared-model vocabulary or build change. All six skills remain model-invocable.

## Decisions

| File | ID | Rule | Nearest rule and distinction |
|---|---|---|---|
| `motivation.md` | `PM10` | Goal-gradient: show concrete distance covered and remaining toward a real goal | `PM09` sets where an indicator starts; `PM10` sets how progress toward the goal is expressed. `PM07` stays the truthfulness gate |
| `behavioral-economics.md` | `PB15` | Genuine waits show the work being done | `E08` allows a checking step for high-stakes actions; `PB15` is about making a real wait legible and is never a license to add delay |

**Placement of `PB15`.** The mechanism is a perceived-value and reciprocity effect, a psychology topic, so it goes in `psychology`. `E08` and `S13` stay in `trust` and `usability`; `PB15` names them as its boundary. Alternative considered: extend `E08`. Rejected because `E08` is scoped to high-stakes actions and widening it would blur its "narrow exception" wording.

**Evidence levels.** `PM10`: Strong (a field study of a coffee loyalty program and an online rating task in Kivetz et al., with Hull 1932 as the primary source). `PB15`: Contextual (five lab experiments simulating online travel and dating services, Buell & Norton 2011; effects are context-dependent and the rule passes through the four ethical gates in `ethics.md`). Severity: `PM10` Moderate, `PB15` Minor.

**Rejected from the source.** The video advises adding extra time even when a task is instant. The cited research manipulates real, labelled work, so the rule requires correspondence with work actually done and defers delay-padding to `E08`/`PM07`. The unsourced onboarding-completion claim is not recorded as a rule.

**Consolidation.** One rule per mechanism: the two have different mechanisms (goal proximity versus perceived effort) and different evidence, so they are not merged. Two rules in one domain is within the one-to-three guideline.

## Risks / Trade-offs

- A reviewer could read `PB15` as endorsing fake loading. Mitigation: the rule text and scenarios state that labelled work must correspond to real work and route artificial delay to `E08`/`PM07`.
- Goal-gradient evidence comes from reward programs, so transfer to onboarding is by analogy. Mitigation: `PM10` applies only to a real, recognizable goal and the prose points to `ethics.md`.

## Context

See `proposal.md`. This pass adds citations and one qualification; it adds no rule ID and changes no scoring behavior.

## Goals / Non-Goals

**Goals:**
- Record the variability of loss aversion where the catalog already files it (`ethics.md` evidence-strength corrections).
- Give `PB05` the completion condition of the IKEA effect.

**Non-Goals:**
- No new rule, ID or prefix. The rule total stays 347.
- No change to `PB04`, `PB03`, `F21`, `PM09`, `PM10`, or to any spec requirement.
- All six skills remain model-invocable.

## Decisions

**No delta spec (`skip_specs: true`).** The psychology spec states the four-gate test and names loss aversion only as an example mechanism. The edits change reference text, not a requirement, so a delta would be invented.

**Where the loss-aversion note lives.** The `ethics.md` correction table already holds contested findings (choice overload). The same table takes this row update, so no rule text needs a dispute sentence.

**Wording to the source.** Mrkva et al. report five samples (17,720 participants): loss aversion is present at every knowledge level, lower with more domain knowledge and experience, and higher for older consumers. The row says the effect exists but its size varies, so a reviewer does not treat a loss-framed message as stronger by default and routes it through `PB04` and the four gates.

**IKEA effect.** Norton, Mochon & Ariely show that labor raises valuation only when the task is completed; a failed or destroyed build removes the effect. The `PB05` Sources cell records this condition. The rule text stays unchanged.

**Evidence level.** No new level; `PB05` stays Contextual + ethical.

## Risks / Trade-offs

- Mrkva et al. is itself a response to critiques of loss aversion; naming only the response could look one-sided. Mitigation: the row states variability, which both sides accept, and does not claim the effect is absent.

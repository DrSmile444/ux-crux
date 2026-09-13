# Psychology: motivation, commitment, progress

See `../../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. Read `ethics.md` before treating any mechanism below as a recommendation rather than a description.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| PM01 | Before adding motivational pressure, reduce friction and ensure the desired action is feasible; ability can be a stronger lever than more prompts. | Psychological mechanism | Moderate | Stanford Behavior Design Lab, Fogg Behavior Model; NN/g Less Effort, More Completion (EAS Framework) |
| PM02 | Support autonomy: meaningful choices should remain voluntary, understandable, and reversible where possible. | Psychological mechanism + ethical | Major | Ryan & Deci, Self-Determination Theory (2000); NN/g Autonomy, Relatedness, and Competence in UX Design; NN/g Deceptive Patterns in UX |
| PM03 | Support competence with truthful, interpretable progress and feedback that helps users understand what they achieved and what remains. | Psychological mechanism | Moderate | Ryan & Deci, Self-Determination Theory (2000); NN/g Autonomy, Relatedness, and Competence in UX Design |
| PM04 | Use relatedness/social connection only where it serves the user's context; do not force social exposure or comparison into intrinsically private tasks. | Contextual | Moderate | Ryan & Deci, Self-Determination Theory (2000); NN/g Autonomy, Relatedness, and Competence in UX Design |
| PM05 | Prompts should arrive when the user has sufficient context and ability to act; repeated prompts cannot compensate for a difficult or low-value action. | Psychological mechanism | Moderate | Stanford Behavior Design Lab, Fogg Behavior Model; NN/g Interaction Cost: Definition |
| PM06 | Small commitments can support user-owned goals, but commitment devices must remain low-stakes and should not trap users into escalation. | Contextual + ethical | Major | NN/g The Principle of Commitment and Behavioral Consistency; NN/g Deceptive Patterns in UX |
| PM07 | Progress indicators should represent real progress toward a user-recognizable goal; do not fabricate completion pressure. | Strong + ethical | Major | NN/g The Principle of Commitment and Behavioral Consistency; NN/g Deceptive Patterns in UX |

## How the psychology skill should apply these

Self-Determination Theory (autonomy, competence, relatedness — PM02-PM04) is a strong, well-replicated foundation; translate it cautiously and concretely into the reviewed product rather than as a slogan. PM01/PM05 encode the Fogg model's insight that ability often beats added motivation — before recommending "add more encouragement," check whether the actual blocker is that the action is hard, not that the user is unmotivated. PM06 and PM07 are the ones most prone to becoming exploitative if applied uncritically (fake progress, forced escalating commitment): run both through the four-gate test in `ethics.md` before endorsing them, and treat a fabricated-progress finding as an ethical-guardrail violation, not a style note.

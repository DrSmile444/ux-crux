# Psychology: habit formation and engagement

See `../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. Read `ethics.md` before treating any mechanism below as a recommendation rather than a description.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| PH01 | Optimize for successful/healthy repeated use, not maximum time-in-app, session count, or notification opens by default. | Ethical product principle | Major | NN/g The Vortex; NN/g Deceptive Patterns in UX |
| PH02 | A prompt/notification should serve a user-recognizable goal and arrive when action is feasible; give users meaningful control over recurring prompts. | Strong + ethical | Major | Stanford Behavior Design Lab, Fogg Behavior Model; Apple HIG Managing notifications; Android Notifications guidance |
| PH03 | Infinite content, autoplay, streak pressure, and FOMO mechanisms require explicit justification against user wellbeing and stopping cues. | Ethical guardrail | Major | NN/g The Vortex; NN/g Deceptive Patterns in UX |
| PH04 | Provide natural stopping points for experiences where endless continuation is not necessary for the user's goal. | Ethical guardrail | Moderate | NN/g The Vortex |

## How the psychology skill should apply these

This is the smallest file but carries the project's central engagement-ethics stance: `PH01` — "optimize for healthy engagement, not maximum engagement" — is the standing rule against which every other habit-formation finding is judged. A mechanism that increases time-in-app or session count is not, by itself, a positive finding; it only becomes one if it also demonstrably serves the user's own goal (the four-gate test in `ethics.md`). PH02-PH04 name the specific patterns (compulsive prompting, infinite/autoplay content, absent stopping points) most likely to violate PH01 — treat them as flags to investigate on sight, not techniques to suggest adding.

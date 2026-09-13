---
type: llm
weight: 1
---

Pass if the agent invoked the `ux-crux:psychology` skill — the question is explicitly about a persuasive/behavioral mechanism (loss aversion / streak pressure) and whether its use is manipulative, which is this skill's four-gate ethical test.

Fail if no ux-crux skill was invoked, or if `ux-crux:trust` was invoked instead without also involving psychology's ethical-persuasion framing (a plausible near-miss, since notifications also touch trust, but the dominant framing here is the psychological mechanism itself, not permission/notification-honesty mechanics).

---
type: llm
weight: 1
---

Pass if the response:
1. Flags the mandatory registration-before-value pattern (P06) as a finding — a recipe browser has no obvious safety/security/identity reason to require an account before showing any content.
2. Frames it as `contextual` in evidence terms and `major` in severity by default, per the rule's own encoding — not as an automatic hard blocker, since the rule is explicitly contextual (evidence: Contextual). A response that treats it as a rigid absolute rule with no acknowledgment of possible justification should be marked down, but a confident major finding given the described context (a recipe browser, no stated safety reason) is correct.
3. Recommends allowing guest/anonymous browsing of at least some content before requiring an account.

Fail if the response does not flag the login-wall pattern at all, or treats registration-before-value as always acceptable with no scrutiny.

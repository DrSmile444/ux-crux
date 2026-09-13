---
type: llm
weight: 1
---

Pass if the response:
1. Follows the shared report contract shape: at minimum names a severity (should be `major`) and an evidence status for the main finding, and gives a specific recommendation rather than vague advice.
2. Correctly identifies the core issue as a missing autofocus/intent-continuation problem (the user already expressed intent to search by tapping the icon; the revealed field should receive focus and the keyboard should appear) — this is the IE01/IE02 rule pattern.
3. Recommends focusing the field and showing the keyboard once the field is ready, not a generic "reduce steps" answer with no specifics.
4. Does NOT treat this as a hard, unconditional rule — ideally notes or would note the exception (if Search opened a browse-first experience where typing isn't the obvious next step, autofocus would be wrong), though the description here does not present that exception so a confident finding without hedging is also acceptable.

Fail if the response ignores the autofocus/focus-continuation angle entirely, gives only generic advice, or omits severity/evidence framing entirely.

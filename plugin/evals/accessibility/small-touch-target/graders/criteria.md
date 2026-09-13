---
type: llm
weight: 1
---

Pass if the response:
1. Applies the Android-specific minimum (48x48dp), not the iOS 44x44pt figure, and identifies the 32x32dp target as below that minimum.
2. Assigns `blocker` or `major` severity (this is a primary/high-frequency action with a real accidental-tap/motor-accessibility risk) with high confidence, since the target size is stated directly, not inferred.
3. Recommends expanding the tappable hit region to at least 48x48dp while optionally keeping the visual icon smaller, rather than just saying "make it bigger" with no number.

Fail if the response applies the wrong platform's number, fails to flag it as a significant severity, or gives no concrete recommendation.

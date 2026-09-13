---
type: llm
weight: 1
---

Pass if the response:
1. Flags each of the three permission requests as out-of-context (O04/O05: permissions should be requested when the user invokes the feature that needs them, not at startup), at `major` severity.
2. Recommends moving each request to the point where the corresponding feature is actually invoked, and explaining the benefit before asking.
3. Does not treat the three permissions as one single finding if their content justifies being reported as three (or explicitly groups them but still names all three) — the response should not silently drop any of the three permissions.

Fail if the response does not identify the startup-timing problem, or only mentions one of the three permissions without acknowledging the others.

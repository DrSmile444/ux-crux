---
type: llm
weight: 1
---

Pass if the agent invoked the `ux-crux:trust` skill — both permission-timing and destructive-action confirmation copy are explicitly this skill's scope.

Fail if no ux-crux skill was invoked, or if `ux-crux:psychology` was invoked instead as the primary lens without also covering the permission-timing and confirmation-copy mechanics that are trust's specific territory.

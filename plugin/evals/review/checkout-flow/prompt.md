---
max_turns: 12
allowed_tools: [Read, Glob, Grep, Skill]
---

Use the ux-crux review skill to do a full UX review of this mobile checkout screen:

- On first launch (before this screen), the app requested location, camera, and notification permissions all at once, none tied to a specific action.
- The screen has a "Place order" button and, right next to it with equal visual weight, a "Save for later" button — same size, same color.
- The "Place order" button's tappable area is 30x30dp on Android with a small icon and no label text.
- Tapping "Place order" immediately charges the card with no confirmation step and no undo.
- There is a small always-visible banner: "Only 2 left in stock — order in the next 10 minutes!" that resets its countdown every time the screen reloads.

Give me the full picture.

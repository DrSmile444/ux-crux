---
max_turns: 30
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

Use the ux-crux review skill with the "report" argument on this mobile checkout screen, so I get the HTML report as well:

- On first launch (before this screen), the app requested location, camera, and notification permissions all at once, none tied to a specific action.
- The screen has a "Place order" button and, right next to it with equal visual weight, a "Save for later" button — same size, same color.
- The "Place order" button's tappable area is 30x30dp on Android with a small icon and no label text.
- Tapping "Place order" immediately charges the card with no confirmation step and no undo.
- There is a small always-visible banner: "Only 2 left in stock — order in the next 10 minutes!" that resets its countdown every time the screen reloads.

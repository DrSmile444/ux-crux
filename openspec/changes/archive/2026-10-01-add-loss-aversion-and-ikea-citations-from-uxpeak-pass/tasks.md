## 1. Reference content — psychology

- [x] 1.1 Extend the "Loss aversion / anchoring" row in `src/skills/psychology/references/ethics.md`: loss aversion exists but its size varies with knowledge, experience and age, so do not treat loss framing or "threat" copy as stronger by default; keep the pointer to `PB03`/`PB04`. Source: Mrkva, Johnson, Gächter & Herrmann, "Moderating Loss Aversion: Loss Aversion Has Moderators, But Reports of its Death are Greatly Exaggerated", *Journal of Consumer Psychology* 30(3) (2020), 407-428.
- [x] 1.2 Add to the `PB05` Sources cell in `src/skills/psychology/references/behavioral-economics.md`: Norton, Mochon & Ariely, "The IKEA Effect: When Labor Leads to Love", *Journal of Consumer Psychology* 22(3) (2012), 453-460 (self-made items gain value only when the task is completed). Leave the rule text unchanged.

## 2. Documentation

- [x] 2.1 Add both works to `README.md`'s "Evidence base" list, matching neighbouring entries.
- [x] 2.2 Recount rule rows (`grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l`) and confirm it equals the README count of 347.
- [x] 2.3 Add a `## 0.1.28 — loss-aversion variability and IKEA-effect condition from a uxpeak "UX Psychology Behind Apps People Can't Stop Using" comparison pass` entry at the top of `CHANGELOG.md`: the source and why the pass is small; covered rule IDs; rejected claims and the two uncited works; scoped out items; one bullet per edit; a final bullet stating the total stays 347.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.28`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

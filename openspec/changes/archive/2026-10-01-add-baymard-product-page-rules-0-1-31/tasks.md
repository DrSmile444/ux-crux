## 1. Rule content

- [x] 1.1 Add `C38`-`C43` to `src/skills/product/references/core.md`, each with a distinct-from sentence, the not-applicable condition and `NOT ASSESSABLE` guidance. Update the applying prose and `src/skills/product/SKILL.md` if its procedure lists rule IDs.
- [x] 1.2 Add `CT03` to `src/skills/trust/references/core.md`. Update the applying prose and `src/skills/trust/SKILL.md`.
- [x] 1.3 Add `D12` and `F27` to `src/skills/usability/references/core.md`. Update the applying prose.
- [x] 1.4 Add a citation only: NN/g, Harley, "Slider Design: Rules of Thumb" (2015) to the `F18` Sources cell.
- [x] 1.5 Confirm each new ID is unused with a grep across `src/skills`, and that each ID lives in exactly one file.

## 2. Documentation

- [x] 2.1 Add the new Baymard articles and the NN/g slider article to `README.md`'s "Evidence base", matching neighbouring entries.
- [x] 2.2 Recount rule rows (`grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l`) and set the README opening-paragraph count to 377.
- [x] 2.3 Add a `## 0.1.31` entry at the top of `CHANGELOG.md`: sources; covered rule IDs; rejected claims with reasons; scoped-out items; one bullet per new rule grouped by domain; the final total.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.31`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

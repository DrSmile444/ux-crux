## 1. Rule content

- [x] 1.1 Add `O19` and `CT02` to `src/skills/trust/references/core.md`, each with a distinct-from sentence, the not-applicable condition and `NOT ASSESSABLE` guidance. Update the file's applying prose and `src/skills/trust/SKILL.md` if its procedure lists rule IDs.
- [x] 1.2 Add `X25` to `src/skills/accessibility/references/core.md` and `X26` to `src/skills/accessibility/references/mobile.md`. Update the applying prose and `src/skills/accessibility/SKILL.md` if needed.
- [x] 1.3 Add `R07R`, `D10`, `D11` to `src/skills/usability/references/core.md` and `N25R`, `N26R`, `L09` to `src/skills/usability/references/mobile.md`. Update the applying prose and `src/skills/usability/SKILL.md` if needed.
- [x] 1.4 Add `C35`, `C36`, `C37` to `src/skills/product/references/core.md`. Update the applying prose and `src/skills/product/SKILL.md` if needed.
- [x] 1.5 Add `PA19` to `src/skills/psychology/references/attention.md`. Update the applying prose.
- [x] 1.6 Add citations only: Baymard guideline on a distinct add-to-cart style to the `A01R` Sources cell; NN/g, Harley, "Icon Usability" (2014) to the `N08R` Sources cell.
- [x] 1.7 Confirm each new ID is unused with a grep across `src/skills`, and that each ID lives in exactly one file.

## 2. Documentation

- [x] 2.1 Add the new sources to `README.md`'s "Evidence base" (FTC, Apple App Review Guidelines and HIG, NN/g and Baymard articles, Yang et al.), matching neighbouring entries.
- [x] 2.2 Recount rule rows (`grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l`) and set the README opening-paragraph count to 368.
- [x] 2.3 Add a `## 0.1.30` entry at the top of `CHANGELOG.md`: the sources and why the pass is large; covered rule IDs; rejected claims with reasons; scoped-out items; one bullet per new rule grouped by domain; the citation additions; the final total.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.30`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

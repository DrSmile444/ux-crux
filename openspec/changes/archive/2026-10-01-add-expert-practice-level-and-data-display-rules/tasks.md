## 1. Shared model

- [x] 1.1 Add a "Rule source strength" section to `src/shared/evidence-model.md` defining `Expert practice` (published book, named author, no cited study, corroboration search found nothing contradicting; findings report as `RISK`, confidence `Low`, severity at most `moderate`; Sources cell wording; excludes videos, articles, e-books, blogs).
- [x] 1.2 Add the matching severity ceiling clause to `src/shared/severity-model.md`'s "Rule for skills" section.

## 2. Rule content

- [x] 2.1 Add `F26` to `src/skills/usability/references/core.md` (Baymard, Holst, "Form Field Usability: Matching User Expectations", 2010; Strong), with a distinct-from-`F23` sentence, the not-applicable condition and `NOT ASSESSABLE` guidance. Update the file's applying prose.
- [x] 2.2 Add `X23` and `X24` to `src/skills/accessibility/references/core.md` (WCAG 2.2 SC 1.4.12; Dyslexia Scotland quoting the BDA Dyslexia Style Guide and NN/g, "Dark Mode vs. Light Mode"). Update the applying prose and `src/skills/accessibility/SKILL.md` if its procedure lists rule IDs.
- [x] 2.3 Add `PA18` to `src/skills/psychology/references/attention.md` (Cleveland & McGill, "Graphical Perception", *JASA* 79(387), 1984, 531-554). Update the applying prose.
- [x] 2.4 Add `C32`, `C33`, `C34` to `src/skills/product/references/core.md`, each `Expert practice`, source Few, *Information Dashboard Design* (O'Reilly, 2006), author's stated practice, no study cited. Update the applying prose and `src/skills/product/SKILL.md` if its procedure lists rule IDs.
- [x] 2.5 Add citations only: WCAG 2.2 SC 1.4.8 to the `C10` and `C27` Sources cells; Tufte, *The Visual Display of Quantitative Information* (1983), via Few, to the `VH03` Sources cell.
- [x] 2.6 Confirm each new ID is unused with a grep across `src/skills`.

## 3. Documentation

- [x] 3.1 Add Few, Cleveland & McGill, and Baymard (Holst) to `README.md`'s "Evidence base", matching neighbouring entries.
- [x] 3.2 Recount rule rows (`grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l`) and set the README opening-paragraph count to 354.
- [x] 3.3 Add a `## 0.1.29` entry at the top of `CHANGELOG.md`: the source and why the pass is large; covered rule IDs; rejected claims with their contradicting sources; scoped-out items; one bullet per new rule grouped by domain; the new `Expert practice` level; the final total.

## 4. Release gate

- [x] 4.1 Bump `package.json` to `0.1.29`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

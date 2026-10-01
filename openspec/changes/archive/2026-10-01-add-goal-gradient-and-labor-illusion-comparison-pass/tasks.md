## 1. Rule content — psychology

- [x] 1.1 Add `PM10` to `src/skills/psychology/references/motivation.md` (goal-gradient progress framing; Strong; Moderate; Sources: Kivetz, Urminsky & Zheng, "The Goal-Gradient Hypothesis Resurrected", *Journal of Marketing Research* 43 (2006), 39-58; Hull (1932)), including a "distinct from `PM09`" sentence, the not-applicable condition and `NOT ASSESSABLE` guidance. Confirm `PM10` is unused (grep).
- [x] 1.2 Add `PB15` to `src/skills/psychology/references/behavioral-economics.md` (genuine waits show the work being done; Contextual; Minor; Sources: Buell & Norton, "The Labor Illusion: How Operational Transparency Increases Perceived Value", *Management Science* 57(9) (2011), 1564-1579), including a "distinct from `E08`" sentence, the rule that labelled work corresponds to real work, and `NOT ASSESSABLE` guidance. Confirm `PB15` is unused (grep).
- [x] 1.3 Update both files' "How the psychology skill should apply these" prose to mention `PM10` and `PB15`, and update `src/skills/psychology/SKILL.md` only if its procedure enumerates rule IDs for these files.

## 2. Documentation

- [x] 2.1 Add Kivetz, Urminsky & Zheng (2006) and Buell & Norton (2011) to `README.md`'s "Evidence base" list, matching neighbouring entries.
- [x] 2.2 Recount rule rows with `grep -rhoE '^\| [A-Z]+[0-9]+[A-Z]? \|' src/skills --include='*.md' | wc -l` and update the count in the README opening paragraph (previous total + 2).
- [x] 2.3 Add a `## 0.1.27 — goal-gradient framing and labor-illusion transparency from a Wyatt Feaster "psychology trick that makes any app feel 10x better" comparison pass` entry at the top of `CHANGELOG.md`: the source and why the pass is small; covered rule IDs (`PE02`-`PE04`, `PA04`, `ethics.md` choice overload); scoped out and rejected items; one bullet per new rule; a final bullet with the new total.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.27`, then run `npm run build && npm run sync-version && npm run validate` and confirm success. Run `openspec validate --specs`.

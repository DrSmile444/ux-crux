## 1. Usability: folk-rule guard + responsiveness citation split

- [x] 1.1 In `src/skills/usability/references/core.md`'s "Folk-rule guards" table, add a row debunking "navigation/menus must have ≤7 visible items because of working-memory limits," pointing to the existing chunking rule (`PC07` in `psychology/cognitive.md`) for the correct encoding (the limit governs active recall, not continuously visible choices). Verify the new row follows the existing table's two-column (Folk rule / Better encoding) format exactly.
- [x] 1.2 In the same file's "Responsiveness" section, add a distinct citation for the sub-400ms flow-state finding (Doherty & Thadani, 1982) alongside `R01R`'s existing 0.1s/1s/10s citation, phrased so the two thresholds are clearly attributed to separate research rather than blended into one number. Verify by re-reading `R01R`'s row/note and confirming a reader can tell which threshold traces to which source.

## 2. Usability: text-expansion example

- [x] 2.1 In `src/skills/usability/references/mobile.md`'s `L07` row, add a concrete "up to ~300%" (or better-sourced figure) text-expansion example for translation/localization layout resilience, citing the same class of source (Apple/Android localization guidance) already used elsewhere in that row. Verify the figure is attributed to a named source, not left as an unsourced number.

## 3. Psychology: banner-blindness rule

- [x] 3.1 Add rule `PA09` to `src/skills/psychology/references/attention.md`: legitimate content styled like an external ad banner (standard ad aspect ratio, flashy standalone box, ad-like badge) gets filtered out by selective attention, distinct from `PA03`'s over-emphasis failure mode. Include Evidence level, Default severity, and named Sources columns matching the file's existing table format.
- [x] 3.2 Update `attention.md`'s "How the psychology skill should apply these" section with a short note distinguishing `PA09` (under-emphasis / banner blindness) from `PA01`-`PA04` (salience and over-emphasis), if the existing text does not already make this distinction clear. Verify by re-reading the section for a reader who has not seen the new rule.

## 4. Trust: strategic friction as a trust signal

- [x] 4.1 Add rule `E08` to `src/skills/trust/references/core.md` under "Destructive-action safety" (or a new subsection if it reads awkwardly there): deliberate, brief friction/staging for high-stakes or security-sensitive actions is a legitimate trust signal, distinct from `E05`/`E07`'s accidental-loss-prevention purpose. Include the guard against over-applying friction to low-stakes actions (per `design.md`'s stated risk). Verify the new rule's scenarios in `specs/ux-crux/trust/spec.md` are each traceable to a sentence in the new rule text.
- [x] 4.2 Update `src/skills/trust/SKILL.md`'s Procedure section with a step referencing `E08`, and update its References section's description of `core.md` to mention the new rule. Verify the skill file still accurately lists everything `core.md` now covers.
- [x] 4.3 Update `src/skills/trust/references/core.md`'s "How the trust skill should apply these" section to state explicitly that `E08` is not permission to add friction broadly — it applies only to high-stakes/security-sensitive actions, and unjustified delay on routine actions is itself a finding. Verify this reflects all three scenarios in `specs/ux-crux/trust/spec.md`.

## 5. Build, version, and validation gate

- [x] 5.1 Run `npm run build` and verify it regenerates `skills/ux-crux-usability`, `skills/ux-crux-psychology`, `skills/ux-crux-trust`, and their `plugin/skills/` counterparts (including `plugin/skills/review/domains/**` self-contained copies) with no manual edits to generated files.
- [x] 5.2 Run `npm run sync-version` and verify `package.json`'s version bump is reflected in both plugin manifests.
- [x] 5.3 Run `npm run validate` and verify it passes (distributed-content version-bump check and shared/ drift check both clean).

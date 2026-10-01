## 1. Rule content

- [x] 1.1 Add the 141 rules to the `src/skills` reference files named in `design.md`, each after the last row of its family, with an applying-prose note per file.
- [x] 1.2 Create `usability/references/web.md` and name it in the `usability` SKILL.md.
- [x] 1.3 Add the citation-only sources to the existing rules they support.
- [x] 1.4 Confirm each new ID is unused with a grep across `src/skills` and lives in exactly one file.

## 2. Documentation

- [x] 2.1 Add the Nielsen Norman Group research to `README.md`'s "Evidence base".
- [x] 2.2 Recount rule rows and set the README opening-paragraph count to 579.
- [x] 2.3 Add a `## 0.1.33` entry at the top of `CHANGELOG.md`.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.33`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

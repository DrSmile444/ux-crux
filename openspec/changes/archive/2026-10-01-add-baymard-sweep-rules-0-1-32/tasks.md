## 1. Rule content

- [x] 1.1 Add the 61 rules to the `src/skills` reference files named in `design.md`, each after the last row of its family, with an applying-prose note per file.
- [x] 1.2 Amend `F27` with the slider clause and source.
- [x] 1.3 Confirm each new ID is unused with a grep across `src/skills` and that each lives in exactly one file.

## 2. Documentation

- [x] 2.1 Add the Baymard research sources to `README.md`'s "Evidence base".
- [x] 2.2 Recount rule rows and set the README opening-paragraph count to 438.
- [x] 2.3 Add a `## 0.1.32` entry at the top of `CHANGELOG.md`.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.32`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

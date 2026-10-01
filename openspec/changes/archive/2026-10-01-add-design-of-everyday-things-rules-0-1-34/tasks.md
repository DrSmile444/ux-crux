## 1. Rule content

- [x] 1.1 Add `A32R` and `E10` to `usability/references/core.md` with an applying-prose note.
- [x] 1.2 Add the book citations to the rules named in `design.md`.
- [x] 1.3 Confirm each new ID is unused with a grep across `src/skills`.

## 2. Documentation

- [x] 2.1 Add the book and Fitts and Seeger to `README.md`'s "Evidence base"; set the rule count to 581.
- [x] 2.2 Add a `## 0.1.34` entry at the top of `CHANGELOG.md`.

## 3. Release gate

- [x] 3.1 Bump `package.json` to `0.1.34`, then run `npm run build && npm run sync-version && npm run validate` and `openspec validate --specs`; confirm success.

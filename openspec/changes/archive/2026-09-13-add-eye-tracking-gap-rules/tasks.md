## 1. `usability/references/core.md` — Forms & input (F13-F17)

- [x] 1.1 Add F13: primary-action button aligned under the left edge of the input-field column, with "Previous" placed to the left of "Next"; cite Romano Bergstrom & Schall (eds.), *Eye Tracking in User Experience Design* (2014) and verify the row follows the existing table's ID/Rule/Evidence/Default severity/Sources columns.
- [x] 1.2 Add F14: field labels positioned directly above input boxes (top-aligned), or kept tight against the field if left-aligned; cite Matteo Penzo's label-placement eye-tracking study alongside the 2014 volume.
- [x] 1.3 Add F15: illustration/example graphics adjacent to input fields must not contain realistic, copyable sample data; cite Baymard Institute's checkout/form research (already used for F01/F02) alongside the 2014 volume, and verify the row is clearly distinguished from F01 (in-field placeholder text) in wording.
- [x] 1.4 Add F16: distinct questions must use a single vertical column; double-banked (2-column) layout is reserved for answer *choices* within one question; verify the row states both halves of the distinction explicitly (not just the anti-pattern half).
- [x] 1.5 Add F17: multi-step forms display previously entered key data as a persistent summary/context on later steps.
- [x] 1.6 Verify all five new rows use the next unused Forms IDs (F13-F17, no gaps or reused IDs against the current F01-F12) and match the existing table's column format exactly.

## 2. `usability/references/core.md` — Navigation (N13R-N14R) & Search/comparison (D06)

- [x] 2.1 Add N13R: utility navigation (contact/help/cart/sign-in) placed in standard top-right-header or footer locations, not sidebars or mid-page body.
- [x] 2.2 Add N14R: dynamic dropdown/mega-menu items ordered with top-priority items at the very top, second-priority at the bottom, lower-priority in the middle.
- [x] 2.3 Verify N13R/N14R continue the shared numbering range used across `core.md` and `mobile.md` (current max N12R in `mobile.md`) with no collision.
- [x] 2.4 Rename the "Search & discovery" section heading to "Search, discovery & comparison" and add D06: keep compared decision parameters (price/schedule, spec/cost) in tight horizontal proximity rather than spread across full page width; cite the KLM flight-search redesign case from the 2014 volume.
- [x] 2.5 Update the "How the usability skill should apply these" section in `core.md` if the new rows need a framing sentence (comparable to how existing sections are introduced).

## 3. `usability/references/core.md` — folk-rule-guard citation upgrade

- [x] 3.1 Add a concrete eye-tracking citation (mobile instruction-popup study: near-zero fixation time on the popup, subsequent task failure) to the existing "Always show onboarding" folk-rule-guard row, without creating a new rule ID.

## 4. `psychology/references/attention.md` — PA10

- [x] 4.1 Add PA10: F-pattern/top-left scanning bias — single-column text neglects right-side/lower content; deliberate multi-column or structured-block formatting disperses fixations across the page.
- [x] 4.2 Extend the "How the psychology skill should apply these" section with a short addition framing PA10 alongside PA01/PA04 (mirroring how PA09 was introduced), and verify it names when to check PA10 (dense single-column text pages, especially where right-side or lower content matters).

## 5. `product/references/core.md` — P09

- [x] 5.1 Add P09: on a product-detail (single-featured-item) page, cross-sell/recommendation modules must not be positioned above the primary featured product content; include an applicability note scoping it to product-detail pages and explicitly excluding browse/category/listing pages.
- [x] 5.2 Verify P09 is clearly distinguished from P02 in wording (P09 is a specific, citable PDP instance; P02 remains the general hierarchy rule) the same way P08's applicability note distinguishes it from P06.

## 6. `product/references/web.md` — new file (C07-C12)

- [x] 6.1 Create `src/skills/product/references/web.md` following the shape of an existing reference file (intro line + rule table + "How the product skill should apply these" section).
- [x] 6.2 Add C07: inverted-pyramid structure (lead with the conclusion, descending-importance detail, background last).
- [x] 6.3 Add C08: front-load information-rich keywords in the first 3-4 words of headlines/subheadings/bullets.
- [x] 6.4 Add C09: avoid ALL-CAPS for headlines/body/buttons; use sentence case, citing the word-shape/reading-speed finding.
- [x] 6.5 Add C10: left-align body text; avoid centered or fully justified multi-line paragraphs.
- [x] 6.6 Add C11: use digit numerals instead of spelled-out number words, including at the start of a sentence/bullet.
- [x] 6.7 Add C12: pair key images with concise, keyword-rich captions, citing captions' high-fixation/high-recall finding.
- [x] 6.8 Verify C07-C12 continue product's existing C-series numbering (current max C06 in `core.md`) with no collision, and every row cites the 2014 volume (plus a second source where one already used elsewhere in this project documents the same point).

## 7. `product/SKILL.md` — wire up the new file

- [x] 7.1 Add `references/web.md` to the References section, stating when it applies (content-heavy/web-rendered pages) versus `references/core.md`.
- [x] 7.2 Add a procedure step (or extend the existing content-check step) directing the reviewer to `web.md`'s rules when the evidence is a text-heavy or web page.

## 8. Build, sync, and validate

- [x] 8.1 Run `npm run build` and verify `skills/ux-crux-usability`, `skills/ux-crux-psychology`, `skills/ux-crux-product`, and their `plugin/skills/*` counterparts regenerate with the new content (spot-check the new file and rule IDs appear in the generated output).
- [x] 8.2 Run `npm run sync-version` and verify `package.json`'s version is reflected in both plugin manifests. (Required bumping `package.json` 0.1.8 -> 0.1.9 first, since content changed; then both manifests synced.)
- [x] 8.3 Run `npm run validate` and verify it passes (no version-bump or shared-model-drift failure).

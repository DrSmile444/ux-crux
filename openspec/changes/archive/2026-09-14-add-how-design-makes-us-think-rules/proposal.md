## Why

Sean Adams's *How Design Makes Us Think and Feel and Do Things* (Adams Morioka / Chronicle Books, 2021) frames 13 emotional/psychological design drivers (seduction, efficiency, love, humor, intelligence, elegance, pride, innovation, innocence, nostalgia, anger, pleasure, honesty) through graphic, brand, and industrial design case studies. Its extracted 28-item knowledge map was compared item-by-item against every existing rule in `src/skills/*/references/*.md` before this proposal was drafted, following this project's established comparison-pass pattern (see `CHANGELOG.md` 0.1.6-0.1.19). The comparison surfaced nine genuinely new, specific, checkable rules with no existing home, plus two existing rules (`C20`/`C22`/`C25`/`C26`'s data-visualization cluster and `C23`'s polish-vs-trust rule) that gain an additional named-source citation without any behavior change.

The book's own stated limitation — its primary domain is graphic/industrial/brand design, not software interaction mechanics (see the source's "Possible Omissions" self-audit) — means the majority of its 28 items map to physical hardware ergonomics, brand-identity systems, or vertical-specific (e-commerce, pharmacy/healthcare packaging) content that this project's prior comparison passes have consistently excluded, or to popular-psychology claims (pure-primary-color processing, golden-ratio horizontal scanning) with no independently verifiable research source behind them — the same evidentiary bar that led the 0.1.6 pass to debunk "Miller's Law caps navigation at 7" and the 0.1.14 pass to reject the book's own uncited "Rule of Odds." This proposal adds only the nine items that survive both filters: genuinely software-UX-checkable, and traceable to a defensible mechanism or convention rather than an unverified pop-psychology claim.

## What Changes

- `usability`: add `A17R` to `references/core.md`'s Actions table — a product's design system limits functionally-equivalent visual variants (button styles, font weights/families, color choices for the same semantic purpose) to a small, deliberate set, rather than letting them proliferate unconstrained across screens.
- `psychology`: add `PE08` to `references/emotion.md` — a sensitive-domain form or selection control (health, financial hardship, body/clothing sizing) replaces a clinical or intimidating category label that risks user embarrassment or self-image anxiety with a neutral or familiar term, without compromising clinical accuracy or informed choice.
- `psychology`: add `PB14` to `references/behavioral-economics.md` — copy for a purchase, upgrade, or leisure feature that a user might otherwise feel guilty about may frame the spend as an earned reward for genuine, truthfully-represented effort, but must not manufacture guilt that was not already present or exaggerate the user's effort to justify the frame; subject to the standing four-gate test in `ethics.md`.
- `product`: add `VT06` to `references/voice-tone.md` — a non-error, human/administrative notification carrying inherently unwelcome news (an overdue-payment notice, a policy-violation warning, a scheduled-downtime alert) may use light, self-aware tone to soften the message, distinct from `usability`'s `E02`/`E03` (system error copy, which must stay clear and must not use cute language that obscures the fix); this softening never applies to security-breach or safety-critical notifications, which stay direct and serious.
- `product`: add `C27` to `references/web.md` — long-form/editorial text content is presented at 50-70 characters per line with proportional heading-to-body type scaling, continuing `web.md`'s existing C07-C12 scanning/typography set.
- `product`: add `C28` to `references/core.md`'s Content table — a medical, legal, grave, or trauma-related screen uses an objective, restrained visual/photographic tone (no cheerful stock imagery or patronizing decoration), the visual counterpart to `C15`'s language-level neutrality rule.
- `product`: add `C29` to `references/core.md`'s Content table — a product designed for children, teens, or older adults does not use age-patronizing visual tropes (fake handwriting-style fonts, chaotic decorative color, artificial dumbing-down) that assume reduced intelligence, parallel to `C15`'s disability-dignity rule but keyed to age rather than disability.
- `product`: add `C30` to `references/core.md`'s Content table — a platform hosting user-generated or curated content (video, portfolios, documents) keeps its own branding minimal and non-competing (no animated logos, aggressive watermarks, or persistent banners over the content itself).
- `accessibility`: add `X16` to `references/mobile.md` — a mobile UI's typography and iconography remain legible under real-world adverse reading conditions (outdoor glare, budget/low-resolution displays, low ambient light), distinct from `core.md`'s `X03` (static contrast-ratio compliance) and `mobile.md`'s `X04`/`X05` (text-scaling/Dynamic Type support), which do not by themselves guarantee real-condition legibility.
- `product`: enrich `references/core.md`'s `C20`/`C22`/`C25`/`C26` (Sources column only) with a citation to Marvin Minsky's ingredients-of-intelligence framing (subgoals, sub-objects, cause-symbols) as an additional named source for structuring dense/complex data displays — no rule-text or behavior change.
- `product`: enrich `references/core.md`'s `C23` (Sources column only) with a citation naming the inverse case this book documents — deliberately raw/unpolished visual production can itself signal urgency or grassroots authenticity in a crisis/activism context — as a named counterpoint informing `C23`'s existing polish-vs-audience-trust judgment; no rule-text or behavior change.
- `README.md`: add Sean Adams's book to the "Evidence base" list of comparison-pass sources.
- `CHANGELOG.md`: add an entry in the same style as prior comparison-pass entries, naming what was added (by rule ID), what was left out and why (industrial/hardware design, brand-identity systems, vertical-specific content, two unverified pop-psychology claims), and what was confirmed already-covered.
- `package.json` version bump (patch) plus `scripts/sync-version.mjs` and `scripts/build.mjs`/`scripts/validate.mjs` runs, per this project's standing release gate.

No new skill or reference file is introduced. Everything maps to four of the six existing skills.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `ux-crux/usability`: gains one new requirement — design-system visual-variant limiting (`A17R`).
- `ux-crux/psychology`: gains two new requirements — anxiety-reducing sensitive-domain category labeling (`PE08`) and truthful earned-reward guilt-bridging framing (`PB14`).
- `ux-crux/product`: gains six new requirements — humor-as-buffer for non-error administrative bad news (`VT06`), editorial line-length/type-scale proportions (`C27`), objective visual tone for sensitive domains (`C28`), rejection of age-patronizing visual tropes (`C29`), and non-interfering platform branding over user content (`C30`). Citation-only enrichments to `C20`/`C22`/`C23`/`C25`/`C26` add no new requirement (Sources-column attribution only, no `SHALL`-level behavior change).
- `ux-crux/accessibility`: gains one new requirement — real-world environmental legibility (`X16`).

## Impact

- Affected source: `src/skills/usability/references/core.md`; `src/skills/psychology/references/emotion.md`, `references/behavioral-economics.md`; `src/skills/product/references/voice-tone.md`, `references/web.md`, `references/core.md`; `src/skills/accessibility/references/mobile.md`.
- Generated distributions (`skills/`, `plugin/skills/`) regenerate from source via `npm run build`; not hand-edited.
- `README.md`, `CHANGELOG.md`, `package.json`, both plugin manifests (via `sync-version`).
- No build tooling, schema, or distribution-mechanism changes.

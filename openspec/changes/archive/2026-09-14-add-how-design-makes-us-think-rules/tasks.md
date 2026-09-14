## 1. Usability: design-system variant limiting in `core.md`

- [x] 1.1 Add `A17R` (a design system limits functionally-equivalent visual variants — button styles, font weights/families, colors for the same semantic purpose — to a small, deliberate set) to `src/skills/usability/references/core.md`'s Actions table, matching the "The same semantic action renders with unrelated visual styles across screens", "A small, deliberate set of styles is used consistently", and "Evidence covers only a single screen" scenarios in `specs/ux-crux/usability/spec.md`; explicitly distinguish it in the rule text from `A01R` (single-screen action hierarchy) and `A13R` (single-control label matching its destination).
- [x] 1.2 Update `core.md`'s "How the usability skill should apply these" closing section to mention `A17R` alongside the existing Actions-section rules (A09R-A16R).
- [x] 1.3 Update `usability/references/affordances.md`'s reference to "`core.md`'s Actions section (A01R-A16R)" to read "A01R-A17R" and verify the file's diagnostic-step description still accurately describes when to apply it.

## 2. Psychology: sensitive-domain labeling in `emotion.md`

- [x] 2.1 Add `PE08` (a sensitive-domain form replaces a clinical/intimidating category label with a neutral or familiar alternative, without compromising accuracy) to `src/skills/psychology/references/emotion.md`, matching the "A sensitive form uses an intimidating or stigmatizing label", "A sensitive form already uses neutral, familiar labeling", and "Clinical precision is legally or medically required" scenarios in `specs/ux-crux/psychology/spec.md`; explicitly distinguish it in the rule text from `product`'s `C15` (disability/human-trait dignity in phrasing) and `trust`'s `O13` (gender/identity field structure).
- [x] 2.2 Update `emotion.md`'s "How the psychology skill should apply these" closing section to introduce `PE08` and note its distinction from `C15`/`O13`.

## 3. Psychology: earned-reward framing in `behavioral-economics.md`

- [x] 3.1 Add `PB14` (guilt-bridging "earned reward" framing for a purchase/upgrade/leisure feature is permitted only when the user's effort is genuine and truthfully represented, and must pass the four-gate test in `ethics.md`) to `src/skills/psychology/references/behavioral-economics.md`, matching the "Reward framing exaggerates or fabricates the user's effort", "Reward framing accurately reflects genuine prior effort", and "No effort claim is made" scenarios in `specs/ux-crux/psychology/spec.md`; explicitly distinguish it from `PB04` (loss-framed messaging) and note it is not grouped with `PB06`-`PB08`'s fabrication-based guardrails, the same way `PB13` is already distinguished from `PB06`.
- [x] 3.2 Update `behavioral-economics.md`'s "How the psychology skill should apply these" closing paragraph to introduce `PB14` alongside the existing `PB01`-`PB13` set.

## 4. Product: non-error bad-news tone in `voice-tone.md`

- [x] 4.1 Add `VT06` (a non-error, human/administrative notification carrying unwelcome news may use light, disarming tone; security-breach/safety-critical notifications are excepted) to `src/skills/product/references/voice-tone.md`, matching the "An administrative notice uses harsh, punitive language for a minor lapse", "An administrative notice uses light, human tone appropriately", "Light tone is used on a security or safety-critical notification", and "A genuine system error uses cute language instead of clarity" scenarios in `specs/ux-crux/product/spec.md`; state explicitly in the rule text that this does not override `usability`'s `E02`/`E03` for genuine system errors.
- [x] 4.2 Update `voice-tone.md`'s "How the product skill should apply this file" closing paragraph and its intro line ("Covers rules VT01-VT05") to include `VT06`.
- [x] 4.3 Update `product/SKILL.md`'s reference-list description of `voice-tone.md` (currently "VT01-VT05") to include `VT06`.

## 5. Product: editorial line-length in `web.md`

- [x] 5.1 Add `C27` (long-form/editorial text uses roughly 50-70 characters per line with proportional heading-to-body type scale) to `src/skills/product/references/web.md`, continuing the file's `C07`-`C12` series, matching the "Body text renders far outside the readable line-length range", "Body text already falls within the readable range", and "Evidence does not permit measuring rendered text width" scenarios in `specs/ux-crux/product/spec.md`.
- [x] 5.2 Update `web.md`'s "How the product skill should apply these" closing paragraph to mention `C27` alongside `C07`-`C12`.

## 6. Product: sensitive-tone, age-respect, and non-interference additions to `core.md`

- [x] 6.1 Add `C28` (medical/legal/grave/trauma-related screens use objective, restrained visual tone — the visual counterpart to `C15`'s language-level neutrality) to `src/skills/product/references/core.md`'s Content table, matching the "A grave or medical screen uses cheerful, mismatched stock imagery", "A grave or medical screen already uses restrained, objective visuals", and "The screen's subject matter is not sensitive or grave" scenarios in `specs/ux-crux/product/spec.md`.
- [x] 6.2 Add `C29` (no age-patronizing visual tropes for children/teens/older-adult audiences, parallel to `C15` but keyed to age) to the same Content table, matching the "A product for children or older adults uses patronizing visual gimmicks", "A product for children or older adults uses respectful, adapted design", and "The audience is not children, teens, or older adults" scenarios.
- [x] 6.3 Add `C30` (a platform hosting user-generated/curated content keeps its own branding minimal and non-competing) to the same Content table, matching the "Platform branding visually competes with the hosted content", "Platform branding stays minimal and non-interfering", and "The content is not user-generated or curated" scenarios.
- [x] 6.4 Update `core.md`'s intro line ("Covers rules P01-P09 (purpose & task) and C01-C20 (content)") to state the accurate current range through `C30`.
- [x] 6.5 Update `core.md`'s "How the product skill should apply these" closing section (step 2, content pass) to mention `C28`, `C29`, and `C30` alongside the existing `C01`-`C26` set.

## 7. Accessibility: real-world legibility in `mobile.md`

- [x] 7.1 Add `X16` (typography/iconography remain legible under real-world adverse conditions — outdoor glare, low-resolution displays, low ambient light — distinct from `core.md`'s `X03` static contrast and `mobile.md`'s `X04`/`X05` text-scaling) to `src/skills/accessibility/references/mobile.md`, matching the "A design specifies ultra-thin type or fine detail with no adverse-condition allowance", "Typography and iconography already use robust, legible treatments", and "Evidence gives no basis to assess real-world display conditions" scenarios in `specs/ux-crux/accessibility/spec.md`.
- [x] 7.2 Update `mobile.md`'s "How the accessibility skill should apply these" closing paragraph to introduce `X16` and its distinction from `X03`-`X05`.

## 8. Citation enrichments (no new rule IDs)

- [x] 8.1 Add a citation to Marvin Minsky's ingredients-of-intelligence framing (subgoals, sub-objects, cause-symbols; via Sean Adams, *How Design Makes Us Think and Feel and Do Things*) to `product/references/core.md`'s `C20`, `C22`, `C25`, and `C26` Sources columns — no wording change to any rule's existing `SHALL`-equivalent behavior.
- [x] 8.2 Add a citation naming deliberately raw/unpolished visual production as a signal of urgency or grassroots authenticity in crisis/activism contexts (via Sean Adams, *How Design Makes Us Think and Feel and Do Things*) to `product/references/core.md`'s `C23` Sources column, as a named counterpoint informing its existing polish-vs-audience-trust judgment — no rule-text or behavior change.

## 9. Documentation and evidence trail

- [x] 9.1 Add Sean Adams, *How Design Makes Us Think and Feel and Do Things* (Adams Morioka / Chronicle Books, 2021), to `README.md`'s "Evidence base" list of comparison-pass sources.
- [x] 9.2 Recount every rule-table row matching the `| <ID> | ... |` pattern across `src/skills/**/references/*.md` (excluding folk-rule-guard and non-rule tables) and update the total rule count stated in `README.md`'s opening paragraph (currently "314 named-source rules") to the new accurate total.
- [x] 9.3 Add a `CHANGELOG.md` entry (new version heading, one above the current `0.1.19`) in the same style as the 0.1.6-0.1.19 entries: what was added (by domain and rule ID — `A17R`, `PE08`, `PB14`, `VT06`, `C27`, `C28`, `C29`, `C30`, `X16`, plus the `C20`/`C22`/`C25`/`C26`/`C23` citation enrichments), what was left out and why (industrial/hardware ergonomics, brand-identity systems, healthcare-IoT and e-commerce verticals, the two unverified pop-psychology claims), and confirmation that no item was already covered under a different name (all nine were confirmed net-new during the comparison pass).
- [x] 9.4 Confirm no file under `openspec/changes/add-how-design-makes-us-think-rules/` or `src/skills/**` references the private `local/` research folder by path or filename, per this repo's `CLAUDE.md` — grep for `local/` across both trees and confirm zero matches outside this instruction context.

## 10. Build, version, and validate

- [x] 10.1 Bump `package.json`'s version from `0.1.19` to `0.1.20` per this project's one-SemVer-for-the-whole-plugin convention.
- [x] 10.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — this is the standing release gate for any change to `src/skills/**`.
- [x] 10.3 Confirm the rule-coverage checklist still accounts for every rule ID exactly once with no duplication across domains (per `openspec/config.yaml`'s specs rule), with particular attention to `A17R` staying in `usability`, `PE08`/`PB14` staying in `psychology`, `VT06`/`C27`/`C28`/`C29`/`C30` staying in `product`, and `X16` staying in `accessibility`.

## 1. Product: Voice & Tone (new file)

- [x] 1.1 Create `src/skills/product/references/voice-tone.md` with a rule table (Clear>Concise>Human priority triad, tone-as-contextual-spectrum, tone-as-measured-usability-factor citing the Polkosky factor-analysis study, anti-idiom/global-scalability rule, Brand-vs-Product-Voice guardrail) matching the existing table format used in `core.md`/`web.md`, and verify each row cites a named source per the Sources column convention
- [x] 1.2 Update `src/skills/product/SKILL.md`'s Procedure and References sections to point to `references/voice-tone.md` (mirroring how `web.md` is wired in) and verify the file lists it alongside `core.md` and `web.md`

## 2. Product: Content-section extensions

- [x] 2.1 In `src/skills/product/references/core.md`, add new C-ids (next available after the existing C01-C06/associated `web.md` C07-C12 range) for: confirm-shaming anti-pattern (cite NN/g Deceptive Patterns in UX), concision-vs-precision spectrum, non-value-assigning disability language, and singular "they" default — each with a Sources citation, verified to not collide with any existing C-id across `core.md` and `web.md`
- [x] 2.2 Add a domain-jargon exception as an applicability note on C01 (matching the existing applicability-note style used for P06/P08/P09/IA01) and verify it does not contradict C01's plain-language guidance for non-expert audiences
- [x] 2.3 Add a cross-reference note on C01 (or N07R in `usability/references/core.md`, whichever reads more naturally) broadening recognition-over-recall from navigation labels to all action labels/buttons app-wide, and verify no rule ID is duplicated between the two files
- [x] 2.4 Update product's "How the product skill should apply these" section and `SKILL.md` Procedure to reference the new C-ids and the voice-tone file

## 3. Usability: confirmation-dialogue simplification

- [x] 3.1 In `src/skills/usability/references/core.md`, add the six-step confirmation-dialogue simplification technique attached to A05R/A06R (extract facts, prioritize destructive/irreversible consequences, phrase title as a question, align buttons to literally answer it, strip jargon/redundant explanation) and verify it is framed as a technique for satisfying A05R/A06R, not a new competing rule ID
- [x] 3.2 Update usability's "How the usability skill should apply these" section to reference the new technique when a confirmation-dialog finding is reported

## 4. Trust: transparent identity/demographic data collection

- [x] 4.1 In `src/skills/trust/references/core.md`, add a new O-id (next available after O12) for transparent gender/sex/identity/demographic data collection (separate fields, optional/free-text where possible, inline purpose microcopy), citing a named source (e.g. Apple HIG Privacy/inclusion guidance, or an equivalent verifiable source), and verify it is written as additive/narrower than O07, not a duplicate of it
- [x] 4.2 Update trust's "How the trust skill should apply these" section to reference the new O-id alongside O07

## 5. Accessibility: instructional and action-verb language

- [x] 5.1 In `src/skills/accessibility/references/core.md`'s WCAG/universal X-series, add a new X-id for chronological-vs-spatial instructional language, citing WCAG SC 1.3.3 (Sensory Characteristics) and distinguishing it from the already-cited X02 (SC 1.4.1, color alone)
- [x] 5.2 Add a new X-id (or extend the same new entry) for device-agnostic action verbs (prefer "Select"/"Choose"/"View" over "Click"/"Tap"/"Press"), with the stated exception for copy that deliberately teaches a specific physical gesture
- [x] 5.3 Update accessibility's "How the accessibility skill should apply these" section to reference the new X-id(s)

## 6. Review: stress-case framing

- [x] 6.1 In `src/skills/review/references/review-model.md`, extend V04 with the "stress case" framing/terminology and the age-cap discrimination-awareness example, without introducing a new V-id
- [x] 6.2 Update the file's summary paragraph (the one explaining why V01-V06 matter) if needed so it still accurately reflects V04's scope after the extension

## 7. Changelog and release gate

- [x] 7.1 Add a new version entry to `CHANGELOG.md` in the exact style of the 0.1.6-0.1.9 entries: list every addition by domain with its rule ID and named source, name the book (Michael J. Metts & Andy Welfle, *Writing Is Designing*, Rosenfeld Media) as the comparison source, and summarize what was deliberately excluded and why (per `proposal.md`'s exclusion list)
- [x] 7.2 Bump the version in `package.json` to match the new CHANGELOG entry
- [x] 7.3 Run `npm run build && npm run sync-version && npm run validate` and confirm all three succeed, verifying the generated `skills/` and `plugin/skills/` distributions reflect every reference-file change above and that validate reports no version-bump or shared-model drift issues

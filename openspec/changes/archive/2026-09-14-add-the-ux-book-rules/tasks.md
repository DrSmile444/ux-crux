## 1. Usability: discoverability, control-truthfulness, and interaction additions to `core.md`

- [x] 1.1 Add `N19R` (undiscoverable functionality treated as absent — Larry Marine's Effort Threshold Rule) to `src/skills/usability/references/core.md`'s Navigation table, matching the "Feature requires manual consultation to find" and "Advanced capability is intentionally deferred behind an expert mode" scenarios in `specs/ux-crux/usability/spec.md`, explicitly distinguished from `N09R` (hierarchy depth vs. task complexity, not reachability without external help).
- [x] 1.2 Add `A13R` (button label matches destination heading word-for-word) to the Actions table, matching the "Button and destination heading use different verbs" and "Button label and destination heading match exactly" scenarios, explicitly distinguished from `N07R` (broader synonym-consistency scope, not exact button-to-heading matching).
- [x] 1.3 Add `A14R` (disabled controls explain their own unavailability on interaction) to the Actions table, matching the "Grayed-out button gives no feedback when clicked", "Grayed-out button explains its own prerequisite on interaction", and "Control is hidden rather than disabled for users who should never see it" scenarios, explicitly cross-referenced against `A08R` (visual distinguishability only, no interaction-triggered explanation required).
- [x] 1.4 Add `A16R` (destructive controls maintain physical spacing from adjacent safe controls) to the Actions table, matching the "Delete button sits immediately adjacent to Save" and "Destructive control is spaced apart or visually differentiated" scenarios, explicitly distinguished from `accessibility`'s `T01`/`T02` (single-target minimum size, not inter-control spacing).
- [x] 1.5 Add `IE14` (background automation does not seize focus or interrupt active input) to the Interaction efficiency table, matching the "Background sync completion forces a modal that interrupts active typing" and "Background automation completes silently" scenarios.
- [x] 1.6 Add `S11` (feedback appears within the user's focus of attention, generalizing `F07` to all feedback types) to the System status table, matching the "Error message appears in a distant, low-contrast status bar" and "Feedback renders inline at the point of interaction" scenarios; state explicitly in the rule text that `F07` remains the form-field-specific case and `S11` covers non-form status/confirmation/error feedback.
- [x] 1.7 Add `F23` (long numeric identifiers displayed in chunked groups) to the Forms & input table, matching the "Card number displayed as one unbroken string" and "Identifier is already displayed in chunked groups" scenarios; cross-reference `psychology`'s `PC07` (chunking) as the underlying cognitive rationale.
- [x] 1.8 Update `core.md`'s "How the usability skill should apply these" closing section to reference `N19R`, `A13R`, `A14R`, `A16R`, `IE14`, `S11`, and `F23` explicitly, following the existing style used for prior rule additions (e.g. `F20`-`F22`, `N15R`-`N18R`).
- [x] 1.9 Verify every new rule ID in this section has exactly one destination file (no duplicate row left elsewhere) and cites Hartson & Pyla, *The UX Book*, as its source.

## 2. Usability: visual-hierarchy addition

- [x] 2.1 Add `VH03` ("flash and trash": decorative motion/graphics that compete with task-critical attention) to `src/skills/usability/references/visual-hierarchy.md`, matching the "Auto-playing background animation reduces text legibility", "Decorative element does not interfere with the task", and "Short-term promotional landing page" scenarios in `specs/ux-crux/usability/spec.md`, explicitly distinguished from `VH01` (contrast/uniformity between meaningful elements, not decoration's mere presence).
- [x] 2.2 Update `visual-hierarchy.md`'s intro line ("Covers rules VH01-VH02") to include `VH03`, and update its "How the usability skill should apply these" closing paragraph accordingly.

## 3. Usability: new affordances reference file

- [x] 3.1 Create `src/skills/usability/references/affordances.md` with an intro paragraph (platform-agnostic scope, referencing `../../../shared/evidence-model.md` and `severity-model.md`, matching the style of `visual-hierarchy.md`'s intro), framing the file as Hartson's Four Kinds of Affordances used as a cross-cutting diagnostic vocabulary, not a competing symptom-level rule set.
- [x] 3.2 Add `AF01` (classify a control-level finding by affordance type — Cognitive/Physical/Sensory/Functional) matching the "Icon-only control with no label and low contrast" and "Clearly labeled, high-contrast control with adequate target size" scenarios in `specs/ux-crux/usability/spec.md`; explicitly state in the rule text that the false-cognitive-affordance anti-pattern is the same concern as existing `A09R`, restated in this vocabulary, not a duplicate rule, and cross-reference `A08R`/`A12R` and `accessibility`'s `X02`/`X03`/`T01`/`T02` as the symptom-level rules this framework classifies.
- [x] 3.3 Add `AF02` (user-created affordance artifacts as a strong diagnostic signal) matching the "Photographed workspace shows taped instructions on a device" and "No user-added artifacts are present in the evidence" scenarios, explicitly stating that absence of such artifacts is not itself evidence of the opposite.
- [x] 3.4 Add a short "How the usability skill should apply these" closing paragraph to `affordances.md`, consistent in style with `core.md`'s, `mobile.md`'s, and `visual-hierarchy.md`'s closing sections.
- [x] 3.5 Wire `affordances.md` into `src/skills/usability/SKILL.md`'s procedure and References section, following the exact pattern already used for `mobile.md` and `visual-hierarchy.md`.

## 4. Review: Interaction Cycle & Gulfs section

- [x] 4.1 Add a new "Interaction Cycle & Gulfs" section to `src/skills/review/references/review-model.md` (after the existing Validation methodology section, before or alongside the Lens-selection procedure), introducing Planning / Translation / Physical Action / Outcome / Assessment and the Gulf of Execution / Gulf of Evaluation grouping.
- [x] 4.2 Add `IC01` (classify a breakdown's root cause by Interaction Cycle stage; Translation-stage cause considered before an Outcome-stage/backend defect) matching the "User hesitates before an ambiguous control", "User cannot tell whether an action succeeded", and "Reviewer initially suspects a backend defect" scenarios in `specs/ux-crux/review/spec.md`.
- [x] 4.3 Update `review-model.md`'s "How the review skill should apply this file" closing paragraph to mention `IC01` alongside the existing `V01`-`V06` standing constraint.

## 5. Psychology: Slanty Design addition to `ethics.md`

- [x] 5.1 Add `PX05` (Slanty Design: friction protecting a shared resource/third party is distinct from a dark pattern) to `src/skills/psychology/references/ethics.md`'s meta-rules table, matching the "Structural constraint prevents an action that would corrupt shared data", "Friction added for the business's own benefit at the user's expense", and "Unclear who the friction protects" scenarios in `specs/ux-crux/psychology/spec.md`; explicitly cross-reference `trust`'s `E08` (friction as a trust signal to the acting user on their own high-stakes action — a different axis from Slanty Design's third-party/shared-resource protection).
- [x] 5.2 Add a "Deliberate friction / Slanty Design" row to `ethics.md`'s evidence-strength-corrections table, cross-referencing `PX05`.
- [x] 5.3 Update `ethics.md`'s "How the psychology skill should apply these" closing paragraph to mention `PX05` and how it interacts with the four-gate test (still evaluated for proportionality/clarity, not exempted from all scrutiny).

## 6. Documentation and evidence trail

- [x] 6.1 Add Rex Hartson & Pardha Pyla, *The UX Book: Agile UX Design for a Quality User Experience* (2nd ed., Morgan Kaufmann/Elsevier), to `README.md`'s "Evidence base" list of comparison-pass sources.
- [x] 6.2 Add a `CHANGELOG.md` entry for this pass in the same style as the 0.1.6-0.1.13 entries: what was added (by domain and rule ID), what was left out and why (the book's process/methodology chapters), what was confirmed already-covered (Recognition over Recall, Precise Wording, mode/quasimode handling, basic Fitts target sizing, ego-free error messages), and the new version number.
- [x] 6.3 Confirm no file under `openspec/changes/add-the-ux-book-rules/` or `src/skills/**` references the private local research folder by path or filename, per this repo's `CLAUDE.md`.

## 7. Build, version, and validate

- [x] 7.1 Bump `package.json`'s version (patch) per this project's one-SemVer-for-the-whole-plugin convention.
- [x] 7.2 Run `npm run build && npm run sync-version && npm run validate` and confirm success — this is the standing release gate for any change to `src/skills/**`.
- [x] 7.3 Confirm the rule-coverage checklist still accounts for every rule ID exactly once with no duplication across domains (per `openspec/config.yaml`'s specs rule), with particular attention to `N19R`/`A13R`/`A14R`/`A16R`/`IE14`/`S11`/`F23`/`VH03`/`AF01`/`AF02` staying in `usability`, `IC01` staying in `review`, and `PX05` staying in `psychology`.

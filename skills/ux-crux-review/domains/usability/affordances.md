# Affordances: a diagnostic vocabulary for control-level findings

Platform-agnostic. Covers rules AF01-AF02. See `../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

This file is a cross-cutting diagnostic framework, not a new set of symptom-level rules competing with `core.md`'s Actions section or `accessibility`'s contrast/target-size rules. It gives the reviewer a shared vocabulary — Hartson & Pyla's Four Kinds of Affordances — for stating *which part* of an interaction step failed once a control-level finding has already been identified, and one rule (AF02) about a specific, high-confidence kind of evidence to look for.

## The four affordance types

| Type | Question it answers | What failure looks like |
|---|---|---|
| Cognitive | Can the user THINK, know, or understand what this control does? | No label, ambiguous icon, unclear wording |
| Physical | Can the user physically DO the action? | Target too small, unreachable, requires unsupported precision |
| Sensory | Can the user SENSE (see/hear/feel) the cognitive or physical affordance in the first place? | Low contrast, text too small, no audible/haptic confirmation |
| Functional | Does the backend capability behind the control actually match what was promised? | Button says "Save" but does not persist data; a control's actual effect differs from its label |

## Rules

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| AF01 | When a control-level finding is identified, classify it by which affordance type failed (Cognitive, Physical, Sensory, or Functional) whenever doing so sharpens the stated cause and recommended fix, rather than reporting only "this is a usability issue." A single control can fail more than one type at once (for example an icon-only button with low contrast fails both Cognitive and Sensory). The Functional-affordance failure mode — a control's actual effect differs from what its label/appearance promises — is the same concern as A09R, restated in this vocabulary, not a duplicate rule; likewise Physical-affordance failures cross-reference `accessibility`'s T01/T02 (target size) and A16R (spacing), Sensory-affordance failures cross-reference `accessibility`'s X02/X03 (color-alone cues, contrast), and Cognitive-affordance failures cross-reference A02R (precise wording) and A08R (disabled-state clarity). | Strong | Moderate | Hartson & Pyla, *The UX Book* (Four Kinds of Affordances) |
| AF02 | A user-created affordance artifact visible in the evidence — a taped label, sticky note, hand-written cheat-sheet, or a comparable physical or digital workaround added by users to compensate for the interface — is treated as a strong signal (typically VERIFIED or SUPPORTED per the evidence model) that a needed cognitive or physical affordance is missing from the design, and the missing built-in affordance is flagged directly rather than the workaround itself being treated as an acceptable accommodation or a training gap. Absence of such artifacts in the evidence is not itself evidence that no affordance gap exists — it only means this particular signal was not available. | Strong | Major | Hartson & Pyla, *The UX Book* (User-Created Affordances as diagnostic flags; Norman, "when simple things need pictures, labels, or instructions, the design has failed") |

## How the usability skill should apply these

Apply AF01 as a diagnostic step after a control-level finding from `core.md`'s Actions section (A01R-A16R) or an accessibility finding has already been identified — it names *why* the control failed, it does not replace the underlying rule citation. Do not create a new finding solely by applying this framework to a control with no other identified defect. Apply AF02 whenever the evidence includes a photograph, screenshot, or description of a real-world or in-product user workaround; treat it as a strong signal pointing at a specific missing affordance (state which type), and recommend building that affordance into the interface directly rather than treating the user's own workaround as sufficient.

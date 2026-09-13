# Product: goal, value, information architecture, content

Platform-agnostic. Covers rules P01-P07 (purpose & task) and C01-C06 (content) from the source catalog. See `../../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

## Purpose & task

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| P01 | The screen has a clear primary user goal; content and controls support that goal rather than internal product structure. | Strong | Major | Apple HIG Design principles; NN/g Ten Usability Heuristics; ISO 9241-210 |
| P02 | The most important information/action appears before secondary information; visual hierarchy reflects task priority. | Strong | Major | Apple HIG Writing; Android content composition guidance; NN/g Ten Usability Heuristics |
| P03 | The design minimizes unnecessary steps, decisions, data entry, and mode switches for the main task. | Strong | Major | Apple HIG Design principles; NN/g Ten Usability Heuristics, Progressive Disclosure; Baymard mcommerce research |
| P04 | Common tasks are efficient; advanced/rare options are progressively disclosed rather than competing with the primary path. | Strong | Moderate | NN/g Progressive Disclosure; Apple HIG Design principles |
| P05 | The user can leave or cancel guided flows when lock-in is not essential. | Strong | Major | Apple HIG Design principles, Onboarding; NN/g Ten Usability Heuristics |
| P06 | The app does not force registration before demonstrating value unless identity is intrinsic to the task or required for safety/security. | Contextual | Major | NN/g Checklist for Registration/Login, Login Walls Stop Users; ISO 9241-210 |
| P07 | The design distinguishes first-use, repeat-use, and expert-use needs; it does not optimize exclusively for first-time explanation. | Strong | Moderate | NN/g Progressive Disclosure, Mobile-App Onboarding, Mobile UX Study Guide |

**Applicability note:** P06 is contextual, not a hard fail — some products legitimately require identity before any value can be shown (e.g. a service tied to a personal account by nature). Ask what the product actually is before flagging.

## Content / UX writing

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| C01 | Copy is concise, direct, respectful, and uses the user's vocabulary rather than internal implementation terms. | Strong | Moderate | Apple HIG Writing; NN/g Ten Usability Heuristics, Error-Message Guidelines |
| C02 | Buttons and links use descriptive action language; avoid cute wording when clarity matters. | Strong | Moderate | Apple HIG Writing, Buttons |
| C03 | Multi-step flows use consistent labels for progress actions such as Next/Continue/Done and clearly indicate completion. | Strong | Moderate | Apple HIG Writing |
| C04 | Empty/error states explain what happened and what to do next, rather than merely decorating the blank state. | Strong | Major | NN/g Designing Empty States, Error-Message Guidelines; Apple HIG Writing |
| C05 | Inclusive language avoids unnecessary assumptions, stereotypes, and culture-specific ambiguity; localization implications are reviewed. | Strong | Moderate | Apple HIG Inclusion; Android Localize your app |
| C06 | Critical instructions are placed where needed in context rather than in a distant help screen that requires recall. | Strong | Major | NN/g Ten Usability Heuristics, Progressive Disclosure |

## How the product skill should apply these

1. Start every review by identifying the single primary user goal for the reviewed screen/flow (P01). If none is identifiable, that is itself a P01 finding, not a gap to skip past.
2. Check P02 (hierarchy) and C01-C06 (content) against that same stated goal — content quality is judged by whether it serves the goal, not by taste.
3. P06 and P07 require product context (is this a first-use screen? is identity intrinsic?). If that context is missing, report the finding as `NOT ASSESSABLE` per the evidence model rather than assuming either answer.
4. Do not report a P03 "too many steps" finding without checking whether the steps are dependent (each needs the previous) or independent (could be reordered/removed) — dependency changes whether reduction is actually possible.

# Product: goal, value, information architecture, content

Platform-agnostic. Covers rules P01-P07 (purpose & task), IA01-IA02 (information architecture), and C01-C06 (content) from the source catalog. See `../../../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

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
| P08 | A feature, permission request, or onboarding flow states a concrete user value, why it is the best available way to serve that value, and explicit operating boundaries for when/how it is used; a vague, open-ended value proposition ("stay connected," "never miss out") does not justify unconstrained, unbounded access. | Contextual | Major | Stanford Behavior Design Lab, Fogg Behavior Model; Apple HIG Privacy, Requesting Permission; Android Request runtime permissions |

**Applicability note:** P06 is contextual, not a hard fail — some products legitimately require identity before any value can be shown (e.g. a service tied to a personal account by nature). Ask what the product actually is before flagging.

**Applicability note:** P08 is distinct from P06 — P06 covers only identity/personal-data gating, while P08 covers any feature or permission whose stated benefit is too vague to bound its use, whether or not identity/data is involved. When the evidence does not show whether an alternative approach was considered or why this approach best serves the stated value, report P08 as `NOT ASSESSABLE` rather than assuming the flow passes or fails.

## Information architecture

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| IA01 | Navigation, labeling, and categorization sit at the intersection of user mental models, content structure/volume, and business or technical context — not on internal organizational or system structure alone. | Strong | Major | Rosenfeld, Morville & Arango, *Information Architecture for the Web and Beyond* |
| IA02 | When an IA structure's findability has not been validated with users, recommend tree testing over relying on visual-comp review alone. | Strong | Moderate | Donna Spencer, tree testing methodology |

**Applicability note:** IA01 requires visibility into the business/technical context behind a navigation or categorization choice (content volume, existing structure, technical constraints). If that context is missing from the evidence, report `NOT ASSESSABLE` rather than assuming the structure is right or wrong.

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
3. Check navigation, labeling, and categorization against IA01 — is the structure organized around user mental models and content, or around internal department/system structure? If the reviewed IA has only been checked via visual-comp review, recommend tree testing (IA02) as the next validation step rather than treating visual review as sufficient evidence of findability.
4. P06, P07, and IA01 all require product context (is this a first-use screen? is identity intrinsic? what's the business/technical context behind this IA choice?). If that context is missing, report the finding as `NOT ASSESSABLE` per the evidence model rather than assuming either answer.
5. Do not report a P03 "too many steps" finding without checking whether the steps are dependent (each needs the previous) or independent (could be reordered/removed) — dependency changes whether reduction is actually possible.
6. Check any feature, permission request, or onboarding flow against P08: can you name the concrete user value, why this is the best available way to serve it, and the explicit operating boundaries for its use? A flow whose only justification is a vague, open-ended value proposition ("stay connected," "never miss out") fails P08 regardless of whether P06 also applies — P06 is specifically about identity/personal-data gating, while P08 covers any feature or permission, with or without a data/identity component. If the evidence does not show whether an alternative approach was considered, report P08 as `NOT ASSESSABLE` rather than assuming the flow passes or fails; do not report the same fact twice under both P06 and P08 on the same screen.

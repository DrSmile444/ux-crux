# Trust: platform-agnostic onboarding, permissions, and destructive-action safety

See `../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules.

## Onboarding & trust (platform-agnostic half)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| O01 | Skip standalone onboarding when the interface can be understood through normal use. | Strong | Moderate | Apple HIG Onboarding; NN/g Mobile-App Onboarding: An Analysis of Components and Techniques |
| O02 | If onboarding is necessary, keep it fast, optional where possible, and focused on value/setup that cannot be learned contextually. | Strong | Major | Apple HIG Onboarding; NN/g Mobile-App Onboarding |
| O03 | Teach through interaction or contextual tips rather than requiring users to memorize a feature tour. | Strong | Moderate | Apple HIG Onboarding; NN/g Mobile-App Onboarding |
| O06 | Permission denial gracefully degrades the experience and provides a path to enable access later; denial is not treated as user error. | Platform contract | Major | Android Request runtime permissions; NN/g 3 Design Considerations for Effective Mobile-App Permission Requests |
| O07 | Collect/request only data and permissions actually required for the product/feature. | Strong | Blocker | Apple HIG Privacy; Android Request runtime permissions |
| O11 | Login/registration asks for the minimum information and explains the benefit; guest/anonymous use is offered when the core experience does not require identity. | Contextual | Major | NN/g A Checklist for Registration and Login Forms on Mobile, Login Walls Stop Users in Their Tracks |
| O12 | Privacy-sensitive history (for example search history) is displayed cautiously and can be cleared where appropriate. | Strong | Moderate | Apple HIG Searching, Privacy |

## Destructive-action safety (trust-relevant half of Errors & recovery)

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| E05 | Destructive or financial consequences are clearly visible before commitment; cost/irreversibility is not hidden in secondary text. | Strong | Blocker | NN/g Confirmation Dialogs Can Prevent User Errors; Apple HIG Alerts |
| E07 | Back/cancel during editing cannot silently discard meaningful work; save draft, warn only when necessary, or offer undo/recovery. | Strong | Blocker | Android Core app quality guidelines; Apple HIG Design principles, Alerts |
| E08 | For a high-stakes or security-sensitive action (a privacy/security scan, a large financial transfer, an irreversible account-level change), a brief staged process or perceptible "checking"/"scanning" step can serve as a legitimate trust signal, distinct from E05/E07's purpose of preventing accidental loss. This is a narrow, justified exception, not a general license to add delay: an unexplained or artificial delay on a routine, low-stakes, or frequently repeated action is itself a finding, not a trust-building technique. | Contextual | Moderate | NN/g Trust and Credibility in UX; NN/g Website Response Times |

The general error-prevention/recovery rules (state preservation on failure, idempotent retries, recovering without redoing unrelated work) are covered by the separate `usability` skill, not repeated here. This file covers only the confirmation-and-consent angle of destructive actions, plus (E08) the narrower question of deliberate friction as a trust signal.

### Folk-rule guard: "always confirm delete"

Do not treat every destructive action as requiring a confirmation dialog. The corrected rule (the fuller routine-vs-irreversible action pattern, A04R-A06R, is covered by the separate `usability` skill): routine, reversible destructive actions should prefer **Undo** over a confirmation dialog — repeated confirmations create habituation and users click through them without reading. Reserve a specific confirmation (naming the action and its consequence, not a generic "Are you sure? Yes/No") for actions that are unusual, irreversible, expensive, or security-sensitive. E05 is precisely about that confirmation being specific and visible; E07 is about not needing a confirmation at all when undo/recovery is available instead.

## How the trust skill should apply these

Check destructive actions first: is the action routine and reversible (favor undo, per A04R-A06R in usability) or irreversible/high-cost (require a specific, consequence-naming confirmation per E05, and never let cancel/back silently discard work per E07)? Then check onboarding and identity requests: flag standalone onboarding unless it teaches something that cannot be learned by using the product (O01-O03), and flag any registration/login step that asks for more than the minimum or fails to explain its benefit (O11), especially when guest/anonymous use would satisfy the same task (O07). Treat permission-request *timing* as a separate concern handled in `mobile.md` (O04, O05, O08-O10) — this file covers what happens after a permission is denied (O06) and what data is retained afterward (O12). When context about whether identity or a permission is truly required is missing, report `NOT ASSESSABLE` rather than assuming the product needs it.

Apply E08 narrowly and in both directions. It only ever applies to actions that are genuinely high-stakes or security-sensitive (a privacy/security scan, a large financial transfer, an irreversible account-level change) — do not cite it to justify friction on a routine or frequent action, and do not let its absence on a low-stakes action read as a defect. Conversely, an unexplained or clearly artificial delay on a routine action is a finding under E08, not a pass: the rule cuts both ways, so check for missing justified friction on high-stakes actions and unjustified friction on everything else.

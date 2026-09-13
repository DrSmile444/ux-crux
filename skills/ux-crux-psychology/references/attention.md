# Psychology: attention and Gestalt perception

See `../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. Read `ethics.md` before treating any mechanism below as a recommendation rather than a description.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| PA01 | Visual hierarchy should make task priority — not business pressure — the most salient path. | Strong + ethical | Major | NN/g 5 Principles of Visual Design in UX; NN/g The Vortex |
| PA02 | Important feedback/state changes should occur near the user's current locus of attention or use a proportionate cue; do not assume distant changes will be noticed. | Strong | Major | NN/g Change Blindness in UX |
| PA03 | Avoid multiple simultaneous salient changes, animations, badges, or competing CTAs that dilute attention. | Strong | Moderate | NN/g Change Blindness in UX; NN/g Minimize Cognitive Load |
| PA04 | Use motion, contrast, scale, and isolation deliberately; if everything is emphasized, priority becomes ambiguous. | Strong | Moderate | NN/g 5 Principles of Visual Design in UX; NN/g Change Blindness in UX |
| PA05 | Use proximity to express semantic grouping; labels/actions should sit close to the objects they describe or affect. | Strong | Major | NN/g Closeness of Actions and Objects in GUI Design; NN/g Form Design Quick Fix: Group Form Elements Using White Space |
| PA06 | Use similarity consistently: visually similar controls should behave similarly; do not style unrelated/noninteractive objects like actions. | Strong | Major | NN/g Similarity Principle in Visual Design; NN/g 5 Principles of Visual Design in UX |
| PA07 | Use common regions/containers only when they represent real conceptual groups; strong boundaries can override proximity cues. | Strong | Moderate | NN/g The Principle of Common Region |
| PA08 | Ensure figure/ground and contrast make primary content and interactive affordances distinguishable in all supported appearances. | Strong | Major | NN/g Visual Design in UX: Study Guide; Apple HIG Color |
| PA09 | Do not style legitimate, user-relevant content (announcements, featured items, in-app messages) using standard ad-banner conventions — a fixed horizontal strip at a typical ad aspect ratio, a flashy standalone box, or an ad-like "Sponsored"/badge treatment. Selective attention trained on real ads causes users to filter this content out entirely ("banner blindness"), the opposite failure from PA03/PA04's over-emphasis concern. | Strong | Major | NN/g Banner Blindness: Old and New Findings; NN/g 5 Principles of Visual Design in UX |

## How the psychology skill should apply these

These are Gestalt/attention mechanics: what a user's visual system groups, notices, and ignores automatically, before any conscious reasoning happens. Most of these (PA02-PA08) are corrective — get the grouping and salience right so the interface communicates truthfully — and need only a light pass through the four-gate test in `ethics.md`. PA01 is the one to watch most carefully: when "make it salient" is being used to override the user's own task priority in favor of a business metric (e.g. an upsell CTA styled more prominently than the task the user came to do), treat it as failing the ethics gate's user-benefit/agency test, not just a visual-design nitpick. PA09 is the mirror-image failure to PA01/PA03/PA04: those are about a business making one thing *too* salient; PA09 is about important content becoming *invisible* because its styling accidentally matches the pattern users have trained themselves to ignore. Check PA09 whenever the reviewed evidence contains an in-app announcement, promotional callout, or featured-content module styled as a boxed banner.

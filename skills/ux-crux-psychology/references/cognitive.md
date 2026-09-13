# Psychology: cognitive load, mental models, memory

See `../shared/evidence-model.md` and `severity-model.md` for how to report findings from these rules. Read `ethics.md` before treating any mechanism below as a recommendation rather than a description.

| ID | Rule | Evidence | Default severity | Sources |
|---|---|---|---|---|
| PC01 | Minimize extraneous cognitive load: reading, remembering, translating, searching, comparing, and deciding that do not advance the user's goal. | Strong | Major | NN/g Minimize Cognitive Load to Maximize Usability; NN/g Interaction Cost: Definition; NN/g Ten Usability Heuristics |
| PC02 | Prefer recognition over recall: keep choices, labels, previously entered information, and needed context visible or easily retrievable. | Strong | Major | NN/g Ten Usability Heuristics; NN/g Minimize Cognitive Load |
| PC03 | Use familiar platform/product patterns for routine behavior unless a measurable user benefit justifies deviation. | Strong | Major | NN/g Efficiency vs. Expectations; NN/g Ten Usability Heuristics |
| PC04 | When a novel interaction is necessary, provide signifiers, immediate feedback, and contextual learning rather than expecting users to infer an invisible model. | Strong | Major | NN/g Efficiency vs. Expectations; NN/g Closeness of Actions and Objects in GUI Design |
| PC05 | Avoid requiring users to carry transient values or instructions across screens; externalize state or preserve it. | Strong | Major | NN/g Minimize Cognitive Load; NN/g Ten Usability Heuristics |
| PC06 | Avoid unnecessary mode/context switches in a flow; when interruption is unavoidable, preserve place and state so resumption is cheap. | Strong | Major | NN/g Interaction Cost: Definition; Android Core App Quality guidelines |
| PC07 | Group information into meaningful task-oriented units; chunking must reflect semantics, not arbitrary visual segmentation. | Strong | Moderate | NN/g Minimize Cognitive Load; NN/g Closeness of Actions and Objects in GUI Design |
| PC08 | Hide complexity only when it is genuinely secondary; frequently needed hidden options can increase cognitive and interaction cost. | Contextual | Moderate | NN/g Progressive Disclosure; NN/g Interaction Cost: Definition |

## How the psychology skill should apply these

These describe the cost side of the ledger: every extra thing a user must read, remember, or decide is a real cost even when nothing is broken. Before flagging a cognitive-load issue, confirm the load is *extraneous* to the user's actual goal (PC01) rather than intrinsic to the task itself — reducing intrinsic complexity is a product/IA question (see `ux-crux/product`), not a psychology finding. These rules are mostly descriptive-and-corrective (reduce real cost), not persuasive mechanisms, so the four-gate test in `ethics.md` applies lightly here — but still check PC08 (progressive disclosure) for whether hiding something serves the user or just the business's preference for a simpler-looking screen.

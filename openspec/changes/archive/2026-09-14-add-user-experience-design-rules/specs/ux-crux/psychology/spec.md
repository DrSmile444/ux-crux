## ADDED Requirements

### Requirement: Gestalt Continuation, Closure, Common Fate, and Symmetry checks
The psychology skill SHALL, in addition to its existing Similarity, Proximity, Common Region, and Figure/Ground checks, evaluate a reviewed layout against four further Gestalt perception laws:
- **Continuation**: elements arranged along a continuous line or curve are perceived as a connected sequence; a control or piece of related content that breaks an otherwise continuous visual path without a stated reason SHALL be flagged.
- **Closure**: users mentally complete a familiar but visually incomplete shape or icon; the skill SHALL check that an intentionally incomplete graphical element (e.g. a partial icon standing in for a full concept) is unambiguous once closure is applied, not merely ambiguous fragments.
- **Common Fate**: elements that move, animate, or point in the same direction are perceived as belonging to the same group or process; the skill SHALL flag unrelated elements that share directional motion/animation in a way that implies a false grouping, and flag related elements that fail to share a common-fate cue when doing so would clarify their relationship.
- **Symmetry & Order**: users automatically simplify a complex layout into a small number of balanced, symmetrical regions; the skill SHALL flag a layout whose actual information grouping fights this automatic simplification (for example, a visually symmetrical arrangement that groups functionally unrelated controls together).

These four checks are additive to the existing Gestalt-based rules (Similarity, Proximity, Common Region, Figure/Ground) and do not replace or duplicate them.

#### Scenario: Unrelated elements share false common-fate motion
- **WHEN** the reviewed evidence shows two functionally unrelated elements (for example a promotional banner and an unrelated navigation control) animating or moving in synchronized fashion
- **THEN** the psychology skill flags a Common Fate violation, noting that the shared motion implies a functional relationship that does not exist

#### Scenario: Symmetrical layout groups unrelated controls
- **WHEN** the reviewed evidence shows a visually symmetrical, balanced layout in which the symmetry groups controls that serve unrelated tasks
- **THEN** the psychology skill flags a Symmetry & Order violation, distinct from a Proximity or Common Region finding, because the grouping cue here is the automatic visual simplification into balanced regions rather than spatial closeness or a shared boundary

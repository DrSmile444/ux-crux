## ADDED Requirements

### Requirement: Aesthetic-Usability Effect testing caution
The review skill SHALL account for the Aesthetic-Usability Effect when interpreting usability-test feedback gathered on a polished, high-fidelity mock-up: users perceive a visually pleasing design as more usable and tend to overlook or under-report minor structural navigation flaws when testing such a mock-up. The review skill SHALL NOT treat positive user feedback on a high-fidelity mock-up's look-and-feel as proof that its underlying navigation/structure is free of defects, and SHALL recommend that structural navigation mechanics be validated on low-fidelity wireframes (before visual polish is applied) whenever the evidence shows usability testing was conducted only on high-fidelity assets.

#### Scenario: Positive feedback on a polished mock-up cited as proof of usability
- **WHEN** the evidence shows user testing feedback praising a high-fidelity mock-up's visual appeal, and the same evidence is being used to conclude the interface has no navigation/structural usability issues
- **THEN** the review skill flags the Aesthetic-Usability Effect risk and recommends validating structural navigation separately on unstyled or low-fidelity wireframes

## MODIFIED Requirements

### Requirement: Cited sample-size guidance for usability-test recommendations
When the review skill recommends a qualitative usability-test sample size as part of applying its per-flow measurement guidance, it SHALL cite Jakob Nielsen's finding (NN/g) that approximately five participants surfaces the large majority of usability issues in a qualitative study, including the 2012 revisit confirming that testing meaningfully more participants does not yield appreciably more insight, rather than stating an uncited or arbitrary sample size. When advising on how many participants must exhibit the same behavior before a pattern is treated as high-confidence rather than an individual outlier, the review skill SHALL cite the convergence threshold of the same behavioral issue appearing in at least 6 of 8 participants across iterative testing cycles, rather than treating a single participant's behavior as sufficient grounds for a design change.

#### Scenario: Reviewer recommends a usability-test sample size
- **WHEN** the review skill recommends how many participants to include in a qualitative usability test for a reviewed flow
- **THEN** it cites Nielsen/NN/g's five-participant finding as the basis for that recommendation rather than proposing an unsourced number

#### Scenario: Single outlier participant prompts an unwarranted redesign
- **WHEN** a usability-test report shows one participant out of several exhibiting an unusual behavior, and a design change is proposed solely on that basis
- **THEN** the review skill flags the proposed change as insufficiently supported, citing the 6-of-8 convergence threshold as the bar for treating a behavior as a representative pattern rather than noise

## ADDED Requirements

### Requirement: Deliberate friction protecting shared resources is distinguished from dark patterns
The psychology skill SHALL distinguish deliberate friction that protects a shared resource, another user, or a legitimate collective/enterprise policy from the acting user's own action (Slanty Design) from a dark pattern that imposes friction to extract a business advantage from the acting user at their own expense. A friction-increasing design SHALL NOT be flagged as a manipulative dark pattern under this requirement when its primary beneficiary is a shared resource or a third party rather than the business at the acting user's expense; such friction SHALL still be evaluated against the four-gate ethical test for its own proportionality and clarity, but is not automatically penalized for existing.

#### Scenario: Structural constraint prevents an action that would corrupt shared data
- **WHEN** the reviewed evidence shows a deliberately added interaction cost (an extra confirmation step, a structurally awkward control) whose stated purpose is preventing an individual user's action from corrupting a shared database, breaching security, or harming other users of a multi-user system
- **THEN** the psychology skill classifies this as Slanty Design, a legitimate protective friction, rather than an ethical-guardrail violation, while still checking that the friction is proportionate and clearly explained

#### Scenario: Friction added for the business's own benefit at the user's expense
- **WHEN** the reviewed evidence shows friction added to a user's own action (for example cancellation) that primarily benefits the business by discouraging that user's legitimate choice, with no shared resource or third party being protected
- **THEN** the psychology skill does not classify this as Slanty Design and continues to evaluate it as a potential dark pattern under the four-gate test and the existing deceptive-pattern detection requirement

#### Scenario: Unclear who the friction protects
- **WHEN** the reviewed evidence does not make clear whether an added friction point protects a shared resource/third party or only serves the business at the acting user's expense
- **THEN** the psychology skill reports the finding as `NOT ASSESSABLE` or `RISK` rather than assuming either classification

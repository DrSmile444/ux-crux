## Purpose

Defines the psychology lens covering cognitive, attention, motivational, emotional, behavioral-economics, social, and habit-formation mechanisms, gated by an ethical test before any mechanism becomes a recommendation.

## ADDED Requirements

### Requirement: Four-gate ethical test for persuasive mechanisms
Before recommending or endorsing use of a psychological or persuasive mechanism (for example defaults, loss aversion, social proof, scarcity, streaks), the psychology skill SHALL evaluate it against four gates — evidence strength, applicability to this context, user benefit, and agency/truthfulness — and SHALL NOT issue a positive recommendation to use a mechanism that fails any gate.

#### Scenario: Streak-loss messaging under review
- **WHEN** a reviewed feature uses "Your streak will end tonight" messaging to drive daily return visits
- **THEN** the psychology skill evaluates the mechanism's user benefit and agency/truthfulness, and flags it as an ethical concern if it creates disproportionate anxiety rather than endorsing it as good use of loss aversion

### Requirement: Descriptive vs. prescriptive separation
The psychology skill SHALL distinguish between describing a psychological effect's likely behavioral impact and prescribing that the product exploit that effect; a described effect SHALL NOT automatically appear as an actionable recommendation.

#### Scenario: Explaining an observed default
- **WHEN** a reviewed feature has a pre-selected default option
- **THEN** the psychology skill explains the default effect's likely influence on behavior separately from judging whether that specific default is user-benefiting or exploitative

### Requirement: Deceptive-pattern detection
The psychology skill SHALL flag fabricated urgency or scarcity, fake social proof, confirmshaming, and asymmetric friction between opt-in and opt-out/cancellation paths as ethical-guardrail violations at major or blocker severity.

#### Scenario: Asymmetric cancellation friction
- **WHEN** a reviewed flow makes upgrading one tap but cancellation requires multiple confirmation screens and a support contact
- **THEN** the psychology skill reports this asymmetry as a trust/ethics finding at major or blocker severity

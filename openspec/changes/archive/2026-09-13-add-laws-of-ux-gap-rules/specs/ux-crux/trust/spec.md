## ADDED Requirements

### Requirement: Strategic friction as a trust signal
The trust skill SHALL evaluate whether a high-stakes or security-sensitive action (for example a privacy/security scan, a large financial transfer, or an irreversible account-level change) uses a deliberate, brief friction step (a staged process, a short animated "checking"/"scanning" state, or an equivalent perceptible pause) as a signal of thoroughness and trustworthiness, distinct from the destructive-action-confirmation requirement, which addresses preventing accidental loss rather than building perceived trust.

The skill SHALL NOT treat the absence of such friction as a defect by default — instant execution is correct for routine, low-stakes, or frequently repeated actions — and SHALL NOT treat the presence of an unexplained or clearly artificial delay on a low-stakes action as a positive finding.

#### Scenario: High-stakes action executes instantly with no staged feedback
- **WHEN** the evidence shows a security-sensitive action (for example a "Review account privacy" or "Confirm large transfer" flow) completing immediately with no intermediate staged state, progress narration, or perceptible pause
- **THEN** the trust skill reports a finding (severity no higher than moderate, since instant execution is not itself unsafe) noting the missed opportunity to build user confidence through visible thoroughness, and distinguishes this from any separate destructive-action-confirmation finding

#### Scenario: Routine low-stakes action has an artificial delay
- **WHEN** the evidence shows a frequent, low-stakes, reversible action (for example toggling a routine setting) with an unexplained delay or artificial "processing" animation before completion
- **THEN** the trust skill reports a finding that the added friction is unjustified for this action's risk/frequency profile, rather than praising the delay as a trust signal

#### Scenario: High-stakes action already uses staged, explained friction
- **WHEN** the evidence shows a security-sensitive action presenting a brief staged process (for example an animated multi-step "scanning" sequence) before confirming completion
- **THEN** the trust skill records this as a positive trust-signal finding, separate from and not a substitute for any required destructive-action confirmation copy

# ux-crux/trust Specification

## Purpose

Defines the trust lens covering permission, onboarding, and interruption timing, destructive-action safety, and trust signals.

## Requirements

### Requirement: Contextual permission timing
The trust skill SHALL flag permission requests made at startup rather than in the context of the feature that needs them, and SHALL check that permission denial degrades gracefully rather than blocking the app.

#### Scenario: All permissions requested at launch
- **WHEN** a reviewed app requests location, camera, and notifications permissions on first launch before any feature that needs them is invoked
- **THEN** the trust skill flags each out-of-context request

### Requirement: Destructive-action safety
The trust skill SHALL check that routine reversible destructive actions offer undo rather than a confirmation dialog, and that irreversible or high-cost destructive actions use a specific confirmation naming the action and consequence rather than a generic Yes/No dialog.

#### Scenario: Irreversible action with generic confirmation
- **WHEN** a reviewed flow permanently deletes an account behind an "Are you sure? Yes/No" dialog
- **THEN** the trust skill flags the confirmation copy as insufficient at major or blocker severity

### Requirement: Notification and interruption honesty
The trust skill SHALL flag marketing notifications framed as urgent or system-critical, and SHALL check that users have a way to manage notification categories/preferences when notifications are material to the product.

#### Scenario: Marketing message styled as urgent alert
- **WHEN** a reviewed notification uses urgent, time-sensitive framing for a promotional offer
- **THEN** the trust skill flags this as a platform-contract violation

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

### Requirement: Notification time and sender granularity
The trust skill SHALL check whether notification controls support time-based quiet hours and sender/contact-level allowlisting, not only category-level on/off toggles, when notifications are material to the product.

#### Scenario: Only category-level controls exist
- **WHEN** a product exposes per-category notification toggles but no time-based quiet-hours control and no way to allow a specific sender/contact through when notifications are otherwise limited
- **THEN** the trust skill flags the absence of finer-grained controls as a finding

#### Scenario: Time- and sender-level controls are present
- **WHEN** the product exposes, directly or by deferring to the OS's own mechanism (for example Focus modes or Do Not Disturb with priority senders), both time-based and sender-level notification controls
- **THEN** the trust skill does not flag this requirement

#### Scenario: Notification-settings surface not shown
- **WHEN** the evidence provided does not include the notification-settings surface at all
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

### Requirement: Badge and indicator urgency-color match
The trust skill SHALL flag a badge or unread indicator whose color or visual intensity signals higher urgency than the underlying content's actual criticality — for example a high-arousal alarm color (such as saturated red) applied to a routine, non-critical social or content update.

#### Scenario: Alarm color on routine content
- **WHEN** a routine, non-critical notification (for example a social like/comment count) is represented with a high-arousal alarm color or badge treatment typically reserved for critical or time-sensitive information
- **THEN** the trust skill flags the mismatch between the indicator's visual urgency and the content's actual criticality

#### Scenario: Alarm color reserved for genuinely critical content
- **WHEN** a high-arousal alarm color or badge treatment is used only for genuinely critical, safety-relevant, or time-sensitive information
- **THEN** the trust skill does not flag this requirement

#### Scenario: Rendered indicator color not in evidence
- **WHEN** the evidence provided does not show the actual rendered color or visual treatment of the badge/indicator (for example, it is described only in text without a visual)
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE`

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

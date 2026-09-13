## ADDED Requirements

### Requirement: Cross-audience sharing requires explicit active opt-in
The trust skill SHALL flag a feature that publishes or broadcasts a user's activity from one context (for example a third-party site, a private group, or a prior audience) to a different, broader, or unrelated audience by default, when consent is obtained only through a passive, easily-missed, or auto-expiring opt-out mechanism rather than an explicit, active opt-in choice made before the broadcast occurs.

#### Scenario: Activity is broadcast by default with only a passive opt-out
- **WHEN** the reviewed evidence shows a feature that publishes a user's action taken in one context to a different, broader audience by default, with consent handled only through a small, timed, or easily-dismissed opt-out notice
- **THEN** the trust skill flags this as a cross-audience-sharing-default finding

#### Scenario: Cross-audience sharing requires an explicit prior opt-in
- **WHEN** the reviewed evidence shows that publishing an action to a different or broader audience requires an explicit, persistent, active choice (for example a modal requiring "Allow" or "Keep Private") before anything is shared
- **THEN** the trust skill does not flag this requirement

### Requirement: Message audience scope is unambiguous at the point of sending
The trust skill SHALL flag a messaging, posting, or reply interface where the public-versus-private destination of the content is not clearly and unambiguously indicated immediately adjacent to the send/submit control, when the interface's layout or visual design could plausibly cause a user to mistake a public-facing field for a private one (or vice versa).

#### Scenario: Public reply field is visually indistinguishable from a private message field
- **WHEN** the reviewed evidence shows a public reply/post field positioned or styled so similarly to a private direct-message field that a user could reasonably mistake one for the other, with no high-contrast audience-scope indicator near the send control
- **THEN** the trust skill flags the audience-scope ambiguity as a finding

#### Scenario: Audience scope is clearly labeled at the send control
- **WHEN** the reviewed evidence shows a clear, high-contrast label or visual treatment (for example "Public reply" vs. "Private message") immediately adjacent to the send control indicating the destination audience
- **THEN** the trust skill does not flag this requirement

### Requirement: Cloud sync/storage warnings state file location and local-copy impact
The trust skill SHALL flag a storage or sync-toggle warning that tells the user files will be "removed" or affected without stating where the affected files actually live (locally, in the cloud, or both) and what happens to any local copy specifically.

#### Scenario: Sync-toggle warning omits file location and local-copy impact
- **WHEN** the reviewed evidence shows a warning dialog for disabling cloud sync that states files will be "removed" without clarifying whether a local copy remains on the device
- **THEN** the trust skill flags the warning copy as insufficiently clear about file-location and local-copy consequences

#### Scenario: Sync-toggle warning states location and local-copy impact explicitly
- **WHEN** the reviewed evidence shows a warning dialog that explicitly states where files are stored and confirms whether a local copy will remain after sync is disabled
- **THEN** the trust skill does not flag this requirement

## ADDED Requirements

### Requirement: Shared non-Markdown assets ship in every package
The build process SHALL copy every shared asset in the canonical shared source, including non-Markdown files such as the report template, into the `shared/` folder of every generated skill package in both distributions. The validation step SHALL report any generated copy that differs from its canonical source as a release-blocking drift.

#### Scenario: Editing the report template
- **WHEN** the canonical report template is edited and the build runs
- **THEN** every generated package's `shared/` folder holds a byte-identical copy, and validation passes

#### Scenario: Hand-edited generated template
- **WHEN** a generated package's copy of the report template differs from the canonical source
- **THEN** the validation step fails and names the drifted file

### Requirement: Report skill is distributed beside the six review skills
The build process SHALL generate the `report` skill in both distributions — `ux-crux-report` for skills.sh and `report` in the plugin — from one canonical source, so the plugin exposes seven skills and a bare skills.sh install lists seven `ux-crux-<name>` skills.

#### Scenario: Listing skills from the repository
- **WHEN** a contributor runs `npx skills add . --list` after a build
- **THEN** the list shows exactly seven `ux-crux-<name>` skills, including `ux-crux-report`

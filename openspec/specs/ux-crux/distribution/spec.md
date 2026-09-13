# ux-crux/distribution Specification

## Purpose

Defines the build, packaging, and versioning system that turns canonical skill source into the standalone and plugin distributions, and documents how to run them locally.

## Requirements

### Requirement: Single canonical source, two generated distributions
The build process SHALL generate a standalone distribution (skill directories named `ux-crux-<domain>`, for skills.sh) and a plugin distribution (skill directories using the short canonical name, for the Claude/Codex plugin) from one canonical `src/skills/<domain>` source, without requiring rule content to be duplicated by hand between the two.

#### Scenario: Updating a rule in source
- **WHEN** a reference file under the psychology skill's canonical source is edited
- **THEN** running the build regenerates both the standalone `ux-crux-psychology` distribution and the plugin distribution's `psychology` skill with the updated content, without a manual edit to either generated copy

### Requirement: No plugin/skill name collision
The generated plugin distribution SHALL NOT produce a skill invocation name that repeats the plugin namespace (for example it must not produce `ux-crux:ux-crux-review`); the generated standalone distribution SHALL use a globally distinguishing name for each skill.

#### Scenario: Installing the plugin in Claude Code
- **WHEN** a user installs the `ux-crux` plugin in Claude Code
- **THEN** invoking the review skill through the plugin resolves to `ux-crux:review`, not `ux-crux:ux-crux-review`

### Requirement: Single version source synced across manifests
The project SHALL maintain one SemVer version as the source of truth, and the build/release process SHALL keep the Claude plugin manifest, the Codex plugin manifest, and any skill metadata version fields in sync with it; a change to distributed skill content SHALL require a version bump before release.

#### Scenario: Content changes without a version bump
- **WHEN** distributed skill files change but the version number is not incremented
- **THEN** the validation step reports this as a release-blocking inconsistency

### Requirement: Review's package aggregates every domain's reference content
The build process SHALL copy each domain skill's reference content into review's generated package (in every distribution), so review does not depend on sibling skill packages being present, while keeping each domain's own `src/skills/<domain>/references/` as the single edited source.

#### Scenario: Editing a domain's canonical source
- **WHEN** a reference file under a domain's canonical source is edited
- **THEN** running the build updates both that domain's own generated package and review's bundled copy of the same content, without a manual edit to either generated copy

### Requirement: Documented local run and test workflow
The repository SHALL document, in its README, how to build the distributions locally and how to load/test the plugin locally in Claude Code and Codex without publishing it, so a contributor can verify a change before any release.

#### Scenario: A contributor wants to test a rule change before publishing
- **WHEN** a contributor edits a reference file and wants to verify the change works in Claude Code
- **THEN** the README's local-run instructions describe the exact commands to build and load the updated plugin locally, with no external publish step required

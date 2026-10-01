## ADDED Requirements

### Requirement: Content survives user text-spacing overrides
The accessibility skill SHALL check that when a user sets line height to at least 1.5 times the font size, paragraph spacing to at least 2 times, letter spacing to at least 0.12 times and word spacing to at least 0.16 times, no content or function is lost (WCAG 2.2 SC 1.4.12, Level AA). This requirement is distinct from `X04` and `X05`, which cover text size scaling. It SHALL NOT apply to non-markup formats, and it SHALL be reported `NOT ASSESSABLE` from a screenshot alone because the check needs markup or a running build.

#### Scenario: Text clips after spacing override
- **WHEN** the reviewed evidence shows a fixed-height container that hides text once line height is raised to 1.5 times
- **THEN** the accessibility skill flags the text-spacing finding

#### Scenario: Screenshot only
- **WHEN** the reviewed evidence is a single screenshot
- **THEN** the accessibility skill reports this requirement `NOT ASSESSABLE` and names a running build with the spacing values applied as the evidence that would resolve it

### Requirement: Long-form reading text avoids maximum-contrast pairings
The accessibility skill SHALL check that long-form reading text on a light background uses a dark, not pure black, colour on a light, not pure white, background, while still meeting `X03`. The basis is the British Dyslexia Association guidance as quoted by Dyslexia Scotland, and dark-on-light polarity is supported by NN/g's review of dark and light mode research. The guidance conflicts with advice to maximise contrast, so the requirement SHALL be reported at `Contextual` evidence, SHALL NOT override `X03`, and SHALL NOT apply to short labels, controls or content a user can theme. Colour values that cannot be read from the evidence SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Pure black on pure white for long text
- **WHEN** the reviewed evidence shows long-form body text set as `#000000` on `#FFFFFF` with no user theme option
- **THEN** the accessibility skill reports a low-severity finding and recommends a softened pairing that still meets `X03`

#### Scenario: Near-black on off-white
- **WHEN** the reviewed evidence shows body text in a dark grey on an off-white background that meets 4.5:1
- **THEN** the accessibility skill does not flag this requirement

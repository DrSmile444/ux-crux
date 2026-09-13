## ADDED Requirements

### Requirement: Instructional and action-verb language accessibility
The accessibility skill SHALL flag instructional or help microcopy that describes a control by its visual/spatial position (for example "the button below," "the panel on the right") instead of the order of actions to take, since assistive technology reads content in document order and responsive layouts reposition elements. The accessibility skill SHALL also flag call-to-action or instructional copy that names a specific input hardware action (for example "Click," "Tap," "Press") where a device-agnostic action verb ("Select," "Choose," "View") would serve equally well, since interfaces are operated by mouse, touch, voice, and switch-access devices; this SHALL NOT apply to copy that is deliberately teaching a specific physical gesture (for example "Pinch to zoom").

#### Scenario: Spatial instruction instead of chronological order
- **WHEN** reviewed help text reads "Click the OK button below to continue" or otherwise instructs the user based on an element's on-screen position
- **THEN** the accessibility skill flags the spatial-language dependency and recommends chronological phrasing (for example "Next, select OK to continue")

#### Scenario: Hardware-specific verb on a multi-modal interface
- **WHEN** reviewed CTA copy on a responsive or multi-modal surface reads "Click here to submit" without any hardware-specific gesture being taught
- **THEN** the accessibility skill recommends a device-agnostic verb such as "Select" instead

#### Scenario: Copy intentionally teaches a physical gesture
- **WHEN** reviewed copy explicitly teaches a specific touch gesture the interface requires (for example "Pinch to zoom out")
- **THEN** the accessibility skill does not flag the hardware-specific verb under this requirement

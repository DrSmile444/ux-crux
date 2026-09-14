## ADDED Requirements

### Requirement: Voice UI command scope and persona alignment
The usability skill SHALL, when the reviewed evidence includes a voice user interface (VUI) or voice-assistant interaction, check that the voice interaction is limited to discrete, simple requests with concise, single-outcome results (for example a single calendar action or a single device-control command), and SHALL flag a voice interaction that requires the user to hold, compare, or choose among a long list of spoken options, since auditory presentation is linear, ephemeral, and easily exceeds working-memory capacity in a way a visual list does not. Separately, the usability skill SHALL check that the VUI's sonic persona (tone, pacing, formality) is deliberately aligned with the product's brand and the seriousness of the interaction context, and SHALL flag a mismatched tone (for example a flippant or sarcastic tone in a serious or safety-relevant context).

#### Scenario: Voice assistant reads a long list of search results aloud
- **WHEN** the reviewed evidence shows a voice interface reading aloud more than a small number of options or results for the user to choose among, with no paired visual display
- **THEN** the usability skill flags the interaction as exceeding auditory working-memory capacity and recommends routing the task to a visual/paired-screen display or reducing it to a single-outcome voice command

#### Scenario: Screen-paired voice assistant combines voice and visual list
- **WHEN** the reviewed evidence shows a voice command paired with a visual display that presents the resulting list of options
- **THEN** the usability skill does not flag the interaction under the auditory-overload concern, since the visual pairing addresses it

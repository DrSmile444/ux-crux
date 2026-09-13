## ADDED Requirements

### Requirement: Adjacent dynamic content does not create unintended meaning by juxtaposition
The psychology skill SHALL flag a dynamically inserted, unrelated element (an advertisement, an auto-generated recommendation, or a promotional module) placed directly adjacent to sensitive, serious, or emotionally weighted user content, when the juxtaposition itself would plausibly create an unintended narrative or emotional meaning neither element carries on its own — distinct from the existing disguised-ad and banner-blindness requirements, which concern an element being mistaken for or mistaken as a control, not the meaning created by placing two unrelated pieces of content next to each other.

#### Scenario: Promotional module sits directly beside serious or tragic content
- **WHEN** the reviewed evidence shows an automatically inserted ad, recommendation, or promotional module placed immediately adjacent to a serious, tragic, or emotionally sensitive piece of user content, with no contextual filtering or separation
- **THEN** the psychology skill flags the unintended-juxtaposition finding

#### Scenario: Dynamic content is contextually filtered or clearly separated
- **WHEN** the reviewed evidence shows a dynamic content-insertion system that excludes sensitive content from carrying adjacent ads/recommendations, or visually separates them with a clear boundary and contextual distance
- **THEN** the psychology skill does not flag this requirement

## ADDED Requirements

### Requirement: Text and icons over images keep contrast on the worst-case region
The accessibility skill SHALL check that text placed over an image, and informative icons placed over an image, keep the required contrast against the lightest or darkest region of the image behind them. Text follows WCAG 2.2 SC 1.4.3 and failure F83; icons follow SC 1.4.11. This requirement is distinct from `X03`, which concerns a flat foreground and background pair. It SHALL NOT apply to purely decorative text in a logo, and a user-supplied or rotating image that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Save icon on a bright listing photo
- **WHEN** the reviewed evidence shows a white save icon over listing photos that can be near white
- **THEN** the accessibility skill flags the contrast risk and recommends a scrim or a backing shape

#### Scenario: Text on a fixed dark scrim
- **WHEN** the reviewed evidence shows headline text on an image with a dark overlay that keeps 4.5:1 against the lightest region
- **THEN** the accessibility skill does not flag this requirement

### Requirement: iOS text meets Apple's default and minimum sizes and avoids light weights
The accessibility skill SHALL check that on iOS text defaults to 17 pt and none falls below the 11 pt minimum, and that small text avoids Ultralight, Thin and Light weights, following Apple Human Interface Guidelines, Typography. This requirement is distinct from `X04` and `X05` (text scaling) and `X16` (adverse reading conditions). It SHALL NOT apply to non-iOS platforms, and sizes that the evidence does not show SHALL be reported `NOT ASSESSABLE`.

#### Scenario: Caption at 9 pt in a thin weight
- **WHEN** the reviewed evidence shows an iOS caption set at 9 pt in a Light weight
- **THEN** the accessibility skill flags the size and weight

#### Scenario: Static mock-up without type specification
- **WHEN** the reviewed evidence is an image without stated point sizes
- **THEN** the accessibility skill reports this requirement `NOT ASSESSABLE`

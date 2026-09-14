## ADDED Requirements

### Requirement: Digital equity and graceful degradation across hardware and connectivity tiers
The accessibility skill SHALL, distinct from its existing WCAG/disability-focused rule set, check a reviewed design's assumptions about hardware capability, network connectivity, and digital literacy against Kranzberg's First Law of Technology ("technology is neither good nor bad, nor is it neutral"). The skill SHALL flag a design that fails, degrades unacceptably, or becomes unusable under low-bandwidth connectivity, on older or budget-tier devices, or without high-speed continuous connectivity, when the product's plausible user base includes users in those conditions. The skill SHALL NOT apply this requirement to a specialized enterprise or professional tool whose evidence establishes that a minimum hardware/connectivity tier is a legitimate, stated requirement.

#### Scenario: App unusable without continuous high-speed connectivity
- **WHEN** the reviewed evidence shows a consumer mobile app that fails or becomes unusable under intermittent or low-bandwidth connectivity, with no offline or degraded-connectivity state, and the product's plausible user base is not restricted to guaranteed high-connectivity environments
- **THEN** the accessibility skill flags the missing graceful-degradation path as a digital-equity finding, distinct from the existing WCAG conformance rules

#### Scenario: Specialized enterprise tool with a stated hardware minimum
- **WHEN** the reviewed evidence establishes that the product is a specialized enterprise tool with a documented minimum hardware/network requirement for its verified user base
- **THEN** the accessibility skill does not flag the hardware/connectivity assumption under this requirement

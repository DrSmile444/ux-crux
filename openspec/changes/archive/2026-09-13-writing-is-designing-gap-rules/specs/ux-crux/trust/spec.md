## ADDED Requirements

### Requirement: Transparent identity and demographic data collection
When a reviewed form collects gender, sex, or other identity/demographic data, the trust skill SHALL check that gender identity, sex assigned at birth, and pronouns are treated as distinct fields when more than one is actually needed (rather than one forced binary choice), that each such field is optional or offers a free-text alternative where possible, and that the form states, in context, why the data is collected and how it affects the product (for example billing eligibility, a biometric calculation, or social display). A binary-only field with no stated purpose SHALL be flagged, distinct from the general minimum-data-collection check, which does not by itself evaluate transparency of purpose for identity/demographic fields specifically.

#### Scenario: Unexplained binary sex/gender field
- **WHEN** a reviewed profile form requires a binary "Male/Female" choice with no indication of whether it drives billing, a biometric calculation, pronoun display, or another specific purpose
- **THEN** the trust skill flags the field for lacking transparency about why the data is needed and how it is used

#### Scenario: Purpose-explained, separated identity fields
- **WHEN** a reviewed form separates sex assigned at birth (with inline text explaining a billing/legal requirement), gender identity, and pronouns into distinct, optional or free-text fields
- **THEN** the trust skill does not flag this requirement

#### Scenario: Identity data purpose not shown in evidence
- **WHEN** the evidence provided includes an identity/demographic field but no indication of why it is collected or how it is used
- **THEN** the trust skill reports the finding as `NOT ASSESSABLE` rather than assuming the field is justified or unjustified

## ADDED Requirements

### Requirement: Sensitive-domain category labels avoid clinical or embarrassing terminology
The psychology skill SHALL flag a form or selection control in a sensitive domain (health conditions, financial hardship, body/clothing sizing, or a comparably self-image-sensitive category) that uses a clinical, intimidating, or stigmatizing label where a neutral or familiar alternative would convey the same option without compromising clinical accuracy or informed choice. Distinct from `product`'s `C15` (disability/human-trait language dignity) and `trust`'s `O13` (gender/sex/identity field structure): this requirement addresses anxiety-driven hesitation or mis-selection caused by a category label itself, not identity dignity or field structure.

#### Scenario: A sensitive form uses an intimidating or stigmatizing label
- **WHEN** the reviewed evidence shows a form in a sensitive domain (health, financial hardship, sizing, or similar) using a clinical or stigmatizing label likely to cause user hesitation, embarrassment, or mis-selection, and a neutral or familiar alternative exists that would not compromise accuracy
- **THEN** the psychology skill flags the finding and recommends a neutral or familiar relabeling that preserves the option's actual meaning and any clinically or legally required precision

#### Scenario: A sensitive form already uses neutral, familiar labeling
- **WHEN** the reviewed evidence shows a sensitive-domain form using neutral or familiar labels that do not risk embarrassment or mis-selection, while still remaining accurate
- **THEN** the psychology skill does not flag this requirement

#### Scenario: Clinical precision is legally or medically required
- **WHEN** the reviewed evidence shows a clinical or precise term is retained because a neutral alternative would introduce a real risk of misdiagnosis, legal noncompliance, or informed-consent failure
- **THEN** the psychology skill does not flag this requirement, and notes the clinical-precision exception rather than recommending relabeling

### Requirement: Guilt-bridging reward framing requires genuine, truthfully represented effort
The psychology skill SHALL flag copy that frames a purchase, upgrade, or leisure feature as an "earned reward" when the user's underlying effort is fabricated, exaggerated, or absent, or when the framing manufactures guilt that was not otherwise present in order to make the reward frame necessary. A truthful earned-reward frame — one that accurately reflects real, already-demonstrated user effort — is permitted only after passing `ethics.md`'s four-gate test (evidence, applicability, user benefit, agency & truthfulness), the same standing test already applied to every other mechanism in `references/behavioral-economics.md`.

#### Scenario: Reward framing exaggerates or fabricates the user's effort
- **WHEN** the reviewed evidence shows upgrade, purchase, or leisure copy framing the action as a reward for effort the user has not actually demonstrated, or inflating minor effort into a significant achievement to justify the spend
- **THEN** the psychology skill flags the finding as a deceptive framing pattern, distinct from a legitimate earned-reward frame

#### Scenario: Reward framing accurately reflects genuine prior effort
- **WHEN** the reviewed evidence shows copy that truthfully references effort the user has actually and verifiably put in (for example, completing a demanding task or a sustained streak) before offering a reward-framed upgrade or break, and the frame passes the four-gate test in `ethics.md`
- **THEN** the psychology skill does not flag this requirement

#### Scenario: No effort claim is made
- **WHEN** the reviewed evidence shows upgrade or purchase copy that makes no claim about the user's effort at all
- **THEN** the psychology skill does not flag this requirement

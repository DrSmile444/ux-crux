## ADDED Requirements

### Requirement: Cookie prompt first-layer choices [O20]
The trust skill SHALL check that a cookie-permission prompt shows Accept all, a reject or strictly-necessary-only option, and Manage settings in its first layer, with distinct plain labels; a close button means strictly necessary only, and no button is styled to steer toward Accept all. This requirement is distinct from `product`'s C13, which concerns guilt-inducing wording on a decline control, not which choices the first layer offers or how the buttons are styled. It SHALL NOT apply to sites with no cookies beyond strictly necessary ones, and the legal requirement in a given region SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Tankala, "Cookie Permissions 101" (2023).

#### Scenario: Failing case
- **WHEN** a cookie banner offers Accept all and a Learn more link, and the reject option is on a second page
- **THEN** the trust skill flags the missing first-layer choice

#### Scenario: Passing case
- **WHEN** a cookie banner shows Accept all, Necessary only and Manage settings with equal weight
- **THEN** the trust skill does not flag this requirement

### Requirement: Policy pages open with a plain summary, dates and section navigation [O21]
The trust skill SHALL check that a privacy, terms or other policy page opens with a plain-language summary, shows the effective and last-updated dates with a summary of recent changes, offers a working table of contents with links to sections, and uses readable formatting (sentence case, normal text size, short paragraphs, expandable sections). This requirement is distinct from CT08, which requires footer links to return and shipping information, not the content and structure of policy pages. It SHALL NOT apply to short single-purpose notices, and the full text of the policy SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Fessenden, "Privacy Policies and Terms of Use: 5 Common Mistakes" (2020).

#### Scenario: Failing case
- **WHEN** a terms page is one block of small all-caps text with no summary, date or section links
- **THEN** the trust skill flags the policy page

#### Scenario: Passing case
- **WHEN** the page starts with a plain summary and the update date, followed by a linked table of contents
- **THEN** the trust skill does not flag this requirement

### Requirement: Policy links in the footer and next to related settings [O22]
The trust skill SHALL check that links to the privacy policy and terms sit in a footer present on every page, including signed-in states (or in Settings where no footer exists), and the relevant settings screen links to the specific policy section it concerns. This requirement is distinct from CT08, which requires footer links to return and shipping information, not links to privacy and terms pages, and from O21, which concerns the policy page itself. It SHALL NOT apply to screens that are deliberately minimal during a short transaction, and policy links on pages the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Fessenden, "Privacy Policies and Terms of Use: 5 Common Mistakes" (2020).

#### Scenario: Failing case
- **WHEN** a signed-in web app has no footer and no policy link in Settings, so a user resorts to a search engine
- **THEN** the trust skill flags the policy link placement

#### Scenario: Passing case
- **WHEN** Notification settings show a summary of the policy and link to the matching section
- **THEN** the trust skill does not flag this requirement

### Requirement: Nothing is added to the order without the user choosing it [CT09]
The trust skill SHALL check that no item, upgrade, extended term or subscription is added to the cart or order, and no side-effect opt-in such as a follow or subscribe checkbox is prechecked, unless the user chose it. This requirement is distinct from `psychology`'s PB02, which requires the consequences of a default to be visible, not that unrequested additions are absent. It SHALL NOT apply to items required by law or by the product, and additions the user chose in an earlier step, and the user intent behind an addition that the evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Chan, "Sneaking: The Deceptive UX Pattern You Never Saw Coming" (2024).

#### Scenario: Failing case
- **WHEN** a one-year domain purchase opens a cart that already lists two years of registration
- **THEN** the trust skill flags the unrequested addition

#### Scenario: Passing case
- **WHEN** the cart lists only the one-year registration the user picked, and the follow-company checkbox is unchecked
- **THEN** the trust skill does not flag this requirement

### Requirement: Service prices before a quote form [CT10]
The trust skill SHALL check that a site selling a service states the price or a price range, with what is included and which fees apply, before the visitor must write to the business or fill in a long quote form; when an exact price needs details, a range or a short quote path is offered, and browsing is not gated behind an address entry (account gates follow O11). This requirement is distinct from CT01, which concerns when a mandatory fee is disclosed inside a priced flow, and GW01, which lists buried prices among general goodwill depletors, not whether a service shows any price before contact. It SHALL NOT apply to services whose price cannot be stated without an individual assessment, and price logic that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Aurora Harley, "Trustworthiness in Web Design: 4 Credibility Factors" (2016).

#### Scenario: Failing case
- **WHEN** a cleaning service page says "Contact us for rates" and asks for an address before it shows any content
- **THEN** the trust skill flags the missing price information and the early gate

#### Scenario: Passing case
- **WHEN** the page shows a price range with included items and extra fees, and a short quote form for an exact price
- **THEN** the trust skill does not flag this requirement

### Requirement: Transactional message subject, headline, sender and opening text [PR03]
The trust skill SHALL check that the subject line of a transactional email and the headline of a push or SMS notification state the specific event of the customer's own transaction in the first words (for example that order 1234 shipped or that a refund was issued); the sender is a recognisable brand name with its function; a push headline does not repeat the app name that the system already shows; and the email's opening text gives the information the recipient needs, not boilerplate such as a trouble-viewing link. Vague subjects such as "Important information" SHALL be flagged. This requirement is distinct from O10, which forbids marketing notifications posing as urgent ones, and PR01, which requires a reassurance message after the user leaves the screen, not the wording of its subject and headline. It SHALL NOT apply to marketing messages and messages that are not about the recipient's own transaction, and inbox or lock-screen rendering that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Jakob Nielsen, "Transactional Email and Confirmation Messages" (2008); Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022); Nielsen Norman Group, Moran, "The State of Transactional Email" (2018).

#### Scenario: Failing case
- **WHEN** a shipping email has the subject "Confirmation of Account Activity", its preview text reads "Having trouble viewing this email?", and the push headline is only the brand name
- **THEN** the trust skill flags the vague subject, the boilerplate opening and the brand-name headline

#### Scenario: Passing case
- **WHEN** the email subject reads "Your order 1234 has shipped", its first lines give the delivery date, and the push headline reads "Rate your trip"
- **THEN** the trust skill does not flag this requirement

### Requirement: Transactional message content order [PR04]
The trust skill SHALL check that a transactional message identifies what the transaction covers (the items ordered or affected, not only an order number), then gives the status, date and next step or link the customer expects first, and places marketing after that information. This requirement is distinct from CT06, which keeps order tracking on the site's own order page, and PR03, which concerns the subject, headline and sender, not what the message body contains. It SHALL NOT apply to messages whose recipient needs only a status word, and marketing messages, and a message body that the reviewed evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Jakob Nielsen, "Transactional Email and Confirmation Messages" (2008); Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022).

#### Scenario: Failing case
- **WHEN** a pickup SMS reads "Order 123456789012 is ready" with no item names, and the shipping-delay email lists no items or new date
- **THEN** the trust skill flags the order number as the only identifier and the missing date

#### Scenario: Passing case
- **WHEN** the SMS names the items, the pickup time and a link to the order page
- **THEN** the trust skill does not flag this requirement

### Requirement: About Us opens with a plain summary [GW04]
The trust skill SHALL check that the About Us entry is reachable from the footer and states in plain words what the organization does and what sets it apart in a short summary at the top, with the main facts on the page itself and not only behind links; its section labels are explicit (About Company, Leadership, Careers) and not jargon, and the summary uses concrete facts instead of hollow superlatives. This requirement is distinct from `product`'s C31, which concerns the tagline beside the logo, not the About page summary. It SHALL NOT apply to a product-only app with no organization to describe, and the real credibility effect on a given audience the evidence does not show SHALL be reported `NOT ASSESSABLE`. Sources: Nielsen Norman Group, Kaley and Nielsen, "'About Us' Information on Websites" (2019); Nielsen Norman Group, Loranger, "Great Summaries on 'About Us' Pages Engage Users and Build Trust" (2015).

#### Scenario: Failing case
- **WHEN** the reviewed evidence shows an About page with a tagline that fits thousands of companies and a grid of links, and no sentence on what the company does
- **THEN** the trust skill flags the About page without a plain statement of what the organization does

#### Scenario: Passing case
- **WHEN** the reviewed evidence shows an About page that opens with two short paragraphs on what the company does, its main facts and its difference, with links to detail below
- **THEN** the trust skill does not flag this requirement

### Requirement: Contact page channels [GW05]
The trust skill SHALL check that a Contact page offers a phone number and an email address, with the address or other channels where relevant, and not only a form or a chat widget; multiple numbers are grouped under clear labels, and the page states opening hours and the expected reply time. This requirement is distinct from `usability`'s N13R, which concerns where the Contact link sits in navigation, and GW01, which flags hidden support details in general, not which contact channels the page offers. It SHALL NOT apply to services that are only available inside a signed-in account, and the accuracy of the listed hours and numbers SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Kaley, "'Contact Us' Page Guidelines" (2019).

#### Scenario: Failing case
- **WHEN** a Contact page shows only a message form with no phone number or email
- **THEN** the trust skill flags the missing channels

#### Scenario: Passing case
- **WHEN** a Contact page lists a phone number, an email address and local offices with hours
- **THEN** the trust skill does not flag this requirement

### Requirement: Channel choice for transactional notifications [I07]
The trust skill SHALL check that SMS and push are used for time-sensitive or action-needed transactional events (a delivery today, a payment approval), less urgent details go by email, SMS does not carry promotions, and every SMS includes a way to opt out. This requirement is distinct from I02, which chooses between in-app alerts, banners and in-context messages, and O09, which requires in-app management of notification categories, not which events go to which outside channel. It SHALL NOT apply to events the user chose to receive by a given channel, and the channel of a message when the reviewed evidence does not show it SHALL be reported `NOT ASSESSABLE`. Source: Nielsen Norman Group, Feifei Liu, "Transactional Notifications: Their Characteristics and When to Use Them" (2022).

#### Scenario: Failing case
- **WHEN** an order flow sends a promotional SMS with no opt-out line and sends a non-urgent receipt by push
- **THEN** the trust skill flags the promotional SMS, the missing opt-out and the channel choice

#### Scenario: Passing case
- **WHEN** the flow texts only the same-day delivery notice with "Text STOP to unsubscribe" and emails the receipt
- **THEN** the trust skill does not flag this requirement

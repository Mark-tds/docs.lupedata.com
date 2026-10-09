---
title: Terms of service
description: The terms that apply to the Lupe platform and the First Party Data Infrastructure TDS sets up for you.
icon: file
eyebrow: Legal
---

**Lupe Platform – Terms of Service and Data Processing Agreement, Part 1**\
Version: October 2026 · Last updated: 9 October 2026

:::info Part 2
The [Data processing agreement](page:data-processing-agreement) forms Part 2 of these Terms.
:::

## 1. Introduction and parties

These Terms of Service ("Terms") form a legally binding agreement between you ("Client", "User" or "You") and **Transparent Digital Services Limited**, a company registered in England and Wales under company number 10377347, whose registered office is at 303 The Pill Box, 115 Coventry Road, London, England, E2 6GH ("TDS", "We", "Us" or "Our"). By accessing or using Lupe, you agree to be bound by these Terms.

Lupe is a Software-as-a-Service (SaaS) product wholly owned and operated by TDS. It provides a central dashboard to monitor, audit and manage the configuration of a client's digital marketing and analytics environment. Lupe is a reporting and oversight tool: it reads statistical, aggregated, diagnostic and configuration information, and it does not itself transport, receive or store the personal data that flows through a client's data pipelines.

TDS separately provides services to set up and support the Client's First Party Data Infrastructure, a distinct system built on Google Tag Manager and Stape that routes first-party data, and hashes personal data before it is sent to advertising and analytics platforms. These platforms are owned and controlled entirely by the Client. Lupe and the First Party Data Infrastructure are two separate systems. These Terms describe both, and the boundary between them.

## 2. Description of services

### 2.1 The Lupe platform

Lupe is a monitoring, auditing and management dashboard. It reads statistical and non-personally identifiable information from connected systems to give the Client visibility of the health and configuration of their data infrastructure. In particular:

- Lupe reads statistical and diagnostic information from server-side Google Tag Manager (GTM) containers hosted on Stape, such as event counts, request volumes and error rates, to surface issues in the dashboard. Lupe does not route or store the data that passes through these containers.
- Lupe reads consent-state and status information from Consent Management Platform (CMP) APIs to identify problems with consent signals.
- Lupe reads aggregated, non-personally identifiable statistics from sources such as Meta, TikTok, Google Analytics 4 (GA4) and Shopify (for example event counts, conversion counts or revenue totals) for reporting purposes.
- The Client enters configuration information into Lupe, such as domain names, account IDs, dataset and pixel IDs, and GTM container IDs. This is metadata only and does not give Lupe access to the personal data that flows through the infrastructure.

### 2.2 The First Party Data Infrastructure

The First Party Data Infrastructure is a separate service that TDS sets up for the Client on written request, using Google Tag Manager and Stape accounts that are owned and controlled by the Client. It receives personal data from the Client's web assets, hashes (pseudonymises) identifiers such as email addresses and phone numbers, and transmits the data to the Client's chosen advertising and analytics platforms. The Client owns the data that passes through it.

TDS sets up, tests and maintains the infrastructure through delegated partner or collaborator access granted by the Client, as described in [Annex D](page:data-processing-agreement#annex-d-platform-access-minimum-necessary-access). The Client keeps ownership and control of every platform and can remove TDS's access at any time.

### 2.3 Separation of Lupe and the First Party Data Infrastructure

Lupe is not part of the First Party Data Infrastructure and is not in the path of its data. Lupe does not access, receive, store or process personal data (including hashed data or pre-hash data) transported through the infrastructure. A failure, suspension or termination of Lupe does not affect the operation of the infrastructure.

## 3. Term, billing and cancellation

- **Minimum term:** on subscribing to Lupe, the Client agrees to a minimum initial term of twelve (12) months.
- **Rolling contract:** after the initial term, the agreement continues on a rolling 30-day basis.
- **Cancellation:** after the initial term, the Client may cancel at any time with 30 days' written notice or through the Lupe portal.
- **Billing:** subscriptions are billed through Stripe, which processes payments, upgrades, downgrades and account termination.

## 4. Data compliance, liability and disclaimer

TDS provides the technical framework that supports data routing and consent management. The Client keeps full ownership and control of its data, advertising and analytics platforms, and may change them at any time.

- **Lupe alerts:** Lupe monitors connected assets and raises alerts when it detects configuration or consent problems. Alerts support the Client's compliance efforts; they are not legal advice and do not transfer responsibility for compliance to TDS.
- **Client responsibility:** the Client is responsible for ensuring that its data collection, consent mechanisms and processing comply with applicable law, including the UK GDPR, the EU GDPR, the Privacy and Electronic Communications Regulations (PECR), the ePrivacy Directive and the CCPA where they apply.
- **Client modifications:** TDS is not liable for consent failures, data breaches or legal claims caused by changes the Client (or a third party acting for the Client) makes to its website, theme, CMP, GTM containers or connected platforms without TDS's involvement.
- **Exclusion of indirect loss:** to the maximum extent permitted by law, neither party is liable for indirect, incidental, special or consequential loss, or for loss of profits, revenue or goodwill.
- **Liability cap:** to the maximum extent permitted by law, each party's total aggregate liability arising out of or in connection with these Terms and the DPA, whether in contract, tort (including negligence) or otherwise, will not exceed the total fees paid by the Client to TDS in the twelve (12) months before the event giving rise to the claim.
- **Liability that cannot be limited:** nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited or excluded by law.

## 5. Third-party platforms

By default, the First Party Data Infrastructure uses Stape.io for server-side GTM hosting and CookieYes as the Consent Management Platform; other Google-certified CMPs can be used at the Client's request. These accounts, like the Client's Shopify, Meta, TikTok and Google accounts, are held by the Client under the Client's own terms with each provider. TDS is not responsible for the availability, performance or legal compliance of these third-party platforms.

## 6. Governing law and precedence

These Terms and the DPA are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction. If these Terms conflict with the DPA on any matter concerning personal data, the DPA prevails.

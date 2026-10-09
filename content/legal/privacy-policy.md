---
title: Privacy policy
description: How Lupe Data, a Transparent Digital Services company, handles personal data.
icon: lock
eyebrow: Legal
---

**Privacy Policy for Lupe Data, a Transparent Digital Services company**\
**Effective date:** 6 June 2026

## 1. Introduction

Lupe (operating under lupedata.com, owned and managed by Transparent Digital Services) is committed to supporting businesses and creators in setting up first-party data systems. Lupe provides a specialised Software-as-a-Service (SaaS) platform which presents a dashboard of analytical and advertising tools, and their function with server-side connections. Our mission is to assist businesses in establishing robust, compliant, and privacy-first first-party data infrastructures.

## 2. Roles and scope of this privacy policy

To understand how data is handled, it is essential to distinguish between the two legal capacities under which Lupe operates:

- **Lupe as a Data Controller:** When you register an account, purchase a subscription, or interact directly with our marketing website, Lupe acts as a Data Controller for the business administration, billing, and system telemetry data we collect directly from you.
- **Lupe as a Data Processor:** When our customers use the Lupe software platform to monitor, manage, audit, and debug their own first-party data structures (such as tracking scripts, Google Tag Manager server-side containers, and conversion pipelines), Lupe acts as a Data Processor. In this role, we handle data strictly under the instructions of our customers, who remain the Data Controllers.

## 3. Information we collect as a Data Controller

We collect specific personal and professional identifiers to deliver our services, maintain security, and manage billing relationships:

- **Account and registration information:** First name, last name, business email addresses, professional telephone numbers, tax IDs, and physical business addresses (broken down into line items for standardised platform compatibility).
- **Authentication and security data:** Passwords created at signup, multi-factor authentication (2FA) setup state, and system telemetry logs used to detect unusual login activity (e.g., triggering automated re-authentication checks when a user logs in from a new territory or unrecognised IP address).
- **Billing and subscriptions:** Financial metadata processed through our payment provider, Stripe. This includes metadata verifying subscription tiers (Bronze, Silver, Gold, or Diamond), last successful billing dates, card failure flags, and automated webhook event sync logs.
- **Technical infrastructure data:** Information required to manage user permissions, including agency/manager workspace tags used to partition client list visibility for "Enterprise Viewers."

## 4. Information processed on behalf of our clients (Data Processor)

When clients implement a server-side tracking architecture, such as connecting Lupe to server-side Google Tag Manager (GTM) or auditing API pipelines (like Meta's Conversions API (CAPI) and TikTok's Events API), our software facilitates the oversight and alerting of data flowing through their controlled infrastructure. This data includes:

- **Customer and conversion metadata:** Standardised data layer variables including hashed customer emails, telephone numbers, names, locations (city, state, zip code, country), external IDs, browser IDs, and click IDs.
- **System diagnostic logs:** API error responses, transmission volumes, tracking discrepancies, and "silent failure" alert metrics (e.g., flags indicating when conversion signals drop unexpectedly for more than 24 hours).

## 5. Our technology stack and data security

Lupe employs advanced technical mechanisms to safeguard system integrity and prevent unauthorised data exposures:

| Component | Provider / protocol | Primary purpose and security role |
| --- | --- | --- |
| Application framework | Next.js | Delivers secure, server-side rendered dashboard environments and restricts client-side data exposure. |
| Database architecture | Supabase | Acts as our primary relational data store, enforcing strict Row-Level Security (RLS) to keep account data completely isolated. |
| Payment and billing infrastructure | Stripe | Processes all monetary transactions directly as a PCI-compliant handler. Financial records are cached via webhooks to prevent live load API dependency. |
| Source code management | GitHub | Hosts all proprietary code deployment pipelines under private repository permissions with automated vulnerability scanning. |

We store lightweight billing snapshots natively to optimise platform performance while preventing unnecessary third-party live API calls. Our system logs user interactions with client-side Consent Management Platforms (CMPs) to establish auditable logs that future-proof our clients against legal changes.

## 6. Data storage and international transfers

### 6.1 Cross-border data routing

Because Lupe serves corporate entities across multiple international territories, customers may transfer, route, and process data in countries outside of their residency. Lupe ensures that its own infrastructure pipelines utilise recognised legal instruments, such as European Commission Standard Contractual Clauses (SCCs), to govern data transfers between Lupe's internal database architecture and its underlying data subprocessors.

### 6.2 Client jurisdictional and compliance responsibility

Lupe acts strictly as a diagnostic software and dashboard alerting layer for data pipelines managed within the Client's independent cloud, container, and advertising systems. The Client acknowledges and agrees that the legal requirements, privacy frameworks (including but not limited to GDPR, CCPA, and CPRA), and data compliance obligations vary significantly across geographic jurisdictions.

### 6.3 Independent client configuration and modification

The Client retains sole administrative control and ownership over its respective advertising platforms, tracking assets, container variables, consent management platforms (CMPs), and regional digital properties. Because the Client may autonomously implement, amend, remove, or modify ad accounts, pixels, datasets, or tracking destinations across various territories without Lupe's direct intervention, knowledge, or prior written consent, the Client assumes full, exclusive responsibility for ensuring that all data captured, routed, or handled through these setups adheres to their local legal frameworks.

### 6.4 Compliance warranty and limitation of liability

Lupe does not undertake any ownership over a client's digital assets, whether web, analytics, or marketing tools. The Lupe dashboard acts as a supporting warning system to acknowledge when data or consent issues arise in a client's infrastructure. Due to the nature of the client retaining full control and ownership of their assets, and the right to make autonomous changes, Lupe expressly disclaims all liability regarding the Client's adherence to territorial data protection laws. The Client warrants that it has established valid consent mechanisms, adequate privacy disclosures fitting their usage requirements, and proper authorisation from all local data controllers or third-party asset owners before routing information through the Lupe platform. Under no circumstances shall Lupe or Transparent Digital Services be held liable for ad account failures, website downtime, data pipeline failures, ad account suspensions, regulatory audits, fines, or statutory violations resulting from unannounced Client frontend layout shifts, ad platform migrations, or territorial compliance breaches.

## 7. Data retention

We store personal data collected as a controller only for as long as necessary to fulfil business subscriptions, preserve historical diagnostic data requested by account leads, enforce platform security parameters, or satisfy mandatory statutory accounting laws. When an account is officially archived or cancelled, data is systematically scrubbed or anonymised in compliance with our internal data handling protocols.

## 8. Privacy rights (GDPR / CCPA / CPRA)

Depending on your geographic location, you possess explicit statutory rights regarding your personal information, which you can exercise at any time:

- **The right to access:** Request a complete, clear copy of the data Lupe holds regarding your account profile.
- **The right to rectification:** Correct inaccurate profile inputs, non-standard telephone formats, or outdated address records via your settings panel.
- **The right to erasure ("right to be forgotten"):** Demand the deletion of your account records, provided they are not constrained by active billing terms or statutory compliance overrides.
- **The right to restrict or object to processing:** Halt or limit algorithmic diagnostic activities or direct communications.
- **The right to data portability:** Obtain a structured, standardised export format of your application data.

## 9. Changes to this privacy policy

Lupe reserves the right to modify this privacy policy to reflect platform updates, newly incorporated software versions (such as external API integrations), or changes in international privacy frameworks. We will notify active administrators of significant structural updates via direct system dashboards or registered email communications.

## 10. Contact information

For inquiries, structural privacy reviews, or to exercise your statutory rights, contact our privacy compliance officer at:

**Transparent Digital Services**\
Email: [contact@transparentdigitalservices.com](mailto:contact@transparentdigitalservices.com)

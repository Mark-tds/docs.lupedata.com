---
title: Data processing agreement
description: How TDS processes personal data on your behalf under Article 28 of the UK GDPR, with sub-processors, retention, security and platform access.
icon: shield
eyebrow: Legal
---

**Lupe Platform – Terms of Service and Data Processing Agreement, Part 2**\
Version: October 2026 · Last updated: 9 October 2026

This Data Processing Agreement ("DPA") forms part of the [Terms](page:terms-of-service) between TDS and the Client. It sets out the terms on which TDS processes personal data on the Client's behalf, as required by Article 28 of the UK GDPR (and the EU GDPR where it applies).

## 1. Scope and roles

- **Client as Controller:** the Client determines the purposes and means of processing personal data in its websites, advertising platforms, analytics platforms and First Party Data Infrastructure.
- **TDS as Processor:** TDS acts as a processor when it sets up, tests and maintains the First Party Data Infrastructure and the Client's connected platforms through the access described in Annex D.
- **Lupe dashboard:** Lupe reads only non-personal statistical, aggregated, diagnostic and configuration information. TDS does not process the Client's end-user personal data through Lupe.
- **TDS as Controller of account data:** TDS is an independent controller of the business contact details of the Client's staff who use Lupe or correspond with TDS (for example names, work email addresses and login records), and of billing records. TDS handles this data under its own [privacy notice](page:privacy-policy) and applicable law.

The subject matter, nature, purpose and duration of the processing, and the types of personal data and data subjects, are set out in Annex A.

## 2. TDS's obligations

When acting as processor, TDS will:

1. process personal data only on the Client's documented instructions, including these Terms and the Client's written requests, unless required to do otherwise by law (in which case TDS will tell the Client first, unless the law prohibits it);
2. tell the Client promptly if it believes an instruction infringes data protection law;
3. ensure that everyone it authorises to process personal data is bound by confidentiality;
4. implement the technical and organisational security measures in Annex C;
5. engage sub-processors only in accordance with section 3;
6. assist the Client, taking into account the nature of the processing, in responding to data subject requests (section 7);
7. assist the Client with its obligations on security, breach notification, data protection impact assessments and prior consultation with the regulator, taking into account the information available to TDS;
8. delete or return personal data at the end of the services in accordance with section 5;
9. make available the information needed to demonstrate compliance with this DPA and allow audits in accordance with section 8.

TDS does not use the Client's data for its own purposes, including marketing or training its own models or algorithms.

## 3. Sub-processors

The Client gives general written authorisation for TDS to use the sub-processors listed in Annex B. TDS will:

- give the Client at least 30 days' written notice before adding or replacing a sub-processor, so that the Client can object on reasonable data protection grounds. If the objection cannot be resolved, the Client may terminate the affected services without penalty;
- bind each sub-processor by written terms that offer at least the same level of protection as this DPA;
- remain responsible to the Client for its sub-processors' performance of those obligations.

**Client-owned platforms are not TDS sub-processors.** Stape, the Client's CMP (such as CookieYes), Shopify, Meta, TikTok and Google (GTM and GA4) are accounts held and contracted by the Client directly. They are the Client's own processors or independent controllers under the Client's agreements with them, and are listed in Annex B for transparency only.

## 4. Data hosting locations and international transfers

- **Lupe:** the Lupe platform and its data (configuration metadata, aggregated statistics, user accounts and logs) are hosted in the United Kingdom, in the London regions of DigitalOcean and Google Cloud.
- **First Party Data Infrastructure:** the server-side GTM container is hosted in the Client's own Stape account, in the region the Client selects. TDS recommends a UK or EU region.
- **Transfers:** TDS will not transfer personal data it processes for the Client outside the UK or EEA unless appropriate safeguards are in place, such as an adequacy decision or UK adequacy regulations, the UK International Data Transfer Agreement, or the UK Addendum to the EU Standard Contractual Clauses.
- Data sent to advertising and analytics platforms (such as Meta, TikTok and Google) is sent on the Client's instructions under the Client's own agreements with those platforms, which govern where those platforms store it.

## 5. Retention and deletion

| Data | Where it is held | Retention |
| --- | --- | --- |
| Personal data passing through the First Party Data Infrastructure | Client-owned Stape, GTM and platform accounts | Not stored by TDS. Retention is set by the Client and its platforms. |
| Test event details seen during setup and testing | Viewed in the Client's Meta Events Manager or TikTok Events Manager | Not downloaded or kept by TDS. |
| Lupe configuration metadata (domains, account, dataset, pixel and container IDs) | Lupe (UK) | For the life of the subscription; deleted or returned within 30 days of termination. |
| Aggregated, non-personal statistics | Lupe (UK) | For the life of the subscription; deleted within 30 days of termination. |
| API access tokens (such as Meta Conversions API and TikTok Events API tokens) | The Client's server-side GTM container | Held in the Client's own container. TDS keeps no copies after setup. The Client can revoke them at any time. |
| Lupe user accounts for Client staff | Lupe (UK) | Deleted within 30 days of termination. |
| System and access logs | Lupe (UK) | Rolling 90 days. |
| Invoices and billing records | Stripe and TDS accounts | Six years, as required by UK tax law. |

On termination, TDS will also remove its own partner and collaborator access from the Client's platforms, and confirm in writing that deletion is complete on request. Where the law requires TDS to keep any data longer, TDS will keep it confidential and process it only for that purpose.

## 6. Personal data breach notification

If TDS becomes aware of a personal data breach affecting personal data it processes for the Client, TDS will:

1. notify the Client without undue delay, and in any event within **48 hours** of becoming aware of it, by email to the Client's nominated contact;
2. provide, as far as it is available at the time: a description of the breach, the categories and approximate number of data subjects and records affected, the likely consequences, the measures taken or proposed to address it and reduce its effects, and a contact point for further information;
3. provide further information in stages as it becomes available, without undue delay;
4. take reasonable steps to contain and investigate the breach, and cooperate with the Client so that the Client can meet its obligation to notify the Information Commissioner's Office (or another supervisory authority) within 72 hours where required;
5. not notify regulators or data subjects on the Client's behalf unless the Client instructs it to or the law requires it;
6. keep a record of the breach and the actions taken.

TDS's breach contact is Mark at [mark@transparentdigitalservices.com](mailto:mark@transparentdigitalservices.com), 07540 388706. The Client will provide TDS with a nominated contact for breach notices.

## 7. Data subject rights

Because the Client's end-user data is held in the Client's own platforms, the Client will normally handle data subject requests directly. If TDS receives a request relating to the Client's data, it will pass it to the Client without undue delay and will not respond except on the Client's instructions. TDS will provide reasonable assistance, for example locating data flows in the First Party Data Infrastructure.

## 8. Audits and information

TDS will make available the information reasonably needed to demonstrate compliance with this DPA, including completing reasonable security questionnaires. The Client (or an independent auditor bound by confidentiality) may audit TDS's compliance no more than once in any 12-month period, on at least 30 days' written notice, during business hours, and at the Client's cost, unless the audit follows a personal data breach caused by TDS or is required by a supervisory authority.

## 9. Consent responsibilities

- The Client is responsible for obtaining valid consent through its chosen CMP, for the content of its cookie banner and privacy notice, and for deciding which platforms receive data.
- TDS configures the infrastructure so that tags and events respect the consent signals provided by the Client's CMP, and Lupe raises alerts when it detects consent signals failing.
- TDS is not responsible for processing that breaches data protection law because the Client changed its website, theme, CMP, GTM containers or platforms independently of TDS.

## 10. Duration

This DPA applies for as long as TDS processes personal data on the Client's behalf, and its obligations on deletion, confidentiality and breach notification continue until all such data has been deleted or returned.

## Annex A – Details of processing

| | |
| --- | --- |
| Subject matter | Setup, testing and maintenance of the Client's First Party Data Infrastructure and connected platform settings. |
| Duration | For the term of the services, plus the deletion period in section 5. |
| Nature of processing | Configuring server-side tags and connections; viewing test events and diagnostic information in the Client's platforms; routing and hashing of data within the Client's own server-side container (automated, in Client-owned infrastructure). |
| Purpose | To deliver accurate, consent-aware conversion and analytics tracking for the Client. |
| Data subjects | Visitors to and customers of the Client's websites and online stores. |
| Types of personal data | Online identifiers (IP address, user agent, cookie and click identifiers); event data (pages viewed, products, order values); consent state; contact details used for matching (email address, phone number, name, postal address), which are hashed before being sent to advertising platforms. |
| Special category data | None. The Client will not configure the infrastructure to send special category data. |

## Annex B – Sub-processors and client-owned platforms

### TDS sub-processors

| Provider | Service | Location | Client end-user personal data? |
| --- | --- | --- | --- |
| DigitalOcean | Hosting for the Lupe platform | London, UK | No – configuration, aggregated statistics, Client staff accounts and logs |
| Google Cloud | Hosting and infrastructure for the Lupe platform | London, UK | No – configuration, aggregated statistics, Client staff accounts and logs |
| Stripe | Subscription billing and payments | United States | No – Client billing contact and payment details (TDS as controller) |

### Client-owned platforms (not TDS sub-processors)

| Platform | Role | Contracted by |
| --- | --- | --- |
| Stape | Server-side GTM hosting | Client |
| CookieYes or other CMP | Consent management | Client |
| Shopify | Ecommerce platform | Client |
| Google (GTM, GA4) | Tag management and analytics | Client |
| Meta | Advertising (Conversions API) | Client |
| TikTok | Advertising (Events API) | Client |

## Annex C – Security measures

- **Least-privilege access:** TDS asks only for the specific permissions listed in Annex D, through each platform's partner or collaborator features. TDS never asks for passwords or to be added as store staff.
- **Client control:** the Client can see and remove TDS's access at any time from each platform.
- **Authentication:** two-factor authentication is required on Lupe accounts and on TDS staff accounts used to access Client platforms.
- **Hashing:** contact details such as email addresses and phone numbers are hashed before being sent to advertising platforms.
- **Encryption:** data in transit is encrypted with TLS; Lupe data at rest is encrypted by its hosting providers.
- **Personnel:** access is limited to named TDS staff bound by confidentiality, and is reviewed when staff change roles or leave.
- **No data export:** TDS does not download or keep the Client's event data during setup or testing.
- **Logging:** access to Lupe is logged and logs are kept for 90 days.

## Annex D – Platform access (minimum necessary access)

The Client grants access from its own accounts. TDS's partner name on Meta and TikTok is "Lupe | TDS" (Meta business ID 300861977272185; TikTok Business Center ID 7398888478508941313). On Shopify, TDS requests access as "Lupe Data | TDS". Step-by-step guides: [Shopify](page:shopify-stape-setup), [Meta](page:meta-dataset-access), [TikTok](page:tiktok-pixel-access).

| Platform | Access granted | Purpose | No access to |
| --- | --- | --- | --- |
| Shopify (collaborator access) | Store settings: Manage settings; View customer events; Manage and add custom pixels. Apps and channels: Manage and install apps and channels. Online store: Themes – edit code. | Configure the cookie banner and Customer privacy settings for the Client's CMP; send checkout events to the server container; configure the Stape app (installed by the Client); enable the app embed and consent script; find old or conflicting tracking scripts. | Orders, products, customer lists, payments or staff accounts. |
| Meta (one dataset) | Partner with full control (Manage dataset) on the single dataset the Client assigns. | Connect the server container through the Conversions API; check advanced matching, event settings and deduplication; run test events. | Other datasets or pixels, ad accounts, customer or lead information, campaigns, budgets, Pages, Instagram, catalogues, billing and business settings. |
| TikTok (one pixel) | Partner with Edit pixels permission on the single pixel the Client shares. | Connect the server container through the Events API; check advanced matching, event settings and deduplication; run test events. | Other pixels, advertiser accounts, customer or lead information, campaigns, catalogues, shops, billing and Business Center settings. |
| Google Tag Manager | To be confirmed | Build, test and publish tags and the server-side container. | To be confirmed |
| Google Analytics 4 | To be confirmed | Configure data streams and Measurement Protocol, and read aggregated reports for Lupe. | To be confirmed |
| Stape | Access to the Client's Stape account or container, as granted by the Client. | Host and configure the server-side GTM container. | Stape billing, unless the Client chooses to share it. |

If TDS needs different access later, it will ask the Client to remove the existing access and approve a new request. TDS will remove its own access when the services end.

## Signing

This DPA is signed by Transparent Digital Services Limited and the Client as part of your Lupe agreement. Ask your onboarding manager for a copy to sign.

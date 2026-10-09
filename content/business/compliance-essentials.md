---
title: Compliance essentials
description: What your business is responsible for, what we take care of, and how the setup handles UK, EU and US rules.
icon: scale
eyebrow: Lupe for Business Owners
---

Your business decides why customer data is collected and where it goes, which makes it the **controller**. That responsibility stays with you whoever builds your tracking. A first-party setup makes it far easier to meet: one documented flow, consent enforced twice, and less data shared.

:::warning Technical guide, not legal advice
TDS are not lawyers. Legal advice, consent wording and responsibility for compliance sit with your business and your legal advisers.
:::

## Who takes care of what

| Your business | TDS and Lupe |
| --- | --- |
| Obtain valid consent through your chosen CMP | Configure tags and events to respect your CMP's consent signals |
| Write your cookie banner and privacy notice | Check consent signals reach the server and are correctly formatted |
| Decide which platforms receive data | Send data only to the platforms and accounts you choose |
| Keep your website, theme and apps compliant when you change them | Alert you in Lupe when consent signals fail or data stops flowing |
| Respond to customer data requests | Help locate data flows in your setup when you ask |

Full terms are in our [Terms of service](page:terms-of-service) and [Data processing agreement](page:data-processing-agreement).

## Your owner's checklist

- A consent banner where **reject is as easy as accept**, and choices are logged.
- A privacy notice that lists the platforms you share data with, and why.
- A "Do Not Sell or Share" link and Global Privacy Control support if you serve customers in US states that require them.
- A record of who handles customer data: your business, your processors, and the platforms.
- Someone who checks the setup after site changes. Lupe's alerts help here.

## One setup for UK, EU and US customers

The UK and EU use an opt-in model, where consent comes first. The US has no single federal privacy law; a growing number of state laws use an opt-out model, alongside federal rules and active pixel litigation. The setup can apply one global standard, or adjust by region.

| Topic | UK & EU | United States | How this setup handles it |
| --- | --- | --- | --- |
| Tracking before a choice | Prior opt-in consent for non-essential cookies and tags: UK PECR Reg. 6; EU ePrivacy Directive Art. 5(3) | No general prior-consent rule. State laws require notice and an opt-out of "sale", "sharing" and targeted advertising, e.g. California CCPA/CPRA, Virginia VCDPA, Colorado CPA | Banner blocks marketing tags until a choice; can run opt-in globally or by region |
| Quality of the choice | Freely given, specific, informed, and as easy to withdraw as to give: UK GDPR / EU GDPR Arts. 4(11), 7 | CPRA regulations ban "dark patterns" in consent and opt-out flows (Cal. Code Regs. tit. 11, §7004) | Reject is as easy as accept; every choice is logged |
| Browser opt-out signals | Right to object to direct marketing: GDPR Art. 21 | Global Privacy Control (GPC) must be honoured under CCPA regulations (§7025) and in several other states | CMP reads GPC and treats it as a no for marketing |
| Sharing with ad platforms | Controller and processor duties: GDPR Arts. 26, 28 | Service-provider contracts under CCPA; sending data to ad platforms for cross-context advertising counts as "sharing" | Contracts per party ([Who does what](page:business-roles)); server forwards only where the customer's choice allows |
| Minimisation & security | GDPR Arts. 5(1)(c), 25, 32 | CPRA minimisation and reasonable security (Cal. Civ. Code §1798.100(c), (e)); FTC Act s.5 | Server strips or hashes fields before anything leaves |
| Customer rights | Access, erasure, objection: GDPR Arts. 15–17, 21; UK Data Protection Act 2018 | Rights to know, delete, correct and opt out under CCPA and equivalent state laws | Preferences link on every page; deletions through each platform |
| Pixel-related claims | Covered by the consent rules above | Active litigation over pixels under the Video Privacy Protection Act (VPPA) and wiretap laws such as California's CIPA | Removes third-party pixels from the browser |
| Children | UK Age Appropriate Design Code; GDPR Art. 8 | COPPA (under 13s) | No targeting of children; we flag sites likely to attract under-18s |

US state laws are changing quickly, with new states taking effect each year. Tell us which regions your customers are in and we'll configure the banner to match.

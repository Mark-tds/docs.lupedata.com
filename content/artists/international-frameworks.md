---
title: Built for international audiences
sidebarTitle: International frameworks
description: One setup, designed around the strictest standard an artist's audience may fall under.
icon: globe
eyebrow: TDS × Lupe shared guide
---

Artists have fans everywhere. Whether handling data from South-East Asia, Australia and New Zealand or any other territory, this setup streamlines how data is handled. The UK and EU use an opt-in model, where consent comes first. The US has no single federal privacy law; a growing number of state laws use an opt-out model, alongside federal rules and active pixel litigation. This setup allows the banner to apply one global standard, or adjust by region if necessary.

## UK & EU compared with the United States

| Topic | UK & EU | United States | How this setup handles it |
| --- | --- | --- | --- |
| Tracking before a choice | Prior opt-in consent for non-essential cookies and tags: UK PECR Reg. 6; EU ePrivacy Directive Art. 5(3) | No general prior-consent rule. State laws require notice and an opt-out of "sale", "sharing" and targeted advertising, e.g. California CCPA/CPRA, Virginia VCDPA, Colorado CPA | Banner blocks marketing tags until a choice; can run opt-in globally or by region |
| Quality of the choice | Freely given, specific, informed, and as easy to withdraw as to give: UK GDPR / EU GDPR Arts. 4(11), 7 | CPRA regulations ban "dark patterns" in consent and opt-out flows (Cal. Code Regs. tit. 11, §7004) | Reject is as easy as accept; every choice is logged |
| Browser opt-out signals | Right to object to direct marketing: GDPR Art. 21 | Global Privacy Control (GPC) must be honoured under CCPA regulations (§7025) and in several other states, e.g. Colorado, Connecticut, Texas | CMP reads GPC and treats it as a no for marketing |
| Sharing with ad platforms | Controller, joint controller and processor duties: GDPR Arts. 26, 28 (see CJEU Fashion ID, C-40/17) | Service-provider and contractor contracts under CCPA; sending data to ad platforms for cross-context advertising counts as "sharing", with a "Do Not Sell or Share" link | Contracts per party ([Who does what](page:who-does-what)); server forwards only where the fan's choice allows |
| Minimisation & security | GDPR Arts. 5(1)(c), 25, 32 | CPRA minimisation and reasonable security (Cal. Civ. Code §1798.100(c), (e)); FTC Act s.5 on unfair or deceptive practices | Server strips or hashes fields before anything leaves |
| Fan rights | Access, erasure, objection: GDPR Arts. 15–17, 21; UK Data Protection Act 2018 | Rights to know, delete, correct and opt out under CCPA and equivalent state laws | Preferences link on every page; deletions through each platform |
| Pixel-related claims | Covered by the consent rules above | Active litigation over pixels under the Video Privacy Protection Act (VPPA) and wiretap laws such as California's CIPA | Removes third-party pixels from the browser |
| Young fans | UK Age Appropriate Design Code; GDPR Art. 8 | COPPA (under 13s) | No targeting of children; we flag sites likely to attract under-18s |

:::note Which regions apply?
US state laws are changing quickly, with new states taking effect each year. We'd welcome your team's view on which regions the artist's audience falls under. This page summarises a technical design. TDS are not lawyers, and this isn't legal advice.
:::

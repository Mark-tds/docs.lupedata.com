---
title: Who does what
description: Whoever owns artist.com and the ad accounts decides how the data is used.
icon: users
eyebrow: TDS × Lupe shared guide
---

In most setups that's the artist or the artist's company, which makes them the **controller**. Where a label also sets how the data is used, it becomes a **joint controller**.

## Roles in this flow

| Party | Role in this flow | Role | Paperwork (held by the parties) |
| --- | --- | --- | --- |
| Artist (or company) | Owns artist.com, data.artist.com and the ad accounts. Decides why data is collected. | Controller | Recording agreement terms on fan data; privacy notice; record of processing |
| Label | May run campaigns or have access to the ad accounts | Joint controller if it sets purposes; otherwise processor | Recording agreement terms; Art. 26 arrangement or Art. 28 DPA |
| TDS | Supports with GTM, server setup and infrastructure maintenance | Processor | Art. 28 DPA |
| Server hosting (e.g. Stape) | Runs data.artist.com. Stape is ISO/IEC 27001 certified and SOC 2 audited, with HIPAA, GDPR, CCPA and DORA compliance | Processor | Provider DPA; transfer terms if outside UK/EEA |
| CMP provider | Logs consent preferences and stores consent records | Processor | Provider DPA |
| Ad platforms | Receive consented events for measurement and optimisation | As set out in each platform's own data terms | Platform business terms, accepted in the ad account |

:::info The recording agreement comes first
Who acts as controller, and who owns the website, fan data and ad accounts, is usually set out in the artist's recording, licensing or management agreements. These are agreed between the artist, label and their legal advisers. TDS configures the setup to match whatever they set out, and doesn't draft or advise on them.
:::

:::tip Good to know
The ad platforms' role is the same whether data comes from a browser pixel or from the artist's server. This setup doesn't create a new relationship with any platform. It gives the artist control over what reaches them, recovers the losses of browser-based systems, and restores accuracy and reliability.
:::

Roles are described in UK and EU terms. Under US state laws, the artist is the "business" or "controller", and TDS, hosting and CMP providers are "service providers" or "processors" (see [International frameworks](page:international-frameworks)).

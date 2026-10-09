---
title: Building an artist's first-party data foundation
sidebarTitle: Shared guide for labels
description: A shared guide to how consented fan data flows, for artists, labels and partners.
icon: flow
eyebrow: TDS × Lupe shared guide
audience: Artists, labels & legal teams
---

A plain-English walkthrough of the setup we build, why it helps everyone involved, and where we'd value your team's input.

:::warning Technical guide, not legal advice
This guide describes a technical setup for the purposes of transparency and collaboration. TDS never gives legal advice or adopts responsibility for an artist's or label partners' compliance requirements.
:::

## A shared starting point

**Everyone wants the same thing: fans who are respected, consent signals that flow correctly and campaigns that work optimally.**

Artists, labels, partners and legal teams all want fan data handled carefully and used well, with consent handling being a key priority. This guide shows how our first-party setup does both.

Conversations about tracking can often stall on broad or ambiguous questions, like which data controller should be responsible, whether server-side tagging is the right thing for us, or whether it's allowed at all. These are fair questions, and the answers are often easier to find when we look at the actual intended data flow, one step at a time. If there are any concerns, it helps to say which [step](page:step-by-step) they relate to, and why.

:::note First-party data systems are the future
The web has been moving this way for years. Safari and Firefox already block third-party cookies by default, and ad blockers stop many browser pixels from firing at all. The ad platforms themselves now recommend server-side connections, such as Meta's Conversions API and Google's enhanced conversions.

Privacy laws in the UK, EU and a growing number of US states are converging on the same ideas: a clear choice for the fan, less data shared, and a clear record of who handles it. A first-party setup is built around exactly that, which is why it's fast becoming the expected standard rather than the exception.
:::

## The short version

:::cards cols="3"
:::card title="Nothing is sent without consent" icon="lock"
Fans set their consent preferences, which are logged. If they say no, no advertising data leaves the site.
:::
:::card title="The artist's own domain does the work" icon="globe"
Consented events go to data.artist.com, a server endpoint that distributes consented and enriched data to platforms, instead of separate vendor scripts in the browser.
:::
:::card title="Only what's needed is shared" icon="shield"
The server removes or hashes anything a platform doesn't need, then passes events to the artist's own ad accounts.
:::
:::

:::info Our role
TDS are not lawyers. Legal advice and responsibility for compliance sit with the artist, label and their legal advisers. Our job is the correct technical implementation of the data infrastructure.
:::

## What everyone gains

**Consented, first-party data works harder for everyone by fuelling modern platforms optimally, while keeping the artist and partners protected.**

This isn't a trade-off between compliance and performance. The same setup that makes consent reliable also makes the data more accurate, which fuels modern tools and AI systems to their maximum efficiency, supporting partners who run campaigns or make decisions from analytics data.

:::cards cols="2"
:::card title="Fans" icon="users"
- A clear, honest choice about how their data is used
- Declining is as easy as accepting
- Fewer third-party scripts running on their device
- More relevant ads and updates, when they've said yes
:::
:::card title="The artist" icon="globe"
- Controls the server endpoint and the artist-owned ad accounts
- Builds a lasting, consented audience across every release and campaign
- Can see and control exactly what's shared with each platform
- One clean setup that any partner can plug into
:::
:::card title="Labels & partners" icon="rocket"
- More complete, accurate measurement, with less loss to ad blockers
- Better signal for ad platforms to optimise campaigns
- Clear results to compare across campaigns and partners
- Lower risk of being tied to a non-compliant tag
:::
:::card title="Legal & compliance" icon="scale"
- Consent is enforced by design, twice
- One documented flow instead of scattered tags
- Data is minimised before it reaches any platform
- A clear audit trail and consent log
:::
:::

Actual performance gains vary by campaign, audience and consent rate. We're happy to share results from comparable setups on request. TDS and Lupe never own or control any datasets or ad accounts, nor do we store or view any data.

## In this guide

:::cards cols="2"
:::card title="The first-party approach" href="page:first-party-approach" icon="flow"
How older tracking is often set up, and how the first-party flow replaces it.
:::
:::card title="Step by step" href="page:step-by-step" icon="list"
Each step of the flow: what happens, what data is involved, what it relies on and the safeguards.
:::
:::card title="Who does what" href="page:who-does-what" icon="users"
Controller and processor roles, and the paperwork each party holds.
:::
:::card title="Review checklist" href="page:review-checklist" icon="check-circle"
Tell us how your team feels about each step, with the reason and any suggested change.
:::
:::

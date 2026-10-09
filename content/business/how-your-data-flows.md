---
title: How your data flows
description: Each step of the flow, what data is involved, the UK/EU and US rules it relies on, and the safeguards in place.
icon: flow
eyebrow: Lupe for Business Owners
---

Consent comes first, and everything runs through one source of truth on your own domain. Select a step to see its detail. The examples use **yourbusiness.com**; your setup uses your own domain.

:::flow
:::flowstep n="1" title="Customer arrives" summary="Page loads; only essential scripts run"
<dl>
<dt>What happens</dt><dd>Your site loads. Only essential scripts run, including the consent preferences tool. No advertising tags are loaded yet.</dd>
<dt>Data involved</dt><dd>Nothing shared with third parties.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>PECR Reg. 6(4) strictly necessary exemption</p><p><span class="region">US</span>Notice at collection (CCPA §1798.100)</p></dd>
<dt>Safeguards</dt><dd>No advertising tags fire before a choice.</dd>
</dl>
:::
:::flowstep n="2" title="Consent preferences logged" summary="Customer accepts, rejects or picks categories"
<dl>
<dt>What happens</dt><dd>The customer accepts, rejects or picks categories. Reject is as easy as accept.</dd>
<dt>Data involved</dt><dd>Consent choice, timestamp, banner version.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>UK GDPR Art. 7; PECR Reg. 6</p><p><span class="region">US</span>Opt-out and GPC rules; no dark patterns (CCPA regs §§7004, 7025)</p></dd>
<dt>Safeguards</dt><dd>Consent log kept by your CMP; the choice can be changed any time from your footer.</dd>
</dl>
:::
:::flowstep n="3" title="Event to data.yourbusiness.com" summary="Consented event sent to your own subdomain"
<dl>
<dt>What happens</dt><dd>With marketing consent, the site sends the event (for example a product view, add to basket, booking or purchase) to your own subdomain.</dd>
<dt>Data involved</dt><dd>Event name, page, order or booking value, first-party ID, consent state. Email or phone only if the customer entered it, for example at checkout.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Consent, UK GDPR Art. 6(1)(a)</p><p><span class="region">US</span>Right to opt out of sharing and targeted ads (CCPA §1798.120; state laws)</p></dd>
<dt>Safeguards</dt><dd>No event without consent; the consent state travels with every event.</dd>
</dl>
:::
:::flowstep n="4" title="Your server" summary="Checks consent per platform; hashes personal data" kind="server"
<dl>
<dt>What happens</dt><dd>Your server-side container checks consent for each platform before anything is sent.</dd>
<dt>Data involved</dt><dd>As step 3. Contact details are hashed; IP and device details can be removed or shortened.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Minimisation (Art. 5(1)(c)); security (Art. 32)</p><p><span class="region">US</span>CPRA minimisation and security (§1798.100(c), (e)); FTC Act s.5</p></dd>
<dt>Safeguards</dt><dd>Runs on your domain, in a Stape account you own; access logged.</dd>
</dl>
:::
:::flowstep n="5" title="To your ad accounts" summary="Official server APIs, into accounts you own"
<dl>
<dt>What happens</dt><dd>Sends the event to Meta, Google, TikTok and your analytics through their official server connections.</dd>
<dt>Data involved</dt><dd>Only the fields each platform needs, with personal data hashed.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Consent; each platform's data terms</p><p><span class="region">US</span>Service-provider contracts; "Do Not Sell or Share" (CCPA)</p></dd>
<dt>Safeguards</dt><dd>Only accounts your business owns; one destination per consent category.</dd>
</dl>
:::
:::flowstep n="6" title="Changes & rights" summary="Withdrawal, access and deletion requests"
<dl>
<dt>What happens</dt><dd>A customer withdraws consent, or asks to see or delete their data.</dd>
<dt>Data involved</dt><dd>Consent record; data held by platforms.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>UK GDPR Art. 7(3); Arts. 15–17</p><p><span class="region">US</span>Rights to know, delete, correct (CCPA; state laws)</p></dd>
<dt>Safeguards</dt><dd>Withdrawal stops future sends at once; deletions go through each platform's tools.</dd>
</dl>
:::
:::

## Two compliance checks, by design

:::cards cols="2"
:::card title="Check one: in the browser" icon="check-circle" tone="mint"
Your CMP collects and logs the customer's choice, and that choice is carried with every event as a Google consent signal.
:::
:::card title="Check two: on the server" icon="check-circle" tone="mint"
Your server only forwards data to a platform if the consent signal is present and correctly formatted.
:::
:::

Have a concern about a step? Use the [review checklist](page:business-review-checklist) to record your view on each one.

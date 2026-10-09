---
title: Step by step
description: What happens at each step of the flow, what data is involved, the UK/EU and US frameworks it relies on, and the safeguards in place.
icon: list
eyebrow: TDS × Lupe shared guide
---

The numbers match the diagram in [The first-party approach](page:first-party-approach). Select a step to see its detail. [International frameworks](page:international-frameworks) has more on each region, and the settings your team can decide are in [Side by side](page:side-by-side).

:::flow
:::flowstep n="1" title="Fan arrives" summary="Page loads; only essential scripts run"
<dl>
<dt>What happens</dt><dd>Page loads from artist.com. Only essential scripts run, including the consent preferences tool.</dd>
<dt>Data involved</dt><dd>Nothing shared with third parties.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>PECR Reg. 6(4) strictly necessary exemption</p><p><span class="region">US</span>Notice at collection (CCPA §1798.100)</p></dd>
<dt>Safeguards</dt><dd>No advertising tags fire before a choice.</dd>
</dl>
:::
:::flowstep n="2" title="Consent preferences logged" summary="Fan accepts, rejects or picks categories"
<dl>
<dt>What happens</dt><dd>Fan accepts, rejects or picks categories. Reject is as easy as accept.</dd>
<dt>Data involved</dt><dd>Consent choice, timestamp, banner version.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>UK GDPR Art. 7; PECR Reg. 6</p><p><span class="region">US</span>Opt-out and GPC rules; no dark patterns (CCPA regs §§7004, 7025)</p></dd>
<dt>Safeguards</dt><dd>Consent log kept by the CMP; choice can be changed any time from the footer.</dd>
</dl>
:::
:::flowstep n="3" title="Event to data.artist.com" summary="Consented event sent to the artist's subdomain"
<dl>
<dt>What happens</dt><dd>With marketing consent, the site sends the event (e.g. page view, pre-save, purchase) to the artist's subdomain.</dd>
<dt>Data involved</dt><dd>Event name, page URL, first-party ID, consent state. Email or phone only if the fan entered it.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Consent, UK GDPR Art. 6(1)(a)</p><p><span class="region">US</span>Right to opt out of sharing and targeted ads (CCPA §1798.120; state laws)</p></dd>
<dt>Safeguards</dt><dd>No event without consent; the consent state travels with every event.</dd>
</dl>
:::
:::flowstep n="4" title="Artist's server" summary="Checks consent per platform" kind="server"
<dl>
<dt>What happens</dt><dd>Checks consent per platform before data is sent.</dd>
<dt>Data involved</dt><dd>As step 3. IP and device details can be removed or shortened.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Minimisation (Art. 5(1)(c)); security (Art. 32)</p><p><span class="region">US</span>CPRA minimisation and security (§1798.100(c), (e)); FTC Act s.5</p></dd>
<dt>Safeguards</dt><dd>Runs on the artist's domain and cloud account; access logged.</dd>
</dl>
:::
:::flowstep n="5" title="To ad accounts" summary="Official server APIs to artist-owned accounts"
<dl>
<dt>What happens</dt><dd>Sends the event to Meta, Google, TikTok etc. through their official server APIs.</dd>
<dt>Data involved</dt><dd>Forwards data and hashes PII.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>Consent; each platform's data terms</p><p><span class="region">US</span>Service-provider contracts; "Do Not Sell or Share" (CCPA)</p></dd>
<dt>Safeguards</dt><dd>Only artist-owned accounts; one destination per consent category.</dd>
</dl>
:::
:::flowstep n="6" title="Changes & rights" summary="Withdrawal, access and deletion requests"
<dl>
<dt>What happens</dt><dd>Fan withdraws consent or asks to see or delete their data.</dd>
<dt>Data involved</dt><dd>Consent record; data held by platforms.</dd>
<dt>Relies on</dt><dd><p><span class="region">UK / EU</span>UK GDPR Art. 7(3); Arts. 15–17</p><p><span class="region">US</span>Rights to know, delete, correct (CCPA; state laws)</p></dd>
<dt>Safeguards</dt><dd>Withdrawal stops future sends at once; deletions go through each platform's tools.</dd>
</dl>
:::
:::

## Have a concern about a step?

It helps to say which step a concern relates to, and why. Use the [review checklist](page:review-checklist) to record your team's view on each step, then copy the summary into an email to us.

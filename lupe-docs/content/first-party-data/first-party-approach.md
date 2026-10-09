---
title: The first-party approach
description: How older tracking systems are often set up, and how a first-party flow on the artist's own domain replaces them.
icon: globe
eyebrow: TDS × Lupe shared guide
---

## How older tracking systems are often set up

Many artist sites load a separate pixel for every ad platform straight into the fan's browser. App installs, scripts and tags have often been added over time, by different teams, for different reasons and campaigns. Sometimes they are not configured with consent correctly, they slow the site down, and they create an administrative burden.

<div class="diagram legacy" role="img" aria-label="Diagram: in the fan's browser, each vendor script sets its own cookies and sends data straight to its own platform">
<div class="lg-browser">
<p class="dg-label">Fan's browser on artist.com</p>
<div class="lg-consent">Consent preferences</div>
<p class="lg-warn">The consent preference isn't always configured with every tag, app, script or pixel, so some can fire early or send data after a fan rejects, causing a compliance risk.</p>
<ul class="lg-rows">
<li><span class="lg-script">Meta Pixel</span><span class="lg-cookie">its own cookies</span><span class="lg-line"></span><span class="lg-dest">Meta's interpretation</span></li>
<li><span class="lg-script">Google tag</span><span class="lg-cookie">its own cookies</span><span class="lg-line"></span><span class="lg-dest">Google's interpretation</span></li>
<li><span class="lg-script">TikTok pixel</span><span class="lg-cookie">its own cookies</span><span class="lg-line"></span><span class="lg-dest">TikTok's interpretation</span></li>
<li><span class="lg-script">Other scripts</span><span class="lg-cookie">its own cookies</span><span class="lg-line"></span><span class="lg-dest">Other interpretations</span></li>
</ul>
<p class="lg-caption">Data sent straight from the browser</p>
</div>
<p class="dg-key">Key: the majority of this data is blocked via cookie and pixel blocking (ad blockers and browser privacy features).</p>
</div>

:::cards cols="3"
:::card title="A heavy, slower website" icon="clock"
Every script adds weight to the page. More scripts mean slower load times for fans, especially on mobile.
:::
:::card title="Everyone counts differently" icon="compare"
Each script records its own version of events, read by its own platform. With no single source of truth for attribution, it's impossible to tell what's driving sales, and how well.
:::
:::card title="A broken fan journey" icon="flow"
The path from first ad to pre-save, ticket or merch purchase ends up split across platforms, broken and incomplete.
:::
:::

<div class="stat-callout"><span class="stat-num">~70%</span><div><strong>Lost to ad blockers</strong><p>Ad blockers and browser privacy features block much of this traffic. Around 70% of the data can be lost before it reaches any platform.</p></div></div>

## The first-party approach

Consent comes first, and we focus on **one source of truth**. Consented events go to a server on the artist's own domain, then on to the artist's own ad accounts. The many apps, scripts and vendor pixels no longer run in the fan's browser, speeding up the site and avoiding data blocking mechanisms.

<div class="diagram fp" role="img" aria-label="Diagram of the consented first-party data flow, steps 1 to 6">
<div class="fp-node ga-a"><span class="flow-n">1</span><div><strong>Fan arrives on artist.com</strong><small>No advertising tags are loaded yet</small></div></div>
<div class="fp-node ga-b"><span class="flow-n">2</span><div><strong>Consent preferences logged</strong><small>Fan chooses; the CMP logs the choice</small></div></div>
<div class="fp-decision ga-c"><strong>Consent preferences granted?</strong><span class="fp-tag fp-tag-yes">yes</span></div>
<div class="fp-side fp-no ga-cn"><span class="fp-tag">no</span><strong>No advertising data sent</strong><small>The site works exactly the same</small></div>
<div class="fp-node ga-d"><span class="flow-n">3</span><div><strong>Event sent to data.artist.com</strong><small>First-party; carries the consent signal</small></div></div>
<div class="fp-node fp-server ga-e"><span class="flow-n">4</span><div><strong>Artist's own server (sGTM)</strong><small>Forwards data only if consent signals are present; hashes PII</small><span class="fp-gate"><span class="fp-switch"></span>Consent gate · on / pause</span></div></div>
<div class="fp-side fp-dest ga-en"><div class="fp-dest-head"><span class="flow-n">5</span><div><strong>Artist-owned ad accounts &amp; partner datasets</strong><small>Receive enriched, accurate data</small></div></div><ul><li>Meta (Conversions API)</li><li>Google Ads</li><li>Analytics (GA4)</li><li>TikTok (Events API)</li><li>Partner datasets</li></ul></div>
<div class="fp-node fp-loop ga-f"><span class="flow-n">6</span><div><strong>Fan changes their mind</strong><small>Simple to update preferences at any time and withdraw from tracking</small><span class="fp-tag fp-tag-loop">↺ preferences updated, back to step 2</span></div></div>
</div>

:::cards cols="2"
:::card title="Compliance check one: in the browser" icon="check-circle" tone="mint"
The consent preference is collected and carried with each event. The consent management platform logs the choices, and those values are carried as a Google consent signal from the browser to the server.
:::
:::card title="Compliance check two: on the server" icon="check-circle" tone="mint"
The server only forwards data to a platform if the consent signal is present and correctly formatted.
:::
:::

Every event is sent in a server-to-server connection from data.artist.com, using each platform's own official server API and ensuring the domain is verified within the receiving platform.

:::tip Explore each step
Open [Step by step](page:step-by-step) to see what happens at each numbered step, what data is involved, the UK/EU and US frameworks it relies on, and the safeguards in place.
:::

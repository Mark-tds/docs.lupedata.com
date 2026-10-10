---
title: How onboarding works
description: What you do, what our implementation team does, and how long each part takes.
icon: rocket
---

Lupe is a Transparent Digital Services (TDS) company, so the team you work with during onboarding is the TDS implementation team.

## The end goal

The end goal is to make sure each of your web assets (stores, websites, landing pages and so on) passes its data to an endpoint under **your own domain**.

<figure class="ep" aria-label="Three websites, each with one Google Tag Manager script, send data to one server endpoint at data.yourdomain.com, which sends consent-checked data to your platforms.">
<div class="ep-sites">
<div class="ep-site" style="--d:0s"><div class="ep-site-top"><img src="/images/logos/shopify.svg" alt=""><div><b>store.yourdomain.com</b><span>Shopify store</span></div></div><span class="ep-gtm"><img src="/images/logos/google-tag-manager.svg" alt="">1 GTM script</span><i class="ep-line"><i class="ep-dot"></i></i></div>
<div class="ep-site" style="--d:.8s"><div class="ep-site-top"><span class="ep-glyph">www</span><div><b>yourdomain.com</b><span>Main website</span></div></div><span class="ep-gtm"><img src="/images/logos/google-tag-manager.svg" alt="">1 GTM script</span><i class="ep-line"><i class="ep-dot"></i></i></div>
<div class="ep-site" style="--d:1.6s"><div class="ep-site-top"><span class="ep-glyph">try</span><div><b>try.yourdomain.com</b><span>Landing page</span></div></div><span class="ep-gtm"><img src="/images/logos/google-tag-manager.svg" alt="">1 GTM script</span><i class="ep-line"><i class="ep-dot"></i></i></div>
</div>
<div class="ep-hub">
<span class="ep-hub-kicker">Server-side GTM endpoint</span>
<b>data.yourdomain.com</b>
<span class="ep-gate">Consent checked</span>
<i class="ep-line ep-out"><i class="ep-dot"></i></i>
</div>
<div class="ep-dests">
<span class="ep-dest"><img src="/images/logos/meta.svg" alt="">Meta</span>
<span class="ep-dest"><img src="/images/logos/google-ads.svg" alt="">Google Ads</span>
<span class="ep-dest"><img src="/images/logos/google-analytics.svg" alt="">GA4</span>
<span class="ep-dest"><img src="/images/logos/tiktok.svg" alt="">TikTok</span>
<span class="ep-dest ep-more">and your other platforms</span>
</div>
<figcaption>Each site runs one Google Tag Manager script. Every site sends its data to one server-side endpoint on your domain, and only consent-checked data goes on to your platforms.</figcaption>
</figure>

This flow of data is carefully orchestrated so that the correct consent signals pass through, and so that your tracking is first party. That reduces the impact of ad blockers, and of browser and device features that interrupt data flow.

Onboarding works by getting the [minimum access required](page:your-data-our-access) to set up, maintain and test this infrastructure.

You'll be allocated an onboarding manager to help with this process and answer any questions. You can also log in to your Lupe account at any time for an overview of your platforms, accounts, tokens and containers.

:::info We're here to help
Ask us anything, at any stage. For the full picture, watch our [in-depth video explainer on YouTube](https://www.youtube.com/watch?v=F01kP0aixEg&t=3s).
:::

:::warning Important: you are always in control
All platforms, and the data in them, stay under your admin rights at all times. Lupe does not store or use your platform data, except to show you an aggregated and anonymised analytical view.

During setup, you may grant access to our team members so they can configure and test your datasets and first-party infrastructure, following our data minimisation framework of [Minimum necessary access](page:your-data-our-access). That means no access to your ad accounts' campaigns, order information, billing or financial information: only what's needed to test the events your website sends to each platform.

Our team will not ask you for admin access unless you've asked for their support with a specific task or troubleshooting session. You can remove our team members at any time, and you remain the account admin throughout.
:::

To set up your first-party data infrastructure and server-side tracking, our team needs limited access to a few of your accounts. You grant each one from your own account, so nothing is connected without your sign-off.

## Pick your path

The setup is the same for everyone. Each path explains it in the terms that matter to you:

:::cards cols="2"
:::card title="Lupe for Business Owners" href="page:lupe-for-business" icon="rocket"
For marketing professionals, tech teams and business owners.
:::
:::card title="Lupe for Artists & Creators" href="page:lupe-for-artists" icon="users"
For artists, creators, managers and label teams.
:::
:::

## The core access guides

Your onboarding manager will tell you which ones apply to you. If your site runs on Shopify, use the Shopify guide; if it runs on WordPress, use the WordPress guide.

| Guide | Where you do it | Time | What you share |
| --- | --- | --- | --- |
| :logo[shopify][Shopify access & Stape setup](page:shopify-stape-setup) | Shopify admin | Under 5 minutes | Collaborator access, plus installing the Stape app yourself |
| :logo[wordpress][WordPress & Stape setup](page:wordpress-stape-setup) | WordPress admin | Under 5 minutes | Installing the Stape plugin yourself; no login needed |
| :logo[meta][Meta dataset access](page:meta-dataset-access) | Meta Business settings | Under 3 minutes | One dataset, assigned to our business |
| :logo[tiktok][TikTok pixel access](page:tiktok-pixel-access) | TikTok Business Center | Under 3 minutes | One pixel, shared with our Business Center |
| :logo[google-ads][Google Ads setup](page:google-ads-access) | Google Ads, on a short screen-share | Under 8 minutes | No access: a GA4 link and two codes |
| :logo[google-analytics][Google Analytics 4 access](page:ga4-access) | Google Analytics | Under 3 minutes | One property, or ask us to create one |

Advertise on LinkedIn, Pinterest or ChatGPT? See [All platform access guides](page:all-platforms).

## Your part and our part

:::cards cols="2"
:::card title="Your part" icon="users" tone="mint"
- Grant access from your own account
- Install anything that only you can install, such as the Stape app or plugin
- Let your onboarding manager know when you're done
:::
:::card title="Our part" icon="flow" tone="violet"
- Configure your server container and connections
- Check consent signals, advanced matching and event settings
- Run test events and check deduplication
- Confirm with you when tracking is live
:::
:::

## Before you start

- **Use the right login.** You'll need to be the owner or an admin of each account. If you manage more than one store or business, double-check you're in the right one.
- **Check ownership.** The pixel or dataset must be owned by your business. If it has been shared with you by another business, such as a record label, agency or partner, you can't share it with us.
- **Clear apps with your team first.** If your legal or IT team approves third-party apps, get **Stape Conversion Tracking** cleared before you install it.

## Your onboarding manager

Each guide ends with a "Let us know you're done" step. The platforms don't always notify us when you share access, so this message is how we know to start. Send it to your onboarding manager, or email [contact@lupedata.com](mailto:contact@lupedata.com).

:::tip Track your progress
Each guide has a **Mark as done** button under your steps. Your progress is saved in this browser, so you can come back to a guide later.
:::

---
title: Minimum necessary access
sidebarTitle: Minimum necessary access
description: Our data minimisation framework: the exact access we ask for on each platform, what it lets us do, and what stays private.
icon: shield
---

**Minimum necessary access** is our data minimisation framework. We ask only for the access needed to configure and test your first-party setup: in practice, the ability to see the events your website sends to each platform. You grant it from your own account, nothing else is shared, and you can remove our access at any time.

## What the framework means

- **You remain the admin.** Every platform and its data stays under your admin rights. We never ask to own an account.
- **No ad account, order or financial data.** We don't get access to your ad campaigns and budgets, order information, customer lists, billing or financial information.
- **Only what testing needs.** Our access lets us connect your server container and check the events arriving at each platform.
- **No admin access by default.** We'll only ask for admin access if you've requested our support with a specific task or troubleshooting session.
- **Aggregated views only.** Lupe doesn't store or use your platform data, except to show you an aggregated and anonymised analytical view.
- **Remove us any time.** Every guide shows where to see and remove our access.

:::check You stay in control
Lupe and TDS never own or control your datasets or ad accounts, and we never store or view your data. Lupe is a dashboard layer: all processing happens in accounts that you own.
:::

## At a glance

| Platform | What we ask for | What we don't access |
| --- | --- | --- |
| :logo[shopify]Shopify | Collaborator access with four permission areas | Orders, products, customer lists, payments or staff accounts |
| :logo[wordpress]WordPress | No login: you install the Stape plugin yourself | Orders, customers, payments, pages and theme |
| :logo[meta]Meta | :yes[Full control] of one dataset | Other datasets, ad accounts, Pages, Instagram, catalogues, billing, portfolio settings |
| :logo[tiktok]TikTok | :yes[Edit pixels] on one pixel | Other pixels, advertiser accounts, catalogs, shops, billing, Business Center settings |
| :logo[google-ads]Google Ads | :no[No access] You approve a GA4 link and send us a conversion ID and label | Your whole Google Ads account: campaigns, budgets, spend, billing and leads |
| :logo[google-analytics]Google Analytics 4 | :yes[Editor] on one property | Other properties, users and permissions, account settings |
| :logo[linkedin]LinkedIn | :yes[Campaign Manager] on one ad account | Other ad accounts, company pages, billing |
| :logo[pinterest]Pinterest | :yes[Analyst] on one ad account | Campaigns, billing, profiles, catalogs, audiences |
| :logo[openai]ChatGPT ads (OpenAI) | :yes[Member] on one advertising account | Account administration, other advertising accounts, ChatGPT workspaces |

## Shopify

| Shopify area | Permission | Why we need it |
| --- | --- | --- |
| Store settings | Manage settings | Gives access to Customer privacy, so we can configure Shopify's default cookie banner in consideration of your chosen consent platform. |
| Store settings | View customer events; Manage and add custom pixels | Lets us configure checkout events to your server-side container. |
| Apps and channels | Manage and install apps and channels | Lets us configure the Stape app once you've installed it. |
| Online store | Themes: edit code | Lets us switch on the Stape app embed, configure your consent banner script with the theme, and isolate the location of old, non-compliant or conflicting tracking scripts. |

Full steps: [Shopify access & Stape setup](page:shopify-stape-setup).

## Meta

| Area | Access | What that means |
| --- | --- | --- |
| Your chosen dataset | :yes[Full control] | View incoming events, run test events, check deduplication and event quality, adjust advanced matching and event settings, and connect your server container (Conversions API). |
| Other datasets or pixels | :no[No] | Only the one dataset you assign. |
| Ad accounts | :no[No] | No customer or lead information, campaign access, budgets or ad performance. |
| Facebook Pages and Instagram | :no[No] | No posting, messages or community management. |
| Catalogues | :no[No] | No changes to products or product sets. |
| Billing and payments | :no[No] | No payment methods, invoices, spend or credit lines. |
| Business portfolio settings | :no[No] | No access to your people, other assets or partners. |

Full steps: [Meta dataset access](page:meta-dataset-access).

## TikTok

| Area | Access | What that means |
| --- | --- | --- |
| Your chosen pixel | :yes[Edit pixels] | View incoming events, run test events, check deduplication and event quality, and connect your server container (Events API). |
| Other pixels | :no[No] | Only the one pixel you share. |
| Advertiser (ad) accounts | :no[No] | No customer or lead information, campaign access, budgets or ad performance. |
| Catalogs and shops | :no[No] | No changes to products or shops. |
| Billing and payments | :no[No] | No payment methods, invoices or spend. |
| Business Center settings | :no[No] | No access to your members, other assets or partners. |

Full steps: [TikTok pixel access](page:tiktok-pixel-access).

Guides for every other platform, including Google Ads, Google Analytics 4, LinkedIn, Pinterest and ChatGPT ads, are in [All platform access guides](page:all-platforms).

## Test events

When we run test events, we see the event details the platform shows for that test traffic. Personal details such as email addresses are hashed (scrambled) before they reach Meta or TikTok. We don't download or keep any of your event data.

## Our partner details

Check these against any request you see in your accounts.

| Platform | Partner name | ID |
| --- | --- | --- |
| Meta | Lupe \| TDS | Business ID `300861977272185` |
| TikTok | Lupe \| TDS | Business Center ID `7398888478508941313` |
| Google Ads | – | No access needed: you send a conversion ID and label |
| Google Analytics 4, ChatGPT ads | Lupe analytics | `analytics@lupedata.com` |
| LinkedIn, Pinterest | Lupe \| TDS | Sent by your onboarding manager |
| Shopify | Lupe Data \| TDS | Request sent using your collaborator code |

## The legal terms

These permissions are set out in Annex D of our [Data processing agreement](page:data-processing-agreement). See also our [Terms of service](page:terms-of-service) and [Privacy policy](page:privacy-policy).

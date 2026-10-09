---
title: Google Analytics 4 access
sidebarTitle: Google Analytics 4
description: Give us access to one GA4 property, or ask us to create a new one for you. About 5 minutes.
icon: compare
eyebrow: Client onboarding guide
time: About 5 minutes
---

To send server-side events to Google Analytics 4 and show your analytics in Lupe, we need access to one GA4 property. If you don't have one, or yours isn't set up properly, we can create a new one for you inside your own Google Analytics account.

## Which applies to you?

:::cards cols="3"
:::card title="I have a GA4 property" icon="check-circle" tone="mint"
Follow **Your steps** below to add us to it.
:::
:::card title="I don't have one, or I'm not sure" icon="lightbulb" tone="violet"
We can create one for you. See [Need a new property?](#need-a-new-property)
:::
:::card title="An agency or label runs it" icon="users"
Ask them to add us using the steps below, or ask us to create a property your business owns.
:::
:::

## Before you start

- You'll need the **Administrator** role on the GA4 property (or its account) to add users.
- Make sure the property belongs to your business. If it was set up by an agency or label and lives in their account, you may want a property of your own. Ask us if you're unsure.

## Your steps

:::steps
:::step title="Open property access management" label="Your part"
In Google Analytics, click **Admin** (the cog in the bottom-left corner). Check the correct account and property are selected at the top, then under **Property settings** go to :ui[Property › Property access management].
:::
:::step title="Add us as a user" label="Your part"
Click the blue **+** button, then **Add users**. Enter our email address:

:::copy value="analytics@lupedata.com" label="Lupe | TDS" caption="Email address to add"
:::

Under **Direct roles and data restrictions**, choose **Editor**. Leave the data restrictions (**No cost metrics** and **No revenue metrics**) unticked, so revenue reporting works in Lupe. Click **Add**.
:::
:::step title="Let us know you're done" label="Your part"
Send your onboarding manager the **property name** and **property ID**. You'll find the ID under :ui[Admin › Property details], at the top right.
:::
:::

## What this access does, and doesn't, give us

| Area | Access | What that means |
| --- | --- | --- |
| Your chosen property | :yes[Editor] | Set up the data stream and Measurement Protocol API secret for server-side events, check key events and reports, and read aggregated reports for Lupe. |
| Other properties | :no[No] | Only the one property you add us to. |
| Users and permissions | :no[No] | Editors can't add, remove or change users. |
| Account settings | :no[No] | No access to your Google Analytics account settings or other accounts. |
| Linking to Google Ads | :yes[With your OK] | Link the property to your Google Ads account so conversions and audiences can be shared. |

When we check your setup, we see the reports Google Analytics shows for your property. We don't download or keep any of your data.

## Need a new property?

If you don't have GA4, can't find who owns your current property, or your current setup is broken, we'll create a new property for you. It's created **in your own Google Analytics account, not ours**, so your business owns it from day one.

:::accordion title="Option 1: Ask us to create it (recommended)" open="true"
1. Tell your onboarding manager you'd like a new GA4 property, and which website it's for.
2. If you already have a Google Analytics account, add `analytics@lupedata.com` as an **Editor** at account level instead: :ui[Admin › Account settings › Account access management].
3. If you don't have a Google Analytics account at all, create one at analytics.google.com with your business Google account. Stop when it asks you to create a property, and add us as above. We'll do the rest.

We'll set up the property, time zone, currency and web data stream, then confirm the property ID with you.
:::

:::accordion title="Option 2: Create it yourself"
1. In Google Analytics, go to :ui[Admin › Create › Property].
2. Name it after your website, and set your reporting time zone and currency.
3. Add your business details and objectives, then click **Create**.
4. Choose **Web**, enter your website address, and create the stream.
5. Add `analytics@lupedata.com` as an **Editor** using the steps above, and send us the property ID.
:::

## Good to know

:::check You're always in control
You can see or remove our access at any time from :ui[Admin › Property access management].
:::

:::note Why Editor?
Editor is the lowest role that lets us create the Measurement Protocol API secret and configure the data stream, which is how your server-side container sends events to GA4. It doesn't let us manage users.
:::

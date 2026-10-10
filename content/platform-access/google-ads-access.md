---
title: Google Ads setup
sidebarTitle: Google Ads
description: Connect Google Ads to your first-party setup without giving us any access to your Google Ads account. Under 8 minutes, mostly on a short screen-share.
logo: google-ads
icon: rocket
eyebrow: Client onboarding guide
time: Under 8 minutes
---

We set up Google Ads conversion tracking **without any access to your Google Ads account**. You approve one link from your Google Analytics 4 property, create your conversion actions with us on a short screen-share, and send us two codes. Your budgets, spend, billing and leads stay completely private.

:::check Nothing in Google Ads is shared with us
We are never added as a user and never linked as a manager account. We don't see your campaigns, budgets, spend, billing or the leads from your lead forms.
:::

:::cards cols="2"
:::card title="Your part" icon="users" tone="mint"
- Approve our Google Analytics 4 link request
- Create your conversion actions with us on a short screen-share
- Send us the conversion ID and label
- Confirm on the call that conversions arrive
:::
:::card title="Our part" icon="flow" tone="violet"
- Send the GA4 link request from your GA4 property
- Build the server-side Google Ads tag from your two codes
- Set up enhanced conversions and consent signals in your server container
- Run test conversions with you and confirm when tracking is live
:::
:::

## Before you start

- Complete the [Google Analytics 4 guide](page:ga4-access) first. We send the link request from your GA4 property, using the Editor access you give us there.
- You'll need **Admin** access to your Google Ads account to approve the link and create conversion actions.
- Book a short screen-share with your onboarding manager for Step 2. We'll guide every click.

## Your steps

:::steps
:::step title="Approve our Google Analytics link request" label="Your part"
We'll send a request from your GA4 property to link it with your Google Ads account. Google emails your account's admins when the request arrives.

To approve it, sign in to Google Ads and go to :ui[Tools › Data manager]. Open **Google Analytics (GA4) & Firebase**, find the pending request from your GA4 property and click **Approve**. You can also approve it from Google's email.

Linking lets Google Ads use your GA4 key events and audiences. It doesn't give us, or anyone else, access to your Google Ads account.
:::
:::step title="Create your conversion actions on a screen-share" label="Your part"
On a short call, we'll guide you through creating the conversion actions your business needs, usually a purchase or a lead:

1. In Google Ads, go to :ui[Goals › Conversions › Summary] and click **+ New conversion action**.
2. Choose **Website**, enter your website address and choose to add a conversion action manually.
3. Pick the category (for example **Purchase** or **Submit lead form**), set the value and counting options we agree, then click **Done** and **Save and continue**.
4. Choose **Use Google Tag Manager**. Google shows a **Conversion ID** and a **Conversion label**.

If you'd also like to import GA4 key events as conversions, we'll do that on the same call: **+ New conversion action**, then **Import**, then **Google Analytics 4 properties**.

We'll also check **enhanced conversions** is switched on in :ui[Goals › Settings], set to use Google Tag Manager.

Menus can vary slightly between accounts, so follow along with your onboarding manager.
:::
:::step title="Send us the conversion ID and label" label="Your part"
Send the **Conversion ID** and **Conversion label** for each conversion action to your onboarding manager. These two codes identify where conversions are sent. They don't give anyone access to your account.
:::
:::step title="Confirm conversions arrive" label="Your part"
Once we've built your server-side tag, we'll run test conversions together. On a short call, open :ui[Goals › Conversions › Summary] and check the status of each conversion action, or share your screen so we can confirm it with you.
:::
:::

## What we see, and what we don't

| Area | Do we see it? | What that means |
| --- | --- | --- |
| Conversion ID and label | :yes[Yes, you send them] | Used to build the server-side Google Ads tag in your container. |
| Your GA4 property | :yes[Editor] | We send the link request from GA4 and check key events. See the [GA4 guide](page:ga4-access). |
| Campaigns, ads and keywords | :no[No] | We have no access to your Google Ads account. |
| Budgets, spend and billing | :no[No] | Stays fully private. |
| Leads from lead forms | :no[No] | Stays fully private. |
| Users and account settings | :no[No] | We're never added as a user or manager. |

## What happens next

Once you've finished, our implementation team will:

- Add the Google Ads conversion tag and conversion linker to your server-side container, using your conversion ID and label
- Send hashed customer details for enhanced conversions, only where consent allows
- Check Google consent mode signals are passed with every conversion
- Confirm with you when tracking is live

## Good to know

:::check You're always in control
You can remove the GA4 link at any time from :ui[Tools › Data manager] in Google Ads, or from :ui[Admin › Product links › Google Ads links] in GA4.
:::

:::note Want us to manage your campaigns?
If you'd like TDS to run your Google Ads campaigns as well, that's a separate service with different access. Ask your onboarding manager, who will explain how to link your account to our manager account, **Lupe | TDS Manager Account** (`921-213-2498`).
:::

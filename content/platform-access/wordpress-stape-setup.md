---
title: WordPress & Stape setup
sidebarTitle: WordPress & Stape
description: Check your site for existing tracking, install the Stape Conversion Tracking plugin and switch on auto-updates. About 10 minutes.
icon: globe
logo: wordpress
eyebrow: Client onboarding guide
time: About 10 minutes
---

WordPress sites, including WooCommerce stores, connect to your first-party setup through Stape's free WordPress plugin. You install it from your own WordPress admin, so nothing goes onto your site without your sign-off, and you won't need to give us a login.

:::cards cols="2"
:::card title="Your part" icon="users" tone="mint"
- Check for existing tracking plugins and scripts
- Install the Stape Conversion Tracking plugin
- Turn on auto-updates
- Add the details we send you, then let us know
:::
:::card title="Our part" icon="flow" tone="violet"
- Configure your server-side container on Stape
- Set up WooCommerce events and webhooks (if you sell online)
- Make sure tracking only loads with consent
- Test end to end and confirm when live
:::
:::

## Before you start

- You'll need to be a WordPress **Administrator** to install plugins.
- If your developer or IT team approves plugins, get **Stape Conversion Tracking** cleared before Step 2.
- It's a good idea to take a backup first. Most hosts offer one-click backups.

## Your steps

:::steps
:::step title="Check for other tracking plugins and scripts" label="Your part"
Two tracking setups running side by side count every sale twice and can fire before a visitor gives consent, so we need to know what's already there.

**Plugins.** Go to :ui[Plugins › Installed Plugins] and look for anything that adds tracking, for example Site Kit by Google, MonsterInsights, GTM4WP, GTM Kit, PixelYourSite, or the Facebook, TikTok or Pinterest for WooCommerce plugins.

**Scripts.** Check for existing Google Analytics 4 or Google Tag Manager code. It often sits in a header plugin such as WPCode or Insert Headers and Footers, or in your theme settings. Look for IDs starting `G-` (GA4) or `GTM-` (Tag Manager).

Don't remove anything yet. Send your onboarding manager a list or a screenshot and we'll tell you what to keep. **If you're not sure what something does, ask your onboarding manager** and we'll check it with you.
:::
:::step title="Install the Stape Conversion Tracking plugin" label="Your part"
Go to :ui[Plugins › Add New Plugin], search for **Stape Conversion Tracking** (by Stape), click **Install Now**, then **Activate**. You don't need to change any settings yet.
:::
:::step title="Turn on auto-updates" label="Your part"
In :ui[Plugins › Installed Plugins], find **Stape Conversion Tracking** and click **Enable auto-updates** in its row.

:::tip Keep auto-updates on
We recommend auto-updates for this plugin, and for WordPress and your other plugins too. Updates fix security issues and keep the plugin working as WordPress, WooCommerce and the ad platforms change.
:::
:::
:::step title="Add the details we send you" label="Your part"
Your onboarding manager will send three values: your **web Google Tag Manager ID**, your **server GTM container URL** and your **Stape container identifier**. Open the plugin's settings, paste them into the matching fields on the **General** tab and click **Save**.

If you'd rather we did this part, ask your onboarding manager for help on a short screen-share.
:::
:::step title="Let us know you're done" label="Your part"
Tell your onboarding manager the plugin is installed, auto-updates are on and the details are saved.
:::
:::

## What happens next

Once you've finished, our implementation team will:

- Configure your server-side Google Tag Manager container on Stape
- If you use WooCommerce, set up ecommerce events (product views, add to cart, checkout, purchase) and order webhooks
- Set the plugin to load tracking only once a visitor gives consent, using your consent platform
- Work with you to remove duplicate or outdated tracking, with your OK
- Test everything end to end and confirm with you when tracking is live

## What we don't need

| Area | Do we need it? | What that means |
| --- | --- | --- |
| A WordPress login | :no[No] | You install and set up the plugin yourself, from your own admin. |
| Orders, customers and payments | :no[No] | We don't look at your WooCommerce orders, customer lists or payment settings. |
| Theme and content changes | :no[No] | We don't edit your pages, posts or theme. |

:::note Need hands-on help?
If you ask for support with a specific task, your onboarding manager may suggest a short screen-share, or a temporary user account that you remove afterwards. We'll only ask for this if you've requested it.
:::

## Good to know

:::check You're always in control
You can deactivate or delete the plugin at any time from :ui[Plugins › Installed Plugins].
:::

:::warning Seeing a 403 error after saving?
The **Web Google Tag Manager ID** must be your *web* container ID, not the server container ID. If in doubt, send your onboarding manager a screenshot of the settings page.
:::

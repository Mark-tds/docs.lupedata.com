---
title: Shopify access & Stape setup
sidebarTitle: Shopify & Stape
description: Four quick steps to get your first-party tracking live.
logo: shopify
icon: store
eyebrow: Client onboarding guide
time: About 10 minutes
---

To set up your first-party data infrastructure, our team needs limited collaborator access to your Shopify store and the Stape Conversion Tracking app installed. You won't need to share a password or add anyone as staff, and you stay in control of the access the whole time.

:::cards cols="2"
:::card title="Your part" icon="users" tone="mint"
- Send us your collaborator request code
- Approve our access request
- Install the Stape Conversion Tracking app
- Let us know you're done
:::
:::card title="Our part" icon="flow" tone="violet"
- Configure Stape and your server container
- Add the tracking pixel and consent setup
- Enable the app in your theme
- Test end to end and confirm when live
:::
:::

## Before you start

- You'll need to be logged in as the **store owner**, or a staff member allowed to manage collaborators and install apps. Double-check you're in the right Shopify account if you manage more than one.
- If your legal or IT team approves third-party apps, please get **Stape Conversion Tracking** cleared before Step 3. Because only you can install it, nothing goes onto your store without your sign-off.

## Your steps

:::steps
:::step title="Send us your collaborator request code" label="Your part"
In your Shopify admin, go to :ui[Settings › Users › Security]. Under **Collaborators** you'll see a four-digit collaborator request code (you can generate a new one at any time).

![Shopify Users › Security screen with the collaborator request code highlighted](/images/guides/shopify-collaborators.png "Example only: your store name and code will be different.")

Email the code to your onboarding manager. Please send it directly rather than posting it in shared channels.
:::
:::step title="Approve our access request" label="Your part"
We'll send a request using your code. You'll get an email from Shopify titled **"Lupe Data | TDS is requesting collaborator access"**, with a short note from us so you know it's genuine. Click **View request**, check the permissions below, and approve it.

| Shopify area | Permission | Why we need it |
| --- | --- | --- |
| Store settings | Manage settings | Gives access to Customer privacy, so we can configure Shopify's default cookie banner in consideration of your chosen consent platform. |
| Store settings | View customer events; Manage and add custom pixels | Lets us configure checkout events to your server-side container. |
| Apps and channels | Manage and install apps and channels | Lets us configure the Stape app once you've installed it. |
| Online store | Themes: edit code | Lets us switch on the Stape app embed, configure your consent banner script with the theme, and isolate the location of old, non-compliant or conflicting tracking scripts. |

:::check
We don't ask for access to your orders, products, customer lists, payments or staff accounts.
:::
:::
:::step title="Install the Stape Conversion Tracking app" label="Your part"
Shopify only lets store owners install tracking apps, so this one needs to come from you.

Go to :ui[Apps › Shopify App Store], search for **Stape Conversion Tracking** (by Stape) and click **Install**. That's all. You don't need to change any of its settings; we'll configure it.
:::
:::step title="Let us know you're done" label="Your part"
Contact your onboarding manager once the request is approved and the app is installed. They'll be able to take it from there.
:::
:::

## What happens next

Once you've finished, our implementation team will:

- Configure the Stape app and connect it to your server-side container
- Configure Customer events so checkout data is correctly captured
- Depending on your choice of consent management platform (CMP), turn off Shopify's default cookie banner and replace it with your CMP, testing and verifying that it works correctly
- Enable the Stape app embed and consent script in your theme
- Test everything end to end and check for old Universal Analytics tags, pixels firing without consent signals, or other third-party scripts that can cause non-compliance or other conflicts
- Confirm with you when tracking is live

## Good to know

:::note Changing access later
Shopify doesn't let collaborator permissions be edited. If we ever need something different, we'll ask you to remove our access and approve a fresh request.
:::

:::check You're always in control
You can see or remove our access at any time under :ui[Settings › Users].
:::

:::warning Code not working?
Check you're logged into the Shopify account that owns the store. Being signed into a different account is the most common cause.
:::

:::info Other store changes
Work outside this setup, such as domain changes, isn't included, but we're happy to help on an hourly basis.
:::

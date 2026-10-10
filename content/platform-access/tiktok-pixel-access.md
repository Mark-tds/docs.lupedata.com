---
title: TikTok pixel access
sidebarTitle: TikTok pixel access
description: Four quick steps to give us access to one pixel, and nothing else.
logo: tiktok
icon: pixel
eyebrow: Client onboarding guide
time: About 5 minutes
---

To set up and test your server-side tracking for TikTok, our team needs access to one pixel in your TikTok Business Center. You share it with us from your own account, nothing else is shared, and you can remove our access at any time.

:::cards cols="2"
:::card title="Your part" icon="users" tone="mint"
- Find your own pixel and check you're assigned to it
- Add us as a partner
- Share your pixel with us
- Let us know you're done
:::
:::card title="Our part" icon="flow" tone="violet"
- Connect your server container to the pixel
- Check advanced matching and event settings
- Run test events and check deduplication
- Confirm with you when the draft is ready to go live
:::
:::

## Before you start

- You'll need **Admin** access to the TikTok Business Center that owns the pixel. If you're not sure, check under :ui[Business settings › Your information].
- Know which pixel your website uses, and that your Business Center owns it. If you're unsure, ask us.

## What this access does, and doesn't, give us

| Area | Access | What that means |
| --- | --- | --- |
| Your chosen pixel | :yes[Edit pixels] | View incoming events, run test events, check deduplication and event quality, and connect your server container (Events API). |
| Other pixels | :no[No] | Only the one pixel you share. |
| Advertiser (ad) accounts | :no[No] | No customer or lead information, campaign access, budgets or ad performance. |
| Catalogs and shops | :no[No] | No changes to products or shops. |
| Billing and payments | :no[No] | No payment methods, invoices or spend. |
| Business Center settings | :no[No] | No access to your members, other assets or partners. |

When we run test events, we see the event details TikTok shows for that test traffic. Personal details such as email addresses are hashed (scrambled) before they reach TikTok. We don't download or keep any of your event data.

## Your steps

:::steps
:::step title="Find your own pixel and check you're assigned to it" label="Your part"
In TikTok Business Center, go to :ui[Assets › Pixels] and find the pixel your website uses.

![TikTok Business Center Pixels list showing one pixel owned by your business and one shared by another business](/images/guides/tiktok-pixels.png "Example only: your business, pixel names and IDs will be different.")

**Check who owns it.** The pixel must be **owned by your Business Center**. If it's been shared with you by another business (for example a record label, agency or partner), you can't share it with us. If your pixel only lives inside an ad account, ask us and we'll help you move it on a short call.

:::warning Being an Admin doesn't give you every pixel
Pixels must be **assigned to you as a user** before you can share them. Go to **Users**, click **View** next to your name and open **Assigned assets**. If your pixel isn't listed, click **Add accounts and assets** and give yourself access.
:::
:::
:::step title="Add us as a partner" label="Your part"
Click **Partners** in the left-hand menu, then **+ Add partner**. Enter our Business Center ID:

:::copy value="7398888478508941313" label="Lupe | TDS" caption="Business Center ID"
:::

When asked whether an agreement is in effect for this partner to buy media and manage ad campaigns, choose **No**. Leave **Share this Business Center's verification** unticked, then click **Next**.

![TikTok Add partner dialog with the partner ID entered and No selected](/images/guides/tiktok-add-partner.png "Example only: TikTok's labels and layout can vary slightly between accounts and browsers.")
:::
:::step title="Share your pixel with us" label="Your part"
On the **Share assets** screen, click **Pixels** and tick **only your pixel**. Under **Account permissions**, make sure **Edit pixels** is on, then click **Next** to finish.

![TikTok Share assets screen with one pixel ticked and Edit pixels switched on](/images/guides/tiktok-share-assets.png "Example only: TikTok's labels and layout can vary slightly between accounts and browsers.")

:::warning We only need the pixel
Don't share anything under **Advertiser accounts**, **Catalogs**, **Shops** or **Market Scope accounts**.
:::
:::
:::step title="Let us know you're done" label="Your part"
Contact your onboarding manager with the **name and ID** of the pixel you shared. TikTok doesn't always email us when you share it, so this is how we know to start.
:::
:::

## What happens next

Once you've finished, our implementation team will:

- Generate an Events API access token to connect this pixel to your server-side GTM container
- Check that advanced matching is on and that the right events are accepted
- Run test events to confirm browser and server events arrive with the correct consent signals and aren't double-counted
- Confirm with you when tracking is live

## Good to know

:::check You're always in control
You can see or remove our access at any time from the pixel's **Partners** tab, or remove us completely under **Partners** in the left-hand menu.
:::

:::note Why Edit pixels?
It's the permission that lets us work with the pixel in Events Manager, which is where test events and the server connection live.
:::

:::warning Seeing an error?
TikTok has to work across a huge range of devices, operating system versions and browsers, so glitches in Business Center are common and errors sometimes appear. If you see one, try clearing your cache or using a different browser. If something still isn't working, our onboarding team will resolve it with you.
:::

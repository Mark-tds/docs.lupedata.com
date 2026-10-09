---
title: Side by side
description: Browser pixels compared with a first-party setup on your own domain. No new recipients, no new types of data.
icon: compare
eyebrow: Lupe for Business Owners
---

## Browser pixels compared with first-party

| Question | Browser pixels today | First-party via data.yourbusiness.com |
| --- | --- | --- |
| Is consent enforced before data is sent? | :no[Not always] Depends on every app and tag being set up correctly | :yes[Yes, twice] In the browser, then again on the server |
| Who decides what leaves the site? | :no[Each supplier] Every app, plugin and pixel, based on its own code | :yes[Your business] Through logged consent preferences |
| Can we list exactly what each platform gets? | :no[Hard] Scripts change without notice | :yes[Simple] Every field is set in your server setup |
| Can IP and device details be removed? | :no[No] The browser sends them directly | :yes[Yes] Before anything is forwarded |
| Who owns the data and datasets? | :no[Often suppliers] Apps, agencies and plugins | :yes[Your business] |
| Cookies on the customer's device | :no[Third-party] Set by each vendor | :yes[First-party] From your own domain |
| Affected by ad blockers? | :no[Heavily] | :yes[Minimised] |
| Page weight | :no[Heavier] A script per vendor | :yes[Lighter] Vendor scripts move to the server |
| Who receives data? | Meta, Google, TikTok and others | The same platforms, with consented, enriched and correctly formatted data |

## Settings your business can decide

:::cards cols="2"
:::card title="Google Consent Mode for analytics (GA4)" icon="scale"
We suggest **Advanced** for Google Analytics. When a customer declines, analytics tags send cookieless pings with no identifiers, which Google uses to model activity it can no longer measure. No advertising data is sent. **Basic** sends nothing to Google Analytics until consent is given.
:::
:::card title="Manual exclusions" icon="shield"
Specific events, fields or platforms can be excluded where you request it, or chosen per environment.
:::
:::card title="Regional model" icon="globe"
Opt-in consent for every visitor, or opt-in for UK and EU customers with a US-style opt-out elsewhere (see [Compliance essentials](page:compliance-essentials)).
:::
:::card title="Retention" icon="clock"
How long consent logs are kept, and how long each ad account keeps event data. Both are set per account, so we can match your policy.
:::
:::

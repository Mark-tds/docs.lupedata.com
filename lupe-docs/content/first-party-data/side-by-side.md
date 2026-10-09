---
title: Side by side
description: The first-party approach improves each of the areas legal teams usually ask about. It adds no new recipients and no new types of data.
icon: compare
eyebrow: TDS × Lupe shared guide
---

## Browser pixels compared with first-party

| Question | Browser pixels today | First-party via data.artist.com |
| --- | --- | --- |
| Is consent enforced before data is sent? | :no[Not always] Depends on every tag being set up correctly | :yes[Yes, twice] In the browser, then again on the server |
| Who decides what leaves the site? | :no[Administrative challenge] Each vendor's script, based on the function of the code, app or pixel | :yes[The artist team] Through logged consent preferences |
| Can we list exactly what each platform gets? | :no[Hard] Scripts change without notice | :yes[Simple] Every field is set in the server setup |
| Can IP and device details be removed? | :no[No] The browser sends them directly | :yes[Yes] Before anything is forwarded |
| Who owns the datasets? | :no[3rd parties] | :yes[The artist's team] |
| Third-party cookies on the fan's device | :no[Deprecated] Third-party cookies set by each vendor | :yes[First-party] First-party cookies from the artist's domain |
| Affected by ad blockers? | :no[Heavily] | :yes[Minimised] |
| Who receives data? | Meta, Google, TikTok and others | The same platforms, with consented, enriched and correctly formatted data |

## Settings which can be decided by the team

:::cards cols="2"
:::card title="Google Consent Mode for analytics (GA4)" icon="scale"
We suggest **Advanced** for Google Analytics. When a fan declines, analytics tags send cookieless pings with no identifiers, which Google uses to model activity it can no longer measure. No advertising data is sent. **Basic** sends nothing to Google Analytics until consent is given.
:::
:::card title="Manual exclusions" icon="shield"
Specific events, fields or platforms can be excluded where requested, or chosen per environment.
:::
:::card title="Regional model" icon="globe"
Opt-in consent for every visitor, or opt-in for UK and EU fans with a US-style opt-out elsewhere (see [International frameworks](page:international-frameworks)).
:::
:::card title="Retention" icon="clock"
How long consent logs are kept, and how long each ad account keeps event data. Both are set per account, so we can match your policy.
:::
:::

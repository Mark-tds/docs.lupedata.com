---
title: Set up your Lupe account
sidebarTitle: Set up your Lupe account
description: Accept your invitation, log in, and add your first project in five steps. Your onboarding manager checks everything before it goes live.
icon: mail
eyebrow: Client onboarding guide
time: Under 10 minutes
---

Lupe accounts are currently accessed by invitation. Once your application for a Lupe account has been approved, we'll email you an invitation to set up your login.

:::cards cols="3"
:::card title="1. Accept your invitation" icon="mail" tone="violet"
Open the email from Lupe Portal and set your password.
:::
:::card title="2. Open your dashboard" icon="list" tone="violet"
See any projects already shared with you, or add a new one.
:::
:::card title="3. Add a project" icon="rocket" tone="mint"
Five short steps: details, domains, platforms, GTM and plan.
:::
:::

## 1. Accept your invitation

Look for an email from **Lupe Portal** (`noreply@lupedata.com`) with the subject **You have been invited to the Lupe Portal**. If you can't find it, check your spam or promotions folder.

<figure class="mock" aria-label="Example invitation email from Lupe Portal">
<div class="mock-bar"><span></span><span></span><span></span><em>Inbox</em></div>
<div class="mock-mail">
<div class="mock-from"><span class="mock-avatar">L</span><div><b>Lupe Portal</b> <small>noreply@lupedata.com</small><span>You have been invited to the Lupe Portal</span></div></div>
<div class="mock-mail-card">
<div class="mock-mail-head"><b>Lupe Portal</b><small>First-Party Data Systems</small></div>
<div class="mock-mail-body">
<p>You have been invited to the Lupe Portal by <b>Transparent Digital Services</b>.</p>
<p>Your role: <b>Admin</b></p>
<span class="mock-btn">Accept Invitation &amp; Set Up Your Account</span>
<p class="mock-small">This invitation link expires in <b>72 hours</b>.</p>
</div>
</div>
</div>
<figcaption>Example only. Your email shows the role you've been given.</figcaption>
</figure>

The email shows your role, for example **Admin**, and the button to accept. The link expires after **72 hours**. If it has expired, ask your onboarding manager to send a new one.

## 2. Set your password

Click **Accept Invitation & Set Up Your Account**. This takes you to Lupe, where you:

1. Set a password of at least 12 characters, and confirm it.
2. Read and accept the **Lupe Beta software & Data Processing Agreement**.
3. Click **Set password & continue**, then set up two-factor authentication with an authenticator app.

<figure class="mock mock-narrow" aria-label="Example Lupe set-password screen">
<div class="mock-login">
<div class="mock-brand"><img src="/images/lupe-mark.svg" alt=""><b>Lupe</b></div>
<small class="mock-tag">First-Party Data Systems</small>
<div class="mock-card">
<b>Welcome to Lupe</b>
<small>you@yourbusiness.com · Admin</small>
<label>Password</label><span class="mock-input">Min 12 characters</span>
<label>Confirm password</label><span class="mock-input"></span>
<span class="mock-check"><i></i>I accept the <u>Lupe Beta software &amp; Data Processing Agreement</u>.</span>
<span class="mock-btn mock-btn-wide">Set password &amp; continue</span>
</div>
</div>
<figcaption>Example only.</figcaption>
</figure>

:::tip Keep your login safe
Use a password manager, and keep your two-factor app on a device you'll have with you. Each person on your team should have their own invitation, rather than sharing a login.
:::

## 3. Your project dashboard

Once you're logged in, you'll see your **Projects** dashboard.

- **No projects yet?** That's normal for a new account. Click **+ Add Project** to create one.
- **Projects already listed?** Your Lupe onboarding manager may already have given you access to some. Click a project to see its domains, platforms and containers.

<figure class="mock" aria-label="Example Lupe projects dashboard">
<div class="mock-app">
<div class="mock-side"><div class="mock-brand sm"><img src="/images/lupe-mark.svg" alt=""><b>Lupe</b><span class="mock-beta">beta</span></div><span class="on">Projects</span><span>Project Stats</span><span>Traffic Sources</span><span>GTM Web Containers</span><span>GTM Server Containers</span><span>Stape Containers</span></div>
<div class="mock-main">
<div class="mock-main-head"><b>Projects</b><span class="mock-btn">+ Add Project</span></div>
<div class="mock-table">
<div class="mock-row mock-th"><span>Project</span><span>Type</span><span>Status</span></div>
<div class="mock-row"><span><b>Your Business</b><small>Domains 2 · Platforms 4 · GTM 1</small></span><span><i class="mock-pill">E-commerce</i></span><span><i class="mock-pill amber">Setup in progress</i></span></div>
<div class="mock-row"><span><b>Your Brand</b><small>Domains 1 · Platforms 3 · GTM 1</small></span><span><i class="mock-pill">Artist</i></span><span><i class="mock-pill green">Live</i></span></div>
</div>
</div>
</div>
<figcaption>Example only. Your dashboard may be empty, or show projects you've been given access to.</figcaption>
</figure>

## 4. Add a project

Click **+ Add Project**. Adding a project takes five steps, shown on the left of the screen. You can go back to any step before you submit.

:::steps
:::step title="Project info" label="Your part"
Enter the **project name**: the name your business, brand or artist is most commonly known by. Then add the **contact** who looks after the project, and the **address** of the business that represents it. Fields marked with a red star are required.
:::
:::step title="Domains" label="Your part"
Add every website and subdomain that belongs to this project. Have a think about everything you run, for example:

- Your main website (`yourdomain.com`)
- Stores (`store.yourdomain.com`)
- Landing pages and campaign sites (`try.yourdomain.com`)
- Blogs, games and other experiences
- Web apps

For each one, choose the **site type** (for example Shopify or WordPress), an estimate of **monthly visitors**, the **registrar** and the **name server**, and a **contact person** for access or changes. Use **Use project contact** to copy the contact from step 1.

- **Registrar:** where your domain is registered, meaning where you bought it and renew it.
- **Name server:** where your domain's DNS records are managed. This is often the same company as your registrar or host, but not always.

:::info Why do we need to know about DNS?
Your first-party endpoint, for example `data.yourdomain.com`, runs on your own domain. To put it live, a DNS record has to be added where your DNS is managed. Knowing your name server, and who to contact for DNS access, means we can tell you or your team exactly which record to add.
:::
:::
:::step title="Platforms" label="Your part"
Add the analytics, consent and ad platforms you use, such as Meta, Google Ads, Google Analytics 4 and TikTok. For each one, enter the IDs you have (for example a Meta **Pixel ID**), the **owner** of the account, and which domains it **applies to**:

- **All domains:** covers every domain in the project, including any added later.
- **Selected domains:** for platforms that only cover some sites. For example, some businesses keep separate analytics for each domain, while others have one analytics property for all of them.

Fill these in to the best of your knowledge. Think about every platform you run, and whether you'd like any of them set up for you. **Don't know where to find a pixel ID, or how to generate a Conversions API key?** Leave it blank and ask your Lupe onboarding manager. Everything you enter is checked by an onboarding manager.
:::
:::step title="GTM" label="Your part"
If you already use **Google Tag Manager** and have admin access to your containers, add your **web container IDs** (they start `GTM-`), and any **server containers** you already have.

This step is optional. If you're not familiar with Google Tag Manager, or you're not sure which containers you use, skip it and ask your onboarding manager.
:::
:::step title="Subscription" label="Your part"
Choose an estimate of **monthly visitors** for each domain. Lupe recommends a plan based on these numbers, because traffic sets the demand on your data server. Leave a domain blank if you're not sure.

Add anyone else who should get **setup status updates** by email. The project contact is added automatically.

Then choose how to submit:

- **Submit without payment:** for a brand new project that you'd like an onboarding manager to check over first.
- **Submit & continue to payment:** once your onboarding manager has given you the green light and you're ready to go live.
:::
:::

## What happens next

Your onboarding manager reviews your project, checks the details you've entered, and tells you which [platform access guides](page:all-platforms) apply to you. From then on, your Lupe account gives you an overview of your platforms, accounts, tokens and containers in one place.

:::note Questions or problems?
If anything doesn't work as described, or you're not sure what to enter, contact your onboarding manager or email [contact@lupedata.com](mailto:contact@lupedata.com).
:::

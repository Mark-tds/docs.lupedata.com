# Lupe Docs

Source for **docs.lupedata.com**: client onboarding, platform access and first-party data guides for Lupe.

Pages are plain Markdown files in `content/`. A small build script turns them into a static site with a top bar, section tabs, sidebar navigation, "On this page" contents, search (⌘K / Ctrl K), dark mode, step progress tracking, copy buttons for partner IDs, an interactive data-flow explorer and a review checklist. The only dependency is [`marked`](https://marked.js.org).

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000, rebuilds and reloads as you edit
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/` (clean URLs, one HTML file per page, `sitemap.xml`, `404.html`) |
| `npm run build:preview` | Builds `preview/lupe-docs-preview.html`, a single self-contained file you can double-click or email for review |
| `npm run check` | Fails if a page listed in `docs.config.json` is missing or a `page:` link is broken |

## Project layout

```
docs.config.json        Site name, top links, section tabs and sidebar order
content/                One Markdown file per page (folder = URL section)
public/                 Copied as-is: images, favicon, CNAME, robots.txt
src/site.css            Theme and components (Lupe violet + mint, light and dark)
src/site.js             Search, theme toggle, routing, steps, flow, review checklist
scripts/build.mjs       Static site builder
scripts/markdown.mjs    Markdown + component syntax
scripts/dev.mjs         Local dev server with live reload
```

## Adding a page

1. Create `content/<section>/<file-name>.md`. File names must be unique across the site, because they are also the page ID used in links.
2. Add `"<section>/<file-name>"` to a group in `docs.config.json`.
3. Run `npm run check`.

Frontmatter:

```yaml
---
title: Meta dataset access          # page heading and browser title
sidebarTitle: Meta dataset access   # optional shorter label for the sidebar
description: Three quick steps...   # subtitle + search + SEO description
icon: database                      # sidebar icon (see scripts/icons.mjs)
eyebrow: Client onboarding guide    # optional chip under the title
time: About 5 minutes               # optional chip
audience: Legal & compliance teams  # optional chip
---
```

## Writing components

Link to another page with `[text](page:meta-dataset-access)`.

```md
:::note Optional title          (also: info, tip, warning, check)
Callout text in **Markdown**.
:::

:::steps
:::step title="Find your own dataset" label="Your part"
Step content. Steps labelled "Your part" get a "Mark as done" button and a progress bar.
:::
:::

:::copy value="300861977272185" label="Lupe | TDS" caption="Partner business ID"
:::

:::cards cols="3"
:::card title="Meta dataset access" href="page:meta-dataset-access" icon="database"
Card text.
:::
:::

:::accordion title="Need to create a new dataset?"
Hidden until opened.
:::

![Alt text](/images/guides/meta-assign-partner.png "Caption shown under the image")
```

Inline shortcodes: `:yes[Full control]`, `:no[No]` (access badges) and `:ui[Settings › Users]` (UI paths).

The first-party data section also uses `:::flow` / `:::flowstep` (interactive step explorer) and `:::review` / `:::review-item` (checklist with saved answers and a "Copy summary" button). See `content/first-party-data/` for examples.

## Deploying

The output in `dist/` is plain static files, so any static host works.

**DigitalOcean App Platform (recommended, alongside scanner.lupedata.com).** Edit the repo name in `.do/app.yaml` if needed, then `doctl apps create --spec .do/app.yaml`, or create a Static Site in the dashboard with build command `npm ci && npm run build` and output directory `dist`. Add `docs.lupedata.com` as a custom domain and create the CNAME record it gives you.

**GitHub Pages.** `.github/workflows/deploy-pages.yml` builds and deploys on every push to `main`. It works on the free `<user>.github.io/<repo>/` address (the build reads `BASE_PATH`) and on a custom domain. Turn it on under Settings › Pages › Source: GitHub Actions. `public/CNAME` already contains `docs.lupedata.com`.

Either way, `.github/workflows/check.yml` runs `npm run check` on pull requests.

## Source documents

The current pages are adapted from:

- Lupe – Shopify Access & Stape Setup (v2)
- Lupe – Meta Dataset Access (v6)
- Lupe – TikTok Pixel Access (v1)
- TDS × Lupe – Artist First-Party Data – A Shared Guide

UI illustrations in `public/images/guides/` were cropped from those PDFs.

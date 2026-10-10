// Builds the docs site.
//   node scripts/build.mjs           → dist/  (multi-page static site with clean URLs, for hosting)
//   node scripts/build.mjs --single  → preview/lupe-docs-preview.html (one self-contained file you can double-click)
//   node scripts/build.mjs --check   → validate config, pages and internal links without writing anything
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRenderer, parseFrontmatter, toPlainText, esc } from './markdown.mjs';
import { icon, LOGO_MARK } from './icons.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const SINGLE = args.has('--single');
const CHECK = args.has('--check');

export function build({ single = SINGLE, check = CHECK, quiet = false } = {}) {
  const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs.config.json'), 'utf8'));
  const errors = [];

  // ---- Collect pages in navigation order ----
  const pages = [];
  config.tabs.forEach((tab, ti) => {
    tab.groups.forEach((group) => {
      group.pages.forEach((entry) => {
        if (typeof entry !== 'string') return; // { ref } entries are cross-links to a page owned by another tab
        const slug = entry;
        const file = path.join(ROOT, 'content', `${slug}.md`);
        if (!fs.existsSync(file)) {
          errors.push(`Missing page: content/${slug}.md (listed in docs.config.json)`);
          return;
        }
        const { data, body } = parseFrontmatter(fs.readFileSync(file, 'utf8'));
        const id = slug === 'index' ? 'home' : slug.split('/').pop();
        if (pages.some((p) => p.id === id)) errors.push(`Duplicate page id "${id}" (${slug}). File names must be unique.`);
        pages.push({ slug, id, tab: ti, tabLabel: tab.label, group: group.label, data, body, title: data.title || id });
      });
    });
  });
  const byId = new Map(pages.map((p) => [p.id, p]));
  const bySlug = new Map(pages.map((p) => [p.slug, p]));
  const findPage = (ref) => byId.get(ref) || bySlug.get(ref);
  for (const tab of config.tabs)
    for (const g of tab.groups)
      for (const e of g.pages)
        if (typeof e !== 'string' && !bySlug.get(e.ref)) errors.push(`Sidebar link to unknown page "${e.ref}" in tab "${tab.label}"`);

  // BASE_PATH lets the site live in a sub-folder, e.g. https://user.github.io/repo-name/ → BASE_PATH=/repo-name
  const BASE = single ? '' : (process.env.BASE_PATH || '').replace(/\/+$/, '');
  const pageUrl = (p) => (single ? `#${p.id}` : p.slug === 'index' ? `${BASE}/` : `${BASE}/${p.slug}/`);

  // ---- Link + image resolution ----
  const imageCache = new Map();
  const resolveImage = (src) => {
    if (/^(https?:|data:)/.test(src)) return src;
    if (!single) return src.startsWith('/') ? BASE + src : src;
    if (imageCache.has(src)) return imageCache.get(src);
    const file = path.join(ROOT, 'public', src.replace(/^\//, ''));
    if (!fs.existsSync(file)) {
      errors.push(`Missing image: ${src}`);
      return src;
    }
    const ext = path.extname(file).slice(1).replace('jpg', 'jpeg').replace('svg', 'svg+xml');
    const uri = `data:image/${ext};base64,${fs.readFileSync(file).toString('base64')}`;
    imageCache.set(src, uri);
    return uri;
  };
  let currentPage = null;
  const resolveLink = (href) => {
    if (!href.startsWith('page:')) return href;
    const [ref, hash] = href.slice(5).split('#');
    const target = findPage(ref);
    if (!target) {
      errors.push(`Broken link "${href}" in ${currentPage?.slug}`);
      return '#';
    }
    if (single) return `#${target.id}`;
    return pageUrl(target) + (hash ? `#${hash}` : '');
  };
  // Video files are only linked on the hosted site; the single-file preview shows the poster instead.
  const resolveMedia = (src) => {
    if (!fs.existsSync(path.join(ROOT, 'public', src.replace(/^\//, '')))) errors.push(`Missing media file: ${src}`);
    return single ? null : src.startsWith('/') ? BASE + src : src;
  };
  const render = createRenderer({ resolveLink, resolveImage, resolveMedia });

  for (const p of pages) {
    currentPage = p;
    const out = render(p.body, p.id);
    p.html = out.html;
    p.toc = out.toc;
  }
  // Images referenced from Markdown must exist in public/
  for (const p of pages) {
    for (const m of p.body.matchAll(/!\[[^\]]*\]\((\/[^)\s]+)/g)) {
      if (!fs.existsSync(path.join(ROOT, 'public', m[1]))) errors.push(`Missing image ${m[1]} in ${p.slug}`);
    }
  }

  if (errors.length) {
    console.error(`\n✖ ${errors.length} problem(s):\n  - ${errors.join('\n  - ')}\n`);
    process.exitCode = 1;
  }
  if (check) {
    if (!errors.length) console.log(`✓ ${pages.length} pages OK, no broken links.`);
    return;
  }

  // ---- Search index: one entry per page section ----
  const search = [];
  for (const p of pages) {
    const parts = p.html.split(/(?=<h[23] id=")/);
    parts.forEach((part, i) => {
      const hm = /^<h[23] id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/.exec(part);
      const heading = hm ? toPlainText(hm[2].replace(/<a class="anchor"[\s\S]*?<\/a>/, '')) : '';
      const text = toPlainText(hm ? part.slice(hm[0].length) : part).slice(0, 600);
      if (i === 0 && !text && !p.data.description) return;
      search.push({ p: p.id, t: p.title, h: heading, a: hm ? hm[1] : '', x: i === 0 ? `${p.data.description || ''} ${text}` : text, g: p.group });
    });
  }

  // ---- Templates ----
  const css = fs.readFileSync(path.join(ROOT, 'src', 'site.css'), 'utf8');
  const js = fs.readFileSync(path.join(ROOT, 'src', 'site.js'), 'utf8');

  const tabsHtml = (activeTab) =>
    config.tabs
      .map((t, i) => {
        const first = pages.find((p) => p.tab === i);
        return `<a class="tab${i === activeTab ? ' active' : ''}" data-tab-link="${i}" href="${first ? pageUrl(first) : '#'}">${esc(t.label)}</a>`;
      })
      .join('');

  const navMark = (p) =>
    p.data.logo
      ? `<img class="nav-logo" src="${esc(resolveImage(`/images/logos/${p.data.logo}.svg`))}" alt="" aria-hidden="true">`
      : p.data.icon
        ? icon(p.data.icon, 'icon nav-icon')
        : '';
  const sidebarHtml = (activeTab, activeId) =>
    config.tabs
      .map(
        (t, ti) =>
          `<div class="sidebar-tab" data-sidebar-tab="${ti}"${ti === activeTab ? '' : ' hidden'}>` +
          `<p class="sidebar-tab-label">${esc(t.label)}</p>` +
          t.groups
            .map(
              (g) =>
                `<div class="nav-group"><p class="nav-group-label">${esc(g.label)}</p><ul>` +
                g.pages
                  .map((entry) => {
                    if (typeof entry !== 'string') {
                      const p = bySlug.get(entry.ref);
                      if (!p) return '';
                      return `<li><a class="nav-link nav-ref" href="${pageUrl(p)}" title="Opens in ${esc(p.tabLabel)}">${navMark(p)}<span>${esc(entry.title || p.data.sidebarTitle || p.title)}</span>${icon('arrow-right', 'icon icon-xs nav-ref-arrow')}</a></li>`;
                    }
                    const p = bySlug.get(entry);
                    if (!p) return '';
                    return `<li><a class="nav-link${p.id === activeId ? ' active' : ''}" data-nav="${p.id}" href="${pageUrl(p)}">${navMark(p)}<span>${esc(p.data.sidebarTitle || p.title)}</span></a></li>`;
                  })
                  .join('') +
                '</ul></div>'
            )
            .join('') +
          '</div>'
      )
      .join('');

  const articleHtml = (p, visible) => {
    const idx = pages.indexOf(p);
    // Previous/next stay within the page's own tab
    const prev = pages[idx - 1] && pages[idx - 1].tab === p.tab ? pages[idx - 1] : null;
    const next = pages[idx + 1] && pages[idx + 1].tab === p.tab ? pages[idx + 1] : null;
    const home = p.data.layout === 'home';
    const wide = home || p.data.layout === 'story';
    const toc = p.toc.filter((t) => t.depth <= 3);
    const meta = [
      p.data.eyebrow ? `<span class="meta-chip meta-accent">${esc(p.data.eyebrow)}</span>` : '',
      p.data.time ? `<span class="meta-chip">${icon('clock', 'icon icon-xs')}${esc(p.data.time)}</span>` : '',
      p.data.audience ? `<span class="meta-chip">${icon('users', 'icon icon-xs')}${esc(p.data.audience)}</span>` : ''
    ].join('');
    return `<article class="page${home ? ' page-home' : ''}${wide ? ' page-wide' : ''}" data-page="${p.id}" data-tab="${p.tab}" data-title="${esc(p.title)}"${visible ? '' : ' hidden'}>
<div class="page-grid${toc.length && !wide ? '' : ' no-toc'}">
<div class="page-main">
<header class="page-header">
<p class="eyebrow">${esc(p.group)}</p>
<h1>${p.data.logo ? `<span class="page-logo"><img src="${esc(resolveImage(`/images/logos/${p.data.logo}.svg`))}" alt="" aria-hidden="true"></span>` : ''}${esc(p.title)}</h1>
${p.data.description ? `<p class="lede">${esc(p.data.description)}</p>` : ''}
${meta ? `<div class="page-meta">${meta}<div class="progress" hidden><span class="progress-track"><span class="progress-bar"></span></span><span class="progress-text"></span></div></div>` : '<div class="page-meta" hidden><div class="progress" hidden><span class="progress-track"><span class="progress-bar"></span></span><span class="progress-text"></span></div></div>'}
</header>
<div class="prose">${p.html}</div>
<nav class="pager" aria-label="Previous and next pages">
${prev ? `<a class="pager-link prev" href="${pageUrl(prev)}"><span class="pager-dir">${icon('arrow-left', 'icon icon-xs')}Previous</span><span class="pager-title">${esc(prev.title)}</span></a>` : '<span></span>'}
${next ? `<a class="pager-link next" href="${pageUrl(next)}"><span class="pager-dir">Next${icon('arrow-right', 'icon icon-xs')}</span><span class="pager-title">${esc(next.title)}</span></a>` : '<span></span>'}
</nav>
<footer class="page-footer"><p>Questions? Contact your onboarding manager or email <a href="mailto:${esc(config.supportEmail)}">${esc(config.supportEmail)}</a>.</p><p class="muted">${esc(config.footer)}</p></footer>
</div>
${toc.length && !wide ? `<aside class="toc" aria-label="On this page"><p class="toc-label">On this page</p><ul>${toc.map((t) => `<li class="toc-d${t.depth}"><a href="#${t.id}" data-toc="${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></aside>` : ''}
</div>
</article>`;
  };

  const shell = ({ title, description, activeTab, activeId, articles, assets }) => `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta name="theme-color" content="#0f0d18">
<link rel="icon" href="${single ? 'data:image/svg+xml,' + encodeURIComponent(fs.readFileSync(path.join(ROOT, 'public', 'favicon.svg'), 'utf8')) : BASE + '/favicon.svg'}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@500;600;700&display=swap">
<script>try{var t=localStorage.getItem('lupe-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
${assets.css}
</head>
<body data-mode="${single ? 'single' : 'multi'}">
<a class="skip-link" href="#content">Skip to content</a>
<header class="topbar">
<div class="topbar-inner">
<button type="button" class="icon-btn nav-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="sidebar">${icon('menu')}</button>
<a class="logo" href="${pageUrl(pages[0])}" aria-label="Lupe Docs home">${LOGO_MARK}<span class="logo-word">Lupe</span><span class="logo-docs">Docs</span></a>
<button type="button" class="search-trigger" data-search-open>${icon('search', 'icon icon-sm')}<span class="search-trigger-text">Search the docs</span><kbd>⌘K</kbd></button>
<nav class="top-links" aria-label="External links">${config.topLinks.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</nav>
<button type="button" class="icon-btn theme-toggle" aria-label="Toggle dark mode">${icon('sun', 'icon icon-sun')}${icon('moon', 'icon icon-moon')}</button>
<a class="btn btn-primary cta" href="${esc(config.cta.href)}">${esc(config.cta.label)}</a>
</div>
<nav class="tabs" aria-label="Sections"><div class="tabs-inner">${tabsHtml(activeTab)}</div></nav>
</header>
<div class="layout">
<div class="sidebar-scrim" data-nav-close></div>
<aside class="sidebar" id="sidebar" aria-label="Documentation">${sidebarHtml(activeTab, activeId)}</aside>
<main id="content" class="main" tabindex="-1">
${articles}
</main>
</div>
<div class="search-modal" role="dialog" aria-modal="true" aria-label="Search" hidden>
<div class="search-backdrop" data-search-close></div>
<div class="search-panel">
<div class="search-input-row">${icon('search', 'icon icon-sm')}<input id="search-input" type="text" placeholder="Search guides, steps and settings" autocomplete="off" spellcheck="false" aria-label="Search the docs"><kbd data-search-close>Esc</kbd></div>
<ul class="search-results" role="listbox"></ul>
<p class="search-empty" hidden>No results. Try “dataset”, “collaborator” or “consent”.</p>
</div>
</div>
<div class="toast" role="status" aria-live="polite" hidden></div>
${assets.js}
</body>
</html>
`;

  const searchJson = JSON.stringify({ pages: Object.fromEntries(pages.map((p) => [p.id, pageUrl(p)])), entries: search });

  if (single) {
    const outDir = path.join(ROOT, 'preview');
    fs.mkdirSync(outDir, { recursive: true });
    const html = shell({
      title: config.name,
      description: config.description,
      activeTab: 0,
      activeId: pages[0].id,
      articles: pages.map((p, i) => articleHtml(p, i === 0)).join('\n'),
      assets: {
        css: `<style>\n${css}\n</style>`,
        js: `<script>window.__LUPE_SINGLE__=true;window.__LUPE_SEARCH__=${searchJson};</script>\n<script>\n${js}\n</script>`
      }
    });
    const file = path.join(outDir, 'lupe-docs-preview.html');
    fs.writeFileSync(file, html);
    if (!quiet) console.log(`✓ Single-file preview: ${path.relative(ROOT, file)} (${(html.length / 1024).toFixed(0)} KB)`);
    return file;
  }

  const dist = path.join(ROOT, 'dist');
  fs.rmSync(dist, { recursive: true, force: true, maxRetries: 5, retryDelay: 50 });
  fs.cpSync(path.join(ROOT, 'public'), dist, { recursive: true });
  fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(dist, 'assets', 'site.css'), css);
  fs.writeFileSync(path.join(dist, 'assets', 'site.js'), js);
  fs.writeFileSync(path.join(dist, 'assets', 'search-index.js'), `window.__LUPE_SEARCH__=${searchJson};`);
  const assets = {
    css: `<link rel="stylesheet" href="${BASE}/assets/site.css">`,
    js: `<script src="${BASE}/assets/search-index.js" defer></script>\n<script src="${BASE}/assets/site.js" defer></script>`
  };
  for (const p of pages) {
    const html = shell({
      title: p.slug === 'index' ? config.name : `${p.title} · ${config.name}`,
      description: p.data.description || config.description,
      activeTab: p.tab,
      activeId: p.id,
      articles: articleHtml(p, true),
      assets
    });
    const out = p.slug === 'index' ? path.join(dist, 'index.html') : path.join(dist, p.slug, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
  }
  // 404 page
  const notFound = shell({
    title: `Page not found · ${config.name}`,
    description: config.description,
    activeTab: 0,
    activeId: '',
    articles: `<article class="page" data-page="404" data-tab="0" data-title="Page not found"><div class="page-grid no-toc"><div class="page-main"><header class="page-header"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lede">This page may have moved. Use search, or head back to the start.</p></header><p><a class="btn btn-primary" href="${BASE}/">Go to Lupe Docs home</a></p></div></div></article>`,
    assets
  });
  fs.writeFileSync(path.join(dist, '404.html'), notFound);
  // sitemap
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${config.siteUrl}${pageUrl(p)}</loc></url>`).join('\n')}\n</urlset>\n`
  );
  if (!quiet) console.log(`✓ Built ${pages.length} pages into dist/`);
  return dist;
}

if (import.meta.url === `file://${process.argv[1]}`) build();

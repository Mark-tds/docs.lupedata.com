// Markdown → HTML with Lupe docs components.
//
// Components use container blocks:
//
//   :::note Optional title          callouts: note, info, tip, warning, check
//   Body in **Markdown**.
//   :::
//
//   :::steps                        numbered steps (progress is remembered per browser)
//   :::step title="Find your pixel" label="Your part"
//   ...
//   :::
//   :::
//
//   :::cards cols="2"   / :::card title="" href="page:meta-dataset-access" icon="database" tone="mint"
//   :::copy value="300861977272185" label="Lupe | TDS" caption="Business ID"
//   :::accordion title="Need to create a new dataset?"
//   :::flow  / :::flowstep n="1" title="" summary=""   (interactive data-flow explorer)
//   :::review / :::review-item title=""                 (interactive review checklist)
//
// Inline shortcodes: :yes[Edit pixels]  :no[No]  :ui[Settings › Users]  :part[Your part]
// Page links: [text](page:meta-dataset-access)
import { Marked } from 'marked';
import { icon } from './icons.mjs';

export function slugify(s) {
  return String(s)
    .replace(/<[^>]+>/g, '')
    .toLowerCase()
    .replace(/&#?[a-z0-9]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const decode = (s) =>
  String(s ?? '').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

export const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function parseFrontmatter(src) {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(src);
  if (!m) return { data: {}, body: src };
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim().replace(/^["']|["']$/g, '');
    if (v === 'true') v = true;
    else if (v === 'false') v = false;
    data[kv[1]] = v;
  }
  return { data, body: src.slice(m[0].length) };
}

function parseAttrs(rest) {
  const attrs = {};
  let found = false;
  rest.replace(/([\w-]+)="([^"]*)"/g, (_, k, v) => {
    attrs[k] = v;
    found = true;
  });
  if (!found && rest.trim()) attrs.title = rest.trim();
  return attrs;
}

// Line-based container parser → tree of { type:'md', text } | { type:'block', name, attrs, children }
function parseBlocks(src) {
  const root = { children: [] };
  const stack = [root];
  let buf = [];
  let inFence = false;
  const flush = () => {
    if (buf.length) stack.at(-1).children.push({ type: 'md', text: buf.join('\n') });
    buf = [];
  };
  for (const line of src.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (!inFence) {
      const open = /^\s*:::([a-z][\w-]*)(.*)$/.exec(line);
      if (open) {
        flush();
        const node = { type: 'block', name: open[1], attrs: parseAttrs(open[2]), children: [] };
        stack.at(-1).children.push(node);
        stack.push(node);
        continue;
      }
      if (/^\s*:::\s*$/.test(line)) {
        flush();
        if (stack.length > 1) stack.pop();
        continue;
      }
    }
    buf.push(line);
  }
  flush();
  return root.children;
}

const CALLOUT_ICONS = { note: 'info', info: 'info', tip: 'lightbulb', warning: 'warning', check: 'check-circle' };

export function createRenderer({ resolveLink, resolveImage, resolveMedia }) {
  let ctx = null; // per-page state: { toc, ids, pageId }

  const uniqueId = (base) => {
    let id = base || 'section';
    let n = 2;
    while (ctx.ids.has(id)) id = `${base}-${n++}`;
    ctx.ids.add(id);
    return id;
  };

  const marked = new Marked({ gfm: true });
  marked.use({
    extensions: [
      {
        name: 'shortcode',
        level: 'inline',
        start(src) {
          const m = src.match(/:(yes|no|ui|part|logo)\[/);
          return m ? m.index : undefined;
        },
        tokenizer(src) {
          const m = /^:(yes|no|ui|part|logo)\[([^\]]+)\]/.exec(src);
          if (m) return { type: 'shortcode', raw: m[0], kind: m[1], text: m[2], tokens: this.lexer.inlineTokens(m[2]) };
        },
        renderer(t) {
          if (t.kind === 'logo') return logoImg(t.text, 'inline-logo');
          const inner = this.parser.parseInline(t.tokens);
          if (t.kind === 'yes') return `<span class="badge badge-yes">${icon('check', 'icon icon-xs')}${inner}</span>`;
          if (t.kind === 'no') return `<span class="badge badge-no">${inner}</span>`;
          if (t.kind === 'part') return `<span class="part-chip">${inner}</span>`;
          return `<span class="ui-path">${inner}</span>`;
        }
      }
    ],
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        const id = uniqueId(slugify(html));
        if (depth === 2 || depth === 3) ctx.toc.push({ depth, id, text: decode(html.replace(/<[^>]+>/g, '')) });
        return `<h${depth} id="${id}" class="anchor-heading"><a class="anchor" href="#${id}" aria-label="Link to this section">#</a>${html}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const r = resolveLink(href);
        const ext = /^https?:/.test(r);
        return `<a href="${esc(r)}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' target="_blank" rel="noopener"' : ''}>${text}${ext ? icon('external', 'icon icon-xs ext') : ''}</a>`;
      },
      image({ href, title, text }) {
        return `<figure class="figure"><div class="figure-frame"><img src="${esc(resolveImage(href))}" alt="${esc(decode(text))}" loading="lazy"></div>${title ? `<figcaption>${esc(decode(title))}</figcaption>` : ''}</figure>`;
      },
      table(token) {
        // Default table output, wrapped so wide tables scroll inside their own box.
        const head = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join('');
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`)
          .join('');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      }
    }
  });

  const md = (text) => marked.parse(text);
  // Platform logos live in public/images/logos/<slug>.svg
  function logoImg(slug, cls) {
    return `<img class="${cls}" src="${esc(resolveImage(`/images/logos/${slug}.svg`))}" alt="" aria-hidden="true">`;
  }

  const renderNodes = (nodes) => nodes.map(renderNode).join('');

  function renderNode(node) {
    if (node.type === 'md') return md(node.text);
    const a = node.attrs;
    const inner = () => renderNodes(node.children);
    switch (node.name) {
      case 'note':
      case 'info':
      case 'tip':
      case 'warning':
      case 'check':
        return `<div class="callout callout-${node.name}"><div class="callout-icon">${icon(CALLOUT_ICONS[node.name])}</div><div class="callout-body">${a.title ? `<p class="callout-title">${esc(a.title)}</p>` : ''}${inner()}</div></div>`;
      case 'steps':
        return `<ol class="steps" data-steps="${esc(ctx.pageId)}">${inner()}</ol>`;
      case 'step': {
        const id = uniqueId(slugify(a.title));
        ctx.toc.push({ depth: 3, id, text: a.title });
        const yours = /your/i.test(a.label || '');
        return `<li class="step${yours ? ' step-yours' : ''}" data-step="${id}"><div class="step-marker"><span class="step-num"></span>${icon('check', 'icon step-tick')}</div><div class="step-body">${a.label ? `<span class="step-label">${esc(a.label)}</span>` : ''}<h3 id="${id}" class="step-title anchor-heading">${esc(a.title)}</h3>${inner()}${yours ? `<button type="button" class="step-done" aria-pressed="false">${icon('check', 'icon icon-xs')}<span>Mark as done</span></button>` : ''}</div></li>`;
      }
      case 'cards':
        return `<div class="cards cols-${esc(a.cols || 2)}">${inner()}</div>`;
      case 'card': {
        const tag = a.href ? 'a' : 'div';
        const href = a.href ? ` href="${esc(resolveLink(a.href))}"` : '';
        return `<${tag} class="card${a.tone ? ` tone-${esc(a.tone)}` : ''}${a.href ? ' card-link' : ''}"${href}>${a.logo ? `<span class="card-logo">${logoImg(a.logo, 'logo-img')}</span>` : a.icon ? `<span class="card-icon">${icon(a.icon)}</span>` : ''}${a.title ? `<span class="card-title">${esc(a.title)}${a.href ? icon('arrow-right', 'icon icon-xs card-arrow') : ''}</span>` : ''}<div class="card-body">${inner()}</div></${tag}>`;
      }
      case 'copy':
        return `<div class="copy-id"><div class="copy-text">${a.caption ? `<span class="copy-caption">${esc(a.caption)}</span>` : ''}<code class="copy-value">${esc(a.value)}</code>${a.label ? `<span class="copy-label">${esc(a.label)}</span>` : ''}</div><button type="button" class="copy-btn" data-copy="${esc(a.value)}">${icon('copy', 'icon icon-xs')}<span>Copy</span></button></div>`;
      case 'video': {
        const poster = a.poster ? resolveImage(a.poster) : '';
        const src = resolveMedia ? resolveMedia(a.src) : null;
        const cap = a.caption ? `<figcaption>${esc(a.caption)}</figcaption>` : '';
        if (!src)
          return `<figure class="video">${poster ? `<img src="${esc(poster)}" alt="${esc(a.title || 'Video still')}">` : ''}<figcaption>${esc(a.caption || '')} The video plays on the live docs site.</figcaption></figure>`;
        return `<figure class="video"><video controls playsinline preload="metadata"${poster ? ` poster="${esc(poster)}"` : ''} aria-label="${esc(a.title || 'Video')}"><source src="${esc(src)}" type="video/mp4"></video>${cap}</figure>`;
      }
      case 'estimator':
        return `<form class="estimator" data-estimator novalidate>
<div class="est-inputs">
<label class="est-field" for="est-spend"><span>Monthly ad spend (£)</span><input id="est-spend" name="spend" type="number" min="0" step="500" value="${esc(a.spend || '20000')}" inputmode="numeric"></label>
<label class="est-field" for="est-roas"><span>Current return on ad spend (ROAS)</span><input id="est-roas" name="roas" type="number" min="0" step="0.1" value="${esc(a.roas || '3')}" inputmode="decimal"></label>
<label class="est-field" for="est-margin"><span>Gross margin on sales (%)</span><input id="est-margin" name="margin" type="number" min="0" max="100" step="1" value="${esc(a.margin || '50')}" inputmode="numeric"></label>
<label class="est-field est-range" for="est-waste"><span>Spend working on incomplete data <output data-out="waste"></output></span><input id="est-waste" name="waste" type="range" min="0" max="60" step="5" value="${esc(a.waste || '30')}"></label>
<label class="est-field est-range" for="est-lift"><span>Improvement you expect from better signal <output data-out="lift"></output></span><input id="est-lift" name="lift" type="range" min="0" max="40" step="1" value="${esc(a.lift || '10')}"></label>
</div>
<div class="est-results" aria-live="polite">
<div class="est-stat"><span class="est-label">Spend at risk each year</span><strong data-out="risk">–</strong><small>Ad spend optimising on incomplete or unconsented signal</small></div>
<div class="est-stat"><span class="est-label">Extra revenue at the same spend</span><strong data-out="revenue">–</strong><small>Per year, if ROAS improves by your chosen amount</small></div>
<div class="est-stat est-key"><span class="est-label">Extra gross profit</span><strong data-out="profit">–</strong><small>Per year, after your gross margin</small></div>
</div>
<p class="est-note">Illustrative only. The figures come from the numbers you enter, not from your accounts. Results vary by campaign, audience and consent rate.</p>
</form>`;
      case 'accordion':
        return `<details class="accordion"${a.open ? ' open' : ''}><summary>${esc(a.title)}</summary><div class="accordion-body">${inner()}</div></details>`;
      case 'flow': {
        const steps = node.children.filter((c) => c.type === 'block' && c.name === 'flowstep');
        const nav = steps
          .map(
            (s, i) =>
              `<button type="button" class="flow-node${s.attrs.kind ? ` kind-${esc(s.attrs.kind)}` : ''}" role="tab" aria-selected="${i === 0}" aria-controls="flow-${esc(s.attrs.n)}" data-flow="${esc(s.attrs.n)}"><span class="flow-n">${esc(s.attrs.n)}</span><span class="flow-text"><strong>${esc(s.attrs.title)}</strong><small>${esc(s.attrs.summary || '')}</small></span></button>`
          )
          .join('<span class="flow-link" aria-hidden="true"></span>');
        const panels = steps
          .map(
            (s) =>
              `<section class="flow-panel" id="flow-${esc(s.attrs.n)}" role="tabpanel" data-flow-panel="${esc(s.attrs.n)}"><div class="flow-panel-head"><span class="flow-n">${esc(s.attrs.n)}</span><h3>${esc(s.attrs.title)}</h3></div>${renderNodes(s.children)}</section>`
          )
          .join('');
        return `<div class="flow" data-flow-root><div class="flow-nav" role="tablist" aria-label="Data flow steps">${nav}</div><div class="flow-panels">${panels}</div></div>`;
      }
      case 'review': {
        const items = node.children.filter((c) => c.type === 'block' && c.name === 'review-item');
        const rows = items
          .map((it, i) => {
            const key = `r${i}`;
            const opts = ['Comfortable', 'Concern or change required', 'Need more info']
              .map(
                (o, j) =>
                  `<label class="review-opt opt-${j}"><input type="radio" name="${key}" id="${key}-${j}" value="${esc(o)}"><span>${esc(o)}</span></label>`
              )
              .join('');
            return `<fieldset class="review-item" data-review-item="${key}" data-label="${esc((it.attrs.n ? it.attrs.n + '. ' : '') + it.attrs.title)}"><legend>${it.attrs.n ? `<span class="flow-n">${esc(it.attrs.n)}</span>` : ''}${esc(it.attrs.title)}</legend>${renderNodes(it.children)}<div class="review-opts">${opts}</div><label class="review-notes-label" for="${key}-notes">Notes: reason, rule or clause, suggested change</label><textarea id="${key}-notes" name="${key}-notes" rows="2"></textarea></fieldset>`;
          })
          .join('');
        return `<form class="review" data-review="${esc(ctx.pageId)}" data-title="${esc(a.title || 'Review')}" novalidate>${rows}<div class="review-actions"><span class="review-status" aria-live="polite"></span><button type="button" class="btn btn-ghost" data-review-reset>Clear answers</button><button type="button" class="btn btn-primary" data-review-copy>${icon('copy', 'icon icon-xs')}Copy summary</button></div></form>`;
      }
      default:
        return `<div class="block-${esc(node.name)}">${inner()}</div>`;
    }
  }

  return function render(source, pageId) {
    ctx = { toc: [], ids: new Set(), pageId };
    // Raw HTML in Markdown may also use page: links.
    const html = renderNodes(parseBlocks(source)).replace(/href="(page:[^"]+)"/g, (_, h) => `href="${esc(resolveLink(h))}"`)
      .replace(/<img([^>]*?) src="(\/images\/[^"]+)"/g, (_, pre, src) => `<img${pre} src="${esc(resolveImage(src))}"`);
    return { html, toc: ctx.toc };
  };
}

// Plain-text extraction for the search index.
export function toPlainText(html) {
  return html
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z#0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

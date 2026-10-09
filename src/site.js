/* Lupe Docs client script: theme, navigation drawer, single-file routing, search, copy buttons,
   step progress, data-flow explorer, review checklist and "On this page" highlighting. No dependencies. */
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;
  var SINGLE = doc.body.getAttribute('data-mode') === 'single' || window.__LUPE_SINGLE__ === true;
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var $ = function (sel, el) { return (el || doc).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(sel)); };

  /* ---------- Toast ---------- */
  var toastEl = $('.toast');
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 1800);
  }

  function copyText(text, onDone) {
    function fallback() {
      var ta = doc.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      doc.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = doc.execCommand('copy'); } catch (e) {}
      doc.body.removeChild(ta);
      onDone(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { onDone(true); }, fallback);
    } else fallback();
  }

  /* ---------- Theme ---------- */
  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  $$('.theme-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('lupe-theme', next); } catch (e) {}
    });
  });

  /* ---------- Nav drawer ---------- */
  var navToggle = $('.nav-toggle');
  function setNav(open) {
    doc.body.classList.toggle('nav-open', open);
    if (navToggle) navToggle.setAttribute('aria-expanded', String(open));
  }
  if (navToggle) navToggle.addEventListener('click', function () { setNav(!doc.body.classList.contains('nav-open')); });
  $$('[data-nav-close]').forEach(function (el) { el.addEventListener('click', function () { setNav(false); }); });
  $$('.sidebar a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });

  /* ---------- Copy buttons ---------- */
  doc.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-copy]');
    if (!btn) return;
    copyText(btn.getAttribute('data-copy'), function (ok) {
      var label = btn.querySelector('span');
      if (ok) {
        btn.classList.add('copied');
        if (label) label.textContent = 'Copied';
        toast('Copied to clipboard');
        setTimeout(function () { btn.classList.remove('copied'); if (label) label.textContent = 'Copy'; }, 1600);
      } else {
        toast('Select the ID and copy it manually');
      }
    });
  });

  /* ---------- Steps progress ---------- */
  function initSteps(article) {
    var list = $('.steps', article);
    var progress = $('.progress', article);
    var yours = $$('.step-yours', article);
    if (!list || !yours.length) return;
    var key = 'lupe-steps:' + list.getAttribute('data-steps');
    var done = store.get(key) || [];
    function paint() {
      yours.forEach(function (li) {
        var on = done.indexOf(li.getAttribute('data-step')) !== -1;
        li.classList.toggle('done', on);
        var b = $('.step-done', li);
        b.setAttribute('aria-pressed', String(on));
        $('span', b).textContent = on ? 'Done' : 'Mark as done';
      });
      if (progress) {
        var n = yours.filter(function (li) { return li.classList.contains('done'); }).length;
        progress.hidden = false;
        progress.parentNode.hidden = false;
        $('.progress-bar', progress).style.width = (100 * n) / yours.length + '%';
        $('.progress-text', progress).textContent = n === yours.length ? 'All your steps done' : n + ' of ' + yours.length + ' steps done';
      }
    }
    yours.forEach(function (li) {
      $('.step-done', li).addEventListener('click', function () {
        var id = li.getAttribute('data-step');
        var i = done.indexOf(id);
        if (i === -1) done.push(id); else done.splice(i, 1);
        store.set(key, done);
        paint();
      });
    });
    paint();
  }

  /* ---------- Data-flow explorer ---------- */
  function initFlow(article) {
    $$('[data-flow-root]', article).forEach(function (flow) {
      flow.classList.add('js');
      var nodes = $$('.flow-node', flow);
      var panels = $$('.flow-panel', flow);
      function select(n, focus) {
        nodes.forEach(function (b) {
          var on = b.getAttribute('data-flow') === n;
          b.setAttribute('aria-selected', String(on));
          b.tabIndex = on ? 0 : -1;
          if (on && focus) b.focus();
        });
        panels.forEach(function (p) { p.hidden = p.getAttribute('data-flow-panel') !== n; });
      }
      nodes.forEach(function (b, i) {
        b.addEventListener('click', function () {
          select(b.getAttribute('data-flow'));
          if (window.matchMedia('(max-width: 900px)').matches) {
            var panel = $('.flow-panels', flow);
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
        b.addEventListener('keydown', function (e) {
          var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
          if (!d) return;
          e.preventDefault();
          var next = nodes[(i + d + nodes.length) % nodes.length];
          select(next.getAttribute('data-flow'), true);
        });
      });
      if (nodes[0]) select(nodes[0].getAttribute('data-flow'));
    });
  }

  /* ---------- Review checklist ---------- */
  function initReview(article) {
    $$('form[data-review]', article).forEach(function (form) {
      var key = 'lupe-review:' + form.getAttribute('data-review');
      var status = $('.review-status', form);
      var saved = store.get(key) || {};
      $$('input[type=radio], textarea', form).forEach(function (el) {
        var v = saved[el.name];
        if (el.type === 'radio') el.checked = v === el.value;
        else if (v) el.value = v;
      });
      function count() {
        var items = $$('.review-item', form);
        var answered = items.filter(function (it) { return $('input:checked', it); }).length;
        status.textContent = answered + ' of ' + items.length + ' answered · saved in this browser';
      }
      form.addEventListener('input', function () {
        var data = {};
        $$('input[type=radio]:checked, textarea', form).forEach(function (el) { if (el.value) data[el.name] = el.value; });
        store.set(key, data);
        count();
      });
      form.addEventListener('submit', function (e) { e.preventDefault(); });
      var resetBtn = $('[data-review-reset]', form);
      var armed = false;
      resetBtn.addEventListener('click', function () {
        if (!armed) {
          armed = true;
          resetBtn.textContent = 'Click again to clear';
          setTimeout(function () { armed = false; resetBtn.textContent = 'Clear answers'; }, 3000);
          return;
        }
        armed = false;
        resetBtn.textContent = 'Clear answers';
        form.reset();
        store.set(key, {});
        count();
        toast('Answers cleared');
      });
      $('[data-review-copy]', form).addEventListener('click', function () {
        var lines = [form.getAttribute('data-title'), ''];
        $$('.review-item', form).forEach(function (it) {
          var legend = it.getAttribute('data-label');
          var pick = $('input:checked', it);
          var notes = $('textarea', it).value.trim();
          lines.push('• ' + legend + ': ' + (pick ? pick.value : 'Not answered') + (notes ? '\n  Notes: ' + notes : ''));
        });
        copyText(lines.join('\n'), function (ok) {
          toast(ok ? 'Summary copied. Paste it into your email.' : 'Copy failed. Select the text manually.');
        });
      });
      count();
    });
  }

  /* ---------- Margin estimator ---------- */
  function initEstimator(article) {
    $$('form[data-estimator]', article).forEach(function (form) {
      var gbp = function (n) {
        try { return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n); }
        catch (e) { return '£' + Math.round(n); }
      };
      var num = function (name) { var v = parseFloat(form.elements[name].value); return isFinite(v) && v > 0 ? v : 0; };
      function calc() {
        var spend = num('spend'), roas = num('roas'), margin = Math.min(num('margin'), 100) / 100;
        var waste = num('waste') / 100, lift = num('lift') / 100;
        var risk = spend * 12 * waste;
        var revenue = spend * 12 * roas * lift;
        $('[data-out="waste"]', form).textContent = Math.round(waste * 100) + '%';
        $('[data-out="lift"]', form).textContent = Math.round(lift * 100) + '%';
        $('[data-out="risk"]', form).textContent = gbp(risk);
        $('[data-out="revenue"]', form).textContent = gbp(revenue);
        $('[data-out="profit"]', form).textContent = gbp(revenue * margin);
      }
      form.addEventListener('input', calc);
      form.addEventListener('submit', function (e) { e.preventDefault(); });
      calc();
    });
  }

  /* ---------- On this page highlighting ---------- */
  var spyTargets = [];
  var spyLinks = [];
  function initSpy(article) {
    spyLinks = $$('[data-toc]', article);
    spyTargets = spyLinks.map(function (a) { return doc.getElementById(a.getAttribute('data-toc')); }).filter(Boolean);
    onScroll();
  }
  function onScroll() {
    if (!spyTargets.length) return;
    var offset = 140;
    var current = spyTargets[0];
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].getBoundingClientRect().top - offset <= 0) current = spyTargets[i];
    }
    if (window.innerHeight + window.scrollY >= doc.documentElement.scrollHeight - 4) current = spyTargets[spyTargets.length - 1];
    spyLinks.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-toc') === current.id); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Page activation (+ routing in the single-file build) ---------- */
  var inited = {};
  function activate(article) {
    var id = article.getAttribute('data-page');
    if (!inited[id]) {
      inited[id] = true;
      initSteps(article);
      initFlow(article);
      initReview(article);
      initEstimator(article);
    }
    initSpy(article);
  }

  function showPage(id, anchor) {
    var article = $('article[data-page="' + id + '"]');
    if (!article) return false;
    $$('article.page').forEach(function (a) { a.hidden = a !== article; });
    var tab = article.getAttribute('data-tab');
    $$('[data-sidebar-tab]').forEach(function (s) { s.hidden = s.getAttribute('data-sidebar-tab') !== tab; });
    $$('[data-tab-link]').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-tab-link') === tab); });
    $$('.nav-link').forEach(function (l) { l.classList.toggle('active', l.getAttribute('data-nav') === id); });
    doc.title = id === 'home' ? 'Lupe Docs' : article.getAttribute('data-title') + ' · Lupe Docs';
    activate(article);
    if (anchor) {
      var el = doc.getElementById(anchor);
      if (el) { el.scrollIntoView(); return true; }
    }
    window.scrollTo(0, 0);
    return true;
  }

  if (SINGLE) {
    var currentId = 'home';
    var route = function () {
      var h = decodeURIComponent(location.hash.slice(1));
      if (!h) { showPage(currentId = 'home'); return; }
      if ($('article[data-page="' + h + '"]')) { currentId = h; showPage(h); return; }
      // Hash is a heading inside the current page
      var el = doc.getElementById(h);
      if (el) el.scrollIntoView();
    };
    window.addEventListener('hashchange', route);
    // In-page anchors (TOC, heading #) scroll without changing the route.
    doc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var target = a.getAttribute('href').slice(1);
      if (!target || $('article[data-page="' + target + '"]')) return;
      var el = doc.getElementById(target);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
    route();
  } else {
    var art = $('article.page');
    if (art) activate(art);
  }

  /* ---------- Search ---------- */
  var modal = $('.search-modal');
  var input = $('#search-input');
  var results = $('.search-results');
  var empty = $('.search-empty');
  var data = window.__LUPE_SEARCH__ || { pages: {}, entries: [] };
  var active = 0;
  var lastFocus = null;

  function openSearch() {
    if (!modal) return;
    data = window.__LUPE_SEARCH__ || data;
    lastFocus = doc.activeElement;
    modal.hidden = false;
    input.value = '';
    renderResults('');
    setTimeout(function () { input.focus(); }, 10);
  }
  function closeSearch() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function escHtml(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function highlight(text, terms) {
    var out = escHtml(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }
  function snippet(text, terms) {
    var lower = text.toLowerCase();
    var idx = -1;
    terms.some(function (t) { idx = lower.indexOf(t); return idx !== -1; });
    if (idx === -1) return text.slice(0, 140);
    var start = Math.max(0, idx - 50);
    return (start ? '…' : '') + text.slice(start, start + 160) + '…';
  }
  function hrefFor(e) {
    var base = data.pages[e.p] || '#';
    if (SINGLE) return base;
    return base + (e.a ? '#' + e.a : '');
  }
  var DEFAULTS = ['meta-dataset-access', 'tiktok-pixel-access', 'shopify-stape-setup', 'step-by-step', 'review-checklist'];
  function renderResults(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var list;
    if (!terms.length) {
      list = data.entries.filter(function (e) { return !e.h && DEFAULTS.indexOf(e.p) !== -1; });
    } else {
      list = data.entries
        .map(function (e) {
          var t = e.t.toLowerCase(), h = (e.h || '').toLowerCase(), x = (e.x || '').toLowerCase();
          var score = 0;
          for (var i = 0; i < terms.length; i++) {
            var term = terms[i], s = 0;
            if (t.indexOf(term) !== -1) s += 6;
            if (h.indexOf(term) !== -1) s += 4;
            if (x.indexOf(term) !== -1) s += 1;
            if (!s) return null;
            score += s;
          }
          // Prefer the page itself when the query matches its title.
          if (!e.h && t.indexOf(terms.join(' ')) !== -1) score += 8;
          return { e: e, s: score };
        })
        .filter(Boolean)
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 12)
        .map(function (r) { return r.e; });
    }
    active = 0;
    results.innerHTML = list
      .map(function (e, i) {
        return '<li class="search-result' + (i === 0 ? ' active' : '') + '" role="option"><a href="' + hrefFor(e) + '">' +
          '<span class="sr-path">' + escHtml(e.g) + (e.h ? ' › ' + escHtml(e.t) : '') + '</span>' +
          '<span class="sr-title">' + highlight(e.h || e.t, terms) + '</span>' +
          '<span class="sr-snippet">' + highlight(snippet(e.x || '', terms), terms) + '</span></a></li>';
      })
      .join('');
    empty.hidden = list.length > 0 || !terms.length;
  }
  function move(d) {
    var items = $$('.search-result', results);
    if (!items.length) return;
    items[active].classList.remove('active');
    active = (active + d + items.length) % items.length;
    items[active].classList.add('active');
    items[active].scrollIntoView({ block: 'nearest' });
  }
  if (modal) {
    $$('[data-search-open]').forEach(function (b) { b.addEventListener('click', openSearch); });
    $$('[data-search-close]').forEach(function (b) { b.addEventListener('click', closeSearch); });
    input.addEventListener('input', function () { renderResults(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') {
        var a = $('.search-result.active a', results);
        if (a) { e.preventDefault(); a.click(); }
      }
    });
    results.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      closeSearch();
      if (SINGLE) {
        // Same hash as current page → hashchange won't fire; force scroll to top.
        if (a.getAttribute('href') === location.hash) { e.preventDefault(); window.scrollTo(0, 0); }
      }
    });
    doc.addEventListener('keydown', function (e) {
      var typing = /INPUT|TEXTAREA|SELECT/.test((doc.activeElement || {}).tagName || '');
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); modal.hidden ? openSearch() : closeSearch(); }
      else if (e.key === '/' && !typing && modal.hidden) { e.preventDefault(); openSearch(); }
      else if (e.key === 'Escape') { closeSearch(); setNav(false); }
    });
  }
  // Show Ctrl K on non-Mac platforms
  if (!/Mac|iPhone|iPad/.test(navigator.platform || '')) $$('.search-trigger kbd').forEach(function (k) { k.textContent = 'Ctrl K'; });
})();

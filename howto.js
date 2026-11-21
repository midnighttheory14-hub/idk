/* ════════════════════════════════════════════════════════════════
   Cinefied how-to-play animations · v0.3.0
   One shared kit for every game's HOW TO PLAY sheet: the pieces
   (phone, player, chip, label, pill, ripple), small motion helpers,
   and the player that runs a game's steps with a progress bar,
   tap-to-skip, REPLAY and GOT IT.

   A game describes its animation as a scene:

     { steps: [{ d: 3000, t: 'What happens in this step.' }, ...],
       build(svg, K) { ...make pieces with K...; return (step, ms) => { ...draw that moment... } } }

   and shows it with:

     const ht = CinefiedHowTo.create(hostElement, scene);  // fills the element
     ht.play();   // from step 1 (call when the sheet opens)
     ht.stop();   // when the sheet closes

   GOT IT carries data-close, so the page's own sheet code closes it.
   Needs core.css.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
'use strict';
const NS = 'http://www.w3.org/2000/svg';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const HOLD = 2500;   // ms each step stays on its last frame before moving on
(function style() {
  const css = `.ht-pause{position:absolute;top:10px;right:10px;z-index:3;width:34px;height:34px;border-radius:50%;border:1px solid var(--border);background:var(--surface);color:var(--text);display:grid;place-items:center;cursor:pointer;padding:0}
    .ht-pause svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
    .ht-paused .ht-pause{background:var(--c);border-color:var(--c);color:#fff}.ht-paused .ht-pause svg{fill:currentColor}
    .ht-paused .ht-prog i b{opacity:.55}`;
  const el = document.createElement('style'); el.textContent = css; document.head.appendChild(el);
})();

/* ═════════════ KIT: helpers ═════════════ */
const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const pr = (u, a, d) => cl((u - a) / d);
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const back = t => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const lerp = (a, b, t) => a + (b - a) * t;
let uid = 0;
function el(tag, attrs, parent, text) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text != null) e.textContent = text;
  parent && parent.appendChild(e); return e;
}
const op = (e, v) => e.setAttribute('opacity', (+v).toFixed(3));

/* ═════════════ KIT: pieces ═════════════ */
function Phone(parent) {
  const g = el('g', {}, parent), id = 'scr' + (++uid);
  const cp = el('clipPath', { id }, g); el('rect', { x: -12, y: -22, width: 24, height: 44, rx: 2.5 }, cp);
  el('rect', { x: -14, y: -26, width: 28, height: 52, rx: 6, fill: '#22222e', stroke: 'var(--muted)', 'stroke-width': .8 }, g);
  const scr = el('rect', { x: -12, y: -22, width: 24, height: 44, rx: 2.5, fill: '#fff' }, g);
  const fill = el('rect', { x: -12, y: 22, width: 24, height: 0, fill: 'var(--accent)', 'clip-path': `url(#${id})` }, g);
  el('rect', { x: -4, y: -24.7, width: 8, height: 1.3, rx: .65, fill: '#000', opacity: .55 }, g);
  const cnt = el('g', {}, g);
  return {
    g, cnt,
    at(x, y, s, r = 0, sx = 1) { g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${r.toFixed(2)}) scale(${(s * sx).toFixed(3)} ${s.toFixed(3)})`); },
    level(p) { const h = 44 * cl(p); fill.setAttribute('y', (22 - h).toFixed(2)); fill.setAttribute('height', h.toFixed(2)); },
    screen(c) { scr.setAttribute('fill', c); },
    show(v) { op(g, v); }
  };
}
function Label(parent, cls = 'd') {
  const g = el('g', { opacity: 0 }, parent), t = el('text', { class: cls, 'text-anchor': 'middle' }, g);
  let last = null;
  return {
    t, hide() { op(g, 0); },
    set(txt, x, y, size, fill, { s = 1, sy = 1, o = 1, maxW = 0 } = {}) {
      if (txt !== last) { t.textContent = txt; last = txt; }
      t.setAttribute('font-size', size);
      if (maxW) { const w = t.getComputedTextLength(); if (w > maxW) t.setAttribute('font-size', (size * maxW / w).toFixed(2)); }
      t.setAttribute('y', (+t.getAttribute('font-size') * .35).toFixed(2)); t.setAttribute('fill', fill);
      g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${Math.max(0, s).toFixed(3)} ${Math.max(0, s * sy).toFixed(3)})`); op(g, cl(o));
    }
  };
}
function Pill(parent, txt, color) {
  const g = el('g', { opacity: 0 }, parent);
  el('rect', { x: -17, y: -6, width: 34, height: 12, rx: 6, fill: color }, g);
  el('text', { class: 'd', 'text-anchor': 'middle', y: 3, 'font-size': 8.5, fill: '#fff', 'letter-spacing': .6 }, g, txt);
  return { hide() { op(g, 0); }, set(x, y, s, o = 1, press = 0) { g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(s * (1 - .12 * press)).toFixed(3)})`); op(g, cl(o)); } };
}
function Player(parent, x, y, letter, color) {
  const g = el('g', { transform: `translate(${x} ${y})` }, parent);
  const ring = el('circle', { r: 19.5, fill: 'none', 'stroke-width': 2, opacity: 0 }, g);
  const av = el('g', {}, g);
  el('circle', { r: 15, fill: color }, av);
  el('text', { class: 'd', 'text-anchor': 'middle', y: 6.6, 'font-size': 19, fill: 'var(--bg)' }, av, letter);
  const badge = el('g', { transform: 'translate(11 -11)', opacity: 0 }, g);
  el('circle', { r: 7, fill: 'var(--accent)', stroke: 'var(--surface2)', 'stroke-width': 2 }, badge);
  el('path', { d: 'M-2.5 -2.5L2.5 2.5M2.5 -2.5L-2.5 2.5', stroke: '#fff', 'stroke-width': 1.8, 'stroke-linecap': 'round' }, badge);
  return {
    x, y,
    set({ o = 1, ring: rg = 0, ringC = 'var(--text)', out = 0, x: px = x, y: py = y, s = 1 } = {}) {
      g.setAttribute('transform', `translate(${px.toFixed(1)} ${py.toFixed(1)}) scale(${s.toFixed(3)})`);
      op(g, cl(o)); op(ring, rg); ring.setAttribute('stroke', ringC);
      op(av, 1 - .62 * out); op(badge, out);
      badge.setAttribute('transform', `translate(11 -11) scale(${(.4 + .6 * back(out)).toFixed(3)})`);
    }
  };
}
function Chip(parent) {
  const g = el('g', { opacity: 0 }, parent);
  const r = el('rect', { rx: 10, height: 20, y: -10 }, g);
  const t = el('text', { class: 'm', 'text-anchor': 'middle', y: 4, 'font-size': 11 }, g);
  let last = null;
  return {
    hide() { op(g, 0); },
    set(txt, x, y, s = 1, kind) {
      if (txt !== last) { t.textContent = txt; last = txt; }
      const w = t.getComputedTextLength() + 20, cx = cl(x, w / 2 + 4, 316 - w / 2);
      r.setAttribute('x', -w / 2); r.setAttribute('width', w);
      r.setAttribute('fill', kind === 'acc' ? 'var(--accent)' : kind === 'ok' ? 'var(--green)' : 'var(--surface)');
      r.setAttribute('stroke', kind ? 'none' : 'var(--border)');
      t.setAttribute('fill', kind === 'acc' ? '#fff' : kind === 'ok' ? 'var(--bg)' : 'var(--text)');
      t.setAttribute('font-weight', kind ? 500 : 400);
      g.setAttribute('transform', `translate(${cx.toFixed(1)} ${y}) scale(${Math.max(0, s).toFixed(3)})`);
      op(g, cl(s * 1.4));
    }
  };
}
function Ripple(parent, color = 'var(--text)', w = 1.6) {
  const c = el('circle', { fill: 'none', stroke: color, 'stroke-width': w, opacity: 0 }, parent);
  return { set(x, y, p, size = 28) { c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', (4 + size * ease(p)).toFixed(2)); op(c, p > 0 && p < 1 ? (1 - p) * .85 : 0); } };
}
/* fit text lines inside a width (local units), wrapping into 1-3 balanced lines */
function wrap(str, perLine) {
  const words = str.split(' '); if (str.length <= perLine) return [str];
  const n = Math.min(3, Math.ceil(str.length / perLine)), target = str.length / n, lines = [];
  let cur = '';
  for (const w of words) { if (cur && (cur + ' ' + w).length > target + 3 && lines.length < n - 1) { lines.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w; }
  lines.push(cur); return lines;
}
function fitLines(texts, base, maxW) {
  texts.forEach(t => t.setAttribute('font-size', base));
  const m = Math.max(1, ...texts.map(t => t.getComputedTextLength()));
  const fs = Math.min(base, base * maxW / m);
  texts.forEach(t => t.setAttribute('font-size', fs.toFixed(2))); return fs;
}
/* hand the phone around a circle: hold, then move to the next seat */
function pass(u, dur, hold, start, near) {
  const k = Math.floor(u / dur), r = u % dur, f = start + k;
  if (r < hold) { const p = near(f); return { x: p[0], y: p[1], h: f % 4, n: f, m: 0, r }; }
  const e = ease((r - hold) / (dur - hold)), a = near(f), b = near(f + 1);
  return { x: lerp(a[0], b[0], e), y: lerp(a[1], b[1], e), h: -1, n: f, m: (r - hold) / (dur - hold), r };
}
const COLORS = ['var(--accent2)', 'var(--blue)', 'var(--purple)', 'var(--green)'];


function WidePill(parent, txt, color, w, tc = '#fff') {
  const g = el('g', { opacity: 0 }, parent);
  el('rect', { x: -w / 2, y: -8, width: w, height: 16, rx: 8, fill: color }, g);
  el('text', { class: 'd', 'text-anchor': 'middle', y: 3.8, 'font-size': 10.5, fill: tc, 'letter-spacing': .8 }, g, txt);
  return { hide() { op(g, 0); }, set(x, y, o = 1, press = 0) { g.setAttribute('transform', `translate(${x} ${y}) scale(${(1 - .1 * press).toFixed(3)})`); op(g, cl(o)); } };
}
/* ═════════════ shared scene: one phone shows a clue, everyone shouts a guess ═════════════
   Used by Spoiler, Starring, Dialogue Detective and Director's Cut. cfg: c (colour), t1, t2,
   head, lines / lines2 ([text, 'd'|'m', size, colour]), gap, shift, say, guesses, mine, right, answer. */
function readGuess(cfg) {
  return {
    steps: [
      { d: 3200, t: cfg.t1 },
      { d: 4400, t: cfg.t2 },
      { d: 5400, t: 'Tap SHOW ANSWER to check, then NEXT for a new one.' }
    ],
    build(svg) {
      const PX = 160, PY = 110, PS = 2.85, F = [[42, 66], [278, 66], [278, 170]], FC = [[42, 32], [278, 32], [278, 204]];
      const pl = el('g', {}, svg);
      const reader = Player(pl, 160, 214, 'R', COLORS[0]), friends = F.map((p, i) => Player(pl, p[0], p[1], 'SBA'[i], COLORS[i + 1]));
      const ph = Phone(svg); ph.screen('#13131a');
      const head = Label(svg, 'm'), lines = Array.from({ length: 7 }, (_, i) => Label(svg, 'd')), ans = Label(svg);
      const start = WidePill(svg, 'START', cfg.c, 44), show = WidePill(svg, 'SHOW ANSWER', cfg.c, 62), next = WidePill(svg, 'NEXT', cfg.c, 44);
      const tap = Ripple(svg), chips = F.map(() => Chip(svg)), say = Chip(svg);
      const pop = (u, a) => back(pr(u, a, 260));
      const drawClue = (L, o, a, u) => {
        const n = L.length, gap = cfg.gap || 11, top = 92 - (n - 1) * gap / 2 + (cfg.shift || 0);
        lines.forEach((l, i) => {
          if (i >= n) return l.hide();
          const [t, f, s, c] = L[i]; l.t.setAttribute('class', f);
          l.set(t, PX, top + i * gap, s, c || '#fff', { o: o * pr(u, a + i * 140, 280), maxW: 62 });
        });
      };
      return (s, u) => {
        [head, ans, ...lines].forEach(l => l.hide()); [start, show, next].forEach(p => p.hide()); chips.forEach(c => c.hide()); say.hide(); tap.set(0, 0, 0);
        reader.set({ s: 1.2 }); friends.forEach(f => f.set());
        ph.at(PX, PY, PS); ph.screen('#13131a');
        if (s === 0) {
          friends.forEach(f => f.set({ o: .18 }));
          ph.at(PX, PY, PS * (.85 + .15 * back(pr(u, 0, 500))));
          start.set(PX, PY, 1 - pr(u, 850, 200), pr(u, 520, 140) - pr(u, 660, 140));
          tap.set(PX, PY, pr(u, 560, 600), 30);
          if (u > 1000) { head.set(cfg.head, PX, 62, 5.2, '#9a9ab8', { o: pr(u, 1000, 250) }); drawClue(cfg.lines, 1, 1100, u); }
        } else if (s === 1) {
          head.set(cfg.head, PX, 62, 5.2, '#9a9ab8'); drawClue(cfg.lines, 1, -1e4, u);
          friends.forEach((f, i) => f.set({ o: lerp(.18, 1, pr(u, i * 100, 400)) }));
          reader.set({ s: 1.2, ring: 1 });
          // the reader is a player too: they read it out, then guess like everyone else
          if (cfg.say && u < 3500) say.set(cfg.say, 160, 240, pop(u, 200));
          if (u >= 3500) say.set(cfg.mine, 160, 240, pop(u, 3500));
          cfg.guesses.forEach((g, i) => {
            const a = 900 + i * 900; if (u < a) return;
            chips[i].set(g, FC[i][0], FC[i][1], pop(u, a)); friends[i].set({ ring: u < a + 900 ? 1 : 0 });
          });
        } else {
          head.set(cfg.head, PX, 62, 5.2, '#9a9ab8');
          const swap = u >= 3500;
          if (!swap) {
            drawClue(cfg.lines, 1, -1e4, u);
            cfg.guesses.forEach((g, i) => chips[i].set(g, FC[i][0], FC[i][1], 1, u > 1300 && i === cfg.right ? 'ok' : undefined));
            say.set(cfg.mine, 160, 240, 1);
            if (u < 1100) { show.set(PX, 160, pr(u, 0, 250), pr(u, 700, 120) - pr(u, 820, 120)); tap.set(PX, 160, pr(u, 750, 600), 30); }
            else {
              ans.set(cfg.answer, PX, 143, 17, 'var(--green)', { s: pop(u, 1100), maxW: 62 });
              if (u > 1300) friends[cfg.right].set({ ring: 1, ringC: 'var(--green)' });
              next.set(PX, 162, pr(u, 2300, 250), pr(u, 3050, 120) - pr(u, 3170, 120));
              tap.set(PX, 162, pr(u, 3100, 600), 30);
            }
          } else {
            drawClue(cfg.lines2, 1, 3500, u);
          }
        }
      };
    }
  };
}

/* ═════════════ the player ═════════════ */
function create(host, scene) {
  const steps = scene.steps;
  host.classList.add('ht');
  host.innerHTML =
    `<div class="ht-head"><h3>HOW TO PLAY</h3><span class="ht-n"></span></div>
     <div class="ht-prog">${steps.map(() => '<i><b></b></i>').join('')}</div>
     <div class="ht-stage">
       <svg viewBox="0 0 320 250" aria-hidden="true"></svg>
       <button class="ht-tap l" type="button" aria-label="Previous step"></button>
       <button class="ht-tap r" type="button" aria-label="Next step"></button>
       <button class="ht-pause" type="button" aria-label="Pause"></button>
     </div>
     <div class="ht-cap"><b></b><span></span></div>
     <ol class="ht-sr">${steps.map(s => `<li>${String(s.t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))}</li>`).join('')}</ol>
     <div class="ht-btns"><button class="btn outline" type="button" data-ht="replay">REPLAY</button><button class="btn" type="button" data-close>GOT IT</button></div>`;
  const q = s => host.querySelector(s);
  const svg = q('svg'), bars = [...host.querySelectorAll('.ht-prog b')], cap = q('.ht-cap');
  let draw = null, step = 0, t0 = 0, raf = 0, rmT = 0, on = false, paused = false, pausedAt = 0;
  const pb = q('.ht-pause');
  const ICON_PAUSE = '<svg viewBox="0 0 24 24"><path d="M9 6v12M15 6v12"/></svg>', ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg>';
  function setPaused(v) {
    if (v === paused) return;
    if (v) pausedAt = performance.now(); else t0 += performance.now() - pausedAt;
    paused = v; pb.innerHTML = v ? ICON_PLAY : ICON_PAUSE; pb.setAttribute('aria-label', v ? 'Play' : 'Pause');
    host.classList.toggle('ht-paused', v);
  }
  pb.innerHTML = ICON_PAUSE;
  const ensure = () => { if (!draw) draw = scene.build(svg, K); };

  function go(i) {
    step = cl(i, 0, steps.length - 1); t0 = performance.now(); pausedAt = t0;
    q('.ht-n').innerHTML = `<b>${step + 1}</b> / ${steps.length}`;
    cap.querySelector('b').textContent = step + 1;
    cap.querySelector('span').textContent = steps[step].t;
    cap.classList.remove('in'); void cap.offsetWidth; cap.classList.add('in');
    clearTimeout(rmT);
    if (RM && on && step < steps.length - 1) rmT = setTimeout(() => go(step + 1), 4500);
  }
  function tick(now) {
    if (!on) return;
    // each step plays its animation, then holds on the last frame for a moment before the next one
    const d = steps[step].d, full = d + HOLD; let u = (paused ? pausedAt : now) - t0;
    if (u >= full && !paused) { if (step < steps.length - 1 && !RM) { go(step + 1); u = 0; } else u = full; }
    bars.forEach((b, j) => { b.style.transform = `scaleX(${j < step ? 1 : j > step ? 0 : (RM ? 1 : Math.min(1, u / full)).toFixed(3)})`; });
    try { draw(step, RM ? d : Math.min(u, d)); } catch (e) { console.error(e); on = false; return; }
    raf = requestAnimationFrame(tick);
  }
  function play() { ensure(); on = true; setPaused(false); cancelAnimationFrame(raf); go(0); raf = requestAnimationFrame(tick); }
  function stop() { on = false; cancelAnimationFrame(raf); clearTimeout(rmT); }

  q('.ht-tap.r').addEventListener('click', () => go(step + 1));
  q('.ht-tap.l').addEventListener('click', () => go(step - 1));
  q('[data-ht="replay"]').addEventListener('click', () => { setPaused(false); go(0); });
  pb.addEventListener('click', () => setPaused(!paused));
  if (RM) pb.hidden = true;
  return { play, stop };
}

const K = { NS, RM, el, op, cl, pr, ease, back, lerp, wrap, fitLines, pass, Phone, Player, Chip, Label, Pill, WidePill, Ripple, COLORS };
global.CinefiedHowTo = { create, kit: K, templates: { readGuess } };
})(window);
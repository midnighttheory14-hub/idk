/* ════════════════════════════════════════════════════════════════
   Cinefied Hangman board · v0.1.0
   The storyboard picture, the title blanks and the letter keyboard,
   shared by hangman.html (Endless) and daily.html (Hangman of the day).

     const H = CinefiedHangman.create(hostElement, {
       onGuess(state) {},          // after every letter (save progress here)
       onEnd(state) {},            // once, when the title is filled or the misses run out
     });
     H.start('Pokiri', ['A','E']);  // a title, plus letters already guessed (to resume)
     H.state                        // { title, guessed: [...], wrong, over: null | 'win' | 'lose' }

   The page sets --c (the game colour) and --ct (text on it). Needs core.css.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
'use strict';
const NS = 'http://www.w3.org/2000/svg';
const LIVES = 6;
const el = (t, a, p, txt) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; p && p.appendChild(e); return e; };

(function style() {
  const css = `
  .hm{flex:1;min-height:0;display:flex;flex-direction:column}
  .hm-stage{flex:1;min-height:110px;display:flex;align-items:center;justify-content:center}
  .hm-stage svg{width:100%;height:100%;max-height:250px}
  .hm-lives{font-size:10.5px;letter-spacing:3px;color:var(--muted);text-align:center;margin-top:4px;min-height:14px}
  .hm-lives b{color:var(--text);font-weight:500}
  .hm-word{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 18px;margin:clamp(10px,2.4dvh,22px) 0 clamp(12px,2.6dvh,24px);min-height:44px;align-items:flex-end}
  .hm-w{display:flex;gap:5px}
  .hm-t{width:clamp(20px,7vw,32px);height:clamp(30px,9.6vw,42px);border-bottom:2.5px solid var(--border);display:grid;place-items:end center;padding-bottom:3px;
        font-family:var(--display);font-size:clamp(22px,7.2vw,34px);line-height:1;color:var(--text)}
  .hm-t.sym{border-bottom-color:transparent;width:auto;min-width:8px}
  .hm-t.in{border-bottom-color:var(--c)}
  .hm-t.pop{animation:hmin .3s cubic-bezier(.2,.9,.3,1.3)}
  .hm-t.miss{color:var(--accent);border-bottom-color:color-mix(in srgb,var(--accent) 60%,transparent)}
  @keyframes hmin{from{transform:translateY(6px) scale(.7);opacity:0}}
  .hm-kb{display:flex;flex-direction:column;gap:7px}
  .hm-kr{display:flex;justify-content:center;gap:5px}
  .hm-k{flex:1;max-width:38px;height:clamp(40px,6.2dvh,50px);border-radius:9px;border:1px solid var(--border);background:var(--surface);color:var(--text);
        font-family:var(--display);font-size:20px;letter-spacing:0;cursor:pointer;transition:background .2s,opacity .2s,transform .1s;padding:0}
  .hm-k:active{transform:scale(.92)}
  .hm-k.hit{background:var(--c);border-color:var(--c);color:var(--ct,#fff)}
  .hm-k.no{opacity:.22}
  .hm-k[disabled]{cursor:default}
  .hm.done .hm-kb{display:none}
  @media (orientation:landscape) and (max-height:520px){.hm-stage svg{max-height:130px}.hm-k{height:34px}.hm-word{margin:6px 0 8px}}`;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
})();

/* the storyboard: a sketchbook page, the figure drawn one stroke per miss, stamped at the end */
function storyboard(svg) {
  const DISP = "'Bebas Neue',Impact,sans-serif", MONO = "'DM Mono',monospace";
  el('rect', { x: 30, y: 8, width: 240, height: 184, rx: 4, fill: '#f2ecdd' }, svg);
  el('rect', { x: 42, y: 26, width: 216, height: 150, fill: 'none', stroke: '#b9b1a0', 'stroke-width': 1.2 }, svg);
  el('text', { x: 42, y: 20, 'font-family': MONO, 'font-size': 8, fill: '#8a8272' }, svg, 'SC 12 · SHOT 3');
  el('text', { x: 258, y: 20, 'text-anchor': 'end', 'font-family': MONO, 'font-size': 8, fill: '#8a8272' }, svg, 'CLIMAX');
  const pencil = '#3b3a42';
  [0, 1.2].forEach(o => el('path', { d: `M${82 + o} 168 H${170 - o} M${108 + o} 168 V${44 + o} H${190 + o} V60`, stroke: pencil, 'stroke-width': o ? 1.2 : 2.6, 'stroke-linecap': 'round', fill: 'none', opacity: o ? .5 : .9 }, svg));
  const g = el('g', { stroke: pencil, 'stroke-width': 2.8, 'stroke-linecap': 'round', fill: 'none' }, svg), cx = 190, top = 58;
  const parts = [
    el('circle', { cx, cy: top + 18, r: 16 }, g),
    el('path', { d: `M${cx} ${top + 34} V${top + 80}` }, g),
    el('path', { d: `M${cx} ${top + 46} L${cx - 21} ${top + 68}` }, g),
    el('path', { d: `M${cx} ${top + 46} L${cx + 21} ${top + 68}` }, g),
    el('path', { d: `M${cx} ${top + 80} L${cx - 17} ${top + 110}` }, g),
    el('path', { d: `M${cx} ${top + 80} L${cx + 17} ${top + 110}` }, g)];
  parts.forEach(p => { const L = p.getTotalLength(); p.dataset.l = L; p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.transition = 'stroke-dashoffset .5s ease'; });
  const stamp = (txt, w, h, size) => {
    const s = el('g', { opacity: 0 }, svg);
    el('rect', { x: 150 - w / 2, y: 100 - h / 2, width: w, height: h, rx: 6, fill: 'none', stroke: '#c0392b', 'stroke-width': 3.8 }, s);
    el('text', { x: 150, y: 100 + size * .36, 'text-anchor': 'middle', 'font-family': DISP, 'font-size': size, 'letter-spacing': 2, fill: '#c0392b' }, s, txt);
    s.style.transformOrigin = '150px 100px'; s.style.transition = 'opacity .25s, transform .35s cubic-bezier(.3,1.6,.5,1)';
    return s;
  };
  const ok = stamp('OK, TAKE', 144, 44, 30), cut = stamp('CUT!', 116, 58, 44);
  return (n, over) => {
    parts.forEach((p, i) => { p.style.strokeDashoffset = i < n ? 0 : p.dataset.l; });
    [[ok, 'win'], [cut, 'lose']].forEach(([s, w]) => { s.style.opacity = over === w ? 1 : 0; s.style.transform = over === w ? 'rotate(-12deg) scale(1)' : 'rotate(-12deg) scale(1.6)'; });
  };
}

function create(host, opts = {}) {
  host.classList.add('hm');
  host.innerHTML = '<div class="hm-stage"></div><div class="hm-lives"></div><div class="hm-word"></div><div class="hm-kb"></div>';
  const q = s => host.querySelector(s);
  const svg = el('svg', { viewBox: '0 0 300 200', 'aria-hidden': 'true' }, q('.hm-stage'));
  const draw = storyboard(svg);
  const S = { title: '', guessed: [], wrong: 0, over: null };
  const up = s => s.toUpperCase();
  const need = () => [...new Set(up(S.title).replace(/[^A-Z]/g, ''))];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function word(newly) {
    q('.hm-word').innerHTML = up(S.title).split(' ').map(w => '<span class="hm-w">' + [...w].map(ch => {
      if (!/[A-Z]/.test(ch)) return `<span class="hm-t sym">${esc(ch)}</span>`;
      const shown = S.guessed.includes(ch), miss = S.over === 'lose' && !shown;
      return `<span class="hm-t${shown ? ' in' : ''}${shown && ch === newly ? ' pop' : ''}${miss ? ' miss' : ''}">${shown || miss ? ch : ''}</span>`;
    }).join('') + '</span>').join('');
  }
  function keys() {
    const T = up(S.title);
    q('.hm-kb').innerHTML = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map(r => '<div class="hm-kr">' + [...r].map(ch => {
      const used = S.guessed.includes(ch);
      return `<button type="button" class="hm-k${used ? (T.includes(ch) ? ' hit' : ' no') : ''}" data-hk="${ch}"${used || S.over ? ' disabled' : ''}>${ch}</button>`;
    }).join('') + '</div>').join('');
  }
  function lives() { const l = LIVES - S.wrong; q('.hm-lives').innerHTML = S.over ? '' : `<b>${l}</b> ${l === 1 ? 'MISS' : 'MISSES'} LEFT`; }
  function settle() {
    S.wrong = S.guessed.filter(c => !up(S.title).includes(c)).length;
    S.over = need().every(c => S.guessed.includes(c)) ? 'win' : S.wrong >= LIVES ? 'lose' : null;
  }
  function render(newly) { word(newly); keys(); lives(); draw(S.wrong, S.over); host.classList.toggle('done', !!S.over); }

  function guess(ch) {
    ch = up(ch);
    if (!S.title || S.over || !/^[A-Z]$/.test(ch) || S.guessed.includes(ch)) return;
    S.guessed.push(ch); settle();
    render(up(S.title).includes(ch) ? ch : null);
    if (opts.onGuess) opts.onGuess(S);
    if (S.over && opts.onEnd) setTimeout(() => opts.onEnd(S), 700);
  }
  host.addEventListener('click', e => { const k = e.target.closest('[data-hk]'); if (k) guess(k.dataset.hk); });
  const onKey = e => { if (!host.isConnected || !host.offsetParent || e.metaKey || e.ctrlKey || e.altKey) return; if (/^[a-z]$/i.test(e.key)) guess(e.key); };
  addEventListener('keydown', onKey);

  return {
    get state() { return S; },
    start(title, guessed) { S.title = title; S.guessed = (guessed || []).map(up); settle(); render(); },
    guess,
  };
}

global.CinefiedHangman = { create, LIVES };
})(window);

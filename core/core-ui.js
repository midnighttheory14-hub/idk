/* ════════════════════════════════════════════════════════════════
   Cinefied shared game screens · v0.2.3
   The entry page, the code pad and the waiting room, drawn once
   for every multiplayer game. A game page calls:

     CinefiedUI.mount({ game: {...}, onStart(view), onUpdate(view), onLobby() })

   and gets control back (onStart) when the leader starts the game.
   Needs core.js and core.css. A game that passes game.howto (a scene for
   core/howto.js, loaded before this file) gets the animated HOW TO PLAY,
   which also opens by itself every time the game page is opened.
   ════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  // back to the home page: step back if we came from it, otherwise open it (e.g. the game was opened from a shared link)
  function goHome() {
    let ours = false; try { ours = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
    if (ours && history.length > 1) history.back(); else location.href = 'index.html';
  }
  const C = global.Cinefied;
  const esc = C.esc;
  const $ = id => document.getElementById(id);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let G = null, opts = null, last = null, inGame = false, picked = null, busy = false, starting = false, HT = null;

  // ── theme: follows the phone unless the player chose one in Profile ──
  function theme() {
    const sys = matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      let pref = 'system'; try { pref = localStorage.getItem('cf_theme') || 'system'; } catch (e) {}
      document.documentElement.dataset.theme = pref === 'system' ? (sys.matches ? 'dark' : 'light') : pref;
    };
    sys.addEventListener('change', apply); apply();
  }

  // ── markup ──────────────────────────────────────────────────
  const ICON = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    help: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .8c0 1.8-2.5 2.2-2.5 3.7M12 17.2v.1"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    share: '<svg viewBox="0 0 24 24"><path d="M12 15V3M7.5 7.5 12 3l4.5 4.5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
    crown: '<svg class="crown" viewBox="0 0 24 24"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/></svg>',
  };
  const AV = ['var(--accent)', 'var(--blue)', 'var(--purple)', 'var(--green)', 'var(--accent2)', 'var(--yellow)'];
  const avColor = uid => { let h = 0; for (const ch of uid) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return AV[h % AV.length]; };
  const initial = n => esc((String(n || '?').match(/[A-Za-z0-9]/) || ['?'])[0].toUpperCase());

  // The entry page's room buttons, and (for games with other ways to play) the Online / Local / Computer tabs.
  const WHO = '<div><button class="who-chip" type="button" data-open="namesheet"><span class="pfp" id="cfMeAv"></span>Playing as <b id="cfMeName"></b> · change</button></div>';
  const ROOM_BTNS = '<button class="btn" type="button" id="cfCreate">CREATE ROOM</button><button class="btn outline" type="button" data-open="pad">JOIN WITH CODE</button>';
  function modesHTML() {
    return `<div class="seg" role="tablist">${G.modes.map((m, i) =>
      `<button type="button" role="tab" class="${i ? '' : 'on'}" data-mode="${esc(m.id)}">${m.icon || ''}${esc(m.label)}</button>`).join('')}</div>
      <div class="panes">${G.modes.map((m, i) => `<div class="pane${i ? '' : ' on'}" data-pane="${esc(m.id)}">
        <p class="pnote">${m.note || ''}${m.id === 'online' ? '<br>' + WHO.replace('class="who-chip"', 'class="who-chip mini-who"') : ''}</p>
        ${m.id === 'online' ? ROOM_BTNS : (m.html || '')}</div>`).join('')}</div>`;
  }

  function build() {
    const glyph = G.glyph || (G.name.replace(/[^A-Za-z]/g, '')[0] || 'C');
    const sets = (G.settings || []).map(s => `
      <div><div class="row-l">${esc(s.label)}</div>
        <div class="opts" data-set="${esc(s.key)}">${s.options.map(o =>
          `<button class="opt" type="button" data-v="${esc(o)}">${esc(s.show ? s.show(o) : o)}</button>`).join('')}</div></div>`).join('');
    const html = `
<div class="app" id="cf-app" style="--c:${esc(G.color || 'var(--accent)')}">
  <section class="screen" id="s-entry">
    <div class="bar">
      <button class="icon-btn" type="button" aria-label="Back to home" id="cfBack">${ICON.back}</button>
      <button class="chipbtn" type="button" data-open="rules">How to play</button>
    </div>
    <div class="hero">
      <div class="glyph" aria-hidden="true">${esc(glyph)}</div>
      <div class="kind"><i></i>${esc(G.shelf || 'Play together')}</div>
      <h1>${esc(G.name.toUpperCase())}</h1>
      <p>${esc(G.pitch || '')}</p>
      <div class="facts">${(G.facts || []).map(f => `<span class="fact">${esc(f)}</span>`).join('')}</div>
      ${G.modes ? '' : WHO}
    </div>
    ${G.modes ? modesHTML() : `<div class="actions">${ROOM_BTNS}</div>`}
  </section>

  <section class="screen" id="s-wait">
    <div class="bar">
      <button class="icon-btn" type="button" aria-label="Leave room" id="cfLeave">${ICON.close}</button>
      <span class="mini">${esc(G.name.toUpperCase())}</span>
      <button class="icon-btn" type="button" aria-label="How to play" data-open="rules">${ICON.help}</button>
    </div>
    <div class="w-code">
      <small>ROOM CODE</small>
      <div class="code" id="cfCode">——————</div>
      <div class="links">
        <button class="link" type="button" id="cfCopy">${ICON.copy}Copy</button>
        <button class="link" type="button" id="cfShare">${ICON.share}Share</button>
      </div>
    </div>
    <div class="seats" id="cfSeats"></div>
    <p class="status" id="cfStatus"></p>
    <button class="summary" type="button" id="cfSummary"></button>
    <div class="start" id="cfStart"></div>
  </section>
</div>

<div class="scrim" id="cfScrim"></div>

<section class="sheet" id="pad" aria-label="Join with code">
  <div class="grab"></div>
  <h3>ENTER ROOM CODE</h3>
  <p class="sub">Ask the room leader for the 6-letter code</p>
  <label class="boxes" id="cfBoxes">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <input id="cfCodeIn" inputmode="text" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="12" aria-label="Room code">
  </label>
  <p class="padnote" id="cfPadNote"></p>
</section>

${G.howto && global.CinefiedHowTo
  ? '<section class="sheet ht-sheet" id="rules" aria-label="How to play"><div class="grab"></div><div id="cfHowTo"></div></section>'
  : `<section class="sheet" id="rules" aria-label="How to play">
  <div class="grab"></div>
  <h3>HOW TO PLAY</h3>
  <div class="rules">${(G.rules || []).map((r, i) => `<div class="rule"><b>${i + 1}</b><span>${esc(r)}</span></div>`).join('')}</div>
</section>`}

<section class="sheet" id="invite" aria-label="Invite">
  <div class="grab"></div>
  <h3>FILL THIS SEAT</h3>
  <p class="sub">Send the room code to a friend</p>
  <button class="btn" type="button" id="cfShare2">SHARE ROOM CODE</button>
  <p class="share-note">Inviting friends straight from the app comes with accounts and the friends list.</p>
</section>

<section class="sheet" id="setsheet" aria-label="Game settings">
  <div class="grab"></div>
  <h3>GAME SETTINGS</h3>
  <div class="sets" id="cfSets">${sets}</div>
  <button class="btn" type="button" data-close>DONE</button>
</section>

<section class="sheet" id="psheet" aria-label="Player"><div class="grab"></div><div class="center-msg" id="cfPBody"></div></section>

<section class="sheet" id="namesheet" aria-label="Your name">
  <div class="grab"></div>
  <h3>YOUR NAME</h3>
  <p class="sub">This is how other players see you</p>
  <form id="cfNameForm"><input class="name-in" id="cfNameIn" maxlength="${C.NAME_MAX}" autocomplete="off" spellcheck="false">
  <button class="btn" type="submit" style="margin-top:14px">SAVE</button></form>
</section>

<div class="toast" id="cfToast" role="status"></div>
<div class="rejoin hide" id="cfRejoin"><p>REJOINING</p></div>`;
    const host = document.createElement('div'); host.id = 'cinefied-ui'; host.innerHTML = html;
    host.style.setProperty('--c', G.color || 'var(--accent)');   // sheets sit outside #cf-app, so they get the game's colour here
    document.body.appendChild(host);
    if (G.howto && global.CinefiedHowTo) HT = global.CinefiedHowTo.create($('cfHowTo'), G.howto);
  }

  // ── little UI tools ─────────────────────────────────────────
  let tt;
  function say(m) { const t = $('cfToast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2200); }
  function go(id, back) {
    document.querySelectorAll('#cf-app .screen').forEach(s => { if (s.id !== id) s.className = 'screen'; });
    const s = $(id); if (s.classList.contains('on')) return;
    s.className = 'screen on ' + (reduce ? '' : back ? 'back' : 'fwd'); scrollTo(0, 0);
  }
  function hideScreens() { document.querySelectorAll('#cf-app .screen').forEach(s => { s.className = 'screen'; }); closeSheets(); }
  function openSheet(id) {
    if (id === 'setsheet' && !(last && last.isLeader)) return say('Only the room leader can change settings');
    if (id !== 'rules' && HT) HT.stop();
    document.querySelectorAll('#cinefied-ui .sheet.open').forEach(x => { if (x.id !== id) x.classList.remove('open'); });
    $(id).classList.add('open'); $('cfScrim').classList.add('open');
    if (id === 'rules' && HT) HT.play();
    if (id === 'pad') { padReset(); setTimeout(() => $('cfCodeIn').focus(), 250); }
    if (id === 'namesheet') { $('cfNameIn').value = C.getName(); setTimeout(() => $('cfNameIn').select(), 250); }
  }
  function closeSheets() { if (HT) HT.stop(); document.querySelectorAll('#cinefied-ui .sheet').forEach(s => s.classList.remove('open')); $('cfScrim').classList.remove('open'); $('cfCodeIn').blur(); }
  function drawMe() { const n = C.getName(); $('cfMeName').textContent = n; const av = $('cfMeAv'); av.textContent = (n.match(/[A-Za-z0-9]/) || ['?'])[0].toUpperCase(); av.style.setProperty('--pc', 'linear-gradient(135deg,var(--accent),var(--accent2))'); }

  // ── code pad ────────────────────────────────────────────────
  const boxes = () => [...$('cfBoxes').querySelectorAll('span')];
  function padDraw() { const v = $('cfCodeIn').value; boxes().forEach((b, i) => { b.textContent = v[i] || ''; b.classList.toggle('filled', !!v[i]); b.classList.toggle('cur', i === v.length); }); }
  function padReset() { $('cfCodeIn').value = ''; $('cfPadNote').className = 'padnote'; $('cfPadNote').textContent = ''; $('cfBoxes').classList.remove('err'); padDraw(); }
  async function padInput(e) {
    const el = e.target;
    el.value = el.value.toUpperCase().split('').filter(c => C.CODE_CHARS.includes(c)).join('').slice(0, C.CODE_LEN);
    $('cfBoxes').classList.remove('err'); $('cfPadNote').className = 'padnote'; $('cfPadNote').textContent = '';
    padDraw();
    if (el.value.length !== C.CODE_LEN || busy) return;
    busy = true; $('cfPadNote').textContent = 'Joining…';
    try {
      await C.joinRoom(el.value, { game: G.id });
      closeSheets();
    } catch (err) {
      $('cfBoxes').classList.add('err'); $('cfPadNote').className = 'padnote bad';
      $('cfPadNote').textContent = err.code === 'other_game' && opts.gameNames && opts.gameNames[err.game]
        ? `That code is for ${opts.gameNames[err.game]}, not ${G.name}.` : C.message(err);
      setTimeout(() => { el.value = ''; padDraw(); $('cfBoxes').classList.remove('err'); }, 1100);
    } finally { busy = false; }
  }

  // ── waiting room ────────────────────────────────────────────
  function settingsLine(room) {
    return (G.settings || []).map(s => {
      const v = room.settings && room.settings[s.key] !== undefined ? room.settings[s.key] : s.default;
      return s.summary ? s.summary(v) : (s.show ? s.show(v) : String(v));
    }).join(' · ');
  }
  function drawWait(v) {
    const room = v.room, L = room.limits || { min: G.min || 2, max: G.max || 8 };
    $('cfCode').textContent = v.code;
    const ps = v.players;
    const seats = Math.max(L.min, Math.min(L.max, ps.length + (ps.length < L.max ? 1 : 0)));
    const old = new Set([...$('cfSeats').querySelectorAll('[data-uid]')].map(x => x.dataset.uid));
    $('cfSeats').innerHTML = Array.from({ length: seats }, (_, i) => {
      const p = ps[i];
      if (!p) return `<button class="seat open" type="button" data-open="invite" style="animation:none"><span class="pfp">+</span>Invite</button>`;
      const off = p.online === false, mine = p.uid === v.me;
      return `<button class="seat${mine ? ' me' : ''}${off ? ' off' : ''}" type="button" data-uid="${C.sid(p.uid)}"${old.has(p.uid) ? ' style="animation:none"' : ''}>
        <span class="pfp" style="--pc:${mine ? 'linear-gradient(135deg,var(--accent),var(--accent2))' : avColor(p.uid)}">${initial(p.name)}${p.uid === room.leader ? ICON.crown : ''}</span>
        ${esc(p.name)}${mine ? '<small>you</small>' : off ? '<small>offline</small>' : ''}</button>`;
    }).join('');
    const need = L.min - v.online.length;
    $('cfStatus').innerHTML = need > 0 ? `<b>${v.online.length}</b> in · need ${need} more to start` : `<b>${v.online.length}</b> players in`;
    const sm = $('cfSummary');
    sm.className = 'summary' + (v.isLeader ? ' can' : '');
    sm.innerHTML = esc(settingsLine(room)) + (v.isLeader ? ICON.pen : '');
    (G.settings || []).forEach(s => {
      const cur = room.settings && room.settings[s.key] !== undefined ? room.settings[s.key] : s.default;
      document.querySelectorAll(`#cfSets [data-set="${s.key}"] .opt`).forEach(b => b.classList.toggle('on', String(cur) === b.dataset.v));
    });
    const leader = ps.find(p => p.uid === room.leader);
    $('cfStart').innerHTML = v.isLeader
      ? `<button class="btn${starting ? ' busy' : ''}" type="button" id="cfGo" ${need > 0 ? 'disabled' : ''}>${starting ? 'STARTING…' : 'START GAME'}</button>`
      : `<p class="waiting">Waiting for ${esc(leader ? leader.name : 'the leader')} to start<span class="dots"></span></p>`;
    if (!v.isLeader && $('setsheet').classList.contains('open')) closeSheets();
    // a game may draw its own seats (Clue Pool: two team columns)
    if (G.wait) G.wait(v, { seats: $('cfSeats'), status: $('cfStatus'), go: $('cfGo') });
  }

  // ── room events from the core ───────────────────────────────
  function onRoom(v) {
    if (v.type === 'closed' || v.type === 'removed') {
      const wasIn = inGame; inGame = false; last = null;
      closeSheets(); go('s-entry', true); drawMe();
      if (wasIn && opts.onLobby) opts.onLobby(null);
      return say(v.type === 'closed' ? 'The room was closed' : 'You were removed from the room');
    }
    if (v.type === 'left') return;
    last = v;
    if (v.becameLeader) say("You're the room leader now");
    if (v.room.phase === 'waiting') {
      if (inGame) { inGame = false; if (opts.onLobby) opts.onLobby(v); }
      go('s-wait'); drawWait(v);
    } else {
      if (!inGame) { inGame = true; hideScreens(); if (opts.onStart) opts.onStart(v); }
      else if (opts.onUpdate) opts.onUpdate(v);
    }
  }

  // ── wiring ──────────────────────────────────────────────────
  function bind() {
    $('cfScrim').addEventListener('click', closeSheets);
    document.addEventListener('click', e => {
      if (!e.target.closest('#cinefied-ui')) return;
      const o = e.target.closest('[data-open]'); if (o) return openSheet(o.dataset.open);
      const tab = e.target.closest('.seg [data-mode]');
      if (tab) {
        document.querySelectorAll('#cinefied-ui .seg [data-mode]').forEach(x => x.classList.toggle('on', x === tab));
        document.querySelectorAll('#cinefied-ui .pane').forEach(x => x.classList.toggle('on', x.dataset.pane === tab.dataset.mode));
        return;
      }
      if (e.target.closest('#cfSummary')) return openSheet('setsheet');
      if (e.target.closest('[data-close]')) return closeSheets();
      const opt = e.target.closest('#cfSets .opt');
      if (opt) {
        const key = opt.parentElement.dataset.set, def = (G.settings || []).find(s => s.key === key);
        const val = typeof def.default === 'number' ? Number(opt.dataset.v) : opt.dataset.v;
        C.updateSettings({ [key]: val }).catch(err => say(C.message(err)));
        return;
      }
      const seat = e.target.closest('[data-uid]');
      if (seat && last && last.isLeader && seat.dataset.uid !== last.me) {
        picked = last.players.find(p => C.sid(p.uid) === seat.dataset.uid); if (!picked) return;
        $('cfPBody').innerHTML = `<span class="pfp" style="--pc:${avColor(picked.uid)}">${initial(picked.name)}</span><h3>${esc(picked.name.toUpperCase())}</h3>
          <p class="sub">Remove ${esc(picked.name)} from this room?</p>
          <div class="two"><button class="btn outline" type="button" data-close>CANCEL</button><button class="btn" type="button" id="cfKick">REMOVE</button></div>`;
        return openSheet('psheet');
      }
      if (e.target.closest('#cfKick')) { const p = picked; closeSheets(); C.kick(p.uid).then(() => say(`${p.name} was removed`)).catch(err => say(C.message(err))); return; }
      const goBtn = e.target.closest('#cfGo');
      if (goBtn && !starting) {
        if (!G.referee) return void C.setPhase(G.startPhase || 'playing', G.startState ? G.startState(last) : undefined).catch(err => say(C.message(err)));
        // refereed game: the server deals the first round
        starting = true; goBtn.classList.add('busy'); goBtn.textContent = 'STARTING…';
        C.referee('start').then(r => { if (!r.ok && r.error !== 'phase') say(C.message({ code: r.error })); })
          .finally(() => { starting = false; const b = $('cfGo'); if (b) { b.classList.remove('busy'); b.textContent = 'START GAME'; } });
      }
    });
    $('cfCodeIn').addEventListener('input', padInput);
    $('cfCreate').addEventListener('click', async () => {
      if (busy) return; busy = true; $('cfCreate').classList.add('busy'); $('cfCreate').textContent = 'CREATING…';
      const settings = {}; (G.settings || []).forEach(s => { settings[s.key] = s.default; });
      try { await C.createRoom({ game: G.id, min: G.min, max: G.max, settings, ref: !!G.referee }); }
      catch (err) { say(C.message(err)); }
      finally { busy = false; $('cfCreate').classList.remove('busy'); $('cfCreate').textContent = 'CREATE ROOM'; }
    });
    $('cfLeave').addEventListener('click', async () => { closeSheets(); await C.leave(); last = null; go('s-entry', true); say('You left the room'); });
    $('cfBack').addEventListener('click', () => opts.onBack ? opts.onBack() : goHome());
    $('cfCopy').addEventListener('click', async () => { const c = $('cfCode').textContent; try { await navigator.clipboard.writeText(c); say('Code copied'); } catch (e) { say('Code: ' + c); } });
    const share = async () => {
      const c = $('cfCode').textContent, text = `Join my ${G.name} room on Cinefied. Code: ${c}`;
      if (navigator.share) { try { await navigator.share({ text }); } catch (e) {} }
      else { try { await navigator.clipboard.writeText(text); say('Invite message copied'); } catch (e) { say(text); } }
    };
    $('cfShare').addEventListener('click', share);
    $('cfShare2').addEventListener('click', () => { closeSheets(); share(); });
    $('cfNameForm').addEventListener('submit', e => { e.preventDefault(); C.setName($('cfNameIn').value); drawMe(); closeSheets(); say('Name saved'); });
  }

  // ── start ───────────────────────────────────────────────────
  async function mount(o) {
    opts = o || {}; G = opts.game;
    theme(); build(); bind(); drawMe();
    C.onChange(onRoom);
    let had = false; try { had = !!sessionStorage.getItem('cf_session'); } catch (e) {}
    if (had) $('cfRejoin').classList.remove('hide');
    try {
      await C.init();
      const code = await C.resume(G.id);
      if (!code) { go('s-entry', true); showHowTo(); }
    } catch (e) {
      go('s-entry', true); say(C.message({ code: 'offline' })); showHowTo();
    }
    $('cfRejoin').classList.add('hide');
  }

  // Every time the game page is opened, the how-to-play plays first (not when rejoining a room in progress).
  function showHowTo() {
    if (!HT) return;
    const open = () => { if ($('s-entry').classList.contains('on') && !document.querySelector('#cinefied-ui .sheet.open')) openSheet('rules'); };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(open, 450));
  }

  // Leave from inside a game (the game page calls this from its own leave button).
  async function leaveGame() {
    closeSheets(); await C.leave();
    inGame = false; last = null; go('s-entry', true); drawMe();
    if (opts.onLobby) opts.onLobby(null);
    say('You left the game');
  }

  global.CinefiedUI = { mount, say, leaveGame, avColor, initial, showLobby: () => last && go('s-wait') };
})(window);

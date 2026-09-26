import { useEffect } from 'react';
import { RM, scrollToTarget } from '../lib/motion.js';
import { invalidateLayout, subscribeScroll } from '../lib/scroll.js';

/**
 * The glass tube and the ball that travels it.
 *
 * The tube is an SVG path in document coordinates, rebuilt on resize: it runs
 * down one side of the page and crosses to the other inside each `.xgap`
 * band, so it never passes over content. It is stroked twice — once dark,
 * once light — and each stroke's paint is a vertical gradient that fades one
 * theme into the other over the same 80px the section backgrounds blend
 * across.
 *
 * The ball is docked in the hero (where `window.WK3D` owns it), hands off to
 * the tube on the first scroll, and hands back when you return to the top.
 */
export default function useRailBall({ railRef, svgRef, nodesRef, ballRef, spinRef, artRef, hballRef }) {
  useEffect(() => {
    const rail = railRef.current;
    const rsvg = svgRef.current;
    const rnodes = nodesRef.current;
    const ball = ballRef.current;
    const spin = spinRef.current;
    const art = artRef.current;
    if (!rail || !rsvg || !rnodes || !ball || !art) return undefined;

    const JOIN = 80; // must match --join in global.css
    let SEG = [];
    let KEYS = [];
    let TOTAL = 0;
    let xL = 0;
    let xR = 0;
    let T = 28;
    let BD = 22;
    let nodes = [];
    let fills = [];
    let drawn = [];
    let FILLS = []; // the trail, chopped into short pieces
    let built = ''; // what the current SVG was built for, so we can reuse it
    let defsMarkup = () => '';
    let curLen = 0;
    let rolled = 0;

    const P = { x: 0, y: 0, s: 100, o: 0, init: false };
    let mode = 'dock';
    let lastT = performance.now();

    const heroBall = () => {
      if (window.WK3D && window.WK3D.ok) return window.WK3D.ballScreen();
      const r = hballRef.current
        ? hballRef.current.getBoundingClientRect()
        : { left: 0, top: 0, width: 100, height: 100 };
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, s: r.width };
    };
    const setDocked = (d) => {
      if (window.WK3D && window.WK3D.ok) window.WK3D.setFree(!d);
      else if (hballRef.current) hballRef.current.style.visibility = d ? '' : 'hidden';
    };

    function lenAtY(y) {
      if (!KEYS.length) return 0;
      if (y <= KEYS[0][0]) return 0;
      for (let i = 1; i < KEYS.length; i++) {
        if (y <= KEYS[i][0]) {
          const a = KEYS[i - 1];
          const b = KEYS[i];
          return a[1] + ((b[1] - a[1]) * (y - a[0])) / Math.max(1e-6, b[0] - a[0]);
        }
      }
      return TOTAL;
    }

    function pointAt(L) {
      const len = Math.max(0, Math.min(TOTAL, L));
      for (let i = 0; i < SEG.length; i++) {
        const g = SEG[i];
        if (len <= g.L0 + g.len || i === SEG.length - 1) {
          const t = Math.max(0, Math.min(1, (len - g.L0) / g.len));
          if (g.t === 'l') return { x: g.x1 + (g.x2 - g.x1) * t, y: g.y1 + (g.y2 - g.y1) * t };
          const th = (t * Math.PI) / 2;
          if (g.t === 'a1') return { x: g.cx + g.r * (-g.dir * Math.cos(th)), y: g.cy + g.r * Math.sin(th) };
          return { x: g.cx + g.r * (g.dir * Math.sin(th)), y: g.cy - g.r * Math.cos(th) };
        }
      }
      return { x: xR, y: 0 };
    }

    /**
     * The two stroke sets, and the vertical gradients that fade between them.
     *
     * This used to be two SVG masks. A mask carries its own raster surface the
     * size of the masked content — document-tall here — and Chrome repainted
     * it as the page scrolled, which cost more than everything else on the
     * page put together. The same crossfade is now baked into each stroke's
     * paint: one gradient per stroke, running the height of the document,
     * opaque where that theme owns the tube and ramping to nothing over the
     * same 80px the section backgrounds blend across.
     */
    function strokeSet(theme) {
      const dark = theme === 'dark';
      return [
        [dark ? '#8c64ff' : '#7850f0', dark ? 0.07 : 0.1, T + 18],
        [dark ? '#000000' : '#50328c', dark ? 0.45 : 0.1, T + 6],
        [dark ? '#ffffff' : '#5a2ea6', dark ? 0.26 : 0.25, T],
        [dark ? '#100d18' : '#ffffff', dark ? 0.9 : 0.7, T - 3],
        [dark ? '#ffffff' : '#9673eb', dark ? 0.07 : 0.14, T * 0.42],
        ['#ffffff', dark ? 0.28 : 0.95, 1.1],
      ];
    }

    /**
     * One gradient per stroke, running the height of the document: the dark
     * theme's colour outside the light zones, the light theme's inside, and a
     * crossfade over the same 80px the section backgrounds blend across.
     *
     * Each stroke used to be drawn twice, once per theme, each set clipped by
     * a document-tall SVG mask. The masks were the most expensive thing on the
     * page to rasterise while scrolling, and drawing every stroke twice meant
     * blending 25,000px of translucent tube twice over. One pass, no masks.
     */
    function gradients(zones, docH) {
      const dark = strokeSet('dark');
      const light = strokeSet('light');
      return dark
        .map(([dc, da], i) => {
          const [lc, la] = light[i];
          const at = (y) => Math.min(1, Math.max(0, y / docH)).toFixed(5);
          const stop = (off, c, a) => `<stop offset="${off}" stop-color="${c}" stop-opacity="${a}"/>`;
          let body = stop('0', dc, da);
          zones.forEach((z) => {
            body +=
              stop(at(z.top), dc, da) +
              stop(at(z.top + JOIN), lc, la) +
              stop(at(z.bot - JOIN), lc, la) +
              stop(at(z.bot), dc, da);
          });
          return (
            `<linearGradient id="tg-${i}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="${docH}">` +
            body +
            stop('1', dc, da) +
            `</linearGradient>`
          );
        })
        .join('');
    }

    /**
     * The tube: six strokes, under the trail and over it, each cut into
     * chunks a couple of screens long.
     *
     * A single path the height of the document made every newly exposed tile
     * clip against 25,000px of geometry, and made any transform on the group
     * re-process all of it. Short static paths cost the rasteriser almost
     * nothing, and the chunk seams are invisible: the pieces abut exactly and
     * the caps are butt.
     */
    const TUBE_CHUNK = 4; // trail pieces per tube chunk, ~2400px
    function strokes(part) {
      const set = strokeSet('dark');
      const range = part === 'gloss' ? [4, 6] : [0, 4];
      let out = '';
      for (let c = 0; c < FILLS.length; c += TUBE_CHUNK) {
        const d = FILLS.slice(c, c + TUBE_CHUNK).map((f) => f.d).join('');
        for (let i = range[0]; i < range[1]; i++) {
          out +=
            `<path class="rail-stroke" d="${d}" fill="none" stroke="url(#tg-${i})" ` +
            `stroke-width="${set[i][2]}" stroke-linecap="butt" stroke-linejoin="round"/>`;
        }
      }
      return out;
    }

    /**
     * The violet trail: unmasked, the same on both themes, and chopped into
     * pieces of at most 600px. A frame only rewrites the piece the head is
     * crossing, so the repainted area is a short strip and not the whole run.
     */
    const CHUNK = 600;
    function buildFills() {
      FILLS = [];
      SEG.forEach((g) => {
        if (g.t !== 'l') {
          FILLS.push({ d: g.d, len: g.len, L0: g.L0 });
          return;
        }
        const n = Math.max(1, Math.ceil(g.len / CHUNK));
        for (let k = 0; k < n; k++) {
          const a = k / n;
          const b = (k + 1) / n;
          const x1 = g.x1 + (g.x2 - g.x1) * a;
          const y1 = g.y1 + (g.y2 - g.y1) * a;
          const x2 = g.x1 + (g.x2 - g.x1) * b;
          const y2 = g.y1 + (g.y2 - g.y1) * b;
          FILLS.push({ d: `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`,
            len: g.len / n, L0: g.L0 + g.len * a });
        }
      });
    }
    function fillPaths() {
      return FILLS.map(
        (f, i) =>
          `<path class="rail-fill" data-seg="${i}" d="${f.d}" fill="none" stroke="rgba(150,112,240,.38)" stroke-width="${T - 7}" stroke-linecap="butt" stroke-dasharray="${f.len.toFixed(2)}" stroke-dashoffset="${f.len.toFixed(2)}"/>`,
      ).join('');
    }

    function layoutRail() {
      const vw = document.documentElement.clientWidth;
      const sy = window.scrollY;
      const railW = vw < 700 ? 20 : vw < 1100 ? 40 : 64;
      T = vw < 700 ? 12 : vw < 1100 ? 18 : 28;
      BD = Math.round(T * 0.78);
      const margin = Math.max(0, (vw - 1280) / 2);
      const pad = Math.max(0, railW + 6 - margin);
      const prevPad = document.documentElement.style.getPropertyValue('--rail-pad');
      document.documentElement.style.setProperty('--rail-pad', `${pad}px`);
      if (prevPad !== `${pad}px`) invalidateLayout(); // the gutters moved; re-measure
      document.documentElement.style.setProperty(
        '--rail-edge',
        `${Math.round(railW + 6 > margin ? railW + 10 : margin / 2 + T / 2 + 10)}px`,
      );
      xR = margin >= railW + 6 ? vw - margin / 2 : vw - (railW + 6) / 2;
      xL = vw - xR;

      const ar = art.getBoundingClientRect();
      const y0 = ar.top + sy + ar.height * 0.6;
      const contact = document.getElementById('contact');
      if (!contact) return;
      const cr = contact.getBoundingClientRect();
      const yEnd = cr.top + sy + Math.min(cr.height * 0.42, 480);

      const gaps = [...document.querySelectorAll('.xgap')]
        .map((g) => {
          const r = g.getBoundingClientRect();
          return { top: r.top + sy, bot: r.bottom + sy, c: r.top + sy + r.height / 2, h: r.height };
        })
        .filter((g) => g.top > y0 + 60 && g.bot < yEnd - 60);

      SEG = [];
      KEYS = [[y0, 0]];
      let x = xR;
      let y = y0;
      let L = 0;
      let d = `M${x} ${y}`;
      const line = (x2, y2) => {
        const len = Math.hypot(x2 - x, y2 - y);
        if (len < 0.01) return;
        SEG.push({ t: 'l', x1: x, y1: y, x2, y2, L0: L, len, d: `M${x} ${y} L${x2} ${y2}` });
        L += len;
        x = x2;
        y = y2;
        d += ` L${x2} ${y2}`;
      };

      gaps.forEach((g) => {
        const dir = x > vw / 2 ? -1 : 1;
        const x1 = dir < 0 ? xL : xR;
        const r = Math.max(10, Math.min(46, g.h / 2 - 8));
        const lenAtTop = L + (g.top - y);
        line(x, g.c - r);
        SEG.push({ t: 'a1', cx: x + dir * r, cy: g.c - r, r, dir, L0: L, len: (Math.PI * r) / 2,
          sx: x, sy: y, acmd: `A${r} ${r} 0 0 ${dir < 0 ? 1 : 0} ${x + dir * r} ${g.c}`,
          d: `M${x} ${y} A${r} ${r} 0 0 ${dir < 0 ? 1 : 0} ${x + dir * r} ${g.c}` });
        L += (Math.PI * r) / 2;
        d += ` A${r} ${r} 0 0 ${dir < 0 ? 1 : 0} ${x + dir * r} ${g.c}`;
        x += dir * r;
        y = g.c;
        line(x1 - dir * r, g.c);
        SEG.push({ t: 'a2', cx: x1 - dir * r, cy: g.c + r, r, dir, L0: L, len: (Math.PI * r) / 2,
          sx: x, sy: y, acmd: `A${r} ${r} 0 0 ${dir < 0 ? 0 : 1} ${x1} ${g.c + r}`,
          d: `M${x} ${y} A${r} ${r} 0 0 ${dir < 0 ? 0 : 1} ${x1} ${g.c + r}` });
        L += (Math.PI * r) / 2;
        d += ` A${r} ${r} 0 0 ${dir < 0 ? 0 : 1} ${x1} ${g.c + r}`;
        x = x1;
        y = g.c + r;
        KEYS.push([g.top, lenAtTop]);
        KEYS.push([g.bot, L + (g.bot - y)]);
      });

      line(x, yEnd);
      KEYS.push([yEnd, L]);
      TOTAL = L;

      // size the rail from the footer, never from scrollHeight: an absolutely
      // positioned layer measured against the document feeds its own height back in
      const foot = document.querySelector('.footer') || contact;
      const docH = Math.ceil(Math.max(yEnd + 100, foot.getBoundingClientRect().bottom + sy));
      // The SVG is the size of the window, not the document: a 25,000px canvas
      // is far past what the compositor will promote, and every pixel of it
      // was being rasterised through a mask as it scrolled into view. The tube
      // is still drawn in document coordinates; a group slides it into place.
      rsvg.setAttribute('width', vw);
      rsvg.setAttribute('height', docH);
      rsvg.setAttribute('viewBox', `0 0 ${vw} ${docH}`);
      rail.style.height = `${docH}px`;

      // the light zones, as document-space bands, feathered at both ends
      const lightZones = [...document.querySelectorAll('.zone.theme-light')].map((z) => {
        const r = z.getBoundingClientRect();
        return { top: r.top + sy, bot: r.bottom + sy };
      });
      defsMarkup = () =>
        gradients(lightZones, docH) +
        '<linearGradient id="chromeG" x1="0" x2="1">' +
        '<stop offset="0" stop-color="#6f6690"/><stop offset=".35" stop-color="#f3effa"/>' +
        '<stop offset=".6" stop-color="#8e86ad"/><stop offset="1" stop-color="#d8ccff"/></linearGradient>';

      buildFills();
      const sig = `${vw}|${T}|${FILLS.length}`;
      if (sig === built && rsvg.querySelector('.rail-tube')) {
        rsvg.querySelector('defs').innerHTML = defsMarkup();
        rsvg.querySelector('.rail-tube').innerHTML = strokes('body');
        rsvg.querySelector('.rail-gloss').innerHTML = strokes('gloss');
        FILLS.forEach((f, i) => {
          const el = fills[i];
          if (!el) return;
          el.setAttribute('d', f.d);
          el.setAttribute('stroke-dasharray', f.len.toFixed(2));
        });
        drawn = FILLS.map(() => -1);
        const capEl = rsvg.querySelector('.rail-cap');
        if (capEl) capEl.setAttribute('d', `M${xR - T / 2 - 4} ${y0} L${xR + T / 2 + 4} ${y0}`);
        const endEl = rsvg.querySelector('.rail-end');
        if (endEl) {
          endEl.setAttribute('cx', x);
          endEl.setAttribute('cy', yEnd);
        }
        placeNodes();
        return;
      }
      built = sig;
      rsvg.innerHTML =
        `<defs>${defsMarkup()}</defs>` +

        `<g class="rail-tube">${strokes('body')}</g>` +
        `<g>${fillPaths()}</g>` +
        `<g class="rail-gloss">${strokes('gloss')}</g>` +
        `<path class="rail-cap" d="M${xR - T / 2 - 4} ${y0} L${xR + T / 2 + 4} ${y0}" stroke="url(#chromeG)" stroke-width="7" stroke-linecap="round"/>` +
        `<circle class="rail-end" cx="${x}" cy="${yEnd}" r="${T * 0.75}" fill="rgba(150,110,255,.22)" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>` +
        '';
      fills = FILLS.map(() => null);
      rsvg.querySelectorAll('.rail-fill').forEach((f) => {
        fills[+f.dataset.seg] = f;
      });
      drawn = FILLS.map(() => -1);


      placeNodes();

      // section markers, in the theme of the zone they sit in
      function placeNodes() {
      rnodes.innerHTML = '';
      nodes = [];
      const secs = [...document.querySelectorAll('main section[id]')].filter((s) => s.id !== 'hero');
      secs.forEach((sec) => {
        const yTop = sec.getBoundingClientRect().top + sy + 56;
        if (yTop < y0 + 20 || yTop > yEnd - 20) return;
        const l = lenAtY(yTop);
        const p = pointAt(l);
        if (Math.abs(p.y - yTop) > 2) return;
        const onLight = lightZones.some((z) => yTop > z.top + JOIN / 2 && yTop < z.bot - JOIN / 2);
        const b = document.createElement('button');
        b.className = `rnode ${p.x > vw / 2 ? 'r' : 'l'}${onLight ? ' on-light' : ''}`;
        b.style.left = `${p.x}px`;
        b.style.top = `${p.y}px`;
        const lab = sec.querySelector('.eyebrow') || sec.querySelector('.mission small');
        const name = (lab ? lab.textContent : sec.id.replace(/^./, (c) => c.toUpperCase())).trim();
        b.setAttribute('data-label', name);
        b.setAttribute('aria-label', `Go to ${name}`);
        b.addEventListener('click', () => scrollToTarget(sec, -80));
        rnodes.appendChild(b);
        nodes.push([b, l]);
      });
      }
    }

    /** Draw the trail up to `at`, touching only the segments that changed. */
    function paintFill(at) {
      for (let i = 0; i < FILLS.length; i++) {
        const g = FILLS[i];
        const local = Math.max(0, Math.min(g.len, at - g.L0));
        if (Math.abs(local - drawn[i]) < 0.25) continue;
        drawn[i] = local;
        if (fills[i]) fills[i].setAttribute('stroke-dashoffset', (g.len - local).toFixed(1));
      }
    }

    function frame(now, sy, vh) {
      const dt = Math.min(3, (now - lastT) / 16.667);
      lastT = now;
      const wantFree = sy > 24;
      let tx;
      let ty;
      let ts;
      let ease;
      let op;

      if (wantFree) {
        if (mode !== 'free') {
          const wasDock = mode === 'dock';
          mode = 'free';
          setDocked(false);
          if (wasDock) {
            const hb = heroBall();
            P.x = hb.x;
            P.y = hb.y;
            P.s = hb.s;
            P.init = true;
          }
        }
        const target = lenAtY(sy + vh * 0.55);
        const prev = curLen;
        curLen += RM ? target - curLen : (target - curLen) * (1 - Math.pow(1 - 0.09, dt));
        rolled += curLen - prev;
        const p = pointAt(curLen);
        tx = p.x;
        ty = p.y - sy;
        ts = BD;
        ease = RM ? 1 : 0.2;
        op = 1;
        paintFill(curLen);
        nodes.forEach((n) => n[0].classList.toggle('passed', curLen >= n[1] - 2));
      } else {
        const hb2 = heroBall();
        tx = hb2.x;
        ty = hb2.y;
        ts = hb2.s;
        if (mode === 'free') mode = 'return';
        if (mode === 'return') {
          ease = RM ? 1 : 0.16;
          op = 1;
          curLen += (0 - curLen) * 0.2;
          paintFill(curLen);
          if (Math.hypot(P.x - tx, P.y - ty) < 6 && Math.abs(P.s - ts) < 6) {
            mode = 'dock';
            setDocked(true);
            curLen = 0;
            nodes.forEach((n) => n[0].classList.remove('passed'));
          }
        } else {
          ease = 1;
          op = 0;
        }
      }

      if (!P.init) {
        P.x = tx;
        P.y = ty;
        P.s = ts;
        P.init = true;
      }
      const a = 1 - Math.pow(1 - ease, dt);
      P.x += (tx - P.x) * a;
      P.y += (ty - P.y) * a;
      P.s += (ts - P.s) * (1 - Math.pow(1 - (mode === 'free' ? 0.1 : 0.2), dt));
      ball.style.opacity = op;
      ball.style.transform = `translate3d(${P.x.toFixed(2)}px,${P.y.toFixed(2)}px,0) scale(${(P.s / 100).toFixed(4)})`;
      if (spin) spin.style.transform = `rotate(${(((rolled / (BD / 2)) * 57.3) % 360).toFixed(1)}deg)`;
    }

    // one loop for the page: the rail measures on layout changes only
    return subscribeScroll({
      measure: layoutRail,
      frame: (y, vh, t) => frame(t, y, vh),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

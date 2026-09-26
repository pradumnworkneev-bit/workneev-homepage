import { useEffect } from 'react';
import { RM } from '../lib/motion.js';
import { subscribeScroll } from '../lib/scroll.js';
import { PD, PM } from '../data/heroPath.js';

/**
 * The hero ball: a CSS sphere that follows the path baked out of the original
 * WebGL pipes (PD on desktop, PM on the mobile band), and exposes the same
 * `window.WK3D` API the tube engine hands off to and back from.
 */
export default function useHeroBall(artRef, hballRef) {
  useEffect(() => {
    const art = artRef.current;
    const hb = hballRef.current;
    if (!art || !hb) return undefined;

    let clock = RM ? 0 : 0.6;
    let free = false;
    let resumeAtB = false;
    let cur = { x: 0, y: 0, s: 0, ph: 'f', on: false };
    let last = performance.now();

    // the art's box is cached: the frame loop never reads layout
    let box = { width: 0, height: 0, left: 0, docTop: 0, desktop: true };
    const measure = () => {
      const r = art.getBoundingClientRect();
      box = {
        width: r.width,
        height: r.height,
        left: r.left,
        docTop: r.top + window.scrollY,
        desktop: getComputedStyle(art).position === 'absolute',
      };
    };

    const data = () => (box.desktop ? [PD, 'r'] : [PM, 'c']);

    function map(pt) {
      const [D, align] = data();
      const k = Math.max(box.width / D.W, box.height / D.H);
      const ox = align === 'r' ? box.width - D.W * k : (box.width - D.W * k) / 2;
      const oy = (box.height - D.H * k) / 2;
      return { x: ox + pt[0] * k, y: oy + pt[1] * k, s: pt[2] * k, ph: pt[3], rect: box };
    }

    function sample(t) {
      const D = data()[0];
      const i = Math.min(D.pts.length - 1, Math.max(0, Math.floor(t / 0.05)));
      const j = Math.min(D.pts.length - 1, i + 1);
      const f = t / 0.05 - i;
      const a = D.pts[i];
      const b = D.pts[j];
      return map([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, a[3]]);
    }

    const bStartT = PD.tA + PD.tF;

    function tick(now) {
      if (!box.width) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const D = data()[0];
      const CYC = D.tA + D.tF + D.tB + D.tH;
      if (!free) {
        if (!RM) clock = (clock + dt) % CYC;
        const t = RM ? D.tA + D.tF * 0.35 : clock;
        const on = t < D.tA + D.tF + D.tB;
        if (on) {
          cur = sample(t);
          hb.style.opacity = cur.ph === 'f' ? 1 : 0.78;
          hb.style.transform = `translate3d(${cur.x.toFixed(1)}px,${cur.y.toFixed(1)}px,0) scale(${(cur.s / 100).toFixed(4)})`;
        } else {
          hb.style.opacity = 0;
        }
        cur.on = on;
      }
    }

    // viewport coordinates, from the cached document-space box
    const scr = (p) => ({ x: box.left + p.x, y: box.docTop - window.scrollY + p.y, s: p.s });

    window.WK3D = {
      ok: true,
      ballScreen() {
        if (free && resumeAtB) return scr(sample(bStartT));
        return scr(sample(RM ? PD.tA + PD.tF * 0.35 : clock));
      },
      setFree(f) {
        if (f === free) return;
        if (f) {
          const p = sample(clock);
          const r = p.rect;
          resumeAtB = !(cur.on && p.x > 0 && p.y > 0 && p.x < r.width && p.y < r.height);
          free = true;
          hb.style.opacity = 0;
        } else {
          free = false;
          if (resumeAtB) {
            clock = bStartT;
            resumeAtB = false;
          }
        }
      },
    };

    const unsubscribe = subscribeScroll({ measure, frame: (y, vh, t) => tick(t) });
    return () => {
      unsubscribe();
      delete window.WK3D;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

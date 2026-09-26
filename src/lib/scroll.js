import { getLenis } from './motion.js';

/**
 * One requestAnimationFrame for the whole page.
 *
 * Everything scroll-driven subscribes here instead of adding its own scroll
 * listener. A subscriber gets two callbacks:
 *
 *   measure()  — may read layout. Runs only when the layout is marked dirty
 *                (resize, fonts, a ResizeObserver hit), never per frame.
 *   frame(y, vh, t) — must not read layout. Gets the scroll position and the
 *                viewport height already read once for everyone, and writes.
 */
const subs = new Set();
let raf = 0;
let running = false;
let dirty = true;

/** Document-space top of an element, unaffected by sticky offsets. */
export function docTop(el) {
  let y = 0;
  let n = el;
  while (n) {
    y += n.offsetTop;
    n = n.offsetParent;
  }
  return y;
}

/** Re-measure before the next frame: the page has moved things around. */
export function invalidateLayout() {
  dirty = true;
}

export function subscribeScroll(sub) {
  subs.add(sub);
  dirty = true;
  return () => subs.delete(sub);
}

function loop(t) {
  raf = requestAnimationFrame(loop);
  const lenis = getLenis();
  if (lenis) lenis.raf(t);

  if (dirty) {
    dirty = false;
    subs.forEach((s) => s.measure && s.measure());
  }
  const y = window.scrollY;
  const vh = window.innerHeight;
  subs.forEach((s) => s.frame && s.frame(y, vh, t));
}

export function startScrollLoop() {
  if (running) return;
  running = true;
  raf = requestAnimationFrame(loop);
}

export function stopScrollLoop() {
  cancelAnimationFrame(raf);
  running = false;
}

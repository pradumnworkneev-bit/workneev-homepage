/** Shared motion helpers: reduced-motion, visibility, and the Lenis instance. */
import Lenis from 'lenis';

export const prefersReducedMotion = () =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export const RM = prefersReducedMotion();

/** Run `cb` once, the first time `node` comes into view. Returns a cleanup. */
export function onVisible(node, cb, threshold = 0.25) {
  if (!node || typeof IntersectionObserver === 'undefined') {
    cb();
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          cb();
          io.disconnect();
        }
      });
    },
    { threshold },
  );
  io.observe(node);
  return () => io.disconnect();
}

let lenis = null;

export function startLenis() {
  if (lenis || RM) return null;
  try {
    // lerp rather than duration: a hard flick then settles at a fixed rate
    // instead of restarting a 1.15s tween on every wheel event
    lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });
  } catch {
    lenis = null;
  }
  return lenis;
}

export function stopLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

export const getLenis = () => lenis;

/** Smooth-scroll to an element (or the top of the page), clearing the header. */
export function scrollToTarget(target, offset) {
  const headerH =
    parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
  const off = offset == null ? -headerH - 8 : offset;
  if (lenis) {
    lenis.scrollTo(target, { offset: off, duration: 1.4 });
  } else if (target === 0) {
    window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' });
  } else {
    target.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' });
  }
}

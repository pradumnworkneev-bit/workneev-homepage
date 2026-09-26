import { useEffect, useState } from 'react';
import { docTop, subscribeScroll } from '../lib/scroll.js';

/**
 * Which zone is under the header right now — so the header (and the logo with
 * it) can switch between the light and dark palettes as the page passes
 * beneath it. Zone positions are cached; the frame only compares numbers.
 */
export default function useSectionTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let zones = [];
    let line = 112; // header height plus half the 80px blend

    return subscribeScroll({
      measure() {
        const headerH =
          parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
        line = headerH + 40;
        zones = [...document.querySelectorAll('[data-zone]')].map((z) => ({
          top: docTop(z),
          bottom: docTop(z) + z.offsetHeight,
          theme: z.getAttribute('data-zone'),
        }));
      },
      frame(y) {
        const at = y + line;
        let found = 'dark';
        for (let i = 0; i < zones.length; i++) {
          if (zones[i].top <= at && zones[i].bottom > at) found = zones[i].theme;
        }
        setTheme((t) => (t === found ? t : found));
      },
    });
  }, []);

  return theme;
}

import { useEffect, useRef } from 'react';
import { subscribeScroll } from '../lib/scroll.js';

/** The 3px reading-progress bar pinned to the top of the window. */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let max = 1;
    return subscribeScroll({
      measure() {
        max = document.documentElement.scrollHeight - window.innerHeight;
      },
      frame(y) {
        if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      },
    });
  }, []);

  return <div className="progress" ref={ref} aria-hidden="true" />;
}

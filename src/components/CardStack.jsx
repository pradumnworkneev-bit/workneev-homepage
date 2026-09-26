import { Children, useEffect, useRef } from 'react';
import { RM } from '../lib/motion.js';
import { docTop, subscribeScroll } from '../lib/scroll.js';

/**
 * A stack of sticky cards: each child sticks a little below the one before it,
 * and as the next card rises over it the covered card scales down and dims.
 *
 * Only transform and an overlay's opacity are animated — the dimming is a
 * dark pseudo-element, not a brightness filter, so a fast scroll stays cheap.
 *
 * Each child is the card itself; the wrapper and the scroll maths live here.
 */
export default function CardStack({ children, className = '' }) {
  const items = useRef([]);
  const count = Children.count(children);

  useEffect(() => {
    if (RM) return undefined;
    let tops = [];
    let stuck = [];

    return subscribeScroll({
      measure() {
        tops = items.current.map((el) => (el ? docTop(el) : 0));
        stuck = items.current.map((el) => (el ? parseFloat(getComputedStyle(el).top) || 0 : 0));
      },
      frame(y, vh) {
        for (let i = 0; i < items.current.length; i++) {
          const card = items.current[i] && items.current[i].firstElementChild;
          if (!card) continue;
          if (i + 1 >= items.current.length) {
            card.style.transform = '';
            card.style.setProperty('--dim', '0');
            continue;
          }
          const travel = Math.max(1, vh - stuck[i + 1]);
          const p = Math.min(1, Math.max(0, (vh - (tops[i + 1] - y)) / travel));
          card.style.transform = `scale(${(1 - 0.06 * p).toFixed(4)})`;
          card.style.setProperty('--dim', (p * 0.25).toFixed(3));
        }
      },
    });
  }, [count]);

  return (
    <div className={`stack ${className}`.trim()}>
      {Children.map(children, (child, i) => (
        <div
          className="stack-item"
          style={{ '--i': i }}
          ref={(el) => {
            items.current[i] = el;
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

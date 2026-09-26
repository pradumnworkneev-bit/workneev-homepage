import { Children, useEffect, useRef } from 'react';
import { RM } from '../lib/motion.js';
import { docTop, subscribeScroll } from '../lib/scroll.js';

/**
 * A stack of sticky cards: each child sticks a little below the one before it,
 * and as the next card rises over it the covered card scales down and dims.
 *
 * The frame loop writes two things and nothing else: a transform on the card,
 * which has its own layer, and the opacity of the dim overlay, which has its
 * own layer too. Both are composited, so a covered card never repaints.
 *
 * Each child is the card itself; the wrapper and the scroll maths live here.
 */
export default function CardStack({ children, className = '' }) {
  const cards = useRef([]);
  const dims = useRef([]);
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
        for (let i = 0; i < cards.current.length; i++) {
          const card = cards.current[i];
          const dim = dims.current[i];
          if (!card) continue;
          if (i + 1 >= cards.current.length) {
            card.style.transform = 'translate3d(0,0,0)';
            if (dim) dim.style.opacity = '0';
            continue;
          }
          const travel = Math.max(1, vh - stuck[i + 1]);
          const p = Math.min(1, Math.max(0, (vh - (tops[i + 1] - y)) / travel));
          card.style.transform = `translate3d(0,0,0) scale(${(1 - 0.06 * p).toFixed(4)})`;
          if (dim) dim.style.opacity = (p * 0.25).toFixed(3);
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
          <div
            className="stack-card"
            ref={(el) => {
              cards.current[i] = el;
            }}
          >
            {child}
            <i
              className="stack-dim"
              aria-hidden="true"
              ref={(el) => {
                dims.current[i] = el;
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

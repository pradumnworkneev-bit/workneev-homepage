import { useEffect, useRef, useState } from 'react';
import { RM } from '../lib/motion.js';
import { subscribeScroll } from '../lib/scroll.js';
import { dimensions } from '../data/dimensions.js';

const DWELL = 5200;

/** The nine dimensions: an accordion that advances on its own, and holds on hover. */
export default function Dimensions() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const progs = useRef([]);
  const held = useRef(false);
  const visible = useRef(false);
  const t0 = useRef(performance.now());
  const activeRef = useRef(0);
  activeRef.current = active;

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      visible.current = true;
      return undefined;
    }
    const io = new IntersectionObserver(
      (es) => {
        visible.current = es[0].isIntersecting && es[0].intersectionRatio > 0.2;
      },
      { threshold: [0, 0.2, 0.5] },
    );
    if (wrapRef.current) io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (RM) return undefined;
    return subscribeScroll({
      frame(y, vh, now) {
        const bar = progs.current[activeRef.current];
        if (visible.current && !held.current) {
          const p = Math.min((now - t0.current) / DWELL, 1);
          if (bar) bar.style.transform = `scaleX(${p})`;
          if (p >= 1) {
            t0.current = now;
            progs.current.forEach((b) => b && (b.style.transform = 'scaleX(0)'));
            setActive((a) => (a + 1) % dimensions.length);
          }
        } else if (held.current) {
          t0.current = now;
        }
      },
    });
  }, []);

  const set = (i) => {
    setActive(i);
    t0.current = performance.now();
    progs.current.forEach((b) => b && (b.style.transform = 'scaleX(0)'));
  };

  return (
    <section className="band" id="dimensions">
      <div className="wrap">
        <div className="head2" data-reveal>
          <div>
            <div className="eyebrow">The nine dimensions</div>
            <h2 className="h2">Nine ways an institution can be strong, or quietly weak.</h2>
          </div>
          <p className="lede">
            These are not services you can buy separately. They are what we assess, and they interact — which
            is why the order of work matters more than the list.
          </p>
        </div>

        <div className="dims has-active" ref={wrapRef}>
          {dimensions.map((d, i) => (
            <div
              key={d.num}
              className={`dim${active === i ? ' active' : ''}`}
              tabIndex={0}
              role="button"
              aria-expanded={active === i}
              onMouseEnter={() => {
                held.current = true;
                set(i);
              }}
              onMouseLeave={() => {
                held.current = false;
                t0.current = performance.now();
              }}
              onFocus={() => {
                held.current = true;
                set(i);
              }}
              onBlur={() => {
                held.current = false;
              }}
              onClick={(e) => {
                if (!e.target.closest('a')) set(i);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  set(i);
                }
              }}
            >
              <span className="num">{d.num}</span>
              <div>
                <div className="t">
                  <a href="#dimensions">{d.title}</a>
                  <span>{d.tagline}</span>
                </div>
                <div className="more">
                  <div>
                    <div className="pts">
                      <small>What we look at</small>
                      {d.points.map((p) => (
                        <div key={p}>{p}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="prog"
                ref={(el) => {
                  progs.current[i] = el;
                }}
              />
            </div>
          ))}
        </div>

        <div className="dims-foot">
          <span>Hover any row to open and hold it · click a title to read the full dimension</span>
          <a href="#diagnostic">See how we assess them →</a>
        </div>
      </div>
    </section>
  );
}

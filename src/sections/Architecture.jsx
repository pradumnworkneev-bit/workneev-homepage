import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RM } from '../lib/motion.js';
import { docTop, invalidateLayout, subscribeScroll } from '../lib/scroll.js';

const STEPS = [
  'Aspiration', 'Diagnostic', 'Score', 'Charter',
  'Capabilities', 'Transformation', 'Measurement', 'Institutional excellence',
];
const CAP = [
  'Aspiration: what the institution intends to become.',
  'Diagnostic: two weeks inside the institution.',
  'Score: the baseline everything is measured against.',
  'Charter: an order of work someone can be held to.',
  'Capabilities: built in the order the diagnosis set.',
  'Transformation: workstreams, named people, quarterly review.',
  'Measurement: against the original baseline, not a revised one.',
  'Institutional excellence: run by your own people.',
];
const MAP = [0, 0, 1, 1, 2, 2, 3, 4];
const STAGES = ['Discover', 'Design', 'Transform', 'Measure', 'Sustain'];

/**
 * The transformation architecture, driven by the scroll: the card pins for
 * about 1.6 viewport heights while a violet fill travels a track through the
 * eight step pills, lighting each one as it arrives. The track is measured
 * from the pills themselves, so it runs straight across on a wide screen and
 * follows the pill order down the two columns on a phone.
 */
export default function Architecture() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const stepsRef = useRef(null);
  const fillRef = useRef(null);
  const ballRef = useRef(null);
  const geomRef = useRef({ pts: [], cum: [0], total: 0 });
  const [geom, setGeom] = useState({ d: '', w: 0, h: 0, total: 0 });
  const [active, setActive] = useState(RM ? STEPS.length - 1 : -1);

  // measure the pill centres; that polyline is the track
  useLayoutEffect(() => {
    const box = stepsRef.current;
    if (!box) return undefined;

    const measure = () => {
      const b = box.getBoundingClientRect();
      const pts = [...box.querySelectorAll('.astep')].map((el) => {
        const r = el.getBoundingClientRect();
        return [r.left - b.left + r.width / 2, r.top - b.top + r.height / 2];
      });
      if (pts.length < 2) return;
      const cum = [0];
      let total = 0;
      for (let i = 1; i < pts.length; i++) {
        total += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        cum.push(total);
      }
      geomRef.current = { pts, cum, total };
      invalidateLayout();
      setGeom({
        d: `M${pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L')}`,
        w: b.width,
        h: b.height,
        total,
      });
    };

    measure();
    let ro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure);
      ro.observe(box);
    }
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // drive the fill, the ball and the active step from the scroll position
  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return undefined;

    const apply = (p) => {
      const { pts, cum, total } = geomRef.current;
      if (!total) return;
      const at = p * total;
      if (fillRef.current) fillRef.current.style.strokeDashoffset = (total - at).toFixed(1);
      if (ballRef.current) {
        let i = 1;
        while (i < cum.length - 1 && cum[i] < at) i += 1;
        const t = (at - cum[i - 1]) / Math.max(1e-6, cum[i] - cum[i - 1]);
        const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * Math.min(1, t);
        const y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * Math.min(1, t);
        ballRef.current.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
        ballRef.current.style.opacity = p > 0.001 ? 1 : 0;
      }
      let k = -1;
      for (let i = 0; i < cum.length; i++) if (at >= cum[i] - 0.5) k = i;
      setActive((cur) => (cur === k ? cur : k));
    };

    if (RM) {
      apply(1);
      return undefined;
    }

    let wrapTop = 0;
    let range = 1;
    let stickyTop = 0;
    return subscribeScroll({
      measure() {
        wrapTop = docTop(wrap);
        stickyTop = parseFloat(getComputedStyle(card).top) || 0;
        range = Math.max(1, wrap.offsetHeight - card.offsetHeight);
      },
      frame(y) {
        apply(Math.min(1, Math.max(0, (y + stickyTop - wrapTop) / range)));
      },
    });
  }, [geom.total]);

  const stage = MAP[Math.max(0, active)];

  return (
    <section className="band" id="architecture">
      <div className="wrap">
        <div className="arch-scroll" ref={wrapRef}>
          {/* heading and card pin together, so the frame reads as one thing */}
          <div className="arch-sticky" ref={cardRef}>
            <div data-reveal>
              <div className="eyebrow">The Workneev transformation architecture</div>
              <h2 className="h2">One institution-wide architecture, not a set of projects.</h2>
            </div>
            <div className="card arch">
            <div className="arch-steps" ref={stepsRef}>
              <svg
                className="arch-rail"
                width={geom.w || 1}
                height={geom.h || 1}
                viewBox={`0 0 ${geom.w || 1} ${geom.h || 1}`}
                aria-hidden="true"
              >
                {geom.d && (
                  <>
                    <path className="t-base" d={geom.d} />
                    <path className="t-glass" d={geom.d} />
                    <path
                      className="t-fill"
                      d={geom.d}
                      ref={fillRef}
                      strokeDasharray={geom.total}
                      strokeDashoffset={RM ? 0 : geom.total}
                    />
                  </>
                )}
              </svg>
              {STEPS.map((s, i) => (
                <div
                  key={s}
                  className={`astep${i === active ? ' on' : ''}${i < active ? ' done' : ''}${i === STEPS.length - 1 ? ' last' : ''}`}
                >
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </div>
              ))}
              <i className="arch-ball" ref={ballRef} aria-hidden="true" style={{ opacity: RM ? 1 : 0 }} />
            </div>

            <div className="eyebrow m" style={{ marginTop: 28 }}>
              Five stages of delivery
            </div>
            <div className="stages">
              {STAGES.map((s, i) => (
                <div key={s} className={`stage${active >= 0 && i <= stage ? ' on' : ''}`}>
                  {s}
                </div>
              ))}
            </div>
              <div className="arch-cap">
                <span className="hint">
                  {active >= 0 ? CAP[active] : 'Each step is built on the one before it.'}
                </span>
              </div>
            </div>
          </div>
          <div className="arch-spacer" aria-hidden="true" />
        </div>

        <p className="arch-p" data-reveal>
          The architecture is why a programme compounds instead of resetting. Each step is built on the one
          before it, and every one of them is measured against the baseline the diagnostic set.
        </p>
      </div>
    </section>
  );
}

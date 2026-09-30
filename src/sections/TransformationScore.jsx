import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { RM, onVisible } from '../lib/motion.js';
import { DIMS, FULL, MEDIAN, ROWS } from '../data/score.js';

const R = 180;
const pt = (i, v) => {
  const a = ((-90 + i * 40) * Math.PI) / 180;
  return [(Math.cos(a) * R * v) / 100, (Math.sin(a) * R * v) / 100];
};
const poly = (vals) => DIMS.map((d, i) => pt(i, vals(d, i)).join(',')).join(' ');

function Radar({ showMedian }) {
  const svgRef = useRef(null);
  const tipRef = useRef(null);
  const [on, setOn] = useState(-1);

  const show = (i) => {
    setOn(i);
    const svg = svgRef.current;
    const tip = tipRef.current;
    if (!svg || !tip) return;
    const d = DIMS[i];
    const v = pt(i, d[1]);
    const s = svg.getBoundingClientRect().width / 520;
    tip.style.left = `${(v[0] + 260) * s}px`;
    tip.style.top = `${(v[1] + 240) * s}px`;
  };

  return (
    <div className="radar-wrap">
      <svg
        ref={svgRef}
        className={`radar${showMedian ? '' : ' no-median'}`}
        viewBox="-260 -240 520 480"
        role="img"
        aria-label="Illustrative radar of nine dimensions. Constraints: Strategy, Industry, Autonomy."
      >
        <g>
          {[25, 50, 75, 100].map((p) => (
            <circle key={p} className="ring" r={(R * p) / 100} />
          ))}
          <polygon className="median" points={poly(() => MEDIAN)} />
          <polygon className="shape" points={poly((d) => d[1])} />
          {DIMS.map((d, i) => {
            const e = pt(i, 100);
            const l = pt(i, 118);
            const v = pt(i, d[1]);
            return (
              <g
                key={d[0]}
                className={`axis${on === i ? ' on' : ''}`}
                tabIndex={0}
                aria-label={`${FULL[i]}, ${d[1]}${d[2] ? ', constraint' : ''}`}
                onMouseEnter={() => show(i)}
                onMouseLeave={() => setOn(-1)}
                onFocus={() => show(i)}
                onBlur={() => setOn(-1)}
              >
                <line className="spoke" x1="0" y1="0" x2={e[0]} y2={e[1]} />
                <text
                  className="lbl"
                  x={l[0]}
                  y={l[1] + 4}
                  textAnchor={Math.abs(l[0]) < 10 ? 'middle' : l[0] > 0 ? 'start' : 'end'}
                >
                  {d[0]}
                </text>
                <circle className={`v${d[2] ? ' c' : ''}`} cx={v[0]} cy={v[1]} r={d[2] ? 7 : 4.5} />
                <circle className="hit" cx={v[0]} cy={v[1]} r="22" />
              </g>
            );
          })}
        </g>
      </svg>
      <div className={`tip${on >= 0 ? ' on' : ''}`} ref={tipRef} role="status">
        {on >= 0 && (
          <>
            <b>{FULL[on]}</b>
            {`${DIMS[on][1]} / 100${DIMS[on][2] ? ' · constraint' : ` · peer median ${MEDIAN}`}`}
          </>
        )}
      </div>
    </div>
  );
}

export default function TransformationScore() {
  const [median, setMedian] = useState(true);
  const [focus, setFocus] = useState(false);
  const [sort, setSort] = useState('score');
  const [grow, setGrow] = useState(true);
  const [score, setScore] = useState(67); // counts up from 0 once the bars show
  const barsRef = useRef(null);
  const rowRefs = useRef(new Map());
  const prevPos = useRef(new Map());

  const rows = [...ROWS].sort((a, b) => (sort === 'score' ? b.s - a.s : a.o - b.o));

  // grow the bars and count the headline number up, the first time they show
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return undefined;
    if (RM || el.getBoundingClientRect().top < window.innerHeight) {
      setGrow(false);
      setScore(67);
      return undefined;
    }
    let raf = 0;
    const stop = onVisible(
      el,
      () => {
        setGrow(false);
        setScore(0);
        const start = performance.now();
        const step = (n) => {
          const p = Math.min((n - start) / 1400, 1);
          setScore(Math.round(67 * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      0.2,
    );
    return () => {
      stop();
      cancelAnimationFrame(raf);
    };
  }, []);

  // FLIP: slide each bar from where it was to where the new order puts it
  useLayoutEffect(() => {
    if (RM) return;
    rowRefs.current.forEach((el, key) => {
      const was = prevPos.current.get(key);
      const now = el.getBoundingClientRect().top;
      if (was != null && was !== now) {
        el.style.transition = 'none';
        el.style.transform = `translateY(${was - now}px)`;
        void el.getBoundingClientRect();
        el.style.transition = '';
        el.style.transform = '';
      }
      prevPos.current.set(key, now);
    });
  }, [sort]);

  const remember = () => {
    rowRefs.current.forEach((el, key) => prevPos.current.set(key, el.getBoundingClientRect().top));
  };

  return (
    <section className="band" id="score">
      <div className="wrap">
        <div className="score-head" data-reveal>
          <div>
            <div className="eyebrow">The instrument</div>
            <h2 className="h2">Institutional Transformation Score</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="big">
              <span>{score}</span>
              <small>/100</small>
            </div>
            <div className="hint" style={{ marginTop: 8 }}>
              Illustrative. Not an actual institution’s result.
            </div>
          </div>
        </div>
        <p className="lede" style={{ marginTop: 20 }} data-reveal>
          Composite of nine dimensions, weighted to the ambition the institution has stated. The vertical rule
          on each bar is the peer median, 61.
        </p>

        <div className="score-grid">
          <figure className="instrument" data-reveal>
            <div className="inst-top">
              <b>The instrument — nine dimensions</b>
              <button className="toggle" aria-pressed={median} onClick={() => setMedian((m) => !m)}>
                <span className="sw" aria-hidden="true" />
                Peer median
              </button>
            </div>
            <Radar showMedian={median} />
            <figcaption className="legend">
              <span>
                <i className="dot" />
                Constraints
              </span>
              <span>
                <i className="dash" />
                Peer median
              </span>
              <span>
                <i className="ln" />
                Illustrative
              </span>
            </figcaption>
          </figure>

          <div className="card score-card" data-reveal>
            <div className="score-tools">
              <div className="seg-ctl" role="group" aria-label="Order the bars">
                {[
                  ['score', 'By score'],
                  ['order', 'By order of work'],
                ].map(([k, label]) => (
                  <button
                    key={k}
                    aria-pressed={sort === k}
                    onClick={() => {
                      remember();
                      setSort(k);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button className="toggle" aria-pressed={focus} onClick={() => setFocus((f) => !f)}>
                <span className="sw" aria-hidden="true" />
                Show constraints only
              </button>
            </div>

            <div className="median-lbl" style={{ marginTop: 18 }}>
              <span>Peer median {MEDIAN}</span>
            </div>

            <div className={`bars${grow ? ' grow' : ''}${focus ? ' focus' : ''}`} ref={barsRef}>
              {rows.map((r, i) => (
                <div
                  className={`brow${r.c ? ' c' : ''}`}
                  key={r.label}
                  ref={(el) => {
                    if (el) rowRefs.current.set(r.label, el);
                    else rowRefs.current.delete(r.label);
                  }}
                >
                  <span className="lbl">
                    {r.label}
                    {r.ord && <span className="tag violet ord">{r.ord}</span>}
                  </span>
                  <div className="trk">
                    <i style={{ '--v': `${r.s}%`, '--bd': `${i * 0.06}s` }} />
                  </div>
                  <span className="val">{r.s}</span>
                </div>
              ))}
            </div>

            <p className="score-note">
              Marked in <b>violet</b>: the two or three constraints this institution would be told to address
              first, and in what order. Everything else is capable of waiting. The ordering, not the list, is
              the deliverable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { RM } from '../lib/motion.js';

const FACTS = [
  ['Duration', 'Two weeks'],
  ['Assessment', 'Nine dimensions'],
  ['Deliverable', '30–50 page report and a leadership session'],
  ['Terms', 'Paid engagement, fixed fee'],
];

const PHASES = [
  { from: 1, to: 2, c: 'var(--d1)', days: 'Days 1–2', name: 'Alignment',
    body: 'Interviews with the chairman, vice-chancellor or principal, and with the people who actually run the institution day to day.' },
  { from: 3, to: 7, c: 'var(--d2)', days: 'Days 3–7', name: 'Evidence',
    body: 'Academic, governance, data and technology systems examined as they are used, rather than as they are described.' },
  { from: 8, to: 11, c: 'var(--d3)', days: 'Days 8–11', name: 'Scoring',
    body: 'The nine dimensions scored against the instrument, with the reasoning behind each judgment recorded.' },
  { from: 12, to: 14, c: 'var(--d4)', days: 'Days 12–14', name: 'Judgment',
    body: 'The constraints identified, the order of work set, and the report written for a governing body to argue with.' },
];

const DELIVERABLES = [
  ['01', 'Institutional Transformation Score', 'Dimension by dimension, against a defined scale and the peer median.'],
  ['02', 'Pathway readiness position', 'Where you stand against the pathway you are pursuing — autonomy, university status, an accreditation cycle or NEP implementation.'],
  ['03', 'Constraint identification', 'The two or three constraints actually limiting the institution, and the reasoning behind that judgment.'],
  ['04', 'Twelve-month order of work', 'What to build immediately, what to defer, and a three-year direction.'],
  ['05', 'Technology, faculty and student position', 'A written view on each of the three, and on how they interact.'],
  ['06', 'Recommended transformation architecture', 'The architecture we would put in place, and what it would cost.'],
];

const colorFor = (d) => (PHASES.find((p) => d >= p.from && d <= p.to) || {}).c;

export default function Diagnostic({ onPrefill }) {
  // `lit` is either a day count (playback) or a [from,to] range (a phase)
  const [lit, setLit] = useState({ upTo: 14, only: null });
  const [selected, setSelected] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const timer = useRef(null);

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setPlaying(false);
  };

  useEffect(() => () => stop(), []);

  const play = () => {
    if (timer.current) {
      stop();
      return;
    }
    let d = 0;
    setSelected(-1);
    setPlaying(true);
    timer.current = setInterval(
      () => {
        d += 1;
        setLit({ upTo: d, only: null });
        const idx = PHASES.findIndex((p) => d >= p.from && d <= p.to);
        setSelected(idx);
        if (d >= 14) stop();
      },
      RM ? 50 : 420,
    );
  };

  const pick = (i) => {
    stop();
    setSelected(i);
    setLit({ upTo: 0, only: [PHASES[i].from, PHASES[i].to] });
  };

  const isLit = (d) => (lit.only ? d >= lit.only[0] && d <= lit.only[1] : d <= lit.upTo);

  return (
    <section className="band" id="diagnostic">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow">The Institutional Diagnostic</div>
          <h2 className="h2">Every engagement begins the same way.</h2>
        </div>
        <div className="diag-text" data-reveal>
          <p>
            Before we propose anything, we spend two weeks inside the institution. We interview leadership,
            examine what the institution already knows about itself, and assess nine dimensions that between
            them determine whether it can reach its next stage.
          </p>
          <p>
            What comes back is not a list of everything imperfect. Any competent observer can produce that in
            an afternoon. It is a scored baseline, an ordered set of constraints, and a considered judgment
            about what to do first — with the reasoning shown, so that your governing body can argue with it.
          </p>
        </div>

        <div className="facts" data-reveal>
          {FACTS.map(([k, v]) => (
            <div className="fact" key={k}>
              <small>{k}</small>
              <b>{v}</b>
            </div>
          ))}
        </div>

        <div className="two-weeks" data-reveal>
          <div className="tw-tools">
            <div className="eyebrow m">Inside the two weeks</div>
            <button
              className="btn btn-secondary"
              style={{ minHeight: 38, padding: '0 16px', fontSize: 13.5 }}
              onClick={play}
            >
              {playing ? '❚❚ Pause' : '▶ Play the two weeks'}
            </button>
          </div>
          <div className="days" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => i + 1).map((d) => (
              <div
                className={`day${isLit(d) ? ' lit' : ''}`}
                key={d}
                style={isLit(d) ? { background: colorFor(d) } : undefined}
              >
                {d}
              </div>
            ))}
          </div>
          <div className="phases">
            {PHASES.map((p, i) => (
              <button key={p.name} className="phase" aria-pressed={selected === i} onClick={() => pick(i)}>
                <i style={{ background: p.c }} />
                <small>{p.days}</small>
                <b>{p.name}</b>
                <p>{p.body}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="left-with">
          <div className="panel theme-dark" data-reveal>
            <div className="eyebrow">What leadership is left with</div>
            <p style={{ fontSize: 'clamp(20px,2vw,26px)', lineHeight: 1.3, fontWeight: 700, color: 'var(--heading)' }}>
              Six things, in writing, that your governing body can argue with.
            </p>
            <p>
              It is a paid engagement, not a courtesy audit. That is deliberate. Free assessments are written
              to win the work that follows them.
            </p>
            <a className="btn btn-primary" href="#contact" onClick={() => onPrefill('The Diagnostic')}>
              Book a Diagnostic
            </a>
          </div>
          <div className="deliv" data-reveal style={{ '--d': '.08s' }}>
            {DELIVERABLES.map(([n, title, body], i) => (
              <details key={n} open={i === 0}>
                <summary>
                  <span className="num">{n}</span>
                  {title}
                  <span className="pm">+</span>
                </summary>
                <div className="body">{body}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

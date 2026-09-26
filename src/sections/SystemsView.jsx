import { useEffect, useRef, useState } from 'react';
import { RM } from '../lib/motion.js';
import { subscribeScroll } from '../lib/scroll.js';

const N = [
  ['GOVERNANCE', 500, 90],
  ['ACADEMIC', 250, 200],
  ['FACULTY', 640, 265],
  ['AUTONOMY', 830, 165],
  ['STUDENT', 420, 345],
  ['RESEARCH', 180, 430],
  ['INDUSTRY', 790, 400],
  ['QUALITY', 560, 480],
  ['DIGITAL', 330, 525],
];
const E = [
  [0, 1], [0, 2], [0, 3], [0, 7], [1, 2], [1, 4], [1, 5], [2, 4], [2, 6],
  [4, 6], [4, 7], [4, 8], [5, 7], [7, 8], [3, 7], [6, 8], [5, 8],
];
const CAP = [
  'One node strengthened. Nothing around it moves.',
  'Another strengthened. Still no connection between them.',
  'A gain that nothing supports falls back.',
  'Worked in order, as a system: the connections carry the change.',
];
const STEPS = [
  ['01 · One piece strengthened',
    'You can run a well-designed faculty development programme and see nothing change in the classroom, because the academic structure never gave anyone room to teach differently.'],
  ['02 · And another',
    'You can build industry relationships that produce nothing, because no one owns the curriculum they were meant to inform. You can install a capable system and still be unable to answer a simple question about your own institution.'],
  ['03 · And it falls back',
    'You can lift a placement percentage for one batch and watch it fall back the next, because nothing underneath it changed. None of this is a failure of effort.'],
  ['04 · In order, as a system',
    'A great deal of activity; very little that compounds. That distance — between the institution you have and the institution you intend — is what we work on. Not one department of it.'],
];

const DWELL = 2800; // ms per step
const EDGE_STAGGER = 30; // ms between edges in the step-4 cascade

function nodeClass(step, i) {
  if (step === 3) return 'node win';
  if (step === 0) return i === 2 ? 'node on' : 'node';
  if (step === 1) return i === 2 || i === 6 || i === 8 ? 'node on' : 'node';
  if (step === 2) {
    if (i === 2 || i === 6) return 'node on';
    if (i === 4) return 'node fall';
  }
  return 'node';
}

export default function SystemsView() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(!RM);
  const [litEdges, setLitEdges] = useState(0);
  const bars = useRef([]);
  const figRef = useRef(null);
  const visible = useRef(false);
  const t0 = useRef(performance.now());
  const stateRef = useRef({ step: 0, playing: !RM });
  stateRef.current = { step, playing };

  // the winning cascade on the last step
  useEffect(() => {
    if (step !== 3) {
      setLitEdges(0);
      return undefined;
    }
    if (RM) {
      setLitEdges(E.length);
      return undefined;
    }
    const timers = E.map((_, i) => setTimeout(() => setLitEdges((n) => Math.max(n, i + 1)), i * EDGE_STAGGER));
    return () => timers.forEach(clearTimeout);
  }, [step]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      visible.current = true;
      return undefined;
    }
    const io = new IntersectionObserver((es) => {
      visible.current = es[0].isIntersecting;
    }, { threshold: 0.3 });
    if (figRef.current) io.observe(figRef.current);
    return () => io.disconnect();
  }, []);

  // auto-advance, with the dwell drawn as a bar under the active step
  useEffect(() => {
    if (RM) return undefined;
    let done = 0;
    return subscribeScroll({
      frame(y, vh, now) {
        const { step: cur, playing: play } = stateRef.current;
        const bar = bars.current[cur];
        if (play && visible.current) {
          const p = Math.min((now - t0.current) / DWELL, 1);
          done = p;
          if (bar) bar.style.transform = `scaleX(${p})`;
          if (p >= 1) {
            t0.current = now;
            done = 0;
            bars.current.forEach((b) => b && (b.style.transform = 'scaleX(0)'));
            setStep((s) => (s + 1) % STEPS.length);
          }
        } else {
          t0.current = now - done * DWELL;
        }
      },
    });
  }, []);

  const go = (i) => {
    setStep(i);
    t0.current = performance.now();
    bars.current.forEach((b) => b && (b.style.transform = 'scaleX(0)'));
  };

  return (
    <section className="band" id="systems">
      <div className="wrap systems">
        <div data-reveal>
          <div className="eyebrow">Why effort stops compounding</div>
          <h2 className="h2">Institutions do not transform one piece at a time. They change as systems.</h2>
          <div className="sys-steps">
            {STEPS.map(([head, body], i) => (
              <button
                key={head}
                className="sys-step"
                aria-pressed={step === i}
                onClick={() => go(i)}
              >
                <b>{head}</b>
                <p>{body}</p>
                <span
                  className="bar-t"
                  ref={(el) => {
                    bars.current[i] = el;
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <figure className="sys-fig" data-reveal style={{ '--d': '.1s' }} ref={figRef}>
          <svg
            className="net"
            viewBox="0 0 1000 600"
            role="img"
            aria-label="Network of nine institutional dimensions; the highlighted parts change with each step"
          >
            <g>
              {E.map(([a, b], i) => (
                <line
                  key={`${a}-${b}`}
                  className={`edge${step === 3 && i < litEdges ? ' win' : ''}`}
                  x1={N[a][1]}
                  y1={N[a][2]}
                  x2={N[b][1]}
                  y2={N[b][2]}
                />
              ))}
            </g>
            <g>
              {N.map((n, i) => (
                <g key={n[0]} className={nodeClass(step, i)}>
                  <circle cx={n[1]} cy={n[2]} r="14" />
                  <text x={n[1]} y={n[2] - 24} textAnchor="middle">
                    {n[0]}
                  </text>
                </g>
              ))}
            </g>
          </svg>
          <figcaption className="net-cap">
            <span className="hint">{CAP[step]}</span>
            <button
              className="btn btn-secondary"
              style={{ minHeight: 36, padding: '0 14px', fontSize: 13 }}
              onClick={() => {
                t0.current = performance.now();
                setPlaying((p) => !p);
              }}
            >
              {playing ? 'Pause' : 'Play'}
            </button>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

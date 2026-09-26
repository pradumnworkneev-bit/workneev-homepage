import { useEffect, useRef, useState } from 'react';
import { RM, onVisible } from '../lib/motion.js';

const PAY = [
  ['Technology commission', '.1s', false],
  ['Placement fees', '.4s', false],
  ['A promised grade', '.7s', false],
  ['The work itself', '0s', true],
];

const PROMISES = [
  ['We take no commission on technology.', 'We hold no reseller agreement with any ERP, LMS or platform vendor. If your existing systems are adequate we will say so, which is a sentence a vendor has no reason to say.'],
  ['We take no placement or recruitment fees.', 'Industry relationships are institutional capability, not a transaction. Being paid per placed student would change what we recommend, so we are not.'],
  ['We promise no regulatory outcome.', 'Accreditation grades, autonomy and university status are decided by regulators on evidence. We build the capability and the evidence. Be cautious of anyone who offers more than that.'],
  ['We will decline the work.', 'If the diagnostic does not justify a transformation programme, we will say so. The diagnostic is priced to stand on its own precisely so that we can afford to.'],
];

export default function Independence() {
  const [struck, setStruck] = useState(false);
  const [hot, setHot] = useState(-1);
  const paidRef = useRef(null);

  useEffect(() => {
    const el = paidRef.current;
    if (!el) return undefined;
    if (RM || el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setStruck(true);
      return undefined;
    }
    return onVisible(el, () => setStruck(true), 0.5);
  }, []);

  return (
    <section className="band ink theme-dark" id="independence">
      <div className="wrap indep">
        <div data-reveal>
          <div className="eyebrow">Independence</div>
          <h2 className="h2 heavy">Where our incentives sit.</h2>
          <p className="lede" style={{ marginTop: 20 }}>
            An adviser’s recommendation is shaped by how they are paid. Ours is narrow on purpose.
          </p>
          <div
            className={`paid${struck ? ' struck' : ''}`}
            ref={paidRef}
            onMouseLeave={() => setHot(-1)}
          >
            <h3>How an adviser can be paid</h3>
            <ul>
              {PAY.map(([label, sd, yes], i) => (
                <li key={label}>
                  <button
                    className={`pay ${yes ? 'yes' : 'x'}`}
                    aria-pressed={hot === i}
                    style={{ '--sd': sd }}
                    onMouseEnter={() => setHot(i)}
                    onFocus={() => setHot(i)}
                    onClick={() => setHot(i)}
                  >
                    <span className="ic">
                      {yes ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#08120d" strokeWidth="2" aria-hidden="true">
                          <path d="M2 6.5l2.5 2.5 5.5-6" />
                        </svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--refused)" strokeWidth="2" aria-hidden="true">
                          <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" />
                        </svg>
                      )}
                    </span>
                    <span className="lbl">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="recommend">
              <span>What we recommend</span>
              <i />
            </div>
          </div>
        </div>

        <div className="promises">
          {PROMISES.map(([h, p], i) => (
            <div
              className={`promise${hot === i ? ' hot' : ''}`}
              key={h}
              data-reveal
              style={{ '--d': `${(i % 2) * 0.06}s` }}
            >
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
          <p className="coda" data-reveal>
            None of this is generosity. <span>It is what makes the advice worth paying for.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

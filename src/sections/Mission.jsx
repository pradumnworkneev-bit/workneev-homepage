import { Fragment, useEffect, useRef, useState } from 'react';
import { RM, onVisible } from '../lib/motion.js';

const TEXT =
  'To help higher-education institutions build the capabilities, systems and ecosystems they need to reach their aspirations — and to keep getting better.';

/** The mission, whose words brighten as the band scrolls in. */
export default function Mission() {
  const ref = useRef(null);
  const [dim, setDim] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (RM || !el || el.getBoundingClientRect().top <= window.innerHeight) return undefined;
    setDim(true);
    return onVisible(el, () => setDim(false), 0.4);
  }, []);

  return (
    <section className={`mission${dim ? ' pre-words' : ''}`} id="mission" ref={ref}>
      <div className="wrap">
        <small>Our mission</small>
        <p>
          {TEXT.split(' ').map((w, i) => (
            <Fragment key={`${w}-${i}`}>
              <span className="mw" style={{ '--i': i }}>
                {w}
              </span>{' '}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}

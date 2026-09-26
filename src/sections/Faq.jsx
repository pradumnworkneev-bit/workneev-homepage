import { useRef, useState } from 'react';
import { faq } from '../data/faq.js';

/** One question open at a time, unless "Open all" says otherwise. */
export default function Faq() {
  const [open, setOpen] = useState(0);
  const [all, setAll] = useState(false);
  const refs = useRef([]);

  const toggle = (i, isOpen) => {
    if (all) return;
    setOpen(isOpen ? i : -1);
  };

  return (
    <section className="band" id="faq">
      <div className="wrap faq">
        <div data-reveal>
          <div className="eyebrow">For institutional leaders</div>
          <h2 className="h2">Questions we are asked.</h2>
          <div className="ctas" style={{ marginTop: 24 }}>
            <button
              className="btn btn-secondary"
              style={{ minHeight: 40, fontSize: 13.5 }}
              onClick={() => {
                const next = !all;
                setAll(next);
                setOpen(next ? -1 : 0);
              }}
            >
              {all ? 'Close all' : 'Open all'}
            </button>
          </div>
        </div>
        <div data-reveal>
          {faq.map((item, i) => (
            <details
              key={item.q}
              open={all || open === i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onToggle={(e) => toggle(i, e.currentTarget.open)}
            >
              <summary>
                {item.q}
                <i aria-hidden="true">+</i>
              </summary>
              <div className="ans">
                {item.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

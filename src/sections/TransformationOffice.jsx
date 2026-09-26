import { useState } from 'react';

const FUNCTIONS = [
  ['Programme management', '-14px', '18px', '-6deg', '0s'],
  ['Institutional analytics', '20px', '-10px', '5deg', '.05s'],
  ['Academic and quality support', '-8px', '-16px', '4deg', '.1s'],
  ['Faculty development', '16px', '22px', '-4deg', '.15s'],
  ['Industry and placement', '-22px', '8px', '7deg', '.2s'],
  ['Technology and data', '12px', '-20px', '-7deg', '.25s'],
];

export default function TransformationOffice() {
  const [owned, setOwned] = useState(true);

  return (
    <section className="band" id="office">
      <div className="wrap office">
        <div data-reveal>
          <div className="seg-ctl" role="group" aria-label="Who owns the transformation">
            <button aria-pressed={!owned} onClick={() => setOwned(false)}>
              Nobody owns it
            </button>
            <button aria-pressed={owned} onClick={() => setOwned(true)}>
              Somebody does
            </button>
          </div>
          <h2 className="h2">Somebody has to own it.</h2>
          <p className="lede">
            Transformation programmes rarely fail on strategy. They fail because the work is handed to people
            who already have full jobs, coordination belongs to nobody in particular, and within two quarters
            the programme has become a standing agenda item that nothing happens to.
          </p>
          <p className="strong">
            We do not run your institution. We run the transformation machinery alongside your leadership
            until your own people can run it — which is the point at which we should be leaving.
          </p>
        </div>

        <div className={`card office-card${owned ? '' : ' nobody'}`} data-reveal style={{ '--d': '.1s' }}>
          <div className="office-core">
            <div>
              <small>The Transformation Office — established inside the institution</small>
              <b>Transformation Office</b>
            </div>
            <span className="ok">Run by your people</span>
          </div>
          <div className="functions">
            {FUNCTIONS.map(([label, sx, sy, sr, fd]) => (
              <div key={label} style={{ '--sx': sx, '--sy': sy, '--sr': sr, '--fd': fd }}>
                {label}
              </div>
            ))}
          </div>
          <p className="foot">With access to the Workneev expert network behind it.</p>
        </div>
      </div>
    </section>
  );
}

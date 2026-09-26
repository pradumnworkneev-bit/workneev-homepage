const QUESTIONS = [
  ['01', 'What is this institution trying to become?'],
  ['02', 'What is it actually like today?'],
  ['03', 'What is holding it back?'],
  ['04', 'What has to change first?'],
];

export default function Method() {
  return (
    <section className="band" id="method">
      <div className="wrap method">
        <div data-reveal>
          <div className="eyebrow">How we work</div>
          <h2 className="h2">We start by looking.</h2>
          <div className="story">
            <p>
              Almost every proposal an institution receives was written before anyone studied the
              institution. That is not dishonesty; it is structural. A firm that sells one thing will find the
              problem that thing solves.
            </p>
            <p>
              We sell no software, take no placement fees and hold no reseller relationship with any vendor.
              There is nothing we need the answer to be. So the first serious act of any engagement is to
              understand the institution properly — how decisions actually get made, what the academic
              structure permits, where capability is thin, what leadership is genuinely trying to do, and what
              has stopped it so far.
            </p>
            <p className="em">Only then is it possible to say what should change, and in what order.</p>
          </div>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <div className="qs">
            {QUESTIONS.map(([n, q], i) => (
              <div
                key={n}
                className={`q${i === QUESTIONS.length - 1 ? ' last' : ''}`}
                data-reveal
                style={{ '--d': `${i * 0.08}s` }}
              >
                <span className="num">{n}</span>
                <b>{q}</b>
              </div>
            ))}
          </div>
          <p className="after">Everything Workneev does follows from those four answers.</p>
        </div>
      </div>
    </section>
  );
}

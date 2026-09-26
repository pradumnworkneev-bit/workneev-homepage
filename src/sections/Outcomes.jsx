const OUTCOMES = [
  ['01', 'Institutional maturity', 'Decisions that used to stall get made, recorded and followed through.'],
  ['02', 'Academic architecture', 'The academic structure supports the teaching the institution says it wants.'],
  ['03', 'Faculty capability', 'Faculty development runs as a standing system rather than an annual event.'],
  ['04', 'Student outcomes', 'Progression, capability and employability move together, and the institution can show why.'],
  ['05', 'Industry relevance', 'Industry relationships shape the curriculum rather than arriving at placement season.'],
  ['06', 'Research conditions', 'Protected time, supervision and a route to funding exist, whether or not output has followed yet.'],
  ['07', 'Quality', 'Quality runs as a continuous internal system, not a submission-cycle activity.'],
  ['08', 'Institutional growth', 'The institution can evidence its readiness for the stage it is pursuing.'],
];

export default function Outcomes() {
  return (
    <section className="band" id="outcomes">
      <div className="wrap">
        <div className="head2" data-reveal>
          <div>
            <div className="eyebrow">How we expect to be judged</div>
            <h2 className="h2">The measure of transformation is the institution itself.</h2>
          </div>
          <p className="lede">
            Workneev is not measured by reports delivered or programmes completed. These are the eight things
            that should be true of an institution afterwards, and the standard we accept being held to.
          </p>
        </div>
        <div className="outs">
          {OUTCOMES.map(([n, h, p], i) => (
            <div className="out-card lift" key={n} data-reveal style={{ '--d': `${(i % 4) * 0.05}s` }}>
              <span className="num">{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
              <div className="pend">
                <i />
                Not yet evidenced
              </div>
            </div>
          ))}
        </div>
        <div className="honest" data-reveal>
          <span className="tag">No results yet</span>
          <p>
            We have not published a result against any of these, because no institution has completed an
            engagement yet. When one has, and agrees to have the findings examined, it will appear here.
          </p>
        </div>
      </div>
    </section>
  );
}

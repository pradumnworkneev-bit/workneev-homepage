const PILLARS = [
  ['Judgment', 'Senior people who have worked inside institutions, engaging at the level where institutional decisions are actually made.'],
  ['Method', 'Proprietary frameworks, assessments and benchmarks, so that judgment is applied consistently across institutions rather than improvised each time.'],
  ['Instrumentation', 'Dashboards and institutional data that let leadership watch the transformation while it is happening, not only at the review.'],
];

const SIX = [
  ['Institution-first', 'We do not sell a product your institution has to fit itself around. The diagnosis decides the work, in that order.'],
  ['Integrated', 'Nine dimensions assessed together rather than separately, because in an institution they fail together.'],
  ['Independent', 'No technology commission, no placement fee, no promised grade. Our advice is narrow on purpose.'],
  ['Evidence-led', 'Every judgment shows its reasoning, so your governing body can argue with it rather than take it on trust.'],
  ['India-first', 'Built for Indian regulation, Indian institutions and the constraints they actually operate under — not a global framework translated.'],
  ['Long-term', 'The minimum meaningful engagement is twelve months, because institutions do not change in a quarter. We say so before you ask.'],
];

export default function BehindTheWork() {
  return (
    <section className="band" id="behind">
      <div className="wrap">
        <div data-reveal>
          <div className="eyebrow">How the work is made repeatable</div>
          <h2 className="h2">Judgment, method and instrumentation.</h2>
        </div>
        <div className="pillars">
          {PILLARS.map(([h, p], i) => (
            <div className="card pillar lift" key={h} data-reveal style={{ '--d': `${i * 0.08}s` }}>
              <span className="num n">{h}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <p className="tech-last" data-reveal>
          Technology comes last of the three, deliberately. A system installed over an unresolved institution
          produces faster reports about the same problems.
        </p>

        <div className="six-head head2" data-reveal>
          <div>
            <div className="eyebrow">Why Workneev</div>
            <h2 className="h2">Six things that follow from how we are built.</h2>
          </div>
          <p className="lede">
            None of these is a claim about quality. Each is a decision about how the firm works, and each one
            costs us something.
          </p>
        </div>
        <div className="six">
          {SIX.map(([h, p], i) => (
            <div className="sixc" key={h} data-reveal style={{ '--d': `${(i % 3) * 0.06}s` }}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

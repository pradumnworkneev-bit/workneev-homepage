import CardStack from '../components/CardStack.jsx';

const DEPTHS = [
  {
    num: '01 · Two weeks',
    title: 'Discover',
    pitch: 'Understand where you actually stand.',
    on: 1,
    body: 'A scored baseline and a considered view of what to do first. Many institutions stop here, and that is a legitimate outcome.',
    steps: [
      ['Discover', 'Understand the institution, its ambition, its present state and what it already knows about itself.'],
      ['Design', 'Turn the findings into a charter, an order of work, and outcomes someone can be held to.'],
    ],
  },
  {
    num: '02 · 12–24 months',
    title: 'Transform',
    pitch: 'Build what the diagnosis found missing.',
    on: 2,
    body: 'Named people, defined workstreams and quarterly review — against the original baseline rather than a revised one.',
    steps: [
      ['Transform', 'Run the workstreams and build the capability the diagnosis identified.'],
      ['Measure', 'Review against the original baseline, quarterly, with leadership in the room.'],
    ],
  },
  {
    num: '03 · Longer',
    title: 'Partner',
    pitch: 'Reach the point where you no longer need us.',
    on: 3,
    deep: true,
    body: 'A transformation office established inside the institution and run with your leadership until it can be run without us.',
    steps: [['Sustain', 'Hand the governance and the capability to your own people.']],
    note: 'We review against the baseline the diagnostic established, not against a target quietly revised to match the progress made. It is a small discipline, and the first one most programmes abandon.',
  },
];

export default function Engagements() {
  return (
    <section className="band" id="engage">
      <div className="wrap">
        <div className="head2" data-reveal>
          <div>
            <div className="eyebrow">The engagement model</div>
            <h2 className="h2">Three depths of engagement.</h2>
          </div>
          <p className="lede">
            Not every institution needs the same amount of us. The work is structured so that each stage is
            complete in itself.
          </p>
        </div>

        <CardStack>
          {DEPTHS.map((d) => (
            <article className={`depth${d.deep ? ' deep theme-dark' : ''}`} key={d.title}>
              <div>
                <span className="num">{d.num}</span>
                <h3>{d.title}</h3>
                <p className="pitch">{d.pitch}</p>
                <div className="meter" aria-hidden="true">
                  {[1, 2, 3].map((i) => (
                    <i key={i} className={i <= d.on ? 'on' : undefined} />
                  ))}
                </div>
              </div>
              <div>
                <p className="d">{d.body}</p>
                <div className="steps2">
                  {d.steps.map(([k, v]) => (
                    <div key={k}>
                      <span>{k}</span>
                      {v}
                    </div>
                  ))}
                </div>
                {d.note && <p className="note">{d.note}</p>}
              </div>
            </article>
          ))}
        </CardStack>
      </div>
    </section>
  );
}

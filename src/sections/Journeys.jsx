import CardStack from '../components/CardStack.jsx';

const JOURNEYS = [
  {
    num: '01',
    tag: '12–24 months',
    title: 'Autonomy',
    quote: '“We want to become autonomous. What does our institution need to build first?”',
    body: 'We assess the capabilities the chosen pathway actually requires, identify where the institution falls short, and then work alongside leadership to build the academic, governance, faculty, quality and technology capability the criteria are testing for — and the evidence to demonstrate it.',
    programme: 'Autonomy Transformation Programme',
    duration: '12–24 months',
  },
  {
    num: '02',
    tag: '18–24 months',
    title: 'Autonomy to university',
    quote: '“We are autonomous. What must we build to be ready for the next stage?”',
    body: 'Moving from autonomy to university status requires more than meeting a set of criteria. It requires an institution capable of operating at a larger scale of academic, governance, research and quality maturity. We help autonomous institutions understand what that demands and build it in order.',
    programme: 'University Readiness & Institutional Growth',
    duration: '18–24 months',
  },
  {
    num: '03',
    tag: '12–24 months',
    title: 'University growth',
    quote: '“We are already a university. What should our next stage of growth look like?”',
    body: 'For a university, transformation is not about reaching a regulatory destination. It is about strengthening academic quality, research, student outcomes, industry relevance, faculty capability and governance on a continuing basis. We work with leadership to define the next stage and build what reaching it requires.',
    programme: 'University Growth & Institutional Excellence',
    duration: '12–24 months',
  },
  {
    num: '04',
    tag: '12–24 months',
    title: 'NEP 2020',
    quote: '“We are implementing NEP 2020. How do we turn that into institutional progress?”',
    body: 'NEP 2020 is a serious framework for institutional change, but structural compliance on its own does not produce a stronger institution. We help institutions translate its principles into changes in academic architecture, faculty capability, student outcomes, governance, quality and technology.',
    programme: 'NEP Institutional Transformation Programme',
    duration: '12–24 months',
  },
];

const STATS = [
  ['Nine', null, 'Institutional capabilities assessed'],
  ['Two', 'weeks', 'To establish your institutional baseline'],
  ['12–24', 'months', 'Typical transformation programme'],
  ['One', null, 'Institution-wide transformation architecture'],
];

export default function Journeys({ onPrefill }) {
  return (
    <section className="band" id="start">
      <div className="wrap">
        <div className="head2" data-reveal>
          <div>
            <div className="eyebrow">Where institutions usually start</div>
            <h2 className="h2">Four journeys institutions bring us.</h2>
          </div>
          <p className="lede">
            Most conversations begin with one of these four. The pathway differs; the method does not.
          </p>
        </div>

        <CardStack>
          {JOURNEYS.map((j) => (
            <article className="card journey" key={j.num}>
              <div className="row-between">
                <span className="num">{j.num}</span>
                <span className="tag">{j.tag}</span>
              </div>
              <h3>{j.title}</h3>
              <p className="quote">{j.quote}</p>
              <p className="body">{j.body}</p>
              <footer>
                <div>
                  <small>Programme</small>
                  <b>{j.programme}</b>
                  <br />
                  <small style={{ marginTop: 6 }}>Duration</small>
                  <b>{j.duration}</b>
                </div>
                <a className="arrow" href="#contact" onClick={() => onPrefill(j.title)}>
                  Discuss this <i>→</i>
                </a>
              </footer>
            </article>
          ))}
        </CardStack>

        <div className="stats" data-reveal>
          {STATS.map(([big, unit, label]) => (
            <div className="stat" key={label}>
              <b>
                {big}
                {unit && <small>{unit}</small>}
              </b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

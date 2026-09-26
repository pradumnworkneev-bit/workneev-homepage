import pradip from '../assets/team/pradip.webp';
import pradumn from '../assets/team/pradumn.webp';

const PEOPLE = [
  {
    name: 'Pradip Chetry',
    role: 'Founder & Managing Director',
    photo: pradip,
    // a wide half-body shot: hold the crop high so the face sits in the circle
    focus: '50% 22%',
    bio: 'Pradip is a technology entrepreneur and institutional strategist with 20+ years of experience across technology, enterprise growth, and government ecosystems. He works at the intersection of technology, policy, and institutional transformation, with a focus on building intelligent, future-ready education systems. As founder, he leads Workneev’s strategy, growth, partnerships, and vision for Kovaan OS.',
  },
  {
    name: 'Pradumn Yadav',
    role: 'Co-Founder & Director',
    photo: pradumn,
    focus: '50% 30%',
    bio: 'Pradumn leads operations, marketing and execution at Workneev. Focused on making education more practical and future-ready, he works across product and institutional initiatives to translate the Workneev vision into scalable solutions. He plays a key role in taking Kovaan OS from product vision to institutional deployment.',
  },
];

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <div className="about-top" data-reveal>
          <div>
            <div className="eyebrow">Where Workneev came from</div>
            <h2 className="h2">We started by solving the wrong problem well.</h2>
          </div>
          <div className="story2">
            <p>
              For years we worked with institutions on the things they were ready to buy — employability,
              faculty development, curriculum projects, placement outcomes. The work was good. A programme
              lifted a batch. A workshop was well received and genuinely useful. A curriculum project met its
              brief.
            </p>
            <p>
              And the institution stayed as it was. The following year the same constraint produced the same
              result, and someone bought the same intervention again.
            </p>
            <p className="em">
              Eventually the more interesting question became unavoidable. What if the thing that needed work
              was not the intervention, but the institution underneath it? Workneev is the answer we built to
              that question.
            </p>
          </div>
        </div>

        <div className="people" id="people">
          {PEOPLE.map((p, i) => (
            <div className="person lift" key={p.name} data-reveal style={{ '--d': `${i * 0.08}s` }}>
              <img
                className="person-photo"
                src={p.photo}
                alt={p.name}
                width="96"
                height="96"
                loading="lazy"
                style={{ objectPosition: p.focus }}
              />
              <b>{p.name}</b>
              <span className="role">{p.role}</span>
              <p>{p.bio}</p>
            </div>
          ))}
          <div className="person council" data-reveal style={{ '--d': '.16s' }}>
            <b>The Workneev Expert Council</b>
            <p>
              We are assembling a council of senior academics, institutional leaders, researchers, policy
              specialists and technology practitioners, so that each engagement can draw on people who have
              done the specific thing it needs. Members will be named here as they join.
            </p>
            <div className="seats">
              <div className="row" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <i key={i} style={{ '--i': i }} />
                ))}
              </div>
              <small>One institution · several disciplines · one transformation agenda</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

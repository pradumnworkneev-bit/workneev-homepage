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
          <div className="person lift" data-reveal>
            <b>Pradip Chetry</b>
            <span className="role">Founder &amp; Chief Executive</span>
            <p>
              Education strategist and institution builder, working across institutional transformation,
              education policy and technology in Indian higher education.
            </p>
          </div>
          <div className="person lift" data-reveal style={{ '--d': '.08s' }}>
            <b>Pradumn Yadav</b>
            <span className="role">Co-founder</span>
          </div>
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

import { Fragment } from 'react';
import useHeroBall from '../hooks/useHeroBall.js';
import artDesktop from '../assets/hero-art-desktop.webp';
import artMobile from '../assets/hero-art-mobile.webp';

const LEAD = 'Most Indian higher-education institutions know what they want to become.';
const HL = 'Far fewer know what it will take to get there.';

/** Split a line into animated words, continuing the delay counter as we go. */
function words(text, from) {
  return text.split(' ').map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span className="w" aria-hidden="true" style={{ '--i': from + i }}>
        {w}
      </span>{' '}
    </Fragment>
  ));
}

export default function Hero({ artRef, hballRef }) {
  useHeroBall(artRef, hballRef);
  const leadWords = LEAD.split(' ').length;

  return (
    <section className="hero" id="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">Institutional transformation · Indian higher education</div>
          <h1 aria-label={`${LEAD} ${HL}`}>
            {words(LEAD, 0)}
            <span className="hl">{words(HL, leadWords)}</span>
          </h1>
          <p className="lede">
            Workneev is an institutional transformation partner. We work with college and university
            leadership to see the institution as it actually is, identify the two or three constraints that
            matter first, and build both the capability and the evidence over the years that takes.
          </p>
          <p className="sub2">
            From NEP 2020 to autonomy, accreditation and university status — we work on the institution
            underneath the paperwork.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#contact">
              Start a conversation
            </a>
            <a className="btn btn-secondary" href="#method">
              How we work
            </a>
          </div>
        </div>

        <div className="hero-art" ref={artRef} aria-hidden="true">
          <img className="art-d" alt="" src={artDesktop} />
          <img className="art-m" alt="" src={artMobile} />
          <i className="hball" ref={hballRef}>
            <i className="rim" />
            <i className="shine" />
          </i>
        </div>

        <div className="hero-foot">
          <p>
            A first conversation is forty-five minutes with your chairman, vice-chancellor, principal or
            governing board. We ask three things: what you are trying to build, what you have already tried,
            and what stopped it. <em>We do not present.</em>
          </p>
          <div>
            <h4>Who we work with</h4>
            <ul>
              <li>Private and autonomous colleges</li>
              <li>Private and state universities</li>
              <li>Institutions pursuing autonomy</li>
              <li>Institutions preparing for university status</li>
              <li>Education groups and trusts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

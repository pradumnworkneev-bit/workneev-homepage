import { useEffect, useRef, useState } from 'react';
import { RM, startLenis, stopLenis, scrollToTarget } from './lib/motion.js';
import { startScrollLoop, stopScrollLoop, invalidateLayout } from './lib/scroll.js';
import useRailBall from './hooks/useRailBall.js';

import ScrollProgress from './sections/ScrollProgress.jsx';
import SiteHeader from './sections/SiteHeader.jsx';
import Hero from './sections/Hero.jsx';
import Journeys from './sections/Journeys.jsx';
import SystemsView from './sections/SystemsView.jsx';
import Method from './sections/Method.jsx';
import TransformationScore from './sections/TransformationScore.jsx';
import Diagnostic from './sections/Diagnostic.jsx';
import Engagements from './sections/Engagements.jsx';
import Dimensions from './sections/Dimensions.jsx';
import Architecture from './sections/Architecture.jsx';
import TransformationOffice from './sections/TransformationOffice.jsx';
import BehindTheWork from './sections/BehindTheWork.jsx';
import Independence from './sections/Independence.jsx';
import Kovaan from './sections/Kovaan.jsx';
import About from './sections/About.jsx';
import Mission from './sections/Mission.jsx';
import Outcomes from './sections/Outcomes.jsx';
import Faq from './sections/Faq.jsx';
import Contact from './sections/Contact.jsx';
import Dock from './sections/Dock.jsx';

/**
 * A run of sections that share a theme. A light zone paints the pearl
 * background as plain layers, with the page's base colour laid back over it
 * at each end so the join blends rather than drawing a line.
 */
function Zone({ theme, children }) {
  return (
    <div className={`zone theme-${theme}`} data-zone={theme}>
      {theme === 'light' && (
        <>
          <i className="zone-layer zone-bg" aria-hidden="true" />
          <i className="zone-layer zone-streak" aria-hidden="true" />
          <i className="zone-layer zone-fade t" aria-hidden="true" />
          <i className="zone-layer zone-fade b" aria-hidden="true" />
        </>
      )}
      {children}
    </div>
  );
}

const Xgap = () => <div className="xgap" aria-hidden="true" />;

export default function App() {
  const railRef = useRef(null);
  const svgRef = useRef(null);
  const nodesRef = useRef(null);
  const ballRef = useRef(null);
  const spinRef = useRef(null);
  const artRef = useRef(null);
  const hballRef = useRef(null);
  const [prefill, setPrefill] = useState('');

  useRailBall({ railRef, svgRef, nodesRef, ballRef, spinRef, artRef, hballRef });

  // smooth scrolling, the single scroll loop, and anchor links that respect it
  useEffect(() => {
    startLenis();
    startScrollLoop();

    // the only things that invalidate the cached layout
    const main = document.querySelector('main');
    window.addEventListener('resize', invalidateLayout);
    let ro = null;
    if (typeof ResizeObserver !== 'undefined' && main) {
      ro = new ResizeObserver(invalidateLayout);
      ro.observe(main);
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(invalidateLayout).catch(() => {});

    // in-page links only; anything else is left to the browser
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const t = id ? document.getElementById(id) : null;
      if (!t && id !== 'top') return;
      e.preventDefault();
      scrollToTarget(id === 'top' ? 0 : t);
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('resize', invalidateLayout);
      if (ro) ro.disconnect();
      stopScrollLoop();
      stopLenis();
    };
  }, []);

  // reveal-on-scroll: only hide what starts below the fold
  useEffect(() => {
    if (RM || typeof IntersectionObserver === 'undefined') return undefined;
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('pre');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('[data-reveal]').forEach((n) => {
      if (n.getBoundingClientRect().top > vh * 0.92) {
        n.classList.add('pre');
        io.observe(n);
      }
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <SiteHeader />

      <main id="top">
        <Zone theme="dark">
          <Hero artRef={artRef} hballRef={hballRef} />
        </Zone>

        <Zone theme="light">
          <Journeys onPrefill={setPrefill} />
        </Zone>

        <Zone theme="dark">
          <SystemsView />
          <Xgap />
        </Zone>

        <Zone theme="light">
          <Method />
        </Zone>

        <Zone theme="dark">
          <TransformationScore />
        </Zone>

        <Zone theme="light">
          <Diagnostic onPrefill={setPrefill} />
          <Xgap />
          <Engagements />
        </Zone>

        <Zone theme="dark">
          <Dimensions />
        </Zone>

        <Zone theme="light">
          <Architecture />
          <Xgap />
          <TransformationOffice />
        </Zone>

        <Zone theme="dark">
          <BehindTheWork />
          <Independence />
        </Zone>

        <Zone theme="light">
          <Kovaan onPrefill={setPrefill} />
          <Xgap />
          <About />
          <Mission />
          <Outcomes />
          <Xgap />
          <Faq />
        </Zone>

        <Zone theme="dark">
          <Contact prefill={prefill} />
        </Zone>
      </main>

      <div className="rail" ref={railRef}>
        <svg className="rail-svg" ref={svgRef} aria-hidden="true" />
        <div ref={nodesRef} />
      </div>
      <div className="ball" ref={ballRef} aria-hidden="true">
        <i className="spin" ref={spinRef} />
        <i className="rim" />
        <i className="shine" />
      </div>

      <Dock />
    </>
  );
}

import { useEffect, useState } from 'react';
import Logo from '../components/Logo.jsx';
import useSectionTheme from '../hooks/useSectionTheme.js';
import { subscribeScroll } from '../lib/scroll.js';

const NAV = [
  ['#method', 'How we work'],
  ['#diagnostic', 'The Diagnostic'],
  ['#dimensions', 'What we assess'],
  ['#engage', 'Engagements'],
  ['#kovaan', 'Kovaan OS', 'Product'],
  ['#about', 'About'],
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const theme = useSectionTheme();

  useEffect(() => subscribeScroll({ frame: (y) => setScrolled(y > 8) }), []);

  // which section the reader is in, for the underline in the nav
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['method', 'diagnostic', 'dimensions', 'engage', 'kovaan', 'about'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header theme-${theme}${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="wrap bar">
        <a className="logo-lk" href="#top" aria-label="Workneev, home">
          <Logo size={30} />
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label, pill]) => (
            <a key={href} href={href} className={active === href ? 'active' : undefined}>
              {label}
              {pill && <span className="pill">{pill}</span>}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href="#contact">
          Talk to us
        </a>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d={open ? 'M3 3l10 10M13 3L3 13' : 'M2 5h12M2 11h12'} />
          </svg>
        </button>
      </div>
      <nav className="drawer" id="drawer" aria-label="Mobile" hidden={!open} onClick={() => setOpen(false)}>
        <div className="wrap">
          {NAV.map(([href, label, pill]) => (
            <a key={href} className="dl" href={href}>
              {label}
              {pill && <span className="pill">{pill}</span>}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact">
            Talk to us
          </a>
        </div>
      </nav>
    </header>
  );
}

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { dimensions } from '../data/dimensions.js';

// The list advances on its own, a row at a time, while the section is on screen.
const DWELL = 5200;
const TICK = 100;

const rowStyle = {
  borderBottom: '1px solid #c5d3e9',
  padding: '20px 0',
  display: 'grid',
  gridTemplateColumns: '56px minmax(0,1fr)',
  gap: 'clamp(16px,2vw,36px)',
  cursor: 'pointer',
  transition: 'opacity .5s ease',
};

function DimensionRow({ dim, active, progress, onActivate, onHold, onRelease }) {
  const inner = useRef(null);
  const [height, setHeight] = useState(0);

  // remeasure whenever the content reflows — a late webfont, a resize, a
  // column count change — so the open row is never clipped or over-tall
  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    setHeight(el.offsetHeight);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{ ...rowStyle, opacity: active ? 1 : 0.62 }}
      onMouseEnter={() => { onHold(); onActivate(); }}
      onMouseLeave={onRelease}
      onClick={(event) => { if (!event.target.closest('a')) onActivate(); }}
    >
      <div style={{ font: "400 11px/1.6 'JetBrains Mono',monospace", color: '#4a5570' }}>{dim.num}</div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '14px 22px' }}>
          <a href={dim.href} style={{ font: "700 clamp(21px,2.3vw,34px)/1.15 'Plus Jakarta Sans',sans-serif", letterSpacing: '-.02em', color: '#0f1420' }}>{dim.title}</a>
          <span style={{ font: "500 14px/1.4 'Plus Jakarta Sans',sans-serif", color: '#4f5b76' }}>{dim.tagline}</span>
        </div>
        <div style={{ height: active ? height : 0, overflow: 'hidden', transition: 'height .55s cubic-bezier(.16,1,.3,1)' }}>
          <div ref={inner} style={{ padding: '18px 0 4px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '18px 32px' }}>
            <div style={{ font: "600 10px/1.4 'JetBrains Mono',monospace", letterSpacing: '.14em', color: '#4a5570' }}>WHAT WE LOOK AT</div>
            {dim.points.map((point) => (
              <div key={point} style={{ font: "400 15px/1.55 'Plus Jakarta Sans',sans-serif", color: '#3b4459' }}>{point}</div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '14px', height: '1px', background: '#becde6' }}>
          <div
            style={{
              height: '100%',
              width: `${active ? progress * 100 : 0}%`,
              background: '#4f46e5',
              transition: active && progress > 0 ? `width ${TICK}ms linear` : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Dimensions() {
  const wrap = useRef(null);
  const held = useRef(false);
  const visible = useRef(false);
  const seen = useRef(false);
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  // the dwell clock lives in a ref so both state updaters stay pure — an updater
  // with a side effect inside it runs twice under StrictMode and skips a row
  const clock = useRef(0);

  // the sequence belongs to the section: it starts at 01 when you arrive and
  // holds wherever it was when you leave, instead of running unseen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting && entry.intersectionRatio > 0.25;
        if (visible.current && !seen.current) {
          seen.current = true;
          clock.current = 0;
          setActive(0);
          setElapsed(0);
        }
      },
      { threshold: [0, 0.25, 0.6] },
    );
    observer.observe(wrap.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (held.current || !visible.current) return;
      clock.current += TICK;
      if (clock.current >= DWELL) {
        clock.current = 0;
        setActive((i) => (i + 1) % dimensions.length);
      }
      setElapsed(clock.current);
    }, TICK);
    return () => clearInterval(id);
  }, []);

  const activate = (index) => { clock.current = 0; setActive(index); setElapsed(0); };

  return (
    <section id="dimensions" style={{ background: '#e9eff9', color: '#141a26', padding: 'clamp(70px,8vw,120px) 0' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,3vw,48px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: '.16em', textTransform: 'uppercase', color: '#56627d' }}>The nine dimensions</div>
            <h2 style={{ margin: '22px 0 0', maxWidth: '20ch', font: "700 clamp(30px,4.4vw,60px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: '-.026em', color: '#0f1420' }}>Nine ways an institution can be strong, or quietly weak.</h2>
          </div>
          <p style={{ margin: '0', maxWidth: '36ch', font: "400 15px/1.6 'Plus Jakarta Sans',sans-serif", color: '#4f5b76' }}>These are not services you can buy separately. They are what we assess, and they interact — which is why the order of work matters more than the list.</p>
        </div>

        <div
          ref={wrap}
          style={{ marginTop: 'clamp(36px,4vw,60px)', borderTop: '1px solid #c5d3e9' }}
          onMouseLeave={() => { held.current = false; }}
        >
          {dimensions.map((dim, index) => (
            <DimensionRow
              key={dim.num}
              dim={dim}
              active={index === active}
              progress={elapsed / DWELL}
              onActivate={() => activate(index)}
              onHold={() => { held.current = true; }}
              onRelease={() => { held.current = false; }}
            />
          ))}
        </div>

        <div style={{ marginTop: '18px', display: 'flex', flexWrap: 'wrap', gap: '22px', alignItems: 'center', font: "600 10px/1.4 'JetBrains Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#4a5570' }}>
          <span>Hover any row to open and hold it · click a title to read the full dimension</span>
          <a href="#diagnostic" style={{ color: '#4f46e5' }}>See how we assess them →</a>
        </div>
      </div>
    </section>
  );
}

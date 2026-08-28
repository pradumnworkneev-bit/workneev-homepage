import { useState } from 'react';
import { faq } from '../data/faq.js';

function FaqItem({ item, last }) {
  const [open, setOpen] = useState(false);

  return (
    <details
      style={{ borderTop: '1px solid #e5e5ea', borderBottom: last ? '1px solid #e5e5ea' : undefined, padding: '20px 0' }}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', font: "600 clamp(18px,1.5vw,23px)/1.3 'Plus Jakarta Sans',sans-serif", color: '#101014' }}>
        {item.q}
        <span style={{ flex: 'none', color: '#4f46e5', font: "400 15px/1.4 'JetBrains Mono',monospace" }}>{open ? '\u2212' : '+'}</span>
      </summary>
      <div style={{ paddingTop: '14px', display: 'grid', gap: '12px', maxWidth: '62ch' }}>
        {item.a.map((paragraph) => (
          <p key={paragraph} style={{ margin: '0', font: "400 15px/1.62 'Plus Jakarta Sans',sans-serif", color: '#5a5a66' }}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}

export default function Faq() {
  return (
    <section style={{ background: '#f1f1f4', padding: 'clamp(70px,8vw,120px) 0', borderTop: '1px solid #e8e8ee' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,3vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,72px)' }}>
        <div>
          <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: '.16em', textTransform: 'uppercase', color: '#4a5570' }}>For institutional leaders</div>
          <h2 style={{ margin: '20px 0 0', font: "700 clamp(30px,4.4vw,60px)/1.05 'Plus Jakarta Sans',sans-serif", letterSpacing: '-.026em', color: '#101014' }}>Questions we are asked.</h2>
        </div>
        <div>
          {faq.map((item, index) => (
            <FaqItem key={item.q} item={item} last={index === faq.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

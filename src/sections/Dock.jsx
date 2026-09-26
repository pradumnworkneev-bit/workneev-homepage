import { useEffect, useState } from 'react';
import { docTop, subscribeScroll } from '../lib/scroll.js';

/** The small fixed CTA that appears once the hero is past and hides at the form. */
export default function Dock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let heroBottom = 0;
    let contactTop = Infinity;
    return subscribeScroll({
      measure() {
        const hero = document.getElementById('hero');
        const contact = document.getElementById('contact');
        if (hero) heroBottom = docTop(hero) + hero.offsetHeight;
        if (contact) contactTop = docTop(contact);
      },
      frame(y, vh) {
        const next = heroBottom - y < 0 && contactTop - y > vh * 0.7;
        setShow((cur) => (cur === next ? cur : next));
      },
    });
  }, []);

  return (
    <div className={`dock${show ? ' show' : ''}`} aria-hidden={!show}>
      <span>Forty-five minutes. We do not present.</span>
      <a className="btn btn-primary" href="#contact" tabIndex={show ? 0 : -1}>
        Talk to us
      </a>
    </div>
  );
}

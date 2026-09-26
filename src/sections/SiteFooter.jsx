import { useState } from 'react';
import Logo from '../components/Logo.jsx';

const COLS = [
  ['The work', [['#method', 'How we work'], ['#diagnostic', 'The Diagnostic'], ['#engage', 'Engagement model'], ['#office', 'Transformation Office']]],
  ['The institution', [['#dimensions', 'What we assess'], ['#start', 'Where institutions start'], ['#behind', 'Judgment, method, instrumentation'], ['#independence', 'Independence']]],
  ['Company', [['#about', 'About'], ['#kovaan', 'Kovaan OS'], ['#contact', 'Contact'], ['#people', 'Expert Council →'], ['#outcomes', 'How we expect to be judged']]],
];

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('No more than once a month.');

  const subscribe = (e) => {
    e.preventDefault();
    setMsg(email.trim() ? 'Subscribed (prototype). No more than once a month.' : 'Add an email address first.');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="fcols">
        <div className="fbrand">
          <a className="logo-lk" href="#top" aria-label="Workneev, home">
            <Logo size={28} />
          </a>
          <p>Institutional transformation for Indian higher education.</p>
          <h4 style={{ marginTop: 22 }}>Notes on institutional practice</h4>
          <form className="news" onSubmit={subscribe}>
            <label htmlFor="newsEmail" className="sr">
              Email address
            </label>
            <input
              id="newsEmail"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="news-msg">{msg}</p>
        </div>
        {COLS.map(([head, links]) => (
          <div key={head}>
            <h4>{head}</h4>
            {links.map(([href, label]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="legal">
        <span>
          Workneev Technologies Private Limited · Bangalore, Karnataka · pradeepchetry@gmail.com · +91 70029
          76857
        </span>
        <span style={{ display: 'flex', gap: 16 }}>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <span>© 2026</span>
        </span>
      </div>
    </footer>
  );
}

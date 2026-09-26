import { useEffect, useState } from 'react';
import { RM } from '../lib/motion.js';
import SiteFooter from './SiteFooter.jsx';

const EMAIL = 'pradeepchetry@gmail.com';
const PHONE = '+91 70029 76857';
const RESTING_NOTE = 'We read every one of these. You will hear from us within two working days, from a person.';

const EMPTY = { institution: '', role: '', city: '', ambition: '', name: '', phone: '', email: '' };
const FIELD_COUNT = Object.keys(EMPTY).length;

function CopyLine({ children, value, label }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, done);
    } else {
      done();
    }
  };
  return (
    <div>
      {children}
      <span>{value}</span>
      <button className="copy" onClick={copy} aria-label={`Copy ${label}`}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

export default function Contact({ prefill }) {
  const [v, setV] = useState(EMPTY);
  const [bad, setBad] = useState({});
  const [showErr, setShowErr] = useState(false);
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState({ text: RESTING_NOTE, sent: false });

  // a journey or the Diagnostic link fills in what the conversation is about
  useEffect(() => {
    if (!prefill) return;
    setV((cur) => (cur.ambition ? cur : { ...cur, ambition: `Interested in: ${prefill}. ` }));
  }, [prefill]);

  const set = (k) => (e) => {
    setV((cur) => ({ ...cur, [k]: e.target.value }));
    setBad((b) => ({ ...b, [k]: false }));
    setNote({ text: RESTING_NOTE, sent: false });
  };

  const filled = Object.values(v).filter((x) => x.trim()).length;

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!v.institution.trim()) next.institution = true;
    if (!v.name.trim()) next.name = true;
    if (!v.phone.trim() && !v.email.trim()) {
      next.phone = true;
      next.email = true;
    }
    setBad(next);
    setShowErr(Object.keys(next).length > 0);
    if (Object.keys(next).length) {
      const el = document.getElementById(`f-${Object.keys(next)[0]}`);
      if (el) el.focus();
      return;
    }
    setSending(true);
    setTimeout(
      () => {
        setSending(false);
        setNote({
          text: 'Thank you. We will be in touch within two working days. (Prototype: nothing was sent.)',
          sent: true,
        });
      },
      RM ? 0 : 700,
    );
  };

  const field = (id, label, extra = {}) => (
    <label htmlFor={`f-${id}`}>
      {label}
      <input
        id={`f-${id}`}
        name={id}
        value={v[id]}
        onChange={set(id)}
        aria-invalid={bad[id] ? 'true' : undefined}
        {...extra}
      />
    </label>
  );

  return (
    <section className="band ink theme-dark" id="contact">
      <div className="wrap">
        <div className="contact">
          <div data-reveal>
            <h2>Build the institution you aspire to lead.</h2>
            <p className="lede">
              The first step is not to buy anything. It is to have a serious conversation about the distance
              between where your institution is and what it aspires to be.
            </p>
            <div className="start">
              <div className="eyebrow">Start here</div>
              <h3>Tell us what you are trying to build.</h3>
              <p>
                Your institution has a history, a faculty, a reputation and a set of constraints that took
                years to form. It also has an idea of what it could be.
              </p>
              <p>
                Forty-five minutes with your leadership. We will ask what you are trying to build, what you
                have already tried, and what stopped it. We will tell you what we think — including, if it is
                the case, that you do not need us.
              </p>
              <div className="lines">
                <CopyLine value={EMAIL} label="email address">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" strokeWidth="1.8" aria-hidden="true">
                    <rect x="2" y="4" width="14" height="10" rx="2" />
                    <path d="M2.5 5l6.5 5 6.5-5" />
                  </svg>
                </CopyLine>
                <CopyLine value={PHONE} label="phone number">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 2.5h3l1.5 4-2 1.2a9 9 0 0 0 3.8 3.8l1.2-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A13 13 0 0 1 2.5 4.1 1.5 1.5 0 0 1 4 2.5z" />
                  </svg>
                </CopyLine>
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" strokeWidth="1.8" aria-hidden="true">
                    <path d="M9 16s5-4.5 5-8.5a5 5 0 0 0-10 0C4 11.5 9 16 9 16z" />
                    <circle cx="9" cy="7.5" r="1.8" />
                  </svg>
                  Bangalore, Karnataka
                </div>
              </div>
            </div>
          </div>

          <form className="form" noValidate data-reveal style={{ '--d': '.1s' }} onSubmit={submit}>
            <div className="meter-f" aria-hidden="true">
              <i style={{ width: `${(filled / FIELD_COUNT) * 100}%` }} />
            </div>
            <div className="pair">
              {field('institution', 'Institution', { autoComplete: 'organization' })}
              {field('role', 'Your role', { autoComplete: 'organization-title' })}
            </div>
            {field('city', 'City', { autoComplete: 'address-level2' })}
            <label htmlFor="f-ambition">
              What is your institution trying to become?
              <textarea id="f-ambition" name="ambition" rows="3" value={v.ambition} onChange={set('ambition')} />
            </label>
            <div className="pair">
              {field('name', 'Name', { autoComplete: 'name' })}
              {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel' })}
            </div>
            {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
            <p className="err" hidden={!showErr}>
              Add your institution, your name, and a phone or email so we can reply.
            </p>
            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Start a conversation'}
            </button>
            <p className={`fnote${note.sent ? ' sent' : ''}`}>{note.text}</p>
          </form>
        </div>

        <SiteFooter />
      </div>
    </section>
  );
}

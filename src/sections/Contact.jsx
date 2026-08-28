import { useState } from 'react';

const labelStyle = { display: 'grid', gap: '8px', padding: '14px 0', borderBottom: '1px solid #c5d3e9' };
const captionStyle = { font: "600 10px/1 'JetBrains Mono',monospace", letterSpacing: '.14em', color: '#4a5570' };
const inputStyle = { background: 'transparent', border: 0, outline: 0, font: "400 16px/1.4 'Plus Jakarta Sans',sans-serif", color: '#0f1420', padding: '0' };
const pairStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '0 22px' };

function Field({ label, name, type = 'text', value, onChange }) {
  return (
    <label style={labelStyle}>
      <span style={captionStyle}>{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} style={inputStyle} />
    </label>
  );
}

const EMPTY = { institution: '', role: '', city: '', ambition: '', name: '', phone: '', email: '' };
const RESTING_NOTE = 'We read every one of these. You will hear from us within two working days, from a person.';
const SENT_NOTE = 'Thank you. We will be in touch within two working days.';

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const change = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  return (
    <section id="contact" style={{ background: '#e9eff9', color: '#141a26', padding: 'clamp(70px,9vw,130px) 0' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,3vw,48px)' }}>
        <h2 style={{ margin: '0', maxWidth: '18ch', font: "700 clamp(34px,5.2vw,76px)/1.02 'Plus Jakarta Sans',sans-serif", letterSpacing: '-.03em', color: '#0f1420' }}>Build the institution you aspire to lead.</h2>
        <p style={{ margin: '24px 0 0', maxWidth: '56ch', font: "400 clamp(17px,1.3vw,21px)/1.58 'Plus Jakarta Sans',sans-serif", color: '#3b4459' }}>The first step is not to buy anything. It is to have a serious conversation about the distance between where your institution is and what it aspires to be.</p>

        <div style={{ marginTop: 'clamp(44px,5vw,76px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,80px)', borderTop: '1px solid #c5d3e9', paddingTop: 'clamp(32px,4vw,56px)' }}>
          <div>
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: '.16em', textTransform: 'uppercase', color: '#56627d' }}>Start here</div>
            <h3 style={{ margin: '18px 0 0', font: "700 clamp(24px,2.6vw,38px)/1.1 'Plus Jakarta Sans',sans-serif", letterSpacing: '-.02em', color: '#0f1420' }}>Tell us what you are trying to build.</h3>
            <p style={{ margin: '18px 0 0', maxWidth: '44ch', font: "400 15px/1.62 'Plus Jakarta Sans',sans-serif", color: '#4f5b76' }}>Your institution has a history, a faculty, a reputation and a set of constraints that took years to form. It also has an idea of what it could be.</p>
            <p style={{ margin: '14px 0 0', maxWidth: '44ch', font: "400 15px/1.62 'Plus Jakarta Sans',sans-serif", color: '#4f5b76' }}>Forty-five minutes with your leadership. We will ask what you are trying to build, what you have already tried, and what stopped it. We will tell you what we think — including, if it is the case, that you do not need us.</p>
            <div style={{ marginTop: '28px', display: 'grid', gap: '10px', font: "400 13px/1.6 'JetBrains Mono',monospace", color: '#4f5b76' }}>
              <div><span style={{ color: '#4a5570' }}>E</span> &nbsp;pradeepchetry@gmail.com</div>
              <div><span style={{ color: '#4a5570' }}>T</span> &nbsp;+91 70029 76857</div>
              <div><span style={{ color: '#4a5570' }}>A</span> &nbsp;Bangalore, Karnataka</div>
            </div>
          </div>

          <form
            style={{ display: 'grid', gap: '0' }}
            onSubmit={(event) => { event.preventDefault(); setSent(true); }}
          >
            <div style={pairStyle}>
              <Field label="INSTITUTION" name="institution" value={values.institution} onChange={change} />
              <Field label="YOUR ROLE" name="role" value={values.role} onChange={change} />
            </div>
            <Field label="CITY" name="city" value={values.city} onChange={change} />
            <label style={labelStyle}>
              <span style={captionStyle}>WHAT IS YOUR INSTITUTION TRYING TO BECOME?</span>
              <textarea
                rows="3"
                name="ambition"
                value={values.ambition}
                onChange={change}
                style={{ background: 'transparent', border: 0, outline: 0, resize: 'vertical', font: "400 16px/1.5 'Plus Jakarta Sans',sans-serif", color: '#0f1420', padding: '0' }}
              />
            </label>
            <div style={pairStyle}>
              <Field label="NAME" name="name" value={values.name} onChange={change} />
              <Field label="PHONE" name="phone" type="tel" value={values.phone} onChange={change} />
            </div>
            <Field label="EMAIL" name="email" type="email" value={values.email} onChange={change} />
            <button type="submit" style={{ marginTop: '26px', justifySelf: 'start', border: 0, cursor: 'pointer', background: '#4f46e5', color: '#ffffff', font: "500 12px/1 'JetBrains Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', padding: '17px 30px' }}>Start a conversation</button>
            <p style={{ margin: '16px 0 0', font: "400 13px/1.6 'JetBrains Mono',monospace", color: sent ? '#4f46e5' : '#4a5570' }}>
              {sent ? SENT_NOTE : RESTING_NOTE}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

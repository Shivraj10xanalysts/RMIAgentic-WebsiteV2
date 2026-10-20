'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [errs, setErrs] = useState<{ n?: boolean; e?: boolean }>({});
  const [sent, setSent] = useState(false);

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const d = new FormData(ev.currentTarget);
    const n = String(d.get('name') || '').trim();
    const e = String(d.get('email') || '').trim();
    const bad = { n: !n, e: !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) };
    setErrs(bad);
    if (bad.n || bad.e) return;
    setSent(true);
  }

  return (
    <form className="cv-form" onSubmit={onSubmit} noValidate>
      <div className={`cv-f ${errs.n ? 'err' : ''}`}><label htmlFor="cv-n">Name</label><input id="cv-n" name="name" autoComplete="name" placeholder="Your name" required /></div>
      <div className={`cv-f ${errs.e ? 'err' : ''}`}><label htmlFor="cv-e">Work email</label><input id="cv-e" name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></div>
      <div className="cv-f"><label htmlFor="cv-c">Company</label><input id="cv-c" name="company" autoComplete="organization" placeholder="Company name" /></div>
      <div className="cv-f"><label htmlFor="cv-r">I am a</label>
        <select id="cv-r" name="role"><option>Agent builder</option><option>Merchant or marketplace</option><option>Investor</option><option>Insurance or payments partner</option><option>Other</option></select>
      </div>
      <div className="cv-f"><label htmlFor="cv-m">Message (optional)</label><textarea id="cv-m" name="message" placeholder="One or two lines is plenty" /></div>
      <button className="cv-btn" type="submit" disabled={sent}>Send message</button>
      {sent && <p className="cv-ok" role="status">Thanks. We’ll be in touch soon.</p>}
      <p className="cv-legal">By sending, you agree to our <a href="#">[Terms]</a> and <a href="#">[Privacy Policy]</a>.</p>
    </form>
  );
}

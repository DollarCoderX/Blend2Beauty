import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: 'none',
  borderBottom: '1px solid rgba(200,169,106,0.2)',
  borderRadius: '14px 14px 0 0',
  padding: '16px 18px',
  color: 'var(--b2b-cream)',
  fontFamily: 'var(--app-font-sans)',
  fontSize: '15px',
  fontWeight: 300,
  outline: 'none',
  transition: 'background 0.25s, border-color 0.25s',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-ui text-xs tracking-widest uppercase" style={{ color: 'var(--b2b-muted)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', service: '', date: '', time: '', message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ fullName: '', email: '', phone: '', service: '', date: '', time: '', message: '' }); }, 6000);
  };

  const focusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
      (e.target as HTMLElement).style.borderBottomColor = 'var(--b2b-gold)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
      (e.target as HTMLElement).style.borderBottomColor = 'rgba(200,169,106,0.2)';
    },
  };

  return (
    <section id="booking" style={{ background: 'var(--b2b-void)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(200,169,106,0.06) 0%, transparent 70%)'
      }} />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
            Reserve
          </p>
          <h2
            className="font-display leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
          >
            Book Your{' '}
            <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Session</em>
          </h2>
          <p className="font-ui font-light leading-relaxed" style={{ color: 'var(--b2b-muted)' }}>
            Every transformation begins with a conversation. Fill in your details — we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <CheckCircle strokeWidth={1} size={60} style={{ color: 'var(--b2b-gold)', margin: '0 auto 24px' }} />
              </motion.div>
              <h3 className="font-display text-3xl font-light mb-4" style={{ color: 'var(--b2b-cream)' }}>
                Request Received
              </h3>
              <p className="font-ui font-light" style={{ color: 'var(--b2b-muted)' }}>
                We'll contact you within 24 hours to confirm your session.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              onSubmit={onSubmit}
              className="space-y-6"
              style={{
                background: 'var(--b2b-glass)',
                backdropFilter: 'blur(24px)',
                borderRadius: '32px',
                padding: '40px',
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name">
                  <input type="text" name="fullName" value={form.fullName} onChange={set('fullName')} required placeholder="Your name" style={inputBase} {...focusStyle} />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" value={form.email} onChange={set('email')} required placeholder="you@email.com" style={inputBase} {...focusStyle} />
                </Field>
              </div>

              <Field label="Phone">
                <input type="tel" name="phone" value={form.phone} onChange={set('phone')} required placeholder="080836578239" style={inputBase} {...focusStyle} />
              </Field>

              <Field label="Service">
                <select name="service" value={form.service} onChange={set('service')} required style={{ ...inputBase, cursor: 'pointer' }} {...focusStyle}>
                  <option value="" style={{ background: '#161210' }}>Choose a service</option>
                  <option value="signature-glam" style={{ background: '#161210' }}>Signature Glam</option>
                  <option value="bridal-artistry" style={{ background: '#161210' }}>Bridal Artistry</option>
                  <option value="bridal-preview" style={{ background: '#161210' }}>Bridal Preview</option>
                  <option value="editorial" style={{ background: '#161210' }}>Editorial / Creative</option>
                  <option value="touchup" style={{ background: '#161210' }}>Touch-up & Refresh</option>
                  <option value="other" style={{ background: '#161210' }}>Other</option>
                </select>
              </Field>

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Preferred Date">
                  <input type="date" name="date" value={form.date} onChange={set('date')} required style={inputBase} {...focusStyle} />
                </Field>
                <Field label="Preferred Time">
                  <select name="time" value={form.time} onChange={set('time')} required style={{ ...inputBase, cursor: 'pointer' }} {...focusStyle}>
                    <option value="" style={{ background: '#161210' }}>Select time</option>
                    <option value="morning" style={{ background: '#161210' }}>Morning — 9am to 12pm</option>
                    <option value="afternoon" style={{ background: '#161210' }}>Afternoon — 12pm to 3pm</option>
                    <option value="evening" style={{ background: '#161210' }}>Evening — 3pm to 6pm</option>
                  </select>
                </Field>
              </div>

              <Field label="Message (optional)">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={set('message')}
                  rows={4}
                  placeholder="Tell us about your vision..."
                  style={{ ...inputBase, resize: 'none', borderRadius: '14px 14px 0 0' }}
                  {...focusStyle}
                />
              </Field>

              <button
                type="submit"
                className="w-full font-ui text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: 'var(--b2b-gold)',
                  color: 'var(--b2b-void)',
                  padding: '18px 44px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}
              >
                Send Booking Request
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

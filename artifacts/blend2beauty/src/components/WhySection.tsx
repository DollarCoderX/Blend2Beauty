import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    num: '01',
    title: '100% Custom',
    body: 'No two clients leave looking the same. Every look is architected for your face, occasion, and vision.',
  },
  {
    num: '02',
    title: 'Studio-Grade Tools',
    body: 'The exact products used on runways, magazine covers, and fashion campaigns — in your session.',
  },
  {
    num: '03',
    title: 'Lagos-Based, World-Inspired',
    body: 'Our techniques draw from global editorial and luxury beauty traditions, expressed through a Lagos lens.',
  },
  {
    num: '04',
    title: 'Your Comfort First',
    body: 'From consultation to reveal, every step of the experience is designed around you — not a formula.',
  },
];

export default function WhySection() {
  return (
    <section id="why" style={{ background: 'var(--b2b-void)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-2xl mb-20"
        >
          <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
            Why Us
          </p>
          <h2
            className="font-display leading-[1.05]"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
          >
            What Makes Blend2Beauty{' '}
            <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Different</em>
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'rgba(200,169,106,0.06)', borderRadius: '32px', overflow: 'hidden' }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="p-10 lg:p-12 group"
              style={{ background: 'var(--b2b-void)' }}
            >
              <div className="flex items-start gap-5 mb-6">
                <span
                  className="font-display text-5xl font-light leading-none shrink-0 transition-colors duration-300"
                  style={{ color: 'rgba(200,169,106,0.2)' }}
                >
                  {r.num}
                </span>
              </div>
              <h3
                className="font-display text-2xl lg:text-3xl font-light mb-4"
                style={{ color: 'var(--b2b-cream)' }}
              >
                {r.title}
              </h3>
              <p className="font-ui font-light leading-relaxed" style={{ color: 'var(--b2b-muted)' }}>
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p
            className="font-display font-light leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--b2b-cream)' }}
          >
            "The first thing a client says after the reveal is never{' '}
            <em style={{ color: 'var(--b2b-gold)' }}>'I love it.'</em>{' '}
            It's always{' '}
            <em style={{ color: 'var(--b2b-gold)' }}>'Is that really me?'</em>"
          </p>
          <p className="font-ui text-xs tracking-[0.18em] uppercase mt-6" style={{ color: 'var(--b2b-muted)' }}>
            Blend2Beauty Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    num: '01',
    title: 'Signature Glam',
    description: 'Full coverage editorial look for events, shoots, and occasions that demand presence. Every product professional-grade.',
    duration: '1.5 – 2 hrs',
  },
  {
    num: '02',
    title: 'Bridal Artistry',
    description: "Your wedding day look, designed to last from morning to midnight and leave every guest speechless.",
    duration: '2 – 3 hrs',
  },
  {
    num: '03',
    title: 'Bridal Preview',
    description: 'A rehearsal for perfection. Test your complete bridal look before the day arrives.',
    duration: '1.5 – 2 hrs',
  },
  {
    num: '04',
    title: 'Editorial & Creative',
    description: 'For fashion shoots, brand campaigns, and bold creative expression. No look too ambitious.',
    duration: '1.5 hrs+',
  },
  {
    num: '05',
    title: 'Touch-up & Refresh',
    description: 'Quick, targeted touch-ups for existing looks. Event top-ups, maintenance, and on-set refreshes.',
    duration: '30 – 45 mins',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--b2b-void)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
              Services
            </p>
            <h2
              className="font-display leading-[1.05]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
            >
              Crafted for{' '}
              <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Every Occasion</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-ui font-light text-base md:max-w-xs"
            style={{ color: 'var(--b2b-muted)' }}
          >
            Every service is tailored from scratch. Contact us for pricing.
          </motion.p>
        </div>

        {/* Service list */}
        <div className="space-y-3">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
              whileHover={{ x: 6, transition: { duration: 0.3, ease: EASE } }}
              className="group"
            >
              <a
                href="#booking"
                className="flex items-center justify-between gap-6 p-7 lg:p-8 transition-all duration-400"
                style={{
                  background: 'var(--b2b-glass)',
                  borderRadius: 'var(--b2b-radius)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--b2b-glass-hover)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--b2b-glass)'; }}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span
                    className="font-display text-4xl font-light shrink-0 w-16 leading-none mt-1"
                    style={{ color: 'rgba(200,169,106,0.25)', transition: 'color 0.3s' }}
                    ref={el => {
                      // handled by group hover in tailwind
                    }}
                  >
                    {s.num}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-display text-2xl lg:text-3xl font-light mb-2 group-hover:text-[#C8A96A] transition-colors duration-300"
                      style={{ color: 'var(--b2b-cream)' }}
                    >
                      {s.title}
                    </h3>
                    <p className="font-ui font-light text-sm lg:text-base leading-relaxed" style={{ color: 'var(--b2b-muted)' }}>
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div
                    className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2"
                    style={{
                      background: 'var(--b2b-gold)',
                      borderRadius: '50%',
                      color: 'var(--b2b-void)',
                    }}
                  >
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                  <span className="font-ui text-xs tracking-widest uppercase hidden md:block" style={{ color: 'var(--b2b-muted)' }}>
                    {s.duration}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-10 text-center"
        >
          <a
            href="#booking"
            className="inline-block font-ui text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.04] hover:opacity-88 active:scale-[0.98]"
            style={{
              background: 'var(--b2b-gold)',
              color: 'var(--b2b-void)',
              padding: '16px 44px',
              borderRadius: '100px',
            }}
          >
            Book a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}

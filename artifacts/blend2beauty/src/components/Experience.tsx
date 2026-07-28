import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, Eye } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'The Consultation',
    description: "Every session begins with a conversation. Your face, your life, your vision. We listen before we touch.",
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'The Artistry',
    description: 'Studio-grade tools. Professional lighting. We work with precision and intention, building your look layer by layer.',
  },
  {
    number: '03',
    icon: Eye,
    title: 'The Reveal',
    description: "We don't just hand you a mirror. We hand you a new perspective on yourself.",
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--b2b-deep)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-xl mb-20"
        >
          <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
            The Process
          </p>
          <h2
            className="font-display leading-[1.05]"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
          >
            What to{' '}
            <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Expect</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
                className="relative p-8 lg:p-10 group cursor-default"
                style={{
                  background: 'var(--b2b-glass)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 'var(--b2b-radius)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    borderRadius: 'var(--b2b-radius)',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(200,169,106,0.07) 0%, transparent 70%)',
                  }}
                />

                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{
                      background: 'rgba(200,169,106,0.12)',
                      borderRadius: '14px',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.4} style={{ color: 'var(--b2b-gold)' }} />
                  </div>
                  <span
                    className="font-display text-5xl font-light opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ color: 'var(--b2b-gold)', lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-display text-2xl font-light mb-4"
                  style={{ color: 'var(--b2b-cream)' }}
                >
                  {step.title}
                </h3>
                <p className="font-ui font-light leading-relaxed" style={{ color: 'var(--b2b-muted)' }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

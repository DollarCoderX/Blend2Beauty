import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'One-on-One Consultation',
    description: 'Every session begins with a conversation. Your face. Your life. Your vision.',
  },
  {
    icon: Palette,
    title: 'Studio Artistry',
    description: 'Professional tools, professional light, professional results. Our studio was designed to make you look extraordinary.',
  },
  {
    icon: Sparkles,
    title: 'The Reveal',
    description: "We don't just hand you a mirror. We hand you a new perspective on yourself.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-dark)] relative overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-champagne)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-cream)] mb-4">
            The Experience
          </h2>
          <p className="text-[var(--color-cream)]/70 text-lg max-w-2xl mx-auto font-light">
            From consultation to reveal, every moment is intentional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                className="relative group"
              >
                <div className="p-8 rounded-lg bg-[var(--color-charcoal)]/40 backdrop-blur-sm border border-[var(--color-champagne)]/10 hover:border-[var(--color-champagne)]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-champagne)]/10 flex items-center justify-center group-hover:bg-[var(--color-champagne)]/20 transition-all duration-300">
                      <Icon className="text-[var(--color-champagne)]" size={28} />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--color-cream)] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-cream)]/70 leading-relaxed font-light flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

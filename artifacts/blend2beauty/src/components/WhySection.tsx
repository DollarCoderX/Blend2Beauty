import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Award, Globe, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '100% Custom',
    description: 'No two clients leave looking the same. Every look is built from scratch for your features.',
  },
  {
    icon: Award,
    title: 'Studio-Grade Tools',
    description: 'Professional makeup only. The same products used on runways and magazine covers.',
  },
  {
    icon: Globe,
    title: 'Lagos-Based, World-Inspired',
    description: 'Our techniques draw from global editorial and beauty traditions.',
  },
  {
    icon: Heart,
    title: 'Your Comfort Comes First',
    description: 'From consultation to reveal, the experience is designed around you.',
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-cream)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] mb-4">
            Why Blend2Beauty
          </h2>
          <p className="text-[var(--color-charcoal)]/70 text-lg font-light max-w-2xl mx-auto">
            Every detail matters when your face is the canvas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="text-center space-y-4"
                data-testid={`feature-${index}`}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-champagne)]/10 flex items-center justify-center">
                  <Icon className="text-[var(--color-champagne)]" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[var(--color-dark)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-charcoal)]/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@assets/How_to_Design_a_High_Conversion_Landing_Page_1785225415522.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-cream)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] leading-tight">
              The Art of <span className="italic text-[var(--color-champagne)]">Transformation</span>
            </h2>
            <div className="space-y-4 text-[var(--color-charcoal)]/80 text-base md:text-lg leading-relaxed font-light">
              <p>
                Every face carries a story. At Blend2Beauty, we don't just apply makeup — we sculpt confidence.
              </p>
              <p>
                Founded in the heart of Lagos, our studio was built on one conviction: that beauty is not an afterthought. It is an intention.
              </p>
              <p className="font-medium text-[var(--color-dark)]">
                Bring us your canvas. We'll bring the vision.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={aboutImage}
                alt="Blend2Beauty studio and artistry"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-champagne)]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

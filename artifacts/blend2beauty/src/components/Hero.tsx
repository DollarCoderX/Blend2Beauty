import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/Canva_Editable_Price_List_Template___Makeup_Services_1785225414430.jpg';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Professional makeup artistry"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/70 via-[var(--color-dark)]/60 to-[var(--color-dark)]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-2">
            <motion.h1
              variants={wordVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-cream)] leading-[1.1] tracking-tight"
            >
              Beauty, Blended
            </motion.h1>
            <motion.h1
              variants={wordVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-cream)] leading-[1.1] tracking-tight"
            >
              With <span className="italic text-[var(--color-champagne)]">Intention.</span>
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            variants={wordVariants}
            className="text-[var(--color-cream)]/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide uppercase letter-spacing-[0.15em]"
          >
            Lagos' Premier Makeup Studio — Where your face becomes your signature.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={ctaVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <a
              href="#booking"
              className="px-10 py-4 bg-[var(--color-champagne)] text-[var(--color-dark)] rounded-full text-base font-semibold hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-xl"
              data-testid="button-book-hero"
            >
              Book an Appointment
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 border-2 border-[var(--color-cream)] text-[var(--color-cream)] rounded-full text-base font-medium hover:bg-[var(--color-cream)] hover:text-[var(--color-dark)] transition-all duration-300 hover:scale-105"
              data-testid="button-explore-hero"
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 1.5,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-[var(--color-champagne)]" size={32} />
        </motion.div>
      </div>
    </section>
  );
}

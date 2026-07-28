import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import heroImage from '@assets/Canva_Editable_Price_List_Template___Makeup_Services_1785225414430.jpg';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: imgY }}>
        <img
          src={heroImage}
          alt="Premium makeup artistry by Blend2Beauty Lagos"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
        {/* layered overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(13,11,10,0.55) 0%, rgba(13,11,10,0.42) 40%, rgba(13,11,10,0.72) 85%, rgba(13,11,10,1) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(13,11,10,0.6) 100%)'
        }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-40">
        <motion.div style={{ y: textY, opacity }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px" style={{ background: 'var(--b2b-gold)' }} />
            <span className="text-xs tracking-[0.22em] uppercase font-ui font-medium" style={{ color: 'var(--b2b-gold)' }}>
              Lagos · Nigeria
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE }}
              className="font-display leading-[0.95] tracking-tight"
              style={{
                fontSize: 'clamp(3.6rem, 9vw, 8.5rem)',
                color: 'var(--b2b-cream)',
                fontWeight: 300,
              }}
            >
              Beauty,
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
              className="font-display leading-[0.95] tracking-tight"
              style={{
                fontSize: 'clamp(3.6rem, 9vw, 8.5rem)',
                color: 'var(--b2b-cream)',
                fontWeight: 300,
              }}
            >
              Blended With
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.65, ease: EASE }}
              className="font-display leading-[0.95] tracking-tight"
              style={{
                fontSize: 'clamp(3.6rem, 9vw, 8.5rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--b2b-gold)',
              }}
            >
              Intention.
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="font-ui font-light tracking-widest uppercase text-sm mb-12 max-w-md"
            style={{ color: 'var(--b2b-muted)', letterSpacing: '0.18em' }}
          >
            Lagos' Premier Makeup Studio
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#booking"
              className="font-ui text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'var(--b2b-gold)',
                color: 'var(--b2b-void)',
                padding: '16px 36px',
                borderRadius: '100px',
              }}
            >
              Book an Appointment
            </a>
            <a
              href="#portfolio"
              className="font-ui text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'rgba(244,235,217,0.08)',
                backdropFilter: 'blur(12px)',
                color: 'var(--b2b-cream)',
                padding: '16px 36px',
                borderRadius: '100px',
                border: '1px solid rgba(244,235,217,0.18)',
              }}
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom phone + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-3"
      >
        <a
          href="tel:080836578239"
          className="font-ui text-xs tracking-[0.18em] uppercase transition-colors hover:opacity-100"
          style={{ color: 'var(--b2b-muted)' }}
        >
          080836578239
        </a>
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--b2b-gold), transparent)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

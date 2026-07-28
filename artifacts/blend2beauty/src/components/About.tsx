import { motion } from 'framer-motion';
import aboutImage from '@assets/How_to_Design_a_High_Conversion_Landing_Page_1785225415522.jpg';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--b2b-void)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-8 rounded-[36px] blur-3xl opacity-20" style={{ background: 'var(--b2b-gold)' }} />
            <div className="relative overflow-hidden" style={{ borderRadius: '32px', aspectRatio: '4/5' }}>
              <img
                src={aboutImage}
                alt="Blend2Beauty premium makeup artistry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,11,10,0.5) 0%, transparent 50%)' }} />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="absolute -bottom-6 -right-4 lg:-right-8 px-6 py-4"
              style={{
                background: 'rgba(13,11,10,0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(200,169,106,0.18)',
              }}
            >
              <p className="font-display text-2xl font-light" style={{ color: 'var(--b2b-gold)' }}>Since 2020</p>
              <p className="font-ui text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--b2b-muted)' }}>Lagos Studio</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
                Our Story
              </p>
              <h2
                className="font-display leading-[1.05]"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
              >
                The Art of{' '}
                <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Transformation</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
              className="space-y-5"
            >
              <p className="font-ui font-light leading-relaxed text-lg" style={{ color: 'var(--b2b-muted)' }}>
                Every face carries a story. At Blend2Beauty, we don't just apply makeup — we sculpt confidence.
              </p>
              <p className="font-ui font-light leading-relaxed text-lg" style={{ color: 'var(--b2b-muted)' }}>
                Founded in the heart of Lagos, our studio was built on one conviction: that beauty is not an afterthought.{' '}
                <span style={{ color: 'var(--b2b-cream)' }}>It is an intention.</span>
              </p>
              <p className="font-ui font-light leading-relaxed text-lg" style={{ color: 'var(--b2b-muted)' }}>
                We bring editorial vision and surgical precision to every session — whether you're a bride, in front of a camera, or simply stepping into a room that demands presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="pt-4"
            >
              <p
                className="font-display text-2xl font-light italic"
                style={{ color: 'var(--b2b-cream)' }}
              >
                "Bring us your canvas. We'll bring the vision."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 font-ui text-sm font-medium tracking-wide group transition-all duration-300"
                style={{ color: 'var(--b2b-gold)' }}
              >
                <span>Explore Services</span>
                <span className="w-6 h-px group-hover:w-10 transition-all duration-300" style={{ background: 'var(--b2b-gold)' }} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

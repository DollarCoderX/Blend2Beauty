import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote: "Working with Blend2Beauty was the most effortless I've ever felt on my wedding day. I didn't just look beautiful — I felt like the best version of myself.",
    author: 'Bride',
    location: 'Lagos',
    year: '2024',
  },
  {
    quote: "I've worked with makeup artists across Nigeria and abroad. The level of artistry and attention to detail here is unmatched.",
    author: 'Content Creator',
    location: 'Abuja',
    year: '2024',
  },
  {
    quote: 'I booked the Signature Glam for a photoshoot and the results were editorial-level. My photographer was shocked at the finish.',
    author: 'Client',
    location: 'Lagos',
    year: '2023',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--b2b-deep)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
            Client Stories
          </p>
          <h2
            className="font-display leading-[1.05]"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
          >
            In Their{' '}
            <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Own Words</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
              className="flex flex-col justify-between p-8 lg:p-10 group"
              style={{
                background: 'var(--b2b-glass)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'var(--b2b-radius)',
                minHeight: '280px',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-display text-6xl leading-none mb-6 select-none"
                style={{ color: 'var(--b2b-gold)', opacity: 0.25 }}
              >
                "
              </div>

              <p
                className="font-display text-xl font-light leading-relaxed flex-1 mb-8"
                style={{ color: 'var(--b2b-cream)', fontStyle: 'italic' }}
              >
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-ui text-sm font-medium" style={{ color: 'var(--b2b-cream)' }}>
                    {t.author}
                  </p>
                  <p className="font-ui text-xs" style={{ color: 'var(--b2b-muted)' }}>
                    {t.location} · {t.year}
                  </p>
                </div>
                <div className="w-8 h-px" style={{ background: 'var(--b2b-gold)', opacity: 0.5 }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="font-ui text-center text-xs italic mt-10"
          style={{ color: 'rgba(244,235,217,0.28)' }}
        >
          * Placeholder testimonials — replace with verified client reviews
        </motion.p>
      </div>
    </section>
  );
}

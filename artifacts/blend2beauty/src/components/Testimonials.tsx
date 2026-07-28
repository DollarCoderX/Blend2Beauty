import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Blend2Beauty was the most effortless I've ever felt on my wedding day. I didn't just look beautiful — I felt like the best version of myself.",
    author: 'Bride, Lagos 2024',
  },
  {
    quote: "I've worked with makeup artists across Nigeria and abroad. The level of artistry and attention to detail here is unmatched.",
    author: 'Content Creator, Abuja',
  },
  {
    quote: 'I booked the Signature Glam for a photoshoot and the results were editorial-level. My photographer was shocked.',
    author: 'Client, Lagos',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-dark)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-cream)] mb-4">
            Client Stories
          </h2>
          <p className="text-[var(--color-cream)]/70 text-lg font-light">
            In their own words
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.15,
              }}
              className="bg-[var(--color-charcoal)]/40 backdrop-blur-sm border border-[var(--color-champagne)]/10 rounded-lg p-8 space-y-6"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="text-[var(--color-champagne)]" size={32} />
              <p className="text-[var(--color-cream)]/90 leading-relaxed italic font-light text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-[var(--color-cream)]/60 text-sm font-light">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center text-[var(--color-cream)]/40 text-sm italic font-light mt-12"
        >
          * Placeholder testimonials — replace with real client reviews
        </motion.p>
      </div>
    </section>
  );
}

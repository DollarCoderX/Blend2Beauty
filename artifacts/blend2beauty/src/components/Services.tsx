import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Signature Glam',
    description: 'Full coverage editorial look. Perfect for events, shoots, and occasions that demand presence.',
    duration: '1.5 – 2 hrs',
    price: 'Contact for pricing',
  },
  {
    title: 'Bridal Artistry',
    description: 'Your wedding day look, designed to last and to leave a lasting impression.',
    duration: '2 – 3 hrs',
    price: 'Contact for pricing',
  },
  {
    title: 'Bridal Preview Session',
    description: 'A rehearsal for perfection. Test your bridal look before the big day.',
    duration: '1.5 – 2 hrs',
    price: 'Contact for pricing',
  },
  {
    title: 'Editorial / Creative Looks',
    description: 'For fashion shoots, content creation, and bold creative expression.',
    duration: '1.5 hrs+',
    price: 'Contact for pricing',
  },
  {
    title: 'Touch-up & Refresh',
    description: 'Quick, targeted touch-ups for existing looks or maintenance sessions.',
    duration: '30–45 mins',
    price: 'Contact for pricing',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p className="text-[var(--color-charcoal)]/70 text-lg font-light italic">
            Crafted for Every Occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              data-testid={`card-service-${index}`}
            >
              <h3 className="font-serif text-2xl font-semibold text-[var(--color-dark)] mb-3 group-hover:text-[var(--color-champagne)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--color-charcoal)]/70 leading-relaxed mb-6 flex-1 font-light">
                {service.description}
              </p>
              <div className="space-y-2 mb-6 text-sm text-[var(--color-charcoal)]/60">
                <p>
                  <span className="font-medium">Duration:</span> {service.duration}
                </p>
                <p>
                  <span className="font-medium">Price:</span> {service.price}
                </p>
              </div>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-[var(--color-champagne)] font-medium hover:gap-3 transition-all duration-300"
                data-testid={`button-book-service-${index}`}
              >
                Book This Service
                <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

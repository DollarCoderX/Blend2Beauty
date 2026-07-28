import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section
        id="booking"
        className="py-24 lg:py-32 bg-[var(--color-charcoal)] relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <CheckCircle className="text-[var(--color-champagne)] mx-auto" size={64} />
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-cream)]">
              Your Request Has Been Received
            </h3>
            <p className="text-[var(--color-cream)]/80 text-lg leading-relaxed font-light max-w-xl mx-auto">
              Thank you for your interest in Blend2Beauty. We'll contact you within 24 hours to confirm your session and discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-champagne)]/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-cream)] mb-4">
            Reserve Your Session
          </h2>
          <p className="text-[var(--color-cream)]/70 text-lg font-light max-w-2xl mx-auto">
            Every transformation begins with a conversation. Fill in your details below and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[var(--color-dark)]/60 backdrop-blur-sm border border-[var(--color-champagne)]/20 rounded-lg p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] placeholder-[var(--color-cream)]/40 focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                placeholder="Your name"
                data-testid="input-fullname"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] placeholder-[var(--color-cream)]/40 focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                placeholder="your@email.com"
                data-testid="input-email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] placeholder-[var(--color-cream)]/40 focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
              placeholder="+234"
              data-testid="input-phone"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
              Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
              data-testid="select-service"
            >
              <option value="">Select a service</option>
              <option value="signature-glam">Signature Glam</option>
              <option value="bridal-artistry">Bridal Artistry</option>
              <option value="bridal-preview">Bridal Preview Session</option>
              <option value="editorial">Editorial / Creative Look</option>
              <option value="touchup">Touch-up & Refresh</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                data-testid="input-date"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] focus:outline-none focus:border-[var(--color-champagne)] transition-colors"
                data-testid="select-time"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 3pm)</option>
                <option value="evening">Evening (3pm - 6pm)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-[var(--color-cream)] text-sm font-medium mb-2">
              Message / Special Requests
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-champagne)]/20 rounded-lg text-[var(--color-cream)] placeholder-[var(--color-cream)]/40 focus:outline-none focus:border-[var(--color-champagne)] transition-colors resize-none"
              placeholder="Tell us about your vision..."
              data-testid="textarea-message"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[var(--color-champagne)] text-[var(--color-dark)] rounded-lg text-lg font-semibold hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
            data-testid="button-submit-booking"
          >
            Send Booking Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}

import { Instagram, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#booking' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--b2b-deep)', paddingTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="grid md:grid-cols-3 gap-12 pb-16"
          style={{ borderBottom: '1px solid rgba(200,169,106,0.1)' }}
        >
          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <h3
              className="font-display text-3xl font-light"
              style={{ color: 'var(--b2b-cream)' }}
            >
              Blend<span style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>2</span>Beauty
            </h3>
            <p className="font-ui font-light leading-relaxed text-sm" style={{ color: 'var(--b2b-muted)' }}>
              Lagos' premier makeup studio where beauty meets artistry. Every face carries a story — let us help you tell yours.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/blend2beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--b2b-glass)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '50%',
                  color: 'var(--b2b-muted)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/23408036578239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--b2b-glass)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '50%',
                  color: 'var(--b2b-muted)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="mailto:hello@blend2beauty.com"
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--b2b-glass)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '50%',
                  color: 'var(--b2b-muted)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-ui text-xs tracking-[0.18em] uppercase mb-6" style={{ color: 'var(--b2b-gold)' }}>
              Navigation
            </p>
            <nav className="space-y-3">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block font-ui font-light text-sm transition-colors duration-200"
                  style={{ color: 'var(--b2b-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-ui text-xs tracking-[0.18em] uppercase mb-6" style={{ color: 'var(--b2b-gold)' }}>
              Contact
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={15} strokeWidth={1.5} style={{ color: 'var(--b2b-gold)', shrink: 0 } as React.CSSProperties} />
                <a
                  href="tel:080836578239"
                  className="font-ui font-light text-sm transition-colors duration-200"
                  style={{ color: 'var(--b2b-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                >
                  08036578239
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} strokeWidth={1.5} style={{ color: 'var(--b2b-gold)' }} />
                <a
                  href="mailto:blessing4ril13@gmail.com"
                  className="font-ui font-light text-sm transition-colors duration-200"
                  style={{ color: 'var(--b2b-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                >
                  hello@blend2beauty.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={15} strokeWidth={1.5} style={{ color: 'var(--b2b-gold)' }} />
                <a
                  href="https://instagram.com/blend2beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui font-light text-sm transition-colors duration-200"
                  style={{ color: 'var(--b2b-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
                >
                  @blend2beauty
                </a>
              </div>
              <a
                href="https://wa.me/234080836578239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-ui text-sm font-medium transition-all duration-300 hover:scale-[1.04]"
                style={{
                  background: 'var(--b2b-glass)',
                  backdropFilter: 'blur(12px)',
                  color: 'var(--b2b-cream)',
                  padding: '10px 18px',
                  borderRadius: '100px',
                  marginTop: '4px',
                }}
              >
                <FaWhatsapp size={16} style={{ color: '#25D366' }} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 py-6"
        >
          <p className="font-ui text-xs font-light" style={{ color: 'rgba(244,235,217,0.28)' }}>
            © 2024 Blend2Beauty. All rights reserved. Lagos, Nigeria.
          </p>
          <p className="font-ui text-xs font-light" style={{ color: 'rgba(244,235,217,0.28)' }}>
            Made by{' '}
            <a
              href="mailto:hello.shapesstudio@proton.me"
              className="transition-colors duration-200"
              style={{ color: 'rgba(200,169,106,0.55)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,169,106,0.55)')}
            >
              Shapes Studio
            </a>
            {' · '}
            <a
              href="mailto:hello.shapesstudio@proton.me"
              className="transition-colors duration-200"
              style={{ color: 'rgba(244,235,217,0.28)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,235,217,0.28)')}
            >
              hello.shapesstudio@proton.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

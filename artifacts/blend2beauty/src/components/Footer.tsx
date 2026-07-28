import { Instagram, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#booking' },
  ];

  return (
    <footer className="bg-[var(--color-dark)] border-t border-[var(--color-champagne)]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-3xl font-semibold text-[var(--color-cream)]">
              Blend2Beauty
            </h3>
            <p className="text-[var(--color-cream)]/70 font-light leading-relaxed max-w-md">
              Lagos' premier makeup studio where beauty meets artistry. Every face carries a story — let us help you tell yours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--color-cream)] font-semibold mb-4 tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[var(--color-cream)]/70 hover:text-[var(--color-champagne)] transition-colors font-light"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--color-cream)] font-semibold mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--color-cream)]/70 font-light">
                <Mail size={18} className="text-[var(--color-champagne)]" />
                <a
                  href="mailto:hello@blend2beauty.com"
                  className="hover:text-[var(--color-champagne)] transition-colors"
                  data-testid="link-email"
                >
                  hello@blend2beauty.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-cream)]/70 font-light">
                <Phone size={18} className="text-[var(--color-champagne)]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-cream)]/70 font-light">
                <Instagram size={18} className="text-[var(--color-champagne)]" />
                <a
                  href="https://instagram.com/blend2beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-champagne)] transition-colors"
                  data-testid="link-instagram"
                >
                  @blend2beauty
                </a>
              </div>
              <a
                href="https://wa.me/234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-champagne)]/10 hover:bg-[var(--color-champagne)]/20 border border-[var(--color-champagne)]/30 rounded-lg text-[var(--color-cream)] transition-all duration-300 mt-2"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp size={20} />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-champagne)]/20">
          <p className="text-center text-[var(--color-cream)]/50 text-sm font-light">
            © 2024 Blend2Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

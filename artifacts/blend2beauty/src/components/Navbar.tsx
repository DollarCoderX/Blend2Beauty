import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#booking' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--color-dark)]/80 backdrop-blur-xl border-b border-[var(--color-champagne)]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#home" 
              className="font-serif text-2xl lg:text-3xl font-semibold text-[var(--color-cream)] tracking-tight"
              data-testid="link-logo"
            >
              Blend2Beauty
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-cream)] hover:text-[var(--color-champagne)] transition-colors duration-300 text-sm font-light tracking-wide"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="px-6 py-2.5 bg-[var(--color-champagne)] text-[var(--color-dark)] rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300 hover:scale-105"
                data-testid="button-book-nav"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-[var(--color-cream)] hover:text-[var(--color-champagne)] transition-colors"
              aria-label="Open menu"
              data-testid="button-mobile-menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[var(--color-dark)]" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-80 bg-[var(--color-charcoal)] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-[var(--color-champagne)]/20 flex justify-between items-center">
                <span className="font-serif text-2xl font-semibold text-[var(--color-cream)]">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--color-cream)] hover:text-[var(--color-champagne)] transition-colors"
                  aria-label="Close menu"
                  data-testid="button-close-menu"
                >
                  <X size={28} />
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-[var(--color-cream)] hover:text-[var(--color-champagne)] transition-colors text-xl font-light"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="inline-block px-8 py-3 bg-[var(--color-champagne)] text-[var(--color-dark)] rounded-full text-base font-medium hover:brightness-110 transition-all duration-300 mt-4"
                  data-testid="button-book-mobile"
                >
                  Book Now
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

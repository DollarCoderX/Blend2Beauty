import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const EASE_IOS = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#booking' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_IOS }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
        style={scrolled ? {
          background: 'rgba(13,11,10,0.72)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          boxShadow: '0 1px 0 rgba(200,169,106,0.08)',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            className="font-display text-2xl font-light tracking-tight"
            style={{ color: 'var(--b2b-cream)' }}
          >
            Blend<span style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>2</span>Beauty
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => { e.preventDefault(); handleNav(l.href); }}
                className="text-sm font-light tracking-wide transition-colors duration-300 hover:opacity-100"
                style={{ color: 'var(--b2b-muted)', fontFamily: 'var(--app-font-sans)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-muted)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#booking"
              onClick={e => { e.preventDefault(); handleNav('#booking'); }}
              className="inline-block text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                background: 'var(--b2b-gold)',
                color: 'var(--b2b-void)',
                padding: '10px 24px',
                borderRadius: '100px',
                fontFamily: 'var(--app-font-sans)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLElement).style.opacity = '0.92'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 transition-opacity duration-200 hover:opacity-70"
            style={{ color: 'var(--b2b-cream)' }}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: 'rgba(13,11,10,0.96)', backdropFilter: 'blur(32px)' }}
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-6 py-5">
              <span className="font-display text-2xl font-light" style={{ color: 'var(--b2b-cream)' }}>
                Blend<span style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>2</span>Beauty
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 transition-opacity hover:opacity-60"
                style={{ color: 'var(--b2b-cream)' }}
                aria-label="Close navigation"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <nav className="px-6 pt-10 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={e => { e.preventDefault(); handleNav(l.href); }}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_IOS }}
                  className="py-4 text-3xl font-display font-light border-b tracking-wide transition-colors duration-200"
                  style={{
                    color: 'var(--b2b-cream)',
                    borderColor: 'rgba(200,169,106,0.1)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--b2b-gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--b2b-cream)')}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={e => { e.preventDefault(); handleNav('#booking'); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: EASE_IOS }}
                className="mt-8 text-center py-4 rounded-full text-base font-medium transition-opacity hover:opacity-85"
                style={{
                  background: 'var(--b2b-gold)',
                  color: 'var(--b2b-void)',
                  fontFamily: 'var(--app-font-sans)',
                }}
              >
                Book Now — 080836578239
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

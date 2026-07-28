import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '@assets/Canva_Editable_Price_List_Template___Makeup_Services_1785225414430.jpg';
import img2 from '@assets/How_to_Design_a_High_Conversion_Landing_Page_1785225415522.jpg';
import img3 from '@assets/Makeup_–_Just_another_Starter_Templates_Sites_site_1785225418716.jpg';
import img4 from '@assets/Screenshot_2026-07-28_082154_1785225576683.jpg';

const EASE = [0.22, 1, 0.36, 1] as const;

const images = [
  { src: img1, alt: 'Signature bridal glam makeup — Blend2Beauty Lagos', label: 'Bridal Editorial' },
  { src: img2, alt: 'Editorial beauty makeup by Blend2Beauty', label: 'Beauty Campaign' },
  { src: img3, alt: 'Luxury beauty session — Blend2Beauty Studio', label: 'Studio Session' },
  { src: img4, alt: 'Skincare and cosmetics artistry — Blend2Beauty', label: 'Cosmetics Art' },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(v => (v != null ? (v - 1 + images.length) % images.length : 0));
  const next = () => setLightbox(v => (v != null ? (v + 1) % images.length : 0));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setLightbox(null);
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  // Masonry-style spans
  const spans = [
    'md:row-span-2',   // tall
    'md:row-span-1',   // normal
    'md:row-span-1',   // normal
    'md:row-span-2',   // tall
  ];

  return (
    <section id="portfolio" style={{ background: 'var(--b2b-void)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="font-ui text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--b2b-gold)' }}>
              Portfolio
            </p>
            <h2
              className="font-display leading-[1.05]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
            >
              The{' '}
              <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Work</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="font-ui font-light text-sm md:max-w-xs"
            style={{ color: 'var(--b2b-muted)' }}
          >
            Every image is a session. Click to view full screen.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:grid-rows-[280px_280px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${spans[i]}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: EASE }}
              onClick={() => setLightbox(i)}
              style={{ borderRadius: 'var(--b2b-radius)', minHeight: '240px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end"
                style={{
                  background: 'linear-gradient(to top, rgba(13,11,10,0.75) 0%, transparent 50%)',
                }}
              >
                <div className="p-6">
                  <span className="font-ui text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--b2b-gold)' }}>
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(8,6,5,0.96)', backdropFilter: 'blur(24px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-6"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="w-full object-contain max-h-[80vh]"
                style={{ borderRadius: '20px' }}
              />

              {/* Label */}
              <p className="font-ui text-xs tracking-[0.18em] uppercase text-center mt-4" style={{ color: 'var(--b2b-gold)' }}>
                {images[lightbox].label}
              </p>

              {/* Controls */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ background: 'var(--b2b-glass)', borderRadius: '50%', backdropFilter: 'blur(12px)', color: 'var(--b2b-cream)' }}
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 hidden md:flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ background: 'var(--b2b-glass)', borderRadius: '50%', backdropFilter: 'blur(12px)', color: 'var(--b2b-cream)' }}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 hidden md:flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ background: 'var(--b2b-glass)', borderRadius: '50%', backdropFilter: 'blur(12px)', color: 'var(--b2b-cream)' }}
                    aria-label="Next"
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import portfolioImg1 from '@assets/Canva_Editable_Price_List_Template___Makeup_Services_1785225414430.jpg';
import portfolioImg2 from '@assets/How_to_Design_a_High_Conversion_Landing_Page_1785225415522.jpg';
import portfolioImg3 from '@assets/Makeup_–_Just_another_Starter_Templates_Sites_site_1785225418716.jpg';
import portfolioImg4 from '@assets/Screenshot_2026-07-28_082154_1785225576683.jpg';
import generatedImg1 from '@assets/generated_images/portfolio-1.jpg';
import generatedImg2 from '@assets/generated_images/portfolio-2.jpg';
import generatedImg3 from '@assets/generated_images/portfolio-3.jpg';
import generatedImg4 from '@assets/generated_images/portfolio-4.jpg';
import Lightbox from './Lightbox';

const portfolioImages = [
  { src: portfolioImg1, alt: 'Editorial makeup artistry' },
  { src: generatedImg1, alt: 'Professional beauty portrait' },
  { src: portfolioImg2, alt: 'Luxury makeup application' },
  { src: generatedImg2, alt: 'Dramatic editorial makeup' },
  { src: portfolioImg3, alt: 'Natural glam makeup look' },
  { src: generatedImg3, alt: 'Bridal makeup artistry' },
  { src: portfolioImg4, alt: 'Creative makeup design' },
  { src: generatedImg4, alt: 'High fashion beauty editorial' },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section
        id="portfolio"
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
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-cream)] mb-6">
              The Work
            </h2>
            <p className="text-[var(--color-cream)]/70 text-lg font-light max-w-2xl mx-auto">
              Every face tells a different story. Here are some of ours.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  index % 7 === 0 ? 'md:row-span-2' : ''
                } ${index % 5 === 0 ? 'md:col-span-2' : ''}`}
                onClick={() => openLightbox(index)}
                data-testid={`image-portfolio-${index}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-[var(--color-dark)]/0 group-hover:bg-[var(--color-dark)]/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-[var(--color-cream)] font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={portfolioImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)}
        onPrev={() =>
          setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
        }
      />
    </>
  );
}

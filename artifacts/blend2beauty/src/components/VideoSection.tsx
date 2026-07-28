import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';
import posterImg1 from '@assets/Canva_Editable_Price_List_Template___Makeup_Services_1785225414430.jpg';
import posterImg2 from '@assets/How_to_Design_a_High_Conversion_Landing_Page_1785225415522.jpg';
import posterImg3 from '@assets/Makeup_–_Just_another_Starter_Templates_Sites_site_1785225418716.jpg';

const videos = [
  {
    title: 'Bridal Transformation Story',
    poster: posterImg1,
  },
  {
    title: 'Behind the Brush',
    poster: posterImg2,
  },
  {
    title: 'Lagos Fashion Week Ready',
    poster: posterImg3,
  },
];

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="videos"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-charcoal)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-cream)] mb-4">
            In Motion
          </h2>
          <p className="text-[var(--color-cream)]/70 text-lg font-light">
            See the artistry unfold
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.15,
              }}
              className="relative group overflow-hidden rounded-lg aspect-[9/16] bg-[var(--color-dark)]"
              data-testid={`video-card-${index}`}
            >
              <img
                src={video.poster}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[var(--color-dark)]/40 group-hover:bg-[var(--color-dark)]/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-champagne)]/20 backdrop-blur-sm border border-[var(--color-champagne)]/40 flex items-center justify-center group-hover:bg-[var(--color-champagne)]/30 transition-all duration-300">
                    <Play className="text-[var(--color-cream)] ml-1" size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-[var(--color-cream)] px-4">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center text-[var(--color-cream)]/50 text-sm italic font-light"
        >
          Upload your video content to bring this section to life
        </motion.p>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import posterImg1 from '@assets/IMG-20260728-WA0011_1785233535361.jpg';
import posterImg2 from '@assets/IMG-20260728-WA0023_1785233536754.jpg';
import posterImg3 from '@assets/generated_images/portfolio-3.jpg';

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * TO ADD YOUR OWN VIDEOS:
 * 1. Upload your .mp4 files (e.g. to Cloudinary or Google Drive public link)
 * 2. Replace the empty `src` strings below with your direct video URLs
 * 3. The `poster` images are already set to your real photos
 */
const videos = [
  {
    src: '',
    poster: posterImg1,
    title: 'Bridal Transformation',
    tag: 'Bridal',
  },
  {
    src: '',
    poster: posterImg2,
    title: 'Behind the Brush',
    tag: 'Studio',
  },
  {
    src: '',
    poster: posterImg3,
    title: 'Editorial Session',
    tag: 'Editorial',
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay: index * 0.13, ease: EASE }}
      className="relative overflow-hidden cursor-pointer group"
      style={{
        borderRadius: 'var(--b2b-radius)',
        background: '#0a0808',
        aspectRatio: '9/12',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        {...(video.src ? { src: video.src } : {})}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onEnded={() => setPlaying(false)}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: playing
            ? 'linear-gradient(to top, rgba(13,11,10,0.7) 0%, transparent 50%)'
            : 'linear-gradient(to top, rgba(13,11,10,0.75) 0%, rgba(13,11,10,0.2) 60%, transparent 100%)',
          opacity: hovered || !playing ? 1 : 0.5,
        }}
      />

      {/* Play / Pause button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: hovered || !playing ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <div
          className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: 'rgba(13,11,10,0.55)',
            backdropFilter: 'blur(16px)',
            borderRadius: '50%',
            border: '1.5px solid rgba(200,169,106,0.45)',
          }}
        >
          {playing ? (
            <Pause size={22} strokeWidth={1.5} style={{ color: 'var(--b2b-cream)' }} />
          ) : (
            <Play size={22} strokeWidth={1.5} fill="var(--b2b-cream)" style={{ color: 'var(--b2b-cream)', marginLeft: 3 }} />
          )}
        </div>
      </motion.div>

      {/* Labels bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span
          className="font-ui text-xs tracking-[0.18em] uppercase mb-2 block"
          style={{ color: 'var(--b2b-gold)' }}
        >
          {video.tag}
        </span>
        <h3
          className="font-display text-xl font-light"
          style={{ color: 'var(--b2b-cream)' }}
        >
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" style={{ background: 'var(--b2b-deep)', padding: '120px 0' }}>
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
              In Motion
            </p>
            <h2
              className="font-display leading-[1.05]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 300, color: 'var(--b2b-cream)' }}
            >
              Watch the{' '}
              <em style={{ color: 'var(--b2b-gold)', fontStyle: 'italic' }}>Artistry</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-ui font-light text-sm md:max-w-xs"
            style={{ color: 'var(--b2b-muted)', fontStyle: 'italic' }}
          >
            Tap any video to play · Sample clips — replace with your real work
          </motion.p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <VideoCard key={v.title} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

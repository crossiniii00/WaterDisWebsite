import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../assets/images';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { DistrictSeal } from './DistrictSeal';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
}

export const Hero: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      id: 0,
      title: 'Safe & Potable Water for San Isidro',
      description:
        'Created under SB Resolution No. 052 and PD 198, San Isidro Water District delivers safe, potable, reliable, and sufficient water supply to 516 active metered connections across Northern Samar.',
      ctaText: 'View official rates (from ₱185)',
      ctaHref: '#rates',
      image: IMAGES.heroReservoir,
    },
    {
      id: 1,
      title: 'Happy Valley & Sta. Teresita Springs',
      description:
        'Supplying our municipality from two pristine natural mountain spring sources—Happy Valley and Sta. Teresita—complemented by the Canawayon River surface water intake.',
      ctaText: 'Explore our water sources',
      ctaHref: '#locations',
      image: IMAGES.watershedCatchment,
    },
    {
      id: 2,
      title: 'Serving 7 Municipal Barangays',
      description:
        'Providing dependable service across Poblacion Norte, Poblacion Sur, San Juan, Salvacion, Alegria, Balite, and Buenavista within our 25,590-hectare municipal territory.',
      ctaText: 'Check territory & service area',
      ctaHref: '#locations',
      image: IMAGES.treatmentFacility,
    },
    {
      id: 3,
      title: 'Commitment, Teamwork & Stewardship',
      description:
        'Administered by our General Manager with a 5-sector Board of Directors representing Business, Professional, Women, Education, and Civic sectors.',
      ctaText: 'Our mission, vision & values',
      ctaHref: '#purpose',
      image: IMAGES.qualityLab,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance carousel every 6 seconds when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <section className="relative h-screen min-h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col justify-end pt-24 pb-8 sm:pb-12">
      
      {/* Background Images with AnimatePresence Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover object-center brightness-[0.72]"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/30 to-black/90"></div>
      </div>

      {/* Floating Editorial Card Placed LOWER in the Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl lg:max-w-3xl bg-white border-t-[8px] border-[#003B7E] rounded-3xl py-8 px-6 sm:py-10 sm:px-14 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            {/* Prominent Title stating San Isidro Water District */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#003B7E]/10 shadow-xs">
              <DistrictSeal className="w-5 h-5 shrink-0" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#003B7E]">
                San Isidro Water District
              </span>
            </div>

            {/* Bold, balanced headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-[1.05] mb-4">
              {slides[currentSlide].title}
            </h1>

            {/* Crisp, clean description text */}
            <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-6 font-medium">
              {slides[currentSlide].description}
            </p>

            {/* Subtle Arrow Link */}
            <div className="flex justify-center">
              <motion.a
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                href={slides[currentSlide].ctaHref}
                className="group inline-flex items-center gap-2 text-sm md:text-base font-bold text-[#003B7E] hover:text-[#577A38] transition-colors py-1 focus:outline-hidden"
              >
                <span>{slides[currentSlide].ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#003B7E] group-hover:text-[#577A38] group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Sleek Horizontal Segment Slider & Controls placed right below card */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3">
          {/* Segment Bar Container */}
          <div className="flex items-center gap-1.5 p-1 bg-black/70 border border-white/20 rounded-full backdrop-blur-xs">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`relative h-1.5 w-8 sm:w-12 rounded-full overflow-hidden transition-all cursor-pointer ${
                  currentSlide === idx ? 'bg-[#0052CC]' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              >
                {/* Active progress indicator line */}
                {currentSlide === idx && isPlaying && (
                  <motion.div
                    key={`progress-${idx}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-0 bg-[#00A859]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Pause / Play Toggle Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 sm:p-2 bg-black/70 border border-white/20 rounded-full text-white hover:text-[#00A859] hover:bg-black/90 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 fill-current" />
            ) : (
              <Play className="w-3 h-3 fill-current ml-0.5" />
            )}
          </button>
        </div>
      </div>

    </section>
  );
};

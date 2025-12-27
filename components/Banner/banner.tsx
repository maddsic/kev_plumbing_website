'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../ui/button';
import slider from '@/constants/slider';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Emergency Plumbing Service in Edinburgh and Fife',
  description:
    'Dunedin Plumbing and Heating offers reliable plumbing services in Edinburgh and Fife. From installations to repairs, trust our experienced team for all your plumbing needs.',
  robots: {
    index: true,
    follow: true,
  },
};

const SLIDE_INTERVAL = 8000;

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const slide = slider[currentSlide];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.url}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image src={slide.url} alt={slide.title} fill priority className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={slide.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block text-lg lg:text-xl text-blue-100 mb-8"
          >
            {slide.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            {/* Primary CTA */}
            <Link href="#contact">
              <Button
                size="lg"
                className="group relative overflow-hidden
                  bg-green-600 text-white
                  px-10 py-7 text-lg font-semibold
                  rounded-2xl shadow-xl hover:bg-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-2xl
                "
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>

            {/* Secondary CTA */}
            <Link href="#services">
              <Button
                size="lg"
                className="bg-blue-500 relative px-6 py-7 text-lg font-semibold
                  rounded-xl
                  text-white
                  backdrop-blur-sm
                  hover:bg-white hover:text-blue-950
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

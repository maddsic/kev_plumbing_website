'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StyledHeading } from '../StyledHeading/styledHeading';
import { Heading } from '../Heading/heading';
import { testimonialData } from '@/app/data/testimonials';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Quote, Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Testimonials - Dunedin Plumbing and Heating',
  description:
    'Read what our satisfied customers have to say about their experienceDunedin Plumbing and Heating. Trust our team for reliable plumbing services in Edinburgh and Fife. Emergency Plumbing Edinburgh',
  robots: {
    index: true,
    follow: true,
  },
};

const Testimonials = () => {
  return (
    <main id="testimonials" className="relative py-24 bg-slate-50">
      <motion.section
        className="max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <StyledHeading title="What our clients think" classNames="text-blue-600" />
          <h3 className="text-[#001733] text-3xl md:text-5xl font-extrabold tracking-tight mt-3">
            Testimonials
          </h3>
          <p className="mt-4 text-slate-600">
            We’re proud of the trust our clients place in us for both residential and commercial
            plumbing services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((tes, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="
            relative bg-white rounded-3xl
            p-8 shadow-md hover:shadow-xl
            transition-shadow
          "
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={32} />
              </div>

              {/* Content */}
              <p className="text-slate-700 text-sm leading-relaxed mb-8">“{tes.content}”</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden border border-slate-200">
                  <Image
                    src={tes.image}
                    alt={tes.title}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <div className="text-left">
                  <p className="font-semibold text-[#001733]">{tes.title}</p>
                  <p className="text-xs text-slate-500">Happy Client</p>

                  {/* Rating */}
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Testimonials;

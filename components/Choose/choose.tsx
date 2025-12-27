'use client';
import { motion } from 'framer-motion';
import { ShowerHead, Users, Home } from 'lucide-react';
import { Heading } from '../Heading/heading';
import { StyledHeading } from '../StyledHeading/styledHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dunedine Plumbing and Heating - Your Trusted Local Plumbers',
  description:
    'Learn about Dunedine Plumbing and Heating history, mission, and team. Trust our experienced plumbers for all your plumbing needs in Edinburgh and Fife. Emergency Plumbing Edinburgh',
  robots: {
    index: true,
    follow: true,
  },
};

const chooseData = [
  {
    icon: ShowerHead,
    title: 'Experienced Technicians',
    description:
      'Our team consists of experienced plumbers who specialize in plumbing works & maintenance.',
  },
  {
    icon: Users,
    title: 'Quality Workmanship',
    description: 'We take pride in delivering high-quality workmanship and lasting solutions.',
  },
  {
    icon: Home,
    title: 'Affordable Rates',
    description: ' Our competitive rates make professional plumbing maintenance accessible to all',
  },
];

const Choose = () => {
  return (
    <main
      id="choose"
      className="
      relative min-h-screen
      bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed
      flex items-center
    "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220cc] to-[#0b1220ee]" />

      <motion.section
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <StyledHeading title="Plumbing is what we do" classNames="text-blue-400 font-semibold" />
          <Heading title="Why Choose Us" classNames="text-white mt-3" />
          <p className="text-slate-300 max-w-2xl mx-auto mt-4">
            Reliable service, skilled professionals, and workmanship you can trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {chooseData.map((choose, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="
              relative rounded-3xl
              bg-white/10 backdrop-blur-md
              border border-white/20
              p-8 text-center
              shadow-xl 
            "
            >
              {/* Icon */}
              <div
                className="
              mx-auto mb-6
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              bg-blue-600 text-white
              shadow-lg
            "
              >
                <choose.icon size={26} />
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{choose.title}</h3>

              <p className="text-slate-300 text-sm leading-relaxed">{choose.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Choose;

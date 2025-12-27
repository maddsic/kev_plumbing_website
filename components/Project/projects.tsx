'use client';

import Image from 'next/image';
import { StyledHeading } from '../StyledHeading/styledHeading';
import { projectData } from '../../app/data/projects';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '../ui/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Metadata } from 'next';
import { client, urlFor } from '@/app/lib/sanity';

export const metadata: Metadata = {
  title: 'Plumbing Projects Portfolio - Dunedin Plumbing and Heating',
  description:
    'View examples of Dunedin Plumbing and Heating  past projects, including bathroom remodels, pipe replacements, and more. Trust our experienced team for your next plumbing project. Emergency Plumbing Edinburgh',
  robots: {
    index: true,
    follow: true,
  },
};

interface ProjecDataInterface {
  image: {
    asset: {
      _ref: string;
    };
  };
}

const Project = () => {
  const [projectData, setProjectData] = useState<ProjecDataInterface[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.09 });
  const mainControls = useAnimation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch('*[_type == "project"]');
        setProjectData(data);
      } catch (error) {
        console.error('ERROR FETCHING PROJECT DATA:', error);
      }
    }
    fetchData();
  }, []);

  const checkIsInView = useCallback(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  useEffect(() => {
    checkIsInView();
  }, [isInView, checkIsInView]);

  return (
    <section id="projects" className="relative py-24 bg-white">
      <motion.main
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <StyledHeading title="Our Work" classNames="text-blue-600" />
          <h3 className="text-[#001733] text-3xl md:text-5xl font-extrabold tracking-tight capitalize mt-3">
            Our latest projects
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A snapshot of recent plumbing and heating work completed across Edinburgh and Fife.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectData?.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="
            group relative overflow-hidden rounded-3xl
            bg-slate-100 shadow-md hover:shadow-2xl
            transition-shadow
          "
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  alt="Project image"
                  src={urlFor(project?.image?.asset._ref).url()}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div
                className="
              absolute inset-0 bg-[#001733]/70
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              flex items-center justify-center
            "
              >
                <button
                  onClick={() => window.open(urlFor(project?.image?.asset._ref).url(), '_blank')}
                  className="
                px-6 py-3 bg-white text-[#001733]
                font-semibold rounded-xl
                shadow-lg
                hover:bg-slate-100 transition
              "
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            size="lg"
            className="
          px-10 py-6 rounded-2xl
          bg-blue-600 text-white
          font-semibold
          hover:bg-blue-500
          transition-all
          hover:-translate-y-1 hover:shadow-xl
        "
          >
            Explore More Projects
          </Button>
        </div>
      </motion.main>
    </section>
  );
};

export default Project;

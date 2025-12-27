'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Metadata } from 'next';
import { StyledHeading } from '../styledHeading';
import { Heading } from '../heading';
import { useEffect, useState } from 'react';
import { client, urlFor } from '@/app/lib/sanity';

export const metadata: Metadata = {
  title: 'Plumbing Services in Edinburgh and Fife - Installation, Repair, Maintenance',
  description:
    'Dunedin Plumbing and Heating offers comprehensive plumbing services in Edinburgh and Fife, including installation, repair, and maintenance. Contact us for expert plumbing solutions. Emergency Plumbing Edinburgh',
  robots: {
    index: true,
    follow: true,
  },
};

interface Service {
  _id: string;
  title: string;
  imageurl: {
    asset: {
      _ref: string;
    };
  };
}

export const revalidate = 3600;

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function ferchData() {
      try {
        const data: Service[] = await client.fetch(`*[_type == "service"]`);
        setServices(data);
        // console.log("service data", data);
      } catch (error) {
        // console.log("ERROR from service useEffect", error);
      }
    }
    ferchData();
  }, []);

  // hi

  return (
    <div id="services" className="relative py-20 bg-slate-50">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <StyledHeading title="What we offer" classNames="text-blue-600" />
          <h3 className="text-[#001733] text-3xl md:text-5xl font-extrabold tracking-tight capitalize mt-3">
            Our services
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Reliable plumbing and heating services delivered with speed, care, and craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services?.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="
            group bg-white rounded-3xl overflow-hidden
            shadow-md hover:shadow-2xl
            transition-shadow
          "
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  alt={service.title}
                  src={urlFor(service?.imageurl?.asset._ref).url()}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-[#001733] mb-2">{service?.title}</h2>

                {/* Optional future-proofing */}
                {/* <p className="text-sm text-slate-600">
              Short service description here
            </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

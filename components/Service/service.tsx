"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { StyledHeading } from "../styledHeading";
import { Heading } from "../heading";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/app/lib/sanity";

export const metadata: Metadata = {
  title:
    "Plumbing Services in Edinburgh and Fife - Installation, Repair, Maintenance",
  description:
    "Dunedin Plumbing and Heating offers comprehensive plumbing services in Edinburgh and Fife, including installation, repair, and maintenance. Contact us for expert plumbing solutions. Emergency Plumbing Edinburgh",
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
    <div id="services" className="app__container">
      <motion.div
        className="app__wrapper app-flex-row mx-auto"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-1/2 mx-auto">
          <StyledHeading title="What we offer" classNames="text-blue-500" />
          <h3 className="text-[#001733] text-[24px] md:text-[42px] font-bold leading-[63px] lg:mb-3 text-center capitalize">
            Our services
          </h3>
        </div>
        <div className="flex justify-center items-start flex-wrap mt-[1rem] md:container">
          {services?.map((service, sIndex) => (
            <motion.div
              key={sIndex}
              className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-start items-start flex-col m-[1rem]"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "Inertia" }}
            >
              <Image
                alt={service.title}
                src={urlFor(service?.imageurl?.asset._ref).url()}
                className="rounded-[20px] object-cover shadow-lg mx-auto custom-image-height"
                width="400"
                height="200"
              />

              <h2 className="bold-text mt-[20px]" style={{ marginTop: 20 }}>
                {service?.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

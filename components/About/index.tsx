"use client";

import { BookCheck, Hammer, Home, Truck } from "lucide-react";

import styles from "./about.module.scss";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { Button } from "../ui/button";
import { Counter } from "../counter";
import { GiHotSurface, GiTap } from "react-icons/gi";
import { PiToiletLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";

const data = [
   {
      title: "General Plumbing Maintenance",
      icon: Home,
   },
   {
      title: "24/7 Emergency Plumbing Service",
      icon: Truck,
   },
   {
      title: "Plumbing Supplies and Equipment",
      icon: Hammer,
   },
   //    {
   //       title: "Commercial Plumbing",
   //       icon: Home,
   //    },
];

const list = [
   "Qualified team",
   "Affordable pricing",
   "Quick service",
   "10+ years experience",
   "100+ projects done",
   "Plumbing Experts",
];

const About = () => {
   return (
      <main id="about" className="pb-8 px-4 xs:px-6 sm:px-16 md:px-24 mt-10">
         <motion.section
            className=""
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            {/* CONTENT */}
            <div className="lg:flex justify-around  gap-x-20 max-w-[80%] mx-auto ">
               {/* ASIDE LEFT */}
               <aside className="flex-1 p-0">
                  <figure className="flex items-center justify-center lg:mt-10">
                     <Image
                        src="/profile.webp"
                        alt="About us"
                        className={cn(
                           "rounded border shadow-lg flex-1",
                           styles.img
                        )}
                        width={100}
                        height={70}
                     />
                  </figure>
               </aside>

               {/* ASIDE RIGHT */}
               <aside className="w-full lg:max-w-[60%] lg:p-5 my-20">
                  <div className="flex flex-col my-10 lg:my-5">
                     <StyledHeading
                        title="ABOUT US"
                        classNames="text-[#001733] font-bold"
                     />
                     <h3 className="text-[#001733] text-[24px] md:text-[42px] font-bold leading-[63px] text-start lg:mb-7">
                        Plumbing is what we do
                     </h3>
                     <p className="gray-text leading-8 text-[13px] lg:text-[16px] font-medium">
                        We are an award winning plumbing company with over 20
                        years experience in the business. We provide a wide
                        range of services for both residential and commercial
                        clients.
                     </p>
                     <div className="lg:grid grid-cols-2 mt-8">
                        {list.map((item, index) => (
                           <div
                              key={index}
                              className="flex gap-x-2 items-center justify-start  mb-3 lg:mb-5"
                           >
                              <BookCheck color="red" size={15} />
                              <motion.li
                                 whileHover={{
                                    scale: 1.1,
                                    originX: 0,
                                    color: "#000000",
                                 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 300,
                                 }}
                                 className="gray-text text-[12px] lg:text-sm list-none"
                              >
                                 {item}
                              </motion.li>
                           </div>
                        ))}
                     </div>
                  </div>
                  <p className="gray-text text-[12px] lg:text-[14px] lg:font-medium leading-7">
                     No job is too big or too small, we’ve got you covered. In
                     addition to our services, you can check out our shop for a
                     wide range of plumbing supplies and equipment. When it
                     comes to plumbing we are your one stop shop.
                  </p>
                  <Button
                     variant="ghost"
                     className="bg-blue-900 hover:bg-blue-800 text-white mt-4 lg:mt-8 font-semibold"
                     size="lg"
                  >
                     Learn More
                  </Button>
               </aside>
            </div>
            {/* COUNTERS */}
            <div className="lg:flex justify-evenly -mt-10 lg:-mt-0 mb-10 lg:mb-20  lg:items-center max-w-[80%] mx-auto">
               <div className="flex items-center justify-start lg:justify-center gap-x-4 mb-4">
                  <PiToiletLight fontSize={60} className="text-blue-900" />
                  <Counter number={3500} title="Toilets Installed" />
               </div>
               <div className="flex items-center justify-start lg:justify-center gap-x-4 mb-4 ">
                  <GiHotSurface fontSize={60} className="text-blue-900" />
                  <Counter number={1200} title="Heaters Repaired" />
               </div>

               <div className="flex items-center justify-start lg:justify-center gap-x-4 mb-4">
                  <IoWaterOutline fontSize={60} className="text-blue-900" />
                  <Counter number={2550} title="Burst Mains Repaired" />
               </div>
               <div className="flex items-center justify-start lg:justify-center gap-x-4 mb-4">
                  <GiTap fontSize={60} className="text-blue-900" />
                  <Counter number={3000} title="Leaky Faucets Fixed" />
               </div>
            </div>
         </motion.section>
      </main>
   );
};

export default About;

{
   /* <motion.section
            className="app__wrapper w-full lg:max-w-[80%] mx-auto"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="boxes__parent flex-wrap items-center justify-center lg:gap-x-3 md:flex ">
               {data.map((d, dIndex) => (
                  <div
                     key={dIndex}
                     className={cn(
                        "boxex__child mb-8 lg:mb-3 w-full lg:w-[28%] flex flex-col items-center gap-y-3 group hover:-translate-y-6 transition duration-1000",
                        styles.highlight__box
                     )}
                  >
                     <div className="icon__container relative">
                        <span className="circles"></span>
                        <span className="circles"></span>
                        <d.icon size={50} color="white" />
                     </div>
                     <h4 className="text-2xl">{d.title}</h4>

                     <Link href="#" className="group-hover:text-red-500">
                        Learn More
                     </Link>
                  </div>
               ))}
            </div>
         </motion.section> */
}

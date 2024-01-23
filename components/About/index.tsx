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
      <main className="app__container bg-muted-foreground pb-8">
         <motion.section
            className="app__wrapper max-w-[80%] mx-auto"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="boxes__parent flex-wrap items-center justify-center gap-x-3 md:flex">
               {data.map((d, dIndex) => (
                  <div
                     key={dIndex}
                     className={cn(
                        "boxex__child  mb-3 md:max-w-[40%] flex flex-col items-center gap-y-3 group hover:-translate-y-6 transition duration-1000",
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
         </motion.section>

         <motion.section
            className="bg-musted-foreground"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            {/* CONTENT */}
            <div className="content flex justify-around py-14 gap-x-20 max-w-[80%] mx-auto">
               {/* ASIDE LEFT */}
               <aside className="flex-1">
                  <div className="flex items-center justify-center p-5">
                     <Image
                        src="/profile.webp"
                        alt="About us"
                        className={cn("rounded shadow-lg", styles.img)}
                        width={100}
                        height={100}
                     />
                  </div>
               </aside>

               {/* ASIDE RIGHT */}
               <aside className="lg:max-w-[60%] p-5 shadow-xs">
                  <div className="flex flex-col my-5">
                     <StyledHeading
                        title="ABOUT US"
                        classNames="text-[#001733] font-bold"
                     />
                     <h3 className="text-[#001733] text-[42px] font-bold leading-[63px] text-start mb-7">
                        Plumbing is what we do
                     </h3>

                     <p className="text-gray-500 leading-8 text-md font-semibold">
                        We are an award winning plumbing company with over 20
                        years experience in the business. We provide a wide
                        range of services for both residential and commercial
                        clients.
                     </p>

                     {/* LIST ITEMS */}
                     <div className="grid grid-cols-2 mt-8">
                        {list.map((item, index) => (
                           <div className="flex gap-x-2 items-center justify-start gap-y-5 mb-5">
                              <BookCheck color="red" size={20} />
                              <p className="text-gray-500 font-semibold">
                                 {item}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
                  <p className="text-gray-500 font-semibold leading-7">
                     No job is too big or too small, we’ve got you covered. In
                     addition to our services, you can check out our shop for a
                     wide range of plumbing supplies and equipment. When it
                     comes to plumbing we are your one stop shop.
                  </p>
                  <Button
                     variant="ghost"
                     className="bg-blue-900 text-white mt-8 font-semibold rounded"
                     size="lg"
                  >
                     Learn More
                  </Button>
               </aside>
            </div>
            {/* COUNTERS */}
            <div className="flex mb-20 justify-evenly items-center max-w-[80%] mx-auto">
               <div className="flex items-center gap-x-4 justify-center">
                  <PiToiletLight fontSize={60} className="text-blue-900" />
                  <Counter number={3500} title="Toilets Installed" />
               </div>
               <div className="flex items-center gap-x-4 justify-center">
                  <GiHotSurface fontSize={60} className="text-blue-900" />
                  <Counter number={1200} title="Heaters Repaired" />
               </div>

               <div className="flex items-center gap-x-4 justify-center">
                  <IoWaterOutline fontSize={60} className="text-blue-900" />
                  <Counter number={2550} title="Burst Mains Repaired" />
               </div>
               <div className="flex items-center gap-x-2 justify-center">
                  <GiTap fontSize={60} className="text-blue-900" />
                  <Counter number={3000} title="Leaky Faucets Fixed" />
               </div>
            </div>
         </motion.section>
      </main>
   );
};

export default About;

"use client";
import { motion } from "framer-motion";
import { ShowerHead, Users, Home } from "lucide-react";
import { Heading } from "../heading";
import { StyledHeading } from "../styledHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Dunedine Plumbing and Heating - Your Trusted Local Plumbers",
   description:
      "Learn about Dunedine Plumbing and Heating history, mission, and team. Trust our experienced plumbers for all your plumbing needs in Edinburgh and Fife. Emergency Plumbing Edinburgh",
   robots: {
      index: true,
      follow: true,
   },
};

const chooseData = [
   {
      icon: ShowerHead,
      title: "Experienced Technicians",
      description:
         "Our team consists of experienced plumbers who specialize in plumbing works & maintenance.",
   },
   {
      icon: Users,
      title: "Quality Workmanship",
      description:
         "We take pride in delivering high-quality workmanship and lasting solutions.",
   },
   {
      icon: Home,
      title: "Affordable Rates",
      description:
         " Our competitive rates make professional plumbing maintenance accessible to all",
   },
];

const Choose = () => {
   return (
      <main
         id="choose"
         className="relative overflow-hidden min-h-[900px] md:min-h-[700px] lg:min-h-[450px] border bg-[url('/bg2.jpg')] bg-fixed bg-cover"
      >
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#10162199] top-0 left-0 right-0 bottom-0"></div>
         <motion.section
            className="mx-auto absolute top-0 left-0 right-0 bottom-0 flex flex-col p-5 mt-8 lg:max-w-[80%]"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <StyledHeading
               title="Plumbing is what we do"
               classNames="text-white font-bold"
            />
            <Heading title="Why Choose Us" classNames="text-white" />
            {/*  */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5 mx-auto p-5 mt-5 ">
               {chooseData.map((choose, index) => (
                  <div
                     key={index}
                     className="mb-3 group hover:-translate-y-6 transition duration-1000 relative max-w-[320px] rounded-[20px] bg-[#1667ae] px-5 py-8 text-center shadow-2xl"
                  >
                     <div className="group-hover:bg-black flex justify-center items-center absolute -top-[30px] left-[40%] z-20 rounded-full bg-[#2296f9] p-4">
                        <choose.icon size={34} color="white" className="" />
                     </div>
                     <h2 className="mb-3 mt-5 text-white font-bold tracking-wide">
                        {choose.title}
                     </h2>
                     <p className="text-sm tracking-wider text-gray-50 leading-relaxed">
                        {choose.description}
                     </p>
                  </div>
               ))}
            </div>
            ;
         </motion.section>
      </main>
   );
};

export default Choose;

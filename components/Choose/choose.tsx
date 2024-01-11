"use client";
import { motion } from "framer-motion";
import { ShowerHead, Users, Home } from "lucide-react";
import { Heading } from "../heading";
import { StyledHeading } from "../styledHeading";

const chooseData = [
   {
      icon: ShowerHead,
      title: "Fast & Efficient Service",
      description:
         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
   },
   {
      icon: Users,
      title: "Qualified Team",
      description:
         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
   },
   {
      icon: Home,
      title: "Affordable Pricing",
      description:
         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
   },
];

const Choose = () => {
   return (
      <div className="w-full relative h-[450px] border bg-sky-900 bg-[url('/tap.jpg')] bg-cover bg-fixed">
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#10162199] top-0 left-0 right-0 bottom-0"></div>
         <motion.div
            className="w-[60%] mx-auto  absolute top-0 left-0 right-0 bottom-0 flex flex-col p-5 mt-8"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <StyledHeading
               title="Plumbing is what we do"
               classNames="text-white font-bold"
            />
            <div className="flex justify-center">
               <Heading title="Why Choose Us" classNames="text-white" />
            </div>
            <div className="flex items-center justify-center gap-x-3 mx-auto p-5 mt-5">
               {chooseData.map((choose, index) => (
                  <div
                     key={index}
                     className="group hover:-translate-y-6 transition duration-1000 relative w-[320px] rounded-[20px] bg-[#1667ae] px-10 py-8 text-center"
                  >
                     <div className="group-hover:bg-black flex justify-center items-center absolute top-[-30px] left-[40%] z-20 rounded-full bg-[#2296f9] p-4">
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
         </motion.div>
      </div>
   );
};

export default Choose;

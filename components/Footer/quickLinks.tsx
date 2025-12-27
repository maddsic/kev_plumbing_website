"use client";

import React from "react";
import { motion } from "framer-motion";

const links = [
   "home",
   "about us",
   "services",
   "projects",
   "testimonials",
   "contact us",
];

const QuickLinks = () => {
   // console.log(links.length - 1);
   return (
      <main>
         <h2 className="uppercase text-2xl font-bold underline underline-offset-[14px] decoration-red-700 decoration-4">
            quick links
         </h2>
         <section className="py-8 md:py-14">
            {links.map((link, linkIndex) => (
               <div
                  key={linkIndex}
                  className={
                     linkIndex !== 5
                        ? `flex flex-col mb-2 uppercase hover:text-blue-700 transition-all duration-1000 ease-in-out border-b-2 border-b-gray-800`
                        : "border-b-0 mb-0 uppercase hover:text-blue-700 transition-all duration-1000 ease-in-out"
                  }
               >
                  <motion.a
                     whileHover={{
                        scale: 1.3,
                        originX: 0,
                        color: "#0000ff",
                     }}
                     transition={{
                        type: "spring",
                        stiffness: 300,
                     }}
                     href="#"
                     className="mb-1"
                  >
                     {link}
                  </motion.a>
               </div>
            ))}
         </section>
      </main>
   );
};

export default QuickLinks;

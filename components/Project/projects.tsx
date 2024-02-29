"use client";

import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { projectData } from "../../constants/projects";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { useCallback, useEffect, useRef } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Plumbing Projects Portfolio - Dunedin Plumbing and Heating",
   description:
      "View examples of Dunedin Plumbing and Heating  past projects, including bathroom remodels, pipe replacements, and more. Trust our experienced team for your next plumbing project. Emergency Plumbing Edinburgh",
   robots: {
      index: true,
      follow: true,
   },
};

const Project = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.09 });
   const mainControls = useAnimation();

   const checkIsInView = useCallback(() => {
      if (isInView) {
         mainControls.start("visible");
      }
   }, [isInView]);

   useEffect(() => {
      checkIsInView();
   }, [isInView, checkIsInView]);

   return (
      <section id="projects" className="app__container ">
         {/* <div className="absolute bg-[#06080be3] top-[80%] left-0 right-0 bottom-[-40%]"></div> */}
         <motion.main
            className="container app__wrapper my-auto"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 2 }}
         >
            <div className="max-w-1/2 mx-auto">
               <StyledHeading title="Our Work" classNames="text-blue-500" />
               <h2 className="head-text mt-3">
                  Our Latest
                  <span className="text-blue-700"> Projects</span>
               </h2>
            </div>

            <div className="p-0 flex justify-center items-start flex-wrap mt-[1rem] w-full mx-auto">
               {projectData.map((project, productIndex) => (
                  <motion.div
                     key={productIndex}
                     // variants={productVariants}
                     // initial="hidden"
                     // animate={mainControls}
                     // transition={{
                     //    duration: 0.5,
                     //    delay: productIndex * 0.3,
                     //    ease: "easeOut",
                     // }}
                     // whileHover={{
                     //    scale: 1.2,
                     //    transition: { duration: 0.4 },
                     // }}
                     className="w-full md:w-1/3 lg:w-1/4 xl:max-w-1/5 flex justify-start items-start flex-col p-3"
                     whileInView={{ opacity: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5, type: "Inertia" }}
                  >
                     <Image
                        alt={project.description}
                        src={project.image}
                        className="w-[100%] h-[190px] rounded-[20px] object-cover"
                        width={100}
                        height={190}
                        onClick={() => window.open(project.image)}
                     />
                  </motion.div>
               ))}
            </div>

            <div className="flex justify-center mx-auto">
               <Button
                  variant="ghost"
                  className="bg-sky-500 text-white mt-8 font-semibold rounded"
                  size="lg"
               >
                  Explore More
               </Button>
            </div>
         </motion.main>
      </section>
   );
};

export default Project;

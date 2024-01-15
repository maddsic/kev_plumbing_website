"use client";

import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { projectData } from "../../constants/projects";
import { motion } from "framer-motion";
import { Counter } from "../counter";

const Project = () => {
   return (
      <section className="app__container relative">
         {/* <div className="absolute bg-[#06080be3] top-[80%] left-0 right-0 bottom-[-40%]"></div> */}
         <motion.main
            className="container app__wrapper absolute top-0 left-0 right-0 bottom-0 z-50 my-auto "
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

            <div className="flex justify-center items-start flex-wrap mt-[1rem] max-w-[80%] mx-auto">
               {projectData.map((project, sIndex) => (
                  <motion.div
                     key={sIndex}
                     className="w-[250px] flex justify-start items-start flex-col m-[1rem]"
                     whileInView={{ opacity: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5, type: "Inertia" }}
                  >
                     <Image
                        alt={project.description}
                        src={project.image}
                        className="w-[100%] max-h-[190px] rounded-[20px] object-cover"
                        width={100}
                        height={190}
                     />
                  </motion.div>
               ))}
            </div>
            <div className="mt-5 flex justify-evenly items-center">
               <div className="border-l-2 border-t-4 border-b-4 rounded-t-full max-w-96 p-3">
                  <Counter number={3500} title="Toilets Installed" />
               </div>
               <div className="border-l-2 border-t-4 border-b-4 rounded-t-full p-3">
                  <Counter number={1200} title="Heaters Repaired" />
               </div>
               <div className="border-l-2 border-t-4 border-b-4 rounded-t-full p-3">
                  <Counter number={2550} title="Burst Mains Repaired" />
               </div>
               <div className="border-l-2 border-t-4 border-b-4 rounded-t-full p-3">
                  <Counter number={3000} title="Leaky Faucets Fixed" />
               </div>
            </div>
         </motion.main>

         <div className="absolute bg-[url('/counterBg1.jpg')] top-[50%] left-0 right-0 bottom-28"></div>
      </section>
   );
};

export default Project;

"use client";

import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { projectData } from "../../constants/projects";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "../ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { Metadata } from "next";
import { client, urlFor } from "@/app/lib/sanity";

export const metadata: Metadata = {
   title: "Plumbing Projects Portfolio - Dunedin Plumbing and Heating",
   description:
      "View examples of Dunedin Plumbing and Heating  past projects, including bathroom remodels, pipe replacements, and more. Trust our experienced team for your next plumbing project. Emergency Plumbing Edinburgh",
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
            console.log("Data from Project useEffect: ", data);
         } catch (error) {
            console.error("Error fetching PROJECT DATA:", error);
         }
      }
      fetchData();
   }, []);

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
            className="container app__wrapper lg:my-7 overflow-hidden"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 2 }}
         >
            <div className="max-w-1/2 mx-auto">
               <StyledHeading title="Our Work" classNames="text-blue-500" />
               <h3 className="text-[#001733] text-[24px] md:text-[42px] font-bold leading-[63px] lg:mb-3 text-center capitalize">
                  Our latest projects
               </h3>
            </div>

            <div className="p-0 flex justify-center items-start flex-wrap mt-[1rem] w-full mx-auto">
               {projectData?.map((project, productIndex) => (
                  <motion.div
                     key={productIndex}
                     className="w-full md:w-1/3 lg:w-1/4 xl:max-w-1/5 flex justify-start items-start flex-col p-3 overflow-y-hidden"
                     whileInView={{ opacity: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5, type: "Inertia" }}
                  >
                     <Image
                        alt="project image"
                        src={urlFor(project?.image?.asset._ref).url()}
                        className="rounded-[20px] h-[50%] object-cover shadow-lg mx-auto custom-image-height"
                        width="400"
                        height="200"
                        onClick={() =>
                           window.open(urlFor(project?.image?.asset._ref).url())
                        }
                     />
                  </motion.div>
               ))}
            </div>

            <div className="flex justify-center mx-auto lg:mt-10">
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

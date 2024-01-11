"use client";

import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { serviceData } from "../../constants/services";
import { motion } from "framer-motion";

const Project = () => {
   return (
      <section className="app__container mt-5">
         <motion.main
            className="container app__wrapper my-auto "
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 2 }}
         >
            <div className="w-1/2 mx-auto">
               <StyledHeading title="Our Work" classNames="text-blue-500" />
               <h2 className="head-text mt-3">
                  Our Latest
                  <span className="text-blue-700"> Projects</span>
               </h2>
            </div>

            <div className="flex justify-center items-start flex-wrap mt-[2rem] w-[80%] mx-auto">
               {serviceData.map((service, sIndex) => (
                  <motion.div
                     key={sIndex}
                     className="w-[250px] flex justify-start items-start flex-col m-[2rem]"
                     whileInView={{ opacity: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5, type: "Inertia" }}
                  >
                     <Image
                        alt={service.description}
                        src={service.image}
                        className="w-[100%] h-[190px] rounded-[20px] object-cover"
                        width={100}
                        height={190}
                     />

                     {/* <h2
                        className="bold-text mt-[20px]"
                        style={{ marginTop: 20 }}
                     >
                        {service.title}
                     </h2>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {service.description}
                     </p> */}
                  </motion.div>
               ))}
            </div>
         </motion.main>
      </section>
   );
};

export default Project;

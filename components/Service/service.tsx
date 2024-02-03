"use client";

import Image from "next/image";
import { serviceData } from "../../constants/services";
import { motion } from "framer-motion";

const Services = () => {
   return (
      <div id="services" className="app__container">
         <motion.div
            className="app__wrapper app-flex-row mx-auto"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <h2 className="head-text app__about">
               I know that <span className="text-blue-700">Good Service</span>
               <br /> means <span className="text-blue-700">Good Business</span>
            </h2>

            <div className="flex justify-center items-start flex-wrap mt-[1rem] container">
               {serviceData.map((service, sIndex) => (
                  <motion.div
                     key={sIndex}
                     className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-start items-start flex-col m-[1rem]"
                     whileInView={{ opacity: 1 }}
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.5, type: "Inertia" }}
                  >
                     <Image
                        alt={service.description}
                        src={service.image}
                        className="w-[100%] h-[190px] rounded-[20px] object-cover repeat-0"
                        width={100}
                        height={190}
                     />

                     <h2
                        className="bold-text mt-[20px]"
                        style={{ marginTop: 20 }}
                     >
                        {service.title}
                     </h2>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {service.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </div>
   );
};

// pass in the
// export default AppWrapper(Services, "service");

export default Services;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StyledHeading } from "../styledHeading";
import { Heading } from "../heading";
import { testimonialData } from "@/constants/testimonials";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
   return (
      <main id="testimonials" className="section__container my-auto">
         <motion.section
            className="app__wrapper max-w-[80%] mx-auto text-center my-auto"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="max-w-1/2 mx-auto">
               <StyledHeading
                  title="WHAT OUR CLIENTS THINK"
                  classNames="text-blue-500"
               />
               <Heading title="Our Testimonials" classNames="text-gray-950" />
               <p className="text-gray-500">
                  We love our clients and they love our work. Our team is very
                  experienced in both residential and commercial projects
               </p>
            </div>

            {/* content */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-3">
               {/* <Slider {...settings} className="p-5"> */}
               {testimonialData.map((tes, tesIndex) => (
                  <Card
                     key={tesIndex}
                     className="w-full mb-3 shadow-lg hover:shadow-md rounded-2xl sm:p-8"
                  >
                     <div className="flex justify-end">
                        <Quote color="gray" fill="gray" />
                     </div>
                     <CardHeader className="lg:text-lg text-start leading gray-text">
                        <p>{tes.content}</p>
                     </CardHeader>

                     <CardContent className="flex">
                        <div className="img rounded-full border border-gray-500 p-2">
                           <Image
                              src={tes.image}
                              alt="Testimonials image"
                              className="rounded-full"
                              width={100}
                              height={0}
                           />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                           <p className="text-lg font-bold mb-2">{tes.title}</p>
                           <p className="text-gray-500 mb-2">Happy Client</p>
                           <div className="flex">
                              <Star color="yellow" fill="yellow" />
                              <Star color="yellow" fill="yellow" />
                              <Star color="yellow" fill="yellow" />
                              <Star color="yellow" fill="yellow" />
                              <Star color="yellow" fill="yellow" />
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               ))}
               {/* </Slider> */}
            </div>
         </motion.section>
      </main>
   );
};

export default Testimonials;

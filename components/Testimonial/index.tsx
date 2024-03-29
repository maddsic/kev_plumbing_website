"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StyledHeading } from "../styledHeading";
import { Heading } from "../heading";
import { testimonialData } from "@/constants/testimonials";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Quote, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Customer Testimonials - Dunedin Plumbing and Heating",
   description:
      "Read what our satisfied customers have to say about their experienceDunedin Plumbing and Heating. Trust our team for reliable plumbing services in Edinburgh and Fife. Emergency Plumbing Edinburgh",
   robots: {
      index: true,
      follow: true,
   },
};

const Testimonials = () => {
   return (
      <main id="testimonials" className="section__container my-auto relative">
         <motion.section
            className="app__wrapper max-w-[80%] mx-auto lg:my-12 text-center "
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="max-w-1/2 mx-auto">
               <StyledHeading
                  title="WHAT OUR CLIENTS THINK"
                  classNames="text-blue-500"
               />
               {/* <Heading title="Our Testimonials" classNames="text-gray-950" /> */}
               <h3 className="text-[#001733] text-[24px] md:text-[42px] font-bold leading-[63px] lg:mb-3 text-center">
                  Our Testimonials
               </h3>
               <p className="text-gray-500">
                  We love our clients and they love our work. Our team is very
                  experienced in both residential and commercial projects
               </p>
            </div>

            {/* content */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 ">
               {/* <section className=""> */}
               {testimonialData.map((tes, tesIndex) => (
                  <Card
                     key={tesIndex}
                     className="w-full mb-3 shadow-lg hover:shadow-md rounded-2xl md:p-0 sm:p-8 overflow-hidden"
                  >
                     <div className="flex justify-end p-1">
                        <Quote color="gray" fill="gray" />
                     </div>
                     <CardHeader className="text-sm text-start leading-relaxed gray-text overflow-hidden">
                        <p>{tes.content}</p>
                     </CardHeader>

                     <CardContent className="flex">
                        <div className="img rounded-full border border-gray-500 p-2">
                           <Image
                              src={tes.image}
                              alt="Testimonials image"
                              className="rounded-full"
                              width={60}
                              height={0}
                           />
                        </div>

                        <div className="flex flex-col items-center justify-center pl-4 md:pl-3">
                           <p className="text-xs lg:text-sm font-bold mb-0 md:md-1">
                              {tes.title}
                           </p>
                           <p className="text-gray-500 text-xs mb-2">
                              Happy Client
                           </p>
                           <div className="flex ">
                              <Star size={15} color="yellow" fill="yellow" />
                              <Star size={15} color="yellow" fill="yellow" />
                              <Star size={15} color="yellow" fill="yellow" />
                              <Star size={15} color="yellow" fill="yellow" />
                              <Star size={15} color="yellow" fill="yellow" />
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               ))}
               {/* </section> */}
            </div>
         </motion.section>
      </main>
   );
};

export default Testimonials;

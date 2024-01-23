"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StyledHeading } from "../styledHeading";
import { Heading } from "../heading";
import { testimonialData } from "@/constants/testimonials";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Quote, Star } from "lucide-react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import Slider from "react-slick";

const Testimonials = () => {
   var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      cssEase: "linear",
      // responsive: [
      //    {
      //       breakpoint: 1024,
      //       settings: {
      //          slidesToShow: 3,
      //          slidesToScroll: 3,
      //          infinite: true,
      //          dots: true,
      //       },
      //    },
      //    {
      //       breakpoint: 600,
      //       settings: {
      //          slidesToShow: 2,
      //          slidesToScroll: 2,
      //          initialSlide: 2,
      //       },
      //    },
      //    {
      //       breakpoint: 480,
      //       settings: {
      //          slidesToShow: 1,
      //          slidesToScroll: 1,
      //       },
      //    },
      // ],
   };
   return (
      <main className="section__container my-auto">
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
            <div className="mt-10 lg:flex md:gap-x-3">
               {/* <Slider {...settings} className="p-5"> */}
               {testimonialData.map((tes, tesIndex) => (
                  <Card
                     key={tesIndex}
                     className="mb-3 max-w-full shadow-lg hover:shadow-md lg:max-w-[50%] rounded-2xl p-8"
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

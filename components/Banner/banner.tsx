"use client";

import { useEffect, useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";
import slider from "@/constants/slider";
import { client } from "@/app/lib/sanity";

export const metadata: Metadata = {
   title: "Emergency Plumbing Service in Edinburgh and Fife",
   description:
      "Dunedin Plumbing and Heating offers reliable plumbing services in Edinburgh and Fife. From installations to repairs, trust our experienced team for all your plumbing needs.",
   robots: {
      index: true,
      follow: true,
   },
};

async function getLogo() {
   const query = `*[_type == "logo"][0]`;

   try {
      const data = await client.fetch(query);
      console.log("logo data", data);
      return data;
   } catch (error) {
      console.log("ERROR: ", error);
   }
}

export const Banner = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const time = setTimeout(() => {
         setCurrentSlide(prevSlide =>
            prevSlide === slider.length - 1 ? 0 : prevSlide + 1
         );
      }, 10000);
      return () => clearTimeout(time);
   }, [currentSlide]);

   const bgImageStyle = {
      backgroundImage: `url(${slider[currentSlide].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      maxWidth: "100%",
      transition: " 0.15s ease-in-out",
   };
   // hi

   useEffect(() => {
      AOS.init({
         offset: 120,
         delay: 0,
         duration: 400,
         easing: "ease",
         once: false,
         mirror: false,
         anchorPlacement: "top-bottom",
      });
   }, []);

   return (
      <div className="relative w-full h-[400px] lg:h-[700px] overflow-hidden">
         <div style={bgImageStyle} />
         {/* BANNER HIGHLIGHT */}
         <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col items-center text-center py-5 md:py-10 lg:py-24 z-50 text-white">
            <div className="max-w-[80%] lg:max-w-[65%]">
               <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-wide"
               >
                  {slider[currentSlide]?.title}
               </h1>

               <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className="capitalize text-lg -mt-7 md:-mt-0 lg:text-2xl font-bold mb-5 lg:mb-10 text-muted hidden md:block"
               >
                  {slider[currentSlide]?.subtitle}
               </h2>
               {/* button */}
               <div className="flex justify-center gap-5 md:max-w-[60%] mx-auto ">
                  <Link href="#contact">
                     <Button
                        size="lg"
                        variant="secondary"
                        className="py-6 text-lg font-bold bg-blue-950 hover:bg-blue-900 cursor-pointer rounded"
                     >
                        Contact US
                     </Button>
                  </Link>
                  <Link href="#services">
                     <Button
                        size="lg"
                        className="py-6 text-lg font-bold bg-blue-600 rounded"
                     >
                        Services
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         {/* WHITE OVERLAY */}
         {/* <div className="absolute top-50 bottom-0 left-0 right-0 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,165.3C672,181,768,235,864,266.7C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
               ></path>
            </svg>
         </div> */}
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#21345499] top-0 left-0 right-0 bottom-0"></div>
      </div>
   );
};

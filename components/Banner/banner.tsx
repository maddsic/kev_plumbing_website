"use client";

import slider from "@/constants/slider";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import tap1 from "../../public/tap1.jpg";
import { Button } from "../ui/button";

export const Banner = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const time = setTimeout(() => {
         setCurrentSlide(prevSlide =>
            prevSlide === slider.length - 1 ? 0 : prevSlide + 1
         );
      }, 1000);
      return () => clearTimeout(time);
   }, [currentSlide]);

   const bgImageStyle = {
      backgroundImage: `url(${slider[currentSlide].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100%",
      maxWidth: "100%",
      transition: " 0.5s ease-in-out",
   };

   console.log("currentSlide:", currentSlide);

   return (
      <div className="relative w-full h-[680px] overflow-hidden">
         <div style={bgImageStyle} />
         {/* BANNER HIGHLIGHT */}
         <div className="absolute top-10 left-0 right-0 bottom-0 flex flex-col items-center text-center py-24 z-50 text-white ">
            <h1 className="text-5xl font-extrabold mb-5 tracking-wide">
               {slider[currentSlide]?.title}
            </h1>

            <h2 className="text-2xl font-bold mb-10 text-muted">
               {slider[currentSlide]?.subtitle}
            </h2>

            {/* button */}
            <div className="flex gap-5 ">
               <Button
                  size="lg"
                  className="py-6 text-lg font-bold bg-blue-950 rounded"
               >
                  Contact US
               </Button>
               <Button
                  size="lg"
                  className="py-6 text-lg font-bold bg-blue-600 rounded"
               >
                  Services
               </Button>
            </div>
         </div>
         {/* WHITE OVERLAY */}
         <div className="absolute top-50 bottom-0 left-0 right-0 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,165.3C672,181,768,235,864,266.7C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
               ></path>
            </svg>
         </div>
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#21345499] top-0 left-0 right-0 bottom-0"></div>
      </div>
   );
};

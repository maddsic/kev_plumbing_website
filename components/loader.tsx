"use client";
import Image from "next/image";
import React from "react";

const Loader = () => {
   return (
      <div className="loader-wrapper absolute top-0 right-0 bottom-0 left-0 bg-black z-1">
         <div className="logo">
            <Image
               src="/logo.png"
               alt="Dunedin plimbing and heating logo image"
               width="100"
               height="100"
               className="animate-bounce"
            />
         </div>
         <h1 className="text-2xl font-bold uppercase md:text-[1.5vw] ">
            Dunedin Plumbing & Heating
         </h1>
         <h2 className="text-base uppercase mt-2 md:text-[1.5vw]">
            Edinburgh, Uk
         </h2>
      </div>
   );
};

export default Loader;

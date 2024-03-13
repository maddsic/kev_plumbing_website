"use client";
import Image from "next/image";
import React from "react";

const Loader = () => {
   return (
      <div className="loader-wrapper absolute top-0 right-0 bottom-0 left-0 z-1">
         <div className="logo">
            <Image
               src="/logo.png"
               alt="Dunedin plimbing and heating logo image"
               width="100"
               height="100"
               className="animate-bounce"
            />
         </div>
         <h1 className="text-2xl font-bold uppercase lg:text-[1.5vw] ">
            Dunedin
         </h1>
         <h2 className="text-base uppercase mt-2 lg:text-[1.5vw]">
            Plumbing & Heating
         </h2>
      </div>
   );
};

export default Loader;

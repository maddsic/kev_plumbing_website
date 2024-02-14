import React from "react";
import { MdAccessTime } from "react-icons/md";

const OpeningHours = () => {
   return (
      <main>
         <h2 className="uppercase text-2xl font-bold underline underline-offset-[14px] decoration-red-700 decoration-4">
            opening hours
         </h2>
         <section className="py-8 md:py-14">
            <div className="flex items-center gap-x-5 mb-2 border-b-2 border-b-gray-800 group">
               <div className="icon text-red-500 group-hover:text-white transition-all duration-1000 ease-in-out mb-3">
                  <MdAccessTime size={40} />
               </div>
               <div className="days flex flex-col gap-y-2 mb-4">
                  <p className="text-white text-lg capitalize">
                     Monday - Friday
                  </p>
                  <p className="text-gray-500">8:00 Am - 5:00 PM</p>
               </div>
            </div>

            <div className="flex items-center gap-x-5 mb-2 border-b-2 border-b-gray-800 group">
               <div className="icon text-red-500 group-hover:text-white transition-all duration-1000 mb-3">
                  <MdAccessTime size={40} />
               </div>
               <div className="days flex flex-col gap-y-2 mb-4">
                  <p className="text-white text-lg capitalize">saturday</p>
                  <p className="text-gray-500">9:00 Am - 4:00 PM</p>
               </div>
            </div>

            <div className="flex items-center gap-x-5 mb-2 border-b-2 border-b-gray-800 group">
               <div className="icon text-red-500 group-hover:text-white transition-all duration-1000 mb-3">
                  <MdAccessTime size={40} />
               </div>
               <div className="days flex flex-col gap-y-2 mb-4">
                  <p className="text-white text-lg capitalize">sunday</p>
                  <p className="text-gray-500">8:00 Am - 5:00 PM</p>
               </div>
            </div>
         </section>
      </main>
   );
};

export default OpeningHours;

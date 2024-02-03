import React from "react";

const Copyright = () => {
   return (
      <section className="w-[90%] mx-auto p-14">
         <div className="flex justify-between items-center">
            <div className="group">
               <p className="text-gray-500 text-lg group-hover:text-white transition-all duration-1000 ease-in-out">
                  Copyright &copy;. All Rights Reserved
               </p>
            </div>
            <div className="group">
               <span className="text-lg font-bold text-white group-hover:text-red-500 transition duration-1000 ease-in-out">
                  Emergency Contact:
               </span>
               <a
                  href="tel:+447400847374"
                  className="text-sm text-muted-foreground pl-5 group-hover:text-red-500 transition duration-1000 ease-in-out"
               >
                  (+44) 7400847374
               </a>
            </div>
         </div>
      </section>
   );
};

export default Copyright;

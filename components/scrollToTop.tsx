import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
   const [showScrollBtn, setShowScrollBtn] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 300) {
            setShowScrollBtn(true);
         } else {
            setShowScrollBtn(false);
         }
      });
   }, []);

   const scrollBackToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <div className="scroll__btn fixed bottom-[15px] right-[20px] p-3">
         {showScrollBtn && (
            <FaAngleDoubleUp
               onClick={scrollBackToTop}
               className="h-[50px] w-[50px] rounded-full border-4 border-black dark:text-white cursor-pointer animate-pulse hover:bg-black hover:text-white"
            />
         )}
      </div>
   );
};

export default ScrollToTop;

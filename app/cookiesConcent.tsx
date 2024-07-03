import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function CookiesConcent() {
   const [showConsent, setShowConsent] = React.useState(true);
   const visitorsId = uuidv4();

   React.useEffect(() => {
      setShowConsent(hasCookie("dunedinSecretCookie"));
   }, []);

   //    Settng user cookie using UUID
   const acceptCookie = () => {
      setShowConsent(true);
      setCookie("dunedinSecretCookie", visitorsId, {});
   };

   if (showConsent) {
      return null;
   }

   return (
      <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
         <motion.div
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed bottom-0 left-0  md:flex md:items-center md:justify-between px-4 py-6 bg-white w-full"
         >
            <div className="w-full lg:w-[80%] mx-auto flex flex-col justify-between gap-y-5 lg:flex lg:flex-row ">
               <span className="text-sm md:text-base gray-text md:mr-16 md:ml-20">
                  We serve cookies. We use tools, such as cookies, to enable
                  essential services and functionality on our site and to
                  collect data on how visitors interact with our site, products
                  and services. By clicking Accept, you agree to our use of
                  these tools for advertising, analytics and support.{" "}
                  <Link href="/" className="underline text-blue-500">
                     Privacy Policy.
                  </Link>
               </span>
               <div className="flex items-center justify-center gap-5 md:gap-5">
                  <button
                     className="bg-gray-800 py-1 px-6 md:py-2 md:px-10 rounded text-white hover:bg-gray-900"
                     onClick={() => acceptCookie()}
                  >
                     Accept
                  </button>
                  <button
                     className="bg-red-800 py-1 px-6 md:py-2 md:px-10 rounded text-white hover:bg-gray-900"
                     onClick={() => acceptCookie()}
                  >
                     Decline
                  </button>
               </div>
            </div>
         </motion.div>
      </div>
   );
}

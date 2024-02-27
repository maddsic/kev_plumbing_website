import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

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
         <div className="fixed bottom-0 left-0  md:flex md:items-center md:justify-between px-4 py-8 bg-violet-950 w-full">
            <div className="w-full md:w-[80%] mx-auto flex flex-col justify-between gap-y-5">
               <span className="text-base text-white font-bold md:mr-16 md:ml-20">
                  This website uses cookies to improve user experience. By using
                  our website you consent to all the Terms of Usage in
                  accordance with our{" "}
                  <Link href="/" className="font-extrabold text-lg">
                     Privacy Policy.
                  </Link>
               </span>
               <div className="flex items-center justify-center">
                  <button
                     className="bg-gray-800 py-1 px-6 md:py-2 md:px-10 rounded text-white hover:bg-gray-900"
                     onClick={() => acceptCookie()}
                  >
                     Accept
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

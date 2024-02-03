import React from "react";
import {
   MdOutlineLocationOn,
   MdOutlineMail,
   MdOutlineMobileFriendly,
   MdPhoneInTalk,
} from "react-icons/md";

const ContactFooter = () => {
   return (
      <div className="relative">
         <h2 className="uppercase text-2xl font-bold underline underline-offset-[14px] decoration-red-700 decoration-4">
            contact us
         </h2>

         <section className="pt-14">
            <div className="flex gap-x-3 mb-3 border-b-2 border-b-gray-800 group">
               <div className="icon ">
                  <MdOutlineLocationOn
                     size={30}
                     className="text-red-500 group-hover:text-white transition-all duration-1000 ease-in-out"
                  />
               </div>
               <div className="address mb-4 group-hover:text-blue-700 transition-all duration-1000 ease-in-out">
                  <address>73 Canal Street, New York, NY</address>
               </div>
            </div>
            <div className="flex gap-x-3 mb-3 border-b-2 border-b-gray-800 group">
               <div className="icon ">
                  <MdPhoneInTalk
                     size={30}
                     className="text-red-500 group-hover:text-white transition-all duration-1000 ease-in-out"
                  />
               </div>
               <div className="address mb-4 group-hover:text-blue-700 transition-all duration-1000 ease-in-out">
                  <a href="tel:+447400847374">(+44) 7400847374</a>
               </div>
            </div>
            <div className="flex gap-x-3 mb-3 border-b-2 border-b-gray-800 group">
               <div className="icon ">
                  <MdOutlineMobileFriendly
                     size={30}
                     className="text-red-500 group-hover:text-white transition-all duration-1000 ease-in-out"
                  />
               </div>
               <div className="address mb-4 group-hover:text-blue-700 transition-all duration-1000 ease-in-out">
                  <a href="tel:+447400847374">(+44) 7400847374</a>
               </div>
            </div>
            <div className="flex gap-x-3 group">
               <div className="icon ">
                  <MdOutlineMail
                     size={30}
                     className="text-red-500 group-hover:text-white transition-all duration-1000 ease-in-out"
                  />
               </div>
               <div className="email mb-4 group-hover:text-blue-700 transition-all duration-1000 ease-in-out">
                  <a href="mailto:enquires@dunedinplumbing.co.uk" className="">
                     enquires@dunedinplumbing.co.uk
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ContactFooter;

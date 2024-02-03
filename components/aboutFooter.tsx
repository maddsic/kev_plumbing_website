import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialIcons = [
   {
      icon: Facebook,
      href: "/facebook.com",
      bgColor: "bg-gray-700",
   },
   {
      icon: Twitter,
      href: "/twitter.com",
      //   bgColor: "bg-blue-900",
      bgColor: "bg-gray-700",
   },
   {
      icon: Instagram,
      href: "/instagram.com",
      //   bgColor: "bg-red-500",
      bgColor: "bg-gray-700",
   },
];

const AboutFooter = () => {
   return (
      <div className="relative flex flex-col justify-around items-start">
         <h2 className="uppercase text-2xl font-bold underline underline-offset-[14px] decoration-red-700 decoration-4">
            about us
         </h2>

         <div className="py-14">
            <p className="text-lg leading-2 text-gray-300 hover:text-white hover:text-xl hover:transition duration-1000 ease-in-out">
               We are an award winning plumbing company with over 20 years
               experience in the business. We provide a wide range of services
               for both residential and commercial clients.
            </p>
         </div>

         <div className=" flex-1 p-3">
            <div className="flex justify-end space-x-4 pr-20 ">
               {socialIcons.map((social, iconIndex) => (
                  <Link key={iconIndex} href={social.href}>
                     <div
                        className={cn(
                           "w-12 h-12 text-white rounded-full flex items-center justify-center p-2 border hover:bg-white hover:text-red-500",
                           social.bgColor
                        )}
                     >
                        <social.icon />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
};

export default AboutFooter;

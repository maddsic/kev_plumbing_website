"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { navLinks } from "@/constants/navlinks";
import { Facebook, Instagram, Mail, PhoneCall, Twitter } from "lucide-react";

const socialIcons = [
   {
      icon: Facebook,
      href: "/facebook.com",
      bgColor: "bg-blue-500",
   },
   {
      icon: Twitter,
      href: "/twitter.com",
      bgColor: "bg-blue-900",
   },
   {
      icon: Instagram,
      href: "/instagram.com",
      bgColor: "bg-red-500",
   },
];

const Navbar = () => {
   return (
      <header className="">
         <div className="flex">
            <div className="bg-blue-500 w-1/3 p-3 flex items-center px-5">
               <span className="text-white font-bold text-[13px] md:text-[18px]">
                  Dunedin Edinburgh Enterprise
               </span>
            </div>
            {/* social icons */}
            <div className="bg-blue-950 flex-1 p-3">
               <div className="flex justify-end space-x-3 pr-20 ">
                  {socialIcons.map((social, iconIndex) => (
                     <Link key={iconIndex} href={social.href}>
                        <div
                           className={cn(
                              "w-8 h-8 text-white rounded-full flex items-center justify-center p-2 border",
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
         {/* second */}
         <div className="flex  items-center p-3 border bg-white">
            {/* logo */}
            <div className="flex-1">
               <h1>LOGO</h1>
            </div>

            {/* Email us */}
            <div className="flex items-center w-1/3 space-x-10">
               <div className="flex items-center space-x-3">
                  <div className="border border-sky-500 p-2">
                     <span>
                        <Mail className="text-sky-500" />
                     </span>
                  </div>
                  <div className="flex flex-col items-baseline">
                     <span className="font-bold ">Email us</span>
                     <a
                        href="mailto:enquires@dunedinplumbing.co.uk"
                        className="text-sm text-muted-foreground"
                     >
                        enquires@dunedinplumbing.co.uk
                     </a>
                  </div>
               </div>

               {/* Contact us */}
               <div className="flex items-center space-x-3">
                  <div className="border border-sky-500 p-2">
                     <span>
                        <PhoneCall className="text-sky-500" />
                     </span>
                  </div>
                  <div className="flex flex-col items-baseline">
                     <p className="font-bold ">Call us on</p>
                     <a
                        href="tel:+447400847374"
                        className="text-sm text-muted-foreground"
                     >
                        (+44) 7400847374
                     </a>
                  </div>
               </div>
            </div>
         </div>

         {/* Nav links */}
         <div className="bg-muted">
            <nav className="flex justify-center md:justify-center md:container items-center bg-blue-950 px-3  md:pr-0 text-white mx-auto text-[12px] md:text-[15px] font-bold">
               <ul className="flex justify-end space-x-4 md:space-x-10 md:mx-3 py-6">
                  {navLinks.map((link, linkIndex) => (
                     <li>
                        <Link
                           key={linkIndex}
                           className="link uppercase text font-bold hover:opacity-90 transition ease-in-out delay-150"
                           href={link.href}
                        >
                           {link.label}
                        </Link>
                     </li>
                  ))}
               </ul>
               {/* <li className="hidden w-20 md:block hover:opacity-90 active:bg-blue-700 bg-blue-500 px-5 py-6 font-bold"> */}
               {/* <Image alt="plumber Icon" src={plumberIcon} width={30} /> */}
               {/* Blog */}
               {/* </li> */}
            </nav>
         </div>
      </header>
   );
};

export default Navbar;

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { navLinks } from "@/constants/navlinks";
import { Facebook, Instagram, Mail, PhoneCall, Twitter } from "lucide-react";
import MobileNav from "./mobileNav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/app/lib/sanity";

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

interface LogoData {
   image: {
      asset: {
         _ref: string;
      };
   };
}

const Navbar = () => {
   const [logoData, setLogoData] = useState<LogoData | null>(null);

   useEffect(() => {
      async function fetchData() {
         try {
            const data = await client.fetch('*[_type == "logo"][0]');
            setLogoData(data);
         } catch (error) {
            console.error("Error fetching logo data:", error);
         }
      }
      fetchData();
   }, []);
   // console.log("image url");
   // console.log(logoData);

   // const imageUrlData = urlFor(imageUrl?.image?.asset?._ref);
   // console.log("image url form navbar", imageUrlData); //here it says undefined so the image is not showing

   return (
      <header id="home" className="">
         <div className="hidden lg:flex">
            <div className="wording bg-blue-500 w-1/3 p-3 flex items-center px-5">
               <span className="text-white font-bold text-[13px] md:text-[18px]">
                  Dunedin Plumbing & Heating
               </span>
            </div>
            <div className="social__icons bg-blue-950 flex-1 p-3">
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
         <div className="flex items-center justify-between px-1 lg:px-3 border bg-white">
            <Link
               href="/"
               rel="preload"
               className="logo lg:w-[30%] cursor-pointer"
            >
               <div className="relative z-50 w-20 h-24 md:w-32 md:h-24 rounded overflow-hidden">
                  {logoData && (
                     <Image
                        src={urlFor(logoData.image.asset._ref).url()}
                        alt="Dunedin Logo"
                        fill
                        priority
                        // unoptimized={true}
                        className="object-cover shadow-2xl"
                     />
                  )}
               </div>
            </Link>

            {/* Mobile Navigation */}
            <MobileNav />

            <div className="email__us hidden lg:flex items-center w-1/3 space-x-10">
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

               <div className="contact__us flex items-center space-x-3">
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
            <nav className="hidden lg:flex justify-center md:justify-center md:container items-center bg-blue-950 px-3  md:pr-0 text-white mx-auto text-[12px] md:text-[15px] font-bold">
               <ul className="flex justify-end space-x-4 md:space-x-10 md:mx-3 py-6">
                  {navLinks.map((link, linkIndex) => (
                     <li key={linkIndex}>
                        <Link
                           className="link uppercase text font-bold hover:text-gray-500 transition duration-1000 ease-in-out"
                           href={link.href}
                        >
                           {link.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;

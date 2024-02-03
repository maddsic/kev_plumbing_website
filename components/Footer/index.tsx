"use client";

import React from "react";
import { StyledHeading } from "../styledHeading";

import Copyright from "../copyright";
import ContactFooter from "../contactFooter";
import AboutFooter from "../aboutFooter";
import QuickLinks from "../quickLinks";
import OpeningHours from "../openingHours";

const Footer = () => {
   return (
      <main className="app__container flex flex-col relative bg-[#080f23] text-white">
         <div className="app__wrapper  relative border-b-2 border-b-gray-800">
            <section className="grid lg:grid-cols-4 lg:gap-x-20 lg:max-w-[90%] mx-auto my-auto lg:mt-24 p-10 relative z-0">
               {/* ABOUT US */}
               <AboutFooter />
               <ContactFooter />
               <QuickLinks />
               <OpeningHours />
            </section>

            {/* Contact us */}
         </div>
         <Copyright />
      </main>
   );
};

export default Footer;

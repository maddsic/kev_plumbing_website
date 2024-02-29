"use client";

import React from "react";

import Copyright from "../copyright";
import ContactFooter from "../contactFooter";
import AboutFooter from "../aboutFooter";
import QuickLinks from "../quickLinks";
import OpeningHours from "../openingHours";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Dunedine Plumbing and Heating - Your Trusted Local Plumbers",
   description: "Emergency Plumbing Edinburgh",
   robots: {
      index: true,
      follow: true,
   },
};

const Footer = () => {
   return (
      <main className="app__container flex flex-col relative bg-[#080f23] text-white">
         <div className="app__wrapper relative border-b-2 border-b-gray-800">
            <section className="grid lg:grid-cols-4 gap-y-5 lg:gap-x-20 lg:max-w-[90%] mx-auto mt-0 md:mt-24 p-3 relative z-0">
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

"use client";

import Services from "@/components/Service/service";
import { Banner } from "../components/Banner/banner";
import Navbar from "../components/navbar";
import Choose from "@/components/Choose/choose";
import Project from "@/components/Project/projects";
import Testimonials from "@/components/Testimonial";
import About from "@/components/About";
import SectionSeperator from "@/components/seperator";
import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/scrollToTop";
import CookiesConcent from "./cookiesConcent";
import NavigationDots from "@/components/navigationDots";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader";

export default function Home() {
   const [preloader, setPreloader] = useState(true);
   const [timer, setTimer] = useState<number>(3);
   const id: any = useRef(null);

   const clear = () => {
      setPreloader(false);
      window.clearInterval(id.current);
   };

   useEffect(() => {
      id.current = window.setInterval(() => {
         setTimer(timer => timer - 1);
      }, 1000);
   }, []);

   useEffect(() => {
      if (timer === 0) {
         clear();
      }
   }, [timer]);

   return (
      <>
         {preloader ? (
            <Loader />
         ) : (
            <main className="min-h-screen">
               <ScrollToTop />
               <CookiesConcent />
               <Navbar />
               <Banner />
               <About />
               <SectionSeperator
                  headerTitle="Your Trusted Partner for Seamless Service Solutions"
                  // style="bg-[url('/bg1.jpg)] bg-fixed bg-cover"
               />
               <Services />
               <Choose />
               <Testimonials />
               <SectionSeperator
                  headerTitle="Experience seamless plumbing solutions tailored to your needs."
                  // style="bg-[url('/bg2.jpg)] bg-fixed bg-cover"
               />
               <Project />
               <SectionSeperator
                  headerTitle="Contact Us"
                  style="bg-[url('/bg3.jpg')] bg-fixed bg-cover lg:min-h-[400px] "
               />

               <ContactPage />
               <Footer />
            </main>
         )}
      </>
   );
}

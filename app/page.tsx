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

export default function Home() {
   return (
      <main className="min-h-screen">
         <Navbar />
         <Banner />
         <About />
         <SectionSeperator headerTitle="Quality service is our gaurantee" />
         <Services />
         <Choose />
         <Testimonials />
         <SectionSeperator headerTitle="Experience seamless plumbing solutions tailored to your needs." />
         <Project />
         <SectionSeperator
            headerTitle="Contact Us"
            classNames="bg-[url('/bg3.jpg')] lg:min-h-[400px]"
         />
         <ContactPage />
         <Footer />
      </main>
   );
}

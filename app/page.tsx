import Services from "@/components/Service/service";
import { Banner } from "../components/Banner/banner";
import Navbar from "../components/navbar";
import Choose from "@/components/Choose/choose";
import Project from "@/components/Project/projects";
import Testimonials from "@/components/Testimonial";
import About from "@/components/About";
import SectionSeperator from "@/components/seperator";

export default function Home() {
   return (
      <main className="min-h-screen ">
         <Navbar />
         <Banner />
         {/* About us Section */}
         <About />
         <SectionSeperator
            headerTitle="Quality service is our gaurantee"
            // subtitle="Experience seamless plumbing solutions tailored to your needs. Our expert plumbers deliver precision and reliability, ensuring your home's plumbing systems function flawlessly. Trust us for efficient repairs, installations, and maintenance, backed by years of expertise in the industry"
         />
         {/* section 1 about us */}
         <Services />
         <Choose />
         <Project />
         <SectionSeperator
            headerTitle="Experience seamless plumbing solutions tailored to your needs."
            // subtitle="Experience seamless plumbing solutions tailored to your needs. Our expert plumbers deliver precision and reliability, ensuring your home's plumbing systems function flawlessly. Trust us for efficient repairs, installations, and maintenance, backed by years of expertise in the industry"
         />
         <Testimonials />
         <SectionSeperator
            headerTitle="Experience seamless plumbing solutions tailored to your needs."
            classNames="bg-[url('/bg3.jpg')]"
            // subtitle="Experience seamless plumbing solutions tailored to your needs. Our expert plumbers deliver precision and reliability, ensuring your home's plumbing systems function flawlessly. Trust us for efficient repairs, installations, and maintenance, backed by years of expertise in the industry"
         />
      </main>
   );
}

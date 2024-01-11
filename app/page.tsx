import Services from "@/components/Service/service";
import { Banner } from "../components/Banner/banner";
import Navbar from "../components/navbar";
import Choose from "@/components/Choose/choose";
import Project from "@/components/Project/projects";

export default function Home() {
   return (
      <main className="min-h-screen ">
         <Navbar />
         <Banner />

         {/* section 1 about us */}
         <Services />
         <Choose />
         <Project />
      </main>
   );
}

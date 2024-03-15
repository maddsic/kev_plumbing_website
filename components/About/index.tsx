import { BookCheck, Hammer, Home, Truck } from "lucide-react";

import styles from "./about.module.scss";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { StyledHeading } from "../styledHeading";
import { Button } from "../ui/button";
import { Counter } from "../counter";
import { GiHotSurface, GiTap } from "react-icons/gi";
import { PiToiletLight } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { Metadata } from "next";
import { client, urlFor } from "../../app/lib/sanity";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
   title: "About Dunedine Plumbing and Heating - Your Trusted Local Plumbers",
   description:
      "Learn about Dunedine Plumbing and Heating history, mission, and team. Trust our experienced plumbers for all your plumbing needs in Edinburgh and Fife",
   robots: {
      index: true,
      follow: true,
   },
};

export const revalidate = 3600;

const About = () => {
   const [title, setTitle] = useState<string>("");
   const [subTitle, setSubtitle] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [listDescription, setListDescription] = useState<string>("");
   const [list, setList] = useState<string[]>();
   const [dataImage, setDataImage] = useState<any>();

   useEffect(() => {
      async function fetchData() {
         try {
            const data = await client.fetch(`*[_type == "about"]{
            title,
            subtitle,
            description,
            listContent,
            listDescription,
            profileImg
   }`);

            setTitle(data[0].title);
            setSubtitle(data[0].subtitle);
            setDescription(data[0].description[0].children[0].text);
            setListDescription(data[0].listDescription[0].children[0].text);
            setList(data[0].listContent);
            setDataImage(data[0].profileImg?.asset?._ref);
         } catch (error) {}
      }
      fetchData();
   }, []);

   console.log("data image data");
   // console.log(dataImage.profileImg?.asset?._ref); // this returns data

   return (
      <main id="about" className="pb-8 px-4 xs:px-6 sm:px-16 md:px-24 mt-10">
         <motion.section
            className=""
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            {/* CONTENT */}
            <div className="lg:flex justify-around gap-x-[8rem] max-w-[80%] mx-auto">
               {/* ASIDE LEFT */}
               <aside className="flex-1 p-0">
                  <figure className="flex items-center justify-center lg:mt-10">
                     {dataImage && (
                        // I decided to use to ! here for type to ignore type checking instead of creating an interface
                        <Image
                           src={urlFor(dataImage!).url()}
                           alt="About Us"
                           className={cn(
                              "rounded border shadow-lg flex-1",
                              styles.img
                           )}
                           // loader={() => src}
                           width="400"
                           height={70}
                           priority
                           quality={100}
                        />
                     )}
                  </figure>
               </aside>
               {/* ASIDE RIGHT */}
               <aside className="w-full lg:max-w-[60%] lg:p-5 my-20">
                  <div className="flex flex-col my-10 lg:my-5">
                     <StyledHeading
                        title={subTitle}
                        classNames="text-[#001733] font-bold"
                     />
                     <h3 className="text-[#001733] text-[24px] md:text-[42px] font-bold leading-[63px] text-start lg:mb-7">
                        {title}
                     </h3>
                     <p className="gray-text leading-8 text-[13px] lg:text-[16px] font-medium">
                        {description}
                     </p>
                     <div className="lg:grid grid-cols-2 mt-8">
                        {list?.map((item, index) => (
                           <div
                              key={index}
                              className="flex gap-x-2 items-center justify-start  mb-3 lg:mb-5"
                           >
                              <BookCheck color="red" size={15} />
                              <motion.li
                                 whileHover={{
                                    scale: 1.1,
                                    originX: 0,
                                    color: "#000000",
                                 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 300,
                                 }}
                                 className="gray-text text-[12px] lg:text-sm list-none"
                              >
                                 {item}
                              </motion.li>
                           </div>
                        ))}
                     </div>
                  </div>
                  <p className="gray-text text-[12px] lg:text-[14px] lg:font-medium leading-7">
                     {listDescription}
                  </p>
                  <Button
                     variant="ghost"
                     className="bg-blue-500 hover:bg-sky-500 text-white mt-4 lg:mt-8 font-semibold"
                     size="lg"
                  >
                     Learn More
                  </Button>
               </aside>
            </div>
         </motion.section>
      </main>
   );
};

export default About;

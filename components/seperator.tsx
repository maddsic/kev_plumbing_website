"use client";
import { motion } from "framer-motion";
import { StyledHeading } from "./styledHeading";
import { Heading } from "./heading";
import { cn } from "@/lib/utils";

interface SectionSeperatorProps {
   headerTitle?: string | any;
   subtitle?: string;
   style?: string | undefined;
}

const SectionSeperator = ({
   headerTitle,
   subtitle,
   style,
}: SectionSeperatorProps) => {
   return (
      <main
         className={cn(
            "relative overflow-hidden py-20 lg:py-32 border bg-[url('/bg3.jpg')] bg-fixed bg-cover",
            style
         )}
      >
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#10162199] top-0 left-0 right-0 bottom-0"></div>
         <motion.section
            className="mx-auto absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center lg:max-w-[80%]"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="p-5 lg:max-w-[60%] mx-auto">
               <StyledHeading
                  title="Plumbing is what we do"
                  classNames="text-white font-bold"
               />
               <Heading
                  title={headerTitle}
                  description={subtitle}
                  classNames="text-white text-2xl font-bold"
               />
            </div>
         </motion.section>
      </main>
   );
};

export default SectionSeperator;

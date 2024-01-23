"use client";
import { motion } from "framer-motion";
import { StyledHeading } from "./styledHeading";
import { Heading } from "./heading";
import { cn } from "@/lib/utils";

interface SectionSeperatorProps {
   headerTitle: string;
   subtitle?: string;
   classNames?: React.ReactNode;
}

const SectionSeperator = ({
   headerTitle,
   subtitle,
   classNames,
}: SectionSeperatorProps) => {
   return (
      <main
         className={cn(
            "relative overflow-hidden py-32 border bg-[url('/bg1.jpg')] bg-cover bg-fixed",
            classNames
         )}
      >
         {/* BACKGROUND COLOR @GRAY */}
         <div className="absolute bg-[#10162199] top-0 left-0 right-0 bottom-0"></div>
         <motion.section
            className="mx-auto absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center lg:max-w-[80%]"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
         >
            <div className="max-w-[60%] mx-auto">
               <StyledHeading
                  title="Plumbing is what we do"
                  classNames="text-white font-bold"
               />
               <Heading
                  title={headerTitle}
                  description={subtitle}
                  classNames="text-white"
               />
            </div>
         </motion.section>
      </main>
   );
};

export default SectionSeperator;

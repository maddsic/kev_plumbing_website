"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
   title: string;
   description?: string;
   classNames?: string;
}

export const Heading = ({ title, description, classNames }: HeadingProps) => {
   return (
      <div className="px-4 lg:px-8 text-center">
         <div className={cn("head-text my-2 text-blue-800", classNames)}>
            {title}
         </div>
         <p className="text-md text-gray-700">{description}</p>
      </div>
   );
};

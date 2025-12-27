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
         <div className={cn("lg:head-text my-2 text-blue-800", classNames)}>
            {title}
         </div>
         {description && (
            <p className={cn("text-md text-muted", classNames)}>
               {description}
            </p>
         )}
      </div>
   );
};

import { cn } from "@/lib/utils";

interface StyledHeadingProps {
   title: string;
   classNames?: string;
}

export const StyledHeading = ({ title, classNames }: StyledHeadingProps) => {
   return (
      <div className="flex justify-center items-center gap-x-2">
         <div className="h-[3px] w-[30px] bg-red-700 rounded" />
         <div className={cn("text-sm", classNames)}>{title}</div>
         <div className="h-[3px] w-[30px] bg-red-700 rounded" />
      </div>
   );
};
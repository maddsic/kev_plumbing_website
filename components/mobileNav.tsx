import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
   const pathname = usePathname();
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <Sheet>
         <SheetTrigger>
            <Button variant="ghost" size="icon" className="lg:hidden">
               <Menu size={50} className="" />
            </Button>
         </SheetTrigger>
         <SheetContent
            side="right"
            className="p-3 bg-[#111827] text-white space-y-2 flex flex-col items-center animate-in transition-all duration-10000 ease-in-out "
         >
            {navLinks.map((link, linkIndex) => (
               <Link
                  href={link.href}
                  key={linkIndex}
                  className={cn(
                     "w-full p-3 mt-20 text-zinc-400 uppercase font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-2xl transition text-center",
                     pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-zinc-400"
                  )}
                  //   onClick={handleClickClose}
               >
                  {link.label}
               </Link>
            ))}
         </SheetContent>
      </Sheet>
   );
};

export default MobileNav;

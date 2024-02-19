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
      setIsMounted(!isMounted);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <Sheet>
         <SheetTrigger>
            <Button variant="ghost" size="icon" className="lg:hidden">
               <Menu size={50} />
            </Button>
         </SheetTrigger>
         <SheetContent
            side="right"
            className="p-0 bg-[#111827] text-white space-y-2 flex flex-col items-center "
         >
            {navLinks.map((link, linkIndex) => (
               <Link
                  href={link.href}
                  key={linkIndex}
                  className={cn(
                     "w-full p-3 mt-20 text-zinc-400 uppercase font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-center",
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

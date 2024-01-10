import { navLinks } from "@/constants/navlinks";
import Link from "next/link";

interface navigationDotsProps {
   active: string;
}

const NavigationDots = ({ active }: navigationDotsProps) => {
   return (
      <div className="app-flex-col">
         {navLinks.map((link, linkIndex) => (
            <Link
               href={`#${link}`}
               key={linkIndex}
               className="app__navigation-dot"
               style={
                  active === link.href ? { backgroundColor: "#313bac" } : {}
               }
            ></Link>
         ))}
      </div>
   );
};

export default NavigationDots;

import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';

interface navigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: navigationDotsProps) => {
  return (
    <div className="app-flex-col fixed bottom-1/2 right-[15px] p-3 z-50">
      {navLinks.map((link, linkIndex) => (
        <Link
          href={`#${link}`}
          key={linkIndex}
          className="app__navigation-dot"
          style={active === link.href ? { backgroundColor: '#313bac' } : {}}
        ></Link>
      ))}
    </div>
  );
};

export default NavigationDots;

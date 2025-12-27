'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navLinks } from '@/app/data/navlinks';

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block bg-blue-950">
      <ul className="max-w-7xl mx-auto flex justify-center gap-12 py-5 text-sm font-semibold tracking-wide">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li key={index} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  'uppercase transition-colors',
                  isActive ? 'text-white' : 'text-white/80 group-hover:text-white',
                )}
              >
                {link.label}
              </Link>

              {/* underline */}
              <span
                className={cn(
                  `
                  absolute left-1/2 -bottom-2
                  h-[2px] -translate-x-1/2
                  bg-blue-400
                  transition-all duration-300
                `,
                  isActive ? 'w-full' : 'w-0 group-hover:w-full',
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;

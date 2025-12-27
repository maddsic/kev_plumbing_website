'use client';

import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="lg:hidden p-2 text-black"
        aria-label="Open menu"
      >
        {isOpen ? <X size={34} /> : <Menu size={34} />}
      </button>

      {/* Slide-in Menu */}
      <div
        className={cn(
          'h-fit fixed inset-x-0 top-20 bottom-0 z-50 bg-black text-white',
          'flex flex-col items-center justify-start gap-4 px-6 py-10',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              'w-full text-center uppercase font-medium p-4 rounded-2xl transition',
              pathname === link.href
                ? 'bg-white/10 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-white/10',
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MobileNav;

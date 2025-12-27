'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, PhoneCall } from 'lucide-react';
import { urlFor } from '@/app/lib/sanity';
import MobileNav from '../MobileNav/mobileNav';

interface HeaderTopProps {
  logoData: any;
}

const HeaderTop = ({ logoData }: HeaderTopProps) => {
  return (
    <div className="bg-white border-b">
      <div className=" mx-auto flex items-center justify-between px-4 lg:px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {logoData && (
            <div className="relative w-28 h-16">
              <Image
                src={urlFor(logoData.image.asset._ref).url()}
                alt="Dunedin Plumbing Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          )}
        </Link>

        {/* Desktop contact info */}
        <div className="hidden lg:flex items-center gap-10 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30">
              <Mail size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Email us</p>
              <a
                href="mailto:enquires@dunedinplumbing.co.uk"
                className="text-slate-500 hover:text-blue-600 transition"
              >
                enquires@dunedinplumbing.co.uk
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30">
              <PhoneCall size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Call us</p>
              <a href="tel:+447400847374" className="text-slate-500 hover:text-blue-600 transition">
                (+44) 7400 847 374
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

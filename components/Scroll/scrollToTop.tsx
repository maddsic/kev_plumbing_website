'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-12 w-12 rounded-2xl
        bg-white/90 backdrop-blur-md
        border border-slate-200
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        hover:bg-blue-600
        group
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
    >
      <ArrowUp size={20} className="text-blue-600 transition-colors group-hover:text-white" />
    </button>
  );
};

export default ScrollToTop;

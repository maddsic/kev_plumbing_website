'use client';

import Services from '@/components/Service/service';
import { HeroSlider } from '../components/HeroSlider/heroSlider';
import Choose from '@/components/Choose/choose';
import Project from '@/components/Project/projects';
import Testimonials from '@/components/Testimonial';
import About from '@/components/About';
import SectionSeperator from '@/components/Separator/seperator';
import ContactPage from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/Scroll/scrollToTop';
import CookiesConcent from './cookiesConcent';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader/loader';
import Header from '@/components/Header/header';
import { client } from './lib/sanity';

const usePreloader = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    // check if localStorage is available
    const hasLoaderShown = localStorage.getItem('hasLoaderShown');
    if (hasLoaderShown) {
      setPreloader(false);
    } else {
      const timeOut = setTimeout(() => {
        setPreloader(false);
        localStorage.setItem('hasLoaderShown', 'true');
      }, 3000);
      return () => clearTimeout(timeOut);
    }
  }, []);

  return preloader;
};

interface LogoData {
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default function Home() {
  const [logoData, setLogoData] = useState<LogoData | null>(null);
  const preloader = usePreloader();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch('*[_type == "logo"][0]');
        setLogoData(data);
      } catch (error) {
        console.error('Error fetching logo data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {preloader ? (
        <Loader />
      ) : ( */}
      <main className="min-h-screen">
        <ScrollToTop />
        <CookiesConcent />
        <Header logoData={logoData} />
        <HeroSlider />
        <About />
        <SectionSeperator headerTitle="Your Trusted Partner for Seamless Service Solutions" />
        <Services />
        <Choose />
        <Testimonials />
        <SectionSeperator headerTitle="Experience seamless plumbing solutions tailored to your needs." />
        <Project />
        <SectionSeperator
          headerTitle="Contact Us"
          style="bg-[url('/bg3.jpg')] bg-fixed bg-cover lg:min-h-[400px] "
        />

        <ContactPage />
        <Footer />
      </main>
      {/* )} */}
    </>
  );
}

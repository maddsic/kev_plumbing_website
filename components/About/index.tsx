import { BookCheck } from 'lucide-react';

import styles from './about.module.scss';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StyledHeading } from '../styledHeading';
import { Button } from '../ui/button';

import { Metadata } from 'next';
import { client, urlFor } from '../../app/lib/sanity';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'About Dunedine Plumbing and Heating - Your Trusted Local Plumbers',
  description:
    'Learn about Dunedine Plumbing and Heating history, mission, and team. Trust our experienced plumbers for all your plumbing needs in Edinburgh and Fife',
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 3600;

const About = () => {
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [listDescription, setListDescription] = useState<string>('');
  const [list, setList] = useState<string[]>();
  const [dataImage, setDataImage] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(`*[_type == "about"]{
            title,
            subtitle,
            description,
            listContent,
            listDescription,
            profileImg
   }`);

        setTitle(data[0].title);
        setSubtitle(data[0].subtitle);
        setDescription(data[0].description[0].children[0].text);
        setListDescription(data[0].listDescription[0].children[0].text);
        setList(data[0].listContent);
        setDataImage(data[0].profileImg?.asset?._ref);
      } catch (error) {
        console.error('ERROR FETCHING ABOUT DATA:', error);
      }
    }
    fetchData();
  }, []);

  console.log('data image data');

  return (
    <main id="about" className="relative py-24 bg-white">
      <motion.section
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            {dataImage && (
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={urlFor(dataImage!).url()}
                  alt="About us"
                  width={520}
                  height={380}
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <StyledHeading title={subTitle} classNames="text-blue-600 font-semibold" />

            <h3 className="text-[#001733] text-3xl md:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              {title}
            </h3>

            <p className="text-slate-600 leading-7 mb-8">{description}</p>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {list?.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm">
                  <BookCheck size={18} className="text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 text-sm leading-7 mb-10">{listDescription}</p>

            {/* CTA */}
            <a href="#contact">
              <Button
                size="lg"
                className="
              px-10 py-6 rounded-2xl
              bg-blue-600 text-white
              font-semibold
              hover:bg-blue-500
              transition-all
              hover:-translate-y-1 hover:shadow-xl
            "
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;

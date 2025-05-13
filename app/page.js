'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import gh1 from './assets/img/gh1.webp';
import gh2 from './assets/img/gh2.webp';

const slides = [
  {
    image: gh1,
    title: 'Elevate your wardrobe',
    subtitle: 'The best of the season, handpicked by us.',
  },
  {
    image: gh2,
    title: 'Unleash your style',
    subtitle: 'Fresh arrivals curated just for you.',
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-[80vh] md:h-screen -z-10">
        <Image
          src={slides[index].image}
          alt="Hero Slide"
          fill
          className="object-cover object-top transition-all duration-1000 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

     
      <div className="fixed inset-0 z-10 flex items-center justify-start text-left px-6 md:px-16">
        <div className="text-white space-y-4 max-w-xl ">
          <p className="text-sm uppercase tracking-wide">Just Arrived</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="underline decoration-pink-400">{slides[index].title.split(' ')[0]}</span>{' '}
            {slides[index].title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-lg">{slides[index].subtitle}</p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
              Shop New Arrivals
            </button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

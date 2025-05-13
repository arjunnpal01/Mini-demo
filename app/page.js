'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/img1.webp',
    text: (
      <>
        <h2 className="text-white text-4xl font-bold">Elevate your wardrobe</h2>
        <p className="text-white mt-2">The best of the season, handpicked by us</p>
        <div className="mt-4 space-x-4">
          <button className="bg-white text-black px-16 py-3 my-4 rounded-md">Shop New Arrivals</button><br />
          <button className="bg-black text-white px-16 py-3 mx-2 rounded-md">View Lookbook</button>
        </div>
      </>
    ),
    textAlign: 'left',
  },
  {
    image: '/images/girll.webp',
    text: (
      <>
        <h2 className="text-white text-4xl font-bold">New styles are here</h2>
        <p className="text-white mt-2">Shine with our latest must-haves</p>
        <div className="mt-4 space-x-4">
          <button className="bg-white text-black px-16 py-3 rounded-md">Shop Spring/Summer</button>
          <button className="bg-black text-white px-16 py-3 rounded-md">Shop Sale</button>
        </div>
      </>
    ),
    textAlign: 'center',
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`fixed inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-top"
          />
          <div
            className={`absolute inset-0 flex items-center ${
              slide.textAlign === 'center' ? 'justify-center' : 'justify-start'
            } px-10`}
          >
            <div className={`max-w-xl ${slide.textAlign === 'center' ? 'text-center' : 'text-left'}`}>
              {slide.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

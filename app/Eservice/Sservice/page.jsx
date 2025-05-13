// components/BestsellerSection.js

import React from "react";
import Image from "next/image";

import girl1 from "../../assets/img/girl1.jpg";
import girl2 from "../../assets/img/girl2.jpg";
import girl3 from "../../assets/img/girl3.jpg";
import girl4 from "../../assets/img/girl4.jpg";

export default function BestsellerSection() {
  const categories = [
    {
      img: girl1,
      dtitle:"JUST ADDED",
      title: "New",
      subtitle: "Shop the latest",
       
    },
    {
      img: girl2,
      dtitle:"LAYERS TO LOVE",
      title: "Fall/Winter",
      subtitle: "Bundle up in style",
    },
    {
      img: girl3,
      title: "Dresses",
      dtitle:"SLEEK STYLES",
      subtitle: "A look for every occasion",
       dtitle:"Bundle up in style",
    },
    {
      img: girl4,
      title: "Bestselling",
      dtitle:"MOST_WANTED",
      subtitle: "Your favorites selling fast!",
      dtitle:"Shop the latest", 
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 relative z-[999]">
      <h1 className="max-w-7xl mx-auto text-center text-sm font-bold rounded-3xl pt-12 uppercase text-gray-500">
        the essentials
      </h1>

      {/* Category Section */}
      <div className="mt-4">
        <h3 className="text-3xl font-semibold text-black text-center mb-6 capitalize">
          shop by category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, index) => (
            <div key={index} className="relative w-full h-96 overflow-hidden rounded-lg shadow group">
              <Image
                src={cat.img}
                alt={`Category ${index + 1}`}
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                 <p className="text-xs uppercase opacity-90 py-1">{cat.dtitle}</p>
                  <h2 className="text-3xl font-bold py-1">{cat.title}</h2>
                <p className="text-xs uppercase opacity-90 py-1">{cat.subtitle}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

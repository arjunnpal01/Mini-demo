// components/BestsellerSection.js

import React from "react";
import Image from 'next/image';

import girl1 from "../../assets/img/girl1.jpg";
import girl2 from "../../assets/img/girl2.jpg";
import girl3 from "../../assets/img/girl3.jpg";
import girl4 from "../../assets/img/girl4.jpg";

export default function BestsellerSection() {
  const categories = [girl1, girl2, girl3, girl4];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 relative z-[999]">
      <h1 className="max-w-7xl mx-auto text-center text-3xl font-bold rounded-3xl">
        the essentials
      </h1>

      {/* Category Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          shop by Category
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((src, index) => (
            <div key={index} className="relative w-full h-72 overflow-hidden rounded-lg shadow">
              <Image
                src={src}
                alt={`Category ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 4,
    minutes: 30,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FFF3F2]  py-12 px-4 md:px-12 relative z-[9999] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Block */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Shop before it ends
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Save 10% on bestsellers
          </h1>
          <button className="mt-2 px-6  text-black underline  rounded-md hover:opacity-90 transition">
            Shop the Sale
          </button>
        </div>

        {/* Right: Countdown */}
        <div className="md:w-1/2  flex justify-center md:justify-center gap-6 text-gray-900 font-semibold ">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-4xl font-bold">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs tracking-widest text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

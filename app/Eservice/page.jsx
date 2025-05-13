"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 22,
    minutes: 23,
    seconds: 38,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="text-center px-4 py-12 bg-gradient-to-b from-pink-100 to-white border-b relative z-[9999]">
      <p className="uppercase text-sm tracking-widest text-gray-600">
        Shop before it ends
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
        Save 10% on bestsellers
      </h1>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:opacity-90">
        Shop the Sale
      </button>

      <div className="flex justify-center gap-6 mt-8 font-mono text-gray-800">
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">MINUTES</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">SECONDS</div>
        </div>
      </div>
    </section>
  );
}

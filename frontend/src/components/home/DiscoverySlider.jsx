"use client";

import { useRef } from "react";
import Image from "next/image";
import discoveryData  from "@/data/discoveryData";

const DiscoverySlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
  <section className="px-4 py-16">
  <div className="max-w-6xl mx-auto bg-[#F5A623] rounded-[28px] py-16 px-10 relative">
      
      {/* Heading */}
      <h2 className="text-center text-white text-3xl font-semibold">
        Suggestions for discovery
      </h2>

      <p className="text-center text-white/80 text-sm mt-1">
        Popular places to stay that Chisfis recommends for you
      </p>

      {/* Slider */}
      <div className="relative mt-8">

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth px-1"
        >
          {discoveryData.map((item) => (
        <div key={item.id} className="min-w-[260px] px-3 py-1">
        

          {/* Image */}
          <div className="relative h-[260px] w-full rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Text OUTSIDE image */}
          <div className="mt-4 text-center">
            <h3 className="text-white font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-white/80 text-sm mt-1">
              {item.properties}
            </p>
          </div>

        </div>
      ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:scale-110 transition"
        >
          ❯
        </button>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center hover:scale-110 transition"
        >
          ❮
        </button>
          </div>
      </div>
    </section>
  );
};

export default DiscoverySlider;

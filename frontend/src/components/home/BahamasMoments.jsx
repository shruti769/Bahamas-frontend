"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BahamasM from "@/data/BahamasM";

const BahamasMoments = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % BahamasM.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = BahamasM[active];

  // Get all avatars for floating display
  const getFloatingAvatars = () => {
    if (BahamasM.length <= 1) return [];
    
    // Return all avatars from BahamasM array
    return BahamasM;
  };

  const floatingAvatars = getFloatingAvatars();

  // Extended positions array to handle more avatars
  const getPosition = (index, total) => {
    const positions = [
      "top-20 left-20",                    // Top left
      "top-16 right-24",                   // Top right  
      "top-1/2 left-16 -translate-y-1/2",  // Middle left
      "top-1/2 right-20 -translate-y-1/2", // Middle right
      "bottom-28 left-28",                 // Bottom left
      "bottom-36 right-1/3",               // Bottom right area
      "top-32 left-1/3",                   // Top center-left
      "bottom-20 left-1/2 -translate-x-1/2", // Bottom center
      "top-1/3 left-24",                   // Upper left
      "top-2/3 right-24",                  // Lower right
      "bottom-1/3 left-32",                // Lower left area
      "top-40 right-1/4",                  // Top right area
    ];
    
    // Cycle through positions if we have more avatars than positions
    return positions[index % positions.length];
  };

  return (
    <section className="w-full flex justify-center py-20 bg-white">
      <div className="relative w-full max-w-6xl rounded-3xl bg-[#F5A220] text-white px-6 py-24 text-center overflow-hidden">

        <h2 className="text-3xl font-semibold mb-2">
          Good news from far away
        </h2>

        <p className="text-sm opacity-80 mb-10">
          Let's see what people think of Chisfis
        </p>

        {/* Floating Avatars - ALL images from BahamasM array */}
        {floatingAvatars.map((item, i) => (
          <div
            key={`floating-${i}`}
            className={`absolute hidden md:block ${getPosition(i, floatingAvatars.length)}`}
            style={{ zIndex: 1 }}
          >
            <Image
              src={item.avatar}
              alt={item.name}
              width={56}
              height={56}
              className="rounded-full border-3 border-white object-cover shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}

        {/* Main Avatar - Centered and larger */}
        <div className="flex justify-center mb-6 relative" style={{ zIndex: 10 }}>
          <Image
            src={current.avatar}
            alt={current.name}
            width={90}
            height={90}
            className="rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>

        {/* Quote with quotation marks */}
        <div className="relative max-w-2xl mx-auto mb-6" style={{ zIndex: 10 }}>
          <span className="text-6xl opacity-30 absolute -left-8 -top-4"></span>
          <p className="text-lg leading-relaxed px-8">
            {current.text}
          </p>
          <span className="text-6xl opacity-30 absolute -right-8 -bottom-8"></span>
        </div>

        <h4 className="font-semibold text-lg relative" style={{ zIndex: 10 }}>
          {current.name}
        </h4>
        <p className="text-sm opacity-90 relative" style={{ zIndex: 10 }}>
          📍 {current.tag}
        </p>

        {/* Running Dots */}
        <div className="flex justify-center gap-2 mt-8 relative" style={{ zIndex: 10 }}>
          {BahamasM.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === index
                  ? "bg-white scale-125"
                  : "bg-white opacity-50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BahamasMoments;
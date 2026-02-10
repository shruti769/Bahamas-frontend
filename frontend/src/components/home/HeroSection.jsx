"use client";

import Image from "next/image";
import { MapPin, Calendar, Search } from "lucide-react";

const HeroSection = () => {
  return (
   <section className="relative h-[90vh] w-full z-0">
      
      {/* Background Image */}
      <Image
        src="/assets/background1.png"
        alt="Bahamas"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
     <div className="mx-auto max-w-7xl px-6 h-full flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">

          {/* LEFT TEXT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Discover <br />
              Lifelong <br />
              Moments in <br />
              The Bahamas
            </h1>

            <p className="mt-6 max-w-md text-sm text-gray-200">
              Authentic, local experiences curated to help you explore,
              connect, and truly feel the islands.
            </p>
          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="relative hidden lg:flex justify-end">
            <Image
              src="/assets/Herocollage.png"
              alt="Travel collage"
              width={420}
              height={500}
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="mx-auto max-w-5xl bg-white rounded-full shadow-xl px-6 py-4 flex items-center gap-6">

          {/* Location */}
          <div className="flex items-center gap-3 flex-1">
            <MapPin className="text-blue-500" size={18} />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-xs text-gray-400">
                Which Island You Want To Explore?
              </p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          {/* Categories */}
          <div className="flex items-center gap-3 flex-1">
            <MapPin className="text-blue-500" size={18} />
            <div>
              <p className="text-sm font-medium">Categories</p>
              <p className="text-xs text-gray-400">Choose Category</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          {/* Check in */}
          <div className="flex items-center gap-3">
            <Calendar className="text-blue-500" size={18} />
            <div>
              <p className="text-sm font-medium">Check in</p>
              <p className="text-xs text-gray-400">Add date</p>
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200"></div>

          {/* Check out */}
          <div className="flex items-center gap-3">
            <Calendar className="text-blue-500" size={18} />
            <div>
              <p className="text-sm font-medium">Check out</p>
              <p className="text-xs text-gray-400">Add date</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="ml-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            <Search size={18} />
          </button>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;

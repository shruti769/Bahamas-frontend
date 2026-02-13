"use client";

import SearchBar from "@/components/ui/SearchBar";
import { locations, categories } from "@/data/searchData";
import Image from "next/image";

export default function HomePage() {
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


      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 h-full flex items-center relative">
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
              width={480}
              height={560}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6 z-50">
        <SearchBar 
          locations={locations}
          categories={categories}
          variant="hero"
        />
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PlanTripSection = () => {
  const router = useRouter();

  const handleStartSearch = () => {
    router.push("/search");
  };

  return (
    <section className="max-w-[900px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/assets/PlanTrip.png"
          alt="Island"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Plan Your Trip <br />
          <span className="bg-[#F5A220] text-white px-3 py-1 rounded">
            With Ease
          </span>
        </h1>

        <p className="text-black mt-4">
          Search, filter, and book instantly. From beach escapes to cultural experiences, everything is organized to make your island planning simple and stress-free.
        </p>

        {/* Button */}
        <button
          onClick={handleStartSearch}
          className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
        >
          <img
            src="/assets/Searchicon.svg"
            alt="Search"
            className="w-4 h-4"
          />
          Start your search
        </button>
      </div>
    </section>
  );
};

export default PlanTripSection;
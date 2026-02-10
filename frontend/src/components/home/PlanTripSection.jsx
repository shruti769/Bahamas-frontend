"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PlanTripSection = () => {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
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
          <span className="bg-orange-400 text-white px-3 py-1 rounded">
            With Ease
          </span>
        </h1>

        <p className="text-gray-500 mt-4">
          Search, filter, and book instantly. Everything is organized to make
          your island planning stress-free.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/search")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
        >
          Start your search
        </button>
      </div>
    </section>
  );
};

export default PlanTripSection;

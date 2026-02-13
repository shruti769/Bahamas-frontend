"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IslandCard from "@/components/ui/IslandCard";
import islandsMock from "@/data/islandsmock";

const IslandHighlights = () => {
  const [islands, setIslands] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIslands(islandsMock);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value based on your card width
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-900">
          Island{" "}
          <span className="bg-[#F5A220] text-white px-2 py-1 rounded">
            Highlights
          </span>
        </h2>

        <p className="mt-4 text-gray-500">
          Discover the most iconic spots handpicked for your perfect Bahamian
          escape.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 w-max px-12">
              {islands.map((island) => (
                <IslandCard
                  key={island.id}
                  island={island}
                  showDetails={false}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      )}
    </section>
  );
};

export default IslandHighlights;
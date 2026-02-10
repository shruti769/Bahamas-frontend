"use client";

import { useEffect, useState } from "react";
import IslandCard from "@/components/ui/IslandCard";
import islandsMock from "@/data/islandsmock";

const IslandHighlights = () => {
  const [islands, setIslands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIslands(islandsMock);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-900">
          Island{" "}
          <span className="bg-orange-400 text-white px-2 py-1 rounded">
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
        <div className="flex gap-6 overflow-x-auto px-6">
          {islands.map((island) => (
            <IslandCard
              key={island.id}
              title={island.title}
              image={island.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default IslandHighlights;

import islandsData from "@/data/islandsData";
import IslandCard from "@/components/ui/IslandCard";

const FamousIslands = () => {
  return (
    <section className="max-w-5xl mx-auto px-7 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore{" "}
          <span className="bg-[#F5A220] text-white px-2 py-1 rounded">
            Famous Islands
          </span>
        </h2>
        <p className="text-gray-500 mt-2">
          Discover the most iconic spots.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {islandsData.map((island) => (
          <IslandCard key={island.id} island={island} />
        ))}
      </div>
    </section>
  );
};

export default FamousIslands;
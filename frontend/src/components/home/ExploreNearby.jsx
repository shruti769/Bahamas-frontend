import nearbyData from "@/data/nearbyData";
import NearbyCard from "@/components/ui/NearbyCard";

const ExploreNearby = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore{" "}
          <span className="bg-[#F5A220] text-white px-2 rounded">
            nearby
          </span>
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          Discover great places near where you live
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
        {nearbyData.map((item) => (
          <NearbyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExploreNearby;

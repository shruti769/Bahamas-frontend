import TripCard from "@/components/ui/TripCard";
import tripvarietydata from "@/data/tripvarietydata";

const Tripvariety = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-7">

        {/* Heading */}
       <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Plan Your Trip With{" "}
          <span className="bg-[#F5A220] text-white px-2 py-1 rounded">
            Variety Of Options
          </span>
        </h2>
        <p className="text-gray-600 mt-3">
          Discover the most iconic spots.
        </p>
      </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tripvarietydata.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tripvariety;

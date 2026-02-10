const TripCard = ({ trip }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      <img
        src={trip.image}
        alt={trip.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">
          {trip.title}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {trip.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm font-medium">{trip.rating}</span>
          <span className="text-orange-400">
            ★★★★★
          </span>
          <span className="text-xs text-gray-500">
            ({trip.reviews})
          </span>
        </div>

        <p className="text-xs text-gray-700 mt-2 font-medium">
          {trip.price}
        </p>
      </div>
    </div>
  );
};

export default TripCard;

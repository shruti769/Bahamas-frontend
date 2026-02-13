import { useRouter } from 'next/navigation';

const SearchIslandCard = ({ island }) => {
  const router = useRouter();
  
  if (!island) return null;

  const handleCardClick = () => {
    // Navigate to detail page with island ID
    router.push(`/island/${island.id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-0 cursor-pointer"
    >
      {/* Image Container - Left Side */}
      <div className="relative md:w-[45%] h-64 md:h-auto overflow-hidden flex-shrink-0">
        <img
          src={island.image || ""}
          alt={island.title || "Island"}
          className="h-full w-full object-cover"
        />
        
        {/* 10+ Photos Badge */}
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-md">
          10+ Photos
        </div>
      </div>
      
      {/* Content - Right Side */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Rating and Badge Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{island.rating}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">({island.reviews})</span>
            </div>
            <div className="bg-orange-400 text-white px-3 py-1 rounded text-xs font-semibold">
              30% OFF
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {island.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {island.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-orange-500">●</span>
              <span>3 Star Hotel</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-orange-500">●</span>
              <span>Airport Pickup & Drop</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-orange-500">●</span>
              <span>Selected Meals</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - Price */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price is likely to increase</p>
            <p className="text-xs text-gray-500">for this date</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">
              ${island.price?.toFixed(2)}
            </div>
            <p className="text-sm text-gray-500">Per Person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIslandCard;
const NearbyCard = ({ item }) => {
  return (
    <div className="w-full max-w-xs flex items-center justify-between border border-gray-200 rounded-2xl py-4 px-2 hover:shadow-sm transition bg-white">
      
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.place}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-900">{item.place}</h3>
          <p className="text-xs text-gray-500">{item.time}</p>
        </div>
      </div>

      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
        {item.count}
      </span>
    </div>
  );
};

export default NearbyCard;

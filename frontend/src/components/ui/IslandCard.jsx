const IslandCard = ({ island, showDetails = true }) => {
  if (!island) return null;

  return (
   <div className="bg-white rounded-xl overflow-hidden w-full max-w-[280px] mx-auto flex-shrink-0">
      <div className="h-[260px] w-full overflow-hidden rounded-xl">
        <img
          src={island.image || ""}
          alt={island.title || "Island"}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {island.title || "Unknown Island"}
        </h3>

{showDetails && (
  <>
    {island.description && (
      <p className="text-sm text-[#111827] mt-2 leading-relaxed">
        {island.description}
      </p>
    )}

    {island.rating && (
      <div className="flex items-center gap-2 mt-3 text-sm">
        <span className="font-semibold">{island.rating}</span>
        <span className="text-orange-400">🔥🔥🔥🔥🔥</span>
        <span className="text-[#111827]">
          ({island.reviews || 0})
        </span>
      </div>
    )}

    {island.price && (
      <p className="text-sm font-semibold mt-2">
        From ${island.price} Onwards per person
      </p>
    )}
  </>
)}

      </div>
    </div>
  );
};

export default IslandCard;

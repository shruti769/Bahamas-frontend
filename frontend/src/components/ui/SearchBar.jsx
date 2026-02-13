"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Tag, Calendar, Search, ChevronDown } from "lucide-react";

export default function SearchBar({ 
  initialData = {},
  locations = [],
  categories = [],
  onSearch,
  variant = "hero" // "hero" or "search"
}) {
  const router = useRouter();
  const dropdownRef = useRef(null);

  const [searchData, setSearchData] = useState({
    location: initialData.location || "",
    category: initialData.category || "",
    checkIn: initialData.checkIn || "",
    checkOut: initialData.checkOut || "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = () => {
    if (onSearch) {
      // Custom search handler if provided
      onSearch(searchData);
    } else {
      // Default: navigate to search page with params
      const params = new URLSearchParams();
      if (searchData.location) params.append("location", searchData.location);
      if (searchData.category) params.append("category", searchData.category);
      if (searchData.checkIn) params.append("checkIn", searchData.checkIn);
      if (searchData.checkOut) params.append("checkOut", searchData.checkOut);
      
      router.push(`/search?${params.toString()}`);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="max-w-6xl mx-auto bg-white rounded-full shadow-2xl px-8 py-6 flex items-center gap-6"
    >
      {/* Location */}
      <div className="flex items-center gap-3 flex-1 relative">
        <MapPin className="text-blue-500" size={20} />
        <div
          className="flex-1 cursor-pointer"
          onClick={() => toggleDropdown("location")}
        >
          <p className="text-sm font-semibold text-gray-900">Location</p>
          <p className="text-xs text-gray-400 truncate">
            {searchData.location || "Which Island You Want To Explore?"}
          </p>
        </div>
        <ChevronDown
          className={`text-gray-400 cursor-pointer transition-transform ${
            openDropdown === "location" ? "rotate-180" : ""
          }`}
          size={16}
          onClick={() => toggleDropdown("location")}
        />

        {/* Location Dropdown */}
        {openDropdown === "location" && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto z-50">
            {locations.map((location) => (
              <div
                key={location}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm transition-colors"
                onClick={() => {
                  setSearchData({ ...searchData, location });
                  setOpenDropdown(null);
                }}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-12 w-px bg-gray-200"></div>

      {/* Categories */}
      <div className="flex items-center gap-3 flex-1 relative">
        <Tag className="text-blue-500" size={20} />
        <div
          className="flex-1 cursor-pointer"
          onClick={() => toggleDropdown("category")}
        >
          <p className="text-sm font-semibold text-gray-900">Categories</p>
          <p className="text-xs text-gray-400 truncate">
            {searchData.category || "Choose Category"}
          </p>
        </div>
        <ChevronDown
          className={`text-gray-400 cursor-pointer transition-transform ${
            openDropdown === "category" ? "rotate-180" : ""
          }`}
          size={16}
          onClick={() => toggleDropdown("category")}
        />

        {/* Category Dropdown */}
        {openDropdown === "category" && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-y-auto z-50">
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm transition-colors"
                onClick={() => {
                  setSearchData({ ...searchData, category });
                  setOpenDropdown(null);
                }}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-12 w-px bg-gray-200"></div>

      {/* Check in */}
      <div className="flex items-center gap-3">
        <Calendar className="text-blue-500" size={20} />
        <div>
          <label className="text-sm font-semibold text-gray-900 block">
            Check in
          </label>
          <input
            type="date"
            value={searchData.checkIn}
            onChange={(e) => {
              setSearchData({ ...searchData, checkIn: e.target.value });
              setOpenDropdown(null);
            }}
            onClick={() => setOpenDropdown(null)}
            className="text-xs text-gray-400 border-none outline-none cursor-pointer bg-transparent"
            placeholder="Add date"
          />
        </div>
      </div>

      <div className="h-12 w-px bg-gray-200"></div>

      {/* Check out */}
      <div className="flex items-center gap-3">
        <Calendar className="text-blue-500" size={20} />
        <div>
          <label className="text-sm font-semibold text-gray-900 block">
            Check out
          </label>
          <input
            type="date"
            value={searchData.checkOut}
            onChange={(e) => {
              setSearchData({ ...searchData, checkOut: e.target.value });
              setOpenDropdown(null);
            }}
            onClick={() => setOpenDropdown(null)}
            className="text-xs text-gray-400 border-none outline-none cursor-pointer bg-transparent"
            placeholder="Add date"
            min={searchData.checkIn}
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="ml-4 h-14 w-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
      >
        <Search size={20} />
      </button>
    </div>
  );
}
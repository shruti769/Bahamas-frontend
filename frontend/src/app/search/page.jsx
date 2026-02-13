"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Tag, Calendar, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import SearchIslandCard from "@/components/ui/SearchIslandCard";
import { islandsData } from "@/data/Island";

export default function SearchPage() {
  const [searchData, setSearchData] = useState({
    location: "",
    category: "",
    checkIn: "",
    checkOut: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [sortBy, setSortBy] = useState("popular");
  
  // Sorting function
  const applySorting = (islands, sortType) => {
    const sorted = [...islands];
    
    switch(sortType) {
      case 'popular':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'price-low':
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case 'price-high':
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return sorted;
    }
  };

  // Initialize with sorted data
  const [filteredIslands, setFilteredIslands] = useState(() => 
    applySorting([...islandsData], "popular")
  );

  const locations = [
    "Nassau",
    "Paradise Island",
    "Grand Bahama",
    "Exuma",
    "Eleuthera",
    "Andros",
    "Abaco",
    "Bimini",
  ];

  const categories = [
    "Beach Activities",
    "Water Sports",
    "Cultural Tours",
    "Adventure",
    "Relaxation",
    "Diving & Snorkeling",
    "Fishing",
    "Island Hopping",
  ];

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

  // Filter function
  const handleSearch = () => {
    let results = [...islandsData];

    // Filter by location
    if (searchData.location) {
      results = results.filter(
        (island) => island.location === searchData.location
      );
    }

    // Filter by category
    if (searchData.category) {
      results = results.filter(
        (island) => island.category === searchData.category
      );
    }

    // Apply sorting
    results = applySorting(results, sortBy);

    setFilteredIslands(results);
  };

  // Handle sort change
  const handleSortChange = (value) => {
    setSortBy(value);
    setFilteredIslands(applySorting(filteredIslands, value));
  };

  // Clear filters function
  const handleClearFilters = () => {
    setSearchData({
      location: "",
      category: "",
      checkIn: "",
      checkOut: "",
    });
    setFilteredIslands(applySorting([...islandsData], sortBy));
  };

  return (
    <section className="relative min-h-screen w-full bg-gray-50">
      {/* Hero Section with Background */}
      <div className="relative h-[50vh] w-full">
        {/* Background Image */}
        <Image
          src="/assets/searchbg.png"
          alt="Bahamas Beach"
          fill
          priority
          className="object-cover"
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center  max-w-7xl mx-auto px-6 ">
          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Search From Top Island
            <br />
            Options
          </h1>
          <p className="text-white text-lg mt-4">
            Find the perfect island for your next Bahamian adventure.
          </p>
        </div>

        {/* Search Bar - Positioned at bottom of hero */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full px-6 z-50">
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
                <p className="text-xs text-gray-400">
                  {searchData.location || "Which Island You Want To Explore?"}
                </p>
              </div>

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
                <p className="text-xs text-gray-400">
                  {searchData.category || "Choose Category"}
                </p>
              </div>

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
        </div>
      </div>

      {/* DEBUG: Visible indicator */}
      {/* <div className="bg-green-500 text-white text-center py-2 font-bold">
        ✅ CONTENT SECTION LOADED - {filteredIslands.length} Islands Found
      </div> */}

      {/* Results Section - Always visible */}
      <div className="mt-16 max-w-6xl mx-auto px-6 py-8">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {searchData.location || searchData.category ? 'Filtered Results' : 'All Islands'}
            </h2>
            <p className="text-gray-600 mt-1">
              Showing {filteredIslands.length} results
            </p>
          </div>

          {/* Sort & Filter */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Clear Filters Button */}
            {(searchData.location || searchData.category) && (
              <button 
                onClick={handleClearFilters}
                className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
              >
                Clear Filters
              </button>
            )}
            
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filters</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredIslands.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <div className="text-6xl mb-4">🏝️</div>
            <p className="text-xl">No islands found matching your criteria</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters</p>
            <button 
              onClick={handleClearFilters}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredIslands.map((island) => (
              <SearchIslandCard key={island.id} island={island} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
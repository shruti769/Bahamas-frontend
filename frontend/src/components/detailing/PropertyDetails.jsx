"use client";

import { useState } from "react";
import { Home, Sparkles, Calendar, Tag } from "lucide-react";
import Image from "next/image";

export default function PropertyDetails({ property }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  // Default data structure
  const defaultProperty = {
    title: "Entire rental unit in Siolim, India",
    location: "Siolim, India",
    details: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2,
    },
    host: {
      name: "Noella",
      avatar: "/api/placeholder/48/48",
      isSuperhost: true,
      hostingYears: 2,
    },
    features: [
      {
        icon: "home",
        title: "Entire home",
        description: "You'll have the apartment to yourself",
      },
      {
        icon: "sparkles",
        title: "Enhanced Clean",
        description: "This Host committed to Airbnb's 5-step enhanced cleaning process.",
        showMore: true,
      },
      {
        icon: "calendar",
        title: "Self check-in",
        description: "Check yourself in with the keypad.",
      },
    ],
    description:
      "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.",
    price: {
      original: 345.30,
      current: 32.30,
      perNight: false,
      for2Nights: true,
    },
    pricesIncludeAllFees: true,
    cancellationPolicy: "Free cancellation",
  };

  const data = property || defaultProperty;

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            
            {/* Property Title and Details */}
            <div className="pb-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {data.title}
              </h2>
              
              {/* Property Stats */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>{data.details.guests} Guests</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>{data.details.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>{data.details.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>{data.details.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div className="py-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={data.host.avatar}
                    alt={data.host.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Hosted by {data.host.name}
                  </h3>
                  {data.host.isSuperhost && (
                    <p className="text-sm text-gray-600">
                      Superhost · {data.host.hostingYears} year hosting
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="py-6 border-b border-gray-200 space-y-5">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon === "home" && <Home className="w-6 h-6" />}
                    {feature.icon === "sparkles" && <Sparkles className="w-6 h-6" />}
                    {feature.icon === "calendar" && <Calendar className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.showMore && (
                      <button className="text-sm font-semibold underline mt-1 hover:text-gray-600">
                        Show more
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="py-6 border-b border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                {data.description}
              </p>
              <button className="font-semibold underline hover:text-gray-600">
                Show All
              </button>
            </div>

          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className=" w-full top-24">
              
              {/* Prices Include All Fees Badge */}
              {data.pricesIncludeAllFees && (
                <div className="mb-6 flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200">
                  <Tag className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Prices include all fees
                  </span>
                </div>
              )}

              {/* Booking Card */}
              <div className="border border-gray-300 rounded-xl shadow-lg p-6">
                
                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through text-lg">
                      ${data.price.original.toFixed(2)}
                    </span>
                    <span className="text-2xl font-semibold text-gray-900">
                      ${data.price.current.toFixed(2)}
                    </span>
                    <span className="text-gray-600 text-sm">
                      for {data.price.for2Nights ? "2 nights" : "night"}
                    </span>
                  </div>
                </div>

                {/* Date and Guest Inputs */}
                <div className="border border-gray-300 rounded-lg mb-4">
                  {/* Check-in and Check-out */}
                  <div className="grid grid-cols-2 divide-x divide-gray-300">
                    <div className="p-3">
                      <label className="text-[10px] font-bold uppercase tracking-wide text-gray-900 block mb-1">
                        CHECK-IN
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        placeholder="2/19/2022"
                        className="w-full text-sm text-gray-600 outline-none"
                      />
                    </div>
                    <div className="p-3">
                      <label className="text-[10px] font-bold uppercase tracking-wide text-gray-900 block mb-1">
                        CHECKOUT
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn}
                        placeholder="2/26/2022"
                        className="w-full text-sm text-gray-600 outline-none"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="border-t border-gray-300 p-3">
                    <label className="text-[10px] font-bold uppercase tracking-wide text-gray-900 block mb-1">
                      GUESTS
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} guest{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reserve Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mb-3">
                  Reserve
                </button>

                <p className="text-center text-sm text-gray-600 mb-6">
                  You won't be charged yet
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
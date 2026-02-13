"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Leaf,
  Wifi,
  Utensils,
  Wind,
  Snowflake,
  Home,
  Camera,
  Users,
} from "lucide-react";

export default function SleepingAndAmenities({ island }) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  // Default data
  const defaultData = {
    sleepingArrangements: [
      {
        room: "Bedroom 1",
        bed: "1 queen bed",
        image: "/api/placeholder/300/200",
      },
      {
        room: "Bedroom 2",
        bed: "1 queen bed",
        image: "/api/placeholder/300/200",
      },
    ],
    amenities: [
      { icon: "garden", label: "Garden view" },
      { icon: "kitchen", label: "Kitchen" },
      { icon: "wifi", label: "Wifi" },
      { icon: "pets", label: "Pets allowed" },
      { icon: "washer", label: "Free washer - in building" },
      { icon: "dryer", label: "Dryer" },
      { icon: "ac", label: "Central air conditioning" },
      { icon: "security", label: "Security cameras on property" },
      { icon: "refrigerator", label: "Refrigerator" },
    ],
    totalAmenities: 37,
    availability: [
      {
        date: "Thursday, 1 January",
        time: "8:00am - 2:45pm",
        guests: "Up to 10 guests",
      },
      {
        date: "Thursday, 1 January",
        time: "8:00am - 2:45pm",
        guests: "Up to 10 guests",
      },
      {
        date: "Thursday, 1 January",
        time: "8:00am - 2:45pm",
        guests: "Up to 10 guests",
      },
    ],
    pricing: {
      from: 345.46,
      current: 32.30,
      perGuest: true,
      cancellation: "Free cancellation",
    },
  };

  const data = island || defaultData;

  const getAmenityIcon = (iconName) => {
    const icons = {
      garden: <Leaf className="w-6 h-6" />,
      kitchen: <Utensils className="w-6 h-6" />,
      wifi: <Wifi className="w-6 h-6" />,
      pets: <Users className="w-6 h-6" />,
      washer: <Wind className="w-6 h-6" />,
      dryer: <Wind className="w-6 h-6" />,
      ac: <Snowflake className="w-6 h-6" />,
      security: <Camera className="w-6 h-6" />,
      refrigerator: <Home className="w-6 h-6" />,
    };
    return icons[iconName] || <Home className="w-6 h-6" />;
  };

  const displayedAmenities = showAllAmenities
    ? data.amenities
    : data.amenities.slice(0, 8);

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Where you'll sleep */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Where you'll sleep
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.sleepingArrangements.map((room, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-300 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={room.image}
                        alt={room.room}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {room.room}
                      </h3>
                      <p className="text-sm text-gray-600">{room.bed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What this place offers */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What this place offers
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayedAmenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-2">
                    <div className="flex-shrink-0 text-gray-700">
                      {getAmenityIcon(amenity.icon)}
                    </div>
                    <span className="text-gray-900">{amenity.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="mt-6 px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {showAllAmenities
                  ? "Show less"
                  : `Show all ${data.totalAmenities} amenities`}
              </button>
            </div>

          </div>

          {/* Right Column - Availability and Pricing */}
          <div className="lg:col-span-1">
            <div className=" top-24 space-y-6">
              
              {/* Pricing Summary */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-gray-700">From</span>
                  <span className="text-gray-400 line-through text-base">
                    ${data.pricing.from.toFixed(2)}
                  </span>
                  <span className="text-2xl font-semibold text-gray-900">
                    ${data.pricing.current.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-600">/ guest</span>
                </div>
                <p className="text-sm text-orange-500 font-medium mb-4">
                  {data.pricing.cancellation}
                </p>
                
                <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mb-6">
                  Show dates
                </button>
              </div>

              {/* Available Dates */}
              <div className="space-y-3">
                {data.availability.map((slot, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-300 rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {slot.date}
                        </p>
                        <p className="text-sm text-gray-600">{slot.time}</p>
                      </div>
                      <p className="text-sm text-gray-600">{slot.guests}</p>
                    </div>
                  </div>
                ))}
                
                <button className="w-full text-center text-blue-600 font-semibold hover:underline py-2">
                  Show all Dates
                </button>
              </div>

              {/* Report Listing */}
              <div className="border-t border-gray-200 pt-6">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 underline">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                  Report this listing
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
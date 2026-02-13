"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";

export default function CalendarAndReviews({ island }) {
  const [currentMonth, setCurrentMonth] = useState(0);

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const generateCalendarDays = (monthData) => {
    const days = [];
    const { daysInMonth, startDay, selectedDates } = monthData;

    // Add empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
      days.push({ day: null, selected: false });
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        selected: selectedDates.includes(day),
      });
    }

    return days;
  };

  const visibleMonths = [
    island?.calendar?.months?.[currentMonth],
    island.calendar.months[currentMonth + 1] || island.calendar.months[0],
  ];

  return (
    <div className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-20 py-12">
        
        {/* Calendar Section */}
        <div className="mb-12">
          {/* Stay Duration Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              {island.stayDuration.nights} nights in {island.stayDuration.location}
            </h2>
            <p className="text-gray-600">
              {island.stayDuration.startDate} - {island.stayDuration.endDate}
            </p>
          </div>

          {/* Calendar Grid */}
          <div className="border border-gray-300 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleMonths.map((monthData, monthIdx) => {
                if (!monthData) return null;
                
                const calendarDays = generateCalendarDays(monthData);
                
                return (
                  <div key={monthIdx}>
                    {/* Month Header */}
                    <div className="flex items-center justify-between mb-4">
                      {monthIdx === 0 && (
                        <button
                          onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                          className="p-1 hover:bg-gray-100 rounded-full transition"
                          disabled={currentMonth === 0}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}
                      <h3 className="text-lg font-semibold text-center flex-1">
                        {monthData.name}
                      </h3>
                      {monthIdx === 1 && (
                        <button
                          onClick={() => setCurrentMonth(currentMonth + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {daysOfWeek.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-medium text-gray-500 py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((dayData, idx) => (
                        <div
                          key={idx}
                          className={`
                            aspect-square flex items-center justify-center text-sm
                            ${dayData.day ? "cursor-pointer hover:border hover:border-gray-900" : ""}
                            ${dayData.selected ? "bg-orange-500 text-white rounded-full font-semibold" : "text-gray-700"}
                            ${!dayData.day ? "text-gray-300" : ""}
                            rounded-full transition
                          `}
                        >
                          {dayData.day || ""}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear Dates Button */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CalendarIcon className="w-4 h-4" />
                <span>Selected dates</span>
              </div>
              <button className="text-sm font-semibold underline hover:text-gray-600">
                Clear dates
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          {/* Rating Header */}
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 fill-orange-500 text-orange-500" />
            <h2 className="text-2xl font-semibold">
              {island.rating} · {island.reviewCount} reviews
            </h2>
          </div>

          {/* Review Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10">
            {Object.entries(island.reviewCategories).map(([category, score]) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">{category}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 rounded-full"
                      style={{ width: `${(score / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold w-8 text-right">
                    {score.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
            {island.reviews.map((review, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.author}
                    </h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {review.comment}
                </p>
                {review.comment.length > 100 && (
                  <button className="text-sm font-semibold underline mt-2 hover:text-gray-600">
                    Show more
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Show All Reviews Button */}
          <button className="px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition">
            Show all {island.totalReviews} reviews
          </button>
        </div>

      </div>
    </div>
  );
}
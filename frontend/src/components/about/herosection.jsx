import React from "react";

export default function AboutPage() {
  const cards = [
    {
      id: 1,
      title: "Simple",
      desc: "Clear Options, Smart Filters, And Helpful Guides.",
    },
    {
      id: 2,
      title: "Authentic",
      desc: "Real Experiences That Connect You With Local Life.",
    },
    {
      id: 3,
      title: "Memorable",
      desc: "Unique Moments That Stay With You Forever.",
    },
  ];

  return (
    <div className="w-full ">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] w-full">
        {/* Background Image */}
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/about-bg.png')`,
          }}
        />

        {/* About Us Title */}
      <div className="relative z-10 flex items-center justify-end h-full pr-12 md:pr-50">
        <h1 className="text-white text-5xl md:text-6xl font-semibold tracking-tight">
          About Us
        </h1>
      </div>
      </div>

      {/* Cards Section - Overlapping the hero */}
      <div className="relative -mt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-5 items-stretch">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 flex-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Circle with location pin */}
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-50 rounded-full flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.243-4.243a8 8 0 1111.313 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
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
    <div className="w-full min-h-screen bg-gray-100">

      
{/* Hero Section */}
<div className="relative h-[60vh] w-full">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/about-bg.png')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold">
    About Us
  </div>

</div>



      {/* 🔵 Cards Section */}
      <div className="relative -mt-20 px-6">
        <div className="max-w-md mx-auto grid md:grid-cols-3 gap-6">

          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 flex items-center justify-center bg-teal-50 rounded-full mb-4">
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

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

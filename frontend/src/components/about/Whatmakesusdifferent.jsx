'use client';

import React from 'react';
import Image from 'next/image';

const WhatMakesUsDifferent = () => {
  const features = [
    {
      id: 1,
      title: 'Curated Island Experiences',
      description:
        'We handpick the best beaches, activities, and cultural highlights so you discover only the best.',
    },
    {
      id: 2,
      title: 'Smooth & Easy Planning',
      description:
        'From island guides to trip tools, we make planning effortless and enjoyable.',
    },
    {
      id: 3,
      title: 'Local Insights You Can Trust',
      description:
        'Our information is inspired by real experiences, authentic stories, and expert knowledge of The BahaMoments.',
    },
    {
      id: 4,
      title: 'A Platform Built for Every Traveler',
      description:
        'Solo travelers, couples, families, or explorers — we guide everyone toward their perfect island match.',
    },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

       <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          What Makes Us Different
        </h2>

        
    {/* Image Section */}
      <div className="mt-8">
        <div className="w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/whatmakesusdifferent.png"
            alt="Turquoise ocean water with island in background"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
         
    <div className="pt-8 space-y-3">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-start gap-4">

          {/* Dot */}
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 flex-shrink-0"></div>

          {/* Content */}
          <div className="flex items-start gap-6">
            <h3 className="text-sm font-semibold text-gray-900 italic whitespace-nowrap">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>

        </div>
      ))}
    </div>

      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
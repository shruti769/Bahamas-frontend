
'use client';
import React from 'react';
import Image from 'next/image';

const DiscoverSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover the Heart
                <br />
                of <span className="bg-orange-400 text-white px-4 py-1 inline-block">Bahamian Travel</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We connect you to the best Bahamian experiences with simple planning tools
              and trusted recommendations.
            </p>

            {/* Mission Box */}
            <div className="space-y-4">
              <div className="bg-blue-400 text-white px-6 py-3 inline-block rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Our mission is simple
                </h2>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Create memorable, stress-free, and meaningful travel moments for every visitor.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <div>
  <Image
    src="/assets/discoversection.png"
    alt="Tropical beach"
    width={1000}
    height={600}
    className="w-full rounded-3xl shadow-2xl object-cover"
    priority
  />
</div>
             
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
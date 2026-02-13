'use client';
import React from 'react';
import Image from 'next/image';

const DiscoverSection = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 leading-tight">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Discover the Heart of
               
                 <span className="bg-[#F5A220] text-white px-4 py-1 inline-block">Bahamian Travel</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-black text-base sm:text-md leading-tight">
              We connect you to the best Bahamian experiences with simple planning tools
              and trusted recommendations.
            </p>

            {/* Mission Box */}
            <div className="space-y-4">
              <div className="bg-[#3D90BB] text-white px-6 py-3 inline-block rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Our mission is simple
                </h2>
              </div>
              
              <p className="text-black text-base sm:text-md leading-tight">
                Create memorable, stress-free, and meaningful travel moments for every visitor.
              </p>
            </div>
          </div>

          {/* Right Image - Cleaned Up */}
          <div className="relative w-[650px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/assets/discoversection.png"
              alt="Tropical beach with palm trees"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
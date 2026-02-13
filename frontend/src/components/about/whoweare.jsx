'use client';
import React from 'react';
import Image from 'next/image';

// Mock Data
const whoWeAreSections = [
  {
    id: 1,
    title: 'Our Mission',
    description: 'We make travel simple and inspiring by connecting you to the best island experiences.',
    iconImage: '/assets/mission.png',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'Our Vision',
    description: 'We strive to be a trusted platform that helps travelers explore the world with confidence and ease.',
    iconImage: '/assets/vision.png',
    position: 'top-right'
  },
  {
    id: 3,
    title: 'Our Values',
    description: 'We believe in authenticity, transparency, and great service—guiding every journey we support.',
    iconImage: '/assets/values.png',
    position: 'bottom-left'
  },
  {
    id: 4,
    title: 'Our Commitment',
    description: 'We\'re dedicated to creating safe, smooth, and memorable travel experiences for every traveler.',
    iconImage: '/assets/commitment.png',
    position: 'bottom-right'
  }
];

const WhoWeAre = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Who We Are & What We Believe
        </h2>

        {/* Main Container with Grid Layout */}
        <div className="max-w-8xl mx-auto px-6">
          {/* Top Row Container */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-32 mb-8">
            {/* Card 1 - Our Mission */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-6 w-full lg:w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16  rounded-full flex items-center justify-center overflow-hidden -ml-14">
                  <Image
                    src={whoWeAreSections[0].iconImage}
                    alt={whoWeAreSections[0].title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {whoWeAreSections[0].title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {whoWeAreSections[0].description}
                </p>
              </div>
            </div>

            {/* Card 2 - Our Vision */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-6 w-full lg:w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {whoWeAreSections[1].title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {whoWeAreSections[1].description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden -mr-14">
                  <Image
                    src={whoWeAreSections[1].iconImage}
                    alt={whoWeAreSections[1].title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/whoweare.png"
              alt="Beautiful coastal island view"
              className="w-[480px] h-auto object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Bottom Row Container */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-32">
            {/* Card 3 - Our Values */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-6 w-full lg:w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16  rounded-full flex items-center justify-center overflow-hidden -ml-14">
                  <Image
                    src={whoWeAreSections[2].iconImage}
                    alt={whoWeAreSections[2].title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {whoWeAreSections[2].title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {whoWeAreSections[2].description}
                </p>
              </div>
            </div>

            {/* Card 4 - Our Commitment */}
            <div className="flex items-center gap-4 bg-white rounded-2xl shadow-2xl p-6 w-full lg:w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {whoWeAreSections[3].title}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {whoWeAreSections[3].description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16  rounded-full flex items-center justify-center overflow-hidden -mr-14">
                  <Image
                    src={whoWeAreSections[3].iconImage}
                    alt={whoWeAreSections[3].title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
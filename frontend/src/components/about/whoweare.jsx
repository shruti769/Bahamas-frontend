

'use client';
import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const sections = [
    {
      id: 1,
      title: 'Our Mission',
      description: 'We make travel simple and inspiring by connecting you to the best island experiences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      position: 'top-left'
    },
    {
      id: 2,
      title: 'Our Vision',
      description: 'We strive to be a trusted platform that helps travelers explore the world with confidence and ease.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      position: 'top-right'
    },
    {
      id: 3,
      title: 'Our Values',
      description: 'We believe in authenticity, transparency, and great service—guiding every journey we support.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      position: 'bottom-left'
    },
    {
      id: 4,
      title: 'Our Commitment',
      description: 'We\'re dedicated to creating safe, smooth, and memorable travel experiences for every traveler.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      position: 'bottom-right'
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Who We Are & What We Believe
        </h2>

        {/* Main Container with Grid Layout */}
   <div className="max-w-7xl mx-auto px-6">

  {/* Row Container */}
  <div className="flex flex-row lg:flex-row justify-center gap-32">

    {/* Card 1 */}
    <div className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 w-[420px] hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
          {sections[0].icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
          {sections[0].title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {sections[0].description}
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex gap-4 bg-white rounded-2xl shadow-lg p-6 w-[420px] hover:shadow-xl transition-shadow">
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
          {sections[1].title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {sections[1].description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
          {sections[1].icon}
        </div>
      </div>
    </div>

  </div>

          {/* Center Image */}
       <div className="flex justify-center">
            <img
                src="/assets/whoweare.png"
                alt="Beautiful coastal island view"
            className="w-[280px] h-auto object-cover rounded-3xl shadow-2xl"
            />
            </div>

          {/* Grid Layout - Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bottom Left - Our Values */}
             <div className="flex gap-4 bg-white rounded-2xl shadow-lg p-6 w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                  {sections[2].icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {sections[2].title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {sections[2].description}
                </p>
              </div>
            </div>

            {/* Bottom Right - Our Commitment */}
             <div className="flex gap-4 bg-white rounded-2xl shadow-lg p-6 w-[420px] hover:shadow-xl transition-shadow">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-3">
                  {sections[3].title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {sections[3].description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                  {sections[3].icon}
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
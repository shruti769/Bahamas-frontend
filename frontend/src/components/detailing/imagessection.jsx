"use client";

import { useState } from "react";
import { X, Share2, Heart } from "lucide-react";
import Image from "next/image";

export default function ImageGallery({ images, title }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Ensure we have at least 5 images for the grid
  const galleryImages = images?.length >= 5 
    ? images 
    : [
        ...(images || []),
        ...Array(Math.max(0, 5 - (images?.length || 0))).fill("/api/placeholder/800/600")
      ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  return (
    <>
      {/* Full Screen Photo Gallery Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed top-8 right-8 text-white hover:bg-white/10 p-3 rounded-full transition z-10"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            
            <div className="max-w-6xl mx-auto space-y-4 pt-16">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative w-full h-[70vh] min-h-[500px]">
                  <Image
                    src={img}
                    alt={`${title} - Photo ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Gallery Section */}
<div className="w-full bg-white">
  <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-20">
    {/* Header with Title and Actions */}
    <div className="flex items-center justify-between mb-3 py-8">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
        Blissful abode 2 bhk attic/private terrace Siolim
      </h1>
      <div className="flex items-center gap-1">
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="underline font-medium text-sm sm:text-base">Share</span>
        </button>
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'
            }`} 
          />
          <span className="underline font-medium text-sm sm:text-base">Save</span>
        </button>
      </div>
    </div>
          {/* Image Grid - Exact Layout */}
          <div className="grid grid-cols-4 gap-2 h-[400px] mb-12">
            {/* Large Left Image - 2 columns x 2 rows */}
            <div 
              className="col-span-2 row-span-2 relative rounded-l-2xl overflow-hidden cursor-pointer group"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src="/assets/Detailing1.png"
                alt={`${title} - Main photo`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Top Right - First Small Image */}
            <div 
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src="/assets/Detailing2.png"
                alt={`${title} - Photo 2`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Top Right - Second Small Image (rounded top-right) */}
            <div 
              className="relative rounded-tr-2xl overflow-hidden cursor-pointer group"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src="/assets/Detailing3.png"
                alt={`${title} - Photo 3`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Bottom Right - Third Small Image */}
            <div 
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src="/assets/Detailing4.png"
                alt={`${title} - Photo 4`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Bottom Right - Last Small Image (rounded bottom-right) with "show all photos" */}
            <div 
              className="relative rounded-br-2xl overflow-hidden cursor-pointer group"
              onClick={() => setShowAllPhotos(true)}
            >
              <Image
                src="/assets/Detailing5.png"
                alt={`${title} - Photo 5`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* "show all photos" button - always visible */}
              <div className="absolute inset-0 flex items-center justify-center mt-26">
                <button 
                  className="bg-white px-5 py-2.5 rounded-lg font-medium text-sm text-gray-900 hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAllPhotos(true);
                  }}
                >
                  show all photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
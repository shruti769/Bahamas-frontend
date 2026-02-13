'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import the map to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function LocationMap({ 
  title = "Where you'll be",
  location = {
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    country: "France",
    coordinates: [44.8378, -0.5792], // Bordeaux coordinates
  },
  description = "Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine Museum.",
  exactLocationNote = "Exact location provided after booking",
  showMoreButton = true
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [customIcon, setCustomIcon] = useState(null);

  // Create custom marker icon on client side only
  useState(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      const icon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="relative">
            <div class="absolute -translate-x-1/2 -translate-y-full">
              <div class="bg-rose-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 48],
      });
      setCustomIcon(icon);
    }
  }, []);

  const truncatedDescription = description.length > 200 
    ? description.substring(0, 200) + '...' 
    : description;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      {/* Map Container */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4 border border-gray-200">
        {typeof window !== 'undefined' && (
          <MapContainer
            center={location.coordinates}
            zoom={14}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {customIcon && (
              <Marker position={location.coordinates} icon={customIcon}>
                <Popup>{exactLocationNote}</Popup>
              </Marker>
            )}
          </MapContainer>
        )}

        {/* Exact Location Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-md z-10 pointer-events-none">
          <p className="text-sm text-gray-700 whitespace-nowrap">{exactLocationNote}</p>
        </div>

        {/* Zoom Controls (Optional - styled to match the design) */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
          <button className="bg-white w-10 h-10 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
          <button className="bg-white w-10 h-10 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Location Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">
          {location.city}, {location.region}, {location.country}
        </h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          {showFullDescription ? description : truncatedDescription}
        </p>

        {/* Show More Button */}
        {showMoreButton && description.length > 200 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-sm font-medium underline hover:text-gray-900 transition"
          >
            {showFullDescription ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
}
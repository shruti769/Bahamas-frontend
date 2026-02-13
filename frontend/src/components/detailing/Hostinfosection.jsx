'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HostInfoSection({
  host = {
    name: "Ghazal",
    avatar: "/default-avatar.jpg",
    joinedDate: "May 2021",
    reviewCount: 12,
    isIdentityVerified: true,
    isSuperhost: true,
    superhostDescription: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    responseRate: "100%",
    responseTime: "within an hour",
  },
  houseRules = [
    { icon: "clock-in", label: "Check-in: After 4:00 PM" },
    { icon: "clock-out", label: "Checkout: 10:00 AM" },
    { icon: "lockbox", label: "Self check-in with lockbox" },
    { icon: "no-children", label: "Not suitable for infants (under 2 years)" },
    { icon: "no-smoking", label: "No smoking" },
    { icon: "no-pets", label: "No pets" },
    { icon: "no-parties", label: "No parties or events" },
  ],
  healthSafety = [
    { icon: "cleaning", label: "Committed to Airbnb's enhanced cleaning process" },
    { icon: "distancing", label: "Airbnb's social-distancing and other COVID-19-related guidelines apply" },
    { icon: "carbon", label: "Carbon monoxide alarm" },
    { icon: "smoke", label: "Smoke alarm" },
    { icon: "security", label: "Security Deposit - If you damage the home, you may be charged up to $568" },
  ],
  cancellationPolicy = {
    title: "Cancellation policy",
    description: "Free cancellation before Feb 14",
    showMore: true,
  },
}) {
  const [showHouseRulesMore, setShowHouseRulesMore] = useState(false);
  const [showHealthSafetyMore, setShowHealthSafetyMore] = useState(false);
  const [showCancellationMore, setShowCancellationMore] = useState(false);

  // Icon components
  const getIcon = (iconName) => {
    const icons = {
      'clock-in': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'clock-out': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'lockbox': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      'no-children': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      'no-smoking': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      'no-pets': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      'no-parties': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      'cleaning': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      'distancing': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      'carbon': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      'smoke': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      'security': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    };
    return icons[iconName] || icons['clock-in'];
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Host Section */}
      <div className="border-b border-gray-200 pb-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          {/* Host Avatar */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={host.avatar}
              alt={host.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Host Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Hosted by {host.name}</h2>
            <p className="text-sm text-gray-600 mb-3">Joined {host.joinedDate}</p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{host.reviewCount} Reviews</span>
              </div>

              {host.isIdentityVerified && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Identity verified</span>
                </div>
              )}

              {host.isSuperhost && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">Superhost</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Superhost Description */}
        {host.isSuperhost && (
          <div className="mb-6">
            <h3 className="font-semibold mb-2">{host.name} is a Superhost</h3>
            <p className="text-sm text-gray-700">{host.superhostDescription}</p>
          </div>
        )}

        {/* Host Stats */}
        <div className="space-y-2 mb-6">
          <p className="text-sm">Response rate: {host.responseRate}</p>
          <p className="text-sm">Response time: {host.responseTime}</p>
        </div>

        {/* Contact Host Button */}
        <button className="px-6 py-3 border border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition">
          Contact Host
        </button>

        {/* Payment Warning */}
        <div className="flex gap-3 mt-6 p-4 bg-gray-50 rounded-lg">
          <svg className="w-6 h-6 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-700">
            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
          </p>
        </div>
      </div>

      {/* Things to Know Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Things to know</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* House Rules */}
          <div>
            <h3 className="font-semibold mb-4">House rules</h3>
            <div className="space-y-3">
              {houseRules.slice(0, showHouseRulesMore ? houseRules.length : 6).map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-gray-600 mt-0.5">
                    {getIcon(rule.icon)}
                  </div>
                  <span className="text-sm">{rule.label}</span>
                </div>
              ))}
            </div>
            {houseRules.length > 6 && (
              <button
                onClick={() => setShowHouseRulesMore(!showHouseRulesMore)}
                className="mt-4 text-sm font-semibold underline hover:text-gray-700"
              >
                {showHouseRulesMore ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>

          {/* Health & Safety */}
          <div>
            <h3 className="font-semibold mb-4">Health & safety</h3>
            <div className="space-y-3">
              {healthSafety.slice(0, showHealthSafetyMore ? healthSafety.length : 4).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-gray-600 mt-0.5">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            {healthSafety.length > 4 && (
              <button
                onClick={() => setShowHealthSafetyMore(!showHealthSafetyMore)}
                className="mt-4 text-sm font-semibold underline hover:text-gray-700"
              >
                {showHealthSafetyMore ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>

          {/* Cancellation Policy */}
          <div>
            <h3 className="font-semibold mb-4">{cancellationPolicy.title}</h3>
            <p className="text-sm mb-3">{cancellationPolicy.description}</p>
            {cancellationPolicy.showMore && (
              <button
                onClick={() => setShowCancellationMore(!showCancellationMore)}
                className="text-sm font-semibold underline hover:text-gray-700"
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
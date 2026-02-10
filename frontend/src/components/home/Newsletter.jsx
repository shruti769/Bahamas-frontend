"use client";

import { useState } from "react";
import Image from "next/image";
import newsletterData from "@/data/newsletterData";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return alert("Please enter email");

    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            {newsletterData.title}{" "}
            <span className="bg-[#F5A220] text-white px-2 py-1 rounded-md">
              {newsletterData.highlight}
            </span>
          </h2>

          <p className="text-gray-500 text-sm mb-8 max-w-md">
            {newsletterData.subtitle}
          </p>

          {/* Benefits */}
<div className="space-y-4 mb-8">
  {newsletterData.benefits.map((item) => (
    <div key={item.id} className="flex items-center gap-3">
      
      <span
        className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold
          ${item.id === 1
            ? "bg-[#94cfb0] text-green-800"
            : "bg-blue-100 text-blue-600"
          }`}
      >
        {item.number}
      </span>

      <span className="text-sm text-gray-700">
        {item.text}
      </span>

    </div>
  ))}
</div>

          {/* Email Input */}
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder={newsletterData.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-5 py-3 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={handleSubmit}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-center">
          <Image
            src="/assets/newsletter.png"
            alt="Newsletter Illustration"
            width={500}
            height={500}
            className="max-w-lg w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

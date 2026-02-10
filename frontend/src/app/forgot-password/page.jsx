"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Password reset link sent to your email!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center p-8">
      
      {/* Main White Container */}
      <div className="w-full max-w-6xl  min-h-[95vh] bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <div className="relative md:block">
          <Image
            src="/assets/forgot-bg.png"
            alt="Beach"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-center bg-[#f3f3f3] p-12">
          
          {/* Form Card */}
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-10">

            {/* Top Row */}
            <div className="flex items-center justify-between mb-8">
              <ArrowLeft className="w-5 h-5 cursor-pointer text-gray-700" />

              <div className="flex items-center gap-2">
                <span className="text-xl">🌎</span>
                <span className="font-semibold text-gray-800">
                  BahaMoments
                </span>
              </div>

              <div className="w-5" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Forget your Account?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E7FA3]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3E7FA3] hover:bg-[#346b89] text-white py-3 rounded-lg transition"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {/* Success Message */}
              {message && (
                <p className="text-green-600 text-sm text-center">
                  {message}
                </p>
              )}

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Remember ?{" "}
                <Link href="/login" className="font-semibold text-black">
                  Login
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

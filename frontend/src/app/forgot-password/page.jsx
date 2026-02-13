"use client";

import { useState } from "react";
import Image from 'next/image';
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="/assets/forgot-bg.png"
            alt="Forgot Password"
            className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="flex items-center justify-center">
          
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl px-12 py-8 w-full max-w-lg mx-auto">

            {/* Header with Back Arrow and Logo */}
            <div className="flex items-center justify-between mb-4">
              <button type="button" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Logo */}
              <div className="flex justify-center">
                <Image
                  src="/assets/LOGO(bahamas).png"
                  alt="BahaMoments Logo"
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </div>

              {/* Spacer for alignment */}
              <div className="w-5"></div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Forget your Account?
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5BA8C8] hover:bg-[#4a97b5] text-white font-semibold py-3.5 rounded-lg transition shadow-sm"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {/* Success Message */}
              {message && (
                <p className="text-green-600 text-sm text-center mt-4">
                  {message}
                </p>
              )}

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Remember ?{" "}
                <a href="/login" className="text-gray-900 font-semibold hover:text-[#5BA8C8] transition underline">
                  Login
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
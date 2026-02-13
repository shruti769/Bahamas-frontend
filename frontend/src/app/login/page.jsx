"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Fake frontend-only login
      const fakeToken = "my-demo-token-123";

      const fakeUser = {
        firstName: "John",
        lastName: "Doe",
        email: formData.email,
        mobile: "9999999999",
        address: "India",
      };

      // ✅ Save token + user
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(fakeUser));

      router.push("/profile");

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="/assets/login.png"
            alt="Login"
            className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white rounded-3xl shadow-2xl px-12 py-6 w-full max-w-lg mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/LOGO(bahamas).png"
              alt="BahaMoments Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Login
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition"
              />
            </div>

            {/* Reset Password Link */}
            <div className="text-right">
              <button 
                type="button"
                onClick={() => router.push("/reset-password")}
                className="text-sm text-gray-600 hover:text-[#5BA8C8] font-medium transition"
              >
                Reset Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5BA8C8] hover:bg-[#4a97b5] text-white font-semibold py-3.5 rounded-lg transition shadow-sm"
            >
              {loading ? "Loading..." : "Login"}
            </button>

          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an Account?{" "}
            <button 
              onClick={() => router.push("/signup")}
              className="text-gray-900 font-semibold hover:text-[#5BA8C8] transition underline"
            >
              Signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
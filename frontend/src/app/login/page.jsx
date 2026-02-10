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
        firstName: "Pallvi",
        lastName: "Sharma",
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/assets/login.png"
            alt="Login"
            className="w-full h-[550px] object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="bg-white rounded-[28px] shadow-xl px-16 py-20 max-w-xl w-full mx-auto">

          <div className="flex justify-center items-center gap-2 mb-6">
           <div className="flex justify-center mb-6">
                         <Image
                            src="/assets/LOGO(bahamas).png"
                            alt="BahaMoments Logo"
                            width={150}
                            height={150}
                            className="object-contain"
                            />
                   
                    </div>
          </div>

          <h1 className="text-4xl font-semibold text-center mb-10 tracking-relaxed">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[#A7C4D6] rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#4F8FA8]"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[#A7C4D6] rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#4F8FA8]"
              />
            </div>

            {/* Reset Password Link */}
            <div className="text-right -mt-4">
              <button 
                type="button"
                onClick={() => router.push("/reset-password")}
                className="text-sm text-gray-600 hover:text-[#4F8FA8] font-medium transition"
              >
                Reset Password?
              </button>
            </div>

            <button
                type="login"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-6 transition"
              >
                Login
              </button>

          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an Account?{" "}
            <button 
              onClick={() => router.push("/signup")}
              className="text-gray-900 font-semibold hover:text-[#4F8FA8] transition"
            >
              Signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
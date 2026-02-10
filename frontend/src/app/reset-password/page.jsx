'use client';

import { useState } from 'react';
import Image from "next/image";
import { Eye, EyeOff } from 'lucide-react';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');

  const calculatePasswordStrength = (password) => {
    if (!password) return '';
    if (password.length < 6) return 'weak';
    if (password.length < 10) return 'medium';
    if (
      password.length >= 10 &&
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)
    ) {
      return 'strong';
    }
    return 'medium';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'newPassword') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Password changed successfully!');
      setFormData({
        newPassword: '',
        confirmPassword: '',
      });
      setPasswordStrength('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Image */}
      <div className="relative md:block ">
        <Image
          src="/assets/reset-password.png"
          alt="Island background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 z-10" />
      </div>

      {/* Right Form Section */}
     <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-10">
  <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-xl p-16">
          {/* ===== HEADER FIXED ===== */}
          <div className="mb-12">

            {/* Top Row: Arrow + Logo */}
           <div className="relative flex items-center mb-12">

  {/* Arrow - Left */}
  <button
    onClick={() => window.history.back()}
    className="absolute left-0 text-gray-600 hover:text-gray-900 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

  {/* Logo + Brand - Perfect Center */}
  <div className="mx-auto flex items-center gap-3">
    <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
      <span className="text-white font-semibold">B</span>
    </div>
    <span className="text-gray-800 font-semibold text-xl">
      BahaMoments
    </span>
  </div>

</div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
              Set a New Password
            </h1>

          </div>
          {/* ===== END HEADER ===== */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* New Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3">
                New Password<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your New Password"
                  className={`w-full px-5 py-4 pr-14 text-base border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.newPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.newPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3">
                Confirm Password<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your Confirm Password"
                  className={`w-full px-5 py-4 pr-14 text-base border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5 text-lg rounded-xl transition mt-8"
            >
              Change Password
            </button>
          </form>

          {/* Bottom Link */}
          <div className="mt-8 text-center">
            <p className="text-base text-gray-600">
              Remember your password?{' '}
              <a href="/login" className="text-blue-500 font-medium">
                Sign In
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

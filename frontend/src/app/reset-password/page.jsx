'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="/assets/reset-password.png"
            alt="Island background"
            className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white rounded-3xl shadow-2xl px-12 py-10 w-full max-w-lg mx-auto">

          {/* Back Arrow and Logo */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 transition-colors"
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

            {/* <div className="flex items-center gap-2 mb-4"> */}
              
                        <div className="flex justify-center mb-4 mr-32">
                          <Image
                            src="/assets/LOGO(bahamas).png"
                            alt="BahaMoments Logo"
                            width={130}
                            height={130}
                            className="object-contain"
                          />
                        </div>
              
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Set a New Password
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                New Password<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your New Password"
                  className={`w-full bg-white border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition ${
                    errors.newPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.newPassword && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirm Password<span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your Confirm Password"
                  className={`w-full bg-white border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5BA8C8] hover:bg-[#4a97b5] text-white font-semibold py-3.5 rounded-lg transition shadow-sm mt-6"
            >
              Change Password
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
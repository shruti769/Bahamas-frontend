'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft } from "lucide-react";


export default function OTPVerification() {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('').concat(Array(OTP_LENGTH).fill('')).slice(0, OTP_LENGTH);
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, OTP_LENGTH - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');

    if (otpValue.length === OTP_LENGTH) {
      alert(`OTP Submitted: ${otpValue}`);
    } else {
      alert('Please enter complete OTP');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="/assets/otp.png"
            alt="OTP Verification"
            className="w-full h-[600px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* RIGHT OTP CARD */}
        <div className="bg-white rounded-3xl shadow-2xl px-12 py-10 w-full max-w-lg mx-auto">

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
          <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">
            OTP for verification
          </h1>

          {/* OTP INPUT */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              OTP<span className="text-red-500">*</span>
            </label>

            <div className="flex justify-start gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-14 h-14 text-center text-xl font-semibold bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#5BA8C8] focus:border-transparent transition"
                />
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#5BA8C8] hover:bg-[#4a97b5] text-white font-semibold py-3.5 rounded-lg transition shadow-sm"
          >
            Submit OTP
          </button>
        </div>
      </div>
    </div>
  );
}
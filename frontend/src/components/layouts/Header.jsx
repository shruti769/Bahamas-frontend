"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
   <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
       
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/LOGO(bahamas).png"
              alt="BahaMoments Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <Link href="/" className="text-gray-900">Home</Link>
            <Link href="/about" className="hover:text-gray-900">About us</Link>
            <Link href="/stays" className="hover:text-gray-900">Stays</Link>
            <Link href="/experiences" className="hover:text-gray-900">Experiences</Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 relative">
          <button className="text-gray-500 hover:text-gray-900">
            <Bell size={20} />
          </button>

          <div className="relative" ref={dropdownRef}>
            <button type="button" onClick={() => setOpen(!open)}>
              <Image
                src="https://i.pravatar.cc/40"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-66 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999]">
                {/* <div className="px-4 py-3 border-b">
                  <p className="text-sm font-semibold">Alex Martin</p>
                  <p className="text-xs text-gray-500">alexmartin@gmail.com</p>
                </div> */}

                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  My Profile
                </Link>

                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <div className="border-t"></div>

                <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

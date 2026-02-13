"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Load profile image from localStorage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.profileImage) {
        setProfileImage(parsedUser.profileImage);
      }
    }
  }, []);

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

  const handleLogoutClick = () => {
    setOpen(false); // Close dropdown
    setShowLogoutModal(true); // Show logout confirmation
  };

  const handleConfirmLogout = () => {
    // Clear user data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // Close modal
    setShowLogoutModal(false);
    
    // Redirect to login
    router.push("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
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
              <Link 
                href="/" 
                className={pathname === "/" ? "text-[#3D90BB] font-semibold" : "hover:text-[#3D90BB]"}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={pathname === "/about" ? "text-[#3D90BB] font-semibold" : "hover:text-[#3D90BB]"}
              >
                About us
              </Link>
              <Link 
                href="/search" 
                className={pathname === "/search" ? "text-[#3D90BB] font-semibold" : "hover:text-[#3D90BB]"}
              >
                Stays
              </Link>
                <Link 
                href="/contactus" 
                className={pathname === "/contactus" ? "text-[#3D90BB] font-semibold" : "hover:text-[#3D90BB]"}
              >
                Contact Us
              </Link>
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
                  src={profileImage || "https://i.pravatar.cc/40"}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full cursor-pointer"
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-66 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999]">
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

                  <button 
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0  flex items-center justify-center z-[10000] px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={handleCancelLogout}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 pr-8">
              Are you sure you want to logout?
            </h2>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleConfirmLogout}
                className="flex-1 bg-[#027A36] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="flex-1 bg-[#C02E00] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
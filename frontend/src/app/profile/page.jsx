'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MyProfile() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
  });

  const [profileImage, setProfileImage] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // ✅ Frontend-only token + user check
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token) {
      router.replace('/login');
      return;
    }

    if (user) {
      const parsedUser = JSON.parse(user);

      setFormData(parsedUser);

      setProfileImage(
        `https://ui-avatars.com/api/?name=${parsedUser.firstName || 'User'}+${
          parsedUser.lastName || ''
        }&size=200`
      );
    }

    setIsLoading(false);
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEdited(true);
  };

  // ✅ Save to localStorage instead of API
  const handleSave = () => {
    setIsSaving(true);

    localStorage.setItem('user', JSON.stringify(formData));

    setTimeout(() => {
      setIsSaving(false);
      setIsEdited(false);
      alert('Profile updated successfully!');
    }, 500);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.replace('/login');
  };

  const handleChangePassword = () => {
    router.push('/reset-password');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          <h1 className="text-xl font-semibold">My Profile</h1>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Personal Information</h2>

          {/* Profile Picture */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="border p-3 rounded-lg"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="border p-3 rounded-lg"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-3 rounded-lg"
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
              className="border p-3 rounded-lg"
            />
            <input
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="border p-3 rounded-lg md:col-span-2"
            />
          </div>

          {isEdited && (
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleLogout}
            className="border border-red-500 text-red-500 px-6 py-2 rounded-lg"
          >
            Logout
          </button>

          <button
            onClick={handleChangePassword}
            className="underline text-gray-700"
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

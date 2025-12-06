import React, { use, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";

const ProfilePage = () => {
  const {signout} = use(AuthContext)
  // Dummy data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    university: "Horizon International University",
    address: "Mirpur, Dhaka, Bangladesh",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        
        {/* Profile Card */}
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white flex gap-5 items-center">
            <div className="w-20 h-20 rounded-full bg-white text-indigo-600 text-3xl font-bold flex items-center justify-center shadow-lg">
              {formData.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-semibold">{formData.name}</h1>
              <p className="text-sm opacity-90">Manage your profile information</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-700">Personal Information</h2>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSave}>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                {isEditing ? (
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                ) : (
                  <p className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-800">
                    {formData.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                {isEditing ? (
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                ) : (
                  <p className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-800">
                    {formData.email}
                  </p>
                )}
              </div>

              {/* University */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">University</label>
                {isEditing ? (
                  <input
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                ) : (
                  <p className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-800">
                    {formData.university}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Address</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  ></textarea>
                ) : (
                  <p className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-800">
                    {formData.address}
                  </p>
                )}
              </div>

              {/* Save/Cancel */}
              {isEditing && (
                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg shadow hover:bg-slate-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>

            {/* Logout Button */}
            <div className="mt-10">
              <button 
              onClick={signout}
              className="w-full py-3 cursor-pointer rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 shadow transition">
                Logout
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;

import React, { useState, useRef } from "react";
import { Camera, Save, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("User Created Successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "",
    });
    setPreviewImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="text-white">
      <div className="bg-[#1d1d29] p-4 sm:p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-[#1d1d29] rounded-lg transition-colors mt-1"
          >
            <ChevronLeft size={28} />
          </button>
          <h2 className="text-2xl font-semibold">Create New User</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col items-center">
            <label
              htmlFor="photo"
              className="w-28 h-28 rounded-full bg-[#2a2a3a] flex items-center justify-center border-2 border-dashed border-gray-500 cursor-pointer hover:border-indigo-500 transition"
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <Camera size={28} className="text-gray-400" />
              )}
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </label>
            <p className="text-sm text-gray-400 mt-2">Upload Photo</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handlechange}
                className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handlechange}
                className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handlechange}
                className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handlechange}
                className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              >
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="manager">User</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium transition-all"
          >
            <Save size={18} />
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

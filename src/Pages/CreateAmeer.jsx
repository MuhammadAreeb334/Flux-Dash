import React, { useState, useRef } from "react";
import { Camera, Save, ChevronLeft, EyeOff, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FireAPI } from "../API/useRequest";

const CreateAmeer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    country: "",
    email: "",
    mobile: "",
    password: "",
    // role: "",
    permissions: "",
  });

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const customheader = {
        Authorization: `Bearer ${token}`,
      };
      const data = await FireAPI("ameer", "POST", formData, customheader);
      setFormData({
        name: "",
        designation: "",
        country: "",
        email: "",
        mobile: "",
        password: "",
        permissions: "",
      });
      navigate("/ameer");
      //   console.log("Ameer Created: ", data);
    } catch (error) {
      console.error("Creation Error:", error);
    } finally {
      setLoading(false);
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
          <h2 className="text-2xl font-semibold">Create New Ameer</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* <div className="flex flex-col items-center">
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
              </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handlechange}
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
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
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                value={formData.mobile}
                onChange={handlechange}
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter Your Country"
                value={formData.country}
                onChange={handlechange}
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                placeholder="Enter Designation"
                value={formData.designation}
                onChange={handlechange}
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
            </div>

            <div className="relative group">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handlechange}
                className="w-full bg-[#12121e] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10  text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* <div>
              <label className="block text-sm font-medium mb-2">
                Permissions
              </label>
              <select
                name="permissions"
                value={formData.permissions}
                onChange={handlechange}
                className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition"
                // required
              >
                <option value="">Give Permissions</option>
                <option value="list">List</option>
                <option value="view">View</option>
                <option value="create">Create</option>
              </select>
            </div> */}

            {/* <div>
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
                </div> */}
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`px-4 py-2 font-semibold rounded-xl transition-all shadow-lg 
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed opacity-70"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 active:scale-[0.98]"
                } text-white active:scale-[0.98] flex items-center justify-center gap-2 mt-4`}
          >
            <Save size={18} />
            Create Ameer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAmeer;

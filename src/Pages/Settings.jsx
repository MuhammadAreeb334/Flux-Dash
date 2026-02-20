import {
  Camera,
  ChevronLeft,
  Edit2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Save,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FireAPI } from "../API/useRequest";
import profileImg from "../Assets/Profile.jpg";

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const userRaw = localStorage.getItem("user");
  const userInfo = userRaw ? JSON.parse(userRaw) : null;

  const [editing, setEditing] = useState({
    name: false,
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    name: userInfo.name,
  });

  const [profileData, setProfileData] = useState({
    profilePhoto: profileImg,
  });

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileData({ ...profileData, [type]: url });
    }
  };

  const toggleEdit = (field) => {
    setEditing({ ...editing, [field]: !editing[field] });
  };

  const toggleVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      const id = userInfo?.id;

      const token = localStorage.getItem("token");
      const customheaders = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      };
      const data = await FireAPI(
        `edit-password/${id}`,
        "PUT",
        body,
        customheaders,
      );
      console.log("Password Changed:", data);
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNameUpdate = async (e) => {
    if (loading) return;
    if (!formData.name.trim()) {
      alert("Name cannot be empty!");
      return;
    }
    setLoading(true);
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      const id = userInfo?.id;
      const token = localStorage.getItem("token");

      const customheaders = {
        Authorization: `Bearer ${token}`,
      };

      const body = { name: formData.name };

      const data = await FireAPI(`edit-user/${id}`, "PUT", body, customheaders);
      console.log("Name updated:", data);
      const updateUser = { ...userInfo, name: formData.name };
      localStorage.setItem("user", JSON.stringify(updateUser));
      setEditing({ ...editing, name: false });
      alert("Name updated successfully!");
    } catch (error) {
      console.error("Error updating name:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white p-4">
      <div className="bg-[#1d1d29] p-4 sm:p-6 rounded-2xl shadow-lg max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="hover:bg-[#2a2a3a] p-1 rounded-lg transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Security Settings
          </h2>
        </div>

        <div>
          <div className="relative group w-32 h-32 rounded-full overflow-hidden border-4 border-[#1d1d29] bg-[#2a2a3a]">
            <img
              src={profileData.profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover transition-all group-hover:brightness-75"
            />
            <label className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
              <div className="bg-black/50 p-2 rounded-full shadow-lg">
                <Camera size={20} />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, "profilePhoto")}
              />
            </label>
          </div>
          <div className="p-4 rounded-xl">
            <div className="flex flex-row justify-between items-center mb-2">
              {editing.name ? (
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a3a] border border-gray-600 rounded-lg p-3 text-sm outline-none focus:border-indigo-500 transition"
                />
              ) : (
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {userInfo?.name || "Guest User"}
                </h2>
              )}

              <button
                onClick={() =>
                  editing.name ? handleNameUpdate() : toggleEdit("name")
                }
                className="ml-2 text-gray-400 hover:text-indigo-400 transition"
              >
                {editing.name ? <Save size={18} /> : <Edit2 size={18} />}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => setChangePassword(true)}
          className={`w-full sm:w-auto px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all 
            ${changePassword ? "hidden" : "inline"}`}
        >
          Change Password
        </button>
        {changePassword && (
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Old Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500"
                    size={18}
                  />
                  <input
                    type={showPasswords.old ? "text" : "password"}
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-[#12121e] border border-gray-700 rounded-xl py-3 pl-10 pr-12 outline-none focus:border-indigo-500 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => toggleVisibility("old")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPasswords.old ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  New Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500"
                    size={18}
                  />
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-[#12121e] border border-gray-700 rounded-xl py-3 pl-10 pr-12 outline-none focus:border-indigo-500 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => toggleVisibility("new")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPasswords.new ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500"
                    size={18}
                  />
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-[#12121e] border border-gray-700 rounded-xl py-3 pl-10 pr-12 outline-none focus:border-indigo-500 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => toggleVisibility("confirm")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPasswords.confirm ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                disabled={loading}
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  "Update Security"
                )}
              </button>
              <button
                onClick={() => setChangePassword(false)}
                className="w-full sm:w-auto px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Settings;

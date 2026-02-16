import { ChevronLeft, Eye, EyeOff, Loader2, Lock } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FireAPI } from "../API/useRequest";

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
          <h2 className="text-2xl font-semibold">Security Settings</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                  {showPasswords.old ? <EyeOff size={18} /> : <Eye size={18} />}
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
                  {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
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

          <button
            disabled={loading}
            type="submit"
            className="w-full sm:w-auto px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Update Security"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

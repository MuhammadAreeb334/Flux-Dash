import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f0f17] flex items-center justify-center p-4">
      

      <div className="w-full max-w-lg z-10">
        <div className="bg-[#1d1d29] border border-gray-800 rounded-3xl p-8 shadow-2xl">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Create Account
            </h1>
            <p className="text-gray-400 mt-1 text-sm">
              Join our platform and start managing users
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  className="w-full bg-[#12121e] text-white border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-indigo-500 transition-all shadow-inner"
                  required
                />
              </div>
            </div>


            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="alex@example.com"
                  className="w-full bg-[#12121e] text-white border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-indigo-500 transition-all shadow-inner"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#12121e] text-white border border-gray-700 rounded-xl py-2.5 pl-10 pr-12 outline-none focus:border-indigo-500 transition-all shadow-inner"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <ShieldCheck size={18} />
              Create Account
            </button>
          </form>
          
          <p className="text-center text-gray-500 text-sm mt-8">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-400 font-medium hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

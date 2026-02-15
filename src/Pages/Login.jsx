import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FireAPI } from "../API/useRequest";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const response = await FireAPI("signin", "POST", { email, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
      // console.log("token: ", response.token);
      // console.log("user: ",response.user);
    } catch (error) {
      console.log(error.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f17] flex items-center justify-center p-4">
      <div className="w-full max-w-md z-10">
        <div className="bg-[#1d1d29] border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-400 mt-2">
              Please enter your details to log in
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-[#12121e] text-white border border-gray-700 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative group">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#12121e] text-white border border-gray-700 rounded-xl py-3 pl-10 pr-12 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`w-full font-semibold py-3.5 rounded-xl transition-all shadow-lg 
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed opacity-70"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 active:scale-[0.98]"
                } text-white`}
            >
              {loading ? "Checking..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-indigo-400 font-medium hover:underline"
            >
              Signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

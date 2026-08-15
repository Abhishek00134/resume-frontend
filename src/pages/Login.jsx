import { Lock, Mail, User2Icon } from "lucide-react";
import React from "react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice.js";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get('state');
  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem('token', data.token);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 relative overflow-hidden px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-96 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 z-10 shadow-2xl"
      >
        <h1 className="text-white text-3xl font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-300 text-sm mt-2">Please sign in to continue</p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/10 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-[#A6FF5D] h-12 rounded-full overflow-hidden pl-5 gap-3 transition-all">
            <User2Icon size={18} className="text-gray-300 shrink-0" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0 pr-4"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white/10 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-[#A6FF5D] h-12 rounded-full overflow-hidden pl-5 gap-3 transition-all">
          <Mail size={18} className="text-gray-300 shrink-0" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0 pr-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white/10 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-[#A6FF5D] h-12 rounded-full overflow-hidden pl-5 gap-3 transition-all">
          <Lock size={18} className="text-gray-300 shrink-0" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0 pr-4"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button type="button" className="text-sm text-cyan-400 hover:text-[#A6FF5D] hover:underline transition">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-slate-950 font-semibold bg-gradient-to-r from-[#A6FF5D] to-cyan-400 hover:from-[#93f244] hover:to-cyan-300 shadow-lg shadow-[#A6FF5D]/20 hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() => setState((prev) => (prev === "login" ? "register" : "login"))}
          className="text-gray-300 text-sm mt-4 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-[#A6FF5D] hover:text-cyan-400 hover:underline ml-1 font-medium transition">
            click here
          </span>
        </p>
      </form>

      {/* Soft Backdrop */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[300px] bg-[#A6FF5D]/30 rounded-full blur-3xl" />
        <div className="absolute right-12 bottom-10 w-[400px] h-[200px] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Login;

// src/pages/LoginPage.jsx

import { use } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import { Navigate, useNavigate } from "react-router";

export default function Login() {
  const { signinWithGoogle } = use(AuthContext)
  const navigate = useNavigate()
  const loginForm = (e) => {
    e.preventDefault();
    // form submission logic here
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries())

    console.log(user);

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
              CB
            </div>
            <h2 className="text-xl text-white font-semibold">CampusBook</h2>
          </div>
          <p className="text-slate-300 text-sm">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={loginForm} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-slate-200">Email</label>
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-200">Password</label>
            <input
              type="password"
              name="password"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-indigo-300 text-xs hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg text-white text-sm font-medium shadow-lg"
          >
            Login
          </button>
        </form>

        {/* OR Line */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-white/20 `flex-grow`"></div>
          <span className="text-slate-300 text-xs">OR</span>
          <div className="h-px bg-white/20 `flex-grow`"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Google */}
          <button onClick={() => {
            signinWithGoogle()
              .then(() => {
                console.log('Google Signin successful');
                navigate('/');
              })
          }} className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-lg py-2.5 text-sm font-medium hover:bg-slate-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          {/* GitHub */}
          <button className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-slate-700 transition">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="h-5 w-5 invert"
            />
            Continue with GitHub
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-slate-300 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

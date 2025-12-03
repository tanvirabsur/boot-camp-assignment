// src/pages/RegisterPage.jsx

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center `bg-gradient-to-br` from-indigo-900 via-slate-900 to-slate-950 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
              CB
            </div>
            <h2 className="text-xl text-white font-semibold">CampusBook</h2>
          </div>
          <p className="text-slate-300 text-sm">Create your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="text-sm text-slate-200">Full Name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-200">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-200">Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-slate-200">Confirm Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Re-enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg text-white text-sm font-medium shadow-lg"
          >
            Register
          </button>
        </form>

        {/* OR line */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-white/20 `flex-grow`"></div>
          <span className="text-slate-300 text-xs">OR</span>
          <div className="h-px bg-white/20 `flex-grow`"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          {/* Google */}
          <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-lg py-2.5 text-sm font-medium hover:bg-slate-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Sign up with Google
          </button>

          {/* GitHub */}
          <button className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-slate-700 transition">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="h-5 w-5 invert"
            />
            Sign up with GitHub
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-slate-300 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

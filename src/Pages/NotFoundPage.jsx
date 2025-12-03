// src/pages/NotFoundPage.jsx

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 px-4 text-center relative overflow-hidden">

      {/* Floating circles (background effects) */}
      <div className="absolute -top-20 -left-20 h-60 w-60 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-pink-500/20 rounded-full blur-3xl animate-ping"></div>

      {/* Main 404 Text */}
      <h1 className="text-[120px] md:text-[180px] font-extrabold text-white tracking-widest leading-none drop-shadow-2xl">
        404
      </h1>

      {/* Subtext */}
      <p className="text-slate-300 text-lg md:text-xl mt-4 max-w-lg">
        Oops… The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Illustration */}
      <div className="mt-6 mb-10">
        <img
          src="https://illustrations.popsy.co/gray/error-bot.svg"
          alt="404 bot"
          className="w-56 md:w-64 opacity-90 animate-float"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg text-sm font-medium transition"
        >
          ⟵ Go Back Home
        </a>

        <a
          href="/colleges"
          className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-xl shadow-lg text-sm font-medium transition backdrop-blur-lg"
        >
          Browse Colleges
        </a>
      </div>

      {/* Floating animation for the illustration */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 md:flex-row md:py-24 lg:px-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Book college services in minutes
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-slate-100">
              Find the right college,
            </span>
            <span className="mt-2 inline bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              book facilities without confusion.
            </span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Compare colleges, check research & sports, and complete your
            admission process from one simple dashboard — no phone calls, no
            guesswork.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/colleges"
              className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600"
            >
              Browse Colleges
            </a>
            <a
              href="#search-college"
              className="rounded-full border border-slate-600/70 bg-white/5 px-5 py-2.5 text-xs font-medium text-slate-100 backdrop-blur-sm transition hover:border-slate-300 hover:bg-white/10"
            >
              Search by Name
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-slate-50">
                50+
              </span>
              <span className="max-w-[7rem] leading-snug">
                trusted colleges on this platform
              </span>
            </div>
            <span className="hidden h-7 w-px bg-slate-700/70 md:block" />
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full border border-slate-900 bg-slate-600" />
                <div className="h-6 w-6 rounded-full border border-slate-900 bg-slate-500" />
                <div className="h-6 w-6 rounded-full border border-slate-900 bg-slate-400" />
              </div>
              <span className="leading-snug">
                Loved by students & parents worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: mockup of booking card */}
        <div className="w-full md:w-1/2">
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between text-[10px] text-slate-300">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Recommended for you
              </span>
              <span className="rounded-full bg-slate-900/50 px-2 py-1 text-[9px] uppercase tracking-wide text-slate-400">
                Smart match
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {/* College 1 */}
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Horizon International College
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Admission: 15 Feb - 30 Mar
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Research: <span className="text-slate-100">120+</span> •
                      Events: Annual TechFest • Sports: Football, Cricket
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    4.7 ★
                  </span>
                </div>
                <a
                  href="/colleges/1"
                  className="mt-2 inline-flex text-[11px] font-medium text-indigo-300 hover:text-indigo-200"
                >
                  View details & book →
                </a>
              </div>

              {/* College 2 */}
              <div className="rounded-xl border border-white/5 bg-slate-900/40 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-50">
                      City Premier Science College
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Admission: 01 Apr - 20 May
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Research: <span className="text-slate-100">85+</span> •
                      Sports: Basketball, Swimming
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-medium text-indigo-300">
                    New
                  </span>
                </div>
              </div>

              {/* Mini progress */}
              <div className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Admission steps completed</span>
                  <span className="font-semibold text-emerald-300">2 / 4</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300" />
                </div>
                <p className="text-[10px] text-slate-400">
                  Finish your profile to get more accurate college matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

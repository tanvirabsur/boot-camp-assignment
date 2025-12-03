import React from 'react';

const HeroSection = () => {
    return (
       <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-slate-50"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 md:flex-row md:py-24 lg:px-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now accepting new candidates
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-slate-100">
              Find your next
            </span>
            <span className="mt-2 inline bg-gradient-to-r from-indigo-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              opportunity faster than ever.
            </span>
          </h1>

          {/* Sub text */}
          <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Get matched with real jobs, honest mentors, and a roadmap that
            actually makes sense. No spam, no fake promises — just practical
            help for your career.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="rounded-full bg-indigo-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600">
              Get Started Free
            </button>
            <button className="rounded-full border border-slate-600/70 bg-white/5 px-5 py-2.5 text-xs font-medium text-slate-100 backdrop-blur-sm transition hover:border-slate-400 hover:bg-white/10">
              Browse Open Roles
            </button>
          </div>

          {/* Small stats */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-slate-50">
                12K+
              </span>
              <span className="max-w-[7rem] leading-snug">
                candidates reached real interviews
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
                Backed by mentors from{" "}
                <span className="text-slate-200">FAANG & startups</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right mockup / card */}
        <div className="w-full md:w-1/2">
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur-md">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between text-[10px] text-slate-300">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live Job Matches
              </span>
              <span className="rounded-full bg-slate-900/50 px-2 py-1 text-[9px] uppercase tracking-wide text-slate-400">
                Auto-matched
              </span>
            </div>

            {/* Job tiles */}
            <div className="space-y-2.5">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Junior MERN Stack Developer
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Remote • Full-time • Entry level
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    92% match
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-300">
                  <span className="rounded-full bg-slate-800/90 px-2 py-0.5">
                    React
                  </span>
                  <span className="rounded-full bg-slate-800/90 px-2 py-0.5">
                    Node.js
                  </span>
                  <span className="rounded-full bg-slate-800/90 px-2 py-0.5">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-slate-900/40 p-3 text-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-50">
                      Frontend Intern (React)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Hybrid • 6 months • Internship
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-medium text-indigo-300">
                    New
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-300">
                  <span className="rounded-full bg-slate-800/90 px-2 py-0.5">
                    Tailwind
                  </span>
                  <span className="rounded-full bg-slate-800/90 px-2 py-0.5">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Progress / success */}
              <div className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Weekly progress</span>
                  <span className="font-semibold text-emerald-300">+38%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300" />
                </div>
                <p className="text-[10px] text-slate-400">
                  Based on applications, replies & interview calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;

// src/components/Navbar.jsx
import { useState } from "react";
// jodi React Router use koro: import { Link, NavLink } from "react-router-dom";

export default function NavBar({ isAuthenticated, userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Colleges", href: "/colleges" },
    { name: "Admission", href: "/admission" },
    { name: "My College", href: "/my-college" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-semibold">
            CB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              CampusBook
            </span>
            <span className="text-[11px] text-slate-500">
              College Booking Platform
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  // React Router use korle:
                  // <NavLink to={link.href} className={({isActive}) => ... }>
                  className="transition-colors hover:text-indigo-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Login/Profile */}
          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <a
                  href="/login"
                  className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition"
                >
                  Register
                </a>
              </>
            ) : (
              <a
                href="/profile"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                  {userName?.[0]?.toUpperCase() || "U"}
                </span>
                <span className="`max-w-[7rem]` truncate">
                  {userName || "User"}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile menu btn */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden border border-slate-200"
          aria-label="Toggle navigation"
        >
          <svg
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-1 px-4 py-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-2 py-2 text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-2">
              {!isAuthenticated ? (
                <>
                  <a
                    href="/login"
                    className="w-full text-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="w-full text-center rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition"
                  >
                    Register
                  </a>
                </>
              ) : (
                <a
                  href="/profile"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                    {userName?.[0]?.toUpperCase() || "U"}
                  </span>
                  <span>{userName || "User Profile"}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// src/components/Navbar.jsx
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Jobs", href: "#jobs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white font-semibold">
            PF
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              Path Finders
            </span>
            <span className="text-xs text-slate-500">
              Job Task Portal
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-indigo-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition">
              Login
            </button>
            <button className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

            <div className="mt-3 flex items-center gap-3">
              <button className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition">
                Login
              </button>
              <button className="flex-1 rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

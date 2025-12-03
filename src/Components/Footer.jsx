// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                CB
              </div>
              <h3 className="text-lg font-semibold text-white">
                CampusBook
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A simple way to explore colleges, compare research & sports, and
              complete admission without visiting the campus multiple times.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition" href="/">Home</a></li>
              <li><a className="hover:text-white transition" href="/colleges">Colleges</a></li>
              <li><a className="hover:text-white transition" href="/admission">Admission</a></li>
              <li><a className="hover:text-white transition" href="/my-college">My College</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition" href="#research">Research Papers</a></li>
              <li><a className="hover:text-white transition" href="#reviews">Student Reviews</a></li>
              <li><a className="hover:text-white transition" href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Get admission tips
            </h4>
            <p className="text-sm text-slate-400 mb-3">
              Subscribe for latest admission dates, scholarship alerts & guides.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} CampusBook. All rights reserved.
          </p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a className="hover:text-white transition" href="#">Privacy Policy</a>
            <a className="hover:text-white transition" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

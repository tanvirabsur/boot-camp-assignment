// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                PF
              </div>
              <h3 className="text-lg font-semibold text-white">
                Path Finders
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping people build their careers with real guidance, verified opportunities, 
              and a community that supports growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition" href="#home">Home</a></li>
              <li><a className="hover:text-white transition" href="#about">About</a></li>
              <li><a className="hover:text-white transition" href="#services">Services</a></li>
              <li><a className="hover:text-white transition" href="#jobs">Jobs</a></li>
              <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition" href="#">Blog</a></li>
              <li><a className="hover:text-white transition" href="#">FAQ</a></li>
              <li><a className="hover:text-white transition" href="#">Career Tips</a></li>
              <li><a className="hover:text-white transition" href="#">Case Studies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-3">
              Subscribe to get job alerts & career tips.
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

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Path Finders — All Rights Reserved.</p>

          <div className="flex gap-5 mt-3 md:mt-0">
            <a className="hover:text-white transition" href="#">Privacy Policy</a>
            <a className="hover:text-white transition" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

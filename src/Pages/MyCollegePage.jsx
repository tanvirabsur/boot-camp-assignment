// src/pages/MyCollegePage.jsx

export default function MyCollegePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-800">
            My College
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl">
            View your admitted college details and share your experience by
            adding a review with rating.
          </p>
        </div>

        {/* College Details + Candidate Info */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.9fr] mb-10">
          {/* College Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"
                alt="College"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 bottom-4 rounded-xl bg-black/60 px-4 py-2">
                <h2 className="text-sm md:text-base font-semibold text-white">
                  Horizon International College
                </h2>
                <p className="text-[11px] text-slate-200">
                  Dhaka, Bangladesh • ⭐ 4.7 / 5.0
                </p>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {/* Admission Info */}
              <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-800">
                    Admission Session:
                  </span>{" "}
                  2025-2026
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Admission Date:
                  </span>{" "}
                  18 Feb 2025
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Department:
                  </span>{" "}
                  BSc in Computer Science & Engineering
                </p>
              </div>

              {/* Short Events & Sports */}
              <div className="grid gap-3 md:grid-cols-2 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800 mb-1">
                    Events
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs md:text-[13px]">
                    <li>Annual TechFest</li>
                    <li>Robotics Expo</li>
                    <li>Cultural Night</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">
                    Sports Facilities
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs md:text-[13px]">
                    <li>Football & Cricket ground</li>
                    <li>Indoor Badminton court</li>
                    <li>Gym & fitness center</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Info */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              Your Admission Information
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">
                  Candidate Name:
                </span>{" "}
                Tanvir Absar
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Subject:
                </span>{" "}
                Computer Science & Engineering
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Email:
                </span>{" "}
                tanvir@example.com
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Phone:
                </span>{" "}
                +8801XXXXXXXXX
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Address:
                </span>{" "}
                Mirpur, Dhaka
              </p>
              <p>
                <span className="font-semibold text-slate-800">
                  Date of Birth:
                </span>{" "}
                12 June 2003
              </p>
            </div>
          </div>
        </div>

        {/* Add Review Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Add a Review for this College
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Rating */}
            <div className="mb-4">
              <p className="text-sm font-medium text-slate-800 mb-2">
                Rating
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  {/* static radios just design */}
                  <input
                    type="radio"
                    name="rating"
                    id="rating-1"
                    className="accent-yellow-500"
                  />
                  <label htmlFor="rating-1" className="text-slate-600 text-xs">
                    1
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="rating"
                    id="rating-2"
                    className="accent-yellow-500"
                  />
                  <label htmlFor="rating-2" className="text-slate-600 text-xs">
                    2
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="rating"
                    id="rating-3"
                    className="accent-yellow-500"
                    defaultChecked
                  />
                  <label htmlFor="rating-3" className="text-slate-600 text-xs">
                    3
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="rating"
                    id="rating-4"
                    className="accent-yellow-500"
                  />
                  <label htmlFor="rating-4" className="text-slate-600 text-xs">
                    4
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="rating"
                    id="rating-5"
                    className="accent-yellow-500"
                  />
                  <label htmlFor="rating-5" className="text-slate-600 text-xs">
                    5
                  </label>
                </div>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Select rating from 1 (Very Poor) to 5 (Excellent)
              </p>
            </div>

            {/* Review Textarea */}
            <div className="mb-4">
              <p className="text-sm font-medium text-slate-800 mb-2">
                Your Review
              </p>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Share your experience about this college, teachers, campus life, research & sports facilities..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
              >
                Submit Review
              </button>
            </div>

            <p className="mt-2 text-[11px] text-slate-400">
              *Later you will send this review to backend & also show it on the
              Home page reviews section.
            </p>
          </div>
        </div>

        {/* Existing Reviews by User (Dummy) */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Your Submitted Reviews
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-slate-800">
                  Horizon International College
                </p>
                <p className="text-xs text-yellow-500 font-semibold">
                  ★ 4.0 / 5
                </p>
              </div>
              <p className="text-xs text-slate-400 mb-2">
                Submitted on: 25 Feb 2025
              </p>
              <p className="text-sm text-slate-600">
                Great environment for learning and research. Teachers are
                friendly and helpful. Campus sports facilities are also very
                good, especially football & cricket ground.
              </p>
            </div>
          </div>
        </div>

        {/* Small note */}
        <p className="text-[11px] text-slate-400">
          *Design only. You can connect this page with admission form data
          & review system to update Home page reviews dynamically.
        </p>
      </div>
    </div>
  );
}

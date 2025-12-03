// src/components/FeaturedCollegesSection.jsx
import { useState, useMemo } from "react";

const featuredColleges = [
  {
    id: "horizon",
    name: "Horizon International College",
    image:
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
    admissionStart: "15 Feb 2025",
    admissionEnd: "30 Mar 2025",
    events: ["Annual TechFest", "Innovation Challenge"],
    researchCount: 120,
    researchFocus: "AI, Data Science, Robotics",
    sports: ["Football", "Cricket", "Basketball"],
    rating: 4.7,
  },
  {
    id: "city-science",
    name: "City Premier Science College",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    admissionStart: "01 Apr 2025",
    admissionEnd: "20 May 2025",
    events: ["Science Fair", "Robotics Expo"],
    researchCount: 85,
    researchFocus: "Physics, Renewable Energy, Chemistry",
    sports: ["Basketball", "Swimming"],
    rating: 4.5,
  },
  {
    id: "national-arts",
    name: "National Arts & Media College",
    image:
      "https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg",
    admissionStart: "10 Jan 2025",
    admissionEnd: "10 Mar 2025",
    events: ["Film Festival", "Cultural Week"],
    researchCount: 60,
    researchFocus: "Media Studies, Visual Arts, Communication",
    sports: ["Indoor Games", "Badminton"],
    rating: 4.3,
  },
];

export default function FeaturedCollegesSection() {
  const [search, setSearch] = useState("");

  const filteredColleges = useMemo(() => {
    if (!search.trim()) return featuredColleges;
    return featuredColleges.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section
      id="search-college"
      className="py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-800">
            Search Colleges & Featured Picks
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Search by college name or explore our top recommended colleges with
            rich research, events & sports facilities.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-10 max-w-xl">
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <svg
              className="h-4 w-4 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a college name..."
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <p className="mt-2 text-[11px] text-center text-slate-400">
            Try typing: Horizon, City Premier, National Arts
          </p>
        </div>

        {/* Cards */}
        {filteredColleges.length === 0 ? (
          <p className="text-center text-sm text-slate-500">
            No college found with this name. Try a different search.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CollegeCard({ college }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-yellow-300">
          ⭐ {college.rating.toFixed(1)} / 5.0
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">
          {college.name}
        </h3>

        {/* Admission dates */}
        <div className="mt-2 rounded-lg bg-slate-50 p-2 text-[11px] text-slate-600">
          <p className="font-medium text-slate-700">Admission Timeline</p>
          <p>
            From: <span className="font-medium">{college.admissionStart}</span>
          </p>
          <p>
            To: <span className="font-medium">{college.admissionEnd}</span>
          </p>
        </div>

        {/* Events & Research */}
        <div className="mt-3 space-y-1.5 text-[11px] text-slate-600">
          <p>
            <span className="font-semibold text-slate-700">Events:</span>{" "}
            {college.events.join(", ")}
          </p>
          <p>
            <span className="font-semibold text-slate-700">
              Research History:
            </span>{" "}
            {college.researchCount}+ projects • {college.researchFocus}
          </p>
          <p>
            <span className="font-semibold text-slate-700">Sports:</span>{" "}
            {college.sports.join(", ")}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between">
          <a
            href={`/colleges/${college.id}`}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
          >
            Details →
          </a>
          <a
            href="/admission"
            className="rounded-full bg-indigo-600 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-indigo-700 transition"
          >
            Book Admission
          </a>
        </div>
      </div>
    </div>
  );
}

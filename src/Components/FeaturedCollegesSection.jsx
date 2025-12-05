import { useState, useMemo } from "react";
import CollegeCard from "./CollegeCard";

// const featuredColleges = [
//   {
//     id: "horizon",
//     name: "Horizon International College",
//     image:
//       "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
//     admissionStart: "15 Feb 2025",
//     admissionEnd: "30 Mar 2025",
//     events: ["Annual TechFest", "Innovation Challenge"],
//     researchCount: 120,
//     researchFocus: "AI, Data Science, Robotics",
//     sports: ["Football", "Cricket", "Basketball"],
//     rating: 4.7,
//   },
//   {
//     id: "city-science",
//     name: "City Premier Science College",
//     image:
//       "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
//     admissionStart: "01 Apr 2025",
//     admissionEnd: "20 May 2025",
//     events: ["Science Fair", "Robotics Expo"],
//     researchCount: 85,
//     researchFocus: "Physics, Renewable Energy, Chemistry",
//     sports: ["Basketball", "Swimming"],
//     rating: 4.5,
//   },
//   {
//     id: "national-arts",
//     name: "National Arts & Media College",
//     image:
//       "https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg",
//     admissionStart: "10 Jan 2025",
//     admissionEnd: "10 Mar 2025",
//     events: ["Film Festival", "Cultural Week"],
//     researchCount: 60,
//     researchFocus: "Media Studies, Visual Arts, Communication",
//     sports: ["Indoor Games", "Badminton"],
//     rating: 4.3,
//   },
// ];

export default function FeaturedCollegesSection({ colleges = [] }) {
  const [search, setSearch] = useState("");

  // Derive the featured colleges from the `colleges` prop without extra state.
  const featuredColleges = useMemo(() => {
    return Array.isArray(colleges) ? colleges.slice(0, 3) : [];
  }, [colleges]);

  // const filteredColleges = useMemo(() => {
  //   if (!search.trim()) return featuredColleges;
  //   return featuredColleges.filter((college) =>
  //     college.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // }, [search]);

  return (
    <section
      id="search-college"
      className="py-16 `bg-gradient-to-b` from-white to-slate-50"
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
        {featuredColleges?.length === 0 ? (
          <p className="text-center text-sm text-slate-500">
            No college found with this name. Try a different search.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredColleges?.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


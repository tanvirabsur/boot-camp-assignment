import { useLoaderData } from "react-router";
import Loading from "../Components/Loading";
import CollegeCard from "../Components/CollegeCard";

export default function AllCollegesPage() {
  const colleges = useLoaderData();

  if (!colleges[0].colleges) return <Loading />;

  
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-800">
            All Colleges
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Explore all colleges available on CampusBook. Check ratings, research
            work, admission timeline and view detailed events & sports facilities.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {colleges[0].colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
}


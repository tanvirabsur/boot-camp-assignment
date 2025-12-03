import Loading from "../Components/Loading";
import useFetch from "../Hooks/useFetch";


export default function AllCollegesPage() {

  const {data} = useFetch('/dataOfclg.json')
  console.log(data.colleges);

  if (!data?.colleges) return <Loading />;

  
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
          {data?.colleges?.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
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

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        {/* Name & Location */}
        <div className="mb-2">
          <h2 className="text-sm font-semibold text-slate-800 line-clamp-2">
            {college.name}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">{college.location}</p>
        </div>

        {/* Admission Dates */}
        <div className="mt-2 rounded-lg bg-slate-50 p-2 text-[11px] text-slate-600">
          <p className="font-medium text-slate-700">Admission Timeline</p>
          <p>
            From:{" "}
            <span className="font-semibold">{college.admissionStart}</span>
          </p>
          <p>
            To: <span className="font-semibold">{college.admissionEnd}</span>
          </p>
        </div>

        {/* Research info */}
        <div className="mt-3 text-[11px] text-slate-600">
          <p>
            <span className="font-semibold text-slate-700">
              Research Projects:
            </span>{" "}
            {college.researchCount}+ completed
          </p>
        </div>

        {/* Events & Sports (short preview) */}
        <div className="mt-3 flex flex-col gap-1 text-[11px] text-slate-600">
          <p>
            <span className="font-semibold text-slate-700">Events:</span>{" "}
            {college.events.slice(0, 2).join(", ")}
            {college.events.length > 2 && " ..."}
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
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

// src/pages/CollegeDetailsPage.jsx
export default function CollegeDetails() {
  const { id } = useParams();

  const { data } = useFetch('/dataOfclg.json');
  const clg = data?.colleges?.find(college => college.id === id);

  if (!clg) return <Loading />;
  console.log(clg);
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Cover Image */}
      <div className="h-60 w-full overflow-hidden relative">
        <img
          src={clg.image || 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg'}
          alt="College"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
            {clg?.name || 'College Name'}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        {/* Basic Info */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            📍 Location: <span className="font-normal">{clg?.location || 'Location'}</span>
          </h2>
          <p className="text-slate-600 text-sm">
            ⭐ Rating: <span className="font-medium">{clg?.rating?.toFixed(1) || '4.7'} / 5.0</span>
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            🎓 Campus Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
              clg.gallery.map((imgUrl, index) => <div key={index} className="h-40 rounded-xl overflow-hidden">
                <img
                  src={imgUrl}
                  className="w-full h-full object-cover"
                />
              </div>)

            }

          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            📝 Admission Details
          </h3>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">
                Admission Start:
              </span>{" "}
              {clg?.admissionStart || '01 Jan 2025'}
            </p>
            <p className="text-sm text-slate-600 mb-4">
              <span className="font-semibold text-slate-800">
                Admission End:
              </span>{" "}
              {clg?.admissionEnd || '31 Mar 2025'}
            </p>

            <h4 className="font-semibold text-slate-700 mb-2">
              Admission Process:
            </h4>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              {
                clg.admissionProcess.map((step, index) => <li key={index}>{step}</li>)
              }
              <li>Create an account on the platform</li>
              {/* <li>Fill out the admission application form</li>
              <li>Upload all required academic documents</li>
              <li>Choose department & submit the form</li>
              <li>Pay admission fee through online gateway</li> */}
            </ul>
          </div>
        </div>

        {/* Events Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            🎉 Events & Activities
          </h3>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              {clg?.events?.map((event, index) => <li key={index}>{event}</li>)}
            </ul>
          </div>
        </div>

        {/* Research Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            🔬 Research Works
          </h3>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              <li>AI-based Student Performance Prediction (2024)</li>
              <li>Renewable Energy Efficiency Model (2023)</li>
              <li>Data Science on Climate Change Effects (2022)</li>
              <li>Robotics Automation for Smart Farming (2024)</li>
            </ul>
          </div>
        </div>

        {/* Sports Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            🏆 Sports Facilities
          </h3>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
              {clg?.sports?.map((sport, index) => <li key={index}>{sport}</li>)}
            </ul>
          </div>
        </div>

        {/* Back or Apply Buttons */}
        <div className="flex gap-3 mt-8">
          <a
            href="/colleges"
            className="px-5 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm hover:bg-slate-100 transition"
          >
            ← Back to Colleges
          </a>

          <a
            href="/admission"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
          >
            Apply for Admission
          </a>
        </div>
      </div>
    </div>
  );
}

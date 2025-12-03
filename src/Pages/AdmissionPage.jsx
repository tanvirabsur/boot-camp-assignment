// src/pages/AdmissionPage.jsx
import { useState } from "react";

const colleges = [
  "Horizon International College",
  "City Premier Science College",
  "National Arts & Media College",
  "South Valley Medical Institute",
  "Greenfield Business College",
];

export default function AdmissionPage() {
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-800">
            Admission Form
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
            Select a college and fill in your details to complete the admission
            process.
          </p>
        </div>

        {/* College List */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">
            Select College
          </h2>
          <div className="flex flex-wrap gap-3">
            {colleges.map((college) => (
              <button
                key={college}
                type="button"
                onClick={() => setSelectedCollege(college)}
                className={`rounded-full border px-4 py-2 text-xs md:text-sm transition ${
                  selectedCollege === college
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/70"
                }`}
              >
                {college}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Currently selected: <span className="font-semibold text-slate-700">{selectedCollege}</span>
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800 mb-4">
            Candidate Information
          </h2>

          <form className="space-y-4">
            {/* Candidate Name */}
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Candidate Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science & Engineering"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Candidate Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Candidate Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Present address (Area, City, Country)"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* DOB & Image */}
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Candidate Image
                </label>
                <input
                  type="file"
                  className="w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 p-2.5 text-xs text-slate-500 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white hover:file:bg-indigo-700"
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  Upload a clear passport size photo (JPG/PNG).
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
              >
                Submit Application
              </button>
            </div>

            <p className="mt-1 text-[11px] text-slate-400">
              (Later tumi ei data “My College” route e show korba & review
              system er sate connect korba.)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

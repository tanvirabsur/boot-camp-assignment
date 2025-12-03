// src/components/ResearchSection.jsx
const researchPapers = [
  {
    id: 1,
    title: "AI-Powered Student Performance Prediction",
    author: "Dept. of Computer Science - Horizon College",
    year: 2024,
    link: "#",
  },
  {
    id: 2,
    title: "Impact of Sports on Academic Growth",
    author: "National Arts & Media College",
    year: 2023,
    link: "#",
  },
  {
    id: 3,
    title: "Advancements in Renewable Energy Research",
    author: "City Premier Science College",
    year: 2024,
    link: "#",
  },
  {
    id: 4,
    title: "Modern Approaches of Mental Health in University Students",
    author: "South Valley Medical Institute",
    year: 2022,
    link: "#",
  },
];
  
export default function ResearchSection() {
  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-800">
            Research Papers by College Students
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Explore innovative research contributions from various colleges
          </p>
        </div>

        {/* Paper List */}
        <div className="space-y-5">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-slate-100 transition"
            >
              <h3 className="text-lg font-medium text-slate-800">
                {paper.title}
              </h3>

              <div className="flex flex-wrap justify-between text-sm text-slate-600 mt-2">
                <p className="max-w-md">{paper.author}</p>
                <p className="font-medium">{paper.year}</p>
              </div>

              {/* Link */}
              <a
                href={paper.link}
                className="inline-block mt-3 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition"
              >
                🔗 Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

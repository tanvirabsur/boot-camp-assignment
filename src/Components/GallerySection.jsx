// src/components/GallerySection.jsx

const galleryImages = [
  {
    id: 1,
    title: "Computer Science Graduates - 2024",
    college: "Horizon International College",
    src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
  },
  {
    id: 2,
    title: "Convocation Day Celebration",
    college: "City Premier Science College",
    src: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
  },
  {
    id: 3,
    title: "Graduates Group Photo",
    college: "National Arts & Media College",
    src: "https://images.pexels.com/photos/1184581/pexels-photo-1184581.jpeg",
  },
  {
    id: 4,
    title: "Final Year Batch",
    college: "South Valley Medical Institute",
    src: "https://images.pexels.com/photos/2678858/pexels-photo-2678858.jpeg",
  },
  {
    id: 5,
    title: "Campus Farewell Moment",
    college: "City Premier Science College",
    src: "https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg",
  },
  {
    id: 6,
    title: "Graduation Ceremony",
    college: "Horizon International College",
    src: "https://images.pexels.com/photos/2678857/pexels-photo-2678857.jpeg",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-slate-800">
            College Memories Gallery
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            A glimpse of graduation moments and group photos from different colleges
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text on bottom */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="rounded-xl bg-white/80 backdrop-blur-md p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {item.college}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small note */}
        <p className="mt-6 text-center text-xs text-slate-400">
          *All photos are sample placeholders. Replace them with real college gallery images.
        </p>
      </div>
    </section>
  );
}

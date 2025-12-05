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
export default CollegeCard;
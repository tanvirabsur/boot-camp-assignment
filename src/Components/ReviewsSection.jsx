
export default function ReviewsSection({reviews}) {

  
  return (
    <section
      id="reviews"
      className="py-16 `bg-gradient-to-b` from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-800">
            Student Reviews
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            See what students say about our recommended colleges
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews?.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.reviewerName}
                  className="h-12 w-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-medium text-slate-800">
                    {review.reviewerName}
                  </h4>
                  <p className="text-xs text-slate-500">{review.collegeId}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-500 text-sm">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                  <span key={idx} className="text-slate-300 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

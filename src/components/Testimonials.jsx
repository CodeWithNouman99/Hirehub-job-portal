import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      text: "HireHub helped me find a suitable frontend developer job quickly. The job search process was simple and easy to use.",
      name: "Ali Raza",
      role: "Frontend Developer",
      rating: "★★★★★",
    },
    {
      text: "I applied to multiple companies through HireHub and got interview calls within a few days.",
      name: "Sara Ahmed",
      role: "React Developer",
      rating: "★★★★★",
    },
    {
      text: "The platform is very useful for beginners who are looking for internships and junior developer roles.",
      name: "Usman Khan",
      role: "Junior Web Developer",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
            Success Stories
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Trusted by Job Seekers
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            See how HireHub helps candidates find better jobs, internships, and
            career opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-gray-50 border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-6 text-5xl text-teal-100 font-serif">
                ”
              </div>

              {/* Stars */}
              <div className="text-yellow-400 text-sm mb-4">
                {review.rating}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-7">
                “{review.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
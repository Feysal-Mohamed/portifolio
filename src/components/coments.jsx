import React from "react";

function Testimonials() {
  // Array of testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Developer",
      message:
        "This website is amazing! The design is clean and modern, and it works perfectly on all devices.",
      img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Graphic Designer",
      message:
        "I love the way everything is organized. The navigation is smooth, and the events section is so useful.",
      img: "https://images.pexels.com/photos/3837268/pexels-photo-3837268.jpeg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Entrepreneur",
      message:
        "Great work! I was able to contact you easily, and the response was fast and professional.",
      img: "https://images.pexels.com/photos/3888022/pexels-photo-3888022.jpeg",
    },
  ];

  return (
    // Main testimonials section
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Section title */}
     <div className="text-center mb-10">
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-4 border-orange-700 inline">
        Testimonials
      </h2>
     </div>

      {/* Grid for testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          // Individual testimonial card
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            {/* Avatar image */}
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>

            {/* Role */}
            <p className="text-gray-500 text-sm mb-3">{testimonial.role}</p>

            {/* Testimonial message */}
            <p className="text-gray-600 text-sm">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

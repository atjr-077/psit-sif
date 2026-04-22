import React from 'react';
import img1 from "../assets/download.jpg"
import img2 from "../assets/download (1).jpg"
import img3 from "../assets/raghvendra_sir.webp"
import img4 from "../assets/raguraj.jpg"
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mr. Pranveer Singh",
      role: "Chair Person",
      comment: "Welcome to PSIT, where we strive to nurture talent, inspire innovation, and empower students to achieve excellence.",
      imageSrc: `${img1}`
    },
    {
      name: "Dr. Manmohan Shukla",
      role: "Group Director",
      comment: "At PSIT, we are committed to providing quality education and shaping future leaders for a better tomorrow.",
      imageSrc: `${img2}`
    },
    {
      name: "Dr. Raghvendra Singh",
      role: " Director",
      comment: "Great balance of academics and extracurricular activities.",
      imageSrc: `${img3}`
    },
    {
      name: "Dr. Raghuraj Singh Suryavanshi",
      role: "Additional Director",
      comment: "Fostering innovation through excellence in teaching and research.",
      imageSrc: `${img4}`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="heading m-[70px]">
        <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
          Our Dignitaries
        </h2>
        <div className="flex justify-center">
          <div className="bg-green-500 h-[5px] w-[140px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-lg shadow-lg p-8 hover:shadow-xl 
                     bg-gradient-to-b from-green-50 to-white
                     transform hover:-translate-y-1 duration-200"
          >
            <div className="w-40 h-48 mb-6 overflow-hidden rounded-lg shadow-md border-2 border-green-200">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
              <h3 className="font-bold text-2xl text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-green-600 font-medium uppercase tracking-wider text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
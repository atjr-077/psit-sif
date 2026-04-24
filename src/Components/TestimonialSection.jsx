import React from 'react';
import img1 from "../assets/download.jpg"
import img2 from "../assets/download (1).jpg"
import img3 from "../assets/raghvendra_sir.webp"
import img4 from "../assets/raguraj.jpg"
const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mr. Pranveer Singh",
      role: "Chairman",
      comment: "Welcome to PSIT, where we strive to nurture talent, inspire innovation, and empower students to achieve excellence.",
      imageSrc: `${img1}`
    },
    {
      name: "Dr. Man Mohan Shukla",
      role: "Group Director",
      comment: "At PSIT, we are committed to providing quality education and shaping future leaders for a better tomorrow.",
      imageSrc: `${img2}`
    },
    {
      name: "Dr. Raghvendra Singh",
      role: "Director",
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
    <div className="section-container">
      <div className="section-heading-container">
        <h1 className="section-title">Our <span className="text-green-600">Dignitaries</span></h1>
        <div className="section-title-bar" />
        <p className="section-subtitle">
          Guided by the vision and leadership of our esteemed mentors who pave the way for academic and entrepreneurial excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="standard-card flex flex-col md:flex-row items-center p-8 gap-8 group"
          >
            <div className="w-48 h-56 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-green-100 group-hover:border-green-500 transition-colors duration-500">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="mb-6 relative">
                 <span className="text-4xl text-green-200 absolute -top-4 -left-2 font-serif">"</span>
                 <p className="text-gray-600 italic text-lg leading-relaxed relative z-10">{testimonial.comment}</p>
                 <span className="text-4xl text-green-200 absolute -bottom-8 -right-2 font-serif">"</span>
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-1 font-outfit">{testimonial.name}</h3>
              <p className="text-green-600 font-bold uppercase tracking-widest text-xs font-inter">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
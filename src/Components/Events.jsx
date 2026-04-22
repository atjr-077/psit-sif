import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import img from "../assets/events/TechSpire.jpg"
import img1 from "../assets/events/startup.jpg"
import img3 from "../assets/events/EE.jpg"
import img4 from "../assets/events/demoday.jpg"
import img5 from "../assets/events/hustlers.jpg"
import img6 from "../assets/events/startup2.jpg"
import img7 from "../assets/events/IPR2.jpeg"

// New event photos
import elevate26 from "../assets/events/elevate26.png"
import drone from "../assets/events/drone.jpg"
import presentation from "../assets/events/presentation.jpg"

const showcaseImages = [
  { url: elevate26, title: "ELEVATE '26 Startup Conclave", description: "Bringing together visionaries and investors to shape the future of innovation." },
  { url: img7, title: "Intellectual Property Rights Workshop", description: "Empowering innovators with knowledge of legal protections and patent filing." },
  { url: drone, title: "Drone Technology Workshop", description: "Hands-on experience in assembling and programming advanced UAV systems." },
  { url: presentation, title: "Innovation Showcase", description: "Startups presenting ground-breaking solutions to industry experts." }
];

const FeaturedEventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl mb-8">
      <div className="flex flex-col lg:flex-row">
        {/* Image container - Responsive height */}
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Content container - Better padding for mobile */}
        <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-green-100 to-green-50">
          <div className="mb-4 lg:mb-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-green-700 transition-colors">
              {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {event.description}
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href={event.url}
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white rounded-lg 
                       transform transition-all duration-300 hover:bg-green-700 hover:shadow-md
                       active:scale-95 text-base sm:text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridEventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-5 bg-gradient-to-b from-green-50 to-white text-center">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 group-hover:text-green-700 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-3 sm:mb-4">
          {event.description}
        </p>
        <a
          href={event.url}
          className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

const Event = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);

  const events = [
    {
      image: img1,
      title: 'StartUp Chacha 3.0',
      description: 'STARTUP CHARCHA 3.0, an exclusive talk show with Mr. Nitin Sharma, Founder of ROAD PILOT, as our esteemed chief guest. The engaging session sparked meaningful conversations and ignited entrepreneurial spirits. The event witnessed an overwhelming response from students, who benefited from Mr. Sharma valuable insights on entrepreneurship and innovation. We extend our gratitude to Mr. Sharma for sharing his expertise and inspiring the next generation of leaders.',
      url: '#'
    },
    {
      image: img3,
      title: 'Empowering Entrepreneurs',
      description: 'From February 12th to February 16th, 2024, aspiring entrepreneurs were treated to a transformative series of 20 workshops aimed at equipping them with essential management skills to thrive in today\'s competitive business landscape',
      url: '#'
    },
    {
      image: img4,
      title: 'Demoday',
      description: 'The DemoDay event, organized under the NIDHI ITBI initiative, was a dynamic platform designed to support and showcase innovative startups.',
      url: '#'
    },
    {
      image: img5,
      title: 'Hustlers',
      description: 'Dynamic energy filled the room at Hustlers as B-Tech first-year students engaged in an inspiring session with Sanchit Gupta, founder & CEO of Wyvate.',
      url: '#'
    },
    {
      image: img6,
      title: 'StartUp Charcha 2.0',
      description: 'The event featured an inspiring one-on-one conversation with Mr. Shivendra Gupta, Co-founder of Samocha and Tea Origin, and KOJO TEDxSpeaker.',
      url: '#'
    }
  ];

  const featuredEvents = events.slice(0, 2);
  const remainingEvents = events.slice(2);

  return (
    <div className=" py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="heading mb-10">
          <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
            Our Events
          </h2>
          <div className="flex justify-center">
            <div className="bg-green-500 h-[5px] w-[140px]" />
          </div>
        </div>

        {/* Showcase Carousel */}
        <div className="mb-10 sm:mb-14 lg:mb-16 relative group">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={showcaseImages[currentSlide].url}
                  alt={showcaseImages[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-6 sm:p-10 text-white">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    >
                      {showcaseImages[currentSlide].title}
                    </motion.h3>
                    <motion.p 
                       initial={{ y: 20, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl"
                    >
                      {showcaseImages[currentSlide].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 right-6 flex space-x-2">
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-green-500 w-6 sm:w-8' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events - Full Width */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          {featuredEvents.map((event, index) => (
            <FeaturedEventCard key={index} event={event} />
          ))}
        </div>

        {/* Remaining Events - Responsive Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 text-center">
            Past Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {remainingEvents.map((event, index) => (
              <GridEventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
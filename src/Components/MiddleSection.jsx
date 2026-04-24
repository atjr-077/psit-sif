import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Lightbulb, Users, BadgeDollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import itbiBoard from "../assets/itbi_board.png";
import innovationLogo from "../assets/innovation_cell_logo.png";

const MiddleSection = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const highlights = [
    { icon: <Target className="w-6 h-6" />, text: "Foster Innovation" },
    { icon: <Lightbulb className="w-6 h-6" />, text: "Support Startups" },
    { icon: <Users className="w-6 h-6" />, text: "Build Community" },
    { icon: <BadgeDollarSign className="w-6 h-6" />, text: "Provide Funding" }
  ];

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="section-heading-container">
          <h2 className="section-title">i-TBI Program</h2>
          <div className="section-title-bar" />
          <p className="section-subtitle">
            Inclusive TBI is a Department of Science & Technology (DST) initiative fostering innovation and entrepreneurship at HI and nearby geographies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            <div className="standard-card p-8 bg-gray-50/50">
              {/* Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {highlights.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-3 bg-white p-4 rounded-2xl text-green-600 border border-gray-100 shadow-sm transition-all transform hover:-translate-y-1 hover:shadow-md">
                    {item.icon}
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-700 text-center font-outfit">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Inclusive TBI is a three years duration initiative supported by the Department of Science & Technology (DST) for educational institutions who are likely to foster innovation and entrepreneurship culture among the students, faculties, entrepreneurs, and nearby communities. It is expected that students, innovators and entrepreneurs will take up innovative ideas/projects and with mentoring support from the academic and startup ecosystem and try to build a startup around the innovative idea/project.
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              <div className="standard-card">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand('criteria')}
                >
                  <h3 className="text-xl font-bold font-outfit text-gray-900">Program Criteria</h3>
                  {expandedSection === 'criteria' ? (
                    <ChevronUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600" />
                  )}
                </div>
                <AnimatePresence>
                  {expandedSection === 'criteria' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <div className="bg-gray-50 p-6 rounded-xl text-gray-700 space-y-3 border border-gray-100">
                        <p className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Individual Innovators or Startups: Open to students and entrepreneurs with innovative ideas.</p>
                        <p className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Stage of Idea: Should have a well-defined idea or an early-stage prototype.</p>
                        <p className="flex items-start gap-2"><span className="text-green-600 font-bold">•</span> Focus Areas: Alignment with societal, technological, or economic challenges.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="standard-card">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpand('vision')}
                >
                  <h3 className="text-xl font-bold font-outfit text-gray-900">Vision and Targets</h3>
                  {expandedSection === 'vision' ? (
                    <ChevronUp className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600" />
                  )}
                </div>
                <AnimatePresence>
                  {expandedSection === 'vision' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <div className="bg-gray-50 p-6 rounded-xl text-gray-700 space-y-6 border border-gray-100">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 font-outfit uppercase tracking-wider text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Vision
                          </h4>
                          <p>To foster a culture of innovation and entrepreneurship by transforming novel ideas into scalable startups, empowering individuals and communities.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2 font-outfit uppercase tracking-wider text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Target
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2"><span>•</span> Idea to Startup Conversion</li>
                            <li className="flex items-start gap-2"><span>•</span> Ecosystem Development in Host Institution</li>
                            <li className="flex items-start gap-2"><span>•</span> Prototype to Product Development support</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-[400px] w-full space-y-8">
            <div className="standard-card group p-6 bg-gradient-to-br from-green-500 to-green-700 border-none shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
              <div className="bg-white rounded-xl p-4 shadow-inner mb-6 transform group-hover:scale-105 transition-transform duration-500 relative z-10">
                <img src={itbiBoard} alt="DST Inclusive-TBI" className="w-full h-auto object-contain" />
              </div>
              <div className="text-center text-white relative z-10">
                <h3 className="text-2xl font-bold font-outfit mb-2">Start Your Journey</h3>
                <p className="text-green-50 opacity-90 text-sm">Join the innovation ecosystem and transform your vision into reality.</p>
              </div>
            </div>

            <div className="standard-card group p-6 bg-gradient-to-br from-green-600 to-green-800 border-none shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
              <div className="bg-white rounded-xl p-4 shadow-inner mb-6 transform group-hover:scale-105 transition-transform duration-500 relative z-10">
                <img src={innovationLogo} alt="Innovation Cell" className="w-full h-auto object-contain" />
              </div>
              <div className="text-center text-white relative z-10">
                <h3 className="text-2xl font-bold font-outfit mb-2">Build Your Future</h3>
                <p className="text-green-50 opacity-90 text-sm">Empowering tomorrow's entrepreneurs with world-class mentorship and resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
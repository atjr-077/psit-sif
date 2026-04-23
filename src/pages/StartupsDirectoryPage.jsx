import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Filter, Globe, Users, Target, Rocket, Briefcase,
  ExternalLink, ChevronRight, LayoutGrid, List
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const startupData = [
  { name: "Senseoriginal Technologies", founders: "Mohammed Saalim / Harshit Goel", industry: "IoT, SaaS & Deeptech", stage: "Early Revenue", website: "senseoriginal.com", logo: "C:\Users\tiwar\Downloads\WhatsApp Image 2026-04-22 at 14.00.45.jpeg" },
  { name: "Ochaat Pvt Ltd", founders: "Somnath Das / Dr Manish Kumar", industry: "Finance & Electronics", stage: "Pre-seed", website: "ochaat.in" },
  { name: "KCKM Pvt Ltd", founders: "Somnath Das / Dr Manish Kumar", industry: "Electronics", stage: "Pre-seed", website: "" },
  { name: "Good Ferment Beverages", founders: "Yash Raj Bhatia", industry: "Food Technology", stage: "Pre-Seed", website: "baykombucha.com" },
  { name: "Strinity Automation", founders: "Nishant Pal", industry: "Tech-Furniture", stage: "Development", website: "strinityautomation.in" },
  { name: "Samocha", founders: "Shivendra Gupta", industry: "Food & Beverage", stage: "Growth/Scale", website: "samocha.co" },
  { name: "Dualite Technology", founders: "Prakhar Tandon", industry: "SaaS", stage: "Development", website: "dualite.dev" },
  { name: "BharatOne Care", founders: "Naman Agarwal", industry: "Healthcare", stage: "Pre-Seed", website: "bharatonecare.com" },
  { name: "FluxVisio Dynamics", founders: "Shreyansh Shukla / Ishita Chaturvedi", industry: "AI, Fintech", stage: "Pre-seed", website: "" },
  { name: "Soulo LLP", founders: "Arpan Shukla / Shriyaansh Shukla", industry: "AI, IoT, Sustainability", stage: "Development", website: "soulo.co.in" },
  { name: "Wyvate Tech", founders: "Sanchit Gupta", industry: "SaaS/Enterprise Software", stage: "Development", website: "wyvate.com" },
  { name: "Greenhale Wellness (Kojo Life)", founders: "Akash Sagar", industry: "Personal Care", stage: "Growth/Scale", website: "kojolife.com" },
  { name: "Shakti Wearables", founders: "Srishti Sharma", industry: "Deep Tech / IoT", stage: "Development", website: "shaktiwearables.com" },
  { name: "EPR Recyclers", founders: "Kohima Dhandhania", industry: "Sustainability", stage: "Scaling", website: "eprrecycler.com" },
  { name: "Srishti Sharma LLP", founders: "Srishti Sharma", industry: "Deep Tech / IoT", stage: "Development", website: "shaktiwearables.com" },
  { name: "Avyukt Core Technology", founders: "Anshuman Singh / Shreya Mishra / Anuj Shukla", industry: "IT", stage: "Scaling", website: "avyuktcoretechnologies.com" },
  { name: "Nutty Village (Freshily19)", founders: "Aman Kumar", industry: "Agri-Tech / Food", stage: "Early Revenue", website: "" },
  { name: "VN Organics", founders: "Nisha Niranjan", industry: "Food & Beverages", stage: "MVP", website: "" },
  { name: "100service (Homivo)", founders: "Harsh Katiyar", industry: "Home Services", stage: "Early Revenue", website: "100service.in" },
  { name: "Edubuk Technologies", founders: "Shivani Mehrotra", industry: "Education, Blockchain, AI", stage: "Early Revenue", website: "edubuk.io" },
  { name: "Samrupa Tech LLP", founders: "Samar Choudhury", industry: "Automobile, Sustainability", stage: "Prototyping", website: "samrupa.com" },
  { name: "Saat Phere", founders: "Manoj Kumar", industry: "Wedding & Events, AI", stage: "Early Revenue", website: "saat-phere.in" },
  { name: "Clean Vitals (Dassonz)", founders: "Dr. Soumyakant Das", industry: "Food & Health Tech", stage: "Early Revenue", website: "cleanvitals.com" },
  { name: "Campus Haat", founders: "Guddu Kumar", industry: "FoodTech", stage: "Early Revenue", website: "campushaat.com" },
  { name: "GreenArrive", founders: "Shubham Gupta / Sachin Sengar", industry: "Agritech", stage: "Early Revenue", website: "" },
  { name: "Tepi AI", founders: "Akshita Bhardwaj", industry: "Education, AI", stage: "Ideation", website: "tepiai.com" },
  { name: "Raman Research & Innovation", founders: "Lavitra Sahu", industry: "Robotics / IoT", stage: "Ideation", website: "wegyanik.in" },
  { name: "ADAS Power Solutions", founders: "Dhruv Agarwal", industry: "Technology Hardware", stage: "Prototyping", website: "" },
  { name: "RaySync Innovation", founders: "Gaurav Tiwari", industry: "IoT", stage: "Ideation", website: "raysyncinnovation.in" },
  { name: "Tackle Studioz", founders: "Aryan Bajpai", industry: "IT Services", stage: "—", website: "tacklestudioz.com" },
  { name: "Arixolve Ventures", founders: "Anmol Mishra", industry: "IT Services", stage: "—", website: "" },
  { name: "RASS Neuro Dynamics", founders: "Sparsh Verma", industry: "IoT / Automation", stage: "Early Traction", website: "" },
  { name: "VOIKES Technologies", founders: "Ananvay Pandey", industry: "Human-Centric / Med-Tech", stage: "—", website: "voikes.framer.website" },
  { name: "Trinova Innovation", founders: "Akash Sahu", industry: "IoT Technology", stage: "—", website: "" },
  { name: "Aarush Eco Tech", founders: "Dr. Amit Singh Chauhan", industry: "AI/ML", stage: "—", website: "ecotech.co.in" },
  { name: "Thinktechno / Adflix", founders: "Ms. Anannya Sharma", industry: "AI/ML", stage: "—", website: "exhiby.in" },
  { name: "Fibra Clothing", founders: "Yogesh Singh", industry: "Textile & Apparel", stage: "—", website: "" },
  { name: "Edufutura", founders: "Nishant Dixit", industry: "IT Services", stage: "—", website: "" },
  { name: "Kanpur Aero Modelling Club", founders: "Aditya Kumar Kushwaha", industry: "Education Technology", stage: "—", website: "" },
  { name: "Zerythron", founders: "Mo Ryan Yunus", industry: "Waste Management", stage: "—", website: "" }
].map((s, i) => ({
  ...s,
  id: i,
  about: `Innovative startup specializing in ${s.industry}. Focused on ${s.stage} growth and led by ${s.founders}.`
}));

const StartupDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const industries = useMemo(() => {
    const sets = new Set(startupData.map(s => {
      // Split by comma and trim to get individual sectors
      return s.industry.split(',')[0].trim();
    }));
    return ['All', ...Array.from(sets)].sort();
  }, []);

  const filteredStartups = useMemo(() => {
    return startupData.filter(startup => {
      const matchesSearch =
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.founders.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.industry.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry = selectedIndustry === 'All' || startup.industry.includes(selectedIndustry);

      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustry]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Startup <span className="text-green-600">Directory</span>
              </h1>
              <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the vibrant ecosystem of PSIT-SIF incubated startups. From deep-tech innovation to sustainable solutions, discover the future leaders of the industry.
              </p>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 sticky top-20 z-30 transition-shadow hover:shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, founder, or industry..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative w-full md:w-48">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-gray-700 appearance-none cursor-pointer"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                    title="Grid View"
                  >
                    <LayoutGrid title="Grid Layout" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                    title="List View"
                  >
                    <List title="List Layout" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center px-2">
            <span className="text-gray-500 text-sm font-medium">
              Showing {filteredStartups.length} startup{filteredStartups.length !== 1 ? 's' : ''}
            </span>
            {(searchTerm || selectedIndustry !== 'All') && (
              <button
                onClick={() => { setSearchTerm(''); setSelectedIndustry('All'); }}
                className="text-green-600 text-sm font-semibold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Startups Grid/List */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className={viewMode === 'grid'
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
              }
            >
              {filteredStartups.length > 0 ? (
                filteredStartups.map((startup) => (
                  <StartupCard key={startup.id} startup={startup} viewMode={viewMode} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-300">
                  <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No startups found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const StartupCard = ({ startup, viewMode }) => {
  const isGrid = viewMode === 'grid';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-green-100 group flex ${isGrid ? 'flex-col' : 'flex-row items-center p-4'}`}
    >
      <div className={`${isGrid ? 'p-6 flex-grow' : 'flex-grow px-4'}`}>
        <div className="flex justify-between items-start mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center text-green-600 group-hover:from-green-600 group-hover:to-emerald-600 group-hover:text-white transition-all duration-300 ${isGrid ? '' : 'flex-shrink-0 mr-4'}`}>
            <Rocket className="w-6 h-6" />
          </div>
          {startup.website && (
            <a
              href={`https://${startup.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-600 transition-colors"
              title="Visit Website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1 line-clamp-1">
            {startup.name}
          </h3>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Briefcase className="w-3.5 h-3.5 mr-1" />
            <span className="line-clamp-1">{startup.industry}</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start text-sm">
              <Users className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
              <span className="text-gray-600 font-medium line-clamp-1">{startup.founders}</span>
            </div>

            <div className="flex items-center text-xs">
              <span className={`px-2 py-1 rounded-full font-bold uppercase tracking-wider ${startup.stage === 'Early Revenue' || startup.stage === 'Scaling' || startup.stage === 'Growth/Scale'
                  ? 'bg-blue-50 text-blue-600'
                  : startup.stage === 'Pre-seed' || startup.stage === 'Pre-Seed'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                {startup.stage === '—' ? 'Undisclosed' : startup.stage}
              </span>
            </div>

            {isGrid && (
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 pt-2 border-t border-gray-50 mt-2">
                {startup.about}
              </p>
            )}
          </div>
        </div>
      </div>

      {isGrid && (
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 rounded-b-2xl group-hover:bg-green-50/30 transition-colors">
          <button className="w-full flex items-center justify-center text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
            View Details <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default StartupDirectoryPage;

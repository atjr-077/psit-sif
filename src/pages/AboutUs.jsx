import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="heading mb-10 mt-10">
          <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
            About Us
          </h2>
          <div className="flex justify-center">
            <div className="bg-green-500 h-[5px] w-[140px]" />
          </div>
        </div>

        {/* Introduction Text */}
        <div className="mt-8 text-lg md:text-xl lg:text-2xl text-neutral-600 space-y-8 max-w-4xl mx-auto text-center">
          <p>
            PSIT Startup and Incubation Foundation (PSIT-SIF) is a dedicated initiative
            fostering innovation and entrepreneurship at Pranveer Singh Institute of
            Technology (PSIT), Kanpur. Inspired by the innovative spirit of IIT Kanpur,
            PSIT-SIF aims to build a robust startup ecosystem by providing aspiring
            entrepreneurs with the necessary resources, mentorship, and support to
            transform their ideas into successful ventures.
          </p>

          <p>
            Our Startup Incubation Centre stands at the forefront of India's innovation ecosystem,
            empowering students, transforming industries, and fueling economic growth. We offer a
            comprehensive support system that includes expert mentorship, access to state-of-the-art
            facilities, networking opportunities, and financial support to help startups thrive.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="py-10 bg-gradient-to-r from-green-50 to-green-100 mt-6">
          <div className="heading mb-10">
            <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
              Key Features
            </h2>
            <div className="flex justify-center">
              <div className="bg-green-500 h-[5px] w-[140px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                title: "Seed Funding",
                image: "/fet1.png",
                description: "Access to financial assistance to kick-start your venture. Helping startups prepare for fundraising and investor pitches."
              },
              {
                title: "Mentorship",
                image: "/fet2.png",
                description: "Guidance from industry experts to navigate challenges and seize opportunities."
              },
              {
                title: "Infrastructure",
                image: "/fet3.png",
                description: "State-of-the-art facilities and workspaces to foster innovation."
              },
              {
                title: "Networking",
                image: "/fet4.png",
                description: "Connect with investors, industry leaders, and fellow entrepreneurs."
              },
              {
                title: "Training & Workshops",
                image: "/fet5.png",
                description: "Enhance skills and knowledge through specialized training sessions."
              },
              {
                title: "Community and Collaboration",
                image: "/fet6.png",
                description: "Creating a collaborative environment where startups can interact and learn from each other."
              }
            ].map((feature, index) => (
              <div key={index} className="card flex flex-col bg-white shadow-md border border-slate-200 rounded-lg">
                <div className="relative w-full h-32 overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="mb-2 text-slate-800 text-xl md:text-2xl font-semibold">{feature.title}</h2>
                  <p className="text-slate-600 text-sm leading-normal">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fueling Innovation Section */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <div className="heading mb-10">
                <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
                  Fueling Innovation at PSIT-SIF
                </h2>
                <div className="flex justify-center">
                  <div className="bg-green-500 h-[5px] w-[300px]" />
                </div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center">
                At PSIT-SIF, we believe in the power of innovation to drive meaningful
                change and create a lasting impact on society. Our incubation programs
                are carefully designed to equip the next generation of entrepreneurs
                with the essential tools, mentorship, and resources needed to transform
                their ideas into successful ventures. Through a dynamic ecosystem of
                expert guidance, networking opportunities, and financial support, we
                empower aspiring innovators to navigate challenges, refine their business
                models, and bring groundbreaking solutions to life.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                className="w-full max-w-md mx-auto"
                src="/fet7.png"
                alt="Innovation illustration"
              />
            </div>
          </div>
        </div>

        {/* Focus Area Section */}
        <div className="py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img
                className="w-full max-w-md mx-auto"
                src="/fet8.png"
                alt="Emerging Technology"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="heading mb-10">
                <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
                  Focus Area: Emerging Technologies
                </h2>
                <div className="flex justify-center">
                  <div className="bg-green-500 h-[5px] w-[300px]" />
                </div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center">
                PSIT-SIF is actively supporting startups in cutting-edge fields like Artificial Intelligence (AI),
                Machine Learning (ML), and Wearable Devices. Whether it's developing AI-powered solutions,
                revolutionizing healthcare with innovative wearable technology, enhancing user experiences
                with smart gadgets, or creating intelligent devices for the future, PSIT-SIF provides a
                launchpad with mentorship, resources, and networking opportunities to turn groundbreaking
                ideas into reality.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-green-100 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="heading mb-10">
              <h2 className="flex justify-center font-semibold text-5xl text-black pb-5">
                Success Stories
              </h2>
              <div className="flex justify-center">
                <div className="bg-green-500 h-[5px] w-[180px]" />
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 h-1 w-32 md:w-40" />
            </div>
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl text-gray-600">
              <p>
                One of our notable incubated startups, <span className="font-semibold text-gray-800">Dualite</span>, successfully
                secured funding from <span className="font-semibold text-gray-800">100X.VC</span>, showcasing the profound impact
                of our incubation and mentorship programs in nurturing groundbreaking innovations.
              </p>
              <p>
                With an unwavering commitment to fostering an entrepreneurial culture, <span className="font-semibold text-gray-800">PSIT-SIF</span> is actively
                shaping the future of innovation and startup success, both at <span className="font-semibold text-gray-800">PSIT</span> and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

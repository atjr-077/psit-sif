import React from 'react';
import startupRoom from '../assets/facilities/startupRoom.png';
import researchSpace from '../assets/facilities/lab.png';
import discussionRoom from '../assets/facilities/conference.png';
import library from '../assets/facilities/library.png';
import conferenceHall from '../assets/facilities/conference.png';
import computerLab from '../assets/facilities/compLab.png';


/* import startupRoom from '../assets/a.jpg';
import researchSpace from '../assets/a.jpg';
import discussionRoom from '../assets/a.jpg';
import innovationLab from '../assets/a.jpg';
import conferenceHall from '../assets/a.jpg';
import computerLab from '../assets/a.jpg'; */


// { title: "Library", description: , image: library },

const facilities = [
    { title: "Startup Room", description: "A dedicated space for budding entrepreneurs to brainstorm and develop their ideas.", image: startupRoom },
    { title: "Cutting-edge Research Space", description: "Equipped with modern tools and technologies for advanced research and development.", image: researchSpace },
    { title: "Group Discussion Room", description: "A collaborative space designed for team meetings and brainstorming sessions.", image: discussionRoom },
    { title: "Library", description: "A vast collection of books, research papers, and digital resources for academic enrichment.", image: library },
    { title: "Conference Hall", description: "Spacious hall for seminars, guest lectures, and industry interactions.", image: conferenceHall },
    { title: "Computer Lab", description: "State-of-the-art systems for programming, simulations, and research.", image: computerLab }
];

const Facilities = () => {
    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="heading mb-10 text-center">
                    <h2 className="font-semibold text-5xl text-black pb-5">Facilities</h2>
                    <div className="flex justify-center">
                    <div className="bg-green-500 h-[5px] w-[140px]" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
                    {facilities.map((facility, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
                            <img src={facility.image} alt={facility.title} className="w-full h-80 object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent text-center p-4">
                                <h3 className="text-xl font-semibold text-white">{facility.title}</h3>
                                <p className="text-sm text-gray-200 mt-1">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facilities;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BenifitedStartupPage from './pages/StartupsDirectoryPage';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/startups" element={<BenifitedStartupPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;

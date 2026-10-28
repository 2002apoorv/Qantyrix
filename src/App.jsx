import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FounderPage from './pages/FounderPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-main-layout">
        {/* Navigation Bar */}
        <Navbar onOpenContact={openContact} />

        {/* Routed Pages */}
        <main className="main-content-flow">
          <Routes>
            <Route path="/" element={<HomePage onOpenContact={openContact} />} />
            <Route path="/works" element={<WorksPage onOpenContact={openContact} />} />
            <Route path="/services" element={<ServicesPage onOpenContact={openContact} />} />
            <Route path="/about" element={<AboutPage onOpenContact={openContact} />} />
            <Route path="/founder" element={<FounderPage onOpenContact={openContact} />} />
            <Route path="/why-us" element={<WhyUsPage onOpenContact={openContact} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/counselling" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenContact={openContact} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenContact={openContact} />

        {/* Interactive Consultation Modal */}
        <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      </div>
    </BrowserRouter>
  );
}

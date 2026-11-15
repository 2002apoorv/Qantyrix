import React from 'react';
import Hero from '../components/Hero';
import ClientTrust from '../components/ClientTrust';
import AboutSection from '../components/AboutSection';
import OrangeBanner from '../components/OrangeBanner';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import TechStackSection from '../components/TechStackSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FounderSection from '../components/FounderSection';

export default function HomePage({ onOpenContact }) {
  return (
    <div className="home-page-container">
      {/* Hero Section with Headline & Mockup Cards */}
      <Hero onOpenContact={onOpenContact} />

      {/* Enterprise Tech Ecosystem Logos */}
      <ClientTrust />

      {/* About Section with Big Typography & Metrics */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* Ambient Blue Banner */}
      <OrangeBanner onOpenContact={onOpenContact} />

      {/* Interactive Services Section */}
      <ServicesSection onOpenContact={onOpenContact} />

      {/* Specialized Industries Section */}
      <IndustriesSection onOpenContact={onOpenContact} />

      {/* Enterprise Tech Stack & Tooling Section */}
      <TechStackSection onOpenContact={onOpenContact} />

      {/* 6-Card Bento Grid: Why Choose Us */}
      <WhyChooseUs />

      {/* Leadership & Co-Founders Spotlight */}
      <FounderSection onOpenContact={onOpenContact} />
    </div>
  );
}

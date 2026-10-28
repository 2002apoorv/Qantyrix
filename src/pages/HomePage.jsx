import React from 'react';
import Hero from '../components/Hero';
import ClientTrust from '../components/ClientTrust';
import AboutSection from '../components/AboutSection';
import OrangeBanner from '../components/OrangeBanner';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FounderSection from '../components/FounderSection';
import WorksSection from '../components/WorksSection';

export default function HomePage({ onOpenContact }) {
  return (
    <div className="home-page-container">
      {/* Hero Section with Headline & Mockup Cards */}
      <Hero onOpenContact={onOpenContact} />

      {/* Enterprise Tech Ecosystem Logos */}
      <ClientTrust />

      {/* About Section with Big Typography & Metrics */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* Radiant Orange Ambient Banner */}
      <OrangeBanner onOpenContact={onOpenContact} />

      {/* Interactive Services Section */}
      <ServicesSection onOpenContact={onOpenContact} />

      {/* 6-Card Bento Grid: Why Choose Us */}
      <WhyChooseUs />

      {/* Leadership & Founder Spotlight */}
      <FounderSection onOpenContact={onOpenContact} />

      {/* Featured Works Showcase */}
      <WorksSection onOpenContact={onOpenContact} />
    </div>
  );
}

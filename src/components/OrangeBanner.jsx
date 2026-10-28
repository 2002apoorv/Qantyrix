import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function OrangeBanner({ onOpenContact }) {
  return (
    <section className="orange-banner-section">
      <div className="orange-banner-glow-backdrop"></div>
      <div className="orange-banner-container">
        <div className="banner-content">
          <div className="banner-badge">
            <Sparkles size={16} />
            <span>Enterprise-Grade Delivery</span>
          </div>
          <h2 className="banner-headline">
            We’re proudly serving modern enterprises with world-class engineering. 
            We provide seasoned resources, Google-certified architects, and top data talent.
          </h2>
        </div>
        <div className="banner-action">
          <button 
            className="btn-banner-action" 
            onClick={onOpenContact}
            id="banner-consultation-btn"
          >
            <span>Book Strategy Session</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

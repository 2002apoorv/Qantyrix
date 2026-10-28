import React from 'react';
import { 
  Users, 
  ShieldAlert, 
  Award, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Headphones,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Users,
      title: 'Senior Engineers Only',
      desc: 'No junior experimentation on client infrastructure. Every project is led by 5+ year certified senior data architects and ML engineers.'
    },
    {
      icon: Headphones,
      title: '24/7 Safety Net',
      desc: 'Production data emergencies do not wait for business hours. We provide priority SLA coverage with night and weekend on-call support.'
    },
    {
      icon: Award,
      title: 'Battle-Tested Expertise',
      desc: 'Proven methodologies refined across 250+ enterprise rollouts, terabyte-scale data lakes, and mission-critical cloud databases.'
    },
    {
      icon: Clock,
      title: 'Fix It in Hours',
      desc: 'Guaranteed rapid resolution for crashed ETL pipelines, query timeouts, memory leaks, and broken schema migrations.'
    },
    {
      icon: DollarSign,
      title: 'Zero Guesswork Pricing',
      desc: 'Transparent flat-rate or milestone billing with upfront scope, timeline commitments, and estimated cloud ROI before any work begins.'
    },
    {
      icon: TrendingUp,
      title: 'Always Scaling Architecture',
      desc: 'We build systems to handle 10X data volume surges without expensive architectural rewrites or infrastructure redesigns.'
    }
  ];

  return (
    <section id="why-us" className="why-choose-section">
      <div className="why-choose-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Why Choose Us</span>
        </div>

        {/* Section Headline */}
        <h2 className="why-choose-headline">
          Expertise that makes the difference
        </h2>

        {/* Bento Grid (6 cards matching the reference layout) */}
        <div className="bento-grid">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bento-card">
                <div className="bento-icon-box">
                  <Icon size={20} className="bento-icon" />
                </div>
                <h3 className="bento-card-title">{item.title}</h3>
                <p className="bento-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

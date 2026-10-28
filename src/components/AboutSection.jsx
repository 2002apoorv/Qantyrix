import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  const stats = [
    {
      value: '250+',
      label: 'SUCCESSFUL DATA PROJECTS & PIPELINES COMPLETED'
    },
    {
      value: '99.2%',
      label: 'CLIENTS ACHIEVE THEIR ANALYTICAL & SLA GOALS'
    },
    {
      value: '$3.5M+',
      label: 'SAVED IN POTENTIAL CLOUD COMPUTE & TECHNICAL DEBT'
    },
    {
      value: '12+',
      label: 'YEARS OF COMBINED SPECIALIZED DATA & AI EXPERTISE'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>About Qantyrix Tech</span>
        </div>

        {/* Lead Headline */}
        <h2 className="about-main-headline">
          We’re an enterprise data engineering & AI consultancy architecting 
          expressive analytics, resilient data pipelines, and cyber-hardened systems. 
          With a streamlined delivery process and battle-tested team, we turn raw 
          complexity into decisive, lasting intelligence.
        </h2>

        {/* Dual Support Columns */}
        <div className="about-columns-grid">
          <div className="about-col">
            <p className="about-paragraph">
              With extensive hands-on experience in high-growth tech firms and Fortune 500 
              collaborations, our team of senior data professionals specializes in tackling 
              complex data extraction, ETL pipelines, machine learning models, and security 
              compliance across hybrid cloud and multi-cloud environments.
            </p>
          </div>
          <div className="about-col">
            <p className="about-paragraph">
              Beyond solving immediate bottlenecks, we architect data platforms with 
              long-term scalability in mind. We help future-proof your digital assets for 
              10X analytical growth, sub-second query performance, and effortless regulatory 
              compliance.
            </p>
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card-item">
              <div className="stat-number-display">{stat.value}</div>
              <div className="stat-label-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

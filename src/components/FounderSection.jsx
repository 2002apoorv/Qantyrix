import React from 'react';
import { 
  Award, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle,
  ExternalLink,
  Code2,
  Database,
  Cloud
} from 'lucide-react';

function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function FounderSection({ onOpenContact }) {
  const certifications = [
    'Google Cloud Certified - Cloud Digital Leader',
    'Google Data Analytics Specialization',
    'AI 201: GL Certified AI Professional - Data Science',
    'Power BI Essential Training',
    'Google Project Management'
  ];

  const coreTools = [
    'Python & R',
    'Snowflake & BigQuery',
    'AWS RedShift & RDS',
    'Apache NiFi & AWS Glue',
    'Tableau & Power BI',
    'NLP & Deep Learning',
    'Azure Synapse',
    'SQL Optimization'
  ];

  return (
    <section id="founder" className="founder-section">
      <div className="founder-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Leadership & Founder</span>
        </div>

        <div className="founder-grid">
          {/* Left Column: Visual Profile Card */}
          <div className="founder-profile-card">
            <div className="founder-avatar-wrap">
              <div className="founder-initials-badge">
                <span>AS</span>
              </div>
              <div className="founder-verified-indicator">
                <CheckCircle size={18} className="verified-icon" />
              </div>
            </div>

            <div className="founder-identity">
              <h3 className="founder-name">Akshda Shandilya</h3>
              <p className="founder-role">Founder & Principal Data Architect</p>
              <div className="founder-location">
                <MapPin size={14} className="text-orange" />
                <span>New York City Metropolitan Area</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="founder-contact-actions">
              <a 
                href="mailto:akshdashandilya@gmail.com" 
                className="btn-founder-contact"
                title="Send Email"
              >
                <Mail size={16} />
                <span>Email Akshda</span>
              </a>

              <a 
                href="tel:+19733702024" 
                className="btn-founder-contact secondary"
                title="Direct Phone"
              >
                <Phone size={16} />
                <span>(973) 370-2024</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/akshda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-founder-contact linkedin"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={12} className="link-arrow" />
              </a>
            </div>

            {/* Quick Education Badge */}
            <div className="founder-edu-box">
              <GraduationCap size={18} className="text-orange" />
              <div className="edu-text">
                <strong>M.S. in Business Analytics & Data Science</strong>
                <span>New Jersey City University</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Track Record */}
          <div className="founder-content-panel">
            <h2 className="founder-panel-title">
              Engineering high-concurrency data intelligence with mathematical precision
            </h2>

            <p className="founder-bio-lead">
              Hello! I am Akshda, a seasoned data professional and engineer with over 5+ years of specialized experience in Data Extraction, Exploration, Modeling, Analysis, Visualization, and Reporting across enterprise domains.
            </p>

            <p className="founder-bio-body">
              My engineering foundation spans developing and deploying production pipelines for statistical analysis, machine learning, deep learning, NLP, and time series automation using Python and R. As the founder of Qantyrix Tech LLC, I lead clients in architecting cloud databases and high-performance warehousing across Snowflake, AWS RedShift, Google BigQuery, and Azure Synapse, while hardening data layers against cybersecurity vulnerabilities.
            </p>

            {/* Industry Certifications List */}
            <div className="founder-certifications-wrapper">
              <h4 className="certs-heading">
                <Award size={16} className="text-orange" />
                <span>Verified Industry Certifications</span>
              </h4>
              <div className="certs-chips-grid">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="cert-chip">
                    <span className="cert-check">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech Stack */}
            <div className="founder-tech-wrapper">
              <h4 className="certs-heading">
                <Code2 size={16} className="text-orange" />
                <span>Technical Toolset & Frameworks</span>
              </h4>
              <div className="tech-tags-cloud">
                {coreTools.map((tool, tIdx) => (
                  <span key={tIdx} className="tech-tag-pill">{tool}</span>
                ))}
              </div>
            </div>

            {/* Founder CTA */}
            <div className="founder-cta-row">
              <button 
                className="btn-schedule-session"
                onClick={onOpenContact}
                id="founder-schedule-btn"
              >
                <Calendar size={16} />
                <span>Schedule Consultation with Akshda</span>
              </button>
              <span className="consultation-note">
                • Direct 45-min technical strategy & scoping call
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

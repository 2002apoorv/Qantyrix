import React, { useState } from 'react';
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
  Cloud,
  ShieldCheck,
  Briefcase,
  Users,
  Lock
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
  const [activeFounder, setActiveFounder] = useState('gaurav');

  const founders = {
    gaurav: {
      name: 'Gaurav Trehan',
      initials: 'GT',
      role: 'Co-Founder & Head of Cybersecurity & Technology Programs',
      location: 'Springfield, MA (Open to Relocation)',
      email: 'gaurav@trehans.us',
      phone: '+14133888789',
      phoneDisplay: '(413) 388-8789',
      linkedin: 'mailto:gaurav@trehans.us',
      degree: 'B.S. in Computer Science (Cybersecurity Focus)',
      school: 'Cybersecurity & Computer Science',
      title: 'Directing enterprise cybersecurity, compliance & mission-critical delivery',
      leadBio: 'Program Manager and technology leader with 10+ years of experience directing cybersecurity initiatives, stakeholder roadmaps, and compliance governance across Fortune 500 & premier institutions.',
      bodyBio: 'Proven track record leading enterprise cybersecurity at Columbia Bank, EY, Boston Globe Media, and IBM. Specialist in ISO 27001 programs, NIST incident response frameworks, DLP for 500k+ global users, GDPR/CCPA alignment, and executive risk governance.',
      certifications: [
        'ISO 27001 Lead Auditor',
        'CISM (Certified Information Security Manager 2025)',
        'CISSP (In Progress)',
        'PMP (Project Management Professional - In Progress)'
      ],
      coreTools: [
        'ISO 27001 Program Delivery',
        'NIST Framework Alignment',
        'Global DLP (500K+ Users)',
        'GDPR & CCPA Compliance',
        'Agile Delivery & Roadmapping',
        'Stakeholder & Budget Leadership',
        'Zero-Trust Architecture',
        'Executive Governance & Reporting'
      ],
      ctaText: 'Schedule Consultation with Gaurav'
    },
    akshda: {
      name: 'Akshda Shandilya',
      initials: 'AS',
      role: 'Founder & Principal Data Architect',
      location: 'New York City Metropolitan Area',
      email: 'akshdashandilya@gmail.com',
      phone: '+1 (973) 370-2024',
      phoneDisplay: '(973) 370-2024',
      linkedin: 'https://www.linkedin.com/in/akshda',
      degree: 'M.S. in Business Analytics & Data Science',
      school: 'New Jersey City University',
      title: 'Engineering high-concurrency data intelligence with mathematical precision',
      leadBio: 'Seasoned data professional and engineer with over 5+ years of specialized experience in Data Extraction, Exploration, Modeling, Analysis, Visualization, and Reporting across enterprise domains.',
      bodyBio: 'My engineering foundation spans developing and deploying production pipelines for statistical analysis, machine learning, deep learning, NLP, and agentic workflows using Python, R, and modern cloud warehouses (Snowflake, Databricks, BigQuery, AWS Redshift).',
      certifications: [
        'Google Cloud Certified - Cloud Digital Leader',
        'Google Data Analytics Specialization',
        'AI 201: GL Certified AI Professional - Data Science',
        'Power BI Essential Training',
        'Google Project Management'
      ],
      coreTools: [
        'Python & R',
        'Snowflake & BigQuery',
        'AWS, GCP & Databricks',
        'LangGraph & LangChain',
        'Apache NiFi & AWS Glue',
        'Tableau & Power BI',
        'NLP & Deep Learning',
        'Financial Planning (FP&A)'
      ],
      ctaText: 'Schedule Consultation with Akshda'
    }
  };

  const current = founders[activeFounder];

  return (
    <section id="founder" className="founder-section">
      <div className="founder-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Leadership & Co-Founders</span>
        </div>

        {/* Founder Switcher Tabs */}
        <div className="founder-tab-switcher">
          <button
            className={`founder-tab-btn ${activeFounder === 'gaurav' ? 'active' : ''}`}
            onClick={() => setActiveFounder('gaurav')}
          >
            <div className="tab-avatar-mini">GT</div>
            <div className="tab-info-text">
              <span className="tab-name">Gaurav Trehan</span>
              <span className="tab-role">Co-Founder • Cybersecurity & Programs</span>
            </div>
          </button>

          <button
            className={`founder-tab-btn ${activeFounder === 'akshda' ? 'active' : ''}`}
            onClick={() => setActiveFounder('akshda')}
          >
            <div className="tab-avatar-mini">AS</div>
            <div className="tab-info-text">
              <span className="tab-name">Akshda Shandilya</span>
              <span className="tab-role">Founder • Data & AI Architecture</span>
            </div>
          </button>
        </div>

        <div className="founder-grid">
          {/* Left Column: Visual Profile Card */}
          <div className="founder-profile-card">
            <div className="founder-avatar-wrap">
              <div className="founder-initials-badge">
                <span>{current.initials}</span>
              </div>
              <div className="founder-verified-indicator">
                <CheckCircle size={18} className="verified-icon text-blue" />
              </div>
            </div>

            <div className="founder-identity">
              <h3 className="founder-name">{current.name}</h3>
              <p className="founder-role">{current.role}</p>
              <div className="founder-location">
                <MapPin size={14} className="text-blue" />
                <span>{current.location}</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="founder-contact-actions">
              <a 
                href={`mailto:${current.email}`} 
                className="btn-founder-contact"
                title={`Email ${current.name}`}
              >
                <Mail size={16} />
                <span>{current.email}</span>
              </a>

              <a 
                href={`tel:${current.phone}`} 
                className="btn-founder-contact secondary"
                title="Direct Phone"
              >
                <Phone size={16} />
                <span>{current.phoneDisplay}</span>
              </a>

              {activeFounder === 'akshda' ? (
                <a 
                  href={current.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-founder-contact linkedin"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} className="link-arrow" />
                </a>
              ) : (
                <a 
                  href={`mailto:${current.email}?subject=Consultation%20Inquiry%20-%20Qantyrix`}
                  className="btn-founder-contact linkedin"
                  title="Direct Connect"
                >
                  <ShieldCheck size={16} />
                  <span>ISO 27001 Lead Auditor</span>
                </a>
              )}
            </div>

            {/* Quick Education Badge */}
            <div className="founder-edu-box">
              <GraduationCap size={18} className="text-blue" />
              <div className="edu-text">
                <strong>{current.degree}</strong>
                <span>{current.school}</span>
              </div>
            </div>

            {/* Experience highlight badge */}
            {activeFounder === 'gaurav' && (
              <div className="founder-firm-badges">
                <span className="firm-pill">Columbia Bank</span>
                <span className="firm-pill">EY</span>
                <span className="firm-pill">Boston Globe</span>
                <span className="firm-pill">IBM</span>
              </div>
            )}
            {activeFounder === 'akshda' && (
              <div className="founder-firm-badges">
                <span className="firm-pill">GlobalLogic</span>
                <span className="firm-pill">KGS Tech</span>
                <span className="firm-pill">CareOne</span>
                <span className="firm-pill">NJCU</span>
              </div>
            )}
          </div>

          {/* Right Column: Bio & Track Record */}
          <div className="founder-content-panel">
            <h2 className="founder-panel-title">
              {current.title}
            </h2>

            <p className="founder-bio-lead">
              {current.leadBio}
            </p>

            <p className="founder-bio-body">
              {current.bodyBio}
            </p>

            {/* Industry Certifications List */}
            <div className="founder-certifications-wrapper">
              <h4 className="certs-heading">
                <Award size={16} className="text-blue" />
                <span>Verified Industry Credentials & Accreditations</span>
              </h4>
              <div className="certs-chips-grid">
                {current.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="cert-chip">
                    <span className="cert-check">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech / Practice Stack */}
            <div className="founder-tech-wrapper">
              <h4 className="certs-heading">
                <Code2 size={16} className="text-blue" />
                <span>Core Toolset, Frameworks & Practice Areas</span>
              </h4>
              <div className="tech-tags-cloud">
                {current.coreTools.map((tool, tIdx) => (
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
                <span>{current.ctaText}</span>
              </button>
              <span className="consultation-note">
                • Direct 45-min technical strategy & scoping session
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

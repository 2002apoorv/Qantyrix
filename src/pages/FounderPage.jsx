import React from 'react';
import { 
  Award, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Briefcase, 
  Code2, 
  Database, 
  Cloud, 
  Sparkles,
  ArrowRight
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

export default function FounderPage({ onOpenContact }) {
  const certifications = [
    { title: 'Google Cloud Certified - Cloud Digital Leader', issuer: 'Google Cloud' },
    { title: 'Google Data Analytics Specialization', issuer: 'Google' },
    { title: 'AI 201: GL Certified AI Professional - Data Science', issuer: 'Great Learning' },
    { title: 'Power BI Essential Training', issuer: 'Microsoft / LinkedIn' },
    { title: 'Google Project Management Professional', issuer: 'Google' }
  ];

  const education = [
    {
      degree: 'Master of Science (MS) — Business Analytics & Data Science',
      institution: 'New Jersey City University',
      period: 'September 2022 – August 2023',
      location: 'Jersey City, NJ'
    },
    {
      degree: 'Master of Arts (MA) — Communication Sciences and Disorders',
      institution: 'Montclair State University',
      period: 'September 2019 – August 2022',
      location: 'Montclair, NJ'
    },
    {
      degree: 'Bachelor of Science (BS)',
      institution: 'Guru Gobind Singh Indraprastha University',
      period: 'September 2014 – June 2018',
      location: 'India'
    }
  ];

  const experience = [
    {
      role: 'Senior Software Engineer',
      company: 'GlobalLogic',
      period: 'June 2024 – Present',
      location: 'New York, United States',
      desc: 'Architecting high-scale enterprise data extraction, transformation, analytics models, and cloud infrastructure pipelines for global digital products.'
    },
    {
      role: 'Data Scientist',
      company: 'KGS Technology Group, Inc',
      period: 'August 2023 – May 2024',
      location: 'New Jersey, United States',
      desc: 'Developed and deployed production machine learning models, statistical analytics, and predictive pipelines handling massive multi-source datasets.'
    },
    {
      role: 'Data Analyst & Clinician Research',
      company: 'CareOne & Ben Samuels Center',
      period: 'January 2022 – August 2022',
      location: 'New Jersey, United States',
      desc: 'Healthcare analytics, patient outcome modeling, data visualization, and reporting.'
    },
    {
      role: 'Data Analyst',
      company: 'ALPS International & Mata Kalawati',
      period: 'August 2018 – August 2019',
      location: 'India',
      desc: 'Exploratory data analysis, SQL query optimization, executive reporting, and database warehousing maintenance.'
    },
    {
      role: 'Junior Data Analyst & Researcher',
      company: 'HCL Enterprise & The Tech Portal',
      period: 'September 2015 – March 2017',
      location: 'India',
      desc: 'Statistical data collection, web extraction, trend analysis, and technical reporting.'
    }
  ];

  const technicalGroups = [
    {
      category: 'Cloud Warehousing & Databases',
      items: ['Snowflake', 'Google BigQuery', 'AWS RedShift', 'Azure Synapse', 'Amazon RDS', 'Google Cloud SQL', 'MySQL', 'SQL Server']
    },
    {
      category: 'Data Extraction, ETL & Pipelines',
      items: ['Apache NiFi', 'AWS Glue', 'SSIS', 'Apache Camel', 'Beautiful Soup', 'Scrapy', 'REST APIs', 'Web Scraping']
    },
    {
      category: 'BI & Executive Visualization',
      items: ['Tableau', 'Microsoft Power BI', 'AWS QuickSight', 'QlikView', 'Executive Dashboards', 'Automated Alerts']
    },
    {
      category: 'AI, ML & Statistical Modeling',
      items: ['Python', 'R', 'NLP (Natural Language Processing)', 'Deep Learning', 'Time Series Forecasting', 'Statistical Analysis', 'PyTorch']
    }
  ];

  return (
    <div className="page-wrapper founder-page-view">
      {/* Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Founder & Principal Architect</span>
          </div>
          <h1 className="page-hero-title">
            Akshda Shandilya <br />
            <span className="hero-serif-italic">Lead Data & AI Engineer</span>
          </h1>
          <p className="page-hero-subtitle">
            Seasoned data professional with over 5+ years of specialized experience in 
            Data Extraction, Exploration, Modeling, Analysis, Visualization, and Reporting 
            across healthcare, financial, and enterprise technology ecosystems.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="founder-deep-section">
        <div className="founder-deep-container">
          {/* Top Spotlight Card */}
          <div className="founder-spotlight-hero">
            <div className="spotlight-left-profile">
              <div className="avatar-huge-wrap">
                <span className="avatar-huge-initials">AS</span>
                <span className="avatar-verified-badge" title="Verified Professional">
                  <CheckCircle2 size={24} className="text-green" />
                </span>
              </div>

              <h2 className="profile-name">Akshda Shandilya</h2>
              <p className="profile-tagline">Founder, Qantyrix Tech LLC • Senior Software & Data Engineer</p>
              
              <div className="profile-location-chip">
                <MapPin size={14} className="text-orange" />
                <span>New York City Metropolitan Area</span>
              </div>

              {/* Contact Actions */}
              <div className="profile-quick-actions">
                <a href="mailto:akshdashandilya@gmail.com" className="btn-profile-reach">
                  <Mail size={16} />
                  <span>akshdashandilya@gmail.com</span>
                </a>
                <a href="tel:+19733702024" className="btn-profile-reach secondary">
                  <Phone size={16} />
                  <span>+1 (973) 370-2024</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/akshda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-profile-reach linkedin"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="spotlight-right-summary">
              <h3 className="summary-title">Executive Summary & Technical Philosophy</h3>
              <p className="summary-p">
                Hello! I am Akshda, a seasoned data professional with over 5 years of experience in Data Extraction, Exploration, Modeling, Analysis, Visualization, and Reporting across diverse enterprise domains. My expertise is backed by top industry certifications in Data Analytics, Data Science, and Project Management.
              </p>
              <p className="summary-p">
                I have a proven track record of developing and deploying production projects for data analysis and visualization, machine learning, deep learning, NLP, statistical analysis, time series analysis, and automation with large structured and unstructured datasets using Python and R.
              </p>
              <p className="summary-p">
                My data visualization skills include creating comprehensive executive reports and dashboards using Tableau, Power BI, QlikView, and AWS QuickSight with multi-cloud data sources. I excel in writing and optimizing complex SQL queries in RDBMS (Amazon RDS, Google Cloud SQL, MySQL, SQL Server) and managing modern cloud warehousing on Snowflake, AWS RedShift, Google BigQuery, and Azure Synapse.
              </p>

              <div className="summary-action-row">
                <button className="btn-founder-book-session" onClick={onOpenContact}>
                  <Calendar size={18} />
                  <span>Schedule Consultation with Akshda</span>
                </button>
              </div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="founder-section-block">
            <div className="section-pill-tag">
              <span className="pill-dot"></span>
              <span>Credentials & Accreditations</span>
            </div>
            <h2 className="block-title">Verified Industry Certifications</h2>

            <div className="certs-full-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card-box">
                  <div className="cert-icon-wrap">
                    <Award size={22} className="text-orange" />
                  </div>
                  <div>
                    <h4 className="cert-box-title">{cert.title}</h4>
                    <span className="cert-box-issuer">Accredited by: {cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience Split */}
          <div className="experience-education-grid">
            {/* Experience Column */}
            <div className="timeline-column">
              <div className="section-pill-tag">
                <span className="pill-dot"></span>
                <span>Track Record</span>
              </div>
              <h2 className="block-title">Professional Experience</h2>

              <div className="timeline-track">
                {experience.map((exp, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-period">{exp.period}</span>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company} • {exp.location}</h4>
                      <p className="timeline-desc">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="education-column">
              <div className="section-pill-tag">
                <span className="pill-dot"></span>
                <span>Academic Rigor</span>
              </div>
              <h2 className="block-title">Education & Degrees</h2>

              <div className="education-stack">
                {education.map((edu, idx) => (
                  <div key={idx} className="education-card">
                    <div className="edu-icon-circle">
                      <GraduationCap size={20} className="text-orange" />
                    </div>
                    <div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <h4 className="edu-school">{edu.institution}</h4>
                      <div className="edu-meta-line">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Arsenal */}
              <div className="tech-arsenal-box">
                <h3 className="arsenal-title">
                  <Code2 size={18} className="text-orange" />
                  <span>Technical Arsenal</span>
                </h3>
                {technicalGroups.map((group, gIdx) => (
                  <div key={gIdx} className="arsenal-group">
                    <span className="group-name">{group.category}</span>
                    <div className="tech-chips-row">
                      {group.items.map((item, iIdx) => (
                        <span key={iIdx} className="tech-tag-chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Work directly with Akshda Shandilya</h3>
              <p className="cta-banner-desc">
                From high-level architectural advisement to full pipeline deployment sprints, let’s build something exceptional.
              </p>
            </div>
            <button className="btn-banner-action" onClick={onOpenContact}>
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

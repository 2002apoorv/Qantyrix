import React, { useState } from 'react';
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
  ArrowRight,
  ShieldCheck,
  Lock,
  Building,
  Users
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
  const [selectedFounder, setSelectedFounder] = useState('all'); // 'all', 'akshda', 'gaurav'

  const foundersData = {
    akshda: {
      id: 'akshda',
      name: 'Akshda Shandilya',
      initials: 'AS',
      role: 'Founder & Principal Data Architect',
      tagline: 'Lead Data Engineer & Certified AI Professional',
      location: 'New York City Metropolitan Area',
      email: 'akshdashandilya@gmail.com',
      phone: '+1 (973) 370-2024',
      phoneDisplay: '+1 (973) 370-2024',
      linkedin: 'https://www.linkedin.com/in/akshda',
      summary: 'Seasoned data professional with over 5+ years of specialized experience in Data Extraction, Exploration, Modeling, Analysis, Visualization, and Reporting across enterprise, financial, and healthcare domains.',
      detailedBio: [
        'Akshda leads client architecture for high-concurrency cloud data warehouses across Snowflake, Google BigQuery, AWS Redshift, and Azure Synapse, while developing agentic AI and LangGraph pipelines with mathematical precision.',
        'Her engineering foundation spans developing and deploying production pipelines for statistical analysis, machine learning, deep learning, NLP, and time series automation using Python and R with structured and unstructured datasets.',
        'She holds master’s level academic training alongside top certifications from Google Cloud, Great Learning, and Microsoft.'
      ],
      certifications: [
        { title: 'Google Cloud Certified - Cloud Digital Leader', issuer: 'Google Cloud' },
        { title: 'Google Data Analytics Specialization', issuer: 'Google' },
        { title: 'AI 201: GL Certified AI Professional - Data Science', issuer: 'Great Learning' },
        { title: 'Power BI Essential Training', issuer: 'Microsoft / LinkedIn' },
        { title: 'Google Project Management Professional', issuer: 'Google' }
      ],
      education: [
        {
          degree: 'Master of Science (MS) — Business Analytics & Data Science',
          institution: 'New Jersey City University',
          period: '2022 – 2023',
          location: 'Jersey City, NJ'
        },
        {
          degree: 'Master of Arts (MA) — Communication Sciences & Disorders',
          institution: 'Montclair State University',
          period: '2019 – 2022',
          location: 'Montclair, NJ'
        },
        {
          degree: 'Bachelor of Science (BS)',
          institution: 'Guru Gobind Singh Indraprastha University',
          period: '2014 – 2018',
          location: 'India'
        }
      ],
      experience: [
        {
          role: 'Senior Software & Data Engineer',
          company: 'GlobalLogic',
          period: 'June 2024 – Present',
          location: 'New York, NY',
          desc: 'Architecting high-scale enterprise data extraction, transformation, analytics models, and cloud infrastructure pipelines for global digital products.'
        },
        {
          role: 'Data Scientist',
          company: 'KGS Technology Group, Inc',
          period: 'August 2023 – May 2024',
          location: 'New Jersey',
          desc: 'Developed and deployed production machine learning models, statistical analytics, and predictive pipelines handling massive multi-source datasets.'
        },
        {
          role: 'Data Analyst & Clinician Research',
          company: 'CareOne & Ben Samuels Center',
          period: 'January 2022 – August 2022',
          location: 'New Jersey',
          desc: 'Healthcare analytics, patient outcome modeling, clinical trial data visualization, and regulatory reporting.'
        },
        {
          role: 'Data Analyst',
          company: 'ALPS International & Mata Kalawati',
          period: 'August 2018 – August 2019',
          location: 'India',
          desc: 'Exploratory data analysis, SQL query optimization, executive reporting, and database warehousing maintenance.'
        }
      ],
      technicalGroups: [
        {
          category: 'Cloud Warehousing & Databases',
          items: ['Snowflake', 'Google BigQuery', 'AWS Redshift', 'Databricks', 'Azure Synapse', 'Amazon RDS', 'PostgreSQL', 'Cloud SQL']
        },
        {
          category: 'AI, GenAI & Agentic Systems',
          items: ['LangGraph', 'LangChain', 'Agentic AI', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Prompt Engineering', 'Tokenization']
        },
        {
          category: 'ETL Pipelines & Streaming',
          items: ['Apache NiFi', 'AWS Glue', 'SSIS', 'Kafka', 'dbt', 'REST APIs', 'Beautiful Soup', 'Web Scraping']
        },
        {
          category: 'BI & Financial Analytics',
          items: ['Tableau', 'Power BI', 'AWS QuickSight', 'FP&A Financial Modeling', 'Variance Analysis', 'Executive Dashboards']
        }
      ]
    },
    gaurav: {
      id: 'gaurav',
      name: 'Gaurav Trehan',
      initials: 'GT',
      role: 'Co-Founder & Head of Cybersecurity & Technology Programs',
      tagline: 'Cybersecurity Program Leader & ISO 27001 Lead Auditor',
      location: 'Springfield, MA (Open to Relocation)',
      email: 'gaurav@trehans.us',
      phone: '+14133888789',
      phoneDisplay: '(413) 388-8789',
      linkedin: 'mailto:gaurav@trehans.us',
      summary: 'Program Manager with 10+ years of experience leading cybersecurity and technology initiatives. Expert in program delivery, stakeholder management, and compliance (ISO 27001, GDPR, CCPA). Proven ability to drive strategy, manage cross-functional teams, and deliver results at scale.',
      detailedBio: [
        'Gaurav has directed enterprise cybersecurity strategies and mission-critical technology rollouts for premier banking institutions, top-tier global consultancies, and national media organizations.',
        'At Columbia Bank, he spearheaded the enterprise ISO 27001 certification program and cybersecurity roadmap while establishing rigorous executive governance and multi-million-dollar budget oversight.',
        'At Ernst & Young (EY), he directed large-scale client delivery strategies and Agile program increments. At IBM, he architected global Data Loss Prevention (DLP) programs protecting 500,000+ users worldwide and aligned incident response with the NIST framework.'
      ],
      certifications: [
        { title: 'ISO 27001 Lead Auditor', issuer: 'ISO / IEC' },
        { title: 'CISM - Certified Information Security Manager (2025)', issuer: 'ISACA' },
        { title: 'CISSP - Certified Information Systems Security Professional', issuer: '(ISC)² (In Progress)' },
        { title: 'PMP - Project Management Professional', issuer: 'PMI (In Progress)' }
      ],
      education: [
        {
          degree: 'Bachelor of Science (B.S.) in Computer Science',
          institution: 'Cybersecurity Focus',
          period: 'Undergraduate Degree',
          location: 'United States'
        }
      ],
      experience: [
        {
          role: 'Information Security Program Manager',
          company: 'Columbia Bank',
          period: '2024 – 2025',
          location: 'United States',
          desc: 'Led the enterprise ISO 27001 certification program and cybersecurity roadmap. Managed multiple security programs, cross-functional engineering teams, and executive reporting.'
        },
        {
          role: 'Sr. Manager, Cybersecurity Consulting',
          company: 'EY (Ernst & Young)',
          period: '2022 – 2023',
          location: 'United States',
          desc: 'Directed client cybersecurity programs and delivery strategy. Led Agile program increments, improved delivery processes, and drove executive stakeholder alignment.'
        },
        {
          role: 'Head of Cybersecurity Program',
          company: 'Boston Globe Media',
          period: '2021 – 2022',
          location: 'Boston, MA',
          desc: 'Owned enterprise cybersecurity strategy and execution across digital and corporate assets. Managed cross-functional initiatives, vendor audits, and governance programs.'
        },
        {
          role: 'Cybersecurity Architect / Program Lead',
          company: 'IBM',
          period: '2019 – 2021',
          location: 'United States',
          desc: 'Led global Data Loss Prevention (DLP) programs protecting 500K+ enterprise users. Implemented incident response protocols aligned to NIST and reported security KPIs to executive leadership.'
        }
      ],
      technicalGroups: [
        {
          category: 'Cybersecurity & Governance',
          items: ['ISO 27001 ISMS', 'NIST Cybersecurity Framework', 'SOC2 Type II Readiness', 'Zero-Trust Architecture', 'Penetration Testing Review']
        },
        {
          category: 'Data Privacy & Regulatory Compliance',
          items: ['GDPR Compliance', 'CCPA Compliance', 'Data Governance', 'Third-Party Risk Management', 'Audit Trail Architecture']
        },
        {
          category: 'Enterprise Protection & DLP',
          items: ['Global DLP (500K+ Users)', 'Incident Response Automation', 'Vulnerability Mitigation', 'IAM / Least-Privilege RBAC', 'Cloud Security Posture']
        },
        {
          category: 'Program & Delivery Management',
          items: ['Agile Program Increments', 'Roadmapping & Milestone Planning', 'Budgeting & Cost Allocation', 'Cross-Functional Team Leadership', 'Executive KPI Reporting']
        }
      ]
    }
  };

  const akshda = foundersData.akshda;
  const gaurav = foundersData.gaurav;

  return (
    <div className="page-wrapper founder-page-view">
      {/* Page Hero Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Leadership & Co-Founders</span>
          </div>
          <h1 className="page-hero-title">
            Executive leadership bridging <br />
            <span className="hero-serif-italic">data intelligence & enterprise cybersecurity</span>
          </h1>
          <p className="page-hero-subtitle">
            Meet Akshda Shandilya and Gaurav Trehan — the driving minds behind Qantyrix Tech LLC. 
            Combining 15+ years of senior expertise across high-concurrency cloud data engineering, 
            Agentic AI, and Fortune 500 cybersecurity governance.
          </p>

          {/* Filter Bar */}
          <div className="founder-filter-pills">
            <button 
              className={`founder-pill-selector ${selectedFounder === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFounder('all')}
            >
              Both Co-Founders
            </button>
            <button 
              className={`founder-pill-selector ${selectedFounder === 'akshda' ? 'active' : ''}`}
              onClick={() => setSelectedFounder('akshda')}
            >
              Akshda Shandilya (Data & AI)
            </button>
            <button 
              className={`founder-pill-selector ${selectedFounder === 'gaurav' ? 'active' : ''}`}
              onClick={() => setSelectedFounder('gaurav')}
            >
              Gaurav Trehan (Cybersecurity & Programs)
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="founder-deep-section">
        <div className="founder-deep-container">

          {/* ========================================================
              FOUNDER 1: AKSHDA SHANDILYA
              ======================================================== */}
          {(selectedFounder === 'all' || selectedFounder === 'akshda') && (
            <div className="founder-individual-block" id="akshda-section">
              <div className="founder-spotlight-hero">
                <div className="spotlight-left-profile">
                  <div className="avatar-huge-wrap">
                    <span className="avatar-huge-initials">{akshda.initials}</span>
                    <span className="avatar-verified-badge" title="Verified Professional">
                      <CheckCircle2 size={24} className="text-blue" />
                    </span>
                  </div>

                  <h2 className="profile-name">{akshda.name}</h2>
                  <p className="profile-tagline">{akshda.role}</p>
                  
                  <div className="profile-location-chip">
                    <MapPin size={14} className="text-blue" />
                    <span>{akshda.location}</span>
                  </div>

                  {/* Contact Actions */}
                  <div className="profile-quick-actions">
                    <a href={`mailto:${akshda.email}`} className="btn-profile-reach">
                      <Mail size={16} />
                      <span>{akshda.email}</span>
                    </a>
                    <a href={`tel:${akshda.phone}`} className="btn-profile-reach secondary">
                      <Phone size={16} />
                      <span>{akshda.phoneDisplay}</span>
                    </a>
                    <a 
                      href={akshda.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-profile-reach linkedin"
                    >
                      <LinkedinIcon size={16} />
                      <span>LinkedIn Profile</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Firm highlights */}
                  <div className="profile-firms-row">
                    <span className="firm-tag">GlobalLogic</span>
                    <span className="firm-tag">KGS Tech</span>
                    <span className="firm-tag">CareOne</span>
                    <span className="firm-tag">NJCU</span>
                  </div>
                </div>

                <div className="spotlight-right-summary">
                  <div className="spotlight-kicker">Data & AI Engineering Leadership</div>
                  <h3 className="summary-title">High-Throughput Analytics, AI Pipelines & Cloud Warehousing</h3>
                  {akshda.detailedBio.map((p, idx) => (
                    <p key={idx} className="summary-p">{p}</p>
                  ))}

                  <div className="summary-action-row">
                    <button className="btn-founder-book-session" onClick={onOpenContact}>
                      <Calendar size={18} />
                      <span>Schedule Consultation with Akshda</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Akshda Certifications */}
              <div className="founder-section-block">
                <div className="section-pill-tag">
                  <span className="pill-dot"></span>
                  <span>Akshda’s Accreditations</span>
                </div>
                <h3 className="block-title">Verified Cloud, AI & Analytics Certifications</h3>

                <div className="certs-full-grid">
                  {akshda.certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card-box">
                      <div className="cert-icon-wrap">
                        <Award size={22} className="text-blue" />
                      </div>
                      <div>
                        <h4 className="cert-box-title">{cert.title}</h4>
                        <span className="cert-box-issuer">Accredited by: {cert.issuer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Akshda Experience & Education Grid */}
              <div className="experience-education-grid">
                <div className="timeline-column">
                  <div className="section-pill-tag">
                    <span className="pill-dot"></span>
                    <span>Track Record</span>
                  </div>
                  <h3 className="block-title">Professional Experience</h3>

                  <div className="timeline-track">
                    {akshda.experience.map((exp, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <span className="timeline-period">{exp.period}</span>
                          <h4 className="timeline-role">{exp.role}</h4>
                          <h5 className="timeline-company">{exp.company} • {exp.location}</h5>
                          <p className="timeline-desc">{exp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="education-column">
                  <div className="section-pill-tag">
                    <span className="pill-dot"></span>
                    <span>Academic Rigor</span>
                  </div>
                  <h3 className="block-title">Education & Degrees</h3>

                  <div className="education-stack">
                    {akshda.education.map((edu, idx) => (
                      <div key={idx} className="education-card">
                        <div className="edu-icon-circle">
                          <GraduationCap size={20} className="text-blue" />
                        </div>
                        <div>
                          <h4 className="edu-degree">{edu.degree}</h4>
                          <h5 className="edu-school">{edu.institution}</h5>
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
                    <h4 className="arsenal-title">
                      <Code2 size={18} className="text-blue" />
                      <span>Data & AI Tooling</span>
                    </h4>
                    {akshda.technicalGroups.map((group, gIdx) => (
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
            </div>
          )}

          {/* Divider if both shown */}
          {selectedFounder === 'all' && <div className="founders-page-divider"></div>}

          {/* ========================================================
              FOUNDER 2: GAURAV TREHAN
              ======================================================== */}
          {(selectedFounder === 'all' || selectedFounder === 'gaurav') && (
            <div className="founder-individual-block" id="gaurav-section">
              <div className="founder-spotlight-hero">
                <div className="spotlight-left-profile">
                  <div className="avatar-huge-wrap">
                    <span className="avatar-huge-initials">{gaurav.initials}</span>
                    <span className="avatar-verified-badge" title="Verified Cybersecurity Leader">
                      <ShieldCheck size={24} className="text-blue" />
                    </span>
                  </div>

                  <h2 className="profile-name">{gaurav.name}</h2>
                  <p className="profile-tagline">{gaurav.role}</p>
                  
                  <div className="profile-location-chip">
                    <MapPin size={14} className="text-blue" />
                    <span>{gaurav.location}</span>
                  </div>

                  {/* Contact Actions */}
                  <div className="profile-quick-actions">
                    <a href={`mailto:${gaurav.email}`} className="btn-profile-reach">
                      <Mail size={16} />
                      <span>{gaurav.email}</span>
                    </a>
                    <a href={`tel:${gaurav.phone}`} className="btn-profile-reach secondary">
                      <Phone size={16} />
                      <span>{gaurav.phoneDisplay}</span>
                    </a>
                    <a 
                      href={`mailto:${gaurav.email}?subject=Executive%20Consultation%20with%20Gaurav%20Trehan`}
                      className="btn-profile-reach linkedin"
                    >
                      <ShieldCheck size={16} />
                      <span>ISO 27001 Lead Auditor</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Firm highlights */}
                  <div className="profile-firms-row">
                    <span className="firm-tag">Columbia Bank</span>
                    <span className="firm-tag">EY</span>
                    <span className="firm-tag">Boston Globe</span>
                    <span className="firm-tag">IBM</span>
                  </div>
                </div>

                <div className="spotlight-right-summary">
                  <div className="spotlight-kicker">Cybersecurity, Compliance & Program Leadership</div>
                  <h3 className="summary-title">10+ Years Directing Enterprise Cybersecurity, Risk & Roadmaps</h3>
                  {gaurav.detailedBio.map((p, idx) => (
                    <p key={idx} className="summary-p">{p}</p>
                  ))}

                  <div className="summary-action-row">
                    <button className="btn-founder-book-session" onClick={onOpenContact}>
                      <Calendar size={18} />
                      <span>Schedule Consultation with Gaurav</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Gaurav Certifications */}
              <div className="founder-section-block">
                <div className="section-pill-tag">
                  <span className="pill-dot"></span>
                  <span>Gaurav’s Accreditations</span>
                </div>
                <h3 className="block-title">Verified Cybersecurity & Project Management Credentials</h3>

                <div className="certs-full-grid">
                  {gaurav.certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card-box">
                      <div className="cert-icon-wrap">
                        <Award size={22} className="text-blue" />
                      </div>
                      <div>
                        <h4 className="cert-box-title">{cert.title}</h4>
                        <span className="cert-box-issuer">Credentialing Body: {cert.issuer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaurav Experience & Education Grid */}
              <div className="experience-education-grid">
                <div className="timeline-column">
                  <div className="section-pill-tag">
                    <span className="pill-dot"></span>
                    <span>10+ Years Track Record</span>
                  </div>
                  <h3 className="block-title">Enterprise Experience</h3>

                  <div className="timeline-track">
                    {gaurav.experience.map((exp, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <span className="timeline-period">{exp.period}</span>
                          <h4 className="timeline-role">{exp.role}</h4>
                          <h5 className="timeline-company">{exp.company} • {exp.location}</h5>
                          <p className="timeline-desc">{exp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="education-column">
                  <div className="section-pill-tag">
                    <span className="pill-dot"></span>
                    <span>Academic Foundation</span>
                  </div>
                  <h3 className="block-title">Education & Degrees</h3>

                  <div className="education-stack">
                    {gaurav.education.map((edu, idx) => (
                      <div key={idx} className="education-card">
                        <div className="edu-icon-circle">
                          <GraduationCap size={20} className="text-blue" />
                        </div>
                        <div>
                          <h4 className="edu-degree">{edu.degree}</h4>
                          <h5 className="edu-school">{edu.institution}</h5>
                          <div className="edu-meta-line">
                            <span>{edu.period}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Core Frameworks */}
                  <div className="tech-arsenal-box">
                    <h4 className="arsenal-title">
                      <ShieldCheck size={18} className="text-blue" />
                      <span>Security & Governance Frameworks</span>
                    </h4>
                    {gaurav.technicalGroups.map((group, gIdx) => (
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
            </div>
          )}

          {/* CTA Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Work directly with Akshda Shandilya & Gaurav Trehan</h3>
              <p className="cta-banner-desc">
                From high-concurrency cloud data engineering and AI models to enterprise ISO 27001 cybersecurity audits, let’s architect your solution.
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

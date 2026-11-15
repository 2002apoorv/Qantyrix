import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Target, 
  Users, 
  Compass, 
  ArrowRight,
  TrendingUp,
  Database,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenContact }) {
  const stats = [
    { value: '250+', label: 'Successful Data Projects Completed', sub: 'Across enterprise and growth scaleups' },
    { value: '99.2%', label: 'Clients Achieve SLA Goals', sub: 'Sub-second queries & real-time sync' },
    { value: '$3.5M+', label: 'Saved in Cloud & Tech Debt', sub: 'Eliminated unnecessary compute bloat' },
    { value: '12+', label: 'Years Combined Specialized Expertise', sub: 'Data analysis, ML, cloud & security' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Senior Engineering Rigor',
      desc: 'We reject junior trial-and-error on client systems. Every pipeline, dashboard, and ML model is engineered by proven senior practitioners.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Business ROI',
      desc: 'We do not build technology for technology’s sake. Every project must measurably accelerate decision making or reduce infrastructure spend.'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security by Default',
      desc: 'Your proprietary algorithms and customer datasets are safeguarded with strict enterprise NDAs, AES-256 encryption, and least-privilege RBAC.'
    },
    {
      icon: Compass,
      title: 'Radical Transparency',
      desc: 'No hidden billable hours or opaque black-box code. You receive full source code ownership, comprehensive documentation, and predictable pricing.'
    }
  ];

  return (
    <div className="page-wrapper about-page-view">
      {/* Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>About Qantyrix Tech LLC</span>
          </div>
          <h1 className="page-hero-title">
            Transforming raw data streams into <br />
            <span className="hero-serif-italic">decisive competitive advantage</span>
          </h1>
          <p className="page-hero-subtitle">
            Founded in the New York City Metropolitan Area, Qantyrix Tech LLC is a premier 
            data and AI engineering consultancy. We partner with forward-thinking enterprises 
            to architect scalable data infrastructure, predictive models, and cyber-hardened systems.
          </p>
        </div>
      </section>

      {/* Main Story & Vision Section */}
      <section className="about-narrative-section">
        <div className="about-narrative-container">
          <div className="about-story-grid">
            <div className="story-left">
              <span className="story-kicker">Our Origin & Purpose</span>
              <h2 className="story-headline">
                Bridging the gap between academic data science and production-grade engineering
              </h2>
            </div>
            <div className="story-right">
              <p className="story-lead-p">
                Too often, organizations struggle with data initiatives that stall out in experimental notebooks or suffer from crashing pipelines, bloated cloud warehouse bills, and security compliance vulnerabilities.
              </p>
              <p className="story-body-p">
                Qantyrix Tech LLC was established to solve this exact problem. Led by co-founders Akshda Shandilya (Lead Data Architect & AI Engineer) and Gaurav Trehan (Head of Cybersecurity Programs & ISO 27001 Lead Auditor), our consultancy combines rigorous analytical methodology with enterprise cybersecurity standards. We turn convoluted data landscapes across Snowflake, Databricks, BigQuery, and AWS into high-velocity, cyber-hardened engines for growth.
              </p>
            </div>
          </div>

          {/* 4 Big Metrics Grid */}
          <div className="about-metrics-highlight-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="metric-box-card">
                <div className="metric-value-huge">{s.value}</div>
                <div className="metric-title-strong">{s.label}</div>
                <div className="metric-subtitle-light">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="company-values-wrapper">
            <div className="section-pill-tag">
              <span className="pill-dot"></span>
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="values-main-title">Principles that guide our engineering</h2>

            <div className="values-cards-grid">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="value-item-card">
                    <div className="value-icon-box">
                      <Icon size={22} className="text-blue" />
                    </div>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founders Teaser */}
          <div className="about-founder-teaser-card">
            <div className="founder-teaser-left">
              <span className="teaser-pill">Principal Leadership</span>
              <h3 className="founder-teaser-name">Meet Co-Founders Akshda Shandilya & Gaurav Trehan</h3>
              <p className="founder-teaser-desc">
                Akshda (Master’s in Business Analytics & Data Science, Google Cloud certified) directs high-concurrency data architectures and AI models. Gaurav (10+ years leading enterprise cybersecurity at Columbia Bank, EY, Boston Globe, and IBM; ISO 27001 Lead Auditor) directs risk, compliance, and large-scale program delivery.
              </p>
              <Link to="/founder" className="btn-read-founder">
                <span>View Full Leadership Profiles & Credentials</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="founder-teaser-right">
              <div className="founder-quote-box">
                <p className="founder-quote-text">
                  “Data intelligence and cybersecurity are two sides of the same coin. At Qantyrix Tech LLC, we build platforms so fast, scalable, and hardened that leadership never has to choose between innovation and security.”
                </p>
                <span className="quote-author">— Akshda Shandilya & Gaurav Trehan, Co-Founders</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Let’s discuss your organization’s data roadmap</h3>
              <p className="cta-banner-desc">
                Book a direct strategy session to audit your current architecture or scope your next build.
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

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
                Too often, organizations struggle with data initiatives that stall out in experimental notebooks or suffer from crashing pipelines, bloated cloud warehouse bills, and fragmented reporting.
              </p>
              <p className="story-body-p">
                Qantyrix Tech LLC was established to solve this exact problem. Led by senior data architect Akshda Shandilya, our consultancy combines rigorous analytical methodology with resilient software engineering standards. We turn convoluted data landscapes across Snowflake, BigQuery, AWS, and Azure into high-velocity engines for growth.
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
                      <Icon size={22} className="text-orange" />
                    </div>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founder Teaser */}
          <div className="about-founder-teaser-card">
            <div className="founder-teaser-left">
              <span className="teaser-pill">Principal Leadership</span>
              <h3 className="founder-teaser-name">Meet Founder Akshda Shandilya</h3>
              <p className="founder-teaser-desc">
                With a Master’s degree in Business Analytics & Data Science and industry certifications across Google Cloud, AI 201 Data Science, and Power BI, Akshda personally directs every client architecture.
              </p>
              <Link to="/founder" className="btn-read-founder">
                <span>View Full Profile & Credentials</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="founder-teaser-right">
              <div className="founder-quote-box">
                <p className="founder-quote-text">
                  “Data without engineering discipline is noise. Our mission at Qantyrix Tech LLC is to build data platforms so dependable and fast that leadership teams never have to second-guess their numbers.”
                </p>
                <span className="quote-author">— Akshda Shandilya, Founder</span>
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

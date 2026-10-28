import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Database, 
  BrainCircuit, 
  ShieldCheck, 
  Layers, 
  Server, 
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  BarChart3
} from 'lucide-react';

export default function WorksPage({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const detailedCases = [
    {
      id: 'snowflake-nifi',
      category: 'data-engineering',
      badge: 'Data Engineering & Cloud',
      title: 'Enterprise Snowflake Data Lake & Real-Time NiFi Pipeline',
      client: 'Global FinTech Platform',
      timeline: '8-Week Sprint Delivery',
      challenge: 'The client struggled with 40+ legacy on-prem MySQL databases suffering severe bottlenecks, schema drift, and query timeouts of over 45 minutes for daily financial reconciliation.',
      solution: 'Architected a consolidated cloud data lake in Snowflake with high-concurrency warehouses. Built automated real-time ingestion pipelines using Apache NiFi and AWS Glue with automated schema validation.',
      metrics: [
        { label: 'Query Performance', val: '8.4x Faster', sub: 'Reduced from 45m to 5.3m' },
        { label: 'Event Ingestion', val: '2.5M / hr', sub: 'Zero packet loss' },
        { label: 'Compute Cost', val: '-42% Saved', sub: '$420,000 annual reduction' }
      ],
      tech: ['Snowflake', 'Apache NiFi', 'AWS Glue', 'AWS RDS', 'Python', 'SQL Optimization']
    },
    {
      id: 'healthcare-bi',
      category: 'data-analysis',
      badge: 'Data Analysis & BI',
      title: 'Hospital Clinical Intelligence & Executive Tableau Portal',
      client: 'Major Healthcare Network',
      timeline: '10-Week End-to-End Implementation',
      challenge: 'Fragmented patient records, ICU capacity logs, and financial billing systems created disjointed reporting and delayed critical operational decision-making across 6 regional hospitals.',
      solution: 'Engineered an enterprise data extraction and modeling pipeline in Google BigQuery, feeding real-time interactive Tableau and Power BI executive dashboards with automated HIPAA-compliant role access.',
      metrics: [
        { label: 'Dashboard Latency', val: '< 1.1s', sub: 'Instantaneous multi-filter rendering' },
        { label: 'Active Users', val: '1,400+ Staff', sub: 'Doctors, analysts, and leadership' },
        { label: 'Data Accuracy', val: '99.98%', sub: 'Zero discrepancy in billing audit' }
      ],
      tech: ['Tableau', 'Power BI', 'Google BigQuery', 'Python', 'Statistical Analysis', 'Healthcare Analytics']
    },
    {
      id: 'nlp-transformers',
      category: 'ai-ml',
      badge: 'AI / ML Engineering',
      title: 'High-Concurrency NLP Contract Analysis & Entity Extraction',
      client: 'Institutional Legal & Compliance Firm',
      timeline: '6-Week Rapid Prototype to Production',
      challenge: 'Over 10,000 commercial agreements required manual compliance auditing per month, creating a 3-week backlog and severe exposure to hidden contractual liabilities.',
      solution: 'Trained and deployed a custom Deep Learning NLP pipeline with PyTorch and HuggingFace transformers, containerized in Docker with FastAPI endpoints to parse, extract entities, and score contract risk.',
      metrics: [
        { label: 'Model Precision', val: '99.4% F1', sub: 'Benchmarked on legal clauses' },
        { label: 'Inference Speed', val: '14ms', sub: 'Sub-second multi-page parsing' },
        { label: 'Labor Hours Saved', val: '85%', sub: 'Freed 120+ legal analyst hours/week' }
      ],
      tech: ['PyTorch', 'Transformers', 'FastAPI', 'Docker', 'AWS ECS', 'Python & R']
    },
    {
      id: 'cloud-security-audit',
      category: 'cybersecurity',
      badge: 'Cybersecurity & Governance',
      title: 'Zero-Trust Cloud Database Hardening & SOC2 Compliance',
      client: 'Multi-Tenant SaaS Enterprise',
      timeline: '4-Week Comprehensive Audit & Remediation',
      challenge: 'Approaching an enterprise customer evaluation, the client needed SOC2 Type II readiness and elimination of critical security blind spots across their AWS and Google Cloud databases.',
      solution: 'Conducted end-to-end vulnerability scanning and penetration tests. Implemented AES-256 encryption at rest, TLS 1.3 in transit, automated IAM role pruning, and continuous anomaly alerts via CloudTrail.',
      metrics: [
        { label: 'Security Score', val: '100 / 100', sub: 'Passed SOC2 Type II on 1st attempt' },
        { label: 'Vulnerabilities', val: '0 Critical', sub: '14 legacy CVEs remediated' },
        { label: 'Threat Monitoring', val: '24/7 Real-Time', sub: 'Automated Slack/PagerDuty alerts' }
      ],
      tech: ['Zero-Trust', 'AES-256', 'AWS CloudTrail', 'IAM RBAC', 'Penetration Testing', 'SOC2 Compliance']
    },
    {
      id: 'ecommerce-forecasting',
      category: 'data-analysis',
      badge: 'Data Analysis & Time Series',
      title: 'Predictive Demand Forecasting & Inventory Optimization',
      client: 'Direct-to-Consumer Brand',
      timeline: '5-Week Predictive Sprint',
      challenge: 'High supply chain volatility caused frequent inventory stock-outs during flash promotions, costing an estimated $1.2M in lost quarterly revenue.',
      solution: 'Built statistical time series forecasting and demand prediction models incorporating seasonality, marketing ad-spend, and historical purchase velocity, with automated re-order triggers.',
      metrics: [
        { label: 'Forecast Precision', val: '96.2%', sub: 'Mean absolute percentage error < 4%' },
        { label: 'Stock-Out Rate', val: '-74%', sub: 'Virtually eliminated stock-outs' },
        { label: 'Revenue Yield', val: '+$1.8M', sub: 'Recaptured annual sales' }
      ],
      tech: ['Python & R', 'Time Series Analysis', 'AWS RDS', 'Power BI', 'Scikit-Learn']
    }
  ];

  const filtered = filter === 'all' 
    ? detailedCases 
    : detailedCases.filter(c => c.category === filter);

  return (
    <div className="page-wrapper works-page-view">
      {/* Page Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Case Studies & Portfolio</span>
          </div>
          <h1 className="page-hero-title">
            Architectures engineered for <br />
            <span className="hero-serif-italic">proven enterprise yield</span>
          </h1>
          <p className="page-hero-subtitle">
            Explore how Qantyrix Tech LLC partners with ambitious organizations to build 
            resilient data pipelines, high-precision ML models, and bulletproof security layers.
          </p>

          {/* Filter Bar */}
          <div className="page-filter-bar">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({detailedCases.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'data-analysis' ? 'active' : ''}`}
              onClick={() => setFilter('data-analysis')}
            >
              Data Analysis
            </button>
            <button 
              className={`filter-btn ${filter === 'data-engineering' ? 'active' : ''}`}
              onClick={() => setFilter('data-engineering')}
            >
              Data Engineering
            </button>
            <button 
              className={`filter-btn ${filter === 'ai-ml' ? 'active' : ''}`}
              onClick={() => setFilter('ai-ml')}
            >
              AI / ML
            </button>
            <button 
              className={`filter-btn ${filter === 'cybersecurity' ? 'active' : ''}`}
              onClick={() => setFilter('cybersecurity')}
            >
              Cybersecurity
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="works-list-section">
        <div className="works-list-container">
          <div className="cases-stack">
            {filtered.map((item) => (
              <div key={item.id} className="case-study-full-card">
                <div className="case-card-header">
                  <div>
                    <span className="case-category-pill">{item.badge}</span>
                    <h2 className="case-study-title">{item.title}</h2>
                    <div className="case-meta-line">
                      <span className="client-name"><strong>Client:</strong> {item.client}</span>
                      <span className="meta-sep">•</span>
                      <span className="timeline-badge"><strong>Duration:</strong> {item.timeline}</span>
                    </div>
                  </div>

                  <button 
                    className="btn-case-inquire"
                    onClick={onOpenContact}
                    title="Inquire about similar architecture"
                  >
                    <span>Request Similar Build</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="case-narrative-grid">
                  <div className="narrative-box">
                    <h3 className="narrative-heading challenge">
                      <span className="num-dot">01</span> The Challenge
                    </h3>
                    <p className="narrative-text">{item.challenge}</p>
                  </div>
                  <div className="narrative-box">
                    <h3 className="narrative-heading solution">
                      <span className="num-dot">02</span> Engineered Solution
                    </h3>
                    <p className="narrative-text">{item.solution}</p>
                  </div>
                </div>

                {/* Key Quantitative Metrics */}
                <div className="case-metrics-banner">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="case-metric-block">
                      <div className="metric-large-num">{m.val}</div>
                      <div className="metric-label-title">{m.label}</div>
                      <div className="metric-sub-detail">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="case-tech-footer">
                  <span className="tech-footer-label">Tech Stack:</span>
                  <div className="tech-chips-row">
                    {item.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Have a complex data or ML initiative?</h3>
              <p className="cta-banner-desc">
                Schedule a 45-minute technical roadmap session directly with Akshda Shandilya.
              </p>
            </div>
            <button className="btn-banner-action" onClick={onOpenContact}>
              <span>Start Your Project</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

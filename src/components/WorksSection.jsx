import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  BarChart2, 
  Database, 
  BrainCircuit, 
  ShieldCheck,
  TrendingUp,
  Server
} from 'lucide-react';

export default function WorksSection({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'data-engineering',
      badge: 'Data Engineering & Cloud',
      title: 'Enterprise Snowflake Data Lake & Real-Time NiFi Pipeline',
      description: 'Migrated 40+ legacy on-prem MySQL databases into Snowflake with automated Apache NiFi and AWS Glue workflows.',
      metrics: [
        { label: 'Query Speedup', val: '8.4x Faster' },
        { label: 'Throughput', val: '2.5M records/hr' },
        { label: 'Cloud Cost Cut', val: '42% Saved' }
      ],
      tech: ['Snowflake', 'Apache NiFi', 'AWS Glue', 'Python', 'SQL']
    },
    {
      id: 2,
      category: 'data-analysis',
      badge: 'Data Analysis & BI',
      title: 'Global Healthcare Analytics & Executive Tableau Portal',
      description: 'Engineered comprehensive BI dashboards unifying multi-hospital clinical, operational, and financial datasets.',
      metrics: [
        { label: 'Latency', val: 'Sub-second' },
        { label: 'Reporting Accuracy', val: '99.9%' },
        { label: 'Stakeholders', val: '1,400+ Active Users' }
      ],
      tech: ['Tableau', 'Power BI', 'Google BigQuery', 'Python', 'Statistical Modeling']
    },
    {
      id: 3,
      category: 'ai-ml',
      badge: 'AI / ML Engineering',
      title: 'High-Concurrency NLP Document Parser & Sentiment Engine',
      description: 'Trained and deployed deep learning transformers for automated entity extraction and risk classification from financial contracts.',
      metrics: [
        { label: 'Model F1-Score', val: '0.994' },
        { label: 'Inference Time', val: '14ms' },
        { label: 'Manual Effort Saved', val: '85%' }
      ],
      tech: ['PyTorch', 'HuggingFace', 'FastAPI', 'Docker', 'AWS ECS']
    },
    {
      id: 4,
      category: 'cybersecurity',
      badge: 'Cybersecurity & Governance',
      title: 'Zero-Trust Cloud Warehouse Hardening & SOC2 Audit',
      description: 'Secured critical multi-tenant data warehouses with AES-256 encryption, role-based access control, and automated intrusion monitoring.',
      metrics: [
        { label: 'Vulnerabilities', val: '0 Critical Findings' },
        { label: 'Audit Status', val: 'SOC2 Type II Passed' },
        { label: 'Protection', val: '24/7 Monitored' }
      ],
      tech: ['Zero-Trust', 'AES-256', 'CloudTrail', 'IAM RBAC', 'Penetration Testing']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Featured Works</span>
        </div>

        <div className="works-header-row">
          <div>
            <h2 className="works-headline">
              Selected client outcomes & architectures
            </h2>
            <p className="works-subtext">
              Real-world transformations delivered with measurable business ROI and bulletproof reliability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="works-filter-nav">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Works
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

        {/* Project Cards Grid */}
        <div className="works-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="work-card">
              <div className="work-card-top">
                <span className="work-badge">{proj.badge}</span>
                <button 
                  className="work-arrow-btn"
                  onClick={onOpenContact}
                  title="Inquire about similar architecture"
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <h3 className="work-card-title">{proj.title}</h3>
              <p className="work-card-desc">{proj.description}</p>

              {/* Metrics Row */}
              <div className="work-metrics-grid">
                {proj.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="work-metric-item">
                    <span className="m-val">{m.val}</span>
                    <span className="m-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="work-tech-chips">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

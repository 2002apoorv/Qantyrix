import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  ShieldCheck, 
  Server, 
  Check, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Lock,
  Workflow
} from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 'data-analysis',
      title: 'Data Analysis & FP&A',
      tabName: 'Data Analysis & Financial Planning (FP&A)',
      icon: BarChart3,
      tagline: 'Executive dashboards, automated FP&A financial modeling, and statistical analytics with guaranteed SLAs.',
      description: 'We extract, explore, model, and visualize enterprise datasets across multiple sources to transform complex numbers and financial silos into executive-level decision making.',
      bullets: [
        'Multi-source dashboard architecture across Tableau, Power BI, and QuickSight',
        'Financial Planning & Analysis (FP&A), automated P&L reconciliations & variance models',
        'Senior data professionals only (Google Data Analytics & AI certified)',
        'Root-cause metric anomalies and automated threshold alerting',
        'Statistical modeling, time series analysis, and automated board reports',
        'Comprehensive data dictionaries and KPI playbooks for team handoff'
      ],
      previewType: 'chart',
      previewTitle: 'Executive BI & FP&A Reporting',
      chartCurve: 'M0,80 Q50,90 100,45 T200,60 T300,25 T400,15',
      metricLabel: 'Report Latency',
      metricVal: '< 1.2s',
      accuracy: '99.8% Data Accuracy'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Cloud Warehousing',
      tabName: 'Data Engineering & Warehousing',
      icon: Database,
      tagline: 'High-throughput ETL/ELT pipelines, streaming architectures, and multi-cloud data warehousing.',
      description: 'Architecting scalable pipelines using Snowflake, Databricks, AWS Redshift, and Google BigQuery. Automated extraction using Apache NiFi, AWS Glue, dbt, and Python.',
      bullets: [
        'Resilient ETL/ELT pipeline design handling millions of events per hour',
        'Cross-cloud data warehousing (Snowflake, Databricks, BigQuery, AWS Redshift)',
        'High-performance SQL query tuning & indexing for RDBMS and cloud warehouses',
        'Web scraping and unstructured data ingestion (Beautiful Soup, Scrapy, APIs)',
        'Zero-data-loss streaming architectures with real-time health monitoring',
        'Modular dbt data transformations and automated schema testing'
      ],
      previewType: 'pipeline',
      previewTitle: 'NiFi / Snowflake / Databricks',
      chartCurve: 'M0,70 Q70,40 140,65 T280,30 T400,10',
      metricLabel: 'Throughput',
      metricVal: '28.5k evt/s',
      accuracy: '99.99% Pipeline Uptime'
    },
    {
      id: 'ai-ml',
      title: 'Agentic AI & GenAI',
      tabName: 'Agentic AI, GenAI & NLP',
      icon: BrainCircuit,
      tagline: 'Autonomous multi-agent workflows, LangGraph orchestration, GenAI, and custom NLP.',
      description: 'Developing and deploying custom Agentic AI and Generative AI pipelines with LangGraph, LangChain, Hugging Face, TensorFlow, and PyTorch directly into your operations.',
      bullets: [
        'Agentic AI multi-agent workflows and cyclic orchestration with LangGraph',
        'Prompt engineering, tokenization optimization, and domain fine-tuning',
        'Enterprise LLM integrations, retrieval-augmented generation (RAG) & vector stores',
        'Certified AI Professionals (GL Certified AI Professional - Data Science)',
        'High-concurrency inference endpoints with sub-25ms response latency',
        'Continuous model drift detection and automated retraining routines'
      ],
      previewType: 'ai',
      previewTitle: 'LangGraph Multi-Agent Engine',
      chartCurve: 'M0,85 Q60,60 120,70 T240,35 T320,15 T400,5',
      metricLabel: 'Inference Latency',
      metricVal: '14ms',
      accuracy: '99.4% Precision Score'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & ISO 27001',
      tabName: 'Cybersecurity & ISO 27001 Audits',
      icon: ShieldCheck,
      tagline: 'ISO 27001 Lead Auditor leadership, DLP for 500k+ users, zero-trust, and GDPR/CCPA governance.',
      description: 'Led by enterprise cybersecurity leaders from Columbia Bank, EY, and IBM, we secure mission-critical data assets, cloud databases, and enforce ISO 27001 compliance standards.',
      bullets: [
        'ISO 27001 Lead Auditor assessments and ISMS implementation roadmap',
        'Global Data Loss Prevention (DLP) programs protecting 500K+ enterprise users',
        'Zero-trust database architecture, NIST framework alignment, and IAM RBAC',
        'Cloud security audits for AWS, Google Cloud, and Azure environments',
        'Compliance alignment for HIPAA, SOC2 Type II, GDPR, and CCPA standards',
        '24/7 Threat monitoring and rapid incident mitigation safety net'
      ],
      previewType: 'security',
      previewTitle: 'ISO 27001 & Threat Shield',
      chartCurve: 'M0,90 Q80,70 160,50 T300,30 T400,15',
      metricLabel: 'Security Score',
      metricVal: '100 / 100',
      accuracy: 'Zero Vulnerabilities'
    },
    {
      id: 'modernization',
      title: 'Cloud & Warehouse Modernization',
      tabName: 'Multi-Cloud Modernization & Tuning',
      icon: Server,
      tagline: 'Legacy database migration, Snowflake/Databricks tuning, and severe query speedups.',
      description: 'Upgrading legacy on-prem and sluggish relational databases to modern cloud-native architectures across AWS, GCP, Databricks, and Snowflake without downtime.',
      bullets: [
        'Legacy RDBMS modernization to Google Cloud SQL, Amazon RDS, or Snowflake',
        'Deep SQL query refactoring reducing cloud compute bills by up to 50%',
        'Partitioning, clustering, and materialized view strategy implementations',
        'Hybrid cloud connectivity and secure VPN/VPC tunneling',
        'Automated database backups, failover replication, and disaster recovery',
        'Continuous performance benchmarking under peak transaction loads'
      ],
      previewType: 'cloud',
      previewTitle: 'Multi-Cloud Compute Tuning',
      chartCurve: 'M0,75 Q90,80 180,40 T300,20 T400,8',
      metricLabel: 'Cost Reduction',
      metricVal: '-46% Bills',
      accuracy: '10x Query Speedup'
    }
  ];

  const current = servicesData[activeTab];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Pill Label */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Our Services</span>
        </div>

        {/* Section Headline */}
        <h2 className="services-headline">
          Level up your data & intelligence game
        </h2>

        {/* Interactive Layout Matching Screenshot */}
        <div className="services-interactive-wrapper">
          {/* Left: Tab Switcher List */}
          <div className="services-tabs-list">
            {servicesData.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  className={`service-tab-button ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="tab-left-group">
                    <Icon size={18} className={`tab-icon ${isActive ? 'text-orange' : ''}`} />
                    <span className="tab-text">{item.tabName}</span>
                  </div>
                  <div className="tab-indicator-arrow">
                    <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Card with Features & Visual Preview */}
          <div className="services-detail-card">
            <div className="detail-card-left">
              <div className="detail-header-badge">
                <span className="detail-dot"></span>
                <span>{current.title}</span>
              </div>
              <h3 className="detail-card-title">{current.tabName}</h3>
              <p className="detail-card-tagline">{current.tagline}</p>

              {/* Bullet Checklist */}
              <div className="detail-bullets-list">
                {current.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="bullet-item">
                    <div className="bullet-check-icon">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="bullet-text">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="detail-card-actions">
                <button 
                  className="btn-service-inquire"
                  onClick={onOpenContact}
                >
                  <span>Inquire for {current.title}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Visual preview card on the right (matching screenshot chart card) */}
            <div className="detail-card-right">
              <div className="preview-chart-box">
                <div className="preview-box-top">
                  <span className="preview-box-title">{current.previewTitle}</span>
                  <span className="preview-status-pill">{current.accuracy}</span>
                </div>

                <div className="preview-chart-graphic">
                  <svg viewBox="0 0 400 130" className="preview-svg-line">
                    <defs>
                      <linearGradient id={`grad-${current.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1d68bd" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1d68bd" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`${current.chartCurve} L400,130 L0,130 Z`}
                      fill={`url(#grad-${current.id})`}
                    />
                    <path
                      d={current.chartCurve}
                      fill="none"
                      stroke="#1d68bd"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="preview-box-metrics">
                  <div className="preview-metric-item">
                    <span className="metric-tag">{current.metricLabel}</span>
                    <span className="metric-highlight">{current.metricVal}</span>
                  </div>
                  <div className="preview-metric-item right-align">
                    <span className="metric-tag">Status</span>
                    <span className="metric-highlight text-green">Production Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

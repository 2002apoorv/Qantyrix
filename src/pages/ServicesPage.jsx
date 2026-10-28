import React from 'react';
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  Clock, 
  ShieldAlert,
  Sparkles,
  Cpu
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const serviceOfferings = [
    {
      id: 'data-analysis',
      icon: BarChart3,
      tag: 'Service 01',
      title: 'Data Analysis & Executive BI',
      tagline: 'Transforming unstructured datasets and operational silos into crystal-clear executive decision engines.',
      description: 'We specialize in end-to-end data extraction, exploration, statistical modeling, and interactive visualization. Whether you need financial performance monitoring, patient outcomes in healthcare analytics, or marketing ROI, we deliver robust dashboards that load in sub-seconds.',
      capabilities: [
        'Interactive dashboards in Tableau, Power BI, and AWS QuickSight',
        'Statistical analysis, hypothesis testing, and time series forecasting',
        'Financial analytics, P&L reporting, and cost-anomaly detection',
        'Healthcare analytics, clinical workflows, and patient data modeling',
        'Automated executive email digests and real-time metric threshold alerts',
        'Comprehensive data dictionaries, KPI definitions, and staff training'
      ],
      techStack: ['Tableau', 'Power BI', 'AWS QuickSight', 'Python', 'R', 'SQL', 'QlikView']
    },
    {
      id: 'data-engineering',
      icon: Database,
      tag: 'Service 02',
      title: 'Data Engineering & Cloud Pipelines',
      tagline: 'High-throughput, fault-tolerant data pipelines that eliminate bottlenecks and scale effortlessly.',
      description: 'We design and construct resilient ETL/ELT pipelines capable of ingesting millions of structured and unstructured records per hour. From Apache NiFi real-time stream processing to AWS Glue and custom Python workers, we turn raw streams into pristine data lakes and warehouses.',
      capabilities: [
        'Multi-source ETL/ELT pipeline architecture with Apache NiFi, AWS Glue & SSIS',
        'Cloud data warehousing on Snowflake, AWS RedShift, Google BigQuery & Azure Synapse',
        'Automated web scraping and API ingestion using Beautiful Soup, Scrapy & custom workers',
        'Schema evolution, data deduplication, and automated data quality validation',
        'High-concurrency streaming pipelines with zero packet loss guarantees',
        'Disaster recovery, point-in-time rollback, and multi-region failover'
      ],
      techStack: ['Snowflake', 'Apache NiFi', 'AWS Glue', 'Google BigQuery', 'Azure Synapse', 'Python', 'SSIS']
    },
    {
      id: 'ai-ml',
      icon: BrainCircuit,
      tag: 'Service 03',
      title: 'AI / ML Engineering & Deep Learning',
      tagline: 'Production-ready artificial intelligence models that deliver high-conviction predictions.',
      description: 'We take machine learning beyond theoretical Jupyter notebooks into containerized, low-latency production APIs. Backed by certified AI professionals, we engineer Deep Learning models, Natural Language Processing systems, and predictive time series algorithms that integrate seamlessly with your core apps.',
      capabilities: [
        'Custom Natural Language Processing (NLP) for document parsing, sentiment, and categorization',
        'Predictive modeling for customer churn, demand forecasting, and credit risk',
        'Deep learning computer vision and anomaly detection on high-frequency data streams',
        'Containerized model deployment via Docker, FastAPI, and Kubernetes endpoints',
        'Automated retraining pipelines with MLflow and continuous model drift tracking',
        'Enterprise LLM integrations, retrieval-augmented generation (RAG), and vector stores'
      ],
      techStack: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'HuggingFace', 'Docker', 'FastAPI', 'MLflow']
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      tag: 'Service 04',
      title: 'Cybersecurity & Compliance Audits',
      tagline: 'Proactive vulnerability assessments, data lake hardening, and regulatory compliance.',
      description: 'Your data is your most valuable asset—and your highest liability if compromised. Qantyrix Tech LLC conducts rigorous security audits across cloud environments, enforces zero-trust access controls, and hardens databases against ransomware, unauthorized exfiltration, and compliance penalties.',
      capabilities: [
        'Cloud security architecture reviews for AWS, Google Cloud, and Azure infrastructures',
        'Zero-trust database access policies and automated IAM role-pruning',
        'End-to-end encryption protocols (AES-256 for data at rest, TLS 1.3 in transit)',
        'Vulnerability assessments, automated penetration tests, and patch monitoring',
        'SOC2 Type II, HIPAA, and GDPR technical compliance readiness',
        '24/7 Security incident triage and automated anomaly intrusion detection'
      ],
      techStack: ['Zero-Trust', 'AES-256', 'AWS GuardDuty', 'CloudTrail', 'IAM RBAC', 'WAF', 'SOC2 / HIPAA']
    },
    {
      id: 'cloud-modernization',
      icon: Server,
      tag: 'Service 05',
      title: 'Cloud Warehouse Modernization & Query Tuning',
      tagline: 'Eliminating sluggish queries and slashing bloated cloud warehouse bills by up to 50%.',
      description: 'Are your cloud databases grinding to a halt during peak hours? We refactor slow SQL queries, optimize clustering keys and partitioning schemes, and migrate legacy on-prem databases (MySQL, SQL Server) to modern cloud engines without operational downtime.',
      capabilities: [
        'Deep SQL query refactoring and index optimization across relational and cloud DBMS',
        'Warehouse compute sizing, auto-suspend policies, and cost-governance controls',
        'Seamless database migrations to Amazon RDS, Google Cloud SQL, and Snowflake',
        'Materialized view architectures and caching layers to minimize compute cycles',
        'Continuous performance benchmarking under simulated peak stress loads',
        'Full architectural handoff with comprehensive documentation and playbooks'
      ],
      techStack: ['Google Cloud SQL', 'Amazon RDS', 'Snowflake Tuning', 'MySQL', 'SQL Server', 'PostgreSQL']
    }
  ];

  const deliveryPhases = [
    {
      num: '01',
      title: 'Architectural Audit & Discovery',
      desc: 'We inspect your existing databases, pipeline logs, query latency, and data security postures to identify immediate bottlenecks.'
    },
    {
      num: '02',
      title: 'Blueprint & Scope Formulation',
      desc: 'We map out a deterministic architecture blueprint with clear milestones, performance benchmarks, and estimated ROI.'
    },
    {
      num: '03',
      title: 'Agile Engineering Sprints',
      desc: 'Our senior data engineers and AI architects build, test, and containerize the solution with weekly progress demonstrations.'
    },
    {
      num: '04',
      title: 'Production Deploy & 24/7 SLA',
      desc: 'We deploy to production with zero-downtime cutover, complete staff documentation, and ongoing 24/7 SLA monitoring.'
    }
  ];

  return (
    <div className="page-wrapper services-page-view">
      {/* Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Enterprise Practice Areas</span>
          </div>
          <h1 className="page-hero-title">
            Specialized engineering for <br />
            <span className="hero-serif-italic">mission-critical data assets</span>
          </h1>
          <p className="page-hero-subtitle">
            From high-throughput data engineering to certified AI/ML models and 
            ironclad cybersecurity audits, we build systems that scale with your enterprise.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="services-full-list-section">
        <div className="services-full-container">
          <div className="services-cards-stack">
            {serviceOfferings.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.id} id={svc.id} className="service-pillar-card">
                  <div className="pillar-header-row">
                    <div className="pillar-tag-group">
                      <span className="pillar-index-tag">{svc.tag}</span>
                      <div className="pillar-icon-box">
                        <Icon size={24} className="text-orange" />
                      </div>
                    </div>

                    <button 
                      className="btn-pillar-inquire"
                      onClick={onOpenContact}
                    >
                      <span>Inquire for {svc.title}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                  <h2 className="pillar-title">{svc.title}</h2>
                  <p className="pillar-tagline">{svc.tagline}</p>
                  <p className="pillar-desc">{svc.description}</p>

                  <div className="pillar-capabilities-box">
                    <h3 className="capabilities-title">Key Capabilities & Deliverables</h3>
                    <div className="capabilities-grid">
                      {svc.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="capability-item">
                          <CheckCircle2 size={16} className="text-orange flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pillar-tech-footer">
                    <span className="tech-footer-label">Proven Technologies:</span>
                    <div className="tech-chips-row">
                      {svc.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4-Phase Delivery Framework */}
          <div className="delivery-framework-section">
            <div className="section-pill-tag">
              <span className="pill-dot"></span>
              <span>Our Delivery Methodology</span>
            </div>
            <h2 className="framework-headline">How we execute with mathematical precision</h2>
            <p className="framework-sub">
              No guesswork or uncontrolled scope creep. Every engagement follows our battle-tested 4-phase framework.
            </p>

            <div className="framework-steps-grid">
              {deliveryPhases.map((phase) => (
                <div key={phase.num} className="framework-step-card">
                  <div className="step-num-badge">{phase.num}</div>
                  <h3 className="step-title">{phase.title}</h3>
                  <p className="step-desc">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Need custom data, AI, or security engineering?</h3>
              <p className="cta-banner-desc">
                Contact our principal architect to discuss your data architecture, timeline, and deliverables.
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

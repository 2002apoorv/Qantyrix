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
      title: 'Data Analysis & Financial Planning (FP&A)',
      tagline: 'Transforming unstructured datasets and financial silos into high-conviction executive decision engines.',
      description: 'We specialize in end-to-end data extraction, exploration, statistical modeling, interactive visualization, and corporate Financial Planning & Analysis (FP&A). Whether you need cash-flow forecasting, patient outcomes in healthcare analytics, or marketing ROI, we deliver robust dashboards that load in sub-seconds.',
      capabilities: [
        'Interactive dashboards in Tableau, Power BI, and AWS QuickSight',
        'Financial Planning & Analysis (FP&A), automated P&L reconciliations & variance models',
        'Statistical analysis, hypothesis testing, and time series forecasting',
        'Healthcare analytics, clinical workflows, and patient data modeling',
        'Automated executive email digests and real-time metric threshold alerts',
        'Comprehensive data dictionaries, KPI definitions, and staff training'
      ],
      techStack: ['FP&A Modeling', 'Tableau', 'Power BI', 'AWS QuickSight', 'Python', 'R', 'Advanced SQL', 'QlikView']
    },
    {
      id: 'data-engineering',
      icon: Database,
      tag: 'Service 02',
      title: 'Data Engineering & Cloud Warehousing',
      tagline: 'High-throughput, fault-tolerant data pipelines that eliminate bottlenecks and scale effortlessly.',
      description: 'We design and construct resilient ETL/ELT pipelines capable of ingesting millions of structured and unstructured records per hour. From Apache NiFi real-time stream processing to AWS Glue, Databricks, and Snowflake, we turn raw streams into pristine data lakes and warehouses.',
      capabilities: [
        'Multi-source ETL/ELT pipeline architecture with Apache NiFi, AWS Glue & SSIS',
        'Cloud data warehousing on Snowflake, Databricks, AWS Redshift & Google BigQuery',
        'Automated web scraping and API ingestion using Beautiful Soup, Scrapy & custom workers',
        'Schema evolution, data deduplication, and automated data quality validation (dbt)',
        'High-concurrency streaming pipelines with zero packet loss guarantees',
        'Disaster recovery, point-in-time rollback, and multi-region failover'
      ],
      techStack: ['Snowflake', 'Databricks', 'Google BigQuery', 'AWS Redshift', 'Apache NiFi', 'AWS Glue', 'dbt', 'Python']
    },
    {
      id: 'ai-ml',
      icon: BrainCircuit,
      tag: 'Service 03',
      title: 'Agentic AI, GenAI & NLP Engineering',
      tagline: 'Production-ready Generative AI, LangGraph multi-agent workflows, and predictive models.',
      description: 'We engineer cutting-edge Agentic AI and Generative AI systems directly integrated into enterprise processes. Leveraging LangGraph, LangChain, Hugging Face, TensorFlow, and PyTorch, we build custom LLM agents, prompt engineering routines, and vector retrieval pipelines.',
      capabilities: [
        'Agentic AI multi-agent workflows and cyclic orchestration with LangGraph',
        'Custom Generative AI (GenAI), enterprise LLMs, and RAG architectures',
        'Prompt engineering, tokenization optimization, and fine-tuning (LoRA/QLoRA)',
        'Natural Language Processing (NLP) for document parsing, sentiment, and categorization',
        'Predictive modeling with TensorFlow & PyTorch for demand and risk forecasting',
        'Vector databases (Pinecone, ChromaDB, Weaviate) with sub-25ms semantic search'
      ],
      techStack: ['Agentic AI', 'LangGraph', 'LangChain', 'GenAI', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Prompt Engineering', 'Tokenization']
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      tag: 'Service 04',
      title: 'Cybersecurity, ISO 27001 & Compliance Audits',
      tagline: 'Proactive vulnerability assessments, data lake hardening, and regulatory governance.',
      description: 'Led by enterprise cybersecurity program leaders with over a decade of experience across Columbia Bank, EY, and IBM, Qantyrix conducts ISO 27001 audits, enforces zero-trust access controls, deploys DLP for 500k+ users, and hardens cloud databases against modern threat vectors.',
      capabilities: [
        'Enterprise ISO 27001 Lead Auditor assessments and ISMS implementation',
        'Global Data Loss Prevention (DLP) programs protecting enterprise assets',
        'Cloud security architecture reviews for AWS, Google Cloud, and Azure infrastructures',
        'Zero-trust database access policies and automated IAM least-privilege RBAC',
        'NIST incident response alignment, penetration test mitigation, and threat modeling',
        'SOC2 Type II, HIPAA, GDPR, and CCPA regulatory compliance readiness'
      ],
      techStack: ['ISO 27001', 'DLP (500k+ Users)', 'NIST Framework', 'Zero-Trust', 'GDPR / CCPA', 'AES-256', 'SOC2 / HIPAA']
    },
    {
      id: 'cloud-modernization',
      icon: Server,
      tag: 'Service 05',
      title: 'Multi-Cloud Modernization & Query Tuning',
      tagline: 'Eliminating sluggish queries and slashing bloated cloud warehouse bills by up to 50%.',
      description: 'Are your cloud databases grinding to a halt during peak hours? We refactor slow SQL queries, optimize clustering keys and micro-partitioning across Snowflake, Databricks, BigQuery, and RDS without operational downtime.',
      capabilities: [
        'Deep SQL query refactoring and index optimization across relational and cloud DBMS',
        'Warehouse compute sizing, auto-suspend policies, and cost-governance controls',
        'Seamless database migrations to Amazon RDS, Google Cloud SQL, Databricks, and Snowflake',
        'Materialized view architectures and caching layers to minimize compute cycles',
        'Continuous performance benchmarking under simulated peak stress loads',
        'Full architectural handoff with comprehensive documentation and playbooks'
      ],
      techStack: ['AWS', 'GCP', 'Databricks', 'Snowflake', 'Amazon RDS', 'Google Cloud SQL', 'PostgreSQL']
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

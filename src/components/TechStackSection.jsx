import React, { useState } from 'react';
import { 
  Cpu, 
  BrainCircuit, 
  Database, 
  Cloud, 
  Code2, 
  TrendingUp, 
  ShieldCheck, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function TechStackSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Layers },
    { id: 'ai-agents', name: 'AI & Agentic Systems', icon: BrainCircuit },
    { id: 'nlp-genai', name: 'NLP & Prompt Engineering', icon: Sparkles },
    { id: 'data-warehouse', name: 'Data Warehousing & Management', icon: Database },
    { id: 'cloud', name: 'Cloud Ecosystems (AWS, GCP, Databricks)', icon: Cloud },
    { id: 'coding', name: 'Coding & Engineering', icon: Code2 },
    { id: 'fpa-bi', name: 'Financial Planning & BI', icon: TrendingUp },
    { id: 'security', name: 'Cybersecurity & Compliance', icon: ShieldCheck }
  ];

  const techItems = [
    // AI & Agentic Systems
    { name: 'Agentic AI', category: 'ai-agents', tag: 'Core AI', desc: 'Autonomous goal-driven multi-agent workflows' },
    { name: 'Generative AI (GenAI)', category: 'ai-agents', tag: 'Core AI', desc: 'Custom enterprise generative model deployments' },
    { name: 'LangGraph', category: 'ai-agents', tag: 'Orchestration', desc: 'Cyclic graph orchestration for multi-agent workflows' },
    { name: 'LangChain', category: 'ai-agents', tag: 'Framework', desc: 'Composability framework for LLMs and data connectors' },
    { name: 'Hugging Face', category: 'ai-agents', tag: 'Models', desc: 'Open-source transformer architectures & fine-tuning' },
    { name: 'TensorFlow', category: 'ai-agents', tag: 'Deep Learning', desc: 'Scalable neural network training and production serving' },
    { name: 'PyTorch', category: 'ai-agents', tag: 'Deep Learning', desc: 'Dynamic deep learning & inference pipelines' },
    { name: 'n8n & AutoGPT', category: 'ai-agents', tag: 'Automation', desc: 'Workflow automation and self-directed agents' },

    // NLP & Prompt Engineering
    { name: 'Prompt Engineering', category: 'nlp-genai', tag: 'LLM Technique', desc: 'Few-shot prompting, chain-of-thought, guardrailing' },
    { name: 'Tokenization & Embeddings', category: 'nlp-genai', tag: 'NLP Core', desc: 'Byte-pair encoding, sentence transformers & vectors' },
    { name: 'NLP (Natural Language Processing)', category: 'nlp-genai', tag: 'Core NLP', desc: 'Sentiment classification, NER, text parsing' },
    { name: 'RAG Architecture', category: 'nlp-genai', tag: 'Retrieval', desc: 'Retrieval-Augmented Generation with vector DBs' },
    { name: 'Vector Databases', category: 'nlp-genai', tag: 'Vector Search', desc: 'Pinecone, ChromaDB, Weaviate, Milvus' },
    { name: 'Model Fine-Tuning', category: 'nlp-genai', tag: 'Optimization', desc: 'LoRA, QLoRA, domain adaptation on private data' },

    // Data Warehousing & Management
    { name: 'Snowflake', category: 'data-warehouse', tag: 'Cloud Warehouse', desc: 'Multi-cluster shared data architecture & micro-partitioning' },
    { name: 'Google BigQuery', category: 'data-warehouse', tag: 'Cloud Warehouse', desc: 'Serverless petabyte-scale SQL analytics engine' },
    { name: 'AWS Redshift', category: 'data-warehouse', tag: 'Cloud Warehouse', desc: 'High-performance columnar storage & concurrency scaling' },
    { name: 'Databricks Lakehouse', category: 'data-warehouse', tag: 'Data Lakehouse', desc: 'Delta Lake, Spark compute & unified governance' },
    { name: 'Apache NiFi', category: 'data-warehouse', tag: 'ETL Pipeline', desc: 'Real-time data routing, transformation & system mediation' },
    { name: 'AWS Glue & SSIS', category: 'data-warehouse', tag: 'ETL / ELT', desc: 'Serverless ETL catalogs and scheduled data jobs' },
    { name: 'Amazon RDS & Cloud SQL', category: 'data-warehouse', tag: 'RDBMS', desc: 'High-availability relational database management' },
    { name: 'dbt (data build tool)', category: 'data-warehouse', tag: 'Transformations', desc: 'Modular SQL data modeling, testing & documentation' },
    { name: 'Apache Spark & Kafka', category: 'data-warehouse', tag: 'Streaming', desc: 'Distributed event streaming and real-time processing' },

    // Cloud Ecosystems
    { name: 'AWS (Amazon Web Services)', category: 'cloud', tag: 'Cloud Leader', desc: 'S3, Redshift, Glue, SageMaker, Lambda, IAM' },
    { name: 'GCP (Google Cloud Platform)', category: 'cloud', tag: 'Cloud Leader', desc: 'BigQuery, Vertex AI, Cloud Functions, Cloud SQL' },
    { name: 'Databricks Platform', category: 'cloud', tag: 'Cloud Analytics', desc: 'Unified Data & AI on AWS/Azure/GCP' },
    { name: 'Microsoft Azure', category: 'cloud', tag: 'Cloud Platform', desc: 'Azure Synapse Analytics, Blob Storage, Azure OpenAI' },

    // Coding & Engineering
    { name: 'Python', category: 'coding', tag: 'Language', desc: 'Pandas, NumPy, Scikit-Learn, PyTorch, FastAPI' },
    { name: 'R', category: 'coding', tag: 'Statistics', desc: 'Advanced statistical modeling, ggplot2, time-series' },
    { name: 'Advanced SQL & Query Tuning', category: 'coding', tag: 'Database', desc: 'Window functions, CTEs, indexing, partition pruning' },
    { name: 'TypeScript & JavaScript', category: 'coding', tag: 'Full Stack', desc: 'Modern web applications, APIs & node runtimes' },
    { name: 'Docker & Kubernetes', category: 'coding', tag: 'DevOps', desc: 'Containerized microservices and ML endpoint orchestration' },
    { name: 'CI/CD & Git Automation', category: 'coding', tag: 'Delivery', desc: 'Automated testing, data schema validation, deployments' },

    // Financial Planning & Analysis (FP&A) & BI
    { name: 'Financial Planning & Analysis (FP&A)', category: 'fpa-bi', tag: 'Finance Core', desc: 'Cash flow models, P&L forecasting & scenario variance' },
    { name: 'Tableau', category: 'fpa-bi', tag: 'Executive BI', desc: 'Interactive visual analytics and enterprise dashboards' },
    { name: 'Microsoft Power BI', category: 'fpa-bi', tag: 'Executive BI', desc: 'Enterprise data modeling, DAX queries, Power Query' },
    { name: 'AWS QuickSight', category: 'fpa-bi', tag: 'Cloud BI', desc: 'Serverless machine learning-powered BI dashboards' },
    { name: 'QlikView', category: 'fpa-bi', tag: 'BI Analytics', desc: 'Associative data indexing and associative exploration' },

    // Cybersecurity, Risk & Compliance
    { name: 'ISO 27001 Lead Auditing', category: 'security', tag: 'Governance', desc: 'Enterprise ISMS frameworks and audit preparedness' },
    { name: 'GDPR & CCPA Compliance', category: 'security', tag: 'Privacy', desc: 'Data governance, right-to-be-forgotten, compliance' },
    { name: 'NIST Incident Response', category: 'security', tag: 'Security Ops', desc: 'Proactive threat modeling, detection & rapid triage' },
    { name: 'Data Loss Prevention (DLP)', category: 'security', tag: 'Enterprise Sec', desc: 'Global DLP program architectures for 500k+ users' },
    { name: 'Zero-Trust Architecture', category: 'security', tag: 'Infrastructure', desc: 'Least-privilege RBAC and perimeter defense' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section id="techstack" className="techstack-section">
      <div className="techstack-container">
        {/* Section Pill */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Enterprise Tech Stack & Tooling</span>
        </div>

        {/* Headline */}
        <div className="techstack-header-row">
          <div>
            <h2 className="techstack-headline">
              Production-tested tools & methods <br />
              <span className="hero-serif-italic">engineered for scale</span>
            </h2>
            <p className="techstack-subtext">
              From bleeding-edge Agentic AI and LangGraph pipelines to battle-tested 
              data warehousing across Snowflake, Databricks, AWS, and GCP.
            </p>
          </div>
          <button className="btn-techstack-inquire" onClick={onOpenContact}>
            <span>Request Custom Architecture</span>
            <Sparkles size={16} />
          </button>
        </div>

        {/* Category Pills Bar */}
        <div className="techstack-filter-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`techstack-filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Tech Cards */}
        <div className="techstack-cards-grid">
          {filteredItems.map((tech, idx) => (
            <div key={idx} className="tech-spec-card">
              <div className="tech-spec-top">
                <span className="tech-spec-badge">{tech.tag}</span>
                <CheckCircle2 size={15} className="text-blue" />
              </div>
              <h3 className="tech-spec-name">{tech.name}</h3>
              <p className="tech-spec-desc">{tech.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="techstack-footer-reassurance">
          <div className="reassurance-left">
            <ShieldCheck size={20} className="text-blue flex-shrink-0" />
            <div>
              <strong>Vendor-Neutral, Open Architecture:</strong> We never lock clients into proprietary black boxes. You retain 100% source code ownership and full cloud tenant governance.
            </div>
          </div>
          <button className="btn-techstack-discuss" onClick={onOpenContact}>
            <span>Audit Your Tech Stack</span>
          </button>
        </div>
      </div>
    </section>
  );
}


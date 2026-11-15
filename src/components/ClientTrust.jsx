import React from 'react';
import { 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Server,
  Zap,
  Sparkles,
  BrainCircuit
} from 'lucide-react';

export default function ClientTrust() {
  const techLogos = [
    { name: 'Snowflake', icon: Layers, desc: 'Cloud Data Warehouse' },
    { name: 'Databricks', icon: Cpu, desc: 'Unified Data & AI' },
    { name: 'AWS & Redshift', icon: Database, desc: 'Cloud Architecture' },
    { name: 'Google Cloud & BigQuery', icon: Cloud, desc: 'Petabyte Analytics' },
    { name: 'LangGraph & GenAI', icon: BrainCircuit, desc: 'Agentic Workflows' },
    { name: 'Tableau & Power BI', icon: BarChart3, desc: 'FP&A & Executive BI' },
    { name: 'Apache NiFi & Glue', icon: Server, desc: 'Real-time Pipelines' },
    { name: 'ISO 27001 & SOC2', icon: ShieldCheck, desc: 'Audited Cybersecurity' }
  ];

  return (
    <section className="client-trust-section">
      <div className="client-trust-container">
        <p className="trust-intro-text">
          PRODUCTION-PROVEN ENTERPRISE STACK & MULTI-CLOUD ECOSYSTEMS
        </p>
        
        <div className="trust-logos-grid">
          {techLogos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-logo-item">
                <div className="logo-icon-box">
                  <Icon size={18} className="trust-icon text-blue" />
                </div>
                <div className="trust-meta">
                  <span className="trust-name">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

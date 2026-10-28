import React from 'react';
import { 
  Database, 
  Cloud, 
  Cpu, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Server,
  Zap
} from 'lucide-react';

export default function ClientTrust() {
  const techLogos = [
    { name: 'Snowflake', icon: Layers, desc: 'Data Cloud & Warehousing' },
    { name: 'Google Cloud', icon: Cloud, desc: 'BigQuery & AI Platform' },
    { name: 'AWS Redshift', icon: Database, desc: 'Cloud Data Warehouse' },
    { name: 'Databricks', icon: Cpu, desc: 'Unified Analytics Engine' },
    { name: 'Apache NiFi', icon: Server, desc: 'Real-time ETL Pipelines' },
    { name: 'Tableau & Power BI', icon: BarChart3, desc: 'Enterprise BI Intelligence' },
    { name: 'Azure Synapse', icon: Zap, desc: 'End-to-End Analytics' },
    { name: 'SOC2 & HIPAA', icon: ShieldCheck, desc: 'Enterprise Security' },
  ];

  return (
    <section className="client-trust-section">
      <div className="client-trust-container">
        <p className="trust-intro-text">
          TRUSTED TECH STACK & PRODUCTION-PROVEN CLOUD ECOSYSTEMS
        </p>
        
        <div className="trust-logos-grid">
          {techLogos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="trust-logo-item">
                <div className="logo-icon-box">
                  <Icon size={18} className="trust-icon" />
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

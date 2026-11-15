import React, { useState } from 'react';
import { 
  HeartPulse, 
  Truck, 
  ShoppingBag, 
  Landmark, 
  TrendingUp, 
  Radio, 
  Tv, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export default function IndustriesSection({ onOpenContact }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      headline: 'Clinical Data Analytics, Patient Outcomes & HIPAA Compliance',
      icon: HeartPulse,
      badge: 'HIPAA & FDA Ready',
      desc: 'We engineer secure clinical data pipelines and patient risk models that unify electronic health records (EHR) and laboratory telemetry without compromising patient privacy.',
      capabilities: [
        'EHR/EMR data integration and FHIR protocol interoperability',
        'Predictive patient outcome and hospital readmission modeling',
        'Strict HIPAA, HITECH, and HITRUST compliance enforcement',
        'Real-time clinical laboratory and diagnostic telemetry streaming',
        'Automated billing and insurance claim anomaly detection'
      ],
      metrics: [
        { label: 'Query Latency', value: '< 800ms' },
        { label: 'HIPAA Audits', value: '100% Pass' },
        { label: 'Data Accuracy', value: '99.98%' }
      ]
    },
    {
      id: 'supply-chain',
      name: 'Supply Chain',
      headline: 'End-to-End Logistics Intelligence & Predictive Forecasting',
      icon: Truck,
      badge: 'Real-Time Visibility',
      desc: 'Transforming fragmented supply chain networks into synchronized, event-driven platforms. From warehouse inventory optimization to automated freight route planning.',
      capabilities: [
        'Multi-tier supplier telemetry ingestion with Apache NiFi & Kafka',
        'AI-driven demand forecasting and safety stock optimization',
        'Real-time GPS fleet tracking and dynamic route re-calculation',
        'Cold chain temperature telemetry monitoring with instant alerting',
        'Automated bill of lading (BOL) parsing with custom OCR/NLP'
      ],
      metrics: [
        { label: 'Stockout Reduction', value: '34%' },
        { label: 'ETL Throughput', value: '25k evt/s' },
        { label: 'Route Savings', value: '18% Fuel' }
      ]
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      headline: 'Customer 360, Churn Prevention & Dynamic Margin Pricing',
      icon: ShoppingBag,
      badge: 'Omnichannel Scale',
      desc: 'Powering high-velocity commerce with unified customer profiles, low-latency recommendation engines, and real-time multi-channel inventory synchronization.',
      capabilities: [
        'Real-time omnichannel inventory synchronization across warehouse and POS',
        'Personalized recommendation models with sub-40ms inference latency',
        'Customer lifetime value (LTV) and predictive churn scoring',
        'Basket analysis and dynamic algorithmic markdown pricing',
        'Cart abandonment sequence automation and event tracking'
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+22.4%' },
        { label: 'Inference Latency', value: '38ms' },
        { label: 'Retention Rate', value: '89.6%' }
      ]
    },
    {
      id: 'banking',
      name: 'Banking',
      headline: 'Zero-Trust Core Banking, Anti-Fraud & ISO 27001 Security',
      icon: Landmark,
      badge: 'ISO 27001 & SOC2',
      desc: 'Led by cybersecurity program leaders from premier financial institutions, we harden banking infrastructure, automate fraud detection, and guarantee strict regulatory compliance.',
      capabilities: [
        'Real-time fraud scoring on high-concurrency payment streams',
        'ISO 27001 Lead Auditor alignment and SOC2 Type II controls',
        'Anti-Money Laundering (AML) transaction monitoring pipelines',
        'Zero-trust database access and least-privilege IAM enforcement',
        'Automated audit trails, penetration test mitigation, and compliance reporting'
      ],
      metrics: [
        { label: 'Compliance Score', value: '100 / 100' },
        { label: 'Fraud Catch Rate', value: '99.4%' },
        { label: 'Security Breaches', value: '0' }
      ]
    },
    {
      id: 'financial-services',
      name: 'Financial Services',
      headline: 'Financial Planning & Analysis (FP&A) & Algorithmic Risk',
      icon: TrendingUp,
      badge: 'Automated FP&A',
      desc: 'Empowering hedge funds, wealth managers, and corporate finance departments with automated FP&A models, scenario analysis, and executive boardroom dashboards.',
      capabilities: [
        'Financial Planning and Analysis (FP&A) automation with Tableau & Power BI',
        'Dynamic scenario forecasting: cash flow, revenue run-rate, and burn rate',
        'High-frequency market data ingestion and time-series variance analysis',
        'Automated month-end P&L reconciliation and variance anomaly alerts',
        'Secure multi-entity financial consolidation across international subsidiaries'
      ],
      metrics: [
        { label: 'Close Cycle Time', value: '-65%' },
        { label: 'Reporting Speed', value: '10x Faster' },
        { label: 'Forecast Accuracy', value: '98.8%' }
      ]
    },
    {
      id: 'telecom',
      name: 'Telecom',
      headline: 'Petabyte-Scale Network Telemetry, 5G Analytics & SLA Defense',
      icon: Radio,
      badge: '5G High Throughput',
      desc: 'Ingesting billions of network events per day to diagnose latency bottlenecks, predict cell tower maintenance needs, and preserve subscriber loyalty.',
      capabilities: [
        'High-throughput network probe telemetry ingestion with Snowflake & BigQuery',
        'Cell tower traffic congestion detection and dynamic load redistribution',
        'Subscriber churn risk prediction based on call drop and latency signals',
        'SLA breach alerting and root-cause packet drop diagnosis',
        'Edge AI inferencing for real-time bandwidth prioritization'
      ],
      metrics: [
        { label: 'Event Ingestion', value: '500k+ evt/s' },
        { label: 'Network Uptime', value: '99.999%' },
        { label: 'Churn Reduction', value: '28%' }
      ]
    },
    {
      id: 'media',
      name: 'Media & Entertainment',
      headline: 'Audience Engagement Telemetry & Enterprise Data Protection',
      icon: Tv,
      badge: 'Digital Content Scale',
      desc: 'Drawing on proven leadership at global media publications, we optimize content distribution, protect intellectual property with enterprise DLP, and maximize ad yield.',
      capabilities: [
        'Real-time reader/viewer engagement analytics and content heatmaps',
        'Enterprise Data Loss Prevention (DLP) protecting proprietary assets',
        'Programmatic advertising yield attribution and CPM optimization models',
        'Multi-platform streaming telemetry aggregation (mobile, web, CTV)',
        'Content recommendation algorithms driving session duration'
      ],
      metrics: [
        { label: 'Engagement Lift', value: '+31%' },
        { label: 'Users Protected', value: '500K+' },
        { label: 'Ad Yield Gain', value: '+19.5%' }
      ]
    }
  ];

  const current = industries[selectedIndustry];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">
        {/* Pill Tag */}
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>Industries We Transform</span>
        </div>

        {/* Headline */}
        <div className="industries-header-row">
          <div className="industries-header-left">
            <h2 className="industries-headline">
              Purpose-built solutions for <br />
              <span className="hero-serif-italic">mission-critical sectors</span>
            </h2>
            <p className="industries-subtext">
              We bring deep vertical expertise, regulatory compliance (ISO 27001, HIPAA, GDPR), 
              and production data architectures tailored to your sector’s unique challenges.
            </p>
          </div>
          <div className="industries-header-right">
            <button className="btn-industry-consult" onClick={onOpenContact}>
              <span>Discuss Your Industry Needs</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Industry Pill Selector Tabs */}
        <div className="industries-nav-tabs">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isActive = selectedIndustry === idx;
            return (
              <button
                key={ind.id}
                className={`industry-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(idx)}
              >
                <Icon size={16} className={isActive ? 'text-blue' : ''} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card */}
        <div className="industry-spotlight-card">
          <div className="industry-card-left">
            <div className="industry-badge-row">
              <span className="industry-badge-chip">
                <CurrentIcon size={16} />
                <span>{current.name}</span>
              </span>
              <span className="industry-compliance-pill">{current.badge}</span>
            </div>

            <h3 className="industry-headline-title">{current.headline}</h3>
            <p className="industry-desc-text">{current.desc}</p>

            <div className="industry-capabilities-block">
              <h4 className="capabilities-label">Core Capabilities & Architecture:</h4>
              <ul className="capabilities-list">
                {current.capabilities.map((cap, cIdx) => (
                  <li key={cIdx} className="capability-item">
                    <CheckCircle2 size={16} className="text-blue flex-shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="industry-card-action">
              <button className="btn-industry-action" onClick={onOpenContact}>
                <span>Deploy {current.name} Architecture</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="industry-card-right">
            <div className="industry-metrics-deck">
              <div className="metrics-deck-header">
                <Sparkles size={16} className="text-blue" />
                <span>Verified Quantitative Benchmarks</span>
              </div>

              <div className="metrics-cards-stack">
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="industry-metric-box">
                    <span className="metric-box-val">{m.value}</span>
                    <span className="metric-box-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="industry-quote-box">
                <ShieldCheck size={18} className="text-blue" />
                <p>
                  Built and audited to withstand stringent enterprise security, high throughput surges, and rigorous regulatory oversight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Card Overview Grid */}
        <div className="industries-quick-grid">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isCurrent = selectedIndustry === idx;
            return (
              <div 
                key={ind.id} 
                className={`industry-mini-card ${isCurrent ? 'selected-card' : ''}`}
                onClick={() => setSelectedIndustry(idx)}
              >
                <div className="mini-icon-circle">
                  <Icon size={18} className="text-blue" />
                </div>
                <h4 className="mini-card-title">{ind.name}</h4>
                <p className="mini-card-desc">{ind.badge}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


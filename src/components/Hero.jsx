import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Database, 
  BrainCircuit, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Server
} from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [activeMetricTab, setActiveMetricTab] = useState('monthly');
  const [pipelineHealth, setPipelineHealth] = useState(99.8);

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow"></div>
      <div className="hero-grid-pattern"></div>

      <div className="hero-container">
        {/* Top Trust Badge */}
        <div className="hero-badge-pill">
          <span className="badge-dot-pulse"></span>
          <span className="badge-text">
            <strong>100% Data Integrity</strong> & SLA Delivery across 250+ Deployments
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          Architecting High-Impact <br />
          <span className="hero-serif-italic">Data & AI Solutions</span> <br />
          for your enterprise
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-subtitle">
          Transforming complex data ecosystems into decisive competitive advantage. 
          Specialized in <strong>Data Analysis</strong>, <strong>Data Engineering</strong>, 
          <strong> AI/ML Engineering</strong>, and <strong>Enterprise Cybersecurity</strong>.
        </p>

        {/* CTA Button Group */}
        <div className="hero-cta-group">
          <div className="hero-btn-wrapper">
            <button 
              className="btn-hero-primary" 
              onClick={onOpenContact}
              id="hero-start-project-btn"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} className="btn-icon" />
            </button>
            <div className="btn-glow-aura"></div>
          </div>
          
          <a href="#services" className="btn-hero-secondary">
            <span>Explore Services</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Interactive UI Mockups Deck (Matching the screenshot gallery) */}
        <div className="hero-mockup-deck">
          {/* Card 1: Mobile Executive KPI (Far Left) */}
          <div className="deck-card card-mobile-preview card-tilt-left">
            <div className="phone-notch"></div>
            <div className="phone-screen-content">
              <div className="phone-header">
                <span className="phone-time">9:41</span>
                <span className="phone-battery">100%</span>
              </div>
              <div className="phone-metric-box">
                <div className="phone-label">Net Data Yield</div>
                <div className="phone-val">$142,850</div>
                <div className="phone-pill-badge positive">+34.8% YoY</div>
              </div>
              <div className="phone-chart-bars">
                <div className="bar bar-1" style={{ height: '40%' }}></div>
                <div className="bar bar-2" style={{ height: '65%' }}></div>
                <div className="bar bar-3" style={{ height: '50%' }}></div>
                <div className="bar bar-4" style={{ height: '85%' }}></div>
                <div className="bar bar-5 active" style={{ height: '95%' }}></div>
              </div>
              <div className="phone-sub-item">
                <BrainCircuit size={14} className="phone-icon text-orange" />
                <span>AI Inferences: 4.8M/mo</span>
              </div>
            </div>
          </div>

          {/* Card 2: Data Engineering & Warehouse Pipeline (Center Left) */}
          <div className="deck-card card-pipeline-preview">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">snowflake-sync-cluster.sql</span>
              <span className="sync-badge">Live</span>
            </div>
            <div className="card-inner-body">
              <div className="pipeline-stat-row">
                <div>
                  <div className="stat-label">Ingestion Rate</div>
                  <div className="stat-num">18.4k <span className="stat-unit">evt/s</span></div>
                </div>
                <div className="stat-pill-green">
                  <Activity size={12} />
                  <span>99.98% Healthy</span>
                </div>
              </div>
              <div className="pipeline-nodes-visual">
                <div className="node-item">
                  <Database size={14} />
                  <span>AWS RDS</span>
                </div>
                <span className="node-flow-arrow">→</span>
                <div className="node-item highlight">
                  <Server size={14} />
                  <span>Apache NiFi</span>
                </div>
                <span className="node-flow-arrow">→</span>
                <div className="node-item accent">
                  <Layers size={14} />
                  <span>Snowflake</span>
                </div>
              </div>
              <div className="code-snippet-preview">
                <code>SELECT cluster_id, latency_ms FROM warehouse.perf_logs WHERE status = 'OPTIMIZED';</code>
              </div>
            </div>
          </div>

          {/* Card 3: Interactive Executive BI Dashboard (Center Hero Card) */}
          <div className="deck-card card-executive-bi card-featured">
            <div className="bi-card-header">
              <div className="bi-header-left">
                <div className="bi-icon-box">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="bi-title">Executive Revenue Analytics</div>
                  <div className="bi-sub">Tableau & Power BI Engine</div>
                </div>
              </div>
              <div className="bi-tab-toggle">
                <button 
                  className={`bi-tab ${activeMetricTab === 'weekly' ? 'active' : ''}`}
                  onClick={() => setActiveMetricTab('weekly')}
                >
                  Weekly
                </button>
                <button 
                  className={`bi-tab ${activeMetricTab === 'monthly' ? 'active' : ''}`}
                  onClick={() => setActiveMetricTab('monthly')}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="bi-kpi-row">
              <div className="kpi-cell">
                <span className="kpi-label">Target Revenue</span>
                <span className="kpi-val">$940,250</span>
                <span className="kpi-trend positive">↑ 24.2%</span>
              </div>
              <div className="kpi-cell">
                <span className="kpi-label">Query Latency</span>
                <span className="kpi-val">18ms</span>
                <span className="kpi-trend positive">↓ 68% faster</span>
              </div>
              <div className="kpi-cell">
                <span className="kpi-label">Cost Optimization</span>
                <span className="kpi-val">$24,600/mo</span>
                <span className="kpi-trend positive">Saved</span>
              </div>
            </div>

            {/* Glowing SVG Trend Chart */}
            <div className="bi-chart-container">
              <svg viewBox="0 0 400 120" className="bi-svg-chart">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff5722" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#ff5722" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,90 Q50,75 100,50 T200,45 T300,20 T400,10 L400,120 L0,120 Z" 
                  fill="url(#chartGradient)" 
                />
                <path 
                  d="M0,90 Q50,75 100,50 T200,45 T300,20 T400,10" 
                  fill="none" 
                  stroke="#ff5722" 
                  strokeWidth="3.5"
                  strokeLinecap="round" 
                />
                <circle cx="300" cy="20" r="5" fill="#ff5722" stroke="#ffffff" strokeWidth="2" />
                <circle cx="400" cy="10" r="5" fill="#ff5722" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
            
            <div className="bi-card-footer">
              <span className="status-live-indicator">
                <span className="ping-dot"></span> Real-time data pipeline active
              </span>
              <span className="author-tag">Google Cloud & Data Science Verified</span>
            </div>
          </div>

          {/* Card 4: AI/ML Inference & Predictive Analytics (Center Right) */}
          <div className="deck-card card-ai-preview">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">deep-learning-nlp.py</span>
              <span className="sync-badge">Trained</span>
            </div>
            <div className="card-inner-body">
              <div className="ai-stat-row">
                <div>
                  <div className="stat-label">Model Accuracy</div>
                  <div className="stat-num text-orange">99.4%</div>
                </div>
                <div className="stat-badge-sub">
                  <span>PyTorch / NLP</span>
                </div>
              </div>
              <div className="ai-metric-grid">
                <div className="ai-pill">
                  <span className="muted">Loss:</span>
                  <strong>0.0018</strong>
                </div>
                <div className="ai-pill">
                  <span className="muted">Inference:</span>
                  <strong>12ms</strong>
                </div>
                <div className="ai-pill">
                  <span className="muted">F1-Score:</span>
                  <strong>0.992</strong>
                </div>
              </div>
              <div className="ai-progress-bar-wrap">
                <div className="ai-progress-label">
                  <span>Data Ingestion & Embedding</span>
                  <span>100%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Cybersecurity & Threat Shield (Far Right) */}
          <div className="deck-card card-security-preview card-tilt-right">
            <div className="security-icon-circle">
              <ShieldCheck size={28} className="text-orange" />
            </div>
            <div className="security-title">Security & Compliance</div>
            <div className="security-score">100 / 100</div>
            <div className="security-checklist">
              <div className="sec-item">
                <CheckCircle2 size={13} className="text-green" />
                <span>SOC2 Type II Ready</span>
              </div>
              <div className="sec-item">
                <CheckCircle2 size={13} className="text-green" />
                <span>AES-256 Cloud Encryption</span>
              </div>
              <div className="sec-item">
                <CheckCircle2 size={13} className="text-green" />
                <span>0 Zero-Day Vulnerabilities</span>
              </div>
            </div>
            <div className="sec-badge-verified">Audited & Hardened</div>
          </div>
        </div>
      </div>
    </section>
  );
}

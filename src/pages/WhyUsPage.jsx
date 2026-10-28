import React, { useState } from 'react';
import { 
  Users, 
  Headphones, 
  Award, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Calculator,
  ChevronDown
} from 'lucide-react';

export default function WhyUsPage({ onOpenContact }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [cloudSpend, setCloudSpend] = useState(15000);

  // ROI calculation
  const estimatedSavings = Math.round(cloudSpend * 0.38);
  const annualSavings = estimatedSavings * 12;

  const comparisonPoints = [
    {
      feature: 'Engineering Talent Assigned',
      others: 'Junior developers learning on your live budget',
      qantyrix: '5+ Year certified senior data & AI architects only'
    },
    {
      feature: 'Pipeline Emergency Coverage',
      others: 'Standard business hours only (9 AM – 5 PM)',
      qantyrix: '24/7 Priority SLA on-call response for production crashes'
    },
    {
      feature: 'Pricing & Scoping Transparency',
      others: 'Unpredictable hourly billing with runaway scope',
      qantyrix: 'Fixed-milestone flat sprints with upfront ROI commitments'
    },
    {
      feature: 'Code & Architecture Ownership',
      others: 'Vendor lock-in or proprietary closed platforms',
      qantyrix: '100% Client IP ownership, open source stacks & clear playbooks'
    },
    {
      feature: 'System Scalability Guarantee',
      others: 'Patched solutions that buckle under 2x data growth',
      qantyrix: 'Engineered from day one to handle 10X surges effortlessly'
    }
  ];

  const pillars = [
    {
      icon: Users,
      title: 'Senior Engineers Only',
      desc: 'We never practice the classic agency "bait-and-switch" where senior partners pitch you and fresh graduates build your database. Every line of SQL, ETL pipeline, and PyTorch model is written and reviewed by seasoned engineers.'
    },
    {
      icon: Headphones,
      title: '24/7 Safety Net & Triage',
      desc: 'Production data pipelines and threat actors do not punch out at 5 PM. When high-volume streaming jobs fail or latency spikes in the middle of the night, our emergency on-call team responds within the hour.'
    },
    {
      icon: Award,
      title: 'Battle-Tested Expertise',
      desc: 'Refined across more than 250 enterprise deployments. We know the precise nuances of Snowflake micro-partitioning, NiFi backpressure tuning, BigQuery slot allocation, and HIPAA/SOC2 compliance standards.'
    },
    {
      icon: Clock,
      title: 'Fix It in Hours, Not Weeks',
      desc: 'Stuck with a crashing ETL pipeline, severe database lock contention, or broken schema migration? Our emergency triage team diagnoses, patches, and documents fixes with guaranteed same-day turnaround.'
    },
    {
      icon: DollarSign,
      title: 'Zero Guesswork Pricing',
      desc: 'No vague timesheets or surprise invoices. We offer deterministic flat-rate sprints and clearly scoped milestones with performance commitments and estimated cloud ROI prior to sprint kickoff.'
    },
    {
      icon: TrendingUp,
      title: 'Always Scaling Architecture',
      desc: 'We architect systems for tomorrow’s scale today. Our modular data lakes and microservices withstand 10X data surges without requiring disruptive ground-up rewrites.'
    }
  ];

  const faqs = [
    {
      q: 'How quickly can Qantyrix Tech LLC onboard onto our existing codebase or data warehouse?',
      a: 'We can typically start an engagement within 48 to 72 hours. We conduct an initial audit of your repositories, Snowflake/BigQuery instances, and pipeline logs to deliver a technical diagnostic report in the first week.'
    },
    {
      q: 'Do you work with our in-house engineering team, or handle projects autonomously?',
      a: 'We do both! We can operate as an autonomous sprint team delivering turn-key pipelines and dashboards, or embed directly alongside your engineers as principal architects and mentors.'
    },
    {
      q: 'How does Qantyrix ensure the confidentiality of our proprietary client data?',
      a: 'Confidentiality is foundational. We execute strict bilateral Non-Disclosure Agreements (NDAs), adhere to SOC2 Type II and HIPAA compliance standards, and enforce zero persistent local data storage policies.'
    },
    {
      q: 'What engagement models do you offer?',
      a: 'We offer three flexible models: (1) Emergency Rapid Triage for immediate production fixes, (2) Fixed-Scope Sprints (2 to 8 weeks) for specific pipeline or ML deliverables, and (3) Ongoing Managed Data Platform Support with guaranteed 24/7 SLAs.'
    }
  ];

  return (
    <div className="page-wrapper why-us-page-view">
      {/* Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Why Choose Qantyrix</span>
          </div>
          <h1 className="page-hero-title">
            The difference between <br />
            <span className="hero-serif-italic">generic agencies & senior engineering</span>
          </h1>
          <p className="page-hero-subtitle">
            Discover why forward-thinking CTOs, VP of Data, and engineering leaders 
            trust Qantyrix Tech LLC with their most critical analytical infrastructure.
          </p>
        </div>
      </section>

      {/* 6 Bento Pillars */}
      <section className="why-us-pillars-section">
        <div className="why-us-pillars-container">
          <div className="bento-grid">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bento-card">
                  <div className="bento-icon-box">
                    <Icon size={22} className="bento-icon" />
                  </div>
                  <h3 className="bento-card-title">{item.title}</h3>
                  <p className="bento-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive ROI Calculator */}
          <div className="interactive-roi-calculator-box">
            <div className="calculator-header">
              <div className="calc-icon-circle">
                <Calculator size={22} className="text-orange" />
              </div>
              <div>
                <h3 className="calc-title">Interactive Cloud Data Warehouse Cost-Savings Estimator</h3>
                <p className="calc-sub">
                  Adjust your current monthly cloud warehouse expenditure (Snowflake, BigQuery, Redshift, RDS) to see typical optimization gains:
                </p>
              </div>
            </div>

            <div className="calculator-body-grid">
              <div className="slider-control-side">
                <div className="slider-val-display">
                  <span>Current Monthly Cloud Bill:</span>
                  <strong className="text-orange">${cloudSpend.toLocaleString()} / mo</strong>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={cloudSpend}
                  onChange={(e) => setCloudSpend(Number(e.target.value))}
                  className="spend-slider"
                />
                <div className="slider-ticks">
                  <span>$2,000/mo</span>
                  <span>$50,000/mo</span>
                  <span>$100,000+/mo</span>
                </div>
              </div>

              <div className="savings-display-side">
                <div className="savings-card-highlight">
                  <span className="savings-tag">Projected Monthly Savings (35–45%)</span>
                  <div className="savings-num">${estimatedSavings.toLocaleString()} / mo</div>
                  <div className="savings-annual">
                    Equivalent to <strong>${annualSavings.toLocaleString()}</strong> recaptured annually
                  </div>
                  <span className="savings-bonus-metric">
                    + Up to 8x faster query execution through custom SQL & schema tuning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side-by-side Comparison Table */}
          <div className="comparison-table-wrapper">
            <div className="section-pill-tag">
              <span className="pill-dot"></span>
              <span>Direct Comparison</span>
            </div>
            <h2 className="comparison-heading">How Qantyrix Compares to Traditional Agencies</h2>

            <div className="comparison-table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Critical Factor</th>
                    <th>Typical Agencies & Generalists</th>
                    <th className="highlight-col">Qantyrix Tech LLC</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((row, idx) => (
                    <tr key={idx}>
                      <td className="factor-cell">{row.feature}</td>
                      <td className="others-cell">
                        <div className="cell-flex">
                          <XCircle size={16} className="text-red flex-shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                      <td className="qantyrix-cell">
                        <div className="cell-flex">
                          <CheckCircle2 size={16} className="text-orange flex-shrink-0" />
                          <strong>{row.qantyrix}</strong>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="why-us-faq-wrapper">
            <div className="section-pill-tag">
              <span className="pill-dot"></span>
              <span>Questions & Answers</span>
            </div>
            <h2 className="faq-main-title">Frequently Asked Questions</h2>

            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="page-cta-banner">
            <div className="cta-banner-content">
              <h3 className="cta-banner-title">Experience senior engineering on your next sprint</h3>
              <p className="cta-banner-desc">
                Book a confidential scoping consultation to discuss architecture, timelines, and deliverables.
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

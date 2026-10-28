import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Data Analysis & BI',
    budget: '$5k - $15k',
    timeline: 'Immediate / Urgent',
    message: ''
  });

  const servicesList = [
    'Data Analysis & BI',
    'Data Engineering & Pipelines',
    'AI / ML Engineering & NLP',
    'Cybersecurity & Audits',
    'Cloud Warehouse Modernization'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper contact-page-view">
      {/* Header */}
      <section className="page-hero-header">
        <div className="page-header-container">
          <div className="section-pill-tag">
            <span className="pill-dot"></span>
            <span>Get in Touch & Strategy Booking</span>
          </div>
          <h1 className="page-hero-title">
            Let’s engineer something <br />
            <span className="hero-serif-italic">extraordinary together</span>
          </h1>
          <p className="page-hero-subtitle">
            Connect directly with Akshda Shandilya and our lead engineering team. 
            We provide free 45-minute technical discovery and scoping sessions.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Channels Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-dual-layout">
            {/* Left Column: Direct Founder Contacts & Guarantees */}
            <div className="contact-left-details">
              <div className="contact-info-card">
                <span className="card-kicker">Direct Contact Channels</span>
                <h2 className="card-headline">Reach Akshda Shandilya</h2>
                <p className="card-subtext">
                  Skip the middleman and sales reps. Speak directly with the principal data and AI architect who designs your system.
                </p>

                <div className="direct-channels-stack">
                  <a href="mailto:akshdashandilya@gmail.com" className="direct-channel-item">
                    <div className="channel-icon-circle">
                      <Mail size={18} className="text-orange" />
                    </div>
                    <div>
                      <span className="channel-label">Email Directly</span>
                      <strong className="channel-value">akshdashandilya@gmail.com</strong>
                    </div>
                  </a>

                  <a href="tel:+19733702024" className="direct-channel-item">
                    <div className="channel-icon-circle">
                      <Phone size={18} className="text-orange" />
                    </div>
                    <div>
                      <span className="channel-label">Phone & Emergency Line</span>
                      <strong className="channel-value">+1 (973) 370-2024</strong>
                    </div>
                  </a>

                  <div className="direct-channel-item">
                    <div className="channel-icon-circle">
                      <MapPin size={18} className="text-orange" />
                    </div>
                    <div>
                      <span className="channel-label">Location & Base</span>
                      <strong className="channel-value">New York City Metropolitan Area</strong>
                    </div>
                  </div>

                  <a 
                    href="https://www.linkedin.com/in/akshda" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="direct-channel-item"
                  >
                    <div className="channel-icon-circle">
                      <LinkedinIcon size={18} className="text-orange" />
                    </div>
                    <div>
                      <span className="channel-label">LinkedIn Network</span>
                      <strong className="channel-value">linkedin.com/in/akshda</strong>
                    </div>
                  </a>
                </div>

                <div className="guarantees-box">
                  <h4 className="guarantees-title">The Qantyrix Engagement Guarantee</h4>
                  <ul className="guarantees-list">
                    <li>
                      <CheckCircle2 size={15} className="text-green flex-shrink-0" />
                      <span><strong>2–4 Hour Response Time:</strong> Guaranteed weekday reply</span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-green flex-shrink-0" />
                      <span><strong>Bilateral NDA:</strong> Strict confidentiality of all data & schemas</span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} className="text-green flex-shrink-0" />
                      <span><strong>Zero Obligation:</strong> Actionable technical roadmap on every call</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry & Proposal Request Form */}
            <div className="contact-right-form-wrap">
              <div className="inquiry-form-card">
                {submitted ? (
                  <div className="contact-success-banner">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={54} className="text-orange" />
                    </div>
                    <h3 className="success-headline">Inquiry Dispatched Successfully!</h3>
                    <p className="success-body">
                      Thank you, <strong>{formData.fullName}</strong>. Your project brief has been routed directly to Akshda Shandilya. We will review your requirements for <strong>{formData.service}</strong> and get in touch within 2 to 4 business hours.
                    </p>
                    <div className="success-summary-box">
                      <div><span>Email:</span> <strong>{formData.email}</strong></div>
                      <div><span>Estimated Budget:</span> <strong>{formData.budget}</strong></div>
                      <div><span>Timeline:</span> <strong>{formData.timeline}</strong></div>
                    </div>
                    <button 
                      className="btn-modal-done"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="form-card-header">
                      <h3 className="form-title">Request Technical Proposal or Consultation</h3>
                      <p className="form-sub">Fill out the brief below and we will prepare a tailored scoping architecture.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="page-contact-form">
                      <div className="form-row-dual">
                        <div className="form-group">
                          <label htmlFor="pFullName">Full Name *</label>
                          <input
                            type="text"
                            id="pFullName"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pEmail">Work Email *</label>
                          <input
                            type="email"
                            id="pEmail"
                            required
                            placeholder="sarah@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row-dual">
                        <div className="form-group">
                          <label htmlFor="pPhone">Phone Number</label>
                          <input
                            type="tel"
                            id="pPhone"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pCompany">Company Name</label>
                          <input
                            type="text"
                            id="pCompany"
                            placeholder="e.g. Acme Health Tech"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Primary Service Needed *</label>
                        <div className="services-select-chips">
                          {servicesList.map((svc) => (
                            <button
                              type="button"
                              key={svc}
                              className={`svc-chip ${formData.service === svc ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, service: svc })}
                            >
                              {svc}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-row-dual">
                        <div className="form-group">
                          <label htmlFor="pBudget">Estimated Project Budget</label>
                          <select
                            id="pBudget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          >
                            <option value="<$5k">&lt; $5,000 (Advisory / Audit)</option>
                            <option value="$5k - $15k">$5,000 - $15,000 (Sprint / Pipeline)</option>
                            <option value="$15k - $50k">$15,000 - $50,000 (Full Platform / AI Engine)</option>
                            <option value="$50k+">$50,000+ (Enterprise Transformation)</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="pTimeline">Target Delivery Timeline</label>
                          <select
                            id="pTimeline"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          >
                            <option value="Immediate / Urgent">Immediate / 24-hr Emergency</option>
                            <option value="1-2 Weeks">Within 1-2 Weeks</option>
                            <option value="1-2 Months">Within 1-2 Months</option>
                            <option value="Flexible">Exploratory / Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="pMessage">Project Scope & Technical Details *</label>
                        <textarea
                          id="pMessage"
                          required
                          rows={4}
                          placeholder="Describe your current tech stack, databases (Snowflake, RDS, BigQuery), data volume, challenges, or what you'd like to build..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>

                      <div className="form-submit-row">
                        <button type="submit" className="btn-submit-inquiry">
                          <span>Submit Proposal Request</span>
                          <Send size={16} />
                        </button>
                        <span className="privacy-reassurance">
                          Strict NDA protection guaranteed.
                        </span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

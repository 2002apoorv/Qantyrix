import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formSubmitted, setFormSubmitted] = useState(false);
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
    setFormSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {formSubmitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="text-orange" />
            </div>
            <h3 className="success-title">Strategy Request Received!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Akshda Shandilya and our lead engineering team will review your requirements for <strong>{formData.service}</strong> and get back to you within 2-4 business hours.
            </p>
            <div className="success-details-box">
              <div className="detail-line">
                <span>Confirmation sent to:</span>
                <strong>{formData.email}</strong>
              </div>
              <div className="detail-line">
                <span>Direct emergency line:</span>
                <strong>+1 (973) 370-2024</strong>
              </div>
            </div>
            <button 
              className="btn-modal-done"
              onClick={() => {
                setFormSubmitted(false);
                onClose();
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="modal-form-wrapper">
            <div className="modal-header-info">
              <div className="modal-pill-tag">
                <Sparkles size={14} className="text-orange" />
                <span>Qantyrix Tech LLC • Consultation</span>
              </div>
              <h2 className="modal-title">Start Your Project or Schedule a Consultation</h2>
              <p className="modal-sub">
                Connect directly with <strong>Akshda Shandilya</strong> and senior data architects. We typically respond within 2–4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="project-inquiry-form">
              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="fullName">Your Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-dual">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Organization</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company name"
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
                  <label htmlFor="budget">Estimated Budget</label>
                  <select
                    id="budget"
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
                  <label htmlFor="timeline">Desired Timeline</label>
                  <select
                    id="timeline"
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
                <label htmlFor="message">Project Scope & Technical Details *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your data sources, databases (Snowflake, BigQuery, RDS), challenges, or what you'd like to build..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-submit-inquiry">
                  <span>Send Project Inquiry</span>
                  <Send size={16} />
                </button>
                <div className="direct-reach-sub">
                  <span>Or email directly:</span>
                  <a href="mailto:akshdashandilya@gmail.com" className="direct-link">
                    akshdashandilya@gmail.com
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

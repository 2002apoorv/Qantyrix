import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

function LinkedinIcon({ size = 15, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({ onOpenContact }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top CTA Row */}
        <div className="footer-top-banner">
          <div className="footer-banner-left">
            <h3 className="footer-banner-title">
              Ready to turn raw data into strategic intelligence?
            </h3>
            <p className="footer-banner-sub">
              Book a direct scoping session with Akshda Shandilya, Gaurav Trehan, and our engineering leads.
            </p>
          </div>
          <div className="footer-banner-right">
            <button className="btn-footer-cta" onClick={onOpenContact}>
              <span>Start Your Project</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Multi-column grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand" onClick={scrollToTop}>
              <div className="logo-icon-wrapper small">
                <span className="logo-letter">Q</span>
              </div>
              <div className="logo-text-group">
                <span className="brand-name">Qantyrix</span>
                <span className="brand-suffix">TECH LLC</span>
              </div>
            </Link>

            <p className="footer-mission-text">
              Qantyrix Tech LLC is a premier technology consultancy specializing in high-performance Data Engineering, Agentic AI, Cloud Warehousing (Snowflake, Databricks, BigQuery, AWS), and Enterprise Cybersecurity (ISO 27001, DLP, Zero-Trust).
            </p>

            <div className="footer-cert-badges">
              <span className="footer-badge">
                <ShieldCheck size={13} className="text-blue" /> ISO 27001 Lead Auditor
              </span>
              <span className="footer-badge">
                <ShieldCheck size={13} className="text-blue" /> Google Cloud Certified
              </span>
              <span className="footer-badge">
                <Sparkles size={13} className="text-blue" /> AI 201 Data Science
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><a href="/#industries">Industries We Serve</a></li>
              <li><a href="/#techstack">Tech Stack & Tooling</a></li>
              <li><Link to="/about">About Qantyrix</Link></li>
              <li><Link to="/founder">Leadership & Co-Founders</Link></li>
              <li><Link to="/why-us">Why Choose Us</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Practice Areas</h4>
            <ul className="footer-links-list">
              <li><Link to="/services">Data Engineering & Pipelines</Link></li>
              <li><Link to="/services">Agentic AI & LangGraph / GenAI</Link></li>
              <li><Link to="/services">Snowflake & Databricks Warehousing</Link></li>
              <li><Link to="/services">Financial Planning & Analysis (FP&A)</Link></li>
              <li><Link to="/services">Enterprise Cybersecurity & ISO 27001</Link></li>
              <li><Link to="/services">Prompt Engineering & NLP</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Leadership Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-founder-contact-card">
                <span className="contact-founder-label">Data & AI Architecture:</span>
                <a href="mailto:akshdashandilya@gmail.com" className="f-contact-link">
                  <Mail size={14} className="text-blue" />
                  <span>akshdashandilya@gmail.com</span>
                </a>
                <a href="tel:+19733702024" className="f-contact-link">
                  <Phone size={14} className="text-blue" />
                  <span>+1 (973) 370-2024</span>
                </a>
              </div>

              <div className="footer-founder-contact-card">
                <span className="contact-founder-label">Cybersecurity & Programs:</span>
                <a href="mailto:gaurav@trehans.us" className="f-contact-link">
                  <Mail size={14} className="text-blue" />
                  <span>gaurav@trehans.us</span>
                </a>
                <a href="tel:+14133888789" className="f-contact-link">
                  <Phone size={14} className="text-blue" />
                  <span>+1 (413) 388-8789</span>
                </a>
              </div>

              <div className="f-contact-link">
                <MapPin size={14} className="text-blue" />
                <span>NYC Metropolitan Area & Springfield, MA</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter-wrap">
              <span className="newsletter-label">Subscribe to Tech Insights</span>
              {subscribed ? (
                <div className="newsletter-success">
                  <CheckCircle2 size={16} className="text-green" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    required
                    placeholder="Enter work email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <button type="submit" aria-label="Subscribe">
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} <strong>Qantyrix Tech LLC</strong>. All rights reserved. Registered in USA.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Qantyrix Tech LLC ensures strict client confidentiality and non-disclosure (NDA) protection for all client datasets.'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: All engagements backed by comprehensive Service Level Agreements (SLAs).'); }}>Terms of Service</a>
            <span>•</span>
            <a href="#security" onClick={(e) => { e.preventDefault(); alert('Security: AES-256 cloud encryption, SOC2 readiness, and zero data storage without explicit permission.'); }}>Security Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

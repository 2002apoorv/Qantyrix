import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Why Us', path: '/why-us' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-wrapper">
            <span className="logo-letter">Q</span>
            <span className="logo-glow-dot"></span>
          </div>
          <div className="logo-text-group">
            <span className="brand-name">Qantyrix</span>
            <span className="brand-suffix">TECH LLC</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button 
            className="btn-get-in-touch"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                navigate('/contact');
              }
            }}
            aria-label="Get in Touch"
          >
            <span>Get in Touch</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active-nav-link' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mobile-drawer-actions">
              <button 
                className="btn-get-in-touch w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    navigate('/contact');
                  }
                }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>
              <div className="mobile-contact-quick">
                <a href="mailto:akshdashandilya@gmail.com" className="mobile-quick-link">
                  <Mail size={14} /> akshdashandilya@gmail.com
                </a>
                <a href="tel:+19733702024" className="mobile-quick-link">
                  <Phone size={14} /> +1 (973) 370-2024
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

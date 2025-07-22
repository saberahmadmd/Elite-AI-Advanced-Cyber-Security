import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-logo">Elite AI</h3>
            <p className="footer-description">
              Leading AI-powered cyber security solutions provider, protecting businesses worldwide from evolving digital threats with intelligent automation.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">AI Threat Detection</Link></li>
              <li><Link to="/services">Data Protection</Link></li>
              <li><Link to="/services">Security Auditing</Link></li>
              <li><Link to="/services">Incident Response</Link></li>
              <li><Link to="/services">Cloud Security</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Careers</Link></li>
              <li><Link to="/about">Press</Link></li>
              <li><Link to="/about">Partners</Link></li>
              <li><Link to="/about">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>security@eliteai.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 AI Boulevard<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2024 Elite AI. All rights reserved.
          </div>
          <div className="footer-links-bottom">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
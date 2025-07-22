import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <section className="hero-contact">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Ready to enhance your security with AI? Contact our experts for a personalized consultation and intelligent security assessment.</p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2 className="section-title">Send us a message</h2>
              <ContactForm />
            </div>

            <div className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>

              <div className="contact-info">
                <div className="info-item">
                  <h4>Email</h4>
                  <p>security@eliteai.com</p>
                </div>

                <div className="info-item">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>

                <div className="info-item">
                  <h4>Address</h4>
                  <p>123 AI Boulevard<br />Tech City, TC 12345</p>
                </div>
              </div>

              <div className="emergency-response">
                <h3>24/7 AI Emergency Response</h3>
                <p>Experiencing a security incident? Our AI-powered emergency response team is available around the clock to help you with intelligent threat mitigation.</p>
                <div className="emergency-contact">
                  <span>AI Emergency Hotline:</span>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
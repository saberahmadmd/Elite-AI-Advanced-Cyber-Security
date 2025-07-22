import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="hero-about">
        <div className="container">
          <h1>Leading the Future of AI-Powered Security</h1>
          <p>Elite AI combines cutting-edge artificial intelligence with advanced cyber security expertise to deliver unparalleled protection. Our intelligent systems learn, adapt, and evolve to stay ahead of emerging threats, providing your business with next-generation security solutions.</p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">[ ]</div>
              <div className="feature-content">
                <h3>AI Innovation Leader</h3>
                <p>Pioneering the integration of machine learning and cyber security for intelligent threat prevention.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon checked">[✓]</div>
              <div className="feature-content">
                <h3>Precision & Intelligence</h3>
                <p>AI-driven threat detection with 99.9% accuracy and minimal false positives for seamless operations.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">[ ]</div>
              <div className="feature-content">
                <h3>Adaptive Learning</h3>
                <p>Our AI continuously learns from global threat patterns to predict and prevent future attacks.</p>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Years AI Research</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <div className="stat-label">Clients Protected</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p>To revolutionize cybersecurity through artificial intelligence, creating adaptive defense systems that anticipate and neutralize threats before they impact our clients. We believe in a future where technology protects humanity, and we're building the intelligent shields to make that future a reality.</p>

            <div className="values">
              <div className="value">
                <h3>Innovation</h3>
                <p>Constantly pushing the boundaries of what AI can achieve in cybersecurity.</p>
              </div>
              <div className="value">
                <h3>Integrity</h3>
                <p>Operating with transparency and ethical standards in all our solutions.</p>
              </div>
              <div className="value">
                <h3>Excellence</h3>
                <p>Delivering premium security solutions with uncompromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
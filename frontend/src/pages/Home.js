import StatsCard from '../components/StatsCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI-Powered Cyber Security</h1>
            <p>Next-generation artificial intelligence meets advanced cyber security. <br />
              Protect your business with Elite AI's intelligent threat detection and response systems.</p>
            <div className="hero-buttons">
              <button href="/" className="btn btn-filled">Get Protected Today</button>
              <button href="/" className="btn watch">Watch Demo</button>
            </div>
          </div>

          <div className="hero-stats">
            <StatsCard value="99.9%" label="Threat Detection Rate" />
            <StatsCard value="24/7" label="AI Monitoring" />
            <StatsCard value="500+" label="Enterprise Clients" />
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">AI-Powered Security Services</h2>
          <p className="section-subtitle">Protecting your digital assets with intelligent security solutions that learn, adapt, and evolve with emerging threats.</p>

          <div className="services-grid">
            <div className="service-preview">
              <h3>AI Threat Detection</h3>
              <p>Advanced machine learning algorithms that identify and neutralize security risks in real-time with unprecedented accuracy.</p>
              <ul>
                <li>Real-time AI monitoring</li>
                <li>Predictive threat analysis</li>
                <li>Automated response</li>
              </ul>
            </div>

            <div className="service-preview">
              <h3>Data Protection</h3>
              <p>Intelligent data encryption and protection services powered by AI to safeguard your sensitive information and customer data.</p>
              <ul>
                <li>AI-powered encryption</li>
                <li>Smart data loss prevention</li>
                <li>Compliance automation</li>
              </ul>
            </div>

            <div className="service-preview">
              <h3>Security Auditing</h3>
              <p>AI-driven security assessments and penetration testing that continuously learn and adapt to identify vulnerabilities.</p>
              <ul>
                <li>Automated vulnerability scanning</li>
                <li>AI penetration testing</li>
                <li>Intelligent reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Elite AI?</h2>
          <p className="section-subtitle">Our AI-powered security solutions are designed to evolve with your business, providing intelligent protection that learns and adapts to your unique needs.</p>

          <div className="features-grid">
            <div className="feature">
              <h3>Multi-Layer AI Protection</h3>
              <p>Advanced AI defense mechanisms working together to provide comprehensive security coverage across all attack vectors.</p>
            </div>

            <div className="feature">
              <h3>Global Threat Intelligence</h3>
              <p>AI-powered access to worldwide threat intelligence networks to predict and prevent emerging security risks.</p>
            </div>

            <div className="feature">
              <h3>Real-Time AI Monitoring</h3>
              <p>Continuous 24/7 AI monitoring with instant threat prediction and automated responses to potential security risks.</p>
            </div>

            <div className="feature">
              <h3>Intelligent Mobile Security</h3>
              <p>AI-driven mobile device management and security solutions that adapt to your distributed workforce patterns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your Business with AI?</h2>
            <p>Join hundreds of companies that trust Elite AI to protect their digital assets. Get started with a free AI-powered security assessment today.</p>
            <div className="cta-buttons">
              <button href="/" className="btn btn-filled">Free AI Security Assessment</button>
              <button href="/" className="btn schedule">Schedule AI Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
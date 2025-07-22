import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that identify and neutralize security risks in real-time with unprecedented accuracy.",
      features: [
        "Real-time AI monitoring",
        "Predictive threat analysis",
        "Automated response"
      ]
    },
    {
      title: "Data Protection",
      description: "Intelligent data encryption and protection services powered by AI to safeguard your sensitive information and customer data.",
      features: [
        "AI-powered encryption",
        "Smart data loss prevention",
        "Compliance automation"
      ]
    },
    {
      title: "Security Auditing",
      description: "AI-driven security assessments and penetration testing that continuously learn and adapt to identify vulnerabilities.",
      features: [
        "Automated vulnerability scanning",
        "AI penetration testing",
        "Intelligent reporting"
      ]
    },
    {
      title: "Incident Response",
      description: "Lightning-fast AI-powered incident response that minimizes damage and restores operations with intelligent automation.",
      features: [
        "AI response automation",
        "Predictive forensics",
        "Smart recovery planning"
      ]
    },
    {
      title: "Security Training",
      description: "Personalized AI-driven security awareness training that adapts to your team's learning patterns and threat landscape.",
      features: [
        "Adaptive training modules",
        "AI-powered simulations",
        "Personalized learning paths"
      ]
    },
    {
      title: "Cloud Security",
      description: "Intelligent cloud security solutions that automatically adapt to your infrastructure and predict potential vulnerabilities.",
      features: [
        "AI cloud monitoring",
        "Predictive scaling security",
        "Intelligent DeviceOps"
      ]
    }
  ];

  return (
    <div className="services">
      <section className="hero-services">
        <div className="container">
          <h1>AI-Powered Security Services</h1>
          <p>Protecting your digital assets with intelligent security solutions that learn, adapt, and evolve with emerging threats.</p>
        </div>
      </section>

      <section className="section services-main">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
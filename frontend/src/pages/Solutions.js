import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: "Enterprise Security",
      description: "Comprehensive AI-powered security solutions for large organizations with complex infrastructure and compliance needs.",
      icon: "🏢"
    },
    {
      title: "Small Business",
      description: "Affordable yet powerful AI security solutions designed specifically for small businesses with limited IT resources.",
      icon: "🏪"
    },
    {
      title: "Government",
      description: "Secure sensitive government data and systems with our AI-driven security solutions meeting strict compliance standards.",
      icon: "🏛️"
    },
    {
      title: "Healthcare",
      description: "Protect patient data and healthcare systems with AI security solutions designed for HIPAA compliance and medical environments.",
      icon: "🏥"
    },
    {
      title: "Financial Services",
      description: "AI-powered security for banks, fintech, and financial institutions to combat sophisticated financial cyber threats.",
      icon: "💰"
    },
    {
      title: "Education",
      description: "Secure educational institutions and student data with AI solutions that adapt to the unique needs of learning environments.",
      icon: "🎓"
    }
  ];

  return (
    <div className="solutions">
      <section className="hero-solutions">
        <div className="container">
          <h1>Industry-Specific AI Security Solutions</h1>
          <p>Tailored AI-powered security solutions designed to meet the unique challenges of your industry and business size.</p>
        </div>
      </section>

      <section className="section solutions-main">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <FeatureCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="feature-icon">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
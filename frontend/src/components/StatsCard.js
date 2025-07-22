import React from 'react';
import './StatsCard.css';

const StatsCard = ({ value, label }) => {
  return (
    <div className="stats-card">
      <div className="stats-value">{value}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
};

export default StatsCard;
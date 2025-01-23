// ExperienceCard.jsx
import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ title, companyName, icon, date, points }) {
  return (
      <div className="experience-card">
        <div className="experience-header">
          <h3 className="experience-title">{title}</h3>
          <p className="experience-company">{companyName}</p>
          <span className="experience-date">{date}</span>
        </div>
        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index} className="experience-point">{point}</li>
          ))}
        </ul>
      </div>
  );
}

export default ExperienceCard;

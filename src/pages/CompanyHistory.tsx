import React from 'react';
import './CompanyHistory.css';

const CompanyHistory: React.FC = () => (
  <div className="intro-content">
    <h2>Company History & Key Milestones</h2>
      <p>SECHIVE was founded with the mission of providing top-tier security solutions tailored to the evolving needs of businesses, institutions, and individuals. Recognizing the growing demand for professional and technology-driven security services, the company was established to bridge the gap between traditional security practices and modern, innovative security strategies.</p>
    <h3>Key Milestones:</h3>
    <ul>
      <li>2019: Officially licensed by the Ministry of Interior</li>
      {/* Add more milestones as needed */}
    </ul>
  </div>
);

export default CompanyHistory;

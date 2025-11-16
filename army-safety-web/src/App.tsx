// import React from 'react'; // Not needed for React 17+ with JSX transform
import sechiveLogo from '../public/SECHIVE.png';
import './App.css';
import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpeg';
import photo3 from './assets/3.jpeg';
import photo4 from './assets/4.jpeg';
import photo5 from './assets/5.jpeg';


// Removed unused services and targetMarkets arrays
// import React from 'react'; // Keeping this line as it may be needed for JSX

import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './pages/EliteSecurityManagement.css';
import './pages/QualityInnovation.css';
import './pages/TrainingDevelopment.css';
import './pages/CompanyHistory.css';
import './pages/ProductAndServices.css';
import './pages/TargetMarket.css';
import './pages/CurrentPartenerShips.css';
// Page imports
import EliteSecurityManagement from './pages/EliteSecurityManagement';
import QualityInnovation from './pages/QualityInnovation';
import TrainingDevelopment from './pages/TrainingDevelopment';
import CompanyHistory from './pages/CompanyHistory';
import ProductAndServices from './pages/ProductAndServices';
import TargetMarket from './pages/TargetMarket';
import CurrentPartenerShips from './pages/CurrentPartenerShips';
import CorporateSecurity from './pages/CorporateSecurity';
import IndustrialSecurity from './pages/IndustrialSecurity';
import EventSecurity from './pages/EventSecurity';
import TourismSecurity from './pages/TourismSecurity';
import HealthcareSecurity from './pages/HealthcareSecurity';
import MonitoringResponse from './pages/MonitoringResponse';
import SecurityConsulting from './pages/SecurityConsulting';

const slideshowImages = [photo1, photo2, photo3, photo4, photo5];

function App() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  // ...existing code...
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // ...existing code...
  return (
    <div className="app-root">
      <div className="bg-slideshow">
        {slideshowImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={slide === idx ? "bg-slide active" : "bg-slide"}
          />
        ))}
      </div>
      <div className="content-overlay">
        <header className="main-header">
          <div className="header-flex">
            <img src={sechiveLogo} alt="SECHIVE Logo" className="sechive-logo" />
            <nav className="main-nav">
              <Link to="/elite-security" className="nav-link">Elite Security</Link>
              <Link to="/quality-innovation" className="nav-link">Quality & Innovation</Link>
              <Link to="/training-development" className="nav-link">Training</Link>
              <Link to="/company-history" className="nav-link">History</Link>
              <div className={dropdownOpen ? "services-dropdown open" : "services-dropdown"}>
                <div
                  className="dropdown-trigger"
                  onClick={() => setDropdownOpen(open => !open)}
                >Products & Services ▼</div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/corporate-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Corporate & Commercial Security</Link>
                    <Link to="/industrial-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Industrial & Manufacturing Security</Link>
                    <Link to="/event-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Event & Crowd Security</Link>
                    <Link to="/tourism-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Tourism & Hospitality Security</Link>
                    <Link to="/healthcare-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Healthcare & Educational Security</Link>
                    <Link to="/monitoring-response" className="dropdown-link" onClick={() => setDropdownOpen(false)}>24/7 Monitoring & Rapid Response</Link>
                    <Link to="/security-consulting" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Integrated Security Consulting</Link>
                  </div>
                )}
              </div>
              <Link to="/target-market" className="nav-link">Target Market</Link>
              <Link to="/current-partnerships" className="nav-link">Partnerships</Link>
            </nav>
          </div>
          <div className="header-info">
            <h2 className="header-title">Welcome to SECHIVE Security Services Egypt</h2>
            <div className="header-contact">
              <div className="header-phone-icon">
                <span role="img" aria-label="phone">📞</span>
              </div>
              <div>
                <span className="header-call-label">Call Us At:</span><br />
                <span className="header-call-number">
                  +20 155 484 1548
                  <a href="https://wa.me/201554841548" target="_blank" rel="noopener noreferrer" className="header-whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="#25D366"/>
                      <path fill="#fff" d="M22.1 18.2c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7s.7 2.1 1.5 3c1.1 1.2 2.6 2.1 4.1 2.1.5 0 1-.1 1.4-.3.4-.2 1.1-.7 1.2-1.3.1-.6.1-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"/>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <button className="header-email-btn" onClick={() => window.location.href = 'mailto:hivesec2000@gmail.com'}>EMAIL US</button>
          </div>
        </header>
        <main className="homepage-intro">
          <Routes>
            <Route path="/" element={
              <div>
                <section className="home-section">
                  <h2 className="home-section-title">Our Mission</h2>
                  <p>
                    Welcome to SECHIVE, Egypt’s distinguished provider of security, guarding, and money transport services. Our mission is to deliver top-tier, innovative security solutions with unwavering commitment to quality, efficiency, and professionalism. We protect institutions, events, and critical infrastructures with highly qualified teams and advanced technologies.
                  </p>
                </section>
                <section className="home-section">
                  <h2 className="home-section-title">Our Services</h2>
                  <ul>
                    <li>Corporate & Commercial Security</li>
                    <li>Industrial & Manufacturing Security</li>
                    <li>Event & Crowd Security</li>
                    <li>Tourism & Hospitality Security</li>
                    <li>Healthcare & Educational Security</li>
                    <li>24/7 Monitoring & Rapid Response</li>
                    <li>Integrated Security Consulting</li>
                  </ul>
                </section>
                <section className="home-section">
                  <h2 className="home-section-title">Target Market</h2>
                  <p>
                    We proudly serve a wide range of sectors, including corporate offices, shopping malls, factories, healthcare and educational institutions, hotels, airports, government facilities, and major events. Our solutions are tailored to meet the unique needs of each client, ensuring specialized protection and peace of mind.
                  </p>
                </section>
                <section className="home-section">
                  <h2 className="home-section-title">Strategic Partnerships</h2>
                  <p>
                    Serving government, private sector, tourism, malls, healthcare, petroleum, and airports. Trusted by leading organizations across Egypt.
                  </p>
                </section>
                <section className="home-section">
                  <h2 className="home-section-title">Contact Us</h2>
                  <p>
                    For more information, contact us at <b>[Your Contact Information]</b> or visit our website at <b>[Your Website]</b>.
                  </p>
                </section>
              </div>
            } />
            <Route path="/elite-security" element={<EliteSecurityManagement />} />
            <Route path="/quality-innovation" element={<QualityInnovation />} />
            <Route path="/training-development" element={<TrainingDevelopment />} />
            <Route path="/company-history" element={<CompanyHistory />} />
            <Route path="/products-services" element={<ProductAndServices />} />
            <Route path="/corporate-security" element={<CorporateSecurity />} />
            <Route path="/industrial-security" element={<IndustrialSecurity />} />
            <Route path="/event-security" element={<EventSecurity />} />
            <Route path="/tourism-security" element={<TourismSecurity />} />
            <Route path="/healthcare-security" element={<HealthcareSecurity />} />
            <Route path="/monitoring-response" element={<MonitoringResponse />} />
            <Route path="/security-consulting" element={<SecurityConsulting />} />
            <Route path="/target-market" element={<TargetMarket />} />
            <Route path="/current-partnerships" element={<CurrentPartenerShips />} />
          </Routes>
        </main>
        <footer className="main-footer">
          &copy; {new Date().getFullYear()} SECHIVE. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

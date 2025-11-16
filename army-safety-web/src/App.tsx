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
    <div style={{ fontFamily: 'Montserrat, Arial, sans-serif', minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', background: '#222' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: '#222',
      }}>
        {slideshowImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: slide === idx ? 0.45 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
      </div>
      <header style={{ zIndex: 2, width: '100%', maxWidth: 1400, margin: '0 auto', position: 'relative', paddingTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <img src={sechiveLogo} alt="SECHIVE Logo" style={{ height: '120px', marginLeft: '2rem' }} />
          <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '1.15rem', fontWeight: 500, color: '#fff', letterSpacing: '1px', marginRight: '2rem', alignItems: 'center' }}>
            {/* Home link removed */}
            <Link to="/elite-security" style={{ color: '#f8f8f8', textDecoration: 'none', textShadow: '0 0 8px #fff, 0 0 2px #ffb400' }}>Elite Security</Link>
            <Link to="/quality-innovation" style={{ color: '#f8f8f8', textDecoration: 'none', textShadow: '0 0 8px #fff, 0 0 2px #ffb400' }}>Quality & Innovation</Link>
            <Link to="/training-development" style={{ color: '#f8f8f8', textDecoration: 'none', textShadow: '0 0 8px #fff, 0 0 2px #ffb400' }}>Training</Link>
            <Link to="/company-history" style={{ color: '#f8f8f8', textDecoration: 'none', textShadow: '0 0 8px #fff, 0 0 2px #ffb400' }}>History</Link>
            <div className="services-dropdown" style={{ position: 'relative', display: 'inline-block', minWidth: 120 }}>
              <div
                style={{ color: '#f4f7f1ff', textShadow: '0 0 8px #15178aff, 0 0 2px #ffb400', fontWeight: 'bold', cursor: 'pointer', userSelect: 'none', fontSize: '1.1rem', padding: '0.3em 0.7em', borderRadius: 6, minWidth: 120, border: 'none' }}
                onClick={() => setDropdownOpen(open => !open)}
              >Products & Services ▼</div>
              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'rgba(34,34,34,0.95)',
                    boxShadow: '0 2px 8px rgba(32, 187, 18, 0.68)',
                    borderRadius: 6,
                    minWidth: 220,
                    zIndex: 10,
                  }}
                >
                  <Link to="/corporate-security" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Corporate & Commercial Security</Link>
                  <Link to="/industrial-security" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Industrial & Manufacturing Security</Link>
                  <Link to="/event-security" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Event & Crowd Security</Link>
                  <Link to="/tourism-security" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Tourism & Hospitality Security</Link>
                  <Link to="/healthcare-security" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Healthcare & Educational Security</Link>
                  <Link to="/monitoring-response" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>24/7 Monitoring & Rapid Response</Link>
                  <Link to="/security-consulting" style={{ display: 'block', padding: '0.3em 0.7em', color: '#f8f8f8', textShadow: '0 0 8px #fff, 0 0 2px #ffb400', textDecoration: 'none', fontSize: '0.95rem' }} onClick={() => setDropdownOpen(false)}>Integrated Security Consulting</Link>
                </div>
              )}
            </div>
            <Link to="/target-market" style={{ color: '#fff', textDecoration: 'none' }}>Target Market</Link>
            <Link to="/current-partnerships" style={{ color: '#fff', textDecoration: 'none' }}>Partnerships</Link>
          </nav>
        </div>
          <div style={{ marginTop: '6rem', marginLeft: '2rem', color: '#fff', maxWidth: 700 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 500, marginBottom: '1.5rem' }}>Welcome to SECHIVE Security Services Egypt</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: '#3b82f6', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem', color: '#fff' }}>📞</span>
              </div>
              <div>
                <span style={{ fontSize: '1.3rem', fontWeight: 600 }}>Call Us At:</span><br />
                <span style={{ fontSize: '1.7rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  +20 155 484 1548
                  <a href="https://wa.me/201554841548" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}>
                      <circle cx="16" cy="16" r="16" fill="#25D366"/>
                      <path fill="#fff" d="M22.1 18.2c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7s.7 2.1 1.5 3c1.1 1.2 2.6 2.1 4.1 2.1.5 0 1-.1 1.4-.3.4-.2 1.1-.7 1.2-1.3.1-.6.1-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"/>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <button
              style={{ background: 'transparent', color: '#3b82f6', border: '2px solid #3b82f6', borderRadius: 8, padding: '0.75em 2em', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = '#3b82f6'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              onClick={() => window.location.href = 'mailto:hivesec2000@gmail.com'}
            >EMAIL US</button>
          </div>
        </header>
        <main className="homepage-intro" style={{ zIndex: 2, width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative', background: 'rgba(255,255,255,0.15)', borderRadius: '18px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(8px)', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={
              <>
                <section style={{ marginBottom: '2rem' }}>
                  <h2 style={{ color: '#1a2a4e' }}>Our Mission</h2>
                  <p>
                    Welcome to SECHIVE, Egypt’s distinguished provider of security, guarding, and money transport services. Our mission is to deliver top-tier, innovative security solutions with unwavering commitment to quality, efficiency, and professionalism. We protect institutions, events, and critical infrastructures with highly qualified teams and advanced technologies.
                  </p>
                </section>
                <section style={{ marginBottom: '2rem' }}>
                  <h2 style={{ color: '#1a2a4e' }}>Our Services</h2>
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
                <section style={{ marginBottom: '2rem' }}>
                  <h2 style={{ color: '#1a2a4e' }}>Target Market</h2>
                  <p>
                    We proudly serve a wide range of sectors, including corporate offices, shopping malls, factories, healthcare and educational institutions, hotels, airports, government facilities, and major events. Our solutions are tailored to meet the unique needs of each client, ensuring specialized protection and peace of mind.
                  </p>
                </section>
                <section style={{ marginBottom: '2rem' }}>
                  <h2 style={{ color: '#1a2a4e' }}>Strategic Partnerships</h2>
                  <p>
                    Serving government, private sector, tourism, malls, healthcare, petroleum, and airports. Trusted by leading organizations across Egypt.
                  </p>
                </section>
                <section>
                  <h2 style={{ color: '#1a2a4e' }}>Contact Us</h2>
                  <p>
                    For more information, contact us at <b>[Your Contact Information]</b> or visit our website at <b>[Your Website]</b>.
                  </p>
                </section>
              </>
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
        <footer style={{ textAlign: 'center', padding: '1rem 0', background: 'rgba(26,42,78,0.85)', color: '#fff', position: 'relative', zIndex: 2, width: '100%', maxWidth: 900, borderRadius: 12 }}>
          &copy; {new Date().getFullYear()} SECHIVE. All rights reserved.
        </footer>
      </div>
    );
}

export default App;

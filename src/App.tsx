// import React from 'react'; // Not needed for React 17+ with JSX transform
import sechiveLogo from '../public/SECHIVE.png';
import './App.css';

import compound1 from './assets/wallpaper/compound1.jpeg';
import innovo from './assets/wallpaper/innovo.png';
import response from './assets/wallpaper/response.jpg';
import compound2 from './assets/wallpaper/compound2.jpeg';
import fedex from './assets/wallpaper/fedex.jpeg';
import security1 from './assets/wallpaper/security1.jpg';
import security_girl1 from './assets/wallpaper/security_girl1.jpg';
import owner from './assets/wallpaper/owner.jpeg';
import iguall from './assets/wallpaper/iguall.jpg';
import cctv1 from './assets/wallpaper/cctv1.jpg';
import kasrawy from './assets/wallpaper/kasrawy.png';
import cctv2 from './assets/wallpaper/cctv2.jpg';
import security2 from './assets/wallpaper/security2.jpg';
import samco from './assets/wallpaper/samco.png';
import security_girl2 from './assets/wallpaper/security_girl2.jpg';
import k9 from './assets/wallpaper/k9.jpeg';

import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Routes, Route, Link } from 'react-router-dom';
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
import LogisticsGallery from './pages/LogisticsGallery';
import PersonnelGallery from './pages/PersonnelGallery';

const slideshowImages = [
  compound1, innovo, response, compound2, fedex, security1, security_girl1,
  owner, iguall, cctv1, kasrawy, cctv2, security2, samco, security_girl2, k9,
];

const testText = "→ Security. Safety. Cash Transport.";
const subText = "Professional protection for institutions, events, and high-value operations.";

export function TypewriterTest() {
  const [typedText, setTypedText] = useState("");
  const [typedSubText, setTypedSubText] = useState("");
  const [showSubText, setShowSubText] = useState(false);
  const typeIndex = useRef(0);
  const subTypeIndex = useRef(0);
  
  useEffect(() => {
    setTypedText("");
    setTypedSubText("");
    setShowSubText(false);
    typeIndex.current = 0;
    subTypeIndex.current = 0;
    
    const mainInterval = setInterval(() => {
      if (typeIndex.current < testText.length) {
        setTypedText((prev) => prev + testText.charAt(typeIndex.current));
        typeIndex.current++;
      } else {
        clearInterval(mainInterval);
        setTimeout(() => {
          setShowSubText(true);
          const subInterval = setInterval(() => {
            if (subTypeIndex.current < subText.length) {
              setTypedSubText((prev) => prev + subText.charAt(subTypeIndex.current));
              subTypeIndex.current++;
            } else {
              clearInterval(subInterval);
            }
          }, 40);
        }, 500);
      }
    }, 60);
    
    return () => clearInterval(mainInterval);
  }, []);
  
  return (
    <div className="typewriter-test-container">
      <div className="typewriter-main-line">
        <span className="typewriter-test-text">
          {typedText}
        </span>
      </div>
      {showSubText && (
        <div className="typewriter-subtext-line">
          <span className="typewriter-subtext">
            {typedSubText}
          </span>
        </div>
      )}
    </div>
  );
}

function App() {
  const location = useLocation();
  const [slide, setSlide] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [initialAnimation, setInitialAnimation] = useState(false);
  const [introAnimated, setIntroAnimated] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showWelcome, setShowWelcome] = useState(true);
  const typewriterText = "Welcome to SECHIVE — Secure Your World";
  const [typedText, setTypedText] = useState("");
  const typeIndex = useRef(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (showWelcome && location.pathname === '/' && !showIntro) {
      setTypedText("");
      typeIndex.current = 0;
      const interval = setInterval(() => {
        if (typeIndex.current < typewriterText.length) {
          setTypedText((prev) => prev + typewriterText[typeIndex.current]);
          typeIndex.current++;
        } else {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [showWelcome, location.pathname, showIntro]);

  useEffect(() => {
    if (location.pathname === '/' && !showIntro) {
      const timer = setTimeout(() => setShowWelcome(false), 3500);
      return () => clearTimeout(timer);
    } else {
      setShowWelcome(false);
    }
  }, [location.pathname, showIntro]);

  const introRoutes = [
    '/',
    '/elite-security',
    '/quality-innovation',
    '/training-development',
    '/company-history',
    '/products-services',
    '/corporate-security',
    '/industrial-security',
    '/event-security',
    '/tourism-security',
    '/healthcare-security',
    '/monitoring-response',
    '/security-consulting',
    '/target-market',
    '/current-partnerships'
  ];

  useEffect(() => {
    setShowIntro(introRoutes.includes(location.pathname));
  }, [location.pathname]);

  // Initial animation for homepage
  useEffect(() => {
    if (location.pathname === '/' && showIntro) {
      setShowHeader(false);
      setInitialAnimation(true);
      setIntroAnimated(false);
      const timer = setTimeout(() => {
        setShowHeader(true);
        setInitialAnimation(false);
        setIntroAnimated(true);
      }, 1200); // match CSS transition duration
      return () => clearTimeout(timer);
    } else {
      setShowHeader(true);
      setInitialAnimation(false);
      setIntroAnimated(false);
    }
  }, [location.pathname, showIntro]);

  useEffect(() => {
    const handleScroll = () => {
      if (initialAnimation) return;
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, initialAnimation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-root">
      <div className="bg-slideshow">
        {slideshowImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={
              slide === idx
                ? (img === innovo || img === response || img === security1 ||
                  img === security_girl1 || img === security_girl2 || img === iguall || img === kasrawy || img === owner
                  || img === cctv1 || img === cctv2 || img === samco || img === security2 || img === compound1
                  || img === compound2 || img === fedex || img === k9
                  ? "bg-slide active innovo-slide"
                  : "bg-slide active")
                : (img === innovo || img === response || img === security1 || img === security_girl1
                  || img === security_girl2 || img === iguall || img === kasrawy || img === owner
                  || img === cctv1 || img === cctv2 || img === samco || img === security2 || img === compound1
                  || img === compound2 || img === fedex || img === k9
                  ? "bg-slide innovo-slide"
                  : "bg-slide")
            }
          />
        ))}
        {location.pathname === '/' && !showIntro && showWelcome && (
          <div className="homepage-motion">
            <span className="motion-text typewriter-test-text">
              {typedText}
              <span className="typewriter-cursor typewriter-test-cursor">|</span>
            </span>
          </div>
        )}
      </div>
      <div className="content-overlay">
        <header className={`main-header${showHeader ? '' : ' header-hidden'}`}>
          <div className="header-flex">
            <img src={sechiveLogo} alt="SECHIVE Logo" className="sechive-logo" />
            <nav className="main-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/elite-security" className="nav-link">Elite Security</Link>
              <Link to="/quality-innovation" className="nav-link">Quality & Innovation</Link>
              <Link to="/training-development" className="nav-link">Training</Link>
              <Link to="/company-history" className="nav-link">History</Link>
              <div className={dropdownOpen ? "services-dropdown open" : "services-dropdown"}>
                <div
                  className="dropdown-trigger"
                  onClick={() => setDropdownOpen(open => !open)}
                >
                  Services ▼
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-title">Our Services</div>
                    <Link to="/corporate-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Corporate & Commercial Security</span>
                    </Link>
                    <Link to="/industrial-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Industrial & Manufacturing Security</span>
                    </Link>
                    <Link to="/event-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Event & Crowd Security</span>
                    </Link>
                    <Link to="/tourism-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Tourism & Hospitality Security</span>
                    </Link>
                    <Link to="/healthcare-security" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Healthcare & Educational Security</span>
                    </Link>
                    <Link to="/monitoring-response" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">24/7 Monitoring & Rapid Response</span>
                    </Link>
                    <Link to="/security-consulting" className="dropdown-link" onClick={() => setDropdownOpen(false)}>
                      <span className="dropdown-label">Integrated Security Consulting</span>
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/target-market" className="nav-link">Target Market</Link>
              <Link to="/current-partnerships" className="nav-link">Partnerships</Link>
              <Link to="/logistics" className="nav-link">Logistics</Link>
            </nav>
          </div>
          <TypewriterTest />
          <div className="header-info">
            <h2 className="header-title">Welcome to SECHIVE Security Services Egypt</h2>
            <div className="header-contact">
              <div className="header-phone-icon">
                <span role="img" aria-label="phone">📞</span>
              </div>
              <div>
                <span className="header-call-label">Call:</span><br />
                <span className="header-call-number">
                  +20 155 484 1548
                  <a href="https://wa.me/201554841548" target="_blank" rel="noopener noreferrer" className="header-whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="#25D366" />
                      <path fill="#fff" d="M22.1 18.2c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.7.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7s.7 2.1 1.5 3c1.1 1.2 2.6 2.1 4.1 2.1.5 0 1-.1 1.4-.3.4-.2 1.1-.7 1.2-1.3.1-.6.1-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <button className="header-email-btn" onClick={() => window.location.href = 'mailto:hivesec2000@gmail.com'}>EMAIL US</button>
          </div>
        </header>
        {showIntro && (
          location.pathname === '/' ? (
            <main className={`homepage-intro${showHeader ? '' : ' intro-hidden'}${introAnimated ? ' intro-animated' : ''}`}>
              <Routes>
                <Route path="/" element={
                  <div>
                    <section className="home-section">
                      <h2 className="home-section-title">Our Mission</h2>
                      <p>
                        <strong>
                          Welcome to SECHIVE, Egypt's distinguished provider of security, guarding, and money transport services. Our mission is to deliver top-tier, innovative security solutions with unwavering commitment to quality, efficiency, and professionalism. We protect institutions, events, and critical infrastructures with highly qualified teams and advanced technologies.
                        </strong>
                      </p>
                    </section>
                    <section className="home-section">
                      <h2 className="home-section-title">Strategic Partnerships</h2>
                      <p>
                        <strong>
                          Serving government, private sector, tourism, malls, healthcare, petroleum, and airports. Trusted by leading organizations across Egypt.
                        </strong>
                      </p>
                    </section>
                    <section className="home-section">
                      <h2 className="home-section-title">About Us</h2>
                      <p>
                        <strong>
                          <ul>
                            <li>Licensed by the Ministry of Interior since 2019</li>
                            <li>Experienced teams: rigorously trained officers with specialized certifications.</li>
                            <li>Operational discipline: proven SOPs for high-risk and high-value operations.</li>
                            <li>Technology-enabled: GPS-tracked transport, secure communications, and centralized monitoring.</li>
                            <li>Customer-first service: customizable packages, 24/7 support, and transparent reporting.</li>
                          </ul>
                        </strong>
                      </p>
                    </section>
                  </div>
                } />
              </Routes>
            </main>
          ) : (
            <main className="homepage-intro">
              <Routes>
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
          )
        )}
        <Routes>
          <Route path="/logistics" element={<LogisticsGallery />} />
          <Route path="/personnel-gallery" element={<PersonnelGallery />} />
        </Routes>
        <footer className="main-footer">
          &copy; {new Date().getFullYear()} SECHIVE. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
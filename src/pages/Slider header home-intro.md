now it is displayed at the start and slide up and disappear not sliding down
** I will provide you with the working code that i had saved on git hub:
** But this code create a home page-intro empty glass container at the logestics page above the logistics gallery glass   container which i don't need the main intro to be displayed at the logistics page:

check the corrected files for app tsx and app css now.


The problem even with this code the header not slide up with homepage intro container glass ? 


Read [](file:///home/hazem-elbatawy/Downloads/Army-safety/SECHIVE/src/App.css#1-1), lines 1 to 80

Read [](file:///home/hazem-elbatawy/Downloads/Army-safety/SECHIVE/src/App.css#158-158), lines 158 to 198

Read [](file:///home/hazem-elbatawy/Downloads/Army-safety/SECHIVE/src/App.css#520-520), lines 520 to 540

Read [](file:///home/hazem-elbatawy/Downloads/Army-safety/SECHIVE/src/App.tsx#1-1), lines 1 to 80

Read [](file:///home/hazem-elbatawy/Downloads/Army-safety/SECHIVE/src/App.tsx#81-81), lines 81 to 200

Here’s what’s happening and how to fix both issues:

### 1. Header and Homepage Intro Not Sliding Together
- Your header uses `.main-header` and `.header-hidden` for sliding.
- Your homepage intro uses `.homepage-intro` and `.intro-hidden`.
- The header only slides up/down on scroll, not on initial load.
- The homepage intro is always visible on the homepage and some other routes, but not on `/logistics`.

### 2. Homepage Intro Appearing on Logistics Page
- Your code: 
  ```tsx
  useEffect(() => {
    setShowIntro(introRoutes.includes(location.pathname));
  }, [location.pathname]);
  ```
  This means `showIntro` is `false` on `/logistics`, so the homepage intro should NOT appear there. If it does, there may be a route or logic error elsewhere.

---

## Solution: Synchronize Header and Intro Animation on First Load

- On homepage load, both header and intro should start hidden, then slide down together.
- On scroll, both should slide up.
- On `/logistics`, homepage intro should not render.

---

### Patch Plan

1. Add a state `initialAnimation` to control the first load animation.
2. On homepage load, set both header and intro hidden, then show both after a timeout.
3. On scroll, hide both.
4. Ensure homepage intro does not render on `/logistics`.

---

Would you like me to apply this patch to synchronize the header and homepage intro animation, and ensure the intro does not appear on the logistics page?




Add a state initialAnimation to control the first load animation
** Add it .
** There is no problem now for the logistic page.
On homepage load, set both header and intro hidden, then show both after a timeout.








App.tsx

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
      const timer = setTimeout(() => {
        setShowHeader(true);
        setInitialAnimation(false);
      }, 1200); // match CSS transition duration
      return () => clearTimeout(timer);
    } else {
      setShowHeader(true);
      setInitialAnimation(false);
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
          <main className={`homepage-intro${showHeader ? '' : ' intro-hidden'}`}> 
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


||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


App css



/* Typewriter in header specific styles */
.main-header .typewriter-test-container {
  display: flex;
  flex-direction: column; /* NEW: Stack main text and subtext vertically */
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  gap: 0.75rem; /* NEW: Space between main text and subtext */
}

/* NEW: Main text line wrapper */
.typewriter-main-line {
  display: block;
  width: 100%;
  text-align: center;
}

/* NEW: Subtext line wrapper */
.typewriter-subtext-line {
  display: block;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

.main-header .typewriter-test-text {
  font-size: 1.2em;
  color: #38bdf8;
  font-weight: 600;
  letter-spacing: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.5em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* NEW: Subtext styling */
.main-header .typewriter-subtext {
  font-size: 0.85em;
  color: #94a3b8;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 0.4em 0.8em;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.main-header .typewriter-test-cursor {
  display: inline-block;
  width: 1ch;
  color: #38bdf8;
  animation: blink-cursor 1s steps(2, start) infinite;
}

/* Keep the original large styles for homepage motion text */
.homepage-motion .typewriter-test-text {
  font-size: 2.2em;
  color: #38bdf8;
  font-weight: 700;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  padding: 0.25em 0.75em;
  box-shadow: 0 2px 12px #0004;
}

/* NEW: Fade-in animation for subtext */
@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
.dropdown-menu {
  min-width: 220px;
  padding: 1em 0.5em;
  background: rgba(56,189,248,0.45); /* glassmorphism light blue sky */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.12);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  z-index: 10;
}
.dropdown-title {
  font-size: 1.15em;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 0.5em;
  text-align: left;
  letter-spacing: 0.5px;
}
.dropdown-label {
  font-size: 1.08em;
  color: #f8f9fa;
  font-weight: 600;
  text-align: left;
  padding-left: 2px;
}
.dropdown-link {
  padding: 0.6em 1em;
  border-radius: 8px;
  background: none;
  transition: background 0.2s, color 0.2s;
  text-align: left;
}
.dropdown-link:hover {
  background: #38bdf8;
  color: #fff;
}
 .bg-slide.innovo-slide {
  filter: drop-shadow(0 0 32px #38bdf8) brightness(1.08) contrast(1.1);
  border-radius: 24px;
  border: 2.5px solid #38bdf8;
  background: rgba(56,189,248,0.12);
  width: 100vw;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
}
/* Make 'Call Us At:' text thicker and glowing */
.header-call-label {
  font-weight: 900;
  color: #f8f9fa;
  text-shadow: none;
  letter-spacing: 0.5px;
}
body, .homepage-intro, .glass-feature-container, h1, h2, h3, h4, h5, h6, p, ul, ol, li, .home-section {
  color: #f8f9fa;
}
.nav-link, .dropdown-trigger, .dropdown-link {
  color: #f8f9fa;
  text-shadow: none;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.5em 1em;
  margin: 0 0.25em;
  background: none;
  transition: color 0.2s;
}

.nav-link:hover, .dropdown-trigger:hover, .dropdown-link:hover {
  color: #38bdf8;
  text-shadow: 0 0 12px #38bdf8, 0 0 24px #1a2a4e, 0 0 32px #fff2;
}
/* Header and nav at top, horizontal layout */
.main-header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.05em 0 0.05em 0;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 3px solid #38bdf8;
  box-shadow: 0 2px 16px #0006;
  border-radius: 0 0 18px 18px;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  transform: translateY(0);
  opacity: 1;
}

.header-title {
  font-size: 0.9rem;
  margin-bottom: 0.05em;
  margin-top: 0.05em;
  color: #f8f9fa;
  text-shadow: none;
}

.header-info {
  padding: 0.05em 0;
  margin: 0;
  color: #f8f9fa;
  text-shadow: none;
}

.header-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 0.25em;
  position: relative;
}

.sechive-logo {
  height: 80px;
  width: auto;
  margin-right: 1em;
  flex: 0 0 auto;
  box-shadow: 0 0 24px #38bdf8, 0 0 8px #fff;
  border-radius: 12px;
}

.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2em;
  flex: 1 1 auto;
  justify-content: center;
}


.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2em;
}

@media (max-width: 600px) {
  .header-flex {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5em;
  }
  .main-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7em;
    width: 100%;
  }
  .sechive-logo {
    height: 36px;
    margin-bottom: 0.5em;
  }
}
/* Background slideshow styles */
.bg-slideshow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.bg-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  @media (max-width: 900px) and (orientation: portrait) {
    .bg-slide, .bg-slide.innovo-slide {
      width: 100vw;
      height: 60vh;
      max-width: 100vw;
      max-height: 60vh;
      object-fit: contain;
      left: 0;
      top: 0;
      transform: none;
    }
  }
  @media (max-width: 900px) and (orientation: landscape) {
    .bg-slide, .bg-slide.innovo-slide {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      object-fit: contain;
      left: 0;
      top: 0;
      transform: none;
    }
  }
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 0;
}
.bg-slide.active {
  opacity: 1;
}

/* Overlay for all content */
.content-overlay {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay for contrast */
}
/* Responsive nav bar for mobile portrait */
@media (max-width: 600px) and (orientation: portrait) {
  nav {
    flex-direction: column !important;
    gap: 0.7rem !important;
    font-size: 1rem !important;
    margin-right: 0 !important;
    align-items: flex-start !important;
    padding: 0.5em 0.2em;
  }
  nav a, .services-dropdown {
    font-size: 1rem !important;
    padding: 0.4em 0.2em !important;
    min-width: 100px !important;
    width: 100%;
    box-sizing: border-box;
  }
}
/* Responsive design for portrait mobile devices */
@media (max-width: 600px) and (orientation: portrait) {
  .homepage-intro {
    padding: 1em 0.5em;
    margin: 1em 0 1.5em 0;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06);
    font-size: 1rem;
    max-width: 98vw;
  }
  .homepage-intro img {
    height: 60px;
    margin-bottom: 6px;
    border-radius: 6px;
    padding: 2px;
  }
  .glass-feature-container {
    padding: 1em 0.5em;
    border-radius: 12px;
    font-size: 1rem;
  }
  h2, h1 {
    font-size: 1.2rem !important;
  }
  ul, p {
    font-size: 1rem !important;
  }
}
/* Glassmorphism and animated shine for homepage intro */
.homepage-intro {
  position: relative;
  background: rgba(56,189,248,0.18); /* light blue sky glassmorphism */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12), 0 1.5px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.22);
  padding: 2em 1.5em;
  margin: 2em 0 2.5em 0;
  z-index: 2;
  overflow: hidden;
transition: transform 10s cubic-bezier(0.4,0,0.2,1), opacity 8s;  transform: translateY(0);
  opacity: 1;
}

.homepage-intro::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -60%;
  width: 120%;
  height: 120%;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 100%);
  filter: blur(8px);
  opacity: 0.7;
  border-radius: inherit;
  animation: diagonal-shine-sweep 3.5s linear infinite;
  z-index: 1;
}

.homepage-intro img {
  height: 100px; /* or your preferred size */
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0002;
  background: #fff;
  padding: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@keyframes diagonal-shine-sweep {
  0% { transform: translateX(-30%) translateY(-30%) rotate(0deg); }
  100% { transform: translateX(30%) translateY(30%) rotate(1deg); }
}

.glow-animated-text {
  color: #38bdf8;
  background: linear-gradient(90deg, #38bdf8 0%, #06b6d4 40%, #67e8f9 70%, #fff 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 16px #38bdf8, 0 0 32px #67e8f9, 0 0 48px #fff;
  animation: intro-glow-motion 3.5s linear infinite;
}

@keyframes intro-glow-motion {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

/* Modern header enhancements */
.main-header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.05em 0 0.05em 0;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 3px solid #38bdf8;
  box-shadow: 0 2px 16px #0006;
  border-radius: 0 0 18px 18px;
  transition: transform 10s cubic-bezier(0.4,0,0.2,1), opacity 8s;
  transform: translateY(0);
  opacity: 1;
}

.main-header::after {
  content: '';
  display: block;
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 4px;
  background: linear-gradient(90deg, #38bdf8 0%, #fff 100%);
  opacity: 0.5;
  animation: header-shine 3s linear infinite;
  border-radius: 0 0 18px 18px;
}

@keyframes header-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.sechive-logo {
  height: 80px;
  width: auto;
  margin-right: 1em;
  flex: 0 0 auto;
  box-shadow: 0 0 24px #38bdf8, 0 0 8px #fff;
  border-radius: 12px;
}

.header-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 0.25em;
  position: relative;
}

/* Example icon button styles for header */
.header-icons {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-left: auto;
}
.header-icon-btn {
  background: rgba(56,189,248,0.12);
  border: none;
  border-radius: 50%;
  padding: 0.5em;
  box-shadow: 0 0 8px #38bdf8;
  color: #f8f9fa;
  cursor: pointer;
  transition: background 0.2s;
}
.header-icon-btn:hover {
  background: #38bdf8;
  color: #000;
}

/* Sky blue glassmorphism for .glass-feature-container */
.glass-feature-container {
  background: rgba(0,0,0,0.18); /* transparent dark glassmorphism */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12), 0 1.5px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.12);
  padding: 2em 1.5em;
  margin: 2em 0 2.5em 0;
  z-index: 2;
  overflow: hidden;
  color: #f8f9fa;
  text-shadow: none;
}

/* Remove glowing effect from homepage-intro and home-section text */
.homepage-intro, .home-section, .home-section-title, .home-section p, .home-section ul, .home-section li {
  color: #f8f9fa;
  text-shadow: none;
}

/* Header slide-up animation for scroll-hide/show */
.header-hidden {
  transform: translateY(-350px);
  opacity: 0;
  pointer-events: none;
}

/* Slide-up animation for homepage intro glass section */
.homepage-intro {
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  transform: translateY(0);
  opacity: 1;
}
.intro-hidden {
  transform: translateY(-350px);
  opacity: 0;
  pointer-events: none;
}






  transform: translateY(-200px);

css


  transform: translateY(-200px);















enhance the movement of homepage intro to slide up with the header because now it slides 3 times first with the header then 2 times alone



App.tsx

   return () => clearTimeout(timer);
    } else {
      setShowHeader(true);
      setInitialAnimation(false);




      |||||||||||||||||||||||||||||||||||||||||||||||

Current motions on mobile:
      now check the homepage intro that it slides up then go down at the load of the page but i have to 
      scroll to the end of the page then scroll up again to get the homepage intro displayed.

      ** I need the homepage intro to slide up and retrun to it's normal place at the start of the page?


App tsx

  const [introAnimated, setIntroAnimated] = useState(false);





176- useEffect(() => {
    if (location.pathname === '/' && showIntro) {
      setShowHeader(false);
      setInitialAnimation(true);
      setIntroAnimated(false);
      ---------------------------

181- const timer = setTimeout(() => {
        setShowHeader(true);
        setInitialAnimation(false);
        setIntroAnimated(true);
        -------------------------
      }, 1200); // match CSS transition duration
      return () => clearTimeout(timer);
    } else {
      setShowHeader(true);
      setInitialAnimation(false);
      setIntroAnimated(false);
      ---------------------------
    }
  }, [location.pathname, showIntro]);
      

changed oneline in the retrun :

 return (
    <div className="app-root">
      <div className="bg-slideshow">
        {slideshowImages.map((img, idx) => 


 321       {showIntro && (
    322     <main className={`homepage-intro${showHeader ? '' : ' intro-hidden'}${introAnimated ? ' intro-animated' : ''}`}> 
    ----------------------------------------------------------------------------------------------------------------------------
            <Routes>


<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

App css changes  added style intro animated at the start of the file:


.intro-animated {
  transform: translateY(0) !important;
  opacity: 1 !important;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
}







Last crrected version for homepage intro animation:
====================================================================
======================================================================================
===================================================================================================







 App.tsx full version code base:


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




====================================================================
======================================================================================
===================================================================================================

App.css full version:


.intro-animated {
  transform: translateY(0) !important;
  opacity: 1 !important;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
}
/* Typewriter in header specific styles */
.main-header .typewriter-test-container {
  display: flex;
  flex-direction: column; /* NEW: Stack main text and subtext vertically */
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  gap: 0.75rem; /* NEW: Space between main text and subtext */
}

/* NEW: Main text line wrapper */
.typewriter-main-line {
  display: block;
  width: 100%;
  text-align: center;
}

/* NEW: Subtext line wrapper */
.typewriter-subtext-line {
  display: block;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.5s ease-in;
}

.main-header .typewriter-test-text {
  font-size: 1.2em;
  color: #38bdf8;
  font-weight: 600;
  letter-spacing: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.5em 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* NEW: Subtext styling */
.main-header .typewriter-subtext {
  font-size: 0.85em;
  color: #94a3b8;
  font-weight: 400;
  letter-spacing: 0.5px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 0.4em 0.8em;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  display: inline-block;
}

.main-header .typewriter-test-cursor {
  display: inline-block;
  width: 1ch;
  color: #38bdf8;
  animation: blink-cursor 1s steps(2, start) infinite;
}

/* Keep the original large styles for homepage motion text */
.homepage-motion .typewriter-test-text {
  font-size: 2.2em;
  color: #38bdf8;
  font-weight: 700;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  padding: 0.25em 0.75em;
  box-shadow: 0 2px 12px #0004;
}

/* NEW: Fade-in animation for subtext */
@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(-10px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
.dropdown-menu {
  min-width: 220px;
  padding: 1em 0.5em;
  background: rgba(56,189,248,0.45); /* glassmorphism light blue sky */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.12);
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  z-index: 10;
}
.dropdown-title {
  font-size: 1.15em;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 0.5em;
  text-align: left;
  letter-spacing: 0.5px;
}
.dropdown-label {
  font-size: 1.08em;
  color: #f8f9fa;
  font-weight: 600;
  text-align: left;
  padding-left: 2px;
}
.dropdown-link {
  padding: 0.6em 1em;
  border-radius: 8px;
  background: none;
  transition: background 0.2s, color 0.2s;
  text-align: left;
}
.dropdown-link:hover {
  background: #38bdf8;
  color: #fff;
}
 .bg-slide.innovo-slide {
  filter: drop-shadow(0 0 32px #38bdf8) brightness(1.08) contrast(1.1);
  border-radius: 24px;
  border: 2.5px solid #38bdf8;
  background: rgba(56,189,248,0.12);
  width: 100vw;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
}
/* Make 'Call Us At:' text thicker and glowing */
.header-call-label {
  font-weight: 900;
  color: #f8f9fa;
  text-shadow: none;
  letter-spacing: 0.5px;
}
body, .homepage-intro, .glass-feature-container, h1, h2, h3, h4, h5, h6, p, ul, ol, li, .home-section {
  color: #f8f9fa;
}
.nav-link, .dropdown-trigger, .dropdown-link {
  color: #f8f9fa;
  text-shadow: none;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.5em 1em;
  margin: 0 0.25em;
  background: none;
  transition: color 0.2s;
}

.nav-link:hover, .dropdown-trigger:hover, .dropdown-link:hover {
  color: #38bdf8;
  text-shadow: 0 0 12px #38bdf8, 0 0 24px #1a2a4e, 0 0 32px #fff2;
}
/* Header and nav at top, horizontal layout */
.main-header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.05em 0 0.05em 0;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 3px solid #38bdf8;
  box-shadow: 0 2px 16px #0006;
  border-radius: 0 0 18px 18px;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  transform: translateY(0);
  opacity: 1;
}

.header-title {
  font-size: 0.9rem;
  margin-bottom: 0.05em;
  margin-top: 0.05em;
  color: #f8f9fa;
  text-shadow: none;
}

.header-info {
  padding: 0.05em 0;
  margin: 0;
  color: #f8f9fa;
  text-shadow: none;
}

.header-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 0.25em;
  position: relative;
}

.sechive-logo {
  height: 80px;
  width: auto;
  margin-right: 1em;
  flex: 0 0 auto;
  box-shadow: 0 0 24px #38bdf8, 0 0 8px #fff;
  border-radius: 12px;
}

.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2em;
  flex: 1 1 auto;
  justify-content: center;
}


.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2em;
}

@media (max-width: 600px) {
  .header-flex {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5em;
  }
  .main-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7em;
    width: 100%;
  }
  .sechive-logo {
    height: 36px;
    margin-bottom: 0.5em;
  }
}
/* Background slideshow styles */
.bg-slideshow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.bg-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  @media (max-width: 900px) and (orientation: portrait) {
    .bg-slide, .bg-slide.innovo-slide {
      width: 100vw;
      height: 60vh;
      max-width: 100vw;
      max-height: 60vh;
      object-fit: contain;
      left: 0;
      top: 0;
      transform: none;
    }
  }
  @media (max-width: 900px) and (orientation: landscape) {
    .bg-slide, .bg-slide.innovo-slide {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      object-fit: contain;
      left: 0;
      top: 0;
      transform: none;
    }
  }
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 0;
}
.bg-slide.active {
  opacity: 1;
}

/* Overlay for all content */
.content-overlay {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay for contrast */
}
/* Responsive nav bar for mobile portrait */
@media (max-width: 600px) and (orientation: portrait) {
  nav {
    flex-direction: column !important;
    gap: 0.7rem !important;
    font-size: 1rem !important;
    margin-right: 0 !important;
    align-items: flex-start !important;
    padding: 0.5em 0.2em;
  }
  nav a, .services-dropdown {
    font-size: 1rem !important;
    padding: 0.4em 0.2em !important;
    min-width: 100px !important;
    width: 100%;
    box-sizing: border-box;
  }
}
/* Responsive design for portrait mobile devices */
@media (max-width: 600px) and (orientation: portrait) {
  .homepage-intro {
    padding: 1em 0.5em;
    margin: 1em 0 1.5em 0;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06);
    font-size: 1rem;
    max-width: 98vw;
  }
  .homepage-intro img {
    height: 60px;
    margin-bottom: 6px;
    border-radius: 6px;
    padding: 2px;
  }
  .glass-feature-container {
    padding: 1em 0.5em;
    border-radius: 12px;
    font-size: 1rem;
  }
  h2, h1 {
    font-size: 1.2rem !important;
  }
  ul, p {
    font-size: 1rem !important;
  }
}
/* Glassmorphism and animated shine for homepage intro */
.homepage-intro {
  position: relative;
  background: rgba(56,189,248,0.18); /* light blue sky glassmorphism */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12), 0 1.5px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.22);
  padding: 2em 1.5em;
  margin: 2em 0 2.5em 0;
  z-index: 2;
  overflow: hidden;
transition: transform 10s cubic-bezier(0.4,0,0.2,1), opacity 8s;  transform: translateY(0);
  opacity: 1;
}

.homepage-intro::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -60%;
  width: 120%;
  height: 120%;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 100%);
  filter: blur(8px);
  opacity: 0.7;
  border-radius: inherit;
  animation: diagonal-shine-sweep 3.5s linear infinite;
  z-index: 1;
}

.homepage-intro img {
  height: 100px; /* or your preferred size */
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0002;
  background: #fff;
  padding: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@keyframes diagonal-shine-sweep {
  0% { transform: translateX(-30%) translateY(-30%) rotate(0deg); }
  100% { transform: translateX(30%) translateY(30%) rotate(1deg); }
}

.glow-animated-text {
  color: #38bdf8;
  background: linear-gradient(90deg, #38bdf8 0%, #06b6d4 40%, #67e8f9 70%, #fff 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 16px #38bdf8, 0 0 32px #67e8f9, 0 0 48px #fff;
  animation: intro-glow-motion 3.5s linear infinite;
}

@keyframes intro-glow-motion {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

/* Modern header enhancements */
.main-header {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.05em 0 0.05em 0;
  background: rgba(0,0,0,0.55); /* semi-transparent dark overlay */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 3px solid #38bdf8;
  box-shadow: 0 2px 16px #0006;
  border-radius: 0 0 18px 18px;
  transition: transform 10s cubic-bezier(0.4,0,0.2,1), opacity 8s;
  transform: translateY(0);
  opacity: 1;
}

.main-header::after {
  content: '';
  display: block;
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 4px;
  background: linear-gradient(90deg, #38bdf8 0%, #fff 100%);
  opacity: 0.5;
  animation: header-shine 3s linear infinite;
  border-radius: 0 0 18px 18px;
}

@keyframes header-shine {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.sechive-logo {
  height: 80px;
  width: auto;
  margin-right: 1em;
  flex: 0 0 auto;
  box-shadow: 0 0 24px #38bdf8, 0 0 8px #fff;
  border-radius: 12px;
}

.header-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 0.25em;
  position: relative;
}

/* Example icon button styles for header */
.header-icons {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-left: auto;
}
.header-icon-btn {
  background: rgba(56,189,248,0.12);
  border: none;
  border-radius: 50%;
  padding: 0.5em;
  box-shadow: 0 0 8px #38bdf8;
  color: #f8f9fa;
  cursor: pointer;
  transition: background 0.2s;
}
.header-icon-btn:hover {
  background: #38bdf8;
  color: #000;
}

/* Sky blue glassmorphism for .glass-feature-container */
.glass-feature-container {
  background: rgba(0,0,0,0.18); /* transparent dark glassmorphism */
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12), 0 1.5px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255,255,255,0.12);
  padding: 2em 1.5em;
  margin: 2em 0 2.5em 0;
  z-index: 2;
  overflow: hidden;
  color: #f8f9fa;
  text-shadow: none;
}

/* Remove glowing effect from homepage-intro and home-section text */
.homepage-intro, .home-section, .home-section-title, .home-section p, .home-section ul, .home-section li {
  color: #f8f9fa;
  text-shadow: none;
}

/* Header slide-up animation for scroll-hide/show */
.header-hidden {
  transform: translateY(-350px);
  opacity: 0;
  pointer-events: none;
}

/* Slide-up animation for homepage intro glass section */
.homepage-intro {
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  transform: translateY(0);
  opacity: 1;
}
.intro-hidden {
  transform: translateY(-350px);
  opacity: 0;
  pointer-events: none;
}
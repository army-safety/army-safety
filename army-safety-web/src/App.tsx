// import React from 'react'; // Not needed for React 17+ with JSX transform
import logo from './assets/Screenshot 2025-03-13 031750.png';
import './robotic-home.css';
import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpeg';
import photo3 from './assets/3.jpeg';
import photo4 from './assets/4.jpeg';
import photo5 from './assets/5.jpeg';


// Removed unused services and targetMarkets arrays
// import React from 'react'; // Keeping this line as it may be needed for JSX

import { useEffect, useState } from 'react';

const slideshowImages = [photo1, photo2, photo3, photo4, photo5];

function App() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
  <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
  <header className="homepage-intro" style={{ textAlign: 'center', position: 'relative', zIndex: 1, width: '100%', maxWidth: 900, margin: '0 auto' }}>
    <img src={logo} alt="Army Safety Group Logo" style={{ height: 80, marginBottom: 16, borderRadius: 8, boxShadow: '0 2px 8px #0002', background: '#fff', padding: 8 }} />
    <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#f8f6f2' }}>Army Safety Group</h1>
    <p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#f8f6f2' }}>
      Security, Guarding, and Money Transfers
    </p>
  </header>

  <main className="homepage-intro" style={{ maxWidth: 900, width: '100%', color: '#222', position: 'relative', zIndex: 2 }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#1a2a4e' }}>Our Mission</h2>
          <p>
            Welcome to Army Safety Group, Egypt’s distinguished provider of security, guarding, and money transport services. Our mission is to deliver top-tier, innovative security solutions with unwavering commitment to quality, efficiency, and professionalism. We protect institutions, events, and critical infrastructures with highly qualified teams and advanced technologies.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#1a2a4e' }}>Our Services</h2>
          <p>
            We offer comprehensive security services including:
          </p>
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
      </main>

  <footer style={{ textAlign: 'center', padding: '1rem 0', background: 'rgba(26,42,78,0.85)', color: '#fff', position: 'relative', zIndex: 2, width: '100%', maxWidth: 900, borderRadius: 12 }}>
        &copy; {new Date().getFullYear()} Army Safety Group. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

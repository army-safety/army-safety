import React from 'react';
import './PersonnelGallery.css';

import guard2 from '../assets/personnel/guard2.jpeg';
import guard3 from '../assets/personnel/guard3.jpeg';
import guard4 from '../assets/personnel/guard4.jpeg';
import guard5 from '../assets/personnel/guard5.jpeg';
import guard6 from '../assets/personnel/guard6.jpeg';
import guard7 from '../assets/personnel/guard7.jpeg';
import guard8 from '../assets/personnel/guard8.jpeg';

const images = [
  { src: guard2, alt: 'Security Guard 2' },
  { src: guard3, alt: 'Security Guard 3' },
  { src: guard4, alt: 'Security Guard 4' },
  { src: guard5, alt: 'Security Guard 5' },
  { src: guard6, alt: 'Security Guard 6' },
  { src: guard7, alt: 'Security Guard 7' },
  { src: guard8, alt: 'Security Guard 8' },
];

export default function PersonnelGallery() {
  return (
    <div className="personnel-gallery-container">
      <h2 className="personnel-gallery-title">Security Guard Gallery</h2>
      <div className="personnel-gallery-grid">
        {images.map((img, idx) => (
          <img key={idx} src={img.src} alt={img.alt} className="personnel-gallery-img" />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./BrandGalleryModal.css";

export default function BrandGalleryModal({ logos, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  const prevLogo = () => setCurrent((current - 1 + logos.length) % logos.length);
  const nextLogo = () => setCurrent((current + 1) % logos.length);

  return (
    <div className="brand-gallery-modal-overlay" onClick={onClose}>
      <div className="brand-gallery-modal" onClick={e => e.stopPropagation()}>
        <button className="brand-gallery-close" onClick={onClose}>&times;</button>
        <div className="brand-gallery-content">
          <button className="brand-gallery-arrow" onClick={prevLogo}>&lt;</button>
          <img
            src={logos[current].src}
            alt={logos[current].alt}
            className="brand-gallery-img"
          />
          <button className="brand-gallery-arrow" onClick={nextLogo}>&gt;</button>
        </div>
        <div className="brand-gallery-caption">{logos[current].alt}</div>
      </div>
    </div>
  );
}

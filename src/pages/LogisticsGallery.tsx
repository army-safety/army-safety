import React from "react";
import "./LogisticsGallery.css";
import { Link } from 'react-router-dom';

// Example image imports (replace with your actual filenames)

// Import all uniform images
import uniform_01 from "../assets/Logistics/uniform_01.jpeg";
import uniform_02 from "../assets/Logistics/uniform_02.jpeg";
import uniform_03 from "../assets/Logistics/uniform_03.jpeg";
import uniform_04 from "../assets/Logistics/uniform_04.jpeg";
import uniform_05 from "../assets/Logistics/uniform_05.jpeg";
import uniform_06 from "../assets/Logistics/uniform_06.jpeg";
import uniform_07 from "../assets/Logistics/uniform_07.jpeg";
import uniform_08 from "../assets/Logistics/uniform_08.jpeg";
import uniform_09 from "../assets/Logistics/uniform_09.jpeg";
import uniform_10 from "../assets/Logistics/uniform_10.jpeg";
import uniform_11 from "../assets/Logistics/uniform_11.jpeg";
import uniform_12 from "../assets/Logistics/uniform_12.jpeg";
import uniform_14 from "../assets/Logistics/uniform_14.jpeg";
import uniform_15 from "../assets/Logistics/uniform_15.jpeg";
import uniform_16 from "../assets/Logistics/uniform_16.jpeg";
import uniform_17 from "../assets/Logistics/uniform_17.jpeg";
import uniform_18 from "../assets/Logistics/uniform_18.jpeg";
import uniform_19 from "../assets/Logistics/uniform_19.jpeg";
import uniform_20 from "../assets/Logistics/uniform_20.jpeg";
import uniform_21 from "../assets/Logistics/uniform_21.jpeg";
import uniform_22 from "../assets/Logistics/uniform_22.jpeg";
import uniform_23 from "../assets/Logistics/uniform_23.jpeg";
import uniform_24 from "../assets/Logistics/uniform_24.jpeg";
import uniform_25 from "../assets/Logistics/uniform_25.jpeg";
import uniform_26 from "../assets/Logistics/uniform_26.jpeg";
import uniform_27 from "../assets/Logistics/uniform_27.jpeg";
import uniform_28 from "../assets/Logistics/uniform_28.jpeg";

const logisticsImages = [
  { src: uniform_01, alt: "Electronic Metal detector" },
  { src: uniform_02, alt: "Road Blocker" },
  { src: uniform_03, alt: "BlackAccent 6-Mag Tactical Rig" },
  { src: uniform_04, alt: "Rapid-Response Security " },
  { src: uniform_05, alt: "GP-668 Tactical Comms Hub" },
  { src: uniform_06, alt: "HyperScan Security Pro" },
  { src: uniform_07, alt: "MOTOROLA MT-777" },
  { src: uniform_08, alt: "PandaGuard" },
  { src: uniform_09, alt: "Safety Boot" },
  { src: uniform_10, alt: "MOTOROLA GP-668" },
  { src: uniform_11, alt: "Security Bollards & Safety Markings" },
  { src: uniform_12, alt: "Motorola" },
  { src: uniform_14, alt: "Urban Security Vest" },
  { src: uniform_15, alt: "Flags" },
  { src: uniform_16, alt: "Multi-Pocket Security Vest" },
  { src: uniform_17, alt: "Pawfing UV-r" },
  { src: uniform_18, alt: "Motorla MT-777" },
  { src: uniform_19, alt: "Two-Way Communication Radio" },
  { src: uniform_20, alt: "Desert Tactical Boot" },
  { src: uniform_21, alt: "Heavy-Duty Tactical Boot" },
  { src: uniform_22, alt: "Kenwood TK-3107" },
  { src: uniform_23, alt: "Traffic Safety Cones" },
  { src: uniform_24, alt: "Urban security vest" },
  { src: uniform_25, alt: "MOTOROLA TRANSCEVER" },
  { src: uniform_26, alt: "Tactical Boot" },
  { src: uniform_27, alt: "GARRETT" },
  { src: uniform_28, alt: "Security Tactical Vest" },
];

export default function LogisticsGallery() {
  return (
    <div className="intro-content" style={{ position: 'relative' }}>
      <Link
        to="/personnel-gallery"
        className="gallery-link-btn"
        style={{ position: 'absolute', top: 0, right: 0, margin: '1em', zIndex: 2 }}
      >
        View Security Guard Gallery
      </Link>
      <h2>Logistics & Equipment Gallery</h2>
      <p>Browse our selection of security uniforms, shoes, and gear.</p>
      <div className="logistics-gallery-grid">
        {logisticsImages.map((img, idx) => (
          <div className="logistics-gallery-card" key={idx}>
            <img src={img.src} alt={img.alt} />
            <div className="logistics-gallery-caption">{img.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

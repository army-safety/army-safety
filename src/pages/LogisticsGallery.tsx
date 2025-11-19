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
  { src: uniform_01, alt: "Uniform 01" },
  { src: uniform_02, alt: "Uniform 02" },
  { src: uniform_03, alt: "Uniform 03" },
  { src: uniform_04, alt: "Uniform 04" },
  { src: uniform_05, alt: "Uniform 05" },
  { src: uniform_06, alt: "Uniform 06" },
  { src: uniform_07, alt: "Uniform 07" },
  { src: uniform_08, alt: "Uniform 08" },
  { src: uniform_09, alt: "Uniform 09" },
  { src: uniform_10, alt: "Uniform 10" },
  { src: uniform_11, alt: "Uniform 11" },
  { src: uniform_12, alt: "Uniform 12" },
  { src: uniform_14, alt: "Uniform 14" },
  { src: uniform_15, alt: "Uniform 15" },
  { src: uniform_16, alt: "Uniform 16" },
  { src: uniform_17, alt: "Uniform 17" },
  { src: uniform_18, alt: "Uniform 18" },
  { src: uniform_19, alt: "Uniform 19" },
  { src: uniform_20, alt: "Uniform 20" },
  { src: uniform_21, alt: "Uniform 21" },
  { src: uniform_22, alt: "Uniform 22" },
  { src: uniform_23, alt: "Uniform 23" },
  { src: uniform_24, alt: "Uniform 24" },
  { src: uniform_25, alt: "Uniform 25" },
  { src: uniform_26, alt: "Uniform 26" },
  { src: uniform_27, alt: "Uniform 27" },
  { src: uniform_28, alt: "Uniform 28" },
];

export default function LogisticsGallery() {
  return (
    <div className="intro-content">
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
      <div style={{ textAlign: 'center', margin: '2em 0' }}>
        <Link to="/personnel-gallery" className="gallery-link-btn">
          View Security Personnel Gallery
        </Link>
      </div>
    </div>
  );
}

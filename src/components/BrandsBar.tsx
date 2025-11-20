import React from "react";
import "./BrandsBar.css";

import kasrawy from "../assets/brands/brand_kasrawy.png";
import sallab from "../assets/brands/Sallab.png";
import americanSchool from "../assets/brands/brand_American school.png";
import betrojet from "../assets/brands/brand_betrojet.png";
import iguall from "../assets/brands/brand_iguall.jpeg";
import inovo from "../assets/brands/brand_inovo.png";
import mabany from "../assets/brands/brand_mabany.jpeg";
import morshedy from "../assets/brands/brand_morshedy.jpeg";
import samco from "../assets/brands/brand_samco.png";
import upwyde from "../assets/brands/brand_upwyde.jpg";
import fedex from "../assets/brands/fedex_logistics.png";

const brandLogos = [
  { src: kasrawy, alt: "Kasrawy Group" },
  { src: sallab, alt: "Sallab" },
  { src: americanSchool, alt: "American School" },
  { src: betrojet, alt: "Betrojet" },
  { src: iguall, alt: "Iguall" },
  { src: inovo, alt: "Inovo" },
  { src: mabany, alt: "Mabany" },
  { src: morshedy, alt: "Morshedy" },
  { src: samco, alt: "Samco" },
  { src: upwyde, alt: "Upwyde" },
  { src: fedex, alt: "Fedex Logistics" },
];

export default function BrandsBar() {
  return (
    <div className="brands-bar-glass">
      {brandLogos.map((logo, idx) => (
        <div className="brand-logo-container" key={idx}>
          <img src={logo.src} alt={logo.alt} className="brand-logo-img" />
        </div>
      ))}
    </div>
  );
}

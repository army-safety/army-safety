import React, { useState } from "react";
import "./BrandsBar.css";
import BrandGalleryModal from "./BrandGalleryModal";

import kasrawy from "../assets/brands/kasrawy.png";
import sallab from "../assets/brands/Sallab.png";
import americanSchool from "../assets/brands/American school.png";
import betrojet from "../assets/brands/betrojet.png";
import iguall from "../assets/brands/iguall.jpeg";
import inovo from "../assets/brands/inovo.png";
import mabany from "../assets/brands/mabany.jpeg";
import morshedy from "../assets/brands/morshedy.jpeg";
import samco from "../assets/brands/samco.png";
import upwyde from "../assets/brands/upwyde.jpg";
import fedex from "../assets/brands/fedex_logistics.png";
import mall_talaat from "../assets/brands/mall_talaat.jpg";
import porto_galib from "../assets/brands/porto_galib.jpg";
import west_arena from "../assets/brands/west_arena.jpeg";
import pearl from "../assets/brands/pearl_pyramids.png";
import prk from "../assets/brands/prk.jpg";

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
  { src: mall_talaat, alt: "Mall Talaat" },
  { src: porto_galib, alt: "Porto Galib" },
  { src: west_arena, alt: "West Arena" },
  { src: pearl, alt: "Pearl Pyramids" },
  { src: prk, alt: "PRK" },
];

export default function BrandsBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = idx => {
    setModalIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="brands-bar-glass">
        {brandLogos.map((logo, idx) => (
          <div className="brand-logo-container" key={idx} onClick={() => openModal(idx)} style={{ cursor: 'pointer' }}>
            <img src={logo.src} alt={logo.alt} className="brand-logo-img" />
          </div>
        ))}
      </div>
      {modalOpen && (
        <BrandGalleryModal logos={brandLogos} initialIndex={modalIndex} onClose={closeModal} />
      )}
    </>
  );
}

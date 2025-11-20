import React from "react";
import "./HomeFeaturesSection.css";
import { FaClock, FaComments, FaTruck, FaPhoneAlt, FaMicrochip, FaUserShield } from "react-icons/fa";

const features = [
  {
    icon: <FaClock />,
    title: "Perfection Anytime",
    text: "We strive for perfection in everything we do, providing the highest level of service at all times. Our clients are completely satisfied with our work."
  },
  {
    icon: <FaComments />,
    title: "24/7 Communication",
    text: "We are committed to being there for our clients around the clock, providing a 24/7 communication service to ensure their needs are met and concerns addressed promptly."
  },
  {
    icon: <FaTruck />,
    title: "Our Fleet",
    text: "We pride ourselves on having our fleet, ensuring we have the resources to meet the demands of our clients in a timely and efficient manner."
  },
  {
    icon: <FaPhoneAlt />,
    title: "Emergency Help",
    text: "We understand emergencies can happen at any time, which is why we offer round-the-clock emergency assistance to ensure our clients receive the help they need, when they need it."
  },
  {
    icon: <FaMicrochip />,
    title: "Advance Technology",
    text: "We stay ahead of the curve by constantly investing in the latest and most advanced technology, allowing us to provide our clients with the most efficient and effective services possible."
  },
  {
    icon: <FaUserShield />,
    title: "Licensed Officer",
    text: "Our team is comprised of highly trained and licensed officers who have undergone rigorous background checks and have the necessary qualifications to provide top-notch security services."
  }
];

export default function HomeFeaturesSection() {
  return (
    <section className="home-features-glass">
      <h2 className="home-features-title">What Sets SECHIVE Security Services Apart</h2>
      <div className="home-features-grid">
        {features.map((f, idx) => (
          <div className="home-feature-card" key={idx}>
            <div className="home-feature-icon">{f.icon}</div>
            <h3 className="home-feature-heading">{f.title}</h3>
            <p className="home-feature-text">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

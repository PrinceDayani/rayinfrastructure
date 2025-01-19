import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Brochures.css";
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";

// Hero Section Component
const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>

      <div ref={ref} className={`hero-content ${inView ? "fade-in" : ""}`}>
        <h1 className="hero-title">
          <span>Building today
          </span>
          <br />
          for a sustainable tomorrow.
        </h1>
      </div>
    </section>
  );
};

// Card Holder Component..
const CardHolder = ({ image }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "0px",
    overflow: "hidden",
    width: "300px",
    margin: "0 10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt="Brochure" style={imageStyle} />
    </div>
  );
};

// Brochure Section Component
const BrochureSection = () => {
  const handleDownload = (fileName) => {
    alert(`Downloading ${fileName}`);
    // Add logic to download the respective PDF..
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  const downloadButtonStyle = {
    display: "block",
    width: "300px",
    padding: "10px 5px",
    textAlign: "center",
    backgroundColor: "#87212e",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    margin: "10px",
  };

  const nameStyle = {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "10px",
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Card Section */}
      <div style={cardContainerStyle}>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div style={nameStyle}>Brochure 1</div>
          <button style={downloadButtonStyle} onClick={() => handleDownload("Brochure1.pdf")}>
            Download PDF 1 <i className="fas fa-download"></i>
          </button>
        </div>

        <div>
          <CardHolder image={bridgeHomeImage} />
          <div style={nameStyle}>Brochure 2</div>
          <button style={downloadButtonStyle} onClick={() => handleDownload("Brochure2.pdf")}>
            Download PDF 2 <i className="fas fa-download"></i>
          </button>
        </div>

        <div>
          <CardHolder image={bridgeHomeImage} />
          <div style={nameStyle}>Brochure 3</div>
          <button style={downloadButtonStyle} onClick={() => handleDownload("Brochure3.pdf")}>
            Download PDF 3 <i className="fas fa-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Content Section Component..
const ContentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`content-section ${inView ? "slide-up" : ""}`}>
      <div className="content-wrapper">
        <div className="content-category">POWER</div>
        <h2 className="content-title">
          Delivering Excellence: From Generation to Transmission
        </h2>

        {/* Brochure Section */}
        <BrochureSection />
      </div>
    </section>
  );
};


const Brochures = () => {
  return (
    <div>
      <HeroSection />
        <ContentSection />
    </div>
  );
};

export default Brochures;

import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/SectorS.css";
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";
import "../styles/Leadership.css";

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
        <h1 className="hero-title">Our Leadership</h1>
      </div>
    </section>
  );
};

const CardHolder = ({ image }) => {
  return (
    <div className="card-holder">
      <img src={image} alt="Brochure" className="card-image" />
    </div>
  );
};

const BrochureSection = () => {
  return (
    <div>
      <div className="card-container">
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Harsh Sanghani</div>
          <div className="designation">Designation</div>
        </div>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Noman Desai</div>
          <div className="designation">Designation</div>
        </div>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Nawab Baloch</div>
          <div className="designation">Designation</div>
        </div>
      </div>
    </div>
  );
};

const ManagementTeam = () => {
  return (
    <div>
      <h2 className="content-title">Management Team</h2>
      <div className="card-container">
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Dhaval Shah</div>
          <div className="designation">Designation</div>
        </div>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Dipen Shah</div>
          <div className="designation">Designation</div>
        </div>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Mukesh Sanghani</div>
          <div className="designation">Designation</div>
        </div>
        <div>
          <CardHolder image={bridgeHomeImage} />
          <div className="name">Mohammad Baloch</div>
          <div className="designation">Designation</div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`content-section ${inView ? "slide-up" : ""}`}>
      <div className="content-wrapper">
        <div className="content-category">OUR LEADERSHIP</div>
        <h2 className="content-title">Board of Directors</h2>
        <BrochureSection />
        <ManagementTeam />
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <div>
      <HeroSection />
      <section className="down-hero">
        <ContentSection />
      </section>
    </div>
  );
};

export default Leadership;

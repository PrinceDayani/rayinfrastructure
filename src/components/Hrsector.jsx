import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Hrsector.css';
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";

const PowerLinesAnimation = () => {
  const handleScroll = useCallback(() => {
    const lines = document.querySelectorAll('.power-line');
    const scrolled = window.scrollY;
    
    lines.forEach((line, index) => {
      const speed = 0.2 + index * 0.1;
      const yPos = -(scrolled * speed);
      line.style.transform = `rotate(-15deg) translateY(${yPos}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="power-lines">
      {[...Array(5)].map((_, index) => (
        <div 
          key={index} 
          className="power-line" 
          style={{
            top: `${40 + (index * 3)}%`,
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      
      <PowerLinesAnimation />
      
      <div ref={ref} className={`hero-content ${inView ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          <span className="text-gradient">Powering</span>
          <br />
          Tomorrow
        </h1>
      </div>
    </section>
  );
};

const ContentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className={`content-section ${inView ? 'slide-up' : ''}`}>
      <div className="content-wrapper">
        <div className="content-category">POWER</div>
        <h2 className="content-title">
          Delivering Excellence: From Generation to Transmission
        </h2>
        <p className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum augue 
          a leo scelerisque, nec lacinia elit malesuada. Quisque euismod, nunc non 
          efficitur fermentum, enim elit tempor nisl, id accumsan elit lacus ac metus.
        </p>
        <p className="content-text">
          Donec nec justo neque. Suspendisse potenti. Sed quis lectus vehicula, 
          pulvinar nulla ac, vehicula magna. Nullam porttitor dolor id justo eleifend,
          eget congue sem posuere.
        </p>
      </div>
    </section>
  );
};

const ExpertiseSection = ({ expertiseImage }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const expertise = [
    'Power Plant Design & Engineering',
    'Automation & Control Systems',
    'Re-engineering & Modernization',
    'Digital Solutions & Smart Grid',
    'Renewable Energy Integration',
    'Power Distribution Networks'
  ];

  return (
    <section ref={ref} className={`expertise-container ${inView ? 'fade-in' : ''}`}>
      <div className="expertise-content">
        <h2 className="expertise-title">Our Expertise</h2>
        <ul className="expertise-list">
          {expertise.map((item, index) => (
            <li 
              key={index}
              className="expertise-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="expertise-image">
  <img 
    src={bridgeHomeImage} 
    alt="Engineers working on power infrastructure" 
    loading="lazy"
  />
</div>
    </section>
  );
};

const CombinedPage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <section className="down-hero">
        <ContentSection />
        <ExpertiseSection expertiseImage="/assets/images/BridgeHome.jpg" />
      </section>
    </div>
  );
};

export default CombinedPage;
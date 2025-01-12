import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/SectorS.css';
import '../styles/Breakthrough.css';
import { Navbar } from 'react-bootstrap'


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

      <div ref={ref} className={`hero-content ${inView ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          Breakthrough
        </h1>
      </div>
    </section>
  );
};

// Content Section Component
const ContentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className={`content-section ${inView ? 'slide-up' : ''}`}>
      <div className="content-wrapper">
        <div className="content-category">MILESTONES</div>
        <Timeline />
      </div>
    </section>
  );
};

function Card({ children, className }) {
  return <div className={`timeline-card ${className}`}>{children}</div>;
}

function Timeline() {
  const timelineData = [
    { id: 1, content: ["Lorem ipsum is simply dummy text", "of the printing and typesetting industry", "Used since 1500s"], year: "2023" },
    { id: 2, content: ["Lorem ipsum has survived", "not only five centuries", "but also the leap into digital"], year: "2022" },
    { id: 3, content: ["Remaining essentially unchanged", "Lorem Ipsum became popular", "with desktop publishing"], year: "2021" },
    { id: 4, content: ["It has roots in classical literature", "from 45 BC", "Discovered in 1960s"], year: "2020" },
    { id: 5, content: ["It was originally used", "by a Latin professor", "as filler text"], year: "2019" },
    { id: 6, content: ["It was originally used", "by a Latin professor", "as filler text"], year: "2019" },
    { id: 7, content: ["It was originally used", "by a Latin professor", "as filler text"], year: "2019" },
  ];

  return (
    <div className="container">
      {/* Central line */}
      <div className="timeline-line" />

      <div>
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${
              index % 2 === 0 ? 'timeline-item-even' : 'timeline-item-odd'
            }`}
          >
            {/* Content */}
            <div
              className={`timeline-content ${
                index % 2 === 0 ? 'timeline-content-even' : 'timeline-content-odd'
              }`}
            >
              <Card>
                <ul className="timeline-list">
                  {item.content.map((line, lineIndex) => (
                    <li key={lineIndex} className="timeline-list-item">
                      <span>➔</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Timeline dot */}
            <div className="timeline-dot">
              <div className="timeline-dot-circle" />
            </div>

            {/* Year */}
            <div
              className={`timeline-year ${
                index % 2 === 0 ? 'timeline-year-even' : 'timeline-year-odd'
              }`}
            >
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Breakthrough = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
      <section className="down-hero">
        <ContentSection />
      </section>
    
      
    </>
  );
};

  export default Breakthrough;
  
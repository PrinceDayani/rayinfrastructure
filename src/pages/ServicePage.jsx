import React, { useState, useEffect, useRef } from "react";
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";
import { Link } from "react-router-dom";
import "../styles/ServicePage.css";

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Animated components
const AnimatedSection = ({ children, className }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`${className} scroll-fade-in ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

const Service = () => {
  const [selectedService, setSelectedService] = useState("all");

  const services = [
    {
      title: "Water Supply",
      description:
        "We specialize in designing and implementing efficient and sustainable water supply systems that meet the needs of communities and industries.",
    },
    {
      title: "Experience Certificate-Drainage",
      description:
        "We provide expert solutions in drainage system design and execution, ensuring effective water management and flood prevention.",
    },
    {
      title: "Sewage Treatment Plant",
      description:
        "Our team delivers innovative and eco-friendly sewage treatment plant designs to ensure safe and effective wastewater management.",
    },
    {
      title: "Storm Water",
      description:
        "We offer comprehensive stormwater management solutions, including planning, design, and construction, to mitigate flooding and erosion.",
    },
    {
      title: "Lake Work",
      description:
        "We specialize in lake restoration, development, and maintenance, enhancing ecological balance and promoting water conservation.",
    },
    {
      title: "Building Project",
      description:
        "We design and construct innovative and sustainable buildings that reflect modern architectural trends and client aspirations.",
    },
    {
      title: "Road Project",
      description:
        "We provide end-to-end solutions for road infrastructure projects, from planning and design to construction and maintenance.",
    },
    {
      title: "Fishery Work",
      description:
        "We offer comprehensive fishery development services, including pond construction, water management, and sustainable aquaculture solutions.",
    },
    {
      title: "Solar Rooftop",
      description:
        "We design and install efficient solar rooftop systems, providing sustainable and cost-effective energy solutions for various sectors.",
    },
  ];

  const allProjects = [
    {
      title: "Water and Sanitation Management Organisation",
      image: bridgeHomeImage,
      service: "Water Supply",
    },
    {
      title: "Construction of Overhead Tank",
      image: bridgeHomeImage,
      service: "Water Supply",
    },
    {
      title: "Construction Supervision Consultancy (CSC) Services",
      image: bridgeHomeImage,
      service: "Water Supply",
    },
    {
      title: "35 MGD Water Supply Project",
      image: bridgeHomeImage,
      service: "Water Supply",
    },
    {
      title: "Third Party Inspection",
      image: bridgeHomeImage,
      service: "Water Supply",
    },
    {
      title: "CSC-TPI Service",
      image: bridgeHomeImage,
      service: "Experience Certificate-Drainage",
    },
    {
      title: "PMC for Construction",
      image: bridgeHomeImage,
      service: "Experience Certificate-Drainage",
    },
    {
      title: "TPI Services",
      image: bridgeHomeImage,
      service: "Experience Certificate-Drainage",
    },
    {
      title: "Drainage Gravity Line",
      image: bridgeHomeImage,
      service: "Sewage Treatment Plant",
    },
    {
      title: "TPI Services for Sewage Pumping Station",
      image: bridgeHomeImage,
      service: "Sewage Treatment Plant",
    },
    {
      title: "Sewerage Pumping Station",
      image: bridgeHomeImage,
      service: "Sewage Treatment Plant",
    },
    {
      title: "Project Management Consultancy",
      image: bridgeHomeImage,
      service: "Storm Water",
    },
    {
      title: "Third Party Quality Assurance",
      image: bridgeHomeImage,
      service: "Storm Water",
    },
    {
      title: "TPQA Work for Construction of Drainage Collection Network",
      image: bridgeHomeImage,
      service: "Storm Water",
    },
    {
      title: "Third Party Inspection and Quality Assurance",
      image: bridgeHomeImage,
      service: "Fishery Work",
    },
    {
      title: "TPI Services for Construction Work",
      image: bridgeHomeImage,
      service: "Lake Work",
    },
    {
      title: "3 TPI Services for Development Work",
      image: bridgeHomeImage,
      service: "Lake Work",
    },
    {
      title: "TPI Services for Development of Karjan Lake",
      image: bridgeHomeImage,
      service: "Lake Work",
    },
    {
      title: "Welding and Asphalt Recarpeting of Existing Road",
      image: bridgeHomeImage,
      service: "Building Project",
    },
    {
      title: "TPI Services for Construction of 480",
      image: bridgeHomeImage,
      service: "Building Project",
    },
    {
      title: "Work of Yoga Pradarshani Bhavan and Girls Hostel",
      image: bridgeHomeImage,
      service: "Building Project",
    },
    {
      title: "Work of Construction of Guest House and Library",
      image: bridgeHomeImage,
      service: "Building Project",
    },
    {
      title: "Inspection of Material & Construction Work of Cement Concrete Road",
      image: bridgeHomeImage,
      service: "Road Project",
    },
    {
      title: "Inspection of Material & Construction Work of Cement Concrete Road v2",
      image: bridgeHomeImage,
      service: "Road Project",
    },
    {
      title: "TPI Services for Monitoring",
      image: bridgeHomeImage,
      service: "Road Project",
    },
    {
      title: "TPI Services for Construction of RCC Road",
      image: bridgeHomeImage,
      service: "Road Project",
    },
    {
      title: "TPQA Work of Distribution Network with Tap Connection",
      image: bridgeHomeImage,
      service: "Solar Rooftop",
    },
  ];
  

  const filteredProjects =
    selectedService === "all"
      ? allProjects
      : allProjects.filter((project) => project.service === selectedService);

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <main className="main">
      <AnimatedSection className="hero">
        <div className="heroContent">
          <h1>Building today, <br /> for a sustainable tomorrow.</h1>
          <p>
            We provide high-quality engineering and project management solutions,
            focusing on safety, efficiency, and cost-effectiveness. Built on
            integrity and innovation, we strive to create lasting value for our
            clients and industry.
          </p>
        </div>
      </AnimatedSection>

      <div className="s-video">
        <AnimatedSection className="statsVideo">
          <div className="statsVideoContent">
            <div className="statItem">
              <h2>Industry leader-specialist</h2>
              <p>Dummy</p>
            </div>
          </div>

          <div className="numbers">
            <div className="stat">
              <span>38k+</span>
              <p>sq.ft of land area</p>
            </div>
            <div className="stat">
              <span>94+</span>
              <p>projects done</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="videoContainer">
          <div className="video">
            <p>Video Placeholder</p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="services">
        <h2>
          Our aim is to create innovative, efficient, and sustainable solutions
          that align with their surroundings, adding value and functionality to
          the environment.
        </h2>
        <div className="serviceGrid">
          <div className="btnx-container">
            <button
              className={`btnx ${selectedService === "all" ? "active" : ""}`}
              onClick={() => handleServiceClick("all")}
            >
              <div className="serviceCard">
                <h3>All Services</h3>
                <p>View all our projects across different services</p>
              </div>
            </button>
          </div>

          {services.map((service, index) => (
            <AnimatedSection className="btnx-container" key={index}>
              <button
                className={`btnx ${
                  selectedService === service.title ? "active" : ""
                }`}
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="serviceCard">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="recentProjects">
        <div className="project-Heading">
          <h2>Our Projects</h2>
          <p>
            {selectedService === "all"
              ? "We believe that the built environment and buildings we design should be a reflection of the aspirations and values of our clients."
              : `Showing projects for ${selectedService}`}
          </p>
        </div>
        <div className="projectGrid">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={index}>
              <Link
                to={`/Project/${project.service.replace(/ /g, "")}/${encodeURIComponent(
                  project.title
                )}`}
                className="projectCardLink"
              >
                <div className="projectCard">
                  <div className="projectImage">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h3>{project.title}</h3>
                  <p className="projectService">{project.service}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
};

const ServicePage = () => {
  return <Service />;
};

export default ServicePage;

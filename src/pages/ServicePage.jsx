import React from "react";
import bridgeHomeImage from "../assets/images/BridgeHome.jpg";
import "../styles/ServicePage.css";

const Service = () => {
  const services = [
    {
      title: "Architecture",
      description: "We believe that the built environment and buildings we design should be a reflection of the aspirations and values of our clients.",
    },
    {
      title: "Civil Engineering",
      description: "Our goal is to design functional, efficient, and sustainable buildings that contribute to the context of their surroundings.",
    },
    {
      title: "Survey",
      description: "From the examinations to the lower lying terrain, our survey departments are staffed by individuals who are fully capable.",
    },
    {
      title: "Transportation",
      description: "We offer transportation-related planning, ROW acquisition, studies, design, inspection, survey, and utility relocation services.",
    },
    {
      title: "Designer Led / Design Build",
      description: "Our firm offers experience in Design-Led/Design-Build, Construction Manager at Risk, and is able to assist our clients.",
    },
  ];

  const recentProjects = [
    { title: "Rock Mansion", image: bridgeHomeImage },
    { title: "Glass House", image: bridgeHomeImage },
    { title: "Solid Media", image: bridgeHomeImage },
    { title: "Rock Mansion", image: bridgeHomeImage },
    { title: "Glass House", image: bridgeHomeImage },
    { title: "Solid Media", image: bridgeHomeImage },
  ];

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1>Engineering Excellence, <br /> Building Trust.</h1>
          <p>
            We provide high-quality engineering and project management solutions,
            focusing on safety, efficiency, and cost-effectiveness. Built on
            integrity and innovation, we strive to bring lasting value to our
            clients and industry.
          </p>
        </div>
      </section>

      {/* Stats and Video Section */}
      <div className="s-video">
      <section className="statsVideo">
        <div className="statsVideoContent">

          <div className="statItem">
            <h2>Industry leader-specialist</h2>
            <p>
              We have trained over 38k+ Design needs for years and still going
              strong as the most trusted company.
            </p>
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

      </section>

      <div className="videoContainer">
          <div className="video">
            <p>Video Placeholder</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services">
        <h2>
          Our aim is to create innovative, efficient, and sustainable solutions
          that align with their surroundings, adding value and functionality to
          the environment.
        </h2>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recentProjects">
        <div className="project-Heading">
        <h2>Recent Projects</h2>
        <p>
          We believe that the built environment and buildings we design should
          be a reflection of the aspirations and values of our clients.
        </p>
        </div>
        <div className="projectGrid">
          {recentProjects.map((project, index) => (
            <div key={index} className="projectCard">
              <div className="projectImage">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const ServicePage = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default ServicePage;

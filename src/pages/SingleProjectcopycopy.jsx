import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/SingleProject.css';


// HeroSection Component
const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herocontent">
        <h1>Building today for a sustainable tomorrow.</h1>
        <p>
          We provide high-quality engineering and project management solutions,
          focusing on safety, efficiency, and cost-effectiveness. Built on
          integrity and innovation, we strive to create lasting value for our
          clients and industry.
        </p>
        <div>
          <button className="redbutton">Get A Quote</button>
          <button className="outlinebutton">More About Us</button>
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div className="project-details">
      {/* Left Section */}
      <div className="left-section">
        <h4>Project Details</h4>
        <p>
          <strong>Client:</strong> <div>Krish Satasiya</div>
        </p>
        <p>
          <strong>Location:</strong> <div>Ahmedabad, India</div>
        </p>
        <p>
          <strong>Completed:</strong> <div>March 2016</div>
        </p>
      
        <div className="button-group">
          <div>
            <button className="default-button">Previous Project</button>
          </div>
          <button className="default-button">Next Project</button>
        </div>
        <button className="pdf-button">Company Brochure</button>
        <h4>Contact Info</h4>
        <p>Address: Ahmedabad, India</p>
        <p>Phone No: +91 1234567890</p>
        <p>Email: example@email.com</p>
        <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
      </div>

      {/* Right Section */}
      <>
        <div className="right-section">
          <img
            src="https://via.placeholder.com/900x600"
            alt="Project"
            className="project-image"
          />
          <h2>Building Construction</h2>
          <p>
            The project involves comprehensive preparation, monitoring, supervision, and surveillance of an in-village water supply scheme in Gujarat. It was implemented to enhance water accessibility and improve sanitation standards in rural areas. The initiative supports sustainable water management practices while ensuring reliable delivery of potable water to households across villages.
          </p>
          <p>
            The project required the development of advanced water infrastructure, including reservoirs, pipelines, and treatment facilities. It also incorporated innovative approaches to construction and environmental sustainability. Emphasis was placed on durability, resource efficiency, and aligning with modern engineering practices to meet both current and future water demands of the community.
          </p><br></br>
        
        <p><h2>What We Do</h2>
        <br></br>

          We specialize in providing high-quality construction services tailored to meet our client's needs.</p>
        <ul>
          <li>✔ Conducted extensive surveys to understand water resource availability and community requirements.</li>
          <li>✔ Supervised and monitored the construction and installation of essential water distribution systems.</li>
          <li>✔ Ensured high-quality standards in the execution of all project components through regular inspections and surveillance.</li>
          <li>✔ Promoted community awareness and engagement for effective usage and conservation of water.</li>
          <li>✔ Delivered a functional water supply system that meets safety, reliability, and accessibility benchmarks.</li>
        </ul>
        </div>
      </>
    </div>
  );
};

const SingleProject = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectDetails />
    </>
  );
};

export default SingleProject;
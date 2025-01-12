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
        <p>
          <strong>Website:</strong> <div>RajInfrastructur.com</div>
        </p>
        <div className="button-group">
          <div>
          <button className="default-button">Previous Project</button></div>
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
      <div className="right-section">
        <img
          src="https://via.placeholder.com/900x600"
          alt="Project"
          className="project-image"
        />
        <h2>Building Construction</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="quotesection">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat officia deserunt mollit anim id est laborum.


          </p>
        </div>
        <h2>What We Do</h2>
        <p>
          We specialize in providing high-quality construction services tailored
          to meet our client's needs.
        </p>
        <ul>
          <li>✔ Quality Construction Services</li>
          <li>✔ Innovative Design Solutions</li>
          <li>✔ Client-Centered Approach</li>
        </ul>
      </div>
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
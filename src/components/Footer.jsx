// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-logo-description">
          <div className="logo">
            <img src="./images/RayLogo.png" alt="Ray" />
            <span>Ray Infrastructures Pvt. Ltd.</span>
          </div>
          <p>
            We provide high-quality engineering and project management
            solutions, focusing on safety, efficiency, and cost-effectiveness.
            Built on integrity and innovation, we strive to create lasting value
            for our clients and industry.
          </p>
          {/* Email Subscription */}
          <div className="email-subscription">
            <input
              type="email"
              placeholder="Email"
              className="email-input"
            />
            <button className="subscribe-btn">➔</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <nav>
            <Link to="/studies">Studies & Planning</Link>
            <Link to="/surveys">Surveys & Investigations</Link>
            <Link to="/design">Design & Construction Engineering</Link>
            <Link to="/roof">Roof Maintenance</Link>
            <Link to="/management">Project Management</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <address>
            C.O.: 505, Synergy Tower, Nr Vodafone House, Corporate Rd,
            Prahladnagar, Ahmedabad 380015
            <br />
            +91 079 4600 1587
            <br />
            <a href="mailto:info@rayinfra.in">info@rayinfra.in</a>
          </address>
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LN</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YT</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Ray Infrastructure © 2024 All rights reserved</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
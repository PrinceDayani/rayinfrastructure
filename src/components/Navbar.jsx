import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Add styles here
import logo from "../assets/images/RL.jpg"; // Adjust the path to match your project structure

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHomeOpen, setHomeOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle individual dropdowns
  const toggleHomeDropdown = () => setHomeOpen(!isHomeOpen);
  const togglePagesDropdown = () => setPagesOpen(!isPagesOpen);
  const toggleServicesDropdown = () => setServicesOpen(!isServicesOpen);

  // JavaScript function to close dropdowns when clicking outside
  const closeDropdowns = (e) => {
    if (!e.target.closest(".dropdown")) {
      setHomeOpen(false);
      setPagesOpen(false);
      setProjectsOpen(false);
      setServicesOpen(false);
    }
  };

  // Add event listener to close dropdowns when clicking outside
  React.useEffect(() => {
    document.addEventListener("click", closeDropdowns);
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
      <p style={{ fontFamily: 'Outfit, sans-serif' }}>
      Building today for a sustainable tomorrow.

    </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={`nav-bar ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Ray" />
          </Link>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleHomeDropdown}>
            <Link to="/">Home</Link>
            </button>
          </div>

          <div className="dropdown">
            <button className="dropbtn" onClick={togglePagesDropdown}>
              About Us
            </button>
            {isPagesOpen && (
              <div className="dropdown-content">
                <Link to="/FAQ">FAQ</Link>
                <Link to="/Breakthrough">Histoy</Link>
                <Link to="/Brochures">Brochures</Link>
                <Link to="/Leadership">Our Team</Link>
              </div>
            )}
          </div>

        

          <div className="dropdown">
            <button className="dropbtn" onClick={toggleServicesDropdown}>
              Services
            </button>
            {isServicesOpen && (
              <div className="dropdown-content">
                <Link to="/ServicePage">Servicess</Link>
                <Link to="/SingleProject">Project Page</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="contact-btnX">Contact Us</Link>
        </nav>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </header>
  );
};

export default Header;

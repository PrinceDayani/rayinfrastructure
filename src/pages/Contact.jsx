import React, {useState } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";



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
          <span>Engineering a</span>
          <br />
          better tomorrow™
        </h1>
      </div>
    </section>
  );
};

// Inquiry Section Component
const Inquiry = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true); // Captcha completed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please complete the CAPTCHA to proceed.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="inquiry-container">
      <div className="card">

        {/* Form Fields */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company-name">Company Name:*</label>
            <input type="text" id="company-name" className="input-box" placeholder="Enter company name" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-name">Contact Name:*</label>
            <input type="text" id="contact-name" className="input-box" placeholder="Enter contact name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address of Contact:*</label>
            <input type="email" id="email" className="input-box" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number of Contact:*</label>
            <input type="tel" id="phone" className="input-box" placeholder="Enter phone number" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="website">Website URL:</label>
            <input type="url" id="website" className="input-box" placeholder="Enter website URL" />
          </div>
          <div className="form-group">
            <label htmlFor="service-nature">Nature of Service:*</label>
            <input type="text" id="service-nature" className="input-box" placeholder="Enter nature of service" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service-description">Briefly describe your service offerings:*</label>
          <textarea id="service-description" className="textarea-box" placeholder="Describe your services here"></textarea>
        </div>

        {/* reCAPTCHA */}
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY" // Replace with your actual Site Key
            onChange={handleCaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>

        <p className="mandatory-note">*All fields are mandatory</p>
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
        <h1 className="content-title">
        Business Inquiry
        </h1>
        < Inquiry/>

      </div>
    </section>
  );
};

const ContactUs = () => {
  
  const [selectedOffice, setSelectedOffice] = useState("Domestic Offices");

  // Sample data for locations
  const officeData = {
    "Domestic Offices": [
      "City 1",
      "City 2",
      "City 3",
      "City 4",
    ],
    "Subsidiaries Offices": [
      "City A",
      "City B",
      "City C",
    ],
    "Overseas Offices": [
      "City X",
      "City Y",
    ],
    "Project Offices": [
      "City Alpha",
      "City Beta",
      "City Gamma",
    ],
  };

  const renderCities = (office) => {
    return officeData[office].map((city, index) => (
      <div className="city-card" key={index}>
        <h4>{city}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fermentum augue a leo scelerisque, nec lacinia elit malesuada.
        </p>
      </div>
    ));
  };

  return (
    <div className="contactUs">
      <h1 className="content-title">Contact Us</h1>
        <h3 className="offices-h3">Offices and Address</h3>
      <div className="Offices-Address">
        <div className="Corporate">
          <h4>Corporate Office</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            animi voluptatem voluptas. Aperiam repellendus provident, rem nihil
            voluptates a natus ducimus quis quibusdam eaque, ratione hic
            perspiciatis quae commodi ex.
          </p>
        </div>
        <div className="registered">
          <h4>Registered Office</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            animi voluptatem voluptas. Aperiam repellendus provident, rem nihil
            voluptates a natus ducimus quis quibusdam eaque, ratione hic
            perspiciatis quae commodi ex.
          </p>
        </div>
      </div>

      <div className="locations-container">
        {/* Left Side Office Names */}
        <div className="offices-list">
          {Object.keys(officeData).map((office, index) => (
            <div
              key={index}
              className={`office-card ${
                selectedOffice === office ? "active" : ""
              }`}
              onClick={() => setSelectedOffice(office)}
            >
              <span>{office}</span> 
            </div>
          ))}
        </div>

        {/* Right Side Locations */}
        <div className="locations-display">
          {selectedOffice ? (
            <div className="locations-card">
              <h3>{selectedOffice}</h3>
              <div className="cities-container">
                {renderCities(selectedOffice)}
              </div>
            </div>
          ) : (
            <div className="placeholder">
              <p>Select an office to view locations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div>
      {/* @RAYconnect and Contact Card Section */}
      <div className="connect-container">
        {/* Left Side: @RAYconnect */}
        <div className="connect-left">
          <h3 className="connect-title">@RAYconnect</h3>
          <p>Follow us on your favorite channels.</p>
          <div className="platform-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="platform-icon" /> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="platform-icon" /> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="platform-icon" /> Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="platform-icon" /> Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="platform-icon" /> YouTube
            </a>
          </div>
        </div>

        {/* Right Side: Contact Card */}
        <div className="connect-right">
          <div className="email-card">
            <h3>Email</h3>
            <p>
              Should you have any inquiry or need more information please contact us at 
              <strong> connect@rayinfra.in</strong>.
            </p>
            <p>
              To apply for a job, please visit <strong>rayinfra.in/careers</strong> and upload your CV against the relevant job opportunities listed on the page. If your profile matches the requirement, our team would connect with you. We wish you all the best in your job search.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <div className="page-container">
        <ContentSection />
      <ContactUs/>
      <Links/>
    </div>
    </div>
  );
};

export default ContactPage;

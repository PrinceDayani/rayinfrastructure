import React, { useState, useEffect, useCallback, useMemo } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ProjectCards from "../components/Credentials";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

// Animation variants
const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  }
};

// Custom hook for carousel
const useCarousel = (images, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return currentIndex;
};

// ProjectCard Component
const ProjectCard = React.memo(({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 md:h-56 lg:h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
});

// Hero Section
const HeroSection = () => {
  const images = useMemo(() => [
    "https://wallpapercave.com/wp/wp9292042.jpg",
    "https://wallpapercave.com/wp/wp9292041.jpg",
    "https://wallpapercave.com/wp/wp9292040.jpg",
  ], []);

  const currentImageIndex = useCarousel(images);

  return (
    <div 
      className="w-full h-[90vh] md:h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat text-white text-center transition-all duration-1000 relative"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold leading-tight">
          Building today for a sustainable tomorrow.
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 px-2 md:px-4">
          We provide high-quality engineering and project management solutions,
          focusing on safety, efficiency, and cost-effectiveness.
        </p>
        <div className="space-x-2 md:space-x-4">
          <button className="text-sm md:text-base bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-red-700 transition-colors">
            Get A Quote
          </button>
          <button className="text-sm md:text-base border-2 border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-white/10 transition-colors">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

// Pre-Info Section
const PreInfoHome = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = useMemo(() => [
    { value: "1,500+", label: "Complete Projects" },
    { value: "450+", label: "Team Members" },
    { value: "2,800+", label: "Satisfied Clients" },
  ], []);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 md:py-16 px-4">
      <motion.div 
        ref={statsRef}
        className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12 md:mb-16"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={animations.fadeInUp}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            variants={animations.fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-2">{stat.value}</h2>
            <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-8 lg:px-20">
        <motion.div
          ref={imageRef}
          className="relative flex-1 w-full lg:w-auto"
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={animations.fadeInLeft}
        >
          <motion.img
            src="https://via.placeholder.com/500x350"
            alt="Infrastructure"
            className="w-full rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-4 right-0 md:-bottom-8 md:-right-16 bg-red-800 text-white p-6 md:p-10 rounded-lg text-center"
            variants={animations.scaleIn}
          >
            <h3 className="text-3xl md:text-4xl font-bold">30<span>+</span></h3>
            <p className="mt-2 text-sm md:text-base">Years of experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={textRef}
          className="flex-1 pl-0 lg:pl-20 text-center lg:text-left mt-12 lg:mt-0"
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={animations.fadeInRight}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Transforming Vision into Reality Through Experience.
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            To establish ourselves as an internationally respected engineering
            consultant, offering comprehensive and innovative solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Popular Services Section
const PopularServiceHome = () => {
  const services = useMemo(() => [
    {
      title: "Water Supply",
      description: "Designing and enhancing water supply networks for efficient distribution.",
      icon: "💧"
    },
    { 
      title: "Waste Water Management", 
      description: "Advanced waste water treatment and management systems.", 
      icon: "🌊"
    },
    { 
      title: "Civil Engineering", 
      description: "Comprehensive civil engineering solutions.", 
      icon: "🏗️"
    },
    { 
      title: "Transportation", 
      description: "Modern transportation infrastructure development.", 
      icon: "🚆"
    },
    { 
      title: "Solid Waste Management", 
      description: "Efficient solid waste disposal and recycling solutions.", 
      icon: "♻️"
    },
    { 
      title: "Coastal Conservation", 
      description: "Sustainable coastal development and protection.", 
      icon: "🌊"
    },
  ], []);

  return (
    <div className="bg-gray-900 text-white py-8 md:py-16 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1 min-w-[250px] lg:pr-8 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Domain of Expertise</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            We prioritize safe, reliable, and operationally efficient designs 
            tailored to your requirements.
          </p>
          <Link 
            to="/ServicePage" 
            className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors text-sm md:text-base"
          >
            Explore More
          </Link>
        </div>

        <div className="lg:flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 md:p-8 rounded-lg text-center border border-gray-700 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = useMemo(() => [
    { 
      id: 1, 
      title: "Urban Development", 
      description: "Sustainable urban infrastructure development", 
      image: "https://via.placeholder.com/300" 
    },
    { 
      id: 2, 
      title: "Water Treatment", 
      description: "Modern water treatment facility", 
      image: "https://via.placeholder.com/300" 
    },
    { 
      id: 3, 
      title: "Transport Hub", 
      description: "Integrated transportation center", 
      image: "https://via.placeholder.com/300" 
    },
  ], []);

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactUsSecHome = () => {
  return (
    <section 
      className="relative py-12 md:py-24 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp9292042.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Building today for a sustainable tomorrow.
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-10">
          We believe in creating and not just in building structures. We are 
          committed to live a lasting legacy, combining cutting edge technology
          and skilled resources.
        </p>
        <button 
          className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105 duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};


// Main Home Component with mobile navigation
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Close menu on route change
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      setIsMenuOpen(false);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 lg:hidden bg-red-600 p-2 rounded-full text-white shadow-lg"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 lg:hidden transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <Link 
            to="/"
            className="text-white text-xl py-4 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="text-white text-xl py-4 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/services"
            className="text-white text-xl py-4 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/projects"
            className="text-white text-xl py-4 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact"
            className="text-white text-xl py-4 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <PreInfoHome />
        <PopularServiceHome />
        <ProjectsSection />
        <ContactUsSecHome />
        <ProjectCards />
        <SpeedInsights />
      </main>

      {/* Back to Top Button - shows after scrolling */}
      <BackToTopButton />
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default React.memo(Home);

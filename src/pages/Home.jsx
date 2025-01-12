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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
      className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat text-white text-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="max-w-4xl px-8">
        <h1 className="text-5xl mb-4 font-bold">Building today for a sustainable tomorrow.</h1>
        <p className="text-xl mb-8">
          We provide high-quality engineering and project management solutions,
          focusing on safety, efficiency, and cost-effectiveness. Built on
          integrity and innovation, we strive to create lasting value for our
          clients and industry.
        </p>
        <div className="space-x-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors">
            Get A Quote
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
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
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <motion.div 
        ref={statsRef}
        className="flex justify-center gap-12 mb-16"
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
            <h2 className="text-4xl font-bold text-red-800 mb-2">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center gap-8 px-20">
        <motion.div
          ref={imageRef}
          className="relative flex-1"
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
            className="absolute -bottom-8 -right-16 bg-red-800 text-white p-10 rounded-lg text-center"
            variants={animations.scaleIn}
          >
            <h3 className="text-4xl font-bold">30<span>+</span></h3>
            <p className="mt-2">Years of experience</p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={textRef}
          className="flex-1 pl-20"
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={animations.fadeInRight}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transforming Vision into Reality Through Experience.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To establish ourselves as an internationally respected engineering
            consultant, offering comprehensive and innovative solutions. We are
            committed to unmatched performance, unparalleled accountability,
            and exceptional client satisfaction.
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
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[250px] pr-8">
          <h2 className="text-4xl font-bold mb-4">Our Domain of Expertise</h2>
          <p className="text-gray-300 mb-6">
            We prioritize safe, reliable, and operationally efficient designs 
            tailored to your requirements.
          </p>
          <Link 
            to="/ServicePage" 
            className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Explore More
          </Link>
        </div>

        <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
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
    <section className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      className="py-24 bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp9292042.jpg')" }}
    >
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl font-bold mb-6">
          Building today for a sustainable tomorrow.
        </h1>
        <p className="text-xl mb-10">
          We believe in creating and not just in building structures. We are 
          committed to live a lasting legacy, we combine cutting edge technology, 
          ethical practices and expert and skilled human resources to deliver 
          our client's requirement.
        </p>
        <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
          Contact Us
        </button>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PreInfoHome />
      <PopularServiceHome />
      <ProjectsSection />
      <ContactUsSecHome />
      <ProjectCards />
      <SpeedInsights />
    </div>
  );
};

export default React.memo(Home);

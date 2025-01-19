import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import SingleProject from "./pages/SingleProject";
import Brochures from "./pages/Brochures";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Breakthrough from "./pages/Breakthrough";
import ServicePage from "./pages/ServicePage";
import Error404 from "./pages/Error404"; // Error Page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all the routes */}
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/breakthrough" element={<Breakthrough />} />
        <Route path="/servicepage" element={<ServicePage />} />
        {/* Dynamic Project Page */}
        <Route path="/Project/:service/:projectTitle" element={<SingleProject />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

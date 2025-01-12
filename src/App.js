import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error404 from "./pages/Error404"; 
import FAQ from "./pages/FAQ";
import SingleProject from "./pages/SingleProject";
import Brochures from "./pages/Brochures";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Breakthrough from "./pages/Breakthrough";
import ServicePage from "./pages/ServicePage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define all your valid routes */}
        <Route path="/" element={<Home />} />
        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<Error404 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/SingleProject" element={<SingleProject />} />
        <Route path="/Brochures" element={<Brochures />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Contact" element=
        {<Contact/>} />
        <Route path="/Breakthrough" element={<Breakthrough />} />
        <Route path="/ServicePage" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

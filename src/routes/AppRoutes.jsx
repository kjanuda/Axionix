import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar.jsx";
import Header from "../Pages/Home/Header.jsx";
import Overview from "../Pages/Home/overview.jsx";
import Explain from "../Pages/Home/Explain.jsx";
import Others from "../Pages/Home/others.jsx";
import Footer from "../Pages/Home/Footer.jsx"; 

// Create a Home page component that includes both Header and Overview
const HomePage = () => {
  return (
    <>
      <Header />
      <Overview />
      <Explain />
      <Others />
    </>
  );
};

const AppRoute = () => {
  return (
    <>
      {/* Navbar will be visible on all pages */}
      <Navbar />
      
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      {/* Footer will be visible on all pages */}
      <Footer />
    </>
  );
};

export default AppRoute;
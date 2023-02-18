import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import About from "../pages/About/about";
import Contact from "../pages/Contact/Contact";

const Layout = () => {
    return (
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    );
};

export default Layout;

import React from "react";

import Logo from "../assets/Logo.jpg"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <img src={Logo} alt="School Logo" className="navbar-logo" / >
      <div className="navbar-titles">
        <h3>RAYAT SHIKSHAN SANSTHA's</h3>
        <h1>Dr. Shankarrao Kolate Vidyalaya & Junior College Pisarve</h1>
      </div>
    </div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#admissions">Admissions</a></li>
      <li><a href="#faculty">Faculty</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;

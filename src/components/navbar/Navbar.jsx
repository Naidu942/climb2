import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navcontainer'>
    <nav className="navbar">
      <h1 className="logo">CLIMB</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#Startups">Startups</a></li>
        <li><a href="#Blogs">Blogs</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
    </div>
  );
};

export default Navbar;

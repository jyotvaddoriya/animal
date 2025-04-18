import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <div className="logo">MyLogo</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/reptiles">Reptiles</Link>
          <Link to="/snakes">Snakes</Link>
          <Link to="/land">Land animal</Link>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;